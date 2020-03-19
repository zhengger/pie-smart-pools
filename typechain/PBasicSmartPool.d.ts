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

    bPool: TypedFunctionDescription<{ encode([]: []): string }>;

    balanceOf: TypedFunctionDescription<{ encode([_whom]: [string]): string }>;

    controller: TypedFunctionDescription<{ encode([]: []): string }>;

    decimals: TypedFunctionDescription<{ encode([]: []): string }>;

    decreaseApproval: TypedFunctionDescription<{
      encode([_dst, _amount]: [string, BigNumberish]): string;
    }>;

    exitPool: TypedFunctionDescription<{
      encode([_amount]: [BigNumberish]): string;
    }>;

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

    joinPool: TypedFunctionDescription<{
      encode([_amount]: [BigNumberish]): string;
    }>;

    name: TypedFunctionDescription<{ encode([]: []): string }>;

    setController: TypedFunctionDescription<{
      encode([_controller]: [string]): string;
    }>;

    symbol: TypedFunctionDescription<{ encode([]: []): string }>;

    totalSupply: TypedFunctionDescription<{ encode([]: []): string }>;

    transfer: TypedFunctionDescription<{
      encode([_dst, _amount]: [string, BigNumberish]): string;
    }>;

    transferFrom: TypedFunctionDescription<{
      encode([_src, _dst, _amount]: [string, string, BigNumberish]): string;
    }>;
  };

  events: {
    Approval: TypedEventDescription<{
      encodeTopics([_src, _dst, _amount]: [
        string | null,
        string | null,
        null
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

    bPool(): Promise<string>;

    balanceOf(_whom: string): Promise<BigNumber>;

    controller(): Promise<string>;

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

    joinPool(
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    name(): Promise<string>;

    setController(
      _controller: string,
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

  bPool(): Promise<string>;

  balanceOf(_whom: string): Promise<BigNumber>;

  controller(): Promise<string>;

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

  joinPool(
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  name(): Promise<string>;

  setController(
    _controller: string,
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

  filters: {
    Approval(
      _src: string | null,
      _dst: string | null,
      _amount: null
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

    bPool(): Promise<BigNumber>;

    balanceOf(_whom: string): Promise<BigNumber>;

    controller(): Promise<BigNumber>;

    decimals(): Promise<BigNumber>;

    decreaseApproval(_dst: string, _amount: BigNumberish): Promise<BigNumber>;

    exitPool(_amount: BigNumberish): Promise<BigNumber>;

    increaseApproval(_dst: string, _amount: BigNumberish): Promise<BigNumber>;

    init(
      _bPool: string,
      _name: string,
      _symbol: string,
      _initialSupply: BigNumberish
    ): Promise<BigNumber>;

    joinPool(_amount: BigNumberish): Promise<BigNumber>;

    name(): Promise<BigNumber>;

    setController(_controller: string): Promise<BigNumber>;

    symbol(): Promise<BigNumber>;

    totalSupply(): Promise<BigNumber>;

    transfer(_dst: string, _amount: BigNumberish): Promise<BigNumber>;

    transferFrom(
      _src: string,
      _dst: string,
      _amount: BigNumberish
    ): Promise<BigNumber>;
  };
}
