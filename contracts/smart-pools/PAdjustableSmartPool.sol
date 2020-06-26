pragma solidity 0.6.4;

import "./PCappedSmartPool.sol";
import { PAdjustableSmartPoolStorage as PAStorage } from "./storage/PAdjustableSmartPoolStorage.sol";
import "./libraries/LibRemoveToken.sol";

// Based on Balancer configurable weights pool

contract PAdjustableSmartPool is PCappedSmartPool {
  uint256 public constant MIN_WEIGHT = 10**18;
  uint256 public constant MAX_WEIGHT = 10**18 * 50;
  uint256 public constant MAX_TOTAL_WEIGHT = 10**18 * 50;
  uint256 public constant MIN_BALANCE = (10**18) / (10**12);

  function updateWeight(address _token, uint256 _newWeight) external noReentry onlyController {
    pbs storage s = lpbs();

    require(_newWeight >= MIN_WEIGHT, "ERR_MIN_WEIGHT");
    require(_newWeight <= MAX_WEIGHT, "ERR_MAX_WEIGHT");

    uint256 currentWeight = s.bPool.getDenormalizedWeight(_token);
    uint256 currentBalance = s.bPool.getBalance(_token);
    uint256 poolShares;
    uint256 deltaBalance;
    uint256 deltaWeight;
    uint256 totalSupply = totalSupply();
    uint256 totalWeight = s.bPool.getTotalDenormalizedWeight();

    if (_newWeight < currentWeight) {
      // If weight goes down we need to pull tokens and burn pool shares
      require(
        totalWeight.badd(currentWeight.bsub(_newWeight)) <= MAX_TOTAL_WEIGHT,
        "ERR_MAX_TOTAL_WEIGHT"
      );

      deltaWeight = currentWeight.bsub(_newWeight);

      poolShares = totalSupply.bmul(deltaWeight.bdiv(totalWeight));

      deltaBalance = currentBalance.bmul(deltaWeight.bdiv(currentWeight));

      // New balance cannot be lower than MIN_BALANCE
      require(currentBalance.bsub(deltaBalance) >= MIN_BALANCE, "ERR_MIN_BALANCE");
      // First gets the tokens from this contract (Pool Controller) to msg.sender
      s.bPool.rebind(_token, currentBalance.bsub(deltaBalance), _newWeight);

      // Now with the tokens this contract can send them to msg.sender
      require(IERC20(_token).transfer(msg.sender, deltaBalance), "ERR_ERC20_FALSE");

      _pullPoolShare(msg.sender, poolShares);
      _burnPoolShare(poolShares);
    } else {
      // This means the controller will deposit tokens to keep the price.
      // They will be minted and given PCTokens
      require(
        totalWeight.badd(_newWeight.bsub(currentWeight)) <= MAX_TOTAL_WEIGHT,
        "ERR_MAX_TOTAL_WEIGHT"
      );

      deltaWeight = _newWeight.bsub(currentWeight);
      poolShares = totalSupply.bmul(deltaWeight.bdiv(totalWeight));
      deltaBalance = currentBalance.bmul(deltaWeight.bdiv(currentWeight));

      // First gets the tokens from msg.sender to this contract (Pool Controller)
      require(
        IERC20(_token).transferFrom(msg.sender, address(this), deltaBalance),
        "TRANSFER_FAILED"
      );
      // Now with the tokens this contract can bind them to the pool it controls
      s.bPool.rebind(_token, currentBalance.badd(deltaBalance), _newWeight);

      _mintPoolShare(poolShares);
      _pushPoolShare(msg.sender, poolShares);
    }
  }

  // Let external actors poke the contract with pokeWeights(),
  // to slowly get to newWeights at endBlock
  function updateWeightsGradually(
    uint256[] calldata _newWeights,
    uint256 _startBlock,
    uint256 _endBlock
  ) external noReentry onlyController {
    pbs storage s = lpbs();
    PAStorage.StorageStruct storage ws = PAStorage.load();

    uint256 weightsSum = 0;
    address[] memory tokens = s.bPool.getCurrentTokens();
    // Check that endWeights are valid now to avoid reverting in a future pokeWeights call
    for (uint256 i = 0; i < tokens.length; i++) {
      require(_newWeights[i] <= MAX_WEIGHT, "ERR_WEIGHT_ABOVE_MAX");
      require(_newWeights[i] >= MIN_WEIGHT, "ERR_WEIGHT_BELOW_MIN");
      weightsSum = weightsSum.badd(_newWeights[i]);
    }
    require(weightsSum <= MAX_TOTAL_WEIGHT, "ERR_MAX_TOTAL_WEIGHT");

    if (block.number > _startBlock) {
      // This means the weight update should start ASAP
      ws.startBlock = block.number;
    } else {
        ws.startBlock = _startBlock;
    }
    ws.endBlock = _endBlock;
    ws.newWeights = _newWeights;

    require(
      _endBlock > _startBlock,
      "PWeightControlledSmartPool.updateWeightsGradually: End block must be after start block"
    );

    delete ws.startWeights;

    for (uint256 i = 0; i < tokens.length; i++) {
      // startWeights are current weights
      ws.startWeights.push(s.bPool.getDenormalizedWeight(tokens[i]));
    }
  }

  function pokeWeights() external noReentry {
    PAStorage.StorageStruct storage ws = PAStorage.load();
    pbs storage s = lpbs();
    require(block.number >= ws.startBlock, "ERR_CANT_POKE_YET");

    // This allows for pokes after endBlock that get weights to endWeights
    uint256 minBetweenEndBlockAndThisBlock;
    if (block.number > ws.endBlock) {
      minBetweenEndBlockAndThisBlock = ws.endBlock;
    } else {
      minBetweenEndBlockAndThisBlock = block.number;
    }

    uint256 blockPeriod = ws.endBlock.bsub(ws.startBlock);
    uint256 weightDelta;
    uint256 newWeight;
    address[] memory tokens = s.bPool.getCurrentTokens();
    for (uint256 i = 0; i < tokens.length; i++) {
      if (ws.startWeights[i] >= ws.newWeights[i]) {
        weightDelta = ws.startWeights[i].bsub(ws.newWeights[i]);
        newWeight = ws.startWeights[i].bsub(
          (minBetweenEndBlockAndThisBlock.bsub(ws.startBlock)).bmul(weightDelta.bdiv(blockPeriod))
        );
      } else {
        weightDelta = ws.newWeights[i].bsub(ws.startWeights[i]);
        newWeight = ws.startWeights[i].badd(
          (minBetweenEndBlockAndThisBlock.bsub(ws.startBlock)).bmul(weightDelta.bdiv(blockPeriod))
        );
      }
      s.bPool.rebind(tokens[i], s.bPool.getBalance(tokens[i]), newWeight);
    }
  }

  function applyAddToken() external noReentry onlyController {
    PAStorage.StorageStruct storage ws = PAStorage.load();
    pbs storage s = lpbs();

    require(ws.newToken.isCommitted, "ERR_NO_TOKEN_COMMIT");

    uint totalSupply = totalSupply();

    uint poolShares = totalSupply.bmul(ws.newToken.denorm).bdiv(s.bPool.getTotalDenormalizedWeight());

    ws.newToken.isCommitted = false;

    require(IERC20(ws.newToken.addr).transferFrom(msg.sender, address(this), ws.newToken.balance), "ERR_ERC20_FALSE");
    // Now with the tokens this contract can bind them to the pool it controls
    IERC20(ws.newToken.addr).approve(address(s.bPool), uint(-1));   // Approves bPool to pull from this controller
    s.bPool.bind(ws.newToken.addr, ws.newToken.balance, ws.newToken.denorm);
    _mintPoolShare(poolShares);
    _pushPoolShare(msg.sender, poolShares);
  }

  function commitAddToken(address _token, uint256 _balance, uint256 _denormalizedWeight)
      external
      noReentry
      onlyController
  {
    PAStorage.StorageStruct storage ws = PAStorage.load();
    pbs storage s = lpbs();
    require(!s.bPool.isBound(_token), "ERR_IS_BOUND");
    require(_denormalizedWeight <= MAX_WEIGHT, "ERR_WEIGHT_ABOVE_MAX");
    require(_denormalizedWeight >= MIN_WEIGHT, "ERR_WEIGHT_BELOW_MIN");
    require(s.bPool.getTotalDenormalizedWeight().badd(_denormalizedWeight) <= MAX_TOTAL_WEIGHT, "ERR_MAX_TOTAL_WEIGHT");

    ws.newToken.addr = _token;
    ws.newToken.balance = _balance;
    ws.newToken.denorm = _denormalizedWeight;
    ws.newToken.commitBlock = block.number;
    ws.newToken.isCommitted = true;
  }

  function removeToken(address _token) external noReentry onlyController {
    LibRemoveToken.removeToken(_token);
  }

  function getDenormalizedWeights() external view returns (uint256[] memory weights) {
    pbs storage s = lpbs();
    address[] memory tokens = s.bPool.getCurrentTokens();
    weights = new uint256[](tokens.length);
    for (uint256 i = 0; i < tokens.length; i++) {
      weights[i] = s.bPool.getDenormalizedWeight(tokens[i]);
    }
  }

  function getNewWeights() external view returns (uint256[] memory weights) {
    return PAStorage.load().newWeights;
  }

  function getStartWeights() external view returns (uint256[] memory weights) {
    return PAStorage.load().startWeights;
  }

  function getStartBlock() external view returns (uint256) {
    return PAStorage.load().startBlock;
  }

  function getEndBlock() external view returns (uint256) {
    return PAStorage.load().endBlock;
  }

}