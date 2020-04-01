/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface PBasicSmartPoolInterface extends Interface {
  functions: {
    BONE: TypedFunctionDescription<{ encode([]: []): string }>;

    MAX_BALANCE: TypedFunctionDescription<{ encode([]: []): string }>;

    MAX_BOUND_TOKENS: TypedFunctionDescription<{ encode([]: []): string }>;

    MAX_TOTAL_WEIGHT: TypedFunctionDescription<{ encode([]: []): string }>;

    MAX_WEIGHT: TypedFunctionDescription<{ encode([]: []): string }>;

    MIN_BALANCE: TypedFunctionDescription<{ encode([]: []): string }>;

    MIN_POOL_SUPPLY: TypedFunctionDescription<{ encode([]: []): string }>;

    MIN_WEIGHT: TypedFunctionDescription<{ encode([]: []): string }>;

    allowance: TypedFunctionDescription<{
      encode([_src, _dst]: [string, string]): string;
    }>;

    approve: TypedFunctionDescription<{
      encode([_dst, _amount]: [string, BigNumberish]): string;
    }>;

    approveTokens: TypedFunctionDescription<{ encode([]: []): string }>;

    balanceOf: TypedFunctionDescription<{ encode([_whom]: [string]): string }>;

    bind: TypedFunctionDescription<{
      encode([_token, _balance, _denorm]: [
        string,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    calcTokensForAmount: TypedFunctionDescription<{
      encode([_amount]: [BigNumberish]): string;
    }>;

    decimals: TypedFunctionDescription<{ encode([]: []): string }>;

    decreaseApproval: TypedFunctionDescription<{
      encode([_dst, _amount]: [string, BigNumberish]): string;
    }>;

    exitPool: TypedFunctionDescription<{
      encode([_amount]: [BigNumberish]): string;
    }>;

    getBPool: TypedFunctionDescription<{ encode([]: []): string }>;

    getController: TypedFunctionDescription<{ encode([]: []): string }>;

    getPublicSwapSetter: TypedFunctionDescription<{ encode([]: []): string }>;

    getSwapFee: TypedFunctionDescription<{ encode([]: []): string }>;

    getTokenBinder: TypedFunctionDescription<{ encode([]: []): string }>;

    getTokens: TypedFunctionDescription<{ encode([]: []): string }>;

    increaseApproval: TypedFunctionDescription<{
      encode([_dst, _amount]: [string, BigNumberish]): string;
    }>;

    init: TypedFunctionDescription<{
      encode([_bPool, _name, _symbol, _initialSupply]: [
        string,
        string,
        string,
        BigNumberish
      ]): string;
    }>;

    isPublicSwap: TypedFunctionDescription<{ encode([]: []): string }>;

    joinPool: TypedFunctionDescription<{
      encode([_amount]: [BigNumberish]): string;
    }>;

    name: TypedFunctionDescription<{ encode([]: []): string }>;

    pbsSlot: TypedFunctionDescription<{ encode([]: []): string }>;

    ptSlot: TypedFunctionDescription<{ encode([]: []): string }>;

    rebind: TypedFunctionDescription<{
      encode([_token, _balance, _denorm]: [
        string,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    rpSlot: TypedFunctionDescription<{ encode([]: []): string }>;

    setController: TypedFunctionDescription<{
      encode([_controller]: [string]): string;
    }>;

    setPublicSwap: TypedFunctionDescription<{
      encode([_public]: [boolean]): string;
    }>;

    setPublicSwapSetter: TypedFunctionDescription<{
      encode([_newPublicSwapSetter]: [string]): string;
    }>;

    setSwapFee: TypedFunctionDescription<{
      encode([_swapFee]: [BigNumberish]): string;
    }>;

    setTokenBinder: TypedFunctionDescription<{
      encode([_newTokenBinder]: [string]): string;
    }>;

    symbol: TypedFunctionDescription<{ encode([]: []): string }>;

    totalSupply: TypedFunctionDescription<{ encode([]: []): string }>;

    transfer: TypedFunctionDescription<{
      encode([_dst, _amount]: [string, BigNumberish]): string;
    }>;

    transferFrom: TypedFunctionDescription<{
      encode([_src, _dst, _amount]: [string, string, BigNumberish]): string;
    }>;

    unbind: TypedFunctionDescription<{ encode([_token]: [string]): string }>;
  };

  events: {
    Approval: TypedEventDescription<{
      encodeTopics([_src, _dst, _amount]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;

    ControllerChanged: TypedEventDescription<{
      encodeTopics([previousController, newController]: [
        string | null,
        string | null
      ]): string[];
    }>;

    LOG_EXIT: TypedEventDescription<{
      encodeTopics([caller, tokenOut, tokenAmountOut]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;

    LOG_JOIN: TypedEventDescription<{
      encodeTopics([caller, tokenIn, tokenAmountIn]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;

    PoolExited: TypedEventDescription<{
      encodeTopics([from, amount]: [string | null, null]): string[];
    }>;

    PoolJoined: TypedEventDescription<{
      encodeTopics([from, amount]: [string | null, null]): string[];
    }>;

    PublicSwapSet: TypedEventDescription<{
      encodeTopics([setter, value]: [string | null, boolean | null]): string[];
    }>;

    PublicSwapSetterChanged: TypedEventDescription<{
      encodeTopics([previousSetter, newSetter]: [
        string | null,
        string | null
      ]): string[];
    }>;

    SwapFeeSet: TypedEventDescription<{
      encodeTopics([setter, newFee]: [string | null, null]): string[];
    }>;

    TokenBinderChanged: TypedEventDescription<{
      encodeTopics([previousTokenBinder, newTokenBinder]: [
        string | null,
        string | null
      ]): string[];
    }>;

    TokensApproved: TypedEventDescription<{ encodeTopics([]: []): string[] }>;

    Transfer: TypedEventDescription<{
      encodeTopics([_src, _dst, _amount]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;
  };
}

export class PBasicSmartPool extends Contract {
  connect(signerOrProvider: Signer | Provider | string): PBasicSmartPool;
  attach(addressOrName: string): PBasicSmartPool;
  deployed(): Promise<PBasicSmartPool>;

  on(event: EventFilter | string, listener: Listener): PBasicSmartPool;
  once(event: EventFilter | string, listener: Listener): PBasicSmartPool;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): PBasicSmartPool;
  removeAllListeners(eventName: EventFilter | string): PBasicSmartPool;
  removeListener(eventName: any, listener: Listener): PBasicSmartPool;

  interface: PBasicSmartPoolInterface;

  functions: {
    BONE(): Promise<BigNumber>;

    MAX_BALANCE(): Promise<BigNumber>;

    MAX_BOUND_TOKENS(): Promise<BigNumber>;

    MAX_TOTAL_WEIGHT(): Promise<BigNumber>;

    MAX_WEIGHT(): Promise<BigNumber>;

    MIN_BALANCE(): Promise<BigNumber>;

    MIN_POOL_SUPPLY(): Promise<BigNumber>;

    MIN_WEIGHT(): Promise<BigNumber>;

    allowance(_src: string, _dst: string): Promise<BigNumber>;

    approve(
      _dst: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    approveTokens(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    balanceOf(_whom: string): Promise<BigNumber>;

    bind(
      _token: string,
      _balance: BigNumberish,
      _denorm: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    calcTokensForAmount(
      _amount: BigNumberish
    ): Promise<{
      tokens: string[];
      amounts: BigNumber[];
      0: string[];
      1: BigNumber[];
    }>;

    decimals(): Promise<number>;

    decreaseApproval(
      _dst: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    exitPool(
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getBPool(): Promise<string>;

    getController(): Promise<string>;

    getPublicSwapSetter(): Promise<string>;

    getSwapFee(): Promise<BigNumber>;

    getTokenBinder(): Promise<string>;

    getTokens(): Promise<string[]>;

    increaseApproval(
      _dst: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    init(
      _bPool: string,
      _name: string,
      _symbol: string,
      _initialSupply: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    isPublicSwap(): Promise<boolean>;

    joinPool(
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    name(): Promise<string>;

    pbsSlot(): Promise<string>;

    ptSlot(): Promise<string>;

    rebind(
      _token: string,
      _balance: BigNumberish,
      _denorm: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    rpSlot(): Promise<string>;

    setController(
      _controller: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setPublicSwap(
      _public: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setPublicSwapSetter(
      _newPublicSwapSetter: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setSwapFee(
      _swapFee: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setTokenBinder(
      _newTokenBinder: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    symbol(): Promise<string>;

    totalSupply(): Promise<BigNumber>;

    transfer(
      _dst: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transferFrom(
      _src: string,
      _dst: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    unbind(
      _token: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  BONE(): Promise<BigNumber>;

  MAX_BALANCE(): Promise<BigNumber>;

  MAX_BOUND_TOKENS(): Promise<BigNumber>;

  MAX_TOTAL_WEIGHT(): Promise<BigNumber>;

  MAX_WEIGHT(): Promise<BigNumber>;

  MIN_BALANCE(): Promise<BigNumber>;

  MIN_POOL_SUPPLY(): Promise<BigNumber>;

  MIN_WEIGHT(): Promise<BigNumber>;

  allowance(_src: string, _dst: string): Promise<BigNumber>;

  approve(
    _dst: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  approveTokens(overrides?: TransactionOverrides): Promise<ContractTransaction>;

  balanceOf(_whom: string): Promise<BigNumber>;

  bind(
    _token: string,
    _balance: BigNumberish,
    _denorm: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  calcTokensForAmount(
    _amount: BigNumberish
  ): Promise<{
    tokens: string[];
    amounts: BigNumber[];
    0: string[];
    1: BigNumber[];
  }>;

  decimals(): Promise<number>;

  decreaseApproval(
    _dst: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  exitPool(
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getBPool(): Promise<string>;

  getController(): Promise<string>;

  getPublicSwapSetter(): Promise<string>;

  getSwapFee(): Promise<BigNumber>;

  getTokenBinder(): Promise<string>;

  getTokens(): Promise<string[]>;

  increaseApproval(
    _dst: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  init(
    _bPool: string,
    _name: string,
    _symbol: string,
    _initialSupply: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  isPublicSwap(): Promise<boolean>;

  joinPool(
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  name(): Promise<string>;

  pbsSlot(): Promise<string>;

  ptSlot(): Promise<string>;

  rebind(
    _token: string,
    _balance: BigNumberish,
    _denorm: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  rpSlot(): Promise<string>;

  setController(
    _controller: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setPublicSwap(
    _public: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setPublicSwapSetter(
    _newPublicSwapSetter: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setSwapFee(
    _swapFee: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setTokenBinder(
    _newTokenBinder: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  symbol(): Promise<string>;

  totalSupply(): Promise<BigNumber>;

  transfer(
    _dst: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  transferFrom(
    _src: string,
    _dst: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  unbind(
    _token: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    Approval(
      _src: string | null,
      _dst: string | null,
      _amount: null
    ): EventFilter;

    ControllerChanged(
      previousController: string | null,
      newController: string | null
    ): EventFilter;

    LOG_EXIT(
      caller: string | null,
      tokenOut: string | null,
      tokenAmountOut: null
    ): EventFilter;

    LOG_JOIN(
      caller: string | null,
      tokenIn: string | null,
      tokenAmountIn: null
    ): EventFilter;

    PoolExited(from: string | null, amount: null): EventFilter;

    PoolJoined(from: string | null, amount: null): EventFilter;

    PublicSwapSet(setter: string | null, value: boolean | null): EventFilter;

    PublicSwapSetterChanged(
      previousSetter: string | null,
      newSetter: string | null
    ): EventFilter;

    SwapFeeSet(setter: string | null, newFee: null): EventFilter;

    TokenBinderChanged(
      previousTokenBinder: string | null,
      newTokenBinder: string | null
    ): EventFilter;

    TokensApproved(): EventFilter;

    Transfer(
      _src: string | null,
      _dst: string | null,
      _amount: null
    ): EventFilter;
  };

  estimate: {
    BONE(): Promise<BigNumber>;

    MAX_BALANCE(): Promise<BigNumber>;

    MAX_BOUND_TOKENS(): Promise<BigNumber>;

    MAX_TOTAL_WEIGHT(): Promise<BigNumber>;

    MAX_WEIGHT(): Promise<BigNumber>;

    MIN_BALANCE(): Promise<BigNumber>;

    MIN_POOL_SUPPLY(): Promise<BigNumber>;

    MIN_WEIGHT(): Promise<BigNumber>;

    allowance(_src: string, _dst: string): Promise<BigNumber>;

    approve(_dst: string, _amount: BigNumberish): Promise<BigNumber>;

    approveTokens(): Promise<BigNumber>;

    balanceOf(_whom: string): Promise<BigNumber>;

    bind(
      _token: string,
      _balance: BigNumberish,
      _denorm: BigNumberish
    ): Promise<BigNumber>;

    calcTokensForAmount(_amount: BigNumberish): Promise<BigNumber>;

    decimals(): Promise<BigNumber>;

    decreaseApproval(_dst: string, _amount: BigNumberish): Promise<BigNumber>;

    exitPool(_amount: BigNumberish): Promise<BigNumber>;

    getBPool(): Promise<BigNumber>;

    getController(): Promise<BigNumber>;

    getPublicSwapSetter(): Promise<BigNumber>;

    getSwapFee(): Promise<BigNumber>;

    getTokenBinder(): Promise<BigNumber>;

    getTokens(): Promise<BigNumber>;

    increaseApproval(_dst: string, _amount: BigNumberish): Promise<BigNumber>;

    init(
      _bPool: string,
      _name: string,
      _symbol: string,
      _initialSupply: BigNumberish
    ): Promise<BigNumber>;

    isPublicSwap(): Promise<BigNumber>;

    joinPool(_amount: BigNumberish): Promise<BigNumber>;

    name(): Promise<BigNumber>;

    pbsSlot(): Promise<BigNumber>;

    ptSlot(): Promise<BigNumber>;

    rebind(
      _token: string,
      _balance: BigNumberish,
      _denorm: BigNumberish
    ): Promise<BigNumber>;

    rpSlot(): Promise<BigNumber>;

    setController(_controller: string): Promise<BigNumber>;

    setPublicSwap(_public: boolean): Promise<BigNumber>;

    setPublicSwapSetter(_newPublicSwapSetter: string): Promise<BigNumber>;

    setSwapFee(_swapFee: BigNumberish): Promise<BigNumber>;

    setTokenBinder(_newTokenBinder: string): Promise<BigNumber>;

    symbol(): Promise<BigNumber>;

    totalSupply(): Promise<BigNumber>;

    transfer(_dst: string, _amount: BigNumberish): Promise<BigNumber>;

    transferFrom(
      _src: string,
      _dst: string,
      _amount: BigNumberish
    ): Promise<BigNumber>;

    unbind(_token: string): Promise<BigNumber>;
  };
}
