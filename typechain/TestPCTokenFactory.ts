/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TestPCToken } from "./TestPCToken";

export class TestPCTokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(_name: string, _symbol: string): Promise<TestPCToken> {
    return super.deploy(_name, _symbol) as Promise<TestPCToken>;
  }
  getDeployTransaction(_name: string, _symbol: string): UnsignedTransaction {
    return super.getDeployTransaction(_name, _symbol);
  }
  attach(address: string): TestPCToken {
    return super.attach(address) as TestPCToken;
  }
  connect(signer: Signer): TestPCTokenFactory {
    return super.connect(signer) as TestPCTokenFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestPCToken {
    return new Contract(address, _abi, signerOrProvider) as TestPCToken;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string"
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_src",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_dst",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_src",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_dst",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_src",
        type: "address"
      },
      {
        internalType: "address",
        name: "_dst",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_dst",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_whom",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_dst",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "decreaseApproval",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_dst",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "increaseApproval",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "ptSlot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_dst",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_src",
        type: "address"
      },
      {
        internalType: "address",
        name: "_dst",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000e6f38038062000e6f833981810160405260408110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b5060405250505081620001b0620001f760201b60201c565b8151620001c192602001906200022c565b5080620001d66001600160e01b03620001f716565b6001019080519060200190620001ee9291906200022c565b505050620002d1565b604080517f5043546f6b656e2e73746f726167652e6c6f636174696f6e00000000000000008152905190819003601801902090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200026f57805160ff19168380011785556200029f565b828001600101855582156200029f579182015b828111156200029f57825182559160200191906001019062000282565b50620002ad929150620002b1565b5090565b620002ce91905b80821115620002ad5760008155600101620002b8565b90565b610b8e80620002e16000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063661884631161008c578063a9059cbb11610066578063a9059cbb14610287578063d73dd623146102b3578063dd62ed3e146102df578063ec565ffe1461030d576100cf565b8063661884631461022d57806370a082311461025957806395d89b411461027f576100cf565b806306fdde03146100d4578063095ea7b31461015157806318160ddd1461019157806323b872dd146101ab578063313ce567146101e157806340c10f19146101ff575b600080fd5b6100dc610315565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101165781810151838201526020016100fe565b50505050905090810190601f1680156101435780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61017d6004803603604081101561016757600080fd5b506001600160a01b0381351690602001356103ad565b604080519115158252519081900360200190f35b610199610412565b60408051918252519081900360200190f35b61017d600480360360608110156101c157600080fd5b506001600160a01b03813581169160208101359091169060400135610425565b6101e961059a565b6040805160ff9092168252519081900360200190f35b61022b6004803603604081101561021557600080fd5b506001600160a01b03813516906020013561059f565b005b61017d6004803603604081101561024357600080fd5b506001600160a01b0381351690602001356105b6565b6101996004803603602081101561026f57600080fd5b50356001600160a01b03166106ab565b6100dc6106d7565b61017d6004803603604081101561029d57600080fd5b506001600160a01b03813516906020013561073d565b61017d600480360360408110156102c957600080fd5b506001600160a01b038135169060200135610753565b610199600480360360408110156102f557600080fd5b506001600160a01b03813581169160200135166107ed565b610199610827565b606061031f610857565b805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156103a35780601f10610378576101008083540402835291602001916103a3565b820191906000526020600020905b81548152906001019060200180831161038657829003601f168201915b5050505050905090565b6000816103b8610857565b336000818152600492909201602090815260408084206001600160a01b03891680865290835293819020949094558351868152935192939192600080516020610b398339815191529281900390910190a350600192915050565b600061041c610857565b60020154905090565b600080610430610857565b9050336001600160a01b038616148061046e57506001600160a01b038516600090815260048201602090815260408083203384529091529020548311155b6104b8576040805162461bcd60e51b815260206004820152601660248201527522a9292fa821aa27a5a2a72fa120a22fa1a0a62622a960511b604482015290519081900360640190fd5b6104c3858585610887565b336001600160a01b0386161480159061050357506001600160a01b0385166000908152600482016020908152604080832033845290915290205460001914155b1561058f576001600160a01b0385166000908152600482016020908152604080832033845290915290205461053e908463ffffffff6109bb16565b6001600160a01b03868116600090815260048401602090815260408083203380855290835292819020859055805194855251928816939192600080516020610b398339815191529281900390910190a35b506001949350505050565b601281565b6105a881610a1d565b6105b28282610ab4565b5050565b6000806105c1610857565b33600090815260048201602090815260408083206001600160a01b03891684529091529020549091508084111561061d5733600090815260048301602090815260408083206001600160a01b0389168452909152812055610654565b61062d818563ffffffff6109bb16565b33600090815260048401602090815260408083206001600160a01b038a1684529091529020555b33600081815260048401602090815260408083206001600160a01b038a16808552908352928190205481519081529051929392600080516020610b39833981519152929181900390910190a3506001949350505050565b60006106b5610857565b6001600160a01b03929092166000908152600390920160205250604090205490565b60606106e1610857565b60019081018054604080516020600295841615610100026000190190931694909404601f8101839004830285018301909152808452908301828280156103a35780601f10610378576101008083540402835291602001916103a3565b600061074a338484610887565b50600192915050565b60008061075e610857565b33600090815260048201602090815260408083206001600160a01b0389168452909152902054909150610797908463ffffffff610abf16565b33600081815260048401602090815260408083206001600160a01b038a16808552908352928190208590558051948552519193600080516020610b39833981519152929081900390910190a35060019392505050565b60006107f7610857565b6001600160a01b039384166000908152600491909101602090815260408083209490951682529290925250205490565b60408051772821aa37b5b2b71739ba37b930b3b2973637b1b0ba34b7b760411b8152905190819003601801902081565b60408051772821aa37b5b2b71739ba37b930b3b2973637b1b0ba34b7b760411b8152905190819003601801902090565b6000610891610857565b6001600160a01b03851660009081526003820160205260409020549091508211156108fa576040805162461bcd60e51b815260206004820152601460248201527311549497d25394d551919250d251539517d0905360621b604482015290519081900360640190fd5b6001600160a01b0384166000908152600382016020526040902054610925908363ffffffff6109bb16565b6001600160a01b038086166000908152600384016020526040808220939093559085168152205461095c908363ffffffff610abf16565b6001600160a01b03808516600081815260038501602090815260409182902094909455805186815290519193928816927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a350505050565b60008060006109ca8585610b13565b915091508015610a15576040805162461bcd60e51b81526020600482015260116024820152704552525f5355425f554e444552464c4f5760781b604482015290519081900360640190fd5b509392505050565b6000610a27610857565b306000908152600382016020526040902054909150610a4c908363ffffffff610abf16565b3060009081526003830160205260409020556002810154610a73908363ffffffff610abf16565b600282015560408051838152905130916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b6105b2308383610887565b600082820183811015610b0c576040805162461bcd60e51b815260206004820152601060248201526f4552525f4144445f4f564552464c4f5760801b604482015290519081900360640190fd5b9392505050565b600080828410610b295750508082036000610b31565b505081810360015b925092905056fe8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925a26469706673582212205169efa60591762a409249f26829e0799cb6dd08d6eddfcbec499ac910d1b48a64736f6c63430006040033";