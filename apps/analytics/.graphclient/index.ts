// @ts-nocheck
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { GraphQLSchema, ExecutionResult } from 'graphql';

import { compileQuery, isCompiledQuery, CompilerOptions } from 'graphql-jit';
import { AggregateError, isAsyncIterable, mapAsyncIterator } from '@graphql-tools/utils';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type BentoBox = {
  id: Scalars['ID'];
  protocols?: Maybe<Array<Protocol>>;
  users?: Maybe<Array<User>>;
  tokens?: Maybe<Array<Token>>;
  masterContracts: Array<MasterContract>;
  clones?: Maybe<Array<Clone>>;
  flashloans?: Maybe<Array<FlashLoan>>;
  transactions?: Maybe<Array<Transaction>>;
  protocolCount: Scalars['BigInt'];
  userCount: Scalars['BigInt'];
  tokenCount: Scalars['BigInt'];
  masterContractCount: Scalars['BigInt'];
  cloneCount: Scalars['BigInt'];
  flashloanCount: Scalars['BigInt'];
  transactionCount: Scalars['BigInt'];
};


export type BentoBoxprotocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Protocol_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Protocol_filter>;
};


export type BentoBoxusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
};


export type BentoBoxtokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
};


export type BentoBoxmasterContractsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterContract_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MasterContract_filter>;
};


export type BentoBoxclonesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Clone_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Clone_filter>;
};


export type BentoBoxflashloansArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlashLoan_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlashLoan_filter>;
};


export type BentoBoxtransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
};

export type BentoBox_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  protocolCount?: InputMaybe<Scalars['BigInt']>;
  protocolCount_not?: InputMaybe<Scalars['BigInt']>;
  protocolCount_gt?: InputMaybe<Scalars['BigInt']>;
  protocolCount_lt?: InputMaybe<Scalars['BigInt']>;
  protocolCount_gte?: InputMaybe<Scalars['BigInt']>;
  protocolCount_lte?: InputMaybe<Scalars['BigInt']>;
  protocolCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  protocolCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userCount?: InputMaybe<Scalars['BigInt']>;
  userCount_not?: InputMaybe<Scalars['BigInt']>;
  userCount_gt?: InputMaybe<Scalars['BigInt']>;
  userCount_lt?: InputMaybe<Scalars['BigInt']>;
  userCount_gte?: InputMaybe<Scalars['BigInt']>;
  userCount_lte?: InputMaybe<Scalars['BigInt']>;
  userCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenCount?: InputMaybe<Scalars['BigInt']>;
  tokenCount_not?: InputMaybe<Scalars['BigInt']>;
  tokenCount_gt?: InputMaybe<Scalars['BigInt']>;
  tokenCount_lt?: InputMaybe<Scalars['BigInt']>;
  tokenCount_gte?: InputMaybe<Scalars['BigInt']>;
  tokenCount_lte?: InputMaybe<Scalars['BigInt']>;
  tokenCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  masterContractCount?: InputMaybe<Scalars['BigInt']>;
  masterContractCount_not?: InputMaybe<Scalars['BigInt']>;
  masterContractCount_gt?: InputMaybe<Scalars['BigInt']>;
  masterContractCount_lt?: InputMaybe<Scalars['BigInt']>;
  masterContractCount_gte?: InputMaybe<Scalars['BigInt']>;
  masterContractCount_lte?: InputMaybe<Scalars['BigInt']>;
  masterContractCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  masterContractCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cloneCount?: InputMaybe<Scalars['BigInt']>;
  cloneCount_not?: InputMaybe<Scalars['BigInt']>;
  cloneCount_gt?: InputMaybe<Scalars['BigInt']>;
  cloneCount_lt?: InputMaybe<Scalars['BigInt']>;
  cloneCount_gte?: InputMaybe<Scalars['BigInt']>;
  cloneCount_lte?: InputMaybe<Scalars['BigInt']>;
  cloneCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cloneCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flashloanCount?: InputMaybe<Scalars['BigInt']>;
  flashloanCount_not?: InputMaybe<Scalars['BigInt']>;
  flashloanCount_gt?: InputMaybe<Scalars['BigInt']>;
  flashloanCount_lt?: InputMaybe<Scalars['BigInt']>;
  flashloanCount_gte?: InputMaybe<Scalars['BigInt']>;
  flashloanCount_lte?: InputMaybe<Scalars['BigInt']>;
  flashloanCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flashloanCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionCount?: InputMaybe<Scalars['BigInt']>;
  transactionCount_not?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type BentoBox_orderBy =
  | 'id'
  | 'protocols'
  | 'users'
  | 'tokens'
  | 'masterContracts'
  | 'clones'
  | 'flashloans'
  | 'transactions'
  | 'protocolCount'
  | 'userCount'
  | 'tokenCount'
  | 'masterContractCount'
  | 'cloneCount'
  | 'flashloanCount'
  | 'transactionCount';

/** The block at which the query should be executed. */
export type Block_height = {
  /** Value containing a block hash */
  hash?: InputMaybe<Scalars['Bytes']>;
  /** Value containing a block number */
  number?: InputMaybe<Scalars['Int']>;
  /**
   * Value containing the minimum block number.
   * In the case of `number_gte`, the query will be executed on the latest block only if
   * the subgraph has progressed to or past the minimum block number.
   * Defaults to the latest block when omitted.
   *
   */
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Clone = {
  id: Scalars['ID'];
  bentoBox: BentoBox;
  masterContract: MasterContract;
  data: Scalars['Bytes'];
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};

export type Clone_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  bentoBox?: InputMaybe<Scalars['String']>;
  bentoBox_not?: InputMaybe<Scalars['String']>;
  bentoBox_gt?: InputMaybe<Scalars['String']>;
  bentoBox_lt?: InputMaybe<Scalars['String']>;
  bentoBox_gte?: InputMaybe<Scalars['String']>;
  bentoBox_lte?: InputMaybe<Scalars['String']>;
  bentoBox_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_not_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_contains?: InputMaybe<Scalars['String']>;
  bentoBox_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  masterContract?: InputMaybe<Scalars['String']>;
  masterContract_not?: InputMaybe<Scalars['String']>;
  masterContract_gt?: InputMaybe<Scalars['String']>;
  masterContract_lt?: InputMaybe<Scalars['String']>;
  masterContract_gte?: InputMaybe<Scalars['String']>;
  masterContract_lte?: InputMaybe<Scalars['String']>;
  masterContract_in?: InputMaybe<Array<Scalars['String']>>;
  masterContract_not_in?: InputMaybe<Array<Scalars['String']>>;
  masterContract_contains?: InputMaybe<Scalars['String']>;
  masterContract_contains_nocase?: InputMaybe<Scalars['String']>;
  masterContract_not_contains?: InputMaybe<Scalars['String']>;
  masterContract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  masterContract_starts_with?: InputMaybe<Scalars['String']>;
  masterContract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  masterContract_not_starts_with?: InputMaybe<Scalars['String']>;
  masterContract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  masterContract_ends_with?: InputMaybe<Scalars['String']>;
  masterContract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  masterContract_not_ends_with?: InputMaybe<Scalars['String']>;
  masterContract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  data?: InputMaybe<Scalars['Bytes']>;
  data_not?: InputMaybe<Scalars['Bytes']>;
  data_in?: InputMaybe<Array<Scalars['Bytes']>>;
  data_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  data_contains?: InputMaybe<Scalars['Bytes']>;
  data_not_contains?: InputMaybe<Scalars['Bytes']>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type Clone_orderBy =
  | 'id'
  | 'bentoBox'
  | 'masterContract'
  | 'data'
  | 'block'
  | 'timestamp';

export type FlashLoan = {
  id: Scalars['ID'];
  bentoBox: BentoBox;
  borrower: Scalars['Bytes'];
  receiver: Scalars['Bytes'];
  token: Token;
  amount: Scalars['BigDecimal'];
  feeAmount: Scalars['BigDecimal'];
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};

export type FlashLoan_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  bentoBox?: InputMaybe<Scalars['String']>;
  bentoBox_not?: InputMaybe<Scalars['String']>;
  bentoBox_gt?: InputMaybe<Scalars['String']>;
  bentoBox_lt?: InputMaybe<Scalars['String']>;
  bentoBox_gte?: InputMaybe<Scalars['String']>;
  bentoBox_lte?: InputMaybe<Scalars['String']>;
  bentoBox_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_not_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_contains?: InputMaybe<Scalars['String']>;
  bentoBox_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  borrower?: InputMaybe<Scalars['Bytes']>;
  borrower_not?: InputMaybe<Scalars['Bytes']>;
  borrower_in?: InputMaybe<Array<Scalars['Bytes']>>;
  borrower_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  borrower_contains?: InputMaybe<Scalars['Bytes']>;
  borrower_not_contains?: InputMaybe<Scalars['Bytes']>;
  receiver?: InputMaybe<Scalars['Bytes']>;
  receiver_not?: InputMaybe<Scalars['Bytes']>;
  receiver_in?: InputMaybe<Array<Scalars['Bytes']>>;
  receiver_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  receiver_contains?: InputMaybe<Scalars['Bytes']>;
  receiver_not_contains?: InputMaybe<Scalars['Bytes']>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigDecimal']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feeAmount?: InputMaybe<Scalars['BigDecimal']>;
  feeAmount_not?: InputMaybe<Scalars['BigDecimal']>;
  feeAmount_gt?: InputMaybe<Scalars['BigDecimal']>;
  feeAmount_lt?: InputMaybe<Scalars['BigDecimal']>;
  feeAmount_gte?: InputMaybe<Scalars['BigDecimal']>;
  feeAmount_lte?: InputMaybe<Scalars['BigDecimal']>;
  feeAmount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feeAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type FlashLoan_orderBy =
  | 'id'
  | 'bentoBox'
  | 'borrower'
  | 'receiver'
  | 'token'
  | 'amount'
  | 'feeAmount'
  | 'block'
  | 'timestamp';

export type MasterContract = {
  id: Scalars['ID'];
  bentoBox: BentoBox;
  clones?: Maybe<Array<Clone>>;
  masterContractApprovals?: Maybe<Array<MasterContractApproval>>;
};


export type MasterContractclonesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Clone_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Clone_filter>;
};


export type MasterContractmasterContractApprovalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterContractApproval_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MasterContractApproval_filter>;
};

export type MasterContractApproval = {
  id: Scalars['ID'];
  masterContract: MasterContract;
  user: User;
  approved: Scalars['Boolean'];
};

export type MasterContractApproval_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  masterContract?: InputMaybe<Scalars['String']>;
  masterContract_not?: InputMaybe<Scalars['String']>;
  masterContract_gt?: InputMaybe<Scalars['String']>;
  masterContract_lt?: InputMaybe<Scalars['String']>;
  masterContract_gte?: InputMaybe<Scalars['String']>;
  masterContract_lte?: InputMaybe<Scalars['String']>;
  masterContract_in?: InputMaybe<Array<Scalars['String']>>;
  masterContract_not_in?: InputMaybe<Array<Scalars['String']>>;
  masterContract_contains?: InputMaybe<Scalars['String']>;
  masterContract_contains_nocase?: InputMaybe<Scalars['String']>;
  masterContract_not_contains?: InputMaybe<Scalars['String']>;
  masterContract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  masterContract_starts_with?: InputMaybe<Scalars['String']>;
  masterContract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  masterContract_not_starts_with?: InputMaybe<Scalars['String']>;
  masterContract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  masterContract_ends_with?: InputMaybe<Scalars['String']>;
  masterContract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  masterContract_not_ends_with?: InputMaybe<Scalars['String']>;
  masterContract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  approved?: InputMaybe<Scalars['Boolean']>;
  approved_not?: InputMaybe<Scalars['Boolean']>;
  approved_in?: InputMaybe<Array<Scalars['Boolean']>>;
  approved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type MasterContractApproval_orderBy =
  | 'id'
  | 'masterContract'
  | 'user'
  | 'approved';

export type MasterContract_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  bentoBox?: InputMaybe<Scalars['String']>;
  bentoBox_not?: InputMaybe<Scalars['String']>;
  bentoBox_gt?: InputMaybe<Scalars['String']>;
  bentoBox_lt?: InputMaybe<Scalars['String']>;
  bentoBox_gte?: InputMaybe<Scalars['String']>;
  bentoBox_lte?: InputMaybe<Scalars['String']>;
  bentoBox_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_not_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_contains?: InputMaybe<Scalars['String']>;
  bentoBox_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
};

export type MasterContract_orderBy =
  | 'id'
  | 'bentoBox'
  | 'clones'
  | 'masterContractApprovals';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Protocol = {
  id: Scalars['ID'];
  bentoBox: BentoBox;
};

export type Protocol_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  bentoBox?: InputMaybe<Scalars['String']>;
  bentoBox_not?: InputMaybe<Scalars['String']>;
  bentoBox_gt?: InputMaybe<Scalars['String']>;
  bentoBox_lt?: InputMaybe<Scalars['String']>;
  bentoBox_gte?: InputMaybe<Scalars['String']>;
  bentoBox_lte?: InputMaybe<Scalars['String']>;
  bentoBox_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_not_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_contains?: InputMaybe<Scalars['String']>;
  bentoBox_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
};

export type Protocol_orderBy =
  | 'id'
  | 'bentoBox';

export type Query = {
  bentoBox?: Maybe<BentoBox>;
  bentoBoxes: Array<BentoBox>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  strategy?: Maybe<Strategy>;
  strategies: Array<Strategy>;
  strategyHarvest?: Maybe<StrategyHarvest>;
  strategyHarvests: Array<StrategyHarvest>;
  rebase?: Maybe<Rebase>;
  rebases: Array<Rebase>;
  flashLoan?: Maybe<FlashLoan>;
  flashLoans: Array<FlashLoan>;
  masterContract?: Maybe<MasterContract>;
  masterContracts: Array<MasterContract>;
  clone?: Maybe<Clone>;
  clones: Array<Clone>;
  masterContractApproval?: Maybe<MasterContractApproval>;
  masterContractApprovals: Array<MasterContractApproval>;
  protocol?: Maybe<Protocol>;
  protocols: Array<Protocol>;
  user?: Maybe<User>;
  users: Array<User>;
  userToken?: Maybe<UserToken>;
  userTokens: Array<UserToken>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerybentoBoxArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybentoBoxesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BentoBox_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BentoBox_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystrategyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystrategiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Strategy_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Strategy_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystrategyHarvestArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystrategyHarvestsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StrategyHarvest_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StrategyHarvest_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrebaseArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrebasesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Rebase_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Rebase_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryflashLoanArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryflashLoansArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlashLoan_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlashLoan_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymasterContractArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymasterContractsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterContract_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MasterContract_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycloneArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryclonesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Clone_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Clone_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymasterContractApprovalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymasterContractApprovalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterContractApproval_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MasterContractApproval_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprotocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprotocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Protocol_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Protocol_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Rebase = {
  id: Scalars['ID'];
  token: Token;
  base: Scalars['BigDecimal'];
  elastic: Scalars['BigDecimal'];
};

export type Rebase_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  base?: InputMaybe<Scalars['BigDecimal']>;
  base_not?: InputMaybe<Scalars['BigDecimal']>;
  base_gt?: InputMaybe<Scalars['BigDecimal']>;
  base_lt?: InputMaybe<Scalars['BigDecimal']>;
  base_gte?: InputMaybe<Scalars['BigDecimal']>;
  base_lte?: InputMaybe<Scalars['BigDecimal']>;
  base_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  base_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  elastic?: InputMaybe<Scalars['BigDecimal']>;
  elastic_not?: InputMaybe<Scalars['BigDecimal']>;
  elastic_gt?: InputMaybe<Scalars['BigDecimal']>;
  elastic_lt?: InputMaybe<Scalars['BigDecimal']>;
  elastic_gte?: InputMaybe<Scalars['BigDecimal']>;
  elastic_lte?: InputMaybe<Scalars['BigDecimal']>;
  elastic_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  elastic_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export type Rebase_orderBy =
  | 'id'
  | 'token'
  | 'base'
  | 'elastic';

export type Strategy = {
  id: Scalars['ID'];
  token: Token;
  balance: Scalars['BigInt'];
  totalProfit: Scalars['BigInt'];
  harvests?: Maybe<Array<StrategyHarvest>>;
  timestamp: Scalars['BigInt'];
  block: Scalars['BigInt'];
};


export type StrategyharvestsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StrategyHarvest_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StrategyHarvest_filter>;
};

export type StrategyHarvest = {
  id: Scalars['ID'];
  strategy: Strategy;
  profit: Scalars['BigDecimal'];
  tokenElastic: Scalars['BigDecimal'];
  timestamp: Scalars['BigInt'];
  block: Scalars['BigInt'];
};

export type StrategyHarvest_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  strategy?: InputMaybe<Scalars['String']>;
  strategy_not?: InputMaybe<Scalars['String']>;
  strategy_gt?: InputMaybe<Scalars['String']>;
  strategy_lt?: InputMaybe<Scalars['String']>;
  strategy_gte?: InputMaybe<Scalars['String']>;
  strategy_lte?: InputMaybe<Scalars['String']>;
  strategy_in?: InputMaybe<Array<Scalars['String']>>;
  strategy_not_in?: InputMaybe<Array<Scalars['String']>>;
  strategy_contains?: InputMaybe<Scalars['String']>;
  strategy_contains_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_contains?: InputMaybe<Scalars['String']>;
  strategy_not_contains_nocase?: InputMaybe<Scalars['String']>;
  strategy_starts_with?: InputMaybe<Scalars['String']>;
  strategy_starts_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_starts_with?: InputMaybe<Scalars['String']>;
  strategy_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_ends_with?: InputMaybe<Scalars['String']>;
  strategy_ends_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_ends_with?: InputMaybe<Scalars['String']>;
  strategy_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  profit?: InputMaybe<Scalars['BigDecimal']>;
  profit_not?: InputMaybe<Scalars['BigDecimal']>;
  profit_gt?: InputMaybe<Scalars['BigDecimal']>;
  profit_lt?: InputMaybe<Scalars['BigDecimal']>;
  profit_gte?: InputMaybe<Scalars['BigDecimal']>;
  profit_lte?: InputMaybe<Scalars['BigDecimal']>;
  profit_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  profit_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tokenElastic?: InputMaybe<Scalars['BigDecimal']>;
  tokenElastic_not?: InputMaybe<Scalars['BigDecimal']>;
  tokenElastic_gt?: InputMaybe<Scalars['BigDecimal']>;
  tokenElastic_lt?: InputMaybe<Scalars['BigDecimal']>;
  tokenElastic_gte?: InputMaybe<Scalars['BigDecimal']>;
  tokenElastic_lte?: InputMaybe<Scalars['BigDecimal']>;
  tokenElastic_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tokenElastic_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type StrategyHarvest_orderBy =
  | 'id'
  | 'strategy'
  | 'profit'
  | 'tokenElastic'
  | 'timestamp'
  | 'block';

export type Strategy_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalProfit?: InputMaybe<Scalars['BigInt']>;
  totalProfit_not?: InputMaybe<Scalars['BigInt']>;
  totalProfit_gt?: InputMaybe<Scalars['BigInt']>;
  totalProfit_lt?: InputMaybe<Scalars['BigInt']>;
  totalProfit_gte?: InputMaybe<Scalars['BigInt']>;
  totalProfit_lte?: InputMaybe<Scalars['BigInt']>;
  totalProfit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalProfit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type Strategy_orderBy =
  | 'id'
  | 'token'
  | 'balance'
  | 'totalProfit'
  | 'harvests'
  | 'timestamp'
  | 'block';

export type Subscription = {
  bentoBox?: Maybe<BentoBox>;
  bentoBoxes: Array<BentoBox>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  strategy?: Maybe<Strategy>;
  strategies: Array<Strategy>;
  strategyHarvest?: Maybe<StrategyHarvest>;
  strategyHarvests: Array<StrategyHarvest>;
  rebase?: Maybe<Rebase>;
  rebases: Array<Rebase>;
  flashLoan?: Maybe<FlashLoan>;
  flashLoans: Array<FlashLoan>;
  masterContract?: Maybe<MasterContract>;
  masterContracts: Array<MasterContract>;
  clone?: Maybe<Clone>;
  clones: Array<Clone>;
  masterContractApproval?: Maybe<MasterContractApproval>;
  masterContractApprovals: Array<MasterContractApproval>;
  protocol?: Maybe<Protocol>;
  protocols: Array<Protocol>;
  user?: Maybe<User>;
  users: Array<User>;
  userToken?: Maybe<UserToken>;
  userTokens: Array<UserToken>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionbentoBoxArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbentoBoxesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BentoBox_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BentoBox_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstrategyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstrategiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Strategy_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Strategy_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstrategyHarvestArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstrategyHarvestsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StrategyHarvest_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StrategyHarvest_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrebaseArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrebasesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Rebase_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Rebase_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionflashLoanArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionflashLoansArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlashLoan_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlashLoan_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmasterContractArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmasterContractsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterContract_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MasterContract_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncloneArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionclonesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Clone_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Clone_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmasterContractApprovalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmasterContractApprovalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterContractApproval_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MasterContractApproval_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprotocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprotocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Protocol_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Protocol_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Token = {
  id: Scalars['ID'];
  bentoBox: BentoBox;
  rebase: Rebase;
  symbol: Scalars['String'];
  symbolSuccess: Scalars['Boolean'];
  name: Scalars['String'];
  nameSuccess: Scalars['Boolean'];
  decimals: Scalars['BigInt'];
  decimalsSuccess: Scalars['Boolean'];
  strategy?: Maybe<Strategy>;
  strategyTargetPercentage: Scalars['BigInt'];
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};

export type Token_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  bentoBox?: InputMaybe<Scalars['String']>;
  bentoBox_not?: InputMaybe<Scalars['String']>;
  bentoBox_gt?: InputMaybe<Scalars['String']>;
  bentoBox_lt?: InputMaybe<Scalars['String']>;
  bentoBox_gte?: InputMaybe<Scalars['String']>;
  bentoBox_lte?: InputMaybe<Scalars['String']>;
  bentoBox_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_not_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_contains?: InputMaybe<Scalars['String']>;
  bentoBox_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rebase?: InputMaybe<Scalars['String']>;
  rebase_not?: InputMaybe<Scalars['String']>;
  rebase_gt?: InputMaybe<Scalars['String']>;
  rebase_lt?: InputMaybe<Scalars['String']>;
  rebase_gte?: InputMaybe<Scalars['String']>;
  rebase_lte?: InputMaybe<Scalars['String']>;
  rebase_in?: InputMaybe<Array<Scalars['String']>>;
  rebase_not_in?: InputMaybe<Array<Scalars['String']>>;
  rebase_contains?: InputMaybe<Scalars['String']>;
  rebase_contains_nocase?: InputMaybe<Scalars['String']>;
  rebase_not_contains?: InputMaybe<Scalars['String']>;
  rebase_not_contains_nocase?: InputMaybe<Scalars['String']>;
  rebase_starts_with?: InputMaybe<Scalars['String']>;
  rebase_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rebase_not_starts_with?: InputMaybe<Scalars['String']>;
  rebase_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rebase_ends_with?: InputMaybe<Scalars['String']>;
  rebase_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rebase_not_ends_with?: InputMaybe<Scalars['String']>;
  rebase_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbolSuccess?: InputMaybe<Scalars['Boolean']>;
  symbolSuccess_not?: InputMaybe<Scalars['Boolean']>;
  symbolSuccess_in?: InputMaybe<Array<Scalars['Boolean']>>;
  symbolSuccess_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nameSuccess?: InputMaybe<Scalars['Boolean']>;
  nameSuccess_not?: InputMaybe<Scalars['Boolean']>;
  nameSuccess_in?: InputMaybe<Array<Scalars['Boolean']>>;
  nameSuccess_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  decimals?: InputMaybe<Scalars['BigInt']>;
  decimals_not?: InputMaybe<Scalars['BigInt']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']>;
  decimals_lt?: InputMaybe<Scalars['BigInt']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimalsSuccess?: InputMaybe<Scalars['Boolean']>;
  decimalsSuccess_not?: InputMaybe<Scalars['Boolean']>;
  decimalsSuccess_in?: InputMaybe<Array<Scalars['Boolean']>>;
  decimalsSuccess_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  strategy?: InputMaybe<Scalars['String']>;
  strategy_not?: InputMaybe<Scalars['String']>;
  strategy_gt?: InputMaybe<Scalars['String']>;
  strategy_lt?: InputMaybe<Scalars['String']>;
  strategy_gte?: InputMaybe<Scalars['String']>;
  strategy_lte?: InputMaybe<Scalars['String']>;
  strategy_in?: InputMaybe<Array<Scalars['String']>>;
  strategy_not_in?: InputMaybe<Array<Scalars['String']>>;
  strategy_contains?: InputMaybe<Scalars['String']>;
  strategy_contains_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_contains?: InputMaybe<Scalars['String']>;
  strategy_not_contains_nocase?: InputMaybe<Scalars['String']>;
  strategy_starts_with?: InputMaybe<Scalars['String']>;
  strategy_starts_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_starts_with?: InputMaybe<Scalars['String']>;
  strategy_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_ends_with?: InputMaybe<Scalars['String']>;
  strategy_ends_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_ends_with?: InputMaybe<Scalars['String']>;
  strategy_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  strategyTargetPercentage?: InputMaybe<Scalars['BigInt']>;
  strategyTargetPercentage_not?: InputMaybe<Scalars['BigInt']>;
  strategyTargetPercentage_gt?: InputMaybe<Scalars['BigInt']>;
  strategyTargetPercentage_lt?: InputMaybe<Scalars['BigInt']>;
  strategyTargetPercentage_gte?: InputMaybe<Scalars['BigInt']>;
  strategyTargetPercentage_lte?: InputMaybe<Scalars['BigInt']>;
  strategyTargetPercentage_in?: InputMaybe<Array<Scalars['BigInt']>>;
  strategyTargetPercentage_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type Token_orderBy =
  | 'id'
  | 'bentoBox'
  | 'rebase'
  | 'symbol'
  | 'symbolSuccess'
  | 'name'
  | 'nameSuccess'
  | 'decimals'
  | 'decimalsSuccess'
  | 'strategy'
  | 'strategyTargetPercentage'
  | 'block'
  | 'timestamp';

export type Transaction = {
  id: Scalars['ID'];
  bentoBox: BentoBox;
  type: TransactionType;
  from: User;
  to: User;
  token: Token;
  amount?: Maybe<Scalars['BigInt']>;
  share: Scalars['BigInt'];
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};

export type TransactionType =
  | 'deposit'
  | 'transfer'
  | 'withdraw';

export type Transaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  bentoBox?: InputMaybe<Scalars['String']>;
  bentoBox_not?: InputMaybe<Scalars['String']>;
  bentoBox_gt?: InputMaybe<Scalars['String']>;
  bentoBox_lt?: InputMaybe<Scalars['String']>;
  bentoBox_gte?: InputMaybe<Scalars['String']>;
  bentoBox_lte?: InputMaybe<Scalars['String']>;
  bentoBox_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_not_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_contains?: InputMaybe<Scalars['String']>;
  bentoBox_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<TransactionType>;
  type_not?: InputMaybe<TransactionType>;
  type_in?: InputMaybe<Array<TransactionType>>;
  type_not_in?: InputMaybe<Array<TransactionType>>;
  from?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  share?: InputMaybe<Scalars['BigInt']>;
  share_not?: InputMaybe<Scalars['BigInt']>;
  share_gt?: InputMaybe<Scalars['BigInt']>;
  share_lt?: InputMaybe<Scalars['BigInt']>;
  share_gte?: InputMaybe<Scalars['BigInt']>;
  share_lte?: InputMaybe<Scalars['BigInt']>;
  share_in?: InputMaybe<Array<Scalars['BigInt']>>;
  share_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type Transaction_orderBy =
  | 'id'
  | 'bentoBox'
  | 'type'
  | 'from'
  | 'to'
  | 'token'
  | 'amount'
  | 'share'
  | 'block'
  | 'timestamp';

export type User = {
  id: Scalars['ID'];
  bentoBox: BentoBox;
  masterContractApprovals?: Maybe<Array<MasterContractApproval>>;
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};


export type UsermasterContractApprovalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterContractApproval_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MasterContractApproval_filter>;
};

export type UserToken = {
  id: Scalars['ID'];
  token: Token;
  user: User;
  share: Scalars['BigDecimal'];
};

export type UserToken_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  share?: InputMaybe<Scalars['BigDecimal']>;
  share_not?: InputMaybe<Scalars['BigDecimal']>;
  share_gt?: InputMaybe<Scalars['BigDecimal']>;
  share_lt?: InputMaybe<Scalars['BigDecimal']>;
  share_gte?: InputMaybe<Scalars['BigDecimal']>;
  share_lte?: InputMaybe<Scalars['BigDecimal']>;
  share_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  share_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export type UserToken_orderBy =
  | 'id'
  | 'token'
  | 'user'
  | 'share';

export type User_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  bentoBox?: InputMaybe<Scalars['String']>;
  bentoBox_not?: InputMaybe<Scalars['String']>;
  bentoBox_gt?: InputMaybe<Scalars['String']>;
  bentoBox_lt?: InputMaybe<Scalars['String']>;
  bentoBox_gte?: InputMaybe<Scalars['String']>;
  bentoBox_lte?: InputMaybe<Scalars['String']>;
  bentoBox_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_not_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_contains?: InputMaybe<Scalars['String']>;
  bentoBox_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type User_orderBy =
  | 'id'
  | 'bentoBox'
  | 'masterContractApprovals'
  | 'block'
  | 'timestamp';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  BentoBox: ResolverTypeWrapper<BentoBox>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  BentoBox_filter: BentoBox_filter;
  BentoBox_orderBy: BentoBox_orderBy;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Block_height: Block_height;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  Clone: ResolverTypeWrapper<Clone>;
  Clone_filter: Clone_filter;
  String: ResolverTypeWrapper<Scalars['String']>;
  Clone_orderBy: Clone_orderBy;
  FlashLoan: ResolverTypeWrapper<FlashLoan>;
  FlashLoan_filter: FlashLoan_filter;
  FlashLoan_orderBy: FlashLoan_orderBy;
  MasterContract: ResolverTypeWrapper<MasterContract>;
  MasterContractApproval: ResolverTypeWrapper<MasterContractApproval>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  MasterContractApproval_filter: MasterContractApproval_filter;
  MasterContractApproval_orderBy: MasterContractApproval_orderBy;
  MasterContract_filter: MasterContract_filter;
  MasterContract_orderBy: MasterContract_orderBy;
  OrderDirection: OrderDirection;
  Protocol: ResolverTypeWrapper<Protocol>;
  Protocol_filter: Protocol_filter;
  Protocol_orderBy: Protocol_orderBy;
  Query: ResolverTypeWrapper<{}>;
  Rebase: ResolverTypeWrapper<Rebase>;
  Rebase_filter: Rebase_filter;
  Rebase_orderBy: Rebase_orderBy;
  Strategy: ResolverTypeWrapper<Strategy>;
  StrategyHarvest: ResolverTypeWrapper<StrategyHarvest>;
  StrategyHarvest_filter: StrategyHarvest_filter;
  StrategyHarvest_orderBy: StrategyHarvest_orderBy;
  Strategy_filter: Strategy_filter;
  Strategy_orderBy: Strategy_orderBy;
  Subscription: ResolverTypeWrapper<{}>;
  Token: ResolverTypeWrapper<Token>;
  Token_filter: Token_filter;
  Token_orderBy: Token_orderBy;
  Transaction: ResolverTypeWrapper<Transaction>;
  TransactionType: TransactionType;
  Transaction_filter: Transaction_filter;
  Transaction_orderBy: Transaction_orderBy;
  User: ResolverTypeWrapper<User>;
  UserToken: ResolverTypeWrapper<UserToken>;
  UserToken_filter: UserToken_filter;
  UserToken_orderBy: UserToken_orderBy;
  User_filter: User_filter;
  User_orderBy: User_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BentoBox: BentoBox;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  BentoBox_filter: BentoBox_filter;
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  Block_height: Block_height;
  Bytes: Scalars['Bytes'];
  Clone: Clone;
  Clone_filter: Clone_filter;
  String: Scalars['String'];
  FlashLoan: FlashLoan;
  FlashLoan_filter: FlashLoan_filter;
  MasterContract: MasterContract;
  MasterContractApproval: MasterContractApproval;
  Boolean: Scalars['Boolean'];
  MasterContractApproval_filter: MasterContractApproval_filter;
  MasterContract_filter: MasterContract_filter;
  Protocol: Protocol;
  Protocol_filter: Protocol_filter;
  Query: {};
  Rebase: Rebase;
  Rebase_filter: Rebase_filter;
  Strategy: Strategy;
  StrategyHarvest: StrategyHarvest;
  StrategyHarvest_filter: StrategyHarvest_filter;
  Strategy_filter: Strategy_filter;
  Subscription: {};
  Token: Token;
  Token_filter: Token_filter;
  Transaction: Transaction;
  Transaction_filter: Transaction_filter;
  User: User;
  UserToken: UserToken;
  UserToken_filter: UserToken_filter;
  User_filter: User_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type BentoBoxResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BentoBox'] = ResolversParentTypes['BentoBox']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  protocols?: Resolver<Maybe<Array<ResolversTypes['Protocol']>>, ParentType, ContextType, RequireFields<BentoBoxprotocolsArgs, 'skip' | 'first'>>;
  users?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType, RequireFields<BentoBoxusersArgs, 'skip' | 'first'>>;
  tokens?: Resolver<Maybe<Array<ResolversTypes['Token']>>, ParentType, ContextType, RequireFields<BentoBoxtokensArgs, 'skip' | 'first'>>;
  masterContracts?: Resolver<Array<ResolversTypes['MasterContract']>, ParentType, ContextType, RequireFields<BentoBoxmasterContractsArgs, 'skip' | 'first'>>;
  clones?: Resolver<Maybe<Array<ResolversTypes['Clone']>>, ParentType, ContextType, RequireFields<BentoBoxclonesArgs, 'skip' | 'first'>>;
  flashloans?: Resolver<Maybe<Array<ResolversTypes['FlashLoan']>>, ParentType, ContextType, RequireFields<BentoBoxflashloansArgs, 'skip' | 'first'>>;
  transactions?: Resolver<Maybe<Array<ResolversTypes['Transaction']>>, ParentType, ContextType, RequireFields<BentoBoxtransactionsArgs, 'skip' | 'first'>>;
  protocolCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  userCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tokenCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  masterContractCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  cloneCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  flashloanCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type CloneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Clone'] = ResolversParentTypes['Clone']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  bentoBox?: Resolver<ResolversTypes['BentoBox'], ParentType, ContextType>;
  masterContract?: Resolver<ResolversTypes['MasterContract'], ParentType, ContextType>;
  data?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  block?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FlashLoanResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FlashLoan'] = ResolversParentTypes['FlashLoan']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  bentoBox?: Resolver<ResolversTypes['BentoBox'], ParentType, ContextType>;
  borrower?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  receiver?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feeAmount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  block?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MasterContractResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MasterContract'] = ResolversParentTypes['MasterContract']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  bentoBox?: Resolver<ResolversTypes['BentoBox'], ParentType, ContextType>;
  clones?: Resolver<Maybe<Array<ResolversTypes['Clone']>>, ParentType, ContextType, RequireFields<MasterContractclonesArgs, 'skip' | 'first'>>;
  masterContractApprovals?: Resolver<Maybe<Array<ResolversTypes['MasterContractApproval']>>, ParentType, ContextType, RequireFields<MasterContractmasterContractApprovalsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MasterContractApprovalResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MasterContractApproval'] = ResolversParentTypes['MasterContractApproval']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  masterContract?: Resolver<ResolversTypes['MasterContract'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  approved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtocolResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Protocol'] = ResolversParentTypes['Protocol']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  bentoBox?: Resolver<ResolversTypes['BentoBox'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  bentoBox?: Resolver<Maybe<ResolversTypes['BentoBox']>, ParentType, ContextType, RequireFields<QuerybentoBoxArgs, 'id' | 'subgraphError'>>;
  bentoBoxes?: Resolver<Array<ResolversTypes['BentoBox']>, ParentType, ContextType, RequireFields<QuerybentoBoxesArgs, 'skip' | 'first' | 'subgraphError'>>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QuerytokenArgs, 'id' | 'subgraphError'>>;
  tokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QuerytokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  strategy?: Resolver<Maybe<ResolversTypes['Strategy']>, ParentType, ContextType, RequireFields<QuerystrategyArgs, 'id' | 'subgraphError'>>;
  strategies?: Resolver<Array<ResolversTypes['Strategy']>, ParentType, ContextType, RequireFields<QuerystrategiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  strategyHarvest?: Resolver<Maybe<ResolversTypes['StrategyHarvest']>, ParentType, ContextType, RequireFields<QuerystrategyHarvestArgs, 'id' | 'subgraphError'>>;
  strategyHarvests?: Resolver<Array<ResolversTypes['StrategyHarvest']>, ParentType, ContextType, RequireFields<QuerystrategyHarvestsArgs, 'skip' | 'first' | 'subgraphError'>>;
  rebase?: Resolver<Maybe<ResolversTypes['Rebase']>, ParentType, ContextType, RequireFields<QueryrebaseArgs, 'id' | 'subgraphError'>>;
  rebases?: Resolver<Array<ResolversTypes['Rebase']>, ParentType, ContextType, RequireFields<QueryrebasesArgs, 'skip' | 'first' | 'subgraphError'>>;
  flashLoan?: Resolver<Maybe<ResolversTypes['FlashLoan']>, ParentType, ContextType, RequireFields<QueryflashLoanArgs, 'id' | 'subgraphError'>>;
  flashLoans?: Resolver<Array<ResolversTypes['FlashLoan']>, ParentType, ContextType, RequireFields<QueryflashLoansArgs, 'skip' | 'first' | 'subgraphError'>>;
  masterContract?: Resolver<Maybe<ResolversTypes['MasterContract']>, ParentType, ContextType, RequireFields<QuerymasterContractArgs, 'id' | 'subgraphError'>>;
  masterContracts?: Resolver<Array<ResolversTypes['MasterContract']>, ParentType, ContextType, RequireFields<QuerymasterContractsArgs, 'skip' | 'first' | 'subgraphError'>>;
  clone?: Resolver<Maybe<ResolversTypes['Clone']>, ParentType, ContextType, RequireFields<QuerycloneArgs, 'id' | 'subgraphError'>>;
  clones?: Resolver<Array<ResolversTypes['Clone']>, ParentType, ContextType, RequireFields<QueryclonesArgs, 'skip' | 'first' | 'subgraphError'>>;
  masterContractApproval?: Resolver<Maybe<ResolversTypes['MasterContractApproval']>, ParentType, ContextType, RequireFields<QuerymasterContractApprovalArgs, 'id' | 'subgraphError'>>;
  masterContractApprovals?: Resolver<Array<ResolversTypes['MasterContractApproval']>, ParentType, ContextType, RequireFields<QuerymasterContractApprovalsArgs, 'skip' | 'first' | 'subgraphError'>>;
  protocol?: Resolver<Maybe<ResolversTypes['Protocol']>, ParentType, ContextType, RequireFields<QueryprotocolArgs, 'id' | 'subgraphError'>>;
  protocols?: Resolver<Array<ResolversTypes['Protocol']>, ParentType, ContextType, RequireFields<QueryprotocolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'id' | 'subgraphError'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  userToken?: Resolver<Maybe<ResolversTypes['UserToken']>, ParentType, ContextType, RequireFields<QueryuserTokenArgs, 'id' | 'subgraphError'>>;
  userTokens?: Resolver<Array<ResolversTypes['UserToken']>, ParentType, ContextType, RequireFields<QueryuserTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  transaction?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<QuerytransactionArgs, 'id' | 'subgraphError'>>;
  transactions?: Resolver<Array<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<QuerytransactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type RebaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Rebase'] = ResolversParentTypes['Rebase']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  base?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  elastic?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StrategyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Strategy'] = ResolversParentTypes['Strategy']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  balance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalProfit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  harvests?: Resolver<Maybe<Array<ResolversTypes['StrategyHarvest']>>, ParentType, ContextType, RequireFields<StrategyharvestsArgs, 'skip' | 'first'>>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  block?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StrategyHarvestResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StrategyHarvest'] = ResolversParentTypes['StrategyHarvest']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  strategy?: Resolver<ResolversTypes['Strategy'], ParentType, ContextType>;
  profit?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  tokenElastic?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  block?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  bentoBox?: SubscriptionResolver<Maybe<ResolversTypes['BentoBox']>, "bentoBox", ParentType, ContextType, RequireFields<SubscriptionbentoBoxArgs, 'id' | 'subgraphError'>>;
  bentoBoxes?: SubscriptionResolver<Array<ResolversTypes['BentoBox']>, "bentoBoxes", ParentType, ContextType, RequireFields<SubscriptionbentoBoxesArgs, 'skip' | 'first' | 'subgraphError'>>;
  token?: SubscriptionResolver<Maybe<ResolversTypes['Token']>, "token", ParentType, ContextType, RequireFields<SubscriptiontokenArgs, 'id' | 'subgraphError'>>;
  tokens?: SubscriptionResolver<Array<ResolversTypes['Token']>, "tokens", ParentType, ContextType, RequireFields<SubscriptiontokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  strategy?: SubscriptionResolver<Maybe<ResolversTypes['Strategy']>, "strategy", ParentType, ContextType, RequireFields<SubscriptionstrategyArgs, 'id' | 'subgraphError'>>;
  strategies?: SubscriptionResolver<Array<ResolversTypes['Strategy']>, "strategies", ParentType, ContextType, RequireFields<SubscriptionstrategiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  strategyHarvest?: SubscriptionResolver<Maybe<ResolversTypes['StrategyHarvest']>, "strategyHarvest", ParentType, ContextType, RequireFields<SubscriptionstrategyHarvestArgs, 'id' | 'subgraphError'>>;
  strategyHarvests?: SubscriptionResolver<Array<ResolversTypes['StrategyHarvest']>, "strategyHarvests", ParentType, ContextType, RequireFields<SubscriptionstrategyHarvestsArgs, 'skip' | 'first' | 'subgraphError'>>;
  rebase?: SubscriptionResolver<Maybe<ResolversTypes['Rebase']>, "rebase", ParentType, ContextType, RequireFields<SubscriptionrebaseArgs, 'id' | 'subgraphError'>>;
  rebases?: SubscriptionResolver<Array<ResolversTypes['Rebase']>, "rebases", ParentType, ContextType, RequireFields<SubscriptionrebasesArgs, 'skip' | 'first' | 'subgraphError'>>;
  flashLoan?: SubscriptionResolver<Maybe<ResolversTypes['FlashLoan']>, "flashLoan", ParentType, ContextType, RequireFields<SubscriptionflashLoanArgs, 'id' | 'subgraphError'>>;
  flashLoans?: SubscriptionResolver<Array<ResolversTypes['FlashLoan']>, "flashLoans", ParentType, ContextType, RequireFields<SubscriptionflashLoansArgs, 'skip' | 'first' | 'subgraphError'>>;
  masterContract?: SubscriptionResolver<Maybe<ResolversTypes['MasterContract']>, "masterContract", ParentType, ContextType, RequireFields<SubscriptionmasterContractArgs, 'id' | 'subgraphError'>>;
  masterContracts?: SubscriptionResolver<Array<ResolversTypes['MasterContract']>, "masterContracts", ParentType, ContextType, RequireFields<SubscriptionmasterContractsArgs, 'skip' | 'first' | 'subgraphError'>>;
  clone?: SubscriptionResolver<Maybe<ResolversTypes['Clone']>, "clone", ParentType, ContextType, RequireFields<SubscriptioncloneArgs, 'id' | 'subgraphError'>>;
  clones?: SubscriptionResolver<Array<ResolversTypes['Clone']>, "clones", ParentType, ContextType, RequireFields<SubscriptionclonesArgs, 'skip' | 'first' | 'subgraphError'>>;
  masterContractApproval?: SubscriptionResolver<Maybe<ResolversTypes['MasterContractApproval']>, "masterContractApproval", ParentType, ContextType, RequireFields<SubscriptionmasterContractApprovalArgs, 'id' | 'subgraphError'>>;
  masterContractApprovals?: SubscriptionResolver<Array<ResolversTypes['MasterContractApproval']>, "masterContractApprovals", ParentType, ContextType, RequireFields<SubscriptionmasterContractApprovalsArgs, 'skip' | 'first' | 'subgraphError'>>;
  protocol?: SubscriptionResolver<Maybe<ResolversTypes['Protocol']>, "protocol", ParentType, ContextType, RequireFields<SubscriptionprotocolArgs, 'id' | 'subgraphError'>>;
  protocols?: SubscriptionResolver<Array<ResolversTypes['Protocol']>, "protocols", ParentType, ContextType, RequireFields<SubscriptionprotocolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  user?: SubscriptionResolver<Maybe<ResolversTypes['User']>, "user", ParentType, ContextType, RequireFields<SubscriptionuserArgs, 'id' | 'subgraphError'>>;
  users?: SubscriptionResolver<Array<ResolversTypes['User']>, "users", ParentType, ContextType, RequireFields<SubscriptionusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  userToken?: SubscriptionResolver<Maybe<ResolversTypes['UserToken']>, "userToken", ParentType, ContextType, RequireFields<SubscriptionuserTokenArgs, 'id' | 'subgraphError'>>;
  userTokens?: SubscriptionResolver<Array<ResolversTypes['UserToken']>, "userTokens", ParentType, ContextType, RequireFields<SubscriptionuserTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  transaction?: SubscriptionResolver<Maybe<ResolversTypes['Transaction']>, "transaction", ParentType, ContextType, RequireFields<SubscriptiontransactionArgs, 'id' | 'subgraphError'>>;
  transactions?: SubscriptionResolver<Array<ResolversTypes['Transaction']>, "transactions", ParentType, ContextType, RequireFields<SubscriptiontransactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export type TokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  bentoBox?: Resolver<ResolversTypes['BentoBox'], ParentType, ContextType>;
  rebase?: Resolver<ResolversTypes['Rebase'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbolSuccess?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nameSuccess?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  decimals?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  decimalsSuccess?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  strategy?: Resolver<Maybe<ResolversTypes['Strategy']>, ParentType, ContextType>;
  strategyTargetPercentage?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  block?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransactionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Transaction'] = ResolversParentTypes['Transaction']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  bentoBox?: Resolver<ResolversTypes['BentoBox'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['TransactionType'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  share?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  block?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  bentoBox?: Resolver<ResolversTypes['BentoBox'], ParentType, ContextType>;
  masterContractApprovals?: Resolver<Maybe<Array<ResolversTypes['MasterContractApproval']>>, ParentType, ContextType, RequireFields<UsermasterContractApprovalsArgs, 'skip' | 'first'>>;
  block?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserTokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserToken'] = ResolversParentTypes['UserToken']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  share?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  BentoBox?: BentoBoxResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Clone?: CloneResolvers<ContextType>;
  FlashLoan?: FlashLoanResolvers<ContextType>;
  MasterContract?: MasterContractResolvers<ContextType>;
  MasterContractApproval?: MasterContractApprovalResolvers<ContextType>;
  Protocol?: ProtocolResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Rebase?: RebaseResolvers<ContextType>;
  Strategy?: StrategyResolvers<ContextType>;
  StrategyHarvest?: StrategyHarvestResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  Transaction?: TransactionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserToken?: UserTokenResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

import { MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';

import { InContextSdkMethod } from '@graphql-mesh/types';


    export namespace BentoboxTypes {
      export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type BentoBox = {
  id: Scalars['ID'];
  protocols?: Maybe<Array<Protocol>>;
  users?: Maybe<Array<User>>;
  tokens?: Maybe<Array<Token>>;
  masterContracts: Array<MasterContract>;
  clones?: Maybe<Array<Clone>>;
  flashloans?: Maybe<Array<FlashLoan>>;
  transactions?: Maybe<Array<Transaction>>;
  protocolCount: Scalars['BigInt'];
  userCount: Scalars['BigInt'];
  tokenCount: Scalars['BigInt'];
  masterContractCount: Scalars['BigInt'];
  cloneCount: Scalars['BigInt'];
  flashloanCount: Scalars['BigInt'];
  transactionCount: Scalars['BigInt'];
};


export type BentoBoxprotocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Protocol_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Protocol_filter>;
};


export type BentoBoxusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
};


export type BentoBoxtokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
};


export type BentoBoxmasterContractsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterContract_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MasterContract_filter>;
};


export type BentoBoxclonesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Clone_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Clone_filter>;
};


export type BentoBoxflashloansArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlashLoan_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlashLoan_filter>;
};


export type BentoBoxtransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
};

export type BentoBox_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  protocolCount?: InputMaybe<Scalars['BigInt']>;
  protocolCount_not?: InputMaybe<Scalars['BigInt']>;
  protocolCount_gt?: InputMaybe<Scalars['BigInt']>;
  protocolCount_lt?: InputMaybe<Scalars['BigInt']>;
  protocolCount_gte?: InputMaybe<Scalars['BigInt']>;
  protocolCount_lte?: InputMaybe<Scalars['BigInt']>;
  protocolCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  protocolCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userCount?: InputMaybe<Scalars['BigInt']>;
  userCount_not?: InputMaybe<Scalars['BigInt']>;
  userCount_gt?: InputMaybe<Scalars['BigInt']>;
  userCount_lt?: InputMaybe<Scalars['BigInt']>;
  userCount_gte?: InputMaybe<Scalars['BigInt']>;
  userCount_lte?: InputMaybe<Scalars['BigInt']>;
  userCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenCount?: InputMaybe<Scalars['BigInt']>;
  tokenCount_not?: InputMaybe<Scalars['BigInt']>;
  tokenCount_gt?: InputMaybe<Scalars['BigInt']>;
  tokenCount_lt?: InputMaybe<Scalars['BigInt']>;
  tokenCount_gte?: InputMaybe<Scalars['BigInt']>;
  tokenCount_lte?: InputMaybe<Scalars['BigInt']>;
  tokenCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  masterContractCount?: InputMaybe<Scalars['BigInt']>;
  masterContractCount_not?: InputMaybe<Scalars['BigInt']>;
  masterContractCount_gt?: InputMaybe<Scalars['BigInt']>;
  masterContractCount_lt?: InputMaybe<Scalars['BigInt']>;
  masterContractCount_gte?: InputMaybe<Scalars['BigInt']>;
  masterContractCount_lte?: InputMaybe<Scalars['BigInt']>;
  masterContractCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  masterContractCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cloneCount?: InputMaybe<Scalars['BigInt']>;
  cloneCount_not?: InputMaybe<Scalars['BigInt']>;
  cloneCount_gt?: InputMaybe<Scalars['BigInt']>;
  cloneCount_lt?: InputMaybe<Scalars['BigInt']>;
  cloneCount_gte?: InputMaybe<Scalars['BigInt']>;
  cloneCount_lte?: InputMaybe<Scalars['BigInt']>;
  cloneCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cloneCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flashloanCount?: InputMaybe<Scalars['BigInt']>;
  flashloanCount_not?: InputMaybe<Scalars['BigInt']>;
  flashloanCount_gt?: InputMaybe<Scalars['BigInt']>;
  flashloanCount_lt?: InputMaybe<Scalars['BigInt']>;
  flashloanCount_gte?: InputMaybe<Scalars['BigInt']>;
  flashloanCount_lte?: InputMaybe<Scalars['BigInt']>;
  flashloanCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flashloanCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionCount?: InputMaybe<Scalars['BigInt']>;
  transactionCount_not?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type BentoBox_orderBy =
  | 'id'
  | 'protocols'
  | 'users'
  | 'tokens'
  | 'masterContracts'
  | 'clones'
  | 'flashloans'
  | 'transactions'
  | 'protocolCount'
  | 'userCount'
  | 'tokenCount'
  | 'masterContractCount'
  | 'cloneCount'
  | 'flashloanCount'
  | 'transactionCount';

/** The block at which the query should be executed. */
export type Block_height = {
  /** Value containing a block hash */
  hash?: InputMaybe<Scalars['Bytes']>;
  /** Value containing a block number */
  number?: InputMaybe<Scalars['Int']>;
  /**
   * Value containing the minimum block number.
   * In the case of `number_gte`, the query will be executed on the latest block only if
   * the subgraph has progressed to or past the minimum block number.
   * Defaults to the latest block when omitted.
   *
   */
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Clone = {
  id: Scalars['ID'];
  bentoBox: BentoBox;
  masterContract: MasterContract;
  data: Scalars['Bytes'];
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};

export type Clone_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  bentoBox?: InputMaybe<Scalars['String']>;
  bentoBox_not?: InputMaybe<Scalars['String']>;
  bentoBox_gt?: InputMaybe<Scalars['String']>;
  bentoBox_lt?: InputMaybe<Scalars['String']>;
  bentoBox_gte?: InputMaybe<Scalars['String']>;
  bentoBox_lte?: InputMaybe<Scalars['String']>;
  bentoBox_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_not_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_contains?: InputMaybe<Scalars['String']>;
  bentoBox_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  masterContract?: InputMaybe<Scalars['String']>;
  masterContract_not?: InputMaybe<Scalars['String']>;
  masterContract_gt?: InputMaybe<Scalars['String']>;
  masterContract_lt?: InputMaybe<Scalars['String']>;
  masterContract_gte?: InputMaybe<Scalars['String']>;
  masterContract_lte?: InputMaybe<Scalars['String']>;
  masterContract_in?: InputMaybe<Array<Scalars['String']>>;
  masterContract_not_in?: InputMaybe<Array<Scalars['String']>>;
  masterContract_contains?: InputMaybe<Scalars['String']>;
  masterContract_contains_nocase?: InputMaybe<Scalars['String']>;
  masterContract_not_contains?: InputMaybe<Scalars['String']>;
  masterContract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  masterContract_starts_with?: InputMaybe<Scalars['String']>;
  masterContract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  masterContract_not_starts_with?: InputMaybe<Scalars['String']>;
  masterContract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  masterContract_ends_with?: InputMaybe<Scalars['String']>;
  masterContract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  masterContract_not_ends_with?: InputMaybe<Scalars['String']>;
  masterContract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  data?: InputMaybe<Scalars['Bytes']>;
  data_not?: InputMaybe<Scalars['Bytes']>;
  data_in?: InputMaybe<Array<Scalars['Bytes']>>;
  data_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  data_contains?: InputMaybe<Scalars['Bytes']>;
  data_not_contains?: InputMaybe<Scalars['Bytes']>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type Clone_orderBy =
  | 'id'
  | 'bentoBox'
  | 'masterContract'
  | 'data'
  | 'block'
  | 'timestamp';

export type FlashLoan = {
  id: Scalars['ID'];
  bentoBox: BentoBox;
  borrower: Scalars['Bytes'];
  receiver: Scalars['Bytes'];
  token: Token;
  amount: Scalars['BigDecimal'];
  feeAmount: Scalars['BigDecimal'];
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};

export type FlashLoan_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  bentoBox?: InputMaybe<Scalars['String']>;
  bentoBox_not?: InputMaybe<Scalars['String']>;
  bentoBox_gt?: InputMaybe<Scalars['String']>;
  bentoBox_lt?: InputMaybe<Scalars['String']>;
  bentoBox_gte?: InputMaybe<Scalars['String']>;
  bentoBox_lte?: InputMaybe<Scalars['String']>;
  bentoBox_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_not_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_contains?: InputMaybe<Scalars['String']>;
  bentoBox_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  borrower?: InputMaybe<Scalars['Bytes']>;
  borrower_not?: InputMaybe<Scalars['Bytes']>;
  borrower_in?: InputMaybe<Array<Scalars['Bytes']>>;
  borrower_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  borrower_contains?: InputMaybe<Scalars['Bytes']>;
  borrower_not_contains?: InputMaybe<Scalars['Bytes']>;
  receiver?: InputMaybe<Scalars['Bytes']>;
  receiver_not?: InputMaybe<Scalars['Bytes']>;
  receiver_in?: InputMaybe<Array<Scalars['Bytes']>>;
  receiver_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  receiver_contains?: InputMaybe<Scalars['Bytes']>;
  receiver_not_contains?: InputMaybe<Scalars['Bytes']>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigDecimal']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feeAmount?: InputMaybe<Scalars['BigDecimal']>;
  feeAmount_not?: InputMaybe<Scalars['BigDecimal']>;
  feeAmount_gt?: InputMaybe<Scalars['BigDecimal']>;
  feeAmount_lt?: InputMaybe<Scalars['BigDecimal']>;
  feeAmount_gte?: InputMaybe<Scalars['BigDecimal']>;
  feeAmount_lte?: InputMaybe<Scalars['BigDecimal']>;
  feeAmount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feeAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type FlashLoan_orderBy =
  | 'id'
  | 'bentoBox'
  | 'borrower'
  | 'receiver'
  | 'token'
  | 'amount'
  | 'feeAmount'
  | 'block'
  | 'timestamp';

export type MasterContract = {
  id: Scalars['ID'];
  bentoBox: BentoBox;
  clones?: Maybe<Array<Clone>>;
  masterContractApprovals?: Maybe<Array<MasterContractApproval>>;
};


export type MasterContractclonesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Clone_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Clone_filter>;
};


export type MasterContractmasterContractApprovalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterContractApproval_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MasterContractApproval_filter>;
};

export type MasterContractApproval = {
  id: Scalars['ID'];
  masterContract: MasterContract;
  user: User;
  approved: Scalars['Boolean'];
};

export type MasterContractApproval_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  masterContract?: InputMaybe<Scalars['String']>;
  masterContract_not?: InputMaybe<Scalars['String']>;
  masterContract_gt?: InputMaybe<Scalars['String']>;
  masterContract_lt?: InputMaybe<Scalars['String']>;
  masterContract_gte?: InputMaybe<Scalars['String']>;
  masterContract_lte?: InputMaybe<Scalars['String']>;
  masterContract_in?: InputMaybe<Array<Scalars['String']>>;
  masterContract_not_in?: InputMaybe<Array<Scalars['String']>>;
  masterContract_contains?: InputMaybe<Scalars['String']>;
  masterContract_contains_nocase?: InputMaybe<Scalars['String']>;
  masterContract_not_contains?: InputMaybe<Scalars['String']>;
  masterContract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  masterContract_starts_with?: InputMaybe<Scalars['String']>;
  masterContract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  masterContract_not_starts_with?: InputMaybe<Scalars['String']>;
  masterContract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  masterContract_ends_with?: InputMaybe<Scalars['String']>;
  masterContract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  masterContract_not_ends_with?: InputMaybe<Scalars['String']>;
  masterContract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  approved?: InputMaybe<Scalars['Boolean']>;
  approved_not?: InputMaybe<Scalars['Boolean']>;
  approved_in?: InputMaybe<Array<Scalars['Boolean']>>;
  approved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type MasterContractApproval_orderBy =
  | 'id'
  | 'masterContract'
  | 'user'
  | 'approved';

export type MasterContract_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  bentoBox?: InputMaybe<Scalars['String']>;
  bentoBox_not?: InputMaybe<Scalars['String']>;
  bentoBox_gt?: InputMaybe<Scalars['String']>;
  bentoBox_lt?: InputMaybe<Scalars['String']>;
  bentoBox_gte?: InputMaybe<Scalars['String']>;
  bentoBox_lte?: InputMaybe<Scalars['String']>;
  bentoBox_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_not_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_contains?: InputMaybe<Scalars['String']>;
  bentoBox_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
};

export type MasterContract_orderBy =
  | 'id'
  | 'bentoBox'
  | 'clones'
  | 'masterContractApprovals';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Protocol = {
  id: Scalars['ID'];
  bentoBox: BentoBox;
};

export type Protocol_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  bentoBox?: InputMaybe<Scalars['String']>;
  bentoBox_not?: InputMaybe<Scalars['String']>;
  bentoBox_gt?: InputMaybe<Scalars['String']>;
  bentoBox_lt?: InputMaybe<Scalars['String']>;
  bentoBox_gte?: InputMaybe<Scalars['String']>;
  bentoBox_lte?: InputMaybe<Scalars['String']>;
  bentoBox_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_not_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_contains?: InputMaybe<Scalars['String']>;
  bentoBox_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
};

export type Protocol_orderBy =
  | 'id'
  | 'bentoBox';

export type Query = {
  bentoBox?: Maybe<BentoBox>;
  bentoBoxes: Array<BentoBox>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  strategy?: Maybe<Strategy>;
  strategies: Array<Strategy>;
  strategyHarvest?: Maybe<StrategyHarvest>;
  strategyHarvests: Array<StrategyHarvest>;
  rebase?: Maybe<Rebase>;
  rebases: Array<Rebase>;
  flashLoan?: Maybe<FlashLoan>;
  flashLoans: Array<FlashLoan>;
  masterContract?: Maybe<MasterContract>;
  masterContracts: Array<MasterContract>;
  clone?: Maybe<Clone>;
  clones: Array<Clone>;
  masterContractApproval?: Maybe<MasterContractApproval>;
  masterContractApprovals: Array<MasterContractApproval>;
  protocol?: Maybe<Protocol>;
  protocols: Array<Protocol>;
  user?: Maybe<User>;
  users: Array<User>;
  userToken?: Maybe<UserToken>;
  userTokens: Array<UserToken>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerybentoBoxArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybentoBoxesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BentoBox_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BentoBox_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystrategyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystrategiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Strategy_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Strategy_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystrategyHarvestArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystrategyHarvestsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StrategyHarvest_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StrategyHarvest_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrebaseArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrebasesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Rebase_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Rebase_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryflashLoanArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryflashLoansArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlashLoan_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlashLoan_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymasterContractArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymasterContractsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterContract_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MasterContract_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycloneArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryclonesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Clone_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Clone_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymasterContractApprovalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymasterContractApprovalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterContractApproval_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MasterContractApproval_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprotocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprotocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Protocol_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Protocol_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Rebase = {
  id: Scalars['ID'];
  token: Token;
  base: Scalars['BigDecimal'];
  elastic: Scalars['BigDecimal'];
};

export type Rebase_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  base?: InputMaybe<Scalars['BigDecimal']>;
  base_not?: InputMaybe<Scalars['BigDecimal']>;
  base_gt?: InputMaybe<Scalars['BigDecimal']>;
  base_lt?: InputMaybe<Scalars['BigDecimal']>;
  base_gte?: InputMaybe<Scalars['BigDecimal']>;
  base_lte?: InputMaybe<Scalars['BigDecimal']>;
  base_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  base_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  elastic?: InputMaybe<Scalars['BigDecimal']>;
  elastic_not?: InputMaybe<Scalars['BigDecimal']>;
  elastic_gt?: InputMaybe<Scalars['BigDecimal']>;
  elastic_lt?: InputMaybe<Scalars['BigDecimal']>;
  elastic_gte?: InputMaybe<Scalars['BigDecimal']>;
  elastic_lte?: InputMaybe<Scalars['BigDecimal']>;
  elastic_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  elastic_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export type Rebase_orderBy =
  | 'id'
  | 'token'
  | 'base'
  | 'elastic';

export type Strategy = {
  id: Scalars['ID'];
  token: Token;
  balance: Scalars['BigInt'];
  totalProfit: Scalars['BigInt'];
  harvests?: Maybe<Array<StrategyHarvest>>;
  timestamp: Scalars['BigInt'];
  block: Scalars['BigInt'];
};


export type StrategyharvestsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StrategyHarvest_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StrategyHarvest_filter>;
};

export type StrategyHarvest = {
  id: Scalars['ID'];
  strategy: Strategy;
  profit: Scalars['BigDecimal'];
  tokenElastic: Scalars['BigDecimal'];
  timestamp: Scalars['BigInt'];
  block: Scalars['BigInt'];
};

export type StrategyHarvest_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  strategy?: InputMaybe<Scalars['String']>;
  strategy_not?: InputMaybe<Scalars['String']>;
  strategy_gt?: InputMaybe<Scalars['String']>;
  strategy_lt?: InputMaybe<Scalars['String']>;
  strategy_gte?: InputMaybe<Scalars['String']>;
  strategy_lte?: InputMaybe<Scalars['String']>;
  strategy_in?: InputMaybe<Array<Scalars['String']>>;
  strategy_not_in?: InputMaybe<Array<Scalars['String']>>;
  strategy_contains?: InputMaybe<Scalars['String']>;
  strategy_contains_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_contains?: InputMaybe<Scalars['String']>;
  strategy_not_contains_nocase?: InputMaybe<Scalars['String']>;
  strategy_starts_with?: InputMaybe<Scalars['String']>;
  strategy_starts_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_starts_with?: InputMaybe<Scalars['String']>;
  strategy_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_ends_with?: InputMaybe<Scalars['String']>;
  strategy_ends_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_ends_with?: InputMaybe<Scalars['String']>;
  strategy_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  profit?: InputMaybe<Scalars['BigDecimal']>;
  profit_not?: InputMaybe<Scalars['BigDecimal']>;
  profit_gt?: InputMaybe<Scalars['BigDecimal']>;
  profit_lt?: InputMaybe<Scalars['BigDecimal']>;
  profit_gte?: InputMaybe<Scalars['BigDecimal']>;
  profit_lte?: InputMaybe<Scalars['BigDecimal']>;
  profit_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  profit_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tokenElastic?: InputMaybe<Scalars['BigDecimal']>;
  tokenElastic_not?: InputMaybe<Scalars['BigDecimal']>;
  tokenElastic_gt?: InputMaybe<Scalars['BigDecimal']>;
  tokenElastic_lt?: InputMaybe<Scalars['BigDecimal']>;
  tokenElastic_gte?: InputMaybe<Scalars['BigDecimal']>;
  tokenElastic_lte?: InputMaybe<Scalars['BigDecimal']>;
  tokenElastic_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tokenElastic_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type StrategyHarvest_orderBy =
  | 'id'
  | 'strategy'
  | 'profit'
  | 'tokenElastic'
  | 'timestamp'
  | 'block';

export type Strategy_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalProfit?: InputMaybe<Scalars['BigInt']>;
  totalProfit_not?: InputMaybe<Scalars['BigInt']>;
  totalProfit_gt?: InputMaybe<Scalars['BigInt']>;
  totalProfit_lt?: InputMaybe<Scalars['BigInt']>;
  totalProfit_gte?: InputMaybe<Scalars['BigInt']>;
  totalProfit_lte?: InputMaybe<Scalars['BigInt']>;
  totalProfit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalProfit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type Strategy_orderBy =
  | 'id'
  | 'token'
  | 'balance'
  | 'totalProfit'
  | 'harvests'
  | 'timestamp'
  | 'block';

export type Subscription = {
  bentoBox?: Maybe<BentoBox>;
  bentoBoxes: Array<BentoBox>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  strategy?: Maybe<Strategy>;
  strategies: Array<Strategy>;
  strategyHarvest?: Maybe<StrategyHarvest>;
  strategyHarvests: Array<StrategyHarvest>;
  rebase?: Maybe<Rebase>;
  rebases: Array<Rebase>;
  flashLoan?: Maybe<FlashLoan>;
  flashLoans: Array<FlashLoan>;
  masterContract?: Maybe<MasterContract>;
  masterContracts: Array<MasterContract>;
  clone?: Maybe<Clone>;
  clones: Array<Clone>;
  masterContractApproval?: Maybe<MasterContractApproval>;
  masterContractApprovals: Array<MasterContractApproval>;
  protocol?: Maybe<Protocol>;
  protocols: Array<Protocol>;
  user?: Maybe<User>;
  users: Array<User>;
  userToken?: Maybe<UserToken>;
  userTokens: Array<UserToken>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionbentoBoxArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbentoBoxesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BentoBox_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BentoBox_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstrategyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstrategiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Strategy_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Strategy_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstrategyHarvestArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstrategyHarvestsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StrategyHarvest_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StrategyHarvest_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrebaseArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrebasesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Rebase_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Rebase_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionflashLoanArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionflashLoansArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FlashLoan_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FlashLoan_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmasterContractArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmasterContractsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterContract_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MasterContract_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncloneArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionclonesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Clone_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Clone_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmasterContractApprovalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmasterContractApprovalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterContractApproval_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MasterContractApproval_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprotocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprotocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Protocol_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Protocol_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Token = {
  id: Scalars['ID'];
  bentoBox: BentoBox;
  rebase: Rebase;
  symbol: Scalars['String'];
  symbolSuccess: Scalars['Boolean'];
  name: Scalars['String'];
  nameSuccess: Scalars['Boolean'];
  decimals: Scalars['BigInt'];
  decimalsSuccess: Scalars['Boolean'];
  strategy?: Maybe<Strategy>;
  strategyTargetPercentage: Scalars['BigInt'];
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};

export type Token_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  bentoBox?: InputMaybe<Scalars['String']>;
  bentoBox_not?: InputMaybe<Scalars['String']>;
  bentoBox_gt?: InputMaybe<Scalars['String']>;
  bentoBox_lt?: InputMaybe<Scalars['String']>;
  bentoBox_gte?: InputMaybe<Scalars['String']>;
  bentoBox_lte?: InputMaybe<Scalars['String']>;
  bentoBox_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_not_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_contains?: InputMaybe<Scalars['String']>;
  bentoBox_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rebase?: InputMaybe<Scalars['String']>;
  rebase_not?: InputMaybe<Scalars['String']>;
  rebase_gt?: InputMaybe<Scalars['String']>;
  rebase_lt?: InputMaybe<Scalars['String']>;
  rebase_gte?: InputMaybe<Scalars['String']>;
  rebase_lte?: InputMaybe<Scalars['String']>;
  rebase_in?: InputMaybe<Array<Scalars['String']>>;
  rebase_not_in?: InputMaybe<Array<Scalars['String']>>;
  rebase_contains?: InputMaybe<Scalars['String']>;
  rebase_contains_nocase?: InputMaybe<Scalars['String']>;
  rebase_not_contains?: InputMaybe<Scalars['String']>;
  rebase_not_contains_nocase?: InputMaybe<Scalars['String']>;
  rebase_starts_with?: InputMaybe<Scalars['String']>;
  rebase_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rebase_not_starts_with?: InputMaybe<Scalars['String']>;
  rebase_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rebase_ends_with?: InputMaybe<Scalars['String']>;
  rebase_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rebase_not_ends_with?: InputMaybe<Scalars['String']>;
  rebase_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbolSuccess?: InputMaybe<Scalars['Boolean']>;
  symbolSuccess_not?: InputMaybe<Scalars['Boolean']>;
  symbolSuccess_in?: InputMaybe<Array<Scalars['Boolean']>>;
  symbolSuccess_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nameSuccess?: InputMaybe<Scalars['Boolean']>;
  nameSuccess_not?: InputMaybe<Scalars['Boolean']>;
  nameSuccess_in?: InputMaybe<Array<Scalars['Boolean']>>;
  nameSuccess_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  decimals?: InputMaybe<Scalars['BigInt']>;
  decimals_not?: InputMaybe<Scalars['BigInt']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']>;
  decimals_lt?: InputMaybe<Scalars['BigInt']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimalsSuccess?: InputMaybe<Scalars['Boolean']>;
  decimalsSuccess_not?: InputMaybe<Scalars['Boolean']>;
  decimalsSuccess_in?: InputMaybe<Array<Scalars['Boolean']>>;
  decimalsSuccess_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  strategy?: InputMaybe<Scalars['String']>;
  strategy_not?: InputMaybe<Scalars['String']>;
  strategy_gt?: InputMaybe<Scalars['String']>;
  strategy_lt?: InputMaybe<Scalars['String']>;
  strategy_gte?: InputMaybe<Scalars['String']>;
  strategy_lte?: InputMaybe<Scalars['String']>;
  strategy_in?: InputMaybe<Array<Scalars['String']>>;
  strategy_not_in?: InputMaybe<Array<Scalars['String']>>;
  strategy_contains?: InputMaybe<Scalars['String']>;
  strategy_contains_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_contains?: InputMaybe<Scalars['String']>;
  strategy_not_contains_nocase?: InputMaybe<Scalars['String']>;
  strategy_starts_with?: InputMaybe<Scalars['String']>;
  strategy_starts_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_starts_with?: InputMaybe<Scalars['String']>;
  strategy_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_ends_with?: InputMaybe<Scalars['String']>;
  strategy_ends_with_nocase?: InputMaybe<Scalars['String']>;
  strategy_not_ends_with?: InputMaybe<Scalars['String']>;
  strategy_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  strategyTargetPercentage?: InputMaybe<Scalars['BigInt']>;
  strategyTargetPercentage_not?: InputMaybe<Scalars['BigInt']>;
  strategyTargetPercentage_gt?: InputMaybe<Scalars['BigInt']>;
  strategyTargetPercentage_lt?: InputMaybe<Scalars['BigInt']>;
  strategyTargetPercentage_gte?: InputMaybe<Scalars['BigInt']>;
  strategyTargetPercentage_lte?: InputMaybe<Scalars['BigInt']>;
  strategyTargetPercentage_in?: InputMaybe<Array<Scalars['BigInt']>>;
  strategyTargetPercentage_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type Token_orderBy =
  | 'id'
  | 'bentoBox'
  | 'rebase'
  | 'symbol'
  | 'symbolSuccess'
  | 'name'
  | 'nameSuccess'
  | 'decimals'
  | 'decimalsSuccess'
  | 'strategy'
  | 'strategyTargetPercentage'
  | 'block'
  | 'timestamp';

export type Transaction = {
  id: Scalars['ID'];
  bentoBox: BentoBox;
  type: TransactionType;
  from: User;
  to: User;
  token: Token;
  amount?: Maybe<Scalars['BigInt']>;
  share: Scalars['BigInt'];
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};

export type TransactionType =
  | 'deposit'
  | 'transfer'
  | 'withdraw';

export type Transaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  bentoBox?: InputMaybe<Scalars['String']>;
  bentoBox_not?: InputMaybe<Scalars['String']>;
  bentoBox_gt?: InputMaybe<Scalars['String']>;
  bentoBox_lt?: InputMaybe<Scalars['String']>;
  bentoBox_gte?: InputMaybe<Scalars['String']>;
  bentoBox_lte?: InputMaybe<Scalars['String']>;
  bentoBox_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_not_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_contains?: InputMaybe<Scalars['String']>;
  bentoBox_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<TransactionType>;
  type_not?: InputMaybe<TransactionType>;
  type_in?: InputMaybe<Array<TransactionType>>;
  type_not_in?: InputMaybe<Array<TransactionType>>;
  from?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  share?: InputMaybe<Scalars['BigInt']>;
  share_not?: InputMaybe<Scalars['BigInt']>;
  share_gt?: InputMaybe<Scalars['BigInt']>;
  share_lt?: InputMaybe<Scalars['BigInt']>;
  share_gte?: InputMaybe<Scalars['BigInt']>;
  share_lte?: InputMaybe<Scalars['BigInt']>;
  share_in?: InputMaybe<Array<Scalars['BigInt']>>;
  share_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type Transaction_orderBy =
  | 'id'
  | 'bentoBox'
  | 'type'
  | 'from'
  | 'to'
  | 'token'
  | 'amount'
  | 'share'
  | 'block'
  | 'timestamp';

export type User = {
  id: Scalars['ID'];
  bentoBox: BentoBox;
  masterContractApprovals?: Maybe<Array<MasterContractApproval>>;
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};


export type UsermasterContractApprovalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MasterContractApproval_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MasterContractApproval_filter>;
};

export type UserToken = {
  id: Scalars['ID'];
  token: Token;
  user: User;
  share: Scalars['BigDecimal'];
};

export type UserToken_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  share?: InputMaybe<Scalars['BigDecimal']>;
  share_not?: InputMaybe<Scalars['BigDecimal']>;
  share_gt?: InputMaybe<Scalars['BigDecimal']>;
  share_lt?: InputMaybe<Scalars['BigDecimal']>;
  share_gte?: InputMaybe<Scalars['BigDecimal']>;
  share_lte?: InputMaybe<Scalars['BigDecimal']>;
  share_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  share_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export type UserToken_orderBy =
  | 'id'
  | 'token'
  | 'user'
  | 'share';

export type User_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  bentoBox?: InputMaybe<Scalars['String']>;
  bentoBox_not?: InputMaybe<Scalars['String']>;
  bentoBox_gt?: InputMaybe<Scalars['String']>;
  bentoBox_lt?: InputMaybe<Scalars['String']>;
  bentoBox_gte?: InputMaybe<Scalars['String']>;
  bentoBox_lte?: InputMaybe<Scalars['String']>;
  bentoBox_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_not_in?: InputMaybe<Array<Scalars['String']>>;
  bentoBox_contains?: InputMaybe<Scalars['String']>;
  bentoBox_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains?: InputMaybe<Scalars['String']>;
  bentoBox_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with?: InputMaybe<Scalars['String']>;
  bentoBox_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type User_orderBy =
  | 'id'
  | 'bentoBox'
  | 'masterContractApprovals'
  | 'block'
  | 'timestamp';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

    }
    export type QueryBentoboxSdk = {
  /** null **/
  bentoBox: InContextSdkMethod<BentoboxTypes.Query['bentoBox'], BentoboxTypes.QuerybentoBoxArgs, MeshContext>,
  /** null **/
  bentoBoxes: InContextSdkMethod<BentoboxTypes.Query['bentoBoxes'], BentoboxTypes.QuerybentoBoxesArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<BentoboxTypes.Query['token'], BentoboxTypes.QuerytokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<BentoboxTypes.Query['tokens'], BentoboxTypes.QuerytokensArgs, MeshContext>,
  /** null **/
  strategy: InContextSdkMethod<BentoboxTypes.Query['strategy'], BentoboxTypes.QuerystrategyArgs, MeshContext>,
  /** null **/
  strategies: InContextSdkMethod<BentoboxTypes.Query['strategies'], BentoboxTypes.QuerystrategiesArgs, MeshContext>,
  /** null **/
  strategyHarvest: InContextSdkMethod<BentoboxTypes.Query['strategyHarvest'], BentoboxTypes.QuerystrategyHarvestArgs, MeshContext>,
  /** null **/
  strategyHarvests: InContextSdkMethod<BentoboxTypes.Query['strategyHarvests'], BentoboxTypes.QuerystrategyHarvestsArgs, MeshContext>,
  /** null **/
  rebase: InContextSdkMethod<BentoboxTypes.Query['rebase'], BentoboxTypes.QueryrebaseArgs, MeshContext>,
  /** null **/
  rebases: InContextSdkMethod<BentoboxTypes.Query['rebases'], BentoboxTypes.QueryrebasesArgs, MeshContext>,
  /** null **/
  flashLoan: InContextSdkMethod<BentoboxTypes.Query['flashLoan'], BentoboxTypes.QueryflashLoanArgs, MeshContext>,
  /** null **/
  flashLoans: InContextSdkMethod<BentoboxTypes.Query['flashLoans'], BentoboxTypes.QueryflashLoansArgs, MeshContext>,
  /** null **/
  masterContract: InContextSdkMethod<BentoboxTypes.Query['masterContract'], BentoboxTypes.QuerymasterContractArgs, MeshContext>,
  /** null **/
  masterContracts: InContextSdkMethod<BentoboxTypes.Query['masterContracts'], BentoboxTypes.QuerymasterContractsArgs, MeshContext>,
  /** null **/
  clone: InContextSdkMethod<BentoboxTypes.Query['clone'], BentoboxTypes.QuerycloneArgs, MeshContext>,
  /** null **/
  clones: InContextSdkMethod<BentoboxTypes.Query['clones'], BentoboxTypes.QueryclonesArgs, MeshContext>,
  /** null **/
  masterContractApproval: InContextSdkMethod<BentoboxTypes.Query['masterContractApproval'], BentoboxTypes.QuerymasterContractApprovalArgs, MeshContext>,
  /** null **/
  masterContractApprovals: InContextSdkMethod<BentoboxTypes.Query['masterContractApprovals'], BentoboxTypes.QuerymasterContractApprovalsArgs, MeshContext>,
  /** null **/
  protocol: InContextSdkMethod<BentoboxTypes.Query['protocol'], BentoboxTypes.QueryprotocolArgs, MeshContext>,
  /** null **/
  protocols: InContextSdkMethod<BentoboxTypes.Query['protocols'], BentoboxTypes.QueryprotocolsArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<BentoboxTypes.Query['user'], BentoboxTypes.QueryuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<BentoboxTypes.Query['users'], BentoboxTypes.QueryusersArgs, MeshContext>,
  /** null **/
  userToken: InContextSdkMethod<BentoboxTypes.Query['userToken'], BentoboxTypes.QueryuserTokenArgs, MeshContext>,
  /** null **/
  userTokens: InContextSdkMethod<BentoboxTypes.Query['userTokens'], BentoboxTypes.QueryuserTokensArgs, MeshContext>,
  /** null **/
  transaction: InContextSdkMethod<BentoboxTypes.Query['transaction'], BentoboxTypes.QuerytransactionArgs, MeshContext>,
  /** null **/
  transactions: InContextSdkMethod<BentoboxTypes.Query['transactions'], BentoboxTypes.QuerytransactionsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<BentoboxTypes.Query['_meta'], BentoboxTypes.Query_metaArgs, MeshContext>
};

export type MutationBentoboxSdk = {

};

export type SubscriptionBentoboxSdk = {
  /** null **/
  bentoBox: InContextSdkMethod<BentoboxTypes.Subscription['bentoBox'], BentoboxTypes.SubscriptionbentoBoxArgs, MeshContext>,
  /** null **/
  bentoBoxes: InContextSdkMethod<BentoboxTypes.Subscription['bentoBoxes'], BentoboxTypes.SubscriptionbentoBoxesArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<BentoboxTypes.Subscription['token'], BentoboxTypes.SubscriptiontokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<BentoboxTypes.Subscription['tokens'], BentoboxTypes.SubscriptiontokensArgs, MeshContext>,
  /** null **/
  strategy: InContextSdkMethod<BentoboxTypes.Subscription['strategy'], BentoboxTypes.SubscriptionstrategyArgs, MeshContext>,
  /** null **/
  strategies: InContextSdkMethod<BentoboxTypes.Subscription['strategies'], BentoboxTypes.SubscriptionstrategiesArgs, MeshContext>,
  /** null **/
  strategyHarvest: InContextSdkMethod<BentoboxTypes.Subscription['strategyHarvest'], BentoboxTypes.SubscriptionstrategyHarvestArgs, MeshContext>,
  /** null **/
  strategyHarvests: InContextSdkMethod<BentoboxTypes.Subscription['strategyHarvests'], BentoboxTypes.SubscriptionstrategyHarvestsArgs, MeshContext>,
  /** null **/
  rebase: InContextSdkMethod<BentoboxTypes.Subscription['rebase'], BentoboxTypes.SubscriptionrebaseArgs, MeshContext>,
  /** null **/
  rebases: InContextSdkMethod<BentoboxTypes.Subscription['rebases'], BentoboxTypes.SubscriptionrebasesArgs, MeshContext>,
  /** null **/
  flashLoan: InContextSdkMethod<BentoboxTypes.Subscription['flashLoan'], BentoboxTypes.SubscriptionflashLoanArgs, MeshContext>,
  /** null **/
  flashLoans: InContextSdkMethod<BentoboxTypes.Subscription['flashLoans'], BentoboxTypes.SubscriptionflashLoansArgs, MeshContext>,
  /** null **/
  masterContract: InContextSdkMethod<BentoboxTypes.Subscription['masterContract'], BentoboxTypes.SubscriptionmasterContractArgs, MeshContext>,
  /** null **/
  masterContracts: InContextSdkMethod<BentoboxTypes.Subscription['masterContracts'], BentoboxTypes.SubscriptionmasterContractsArgs, MeshContext>,
  /** null **/
  clone: InContextSdkMethod<BentoboxTypes.Subscription['clone'], BentoboxTypes.SubscriptioncloneArgs, MeshContext>,
  /** null **/
  clones: InContextSdkMethod<BentoboxTypes.Subscription['clones'], BentoboxTypes.SubscriptionclonesArgs, MeshContext>,
  /** null **/
  masterContractApproval: InContextSdkMethod<BentoboxTypes.Subscription['masterContractApproval'], BentoboxTypes.SubscriptionmasterContractApprovalArgs, MeshContext>,
  /** null **/
  masterContractApprovals: InContextSdkMethod<BentoboxTypes.Subscription['masterContractApprovals'], BentoboxTypes.SubscriptionmasterContractApprovalsArgs, MeshContext>,
  /** null **/
  protocol: InContextSdkMethod<BentoboxTypes.Subscription['protocol'], BentoboxTypes.SubscriptionprotocolArgs, MeshContext>,
  /** null **/
  protocols: InContextSdkMethod<BentoboxTypes.Subscription['protocols'], BentoboxTypes.SubscriptionprotocolsArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<BentoboxTypes.Subscription['user'], BentoboxTypes.SubscriptionuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<BentoboxTypes.Subscription['users'], BentoboxTypes.SubscriptionusersArgs, MeshContext>,
  /** null **/
  userToken: InContextSdkMethod<BentoboxTypes.Subscription['userToken'], BentoboxTypes.SubscriptionuserTokenArgs, MeshContext>,
  /** null **/
  userTokens: InContextSdkMethod<BentoboxTypes.Subscription['userTokens'], BentoboxTypes.SubscriptionuserTokensArgs, MeshContext>,
  /** null **/
  transaction: InContextSdkMethod<BentoboxTypes.Subscription['transaction'], BentoboxTypes.SubscriptiontransactionArgs, MeshContext>,
  /** null **/
  transactions: InContextSdkMethod<BentoboxTypes.Subscription['transactions'], BentoboxTypes.SubscriptiontransactionsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<BentoboxTypes.Subscription['_meta'], BentoboxTypes.Subscription_metaArgs, MeshContext>
};

export type BentoboxContext = {
      ["bentobox"]: { Query: QueryBentoboxSdk, Mutation: MutationBentoboxSdk, Subscription: SubscriptionBentoboxSdk },
    };

export type MeshContext = BentoboxContext & BaseMeshContext;


import { getMesh } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import pathModule from 'path';
import { fileURLToPath } from '@graphql-mesh/utils';
import ExternalModule_0 from '@graphql-mesh/cache-inmemory-lru';
import ExternalModule_1 from '@graphql-mesh/graphql';
import ExternalModule_2 from '@graphql-mesh/merger-bare';
import ExternalModule_3 from './sources/bentobox/schema.graphql.ts';

const importedModules: Record<string, any> = {
  // @ts-ignore
  ["@graphql-mesh/cache-inmemory-lru"]: ExternalModule_0,
  // @ts-ignore
  ["@graphql-mesh/graphql"]: ExternalModule_1,
  // @ts-ignore
  ["@graphql-mesh/merger-bare"]: ExternalModule_2,
  // @ts-ignore
  [".graphclient/sources/bentobox/schema.graphql.ts"]: ExternalModule_3
};

const baseDir = pathModule.join(__dirname, '..');

const importFn = (moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  if (!(relativeModuleId in importedModules)) {
    throw new Error(`Cannot find module '${relativeModuleId}'.`);
  }
  return Promise.resolve(importedModules[relativeModuleId]);
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
}), {
  readonly: true,
  validate: false
});

import { GetMeshOptions } from '@graphql-mesh/runtime';
import { YamlConfig } from '@graphql-mesh/types';
import { parse } from 'graphql';
import { PubSub } from '@graphql-mesh/utils';
import MeshCache from '@graphql-mesh/cache-inmemory-lru';
import { DefaultLogger } from '@graphql-mesh/utils';
import GraphqlHandler from '@graphql-mesh/graphql'
import BareMerger from '@graphql-mesh/merger-bare';
import { resolveAdditionalResolvers } from '@graphql-mesh/utils';
export const rawConfig: YamlConfig.Config = {"sources":[{"name":"bentobox","handler":{"graphql":{"endpoint":"https://api.thegraph.com/subgraphs/name/matthewlilley/bentobox-ethereum"}}}],"documents":["./query.graphql"]} as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const cache = new (MeshCache as any)({
      ...(rawConfig.cache || {}),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
    } as any)
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger('🕸️');
const sources = [];
const transforms = [];
const bentoboxTransforms = [];
const additionalTypeDefs: DocumentNode[] = [] as any[];
const bentoboxHandler = new GraphqlHandler({
              name: rawConfig.sources[0].name,
              config: rawConfig.sources[0].handler["graphql"],
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child(rawConfig.sources[0].name),
              logger: logger.child(rawConfig.sources[0].name),
              importFn
            });
sources.push({
          name: 'bentobox',
          handler: bentoboxHandler,
          transforms: bentoboxTransforms
        })
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('BareMerger'),
        store: rootStore.child('bareMerger')
      })
const additionalResolversRawConfig = [];
const additionalResolvers = await resolveAdditionalResolvers(
      baseDir,
      additionalResolversRawConfig,
      importFn,
      pubsub
  )
const liveQueryInvalidations = rawConfig.liveQueryInvalidations;
const additionalEnvelopPlugins = [];

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    liveQueryInvalidations,
    additionalEnvelopPlugins,
  };
}

export const documentsInSDL = /*#__PURE__*/ [/* GraphQL */`query BentoBox {
  bentoBox(id: "0xf5bce5077908a1b7370b9ae04adc565ebd643966") {
    __typename
    id
    tokens {
      id
      rebase {
        id
        elastic
      }
    }
  }
}`];

export async function getBuiltGraphClient(): Promise<MeshInstance<MeshContext>> {
  const meshConfig = await getMeshOptions();
  return getMesh<MeshContext>(meshConfig);
}

export async function getBuiltGraphSDK<TGlobalContext = any, TGlobalRoot = any, TOperationContext = any, TOperationRoot = any>(sdkOptions?: SdkOptions<TGlobalContext, TGlobalRoot>) {
  const { schema } = await getBuiltGraphClient();
  return getSdk<TGlobalContext, TGlobalRoot, TOperationContext, TOperationRoot>(schema, sdkOptions);
}
export type BentoBoxQueryVariables = Exact<{ [key: string]: never; }>;


export type BentoBoxQuery = { bentoBox?: Maybe<(
    { __typename: 'BentoBox' }
    & Pick<BentoBox, 'id'>
    & { tokens?: Maybe<Array<(
      Pick<Token, 'id'>
      & { rebase: Pick<Rebase, 'id' | 'elastic'> }
    )>> }
  )> };


export const BentoBoxDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BentoBox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bentoBox"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"0xf5bce5077908a1b7370b9ae04adc565ebd643966","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tokens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rebase"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"elastic"}}]}}]}}]}}]}}]} as unknown as DocumentNode<BentoBoxQuery, BentoBoxQueryVariables>;


function handleExecutionResult<T>(result: ExecutionResult, operationName: string) {
  if (result.errors) {
    const originalErrors = result.errors.map(error => error.originalError|| error);
    throw new AggregateError(originalErrors, `Failed to execute ${operationName}: \n\t${originalErrors.join('\n\t')}`);
  }
  return result.data as unknown as T;
}
export interface SdkOptions<TGlobalContext = any, TGlobalRoot = any> {
  globalContext?: TGlobalContext;
  globalRoot?: TGlobalRoot;
  jitOptions?: Partial<CompilerOptions>;
}
export function getSdk<TGlobalContext = any, TGlobalRoot = any, TOperationContext = any, TOperationRoot = any>(schema: GraphQLSchema, { globalContext, globalRoot, jitOptions = {} }: SdkOptions<TGlobalContext, TGlobalRoot> = {}) {
    const BentoBoxCompiled = compileQuery(schema, BentoBoxDocument, 'BentoBox', jitOptions);
    if(!(isCompiledQuery(BentoBoxCompiled))) {
      const originalErrors = BentoBoxCompiled?.errors?.map(error => error.originalError || error) || [];
      throw new AggregateError(originalErrors, `Failed to compile BentoBox: \n\t${originalErrors.join('\n\t')}`);
    }

  return {
    async BentoBox(variables?: BentoBoxQueryVariables, context?: TOperationContext, root?: TOperationRoot): Promise<BentoBoxQuery> {
      const result = await BentoBoxCompiled.query({
        ...globalRoot,
        ...root
      }, {
        ...globalContext,
        ...context
      }, variables);
      return handleExecutionResult(result, 'BentoBox');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;