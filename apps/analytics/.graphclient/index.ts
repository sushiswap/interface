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
  factory?: Maybe<Factory>;
  factories: Array<Factory>;
  pair?: Maybe<Pair>;
  pairs: Array<Pair>;
  pairAsset?: Maybe<PairAsset>;
  pairAssets: Array<PairAsset>;
  pairKpi?: Maybe<PairKpi>;
  pairKpis: Array<PairKpi>;
  tokenKpi?: Maybe<TokenKpi>;
  tokenKpis: Array<TokenKpi>;
  tokenPrice?: Maybe<TokenPrice>;
  tokenPrices: Array<TokenPrice>;
  whitelistedToken?: Maybe<WhitelistedToken>;
  whitelistedTokens: Array<WhitelistedToken>;
  whitelistedPair?: Maybe<WhitelistedPair>;
  whitelistedPairs: Array<WhitelistedPair>;
  mint?: Maybe<Mint>;
  mints: Array<Mint>;
  burn?: Maybe<Burn>;
  burns: Array<Burn>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  candle?: Maybe<Candle>;
  candles: Array<Candle>;
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


export type QueryfactoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfactoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Factory_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Factory_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pair_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pair_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairAssetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairAssetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairAsset_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairAsset_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairKpiArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairKpisArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairKpi_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairKpi_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenKpiArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenKpisArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenKpi_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenKpi_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenPriceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenPricesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenPrice_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenPrice_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywhitelistedTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywhitelistedTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WhitelistedToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WhitelistedToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywhitelistedPairArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywhitelistedPairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WhitelistedPair_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WhitelistedPair_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymintArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Mint_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Mint_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryburnArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryburnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Burn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Burn_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycandleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycandlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Candle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Candle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

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
  factory?: Maybe<Factory>;
  factories: Array<Factory>;
  pair?: Maybe<Pair>;
  pairs: Array<Pair>;
  pairAsset?: Maybe<PairAsset>;
  pairAssets: Array<PairAsset>;
  pairKpi?: Maybe<PairKpi>;
  pairKpis: Array<PairKpi>;
  tokenKpi?: Maybe<TokenKpi>;
  tokenKpis: Array<TokenKpi>;
  tokenPrice?: Maybe<TokenPrice>;
  tokenPrices: Array<TokenPrice>;
  whitelistedToken?: Maybe<WhitelistedToken>;
  whitelistedTokens: Array<WhitelistedToken>;
  whitelistedPair?: Maybe<WhitelistedPair>;
  whitelistedPairs: Array<WhitelistedPair>;
  mint?: Maybe<Mint>;
  mints: Array<Mint>;
  burn?: Maybe<Burn>;
  burns: Array<Burn>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  candle?: Maybe<Candle>;
  candles: Array<Candle>;
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


export type SubscriptionfactoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfactoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Factory_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Factory_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pair_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pair_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairAssetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairAssetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairAsset_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairAsset_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairKpiArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairKpisArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairKpi_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairKpi_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenKpiArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenKpisArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenKpi_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenKpi_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenPriceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenPricesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenPrice_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenPrice_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwhitelistedTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwhitelistedTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WhitelistedToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WhitelistedToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwhitelistedPairArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwhitelistedPairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WhitelistedPair_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WhitelistedPair_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmintArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Mint_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Mint_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionburnArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionburnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Burn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Burn_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncandleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncandlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Candle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Candle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
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
  factory: Factory;
  price: TokenPrice;
  kpi: TokenKpi;
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
  factory?: InputMaybe<Scalars['String']>;
  factory_not?: InputMaybe<Scalars['String']>;
  factory_gt?: InputMaybe<Scalars['String']>;
  factory_lt?: InputMaybe<Scalars['String']>;
  factory_gte?: InputMaybe<Scalars['String']>;
  factory_lte?: InputMaybe<Scalars['String']>;
  factory_in?: InputMaybe<Array<Scalars['String']>>;
  factory_not_in?: InputMaybe<Array<Scalars['String']>>;
  factory_contains?: InputMaybe<Scalars['String']>;
  factory_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_not_contains?: InputMaybe<Scalars['String']>;
  factory_not_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_starts_with?: InputMaybe<Scalars['String']>;
  factory_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_starts_with?: InputMaybe<Scalars['String']>;
  factory_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_ends_with?: InputMaybe<Scalars['String']>;
  factory_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_ends_with?: InputMaybe<Scalars['String']>;
  factory_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  price_not?: InputMaybe<Scalars['String']>;
  price_gt?: InputMaybe<Scalars['String']>;
  price_lt?: InputMaybe<Scalars['String']>;
  price_gte?: InputMaybe<Scalars['String']>;
  price_lte?: InputMaybe<Scalars['String']>;
  price_in?: InputMaybe<Array<Scalars['String']>>;
  price_not_in?: InputMaybe<Array<Scalars['String']>>;
  price_contains?: InputMaybe<Scalars['String']>;
  price_contains_nocase?: InputMaybe<Scalars['String']>;
  price_not_contains?: InputMaybe<Scalars['String']>;
  price_not_contains_nocase?: InputMaybe<Scalars['String']>;
  price_starts_with?: InputMaybe<Scalars['String']>;
  price_starts_with_nocase?: InputMaybe<Scalars['String']>;
  price_not_starts_with?: InputMaybe<Scalars['String']>;
  price_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  price_ends_with?: InputMaybe<Scalars['String']>;
  price_ends_with_nocase?: InputMaybe<Scalars['String']>;
  price_not_ends_with?: InputMaybe<Scalars['String']>;
  price_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  kpi?: InputMaybe<Scalars['String']>;
  kpi_not?: InputMaybe<Scalars['String']>;
  kpi_gt?: InputMaybe<Scalars['String']>;
  kpi_lt?: InputMaybe<Scalars['String']>;
  kpi_gte?: InputMaybe<Scalars['String']>;
  kpi_lte?: InputMaybe<Scalars['String']>;
  kpi_in?: InputMaybe<Array<Scalars['String']>>;
  kpi_not_in?: InputMaybe<Array<Scalars['String']>>;
  kpi_contains?: InputMaybe<Scalars['String']>;
  kpi_contains_nocase?: InputMaybe<Scalars['String']>;
  kpi_not_contains?: InputMaybe<Scalars['String']>;
  kpi_not_contains_nocase?: InputMaybe<Scalars['String']>;
  kpi_starts_with?: InputMaybe<Scalars['String']>;
  kpi_starts_with_nocase?: InputMaybe<Scalars['String']>;
  kpi_not_starts_with?: InputMaybe<Scalars['String']>;
  kpi_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  kpi_ends_with?: InputMaybe<Scalars['String']>;
  kpi_ends_with_nocase?: InputMaybe<Scalars['String']>;
  kpi_not_ends_with?: InputMaybe<Scalars['String']>;
  kpi_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
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
  | 'timestamp'
  | 'factory'
  | 'price'
  | 'kpi';

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
  gasUsed: Scalars['BigInt'];
  gasLimit: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  mints: Array<Mint>;
  burns: Array<Burn>;
  swaps: Array<Swap>;
};


export type TransactionmintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Mint_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Mint_filter>;
};


export type TransactionburnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Burn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Burn_filter>;
};


export type TransactionswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
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
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit?: InputMaybe<Scalars['BigInt']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  | 'timestamp'
  | 'gasUsed'
  | 'gasLimit'
  | 'gasPrice'
  | 'mints'
  | 'burns'
  | 'swaps';

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

export type Burn = {
  id: Scalars['ID'];
  pair: Pair;
  transaction: Transaction;
  token0: Token;
  token1: Token;
  amount: Scalars['BigInt'];
  amount0: Scalars['BigDecimal'];
  amount1: Scalars['BigDecimal'];
  from: Scalars['Bytes'];
  to: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  logIndex: Scalars['BigInt'];
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};

export type Burn_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount0?: InputMaybe<Scalars['BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1?: InputMaybe<Scalars['BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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

export type Burn_orderBy =
  | 'id'
  | 'pair'
  | 'transaction'
  | 'token0'
  | 'token1'
  | 'amount'
  | 'amount0'
  | 'amount1'
  | 'from'
  | 'to'
  | 'sender'
  | 'logIndex'
  | 'block'
  | 'timestamp';

export type Candle = {
  id: Scalars['ID'];
  time: Scalars['Int'];
  period: Scalars['Int'];
  lastBlock: Scalars['Int'];
  pair: Pair;
  token0: Token;
  token1: Token;
  token0Amount: Scalars['BigDecimal'];
  token0AmountUSD: Scalars['BigDecimal'];
  token0AmountNative: Scalars['BigDecimal'];
  token1Amount: Scalars['BigDecimal'];
  token1AmountUSD: Scalars['BigDecimal'];
  token1AmountNative: Scalars['BigDecimal'];
  open: Scalars['BigDecimal'];
  openUSD: Scalars['BigDecimal'];
  openNative: Scalars['BigDecimal'];
  close: Scalars['BigDecimal'];
  closeUSD: Scalars['BigDecimal'];
  closeNative: Scalars['BigDecimal'];
  low: Scalars['BigDecimal'];
  lowUSD: Scalars['BigDecimal'];
  lowNative: Scalars['BigDecimal'];
  high: Scalars['BigDecimal'];
  highUSD: Scalars['BigDecimal'];
  highNative: Scalars['BigDecimal'];
};

export type Candle_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  time?: InputMaybe<Scalars['Int']>;
  time_not?: InputMaybe<Scalars['Int']>;
  time_gt?: InputMaybe<Scalars['Int']>;
  time_lt?: InputMaybe<Scalars['Int']>;
  time_gte?: InputMaybe<Scalars['Int']>;
  time_lte?: InputMaybe<Scalars['Int']>;
  time_in?: InputMaybe<Array<Scalars['Int']>>;
  time_not_in?: InputMaybe<Array<Scalars['Int']>>;
  period?: InputMaybe<Scalars['Int']>;
  period_not?: InputMaybe<Scalars['Int']>;
  period_gt?: InputMaybe<Scalars['Int']>;
  period_lt?: InputMaybe<Scalars['Int']>;
  period_gte?: InputMaybe<Scalars['Int']>;
  period_lte?: InputMaybe<Scalars['Int']>;
  period_in?: InputMaybe<Array<Scalars['Int']>>;
  period_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastBlock?: InputMaybe<Scalars['Int']>;
  lastBlock_not?: InputMaybe<Scalars['Int']>;
  lastBlock_gt?: InputMaybe<Scalars['Int']>;
  lastBlock_lt?: InputMaybe<Scalars['Int']>;
  lastBlock_gte?: InputMaybe<Scalars['Int']>;
  lastBlock_lte?: InputMaybe<Scalars['Int']>;
  lastBlock_in?: InputMaybe<Array<Scalars['Int']>>;
  lastBlock_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0Amount?: InputMaybe<Scalars['BigDecimal']>;
  token0Amount_not?: InputMaybe<Scalars['BigDecimal']>;
  token0Amount_gt?: InputMaybe<Scalars['BigDecimal']>;
  token0Amount_lt?: InputMaybe<Scalars['BigDecimal']>;
  token0Amount_gte?: InputMaybe<Scalars['BigDecimal']>;
  token0Amount_lte?: InputMaybe<Scalars['BigDecimal']>;
  token0Amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token0Amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token0AmountUSD?: InputMaybe<Scalars['BigDecimal']>;
  token0AmountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  token0AmountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  token0AmountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  token0AmountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  token0AmountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  token0AmountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token0AmountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token0AmountNative?: InputMaybe<Scalars['BigDecimal']>;
  token0AmountNative_not?: InputMaybe<Scalars['BigDecimal']>;
  token0AmountNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  token0AmountNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  token0AmountNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  token0AmountNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  token0AmountNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token0AmountNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1Amount?: InputMaybe<Scalars['BigDecimal']>;
  token1Amount_not?: InputMaybe<Scalars['BigDecimal']>;
  token1Amount_gt?: InputMaybe<Scalars['BigDecimal']>;
  token1Amount_lt?: InputMaybe<Scalars['BigDecimal']>;
  token1Amount_gte?: InputMaybe<Scalars['BigDecimal']>;
  token1Amount_lte?: InputMaybe<Scalars['BigDecimal']>;
  token1Amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1Amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1AmountUSD?: InputMaybe<Scalars['BigDecimal']>;
  token1AmountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  token1AmountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  token1AmountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  token1AmountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  token1AmountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  token1AmountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1AmountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1AmountNative?: InputMaybe<Scalars['BigDecimal']>;
  token1AmountNative_not?: InputMaybe<Scalars['BigDecimal']>;
  token1AmountNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  token1AmountNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  token1AmountNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  token1AmountNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  token1AmountNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1AmountNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  open?: InputMaybe<Scalars['BigDecimal']>;
  open_not?: InputMaybe<Scalars['BigDecimal']>;
  open_gt?: InputMaybe<Scalars['BigDecimal']>;
  open_lt?: InputMaybe<Scalars['BigDecimal']>;
  open_gte?: InputMaybe<Scalars['BigDecimal']>;
  open_lte?: InputMaybe<Scalars['BigDecimal']>;
  open_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  open_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  openUSD?: InputMaybe<Scalars['BigDecimal']>;
  openUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  openUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  openUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  openUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  openUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  openUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  openUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  openNative?: InputMaybe<Scalars['BigDecimal']>;
  openNative_not?: InputMaybe<Scalars['BigDecimal']>;
  openNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  openNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  openNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  openNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  openNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  openNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  close?: InputMaybe<Scalars['BigDecimal']>;
  close_not?: InputMaybe<Scalars['BigDecimal']>;
  close_gt?: InputMaybe<Scalars['BigDecimal']>;
  close_lt?: InputMaybe<Scalars['BigDecimal']>;
  close_gte?: InputMaybe<Scalars['BigDecimal']>;
  close_lte?: InputMaybe<Scalars['BigDecimal']>;
  close_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  close_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  closeUSD?: InputMaybe<Scalars['BigDecimal']>;
  closeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  closeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  closeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  closeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  closeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  closeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  closeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  closeNative?: InputMaybe<Scalars['BigDecimal']>;
  closeNative_not?: InputMaybe<Scalars['BigDecimal']>;
  closeNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  closeNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  closeNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  closeNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  closeNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  closeNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  low?: InputMaybe<Scalars['BigDecimal']>;
  low_not?: InputMaybe<Scalars['BigDecimal']>;
  low_gt?: InputMaybe<Scalars['BigDecimal']>;
  low_lt?: InputMaybe<Scalars['BigDecimal']>;
  low_gte?: InputMaybe<Scalars['BigDecimal']>;
  low_lte?: InputMaybe<Scalars['BigDecimal']>;
  low_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  low_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lowUSD?: InputMaybe<Scalars['BigDecimal']>;
  lowUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  lowUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  lowUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  lowUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  lowUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  lowUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lowUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lowNative?: InputMaybe<Scalars['BigDecimal']>;
  lowNative_not?: InputMaybe<Scalars['BigDecimal']>;
  lowNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  lowNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  lowNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  lowNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  lowNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lowNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  high?: InputMaybe<Scalars['BigDecimal']>;
  high_not?: InputMaybe<Scalars['BigDecimal']>;
  high_gt?: InputMaybe<Scalars['BigDecimal']>;
  high_lt?: InputMaybe<Scalars['BigDecimal']>;
  high_gte?: InputMaybe<Scalars['BigDecimal']>;
  high_lte?: InputMaybe<Scalars['BigDecimal']>;
  high_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  high_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  highUSD?: InputMaybe<Scalars['BigDecimal']>;
  highUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  highUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  highUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  highUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  highUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  highUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  highUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  highNative?: InputMaybe<Scalars['BigDecimal']>;
  highNative_not?: InputMaybe<Scalars['BigDecimal']>;
  highNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  highNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  highNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  highNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  highNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  highNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export type Candle_orderBy =
  | 'id'
  | 'time'
  | 'period'
  | 'lastBlock'
  | 'pair'
  | 'token0'
  | 'token1'
  | 'token0Amount'
  | 'token0AmountUSD'
  | 'token0AmountNative'
  | 'token1Amount'
  | 'token1AmountUSD'
  | 'token1AmountNative'
  | 'open'
  | 'openUSD'
  | 'openNative'
  | 'close'
  | 'closeUSD'
  | 'closeNative'
  | 'low'
  | 'lowUSD'
  | 'lowNative'
  | 'high'
  | 'highUSD'
  | 'highNative';

export type Factory = {
  id: Scalars['ID'];
  volumeUSD: Scalars['BigDecimal'];
  volumeNative: Scalars['BigDecimal'];
  untrackedVolumeUSD: Scalars['BigDecimal'];
  liquidityUSD: Scalars['BigDecimal'];
  liquidityNative: Scalars['BigDecimal'];
  pairCount: Scalars['BigInt'];
  txCount: Scalars['BigInt'];
  tokenCount: Scalars['BigInt'];
  userCount: Scalars['BigInt'];
  pairs: Array<Pair>;
  tokens: Array<Token>;
};


export type FactorypairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pair_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pair_filter>;
};


export type FactorytokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
};

export type Factory_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeNative?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityNative?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  pairCount?: InputMaybe<Scalars['BigInt']>;
  pairCount_not?: InputMaybe<Scalars['BigInt']>;
  pairCount_gt?: InputMaybe<Scalars['BigInt']>;
  pairCount_lt?: InputMaybe<Scalars['BigInt']>;
  pairCount_gte?: InputMaybe<Scalars['BigInt']>;
  pairCount_lte?: InputMaybe<Scalars['BigInt']>;
  pairCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pairCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenCount?: InputMaybe<Scalars['BigInt']>;
  tokenCount_not?: InputMaybe<Scalars['BigInt']>;
  tokenCount_gt?: InputMaybe<Scalars['BigInt']>;
  tokenCount_lt?: InputMaybe<Scalars['BigInt']>;
  tokenCount_gte?: InputMaybe<Scalars['BigInt']>;
  tokenCount_lte?: InputMaybe<Scalars['BigInt']>;
  tokenCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userCount?: InputMaybe<Scalars['BigInt']>;
  userCount_not?: InputMaybe<Scalars['BigInt']>;
  userCount_gt?: InputMaybe<Scalars['BigInt']>;
  userCount_lt?: InputMaybe<Scalars['BigInt']>;
  userCount_gte?: InputMaybe<Scalars['BigInt']>;
  userCount_lte?: InputMaybe<Scalars['BigInt']>;
  userCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type Factory_orderBy =
  | 'id'
  | 'volumeUSD'
  | 'volumeNative'
  | 'untrackedVolumeUSD'
  | 'liquidityUSD'
  | 'liquidityNative'
  | 'pairCount'
  | 'txCount'
  | 'tokenCount'
  | 'userCount'
  | 'pairs'
  | 'tokens';

export type Mint = {
  id: Scalars['ID'];
  pair: Pair;
  transaction: Transaction;
  token0: Token;
  token1: Token;
  amount: Scalars['BigInt'];
  amount0: Scalars['BigDecimal'];
  amount1: Scalars['BigDecimal'];
  from: Scalars['Bytes'];
  to?: Maybe<Scalars['Bytes']>;
  sender: Scalars['Bytes'];
  logIndex: Scalars['BigInt'];
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};

export type Mint_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount0?: InputMaybe<Scalars['BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1?: InputMaybe<Scalars['BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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

export type Mint_orderBy =
  | 'id'
  | 'pair'
  | 'transaction'
  | 'token0'
  | 'token1'
  | 'amount'
  | 'amount0'
  | 'amount1'
  | 'from'
  | 'to'
  | 'sender'
  | 'logIndex'
  | 'block'
  | 'timestamp';

export type Pair = {
  id: Scalars['ID'];
  factory: Factory;
  token0: Token;
  token1: Token;
  assets: Array<PairAsset>;
  candles: Array<Candle>;
  kpi: PairKpi;
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};


export type PairassetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairAsset_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairAsset_filter>;
};


export type PaircandlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Candle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Candle_filter>;
};

export type PairAsset = {
  id: Scalars['ID'];
  pair: Pair;
  token: Token;
  reserve: Scalars['BigDecimal'];
  price: Scalars['BigDecimal'];
};

export type PairAsset_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
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
  reserve?: InputMaybe<Scalars['BigDecimal']>;
  reserve_not?: InputMaybe<Scalars['BigDecimal']>;
  reserve_gt?: InputMaybe<Scalars['BigDecimal']>;
  reserve_lt?: InputMaybe<Scalars['BigDecimal']>;
  reserve_gte?: InputMaybe<Scalars['BigDecimal']>;
  reserve_lte?: InputMaybe<Scalars['BigDecimal']>;
  reserve_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserve_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  price?: InputMaybe<Scalars['BigDecimal']>;
  price_not?: InputMaybe<Scalars['BigDecimal']>;
  price_gt?: InputMaybe<Scalars['BigDecimal']>;
  price_lt?: InputMaybe<Scalars['BigDecimal']>;
  price_gte?: InputMaybe<Scalars['BigDecimal']>;
  price_lte?: InputMaybe<Scalars['BigDecimal']>;
  price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export type PairAsset_orderBy =
  | 'id'
  | 'pair'
  | 'token'
  | 'reserve'
  | 'price';

export type PairKpi = {
  id: Scalars['ID'];
  liquidity: Scalars['BigDecimal'];
  liquidityNative: Scalars['BigDecimal'];
  liquidityUSD: Scalars['BigDecimal'];
  volume: Scalars['BigDecimal'];
  volumeNative: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  fees: Scalars['BigDecimal'];
  feesNative: Scalars['BigDecimal'];
  feesUSD: Scalars['BigDecimal'];
  transactionCount: Scalars['BigInt'];
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};

export type PairKpi_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  liquidity?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityNative?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volume?: InputMaybe<Scalars['BigDecimal']>;
  volume_not?: InputMaybe<Scalars['BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeNative?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  fees?: InputMaybe<Scalars['BigDecimal']>;
  fees_not?: InputMaybe<Scalars['BigDecimal']>;
  fees_gt?: InputMaybe<Scalars['BigDecimal']>;
  fees_lt?: InputMaybe<Scalars['BigDecimal']>;
  fees_gte?: InputMaybe<Scalars['BigDecimal']>;
  fees_lte?: InputMaybe<Scalars['BigDecimal']>;
  fees_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  fees_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesNative?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_not?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  transactionCount?: InputMaybe<Scalars['BigInt']>;
  transactionCount_not?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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

export type PairKpi_orderBy =
  | 'id'
  | 'liquidity'
  | 'liquidityNative'
  | 'liquidityUSD'
  | 'volume'
  | 'volumeNative'
  | 'volumeUSD'
  | 'fees'
  | 'feesNative'
  | 'feesUSD'
  | 'transactionCount'
  | 'block'
  | 'timestamp';

export type Pair_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  factory?: InputMaybe<Scalars['String']>;
  factory_not?: InputMaybe<Scalars['String']>;
  factory_gt?: InputMaybe<Scalars['String']>;
  factory_lt?: InputMaybe<Scalars['String']>;
  factory_gte?: InputMaybe<Scalars['String']>;
  factory_lte?: InputMaybe<Scalars['String']>;
  factory_in?: InputMaybe<Array<Scalars['String']>>;
  factory_not_in?: InputMaybe<Array<Scalars['String']>>;
  factory_contains?: InputMaybe<Scalars['String']>;
  factory_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_not_contains?: InputMaybe<Scalars['String']>;
  factory_not_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_starts_with?: InputMaybe<Scalars['String']>;
  factory_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_starts_with?: InputMaybe<Scalars['String']>;
  factory_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_ends_with?: InputMaybe<Scalars['String']>;
  factory_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_ends_with?: InputMaybe<Scalars['String']>;
  factory_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  kpi?: InputMaybe<Scalars['String']>;
  kpi_not?: InputMaybe<Scalars['String']>;
  kpi_gt?: InputMaybe<Scalars['String']>;
  kpi_lt?: InputMaybe<Scalars['String']>;
  kpi_gte?: InputMaybe<Scalars['String']>;
  kpi_lte?: InputMaybe<Scalars['String']>;
  kpi_in?: InputMaybe<Array<Scalars['String']>>;
  kpi_not_in?: InputMaybe<Array<Scalars['String']>>;
  kpi_contains?: InputMaybe<Scalars['String']>;
  kpi_contains_nocase?: InputMaybe<Scalars['String']>;
  kpi_not_contains?: InputMaybe<Scalars['String']>;
  kpi_not_contains_nocase?: InputMaybe<Scalars['String']>;
  kpi_starts_with?: InputMaybe<Scalars['String']>;
  kpi_starts_with_nocase?: InputMaybe<Scalars['String']>;
  kpi_not_starts_with?: InputMaybe<Scalars['String']>;
  kpi_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  kpi_ends_with?: InputMaybe<Scalars['String']>;
  kpi_ends_with_nocase?: InputMaybe<Scalars['String']>;
  kpi_not_ends_with?: InputMaybe<Scalars['String']>;
  kpi_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
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

export type Pair_orderBy =
  | 'id'
  | 'factory'
  | 'token0'
  | 'token1'
  | 'assets'
  | 'candles'
  | 'kpi'
  | 'block'
  | 'timestamp';

export type Swap = {
  id: Scalars['ID'];
  pair: Pair;
  transaction: Transaction;
  tokenIn: Token;
  tokenOut: Token;
  amountIn: Scalars['BigDecimal'];
  amountOut: Scalars['BigDecimal'];
  from: Scalars['Bytes'];
  to: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  logIndex: Scalars['BigInt'];
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};

export type Swap_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenIn?: InputMaybe<Scalars['String']>;
  tokenIn_not?: InputMaybe<Scalars['String']>;
  tokenIn_gt?: InputMaybe<Scalars['String']>;
  tokenIn_lt?: InputMaybe<Scalars['String']>;
  tokenIn_gte?: InputMaybe<Scalars['String']>;
  tokenIn_lte?: InputMaybe<Scalars['String']>;
  tokenIn_in?: InputMaybe<Array<Scalars['String']>>;
  tokenIn_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenIn_contains?: InputMaybe<Scalars['String']>;
  tokenIn_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenIn_not_contains?: InputMaybe<Scalars['String']>;
  tokenIn_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenIn_starts_with?: InputMaybe<Scalars['String']>;
  tokenIn_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenIn_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenIn_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenIn_ends_with?: InputMaybe<Scalars['String']>;
  tokenIn_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenIn_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenIn_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenOut?: InputMaybe<Scalars['String']>;
  tokenOut_not?: InputMaybe<Scalars['String']>;
  tokenOut_gt?: InputMaybe<Scalars['String']>;
  tokenOut_lt?: InputMaybe<Scalars['String']>;
  tokenOut_gte?: InputMaybe<Scalars['String']>;
  tokenOut_lte?: InputMaybe<Scalars['String']>;
  tokenOut_in?: InputMaybe<Array<Scalars['String']>>;
  tokenOut_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenOut_contains?: InputMaybe<Scalars['String']>;
  tokenOut_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenOut_not_contains?: InputMaybe<Scalars['String']>;
  tokenOut_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenOut_starts_with?: InputMaybe<Scalars['String']>;
  tokenOut_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenOut_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenOut_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenOut_ends_with?: InputMaybe<Scalars['String']>;
  tokenOut_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenOut_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenOut_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amountIn?: InputMaybe<Scalars['BigDecimal']>;
  amountIn_not?: InputMaybe<Scalars['BigDecimal']>;
  amountIn_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountIn_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountIn_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountIn_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountIn_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountIn_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountOut?: InputMaybe<Scalars['BigDecimal']>;
  amountOut_not?: InputMaybe<Scalars['BigDecimal']>;
  amountOut_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountOut_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountOut_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountOut_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountOut_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountOut_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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

export type Swap_orderBy =
  | 'id'
  | 'pair'
  | 'transaction'
  | 'tokenIn'
  | 'tokenOut'
  | 'amountIn'
  | 'amountOut'
  | 'from'
  | 'to'
  | 'sender'
  | 'logIndex'
  | 'block'
  | 'timestamp';

export type TokenKpi = {
  id: Scalars['ID'];
  token: Token;
  liquidity: Scalars['BigDecimal'];
  liquidityNative: Scalars['BigDecimal'];
  liquidityUSD: Scalars['BigDecimal'];
  volume: Scalars['BigDecimal'];
  volumeNative: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  fees: Scalars['BigDecimal'];
  feesNative: Scalars['BigDecimal'];
  feesUSD: Scalars['BigDecimal'];
  transactionCount: Scalars['BigInt'];
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};

export type TokenKpi_filter = {
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
  liquidity?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityNative?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volume?: InputMaybe<Scalars['BigDecimal']>;
  volume_not?: InputMaybe<Scalars['BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeNative?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  fees?: InputMaybe<Scalars['BigDecimal']>;
  fees_not?: InputMaybe<Scalars['BigDecimal']>;
  fees_gt?: InputMaybe<Scalars['BigDecimal']>;
  fees_lt?: InputMaybe<Scalars['BigDecimal']>;
  fees_gte?: InputMaybe<Scalars['BigDecimal']>;
  fees_lte?: InputMaybe<Scalars['BigDecimal']>;
  fees_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  fees_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesNative?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_not?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  transactionCount?: InputMaybe<Scalars['BigInt']>;
  transactionCount_not?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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

export type TokenKpi_orderBy =
  | 'id'
  | 'token'
  | 'liquidity'
  | 'liquidityNative'
  | 'liquidityUSD'
  | 'volume'
  | 'volumeNative'
  | 'volumeUSD'
  | 'fees'
  | 'feesNative'
  | 'feesUSD'
  | 'transactionCount'
  | 'block'
  | 'timestamp';

export type TokenPrice = {
  id: Scalars['ID'];
  token: Token;
  derivedNative: Scalars['BigDecimal'];
  derivedUSD: Scalars['BigDecimal'];
  whitelistedPairCount: Scalars['BigInt'];
  whitelistedPairs: Array<WhitelistedPair>;
};


export type TokenPricewhitelistedPairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WhitelistedPair_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WhitelistedPair_filter>;
};

export type TokenPrice_filter = {
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
  derivedNative?: InputMaybe<Scalars['BigDecimal']>;
  derivedNative_not?: InputMaybe<Scalars['BigDecimal']>;
  derivedNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  derivedNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  derivedNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  derivedNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  derivedNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  derivedNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  derivedUSD?: InputMaybe<Scalars['BigDecimal']>;
  derivedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  derivedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  derivedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  derivedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  derivedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  derivedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  derivedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  whitelistedPairCount?: InputMaybe<Scalars['BigInt']>;
  whitelistedPairCount_not?: InputMaybe<Scalars['BigInt']>;
  whitelistedPairCount_gt?: InputMaybe<Scalars['BigInt']>;
  whitelistedPairCount_lt?: InputMaybe<Scalars['BigInt']>;
  whitelistedPairCount_gte?: InputMaybe<Scalars['BigInt']>;
  whitelistedPairCount_lte?: InputMaybe<Scalars['BigInt']>;
  whitelistedPairCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  whitelistedPairCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type TokenPrice_orderBy =
  | 'id'
  | 'token'
  | 'derivedNative'
  | 'derivedUSD'
  | 'whitelistedPairCount'
  | 'whitelistedPairs';

export type WhitelistedPair = {
  id: Scalars['ID'];
  price: TokenPrice;
  pair: Pair;
};

export type WhitelistedPair_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  price?: InputMaybe<Scalars['String']>;
  price_not?: InputMaybe<Scalars['String']>;
  price_gt?: InputMaybe<Scalars['String']>;
  price_lt?: InputMaybe<Scalars['String']>;
  price_gte?: InputMaybe<Scalars['String']>;
  price_lte?: InputMaybe<Scalars['String']>;
  price_in?: InputMaybe<Array<Scalars['String']>>;
  price_not_in?: InputMaybe<Array<Scalars['String']>>;
  price_contains?: InputMaybe<Scalars['String']>;
  price_contains_nocase?: InputMaybe<Scalars['String']>;
  price_not_contains?: InputMaybe<Scalars['String']>;
  price_not_contains_nocase?: InputMaybe<Scalars['String']>;
  price_starts_with?: InputMaybe<Scalars['String']>;
  price_starts_with_nocase?: InputMaybe<Scalars['String']>;
  price_not_starts_with?: InputMaybe<Scalars['String']>;
  price_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  price_ends_with?: InputMaybe<Scalars['String']>;
  price_ends_with_nocase?: InputMaybe<Scalars['String']>;
  price_not_ends_with?: InputMaybe<Scalars['String']>;
  price_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
};

export type WhitelistedPair_orderBy =
  | 'id'
  | 'price'
  | 'pair';

export type WhitelistedToken = {
  id: Scalars['ID'];
  price: TokenPrice;
  token: Token;
};

export type WhitelistedToken_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  price?: InputMaybe<Scalars['String']>;
  price_not?: InputMaybe<Scalars['String']>;
  price_gt?: InputMaybe<Scalars['String']>;
  price_lt?: InputMaybe<Scalars['String']>;
  price_gte?: InputMaybe<Scalars['String']>;
  price_lte?: InputMaybe<Scalars['String']>;
  price_in?: InputMaybe<Array<Scalars['String']>>;
  price_not_in?: InputMaybe<Array<Scalars['String']>>;
  price_contains?: InputMaybe<Scalars['String']>;
  price_contains_nocase?: InputMaybe<Scalars['String']>;
  price_not_contains?: InputMaybe<Scalars['String']>;
  price_not_contains_nocase?: InputMaybe<Scalars['String']>;
  price_starts_with?: InputMaybe<Scalars['String']>;
  price_starts_with_nocase?: InputMaybe<Scalars['String']>;
  price_not_starts_with?: InputMaybe<Scalars['String']>;
  price_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  price_ends_with?: InputMaybe<Scalars['String']>;
  price_ends_with_nocase?: InputMaybe<Scalars['String']>;
  price_not_ends_with?: InputMaybe<Scalars['String']>;
  price_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
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
};

export type WhitelistedToken_orderBy =
  | 'id'
  | 'price'
  | 'token';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

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
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  BentoBox: ResolverTypeWrapper<BentoBox>;
  BentoBox_filter: BentoBox_filter;
  BentoBox_orderBy: BentoBox_orderBy;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  Clone: ResolverTypeWrapper<Clone>;
  Clone_filter: Clone_filter;
  Clone_orderBy: Clone_orderBy;
  FlashLoan: ResolverTypeWrapper<FlashLoan>;
  FlashLoan_filter: FlashLoan_filter;
  FlashLoan_orderBy: FlashLoan_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  MasterContract: ResolverTypeWrapper<MasterContract>;
  MasterContractApproval: ResolverTypeWrapper<MasterContractApproval>;
  MasterContractApproval_filter: MasterContractApproval_filter;
  MasterContractApproval_orderBy: MasterContractApproval_orderBy;
  MasterContract_filter: MasterContract_filter;
  MasterContract_orderBy: MasterContract_orderBy;
  OrderDirection: OrderDirection;
  Protocol: ResolverTypeWrapper<Protocol>;
  Protocol_filter: Protocol_filter;
  Protocol_orderBy: Protocol_orderBy;
  Rebase: ResolverTypeWrapper<Rebase>;
  Rebase_filter: Rebase_filter;
  Rebase_orderBy: Rebase_orderBy;
  Strategy: ResolverTypeWrapper<Strategy>;
  StrategyHarvest: ResolverTypeWrapper<StrategyHarvest>;
  StrategyHarvest_filter: StrategyHarvest_filter;
  StrategyHarvest_orderBy: StrategyHarvest_orderBy;
  Strategy_filter: Strategy_filter;
  Strategy_orderBy: Strategy_orderBy;
  String: ResolverTypeWrapper<Scalars['String']>;
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
  Burn: ResolverTypeWrapper<Burn>;
  Burn_filter: Burn_filter;
  Burn_orderBy: Burn_orderBy;
  Candle: ResolverTypeWrapper<Candle>;
  Candle_filter: Candle_filter;
  Candle_orderBy: Candle_orderBy;
  Factory: ResolverTypeWrapper<Factory>;
  Factory_filter: Factory_filter;
  Factory_orderBy: Factory_orderBy;
  Mint: ResolverTypeWrapper<Mint>;
  Mint_filter: Mint_filter;
  Mint_orderBy: Mint_orderBy;
  Pair: ResolverTypeWrapper<Pair>;
  PairAsset: ResolverTypeWrapper<PairAsset>;
  PairAsset_filter: PairAsset_filter;
  PairAsset_orderBy: PairAsset_orderBy;
  PairKpi: ResolverTypeWrapper<PairKpi>;
  PairKpi_filter: PairKpi_filter;
  PairKpi_orderBy: PairKpi_orderBy;
  Pair_filter: Pair_filter;
  Pair_orderBy: Pair_orderBy;
  Swap: ResolverTypeWrapper<Swap>;
  Swap_filter: Swap_filter;
  Swap_orderBy: Swap_orderBy;
  TokenKpi: ResolverTypeWrapper<TokenKpi>;
  TokenKpi_filter: TokenKpi_filter;
  TokenKpi_orderBy: TokenKpi_orderBy;
  TokenPrice: ResolverTypeWrapper<TokenPrice>;
  TokenPrice_filter: TokenPrice_filter;
  TokenPrice_orderBy: TokenPrice_orderBy;
  WhitelistedPair: ResolverTypeWrapper<WhitelistedPair>;
  WhitelistedPair_filter: WhitelistedPair_filter;
  WhitelistedPair_orderBy: WhitelistedPair_orderBy;
  WhitelistedToken: ResolverTypeWrapper<WhitelistedToken>;
  WhitelistedToken_filter: WhitelistedToken_filter;
  WhitelistedToken_orderBy: WhitelistedToken_orderBy;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Subscription: {};
  BentoBox: BentoBox;
  BentoBox_filter: BentoBox_filter;
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  Clone: Clone;
  Clone_filter: Clone_filter;
  FlashLoan: FlashLoan;
  FlashLoan_filter: FlashLoan_filter;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  MasterContract: MasterContract;
  MasterContractApproval: MasterContractApproval;
  MasterContractApproval_filter: MasterContractApproval_filter;
  MasterContract_filter: MasterContract_filter;
  Protocol: Protocol;
  Protocol_filter: Protocol_filter;
  Rebase: Rebase;
  Rebase_filter: Rebase_filter;
  Strategy: Strategy;
  StrategyHarvest: StrategyHarvest;
  StrategyHarvest_filter: StrategyHarvest_filter;
  Strategy_filter: Strategy_filter;
  String: Scalars['String'];
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
  Burn: Burn;
  Burn_filter: Burn_filter;
  Candle: Candle;
  Candle_filter: Candle_filter;
  Factory: Factory;
  Factory_filter: Factory_filter;
  Mint: Mint;
  Mint_filter: Mint_filter;
  Pair: Pair;
  PairAsset: PairAsset;
  PairAsset_filter: PairAsset_filter;
  PairKpi: PairKpi;
  PairKpi_filter: PairKpi_filter;
  Pair_filter: Pair_filter;
  Swap: Swap;
  Swap_filter: Swap_filter;
  TokenKpi: TokenKpi;
  TokenKpi_filter: TokenKpi_filter;
  TokenPrice: TokenPrice;
  TokenPrice_filter: TokenPrice_filter;
  WhitelistedPair: WhitelistedPair;
  WhitelistedPair_filter: WhitelistedPair_filter;
  WhitelistedToken: WhitelistedToken;
  WhitelistedToken_filter: WhitelistedToken_filter;
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
  factory?: Resolver<Maybe<ResolversTypes['Factory']>, ParentType, ContextType, RequireFields<QueryfactoryArgs, 'id' | 'subgraphError'>>;
  factories?: Resolver<Array<ResolversTypes['Factory']>, ParentType, ContextType, RequireFields<QueryfactoriesArgs, 'skip' | 'first' | 'subgraphError'>>;
  pair?: Resolver<Maybe<ResolversTypes['Pair']>, ParentType, ContextType, RequireFields<QuerypairArgs, 'id' | 'subgraphError'>>;
  pairs?: Resolver<Array<ResolversTypes['Pair']>, ParentType, ContextType, RequireFields<QuerypairsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pairAsset?: Resolver<Maybe<ResolversTypes['PairAsset']>, ParentType, ContextType, RequireFields<QuerypairAssetArgs, 'id' | 'subgraphError'>>;
  pairAssets?: Resolver<Array<ResolversTypes['PairAsset']>, ParentType, ContextType, RequireFields<QuerypairAssetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pairKpi?: Resolver<Maybe<ResolversTypes['PairKpi']>, ParentType, ContextType, RequireFields<QuerypairKpiArgs, 'id' | 'subgraphError'>>;
  pairKpis?: Resolver<Array<ResolversTypes['PairKpi']>, ParentType, ContextType, RequireFields<QuerypairKpisArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenKpi?: Resolver<Maybe<ResolversTypes['TokenKpi']>, ParentType, ContextType, RequireFields<QuerytokenKpiArgs, 'id' | 'subgraphError'>>;
  tokenKpis?: Resolver<Array<ResolversTypes['TokenKpi']>, ParentType, ContextType, RequireFields<QuerytokenKpisArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenPrice?: Resolver<Maybe<ResolversTypes['TokenPrice']>, ParentType, ContextType, RequireFields<QuerytokenPriceArgs, 'id' | 'subgraphError'>>;
  tokenPrices?: Resolver<Array<ResolversTypes['TokenPrice']>, ParentType, ContextType, RequireFields<QuerytokenPricesArgs, 'skip' | 'first' | 'subgraphError'>>;
  whitelistedToken?: Resolver<Maybe<ResolversTypes['WhitelistedToken']>, ParentType, ContextType, RequireFields<QuerywhitelistedTokenArgs, 'id' | 'subgraphError'>>;
  whitelistedTokens?: Resolver<Array<ResolversTypes['WhitelistedToken']>, ParentType, ContextType, RequireFields<QuerywhitelistedTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  whitelistedPair?: Resolver<Maybe<ResolversTypes['WhitelistedPair']>, ParentType, ContextType, RequireFields<QuerywhitelistedPairArgs, 'id' | 'subgraphError'>>;
  whitelistedPairs?: Resolver<Array<ResolversTypes['WhitelistedPair']>, ParentType, ContextType, RequireFields<QuerywhitelistedPairsArgs, 'skip' | 'first' | 'subgraphError'>>;
  mint?: Resolver<Maybe<ResolversTypes['Mint']>, ParentType, ContextType, RequireFields<QuerymintArgs, 'id' | 'subgraphError'>>;
  mints?: Resolver<Array<ResolversTypes['Mint']>, ParentType, ContextType, RequireFields<QuerymintsArgs, 'skip' | 'first' | 'subgraphError'>>;
  burn?: Resolver<Maybe<ResolversTypes['Burn']>, ParentType, ContextType, RequireFields<QueryburnArgs, 'id' | 'subgraphError'>>;
  burns?: Resolver<Array<ResolversTypes['Burn']>, ParentType, ContextType, RequireFields<QueryburnsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swap?: Resolver<Maybe<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<QueryswapArgs, 'id' | 'subgraphError'>>;
  swaps?: Resolver<Array<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<QueryswapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  candle?: Resolver<Maybe<ResolversTypes['Candle']>, ParentType, ContextType, RequireFields<QuerycandleArgs, 'id' | 'subgraphError'>>;
  candles?: Resolver<Array<ResolversTypes['Candle']>, ParentType, ContextType, RequireFields<QuerycandlesArgs, 'skip' | 'first' | 'subgraphError'>>;
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
  factory?: SubscriptionResolver<Maybe<ResolversTypes['Factory']>, "factory", ParentType, ContextType, RequireFields<SubscriptionfactoryArgs, 'id' | 'subgraphError'>>;
  factories?: SubscriptionResolver<Array<ResolversTypes['Factory']>, "factories", ParentType, ContextType, RequireFields<SubscriptionfactoriesArgs, 'skip' | 'first' | 'subgraphError'>>;
  pair?: SubscriptionResolver<Maybe<ResolversTypes['Pair']>, "pair", ParentType, ContextType, RequireFields<SubscriptionpairArgs, 'id' | 'subgraphError'>>;
  pairs?: SubscriptionResolver<Array<ResolversTypes['Pair']>, "pairs", ParentType, ContextType, RequireFields<SubscriptionpairsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pairAsset?: SubscriptionResolver<Maybe<ResolversTypes['PairAsset']>, "pairAsset", ParentType, ContextType, RequireFields<SubscriptionpairAssetArgs, 'id' | 'subgraphError'>>;
  pairAssets?: SubscriptionResolver<Array<ResolversTypes['PairAsset']>, "pairAssets", ParentType, ContextType, RequireFields<SubscriptionpairAssetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pairKpi?: SubscriptionResolver<Maybe<ResolversTypes['PairKpi']>, "pairKpi", ParentType, ContextType, RequireFields<SubscriptionpairKpiArgs, 'id' | 'subgraphError'>>;
  pairKpis?: SubscriptionResolver<Array<ResolversTypes['PairKpi']>, "pairKpis", ParentType, ContextType, RequireFields<SubscriptionpairKpisArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenKpi?: SubscriptionResolver<Maybe<ResolversTypes['TokenKpi']>, "tokenKpi", ParentType, ContextType, RequireFields<SubscriptiontokenKpiArgs, 'id' | 'subgraphError'>>;
  tokenKpis?: SubscriptionResolver<Array<ResolversTypes['TokenKpi']>, "tokenKpis", ParentType, ContextType, RequireFields<SubscriptiontokenKpisArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenPrice?: SubscriptionResolver<Maybe<ResolversTypes['TokenPrice']>, "tokenPrice", ParentType, ContextType, RequireFields<SubscriptiontokenPriceArgs, 'id' | 'subgraphError'>>;
  tokenPrices?: SubscriptionResolver<Array<ResolversTypes['TokenPrice']>, "tokenPrices", ParentType, ContextType, RequireFields<SubscriptiontokenPricesArgs, 'skip' | 'first' | 'subgraphError'>>;
  whitelistedToken?: SubscriptionResolver<Maybe<ResolversTypes['WhitelistedToken']>, "whitelistedToken", ParentType, ContextType, RequireFields<SubscriptionwhitelistedTokenArgs, 'id' | 'subgraphError'>>;
  whitelistedTokens?: SubscriptionResolver<Array<ResolversTypes['WhitelistedToken']>, "whitelistedTokens", ParentType, ContextType, RequireFields<SubscriptionwhitelistedTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  whitelistedPair?: SubscriptionResolver<Maybe<ResolversTypes['WhitelistedPair']>, "whitelistedPair", ParentType, ContextType, RequireFields<SubscriptionwhitelistedPairArgs, 'id' | 'subgraphError'>>;
  whitelistedPairs?: SubscriptionResolver<Array<ResolversTypes['WhitelistedPair']>, "whitelistedPairs", ParentType, ContextType, RequireFields<SubscriptionwhitelistedPairsArgs, 'skip' | 'first' | 'subgraphError'>>;
  mint?: SubscriptionResolver<Maybe<ResolversTypes['Mint']>, "mint", ParentType, ContextType, RequireFields<SubscriptionmintArgs, 'id' | 'subgraphError'>>;
  mints?: SubscriptionResolver<Array<ResolversTypes['Mint']>, "mints", ParentType, ContextType, RequireFields<SubscriptionmintsArgs, 'skip' | 'first' | 'subgraphError'>>;
  burn?: SubscriptionResolver<Maybe<ResolversTypes['Burn']>, "burn", ParentType, ContextType, RequireFields<SubscriptionburnArgs, 'id' | 'subgraphError'>>;
  burns?: SubscriptionResolver<Array<ResolversTypes['Burn']>, "burns", ParentType, ContextType, RequireFields<SubscriptionburnsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swap?: SubscriptionResolver<Maybe<ResolversTypes['Swap']>, "swap", ParentType, ContextType, RequireFields<SubscriptionswapArgs, 'id' | 'subgraphError'>>;
  swaps?: SubscriptionResolver<Array<ResolversTypes['Swap']>, "swaps", ParentType, ContextType, RequireFields<SubscriptionswapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  candle?: SubscriptionResolver<Maybe<ResolversTypes['Candle']>, "candle", ParentType, ContextType, RequireFields<SubscriptioncandleArgs, 'id' | 'subgraphError'>>;
  candles?: SubscriptionResolver<Array<ResolversTypes['Candle']>, "candles", ParentType, ContextType, RequireFields<SubscriptioncandlesArgs, 'skip' | 'first' | 'subgraphError'>>;
}>;

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
  factory?: Resolver<ResolversTypes['Factory'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['TokenPrice'], ParentType, ContextType>;
  kpi?: Resolver<ResolversTypes['TokenKpi'], ParentType, ContextType>;
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
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasLimit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  mints?: Resolver<Array<ResolversTypes['Mint']>, ParentType, ContextType, RequireFields<TransactionmintsArgs, 'skip' | 'first'>>;
  burns?: Resolver<Array<ResolversTypes['Burn']>, ParentType, ContextType, RequireFields<TransactionburnsArgs, 'skip' | 'first'>>;
  swaps?: Resolver<Array<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<TransactionswapsArgs, 'skip' | 'first'>>;
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

export type BurnResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Burn'] = ResolversParentTypes['Burn']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amount0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amount1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  block?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CandleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Candle'] = ResolversParentTypes['Candle']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  period?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastBlock?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  token0Amount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token0AmountUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token0AmountNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token1Amount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token1AmountUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token1AmountNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  open?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  openUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  openNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  close?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  closeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  closeNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  low?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  lowUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  lowNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  high?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  highUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  highNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FactoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Factory'] = ResolversParentTypes['Factory']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidityNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  pairCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tokenCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  userCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pairs?: Resolver<Array<ResolversTypes['Pair']>, ParentType, ContextType, RequireFields<FactorypairsArgs, 'skip' | 'first'>>;
  tokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<FactorytokensArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MintResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mint'] = ResolversParentTypes['Mint']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amount0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amount1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  block?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PairResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Pair'] = ResolversParentTypes['Pair']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  factory?: Resolver<ResolversTypes['Factory'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  assets?: Resolver<Array<ResolversTypes['PairAsset']>, ParentType, ContextType, RequireFields<PairassetsArgs, 'skip' | 'first'>>;
  candles?: Resolver<Array<ResolversTypes['Candle']>, ParentType, ContextType, RequireFields<PaircandlesArgs, 'skip' | 'first'>>;
  kpi?: Resolver<ResolversTypes['PairKpi'], ParentType, ContextType>;
  block?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PairAssetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PairAsset'] = ResolversParentTypes['PairAsset']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  reserve?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PairKpiResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PairKpi'] = ResolversParentTypes['PairKpi']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidityNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  fees?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  transactionCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  block?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SwapResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Swap'] = ResolversParentTypes['Swap']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  tokenIn?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  tokenOut?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  amountIn?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amountOut?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  block?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenKpiResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TokenKpi'] = ResolversParentTypes['TokenKpi']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidityNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  fees?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  transactionCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  block?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenPriceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TokenPrice'] = ResolversParentTypes['TokenPrice']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  derivedNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  derivedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  whitelistedPairCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  whitelistedPairs?: Resolver<Array<ResolversTypes['WhitelistedPair']>, ParentType, ContextType, RequireFields<TokenPricewhitelistedPairsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WhitelistedPairResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WhitelistedPair'] = ResolversParentTypes['WhitelistedPair']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['TokenPrice'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WhitelistedTokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WhitelistedToken'] = ResolversParentTypes['WhitelistedToken']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['TokenPrice'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  BentoBox?: BentoBoxResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Clone?: CloneResolvers<ContextType>;
  FlashLoan?: FlashLoanResolvers<ContextType>;
  MasterContract?: MasterContractResolvers<ContextType>;
  MasterContractApproval?: MasterContractApprovalResolvers<ContextType>;
  Protocol?: ProtocolResolvers<ContextType>;
  Rebase?: RebaseResolvers<ContextType>;
  Strategy?: StrategyResolvers<ContextType>;
  StrategyHarvest?: StrategyHarvestResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  Transaction?: TransactionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserToken?: UserTokenResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
  Burn?: BurnResolvers<ContextType>;
  Candle?: CandleResolvers<ContextType>;
  Factory?: FactoryResolvers<ContextType>;
  Mint?: MintResolvers<ContextType>;
  Pair?: PairResolvers<ContextType>;
  PairAsset?: PairAssetResolvers<ContextType>;
  PairKpi?: PairKpiResolvers<ContextType>;
  Swap?: SwapResolvers<ContextType>;
  TokenKpi?: TokenKpiResolvers<ContextType>;
  TokenPrice?: TokenPriceResolvers<ContextType>;
  WhitelistedPair?: WhitelistedPairResolvers<ContextType>;
  WhitelistedToken?: WhitelistedTokenResolvers<ContextType>;
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


    export namespace ExchangeTypes {
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

export type Burn = {
  id: Scalars['ID'];
  pair: Pair;
  transaction: Transaction;
  token0: Token;
  token1: Token;
  amount: Scalars['BigInt'];
  amount0: Scalars['BigDecimal'];
  amount1: Scalars['BigDecimal'];
  from: Scalars['Bytes'];
  to: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  logIndex: Scalars['BigInt'];
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};

export type Burn_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount0?: InputMaybe<Scalars['BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1?: InputMaybe<Scalars['BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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

export type Burn_orderBy =
  | 'id'
  | 'pair'
  | 'transaction'
  | 'token0'
  | 'token1'
  | 'amount'
  | 'amount0'
  | 'amount1'
  | 'from'
  | 'to'
  | 'sender'
  | 'logIndex'
  | 'block'
  | 'timestamp';

export type Candle = {
  id: Scalars['ID'];
  time: Scalars['Int'];
  period: Scalars['Int'];
  lastBlock: Scalars['Int'];
  pair: Pair;
  token0: Token;
  token1: Token;
  token0Amount: Scalars['BigDecimal'];
  token0AmountUSD: Scalars['BigDecimal'];
  token0AmountNative: Scalars['BigDecimal'];
  token1Amount: Scalars['BigDecimal'];
  token1AmountUSD: Scalars['BigDecimal'];
  token1AmountNative: Scalars['BigDecimal'];
  open: Scalars['BigDecimal'];
  openUSD: Scalars['BigDecimal'];
  openNative: Scalars['BigDecimal'];
  close: Scalars['BigDecimal'];
  closeUSD: Scalars['BigDecimal'];
  closeNative: Scalars['BigDecimal'];
  low: Scalars['BigDecimal'];
  lowUSD: Scalars['BigDecimal'];
  lowNative: Scalars['BigDecimal'];
  high: Scalars['BigDecimal'];
  highUSD: Scalars['BigDecimal'];
  highNative: Scalars['BigDecimal'];
};

export type Candle_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  time?: InputMaybe<Scalars['Int']>;
  time_not?: InputMaybe<Scalars['Int']>;
  time_gt?: InputMaybe<Scalars['Int']>;
  time_lt?: InputMaybe<Scalars['Int']>;
  time_gte?: InputMaybe<Scalars['Int']>;
  time_lte?: InputMaybe<Scalars['Int']>;
  time_in?: InputMaybe<Array<Scalars['Int']>>;
  time_not_in?: InputMaybe<Array<Scalars['Int']>>;
  period?: InputMaybe<Scalars['Int']>;
  period_not?: InputMaybe<Scalars['Int']>;
  period_gt?: InputMaybe<Scalars['Int']>;
  period_lt?: InputMaybe<Scalars['Int']>;
  period_gte?: InputMaybe<Scalars['Int']>;
  period_lte?: InputMaybe<Scalars['Int']>;
  period_in?: InputMaybe<Array<Scalars['Int']>>;
  period_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastBlock?: InputMaybe<Scalars['Int']>;
  lastBlock_not?: InputMaybe<Scalars['Int']>;
  lastBlock_gt?: InputMaybe<Scalars['Int']>;
  lastBlock_lt?: InputMaybe<Scalars['Int']>;
  lastBlock_gte?: InputMaybe<Scalars['Int']>;
  lastBlock_lte?: InputMaybe<Scalars['Int']>;
  lastBlock_in?: InputMaybe<Array<Scalars['Int']>>;
  lastBlock_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0Amount?: InputMaybe<Scalars['BigDecimal']>;
  token0Amount_not?: InputMaybe<Scalars['BigDecimal']>;
  token0Amount_gt?: InputMaybe<Scalars['BigDecimal']>;
  token0Amount_lt?: InputMaybe<Scalars['BigDecimal']>;
  token0Amount_gte?: InputMaybe<Scalars['BigDecimal']>;
  token0Amount_lte?: InputMaybe<Scalars['BigDecimal']>;
  token0Amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token0Amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token0AmountUSD?: InputMaybe<Scalars['BigDecimal']>;
  token0AmountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  token0AmountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  token0AmountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  token0AmountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  token0AmountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  token0AmountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token0AmountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token0AmountNative?: InputMaybe<Scalars['BigDecimal']>;
  token0AmountNative_not?: InputMaybe<Scalars['BigDecimal']>;
  token0AmountNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  token0AmountNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  token0AmountNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  token0AmountNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  token0AmountNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token0AmountNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1Amount?: InputMaybe<Scalars['BigDecimal']>;
  token1Amount_not?: InputMaybe<Scalars['BigDecimal']>;
  token1Amount_gt?: InputMaybe<Scalars['BigDecimal']>;
  token1Amount_lt?: InputMaybe<Scalars['BigDecimal']>;
  token1Amount_gte?: InputMaybe<Scalars['BigDecimal']>;
  token1Amount_lte?: InputMaybe<Scalars['BigDecimal']>;
  token1Amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1Amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1AmountUSD?: InputMaybe<Scalars['BigDecimal']>;
  token1AmountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  token1AmountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  token1AmountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  token1AmountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  token1AmountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  token1AmountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1AmountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1AmountNative?: InputMaybe<Scalars['BigDecimal']>;
  token1AmountNative_not?: InputMaybe<Scalars['BigDecimal']>;
  token1AmountNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  token1AmountNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  token1AmountNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  token1AmountNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  token1AmountNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1AmountNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  open?: InputMaybe<Scalars['BigDecimal']>;
  open_not?: InputMaybe<Scalars['BigDecimal']>;
  open_gt?: InputMaybe<Scalars['BigDecimal']>;
  open_lt?: InputMaybe<Scalars['BigDecimal']>;
  open_gte?: InputMaybe<Scalars['BigDecimal']>;
  open_lte?: InputMaybe<Scalars['BigDecimal']>;
  open_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  open_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  openUSD?: InputMaybe<Scalars['BigDecimal']>;
  openUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  openUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  openUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  openUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  openUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  openUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  openUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  openNative?: InputMaybe<Scalars['BigDecimal']>;
  openNative_not?: InputMaybe<Scalars['BigDecimal']>;
  openNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  openNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  openNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  openNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  openNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  openNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  close?: InputMaybe<Scalars['BigDecimal']>;
  close_not?: InputMaybe<Scalars['BigDecimal']>;
  close_gt?: InputMaybe<Scalars['BigDecimal']>;
  close_lt?: InputMaybe<Scalars['BigDecimal']>;
  close_gte?: InputMaybe<Scalars['BigDecimal']>;
  close_lte?: InputMaybe<Scalars['BigDecimal']>;
  close_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  close_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  closeUSD?: InputMaybe<Scalars['BigDecimal']>;
  closeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  closeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  closeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  closeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  closeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  closeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  closeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  closeNative?: InputMaybe<Scalars['BigDecimal']>;
  closeNative_not?: InputMaybe<Scalars['BigDecimal']>;
  closeNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  closeNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  closeNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  closeNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  closeNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  closeNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  low?: InputMaybe<Scalars['BigDecimal']>;
  low_not?: InputMaybe<Scalars['BigDecimal']>;
  low_gt?: InputMaybe<Scalars['BigDecimal']>;
  low_lt?: InputMaybe<Scalars['BigDecimal']>;
  low_gte?: InputMaybe<Scalars['BigDecimal']>;
  low_lte?: InputMaybe<Scalars['BigDecimal']>;
  low_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  low_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lowUSD?: InputMaybe<Scalars['BigDecimal']>;
  lowUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  lowUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  lowUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  lowUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  lowUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  lowUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lowUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lowNative?: InputMaybe<Scalars['BigDecimal']>;
  lowNative_not?: InputMaybe<Scalars['BigDecimal']>;
  lowNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  lowNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  lowNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  lowNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  lowNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lowNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  high?: InputMaybe<Scalars['BigDecimal']>;
  high_not?: InputMaybe<Scalars['BigDecimal']>;
  high_gt?: InputMaybe<Scalars['BigDecimal']>;
  high_lt?: InputMaybe<Scalars['BigDecimal']>;
  high_gte?: InputMaybe<Scalars['BigDecimal']>;
  high_lte?: InputMaybe<Scalars['BigDecimal']>;
  high_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  high_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  highUSD?: InputMaybe<Scalars['BigDecimal']>;
  highUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  highUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  highUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  highUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  highUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  highUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  highUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  highNative?: InputMaybe<Scalars['BigDecimal']>;
  highNative_not?: InputMaybe<Scalars['BigDecimal']>;
  highNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  highNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  highNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  highNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  highNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  highNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export type Candle_orderBy =
  | 'id'
  | 'time'
  | 'period'
  | 'lastBlock'
  | 'pair'
  | 'token0'
  | 'token1'
  | 'token0Amount'
  | 'token0AmountUSD'
  | 'token0AmountNative'
  | 'token1Amount'
  | 'token1AmountUSD'
  | 'token1AmountNative'
  | 'open'
  | 'openUSD'
  | 'openNative'
  | 'close'
  | 'closeUSD'
  | 'closeNative'
  | 'low'
  | 'lowUSD'
  | 'lowNative'
  | 'high'
  | 'highUSD'
  | 'highNative';

export type Factory = {
  id: Scalars['ID'];
  volumeUSD: Scalars['BigDecimal'];
  volumeNative: Scalars['BigDecimal'];
  untrackedVolumeUSD: Scalars['BigDecimal'];
  liquidityUSD: Scalars['BigDecimal'];
  liquidityNative: Scalars['BigDecimal'];
  pairCount: Scalars['BigInt'];
  txCount: Scalars['BigInt'];
  tokenCount: Scalars['BigInt'];
  userCount: Scalars['BigInt'];
  pairs: Array<Pair>;
  tokens: Array<Token>;
};


export type FactorypairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pair_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pair_filter>;
};


export type FactorytokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
};

export type Factory_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeNative?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityNative?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  pairCount?: InputMaybe<Scalars['BigInt']>;
  pairCount_not?: InputMaybe<Scalars['BigInt']>;
  pairCount_gt?: InputMaybe<Scalars['BigInt']>;
  pairCount_lt?: InputMaybe<Scalars['BigInt']>;
  pairCount_gte?: InputMaybe<Scalars['BigInt']>;
  pairCount_lte?: InputMaybe<Scalars['BigInt']>;
  pairCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pairCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenCount?: InputMaybe<Scalars['BigInt']>;
  tokenCount_not?: InputMaybe<Scalars['BigInt']>;
  tokenCount_gt?: InputMaybe<Scalars['BigInt']>;
  tokenCount_lt?: InputMaybe<Scalars['BigInt']>;
  tokenCount_gte?: InputMaybe<Scalars['BigInt']>;
  tokenCount_lte?: InputMaybe<Scalars['BigInt']>;
  tokenCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userCount?: InputMaybe<Scalars['BigInt']>;
  userCount_not?: InputMaybe<Scalars['BigInt']>;
  userCount_gt?: InputMaybe<Scalars['BigInt']>;
  userCount_lt?: InputMaybe<Scalars['BigInt']>;
  userCount_gte?: InputMaybe<Scalars['BigInt']>;
  userCount_lte?: InputMaybe<Scalars['BigInt']>;
  userCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type Factory_orderBy =
  | 'id'
  | 'volumeUSD'
  | 'volumeNative'
  | 'untrackedVolumeUSD'
  | 'liquidityUSD'
  | 'liquidityNative'
  | 'pairCount'
  | 'txCount'
  | 'tokenCount'
  | 'userCount'
  | 'pairs'
  | 'tokens';

export type Mint = {
  id: Scalars['ID'];
  pair: Pair;
  transaction: Transaction;
  token0: Token;
  token1: Token;
  amount: Scalars['BigInt'];
  amount0: Scalars['BigDecimal'];
  amount1: Scalars['BigDecimal'];
  from: Scalars['Bytes'];
  to?: Maybe<Scalars['Bytes']>;
  sender: Scalars['Bytes'];
  logIndex: Scalars['BigInt'];
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};

export type Mint_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount0?: InputMaybe<Scalars['BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1?: InputMaybe<Scalars['BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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

export type Mint_orderBy =
  | 'id'
  | 'pair'
  | 'transaction'
  | 'token0'
  | 'token1'
  | 'amount'
  | 'amount0'
  | 'amount1'
  | 'from'
  | 'to'
  | 'sender'
  | 'logIndex'
  | 'block'
  | 'timestamp';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Pair = {
  id: Scalars['ID'];
  factory: Factory;
  token0: Token;
  token1: Token;
  assets: Array<PairAsset>;
  candles: Array<Candle>;
  kpi: PairKpi;
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};


export type PairassetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairAsset_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairAsset_filter>;
};


export type PaircandlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Candle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Candle_filter>;
};

export type PairAsset = {
  id: Scalars['ID'];
  pair: Pair;
  token: Token;
  reserve: Scalars['BigDecimal'];
  price: Scalars['BigDecimal'];
};

export type PairAsset_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
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
  reserve?: InputMaybe<Scalars['BigDecimal']>;
  reserve_not?: InputMaybe<Scalars['BigDecimal']>;
  reserve_gt?: InputMaybe<Scalars['BigDecimal']>;
  reserve_lt?: InputMaybe<Scalars['BigDecimal']>;
  reserve_gte?: InputMaybe<Scalars['BigDecimal']>;
  reserve_lte?: InputMaybe<Scalars['BigDecimal']>;
  reserve_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserve_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  price?: InputMaybe<Scalars['BigDecimal']>;
  price_not?: InputMaybe<Scalars['BigDecimal']>;
  price_gt?: InputMaybe<Scalars['BigDecimal']>;
  price_lt?: InputMaybe<Scalars['BigDecimal']>;
  price_gte?: InputMaybe<Scalars['BigDecimal']>;
  price_lte?: InputMaybe<Scalars['BigDecimal']>;
  price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export type PairAsset_orderBy =
  | 'id'
  | 'pair'
  | 'token'
  | 'reserve'
  | 'price';

export type PairKpi = {
  id: Scalars['ID'];
  liquidity: Scalars['BigDecimal'];
  liquidityNative: Scalars['BigDecimal'];
  liquidityUSD: Scalars['BigDecimal'];
  volume: Scalars['BigDecimal'];
  volumeNative: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  fees: Scalars['BigDecimal'];
  feesNative: Scalars['BigDecimal'];
  feesUSD: Scalars['BigDecimal'];
  transactionCount: Scalars['BigInt'];
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};

export type PairKpi_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  liquidity?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityNative?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volume?: InputMaybe<Scalars['BigDecimal']>;
  volume_not?: InputMaybe<Scalars['BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeNative?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  fees?: InputMaybe<Scalars['BigDecimal']>;
  fees_not?: InputMaybe<Scalars['BigDecimal']>;
  fees_gt?: InputMaybe<Scalars['BigDecimal']>;
  fees_lt?: InputMaybe<Scalars['BigDecimal']>;
  fees_gte?: InputMaybe<Scalars['BigDecimal']>;
  fees_lte?: InputMaybe<Scalars['BigDecimal']>;
  fees_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  fees_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesNative?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_not?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  transactionCount?: InputMaybe<Scalars['BigInt']>;
  transactionCount_not?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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

export type PairKpi_orderBy =
  | 'id'
  | 'liquidity'
  | 'liquidityNative'
  | 'liquidityUSD'
  | 'volume'
  | 'volumeNative'
  | 'volumeUSD'
  | 'fees'
  | 'feesNative'
  | 'feesUSD'
  | 'transactionCount'
  | 'block'
  | 'timestamp';

export type Pair_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  factory?: InputMaybe<Scalars['String']>;
  factory_not?: InputMaybe<Scalars['String']>;
  factory_gt?: InputMaybe<Scalars['String']>;
  factory_lt?: InputMaybe<Scalars['String']>;
  factory_gte?: InputMaybe<Scalars['String']>;
  factory_lte?: InputMaybe<Scalars['String']>;
  factory_in?: InputMaybe<Array<Scalars['String']>>;
  factory_not_in?: InputMaybe<Array<Scalars['String']>>;
  factory_contains?: InputMaybe<Scalars['String']>;
  factory_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_not_contains?: InputMaybe<Scalars['String']>;
  factory_not_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_starts_with?: InputMaybe<Scalars['String']>;
  factory_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_starts_with?: InputMaybe<Scalars['String']>;
  factory_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_ends_with?: InputMaybe<Scalars['String']>;
  factory_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_ends_with?: InputMaybe<Scalars['String']>;
  factory_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  kpi?: InputMaybe<Scalars['String']>;
  kpi_not?: InputMaybe<Scalars['String']>;
  kpi_gt?: InputMaybe<Scalars['String']>;
  kpi_lt?: InputMaybe<Scalars['String']>;
  kpi_gte?: InputMaybe<Scalars['String']>;
  kpi_lte?: InputMaybe<Scalars['String']>;
  kpi_in?: InputMaybe<Array<Scalars['String']>>;
  kpi_not_in?: InputMaybe<Array<Scalars['String']>>;
  kpi_contains?: InputMaybe<Scalars['String']>;
  kpi_contains_nocase?: InputMaybe<Scalars['String']>;
  kpi_not_contains?: InputMaybe<Scalars['String']>;
  kpi_not_contains_nocase?: InputMaybe<Scalars['String']>;
  kpi_starts_with?: InputMaybe<Scalars['String']>;
  kpi_starts_with_nocase?: InputMaybe<Scalars['String']>;
  kpi_not_starts_with?: InputMaybe<Scalars['String']>;
  kpi_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  kpi_ends_with?: InputMaybe<Scalars['String']>;
  kpi_ends_with_nocase?: InputMaybe<Scalars['String']>;
  kpi_not_ends_with?: InputMaybe<Scalars['String']>;
  kpi_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
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

export type Pair_orderBy =
  | 'id'
  | 'factory'
  | 'token0'
  | 'token1'
  | 'assets'
  | 'candles'
  | 'kpi'
  | 'block'
  | 'timestamp';

export type Query = {
  factory?: Maybe<Factory>;
  factories: Array<Factory>;
  pair?: Maybe<Pair>;
  pairs: Array<Pair>;
  pairAsset?: Maybe<PairAsset>;
  pairAssets: Array<PairAsset>;
  pairKpi?: Maybe<PairKpi>;
  pairKpis: Array<PairKpi>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  tokenKpi?: Maybe<TokenKpi>;
  tokenKpis: Array<TokenKpi>;
  tokenPrice?: Maybe<TokenPrice>;
  tokenPrices: Array<TokenPrice>;
  whitelistedToken?: Maybe<WhitelistedToken>;
  whitelistedTokens: Array<WhitelistedToken>;
  whitelistedPair?: Maybe<WhitelistedPair>;
  whitelistedPairs: Array<WhitelistedPair>;
  user?: Maybe<User>;
  users: Array<User>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  mint?: Maybe<Mint>;
  mints: Array<Mint>;
  burn?: Maybe<Burn>;
  burns: Array<Burn>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  candle?: Maybe<Candle>;
  candles: Array<Candle>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryfactoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfactoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Factory_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Factory_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pair_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pair_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairAssetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairAssetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairAsset_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairAsset_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairKpiArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairKpisArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairKpi_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairKpi_filter>;
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


export type QuerytokenKpiArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenKpisArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenKpi_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenKpi_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenPriceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenPricesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenPrice_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenPrice_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywhitelistedTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywhitelistedTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WhitelistedToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WhitelistedToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywhitelistedPairArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywhitelistedPairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WhitelistedPair_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WhitelistedPair_filter>;
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


export type QuerymintArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Mint_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Mint_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryburnArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryburnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Burn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Burn_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycandleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycandlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Candle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Candle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  factory?: Maybe<Factory>;
  factories: Array<Factory>;
  pair?: Maybe<Pair>;
  pairs: Array<Pair>;
  pairAsset?: Maybe<PairAsset>;
  pairAssets: Array<PairAsset>;
  pairKpi?: Maybe<PairKpi>;
  pairKpis: Array<PairKpi>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  tokenKpi?: Maybe<TokenKpi>;
  tokenKpis: Array<TokenKpi>;
  tokenPrice?: Maybe<TokenPrice>;
  tokenPrices: Array<TokenPrice>;
  whitelistedToken?: Maybe<WhitelistedToken>;
  whitelistedTokens: Array<WhitelistedToken>;
  whitelistedPair?: Maybe<WhitelistedPair>;
  whitelistedPairs: Array<WhitelistedPair>;
  user?: Maybe<User>;
  users: Array<User>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  mint?: Maybe<Mint>;
  mints: Array<Mint>;
  burn?: Maybe<Burn>;
  burns: Array<Burn>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  candle?: Maybe<Candle>;
  candles: Array<Candle>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionfactoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfactoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Factory_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Factory_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pair_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pair_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairAssetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairAssetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairAsset_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairAsset_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairKpiArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairKpisArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairKpi_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairKpi_filter>;
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


export type SubscriptiontokenKpiArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenKpisArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenKpi_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenKpi_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenPriceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenPricesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenPrice_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenPrice_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwhitelistedTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwhitelistedTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WhitelistedToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WhitelistedToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwhitelistedPairArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwhitelistedPairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WhitelistedPair_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WhitelistedPair_filter>;
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


export type SubscriptionmintArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Mint_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Mint_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionburnArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionburnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Burn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Burn_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncandleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncandlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Candle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Candle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Swap = {
  id: Scalars['ID'];
  pair: Pair;
  transaction: Transaction;
  tokenIn: Token;
  tokenOut: Token;
  amountIn: Scalars['BigDecimal'];
  amountOut: Scalars['BigDecimal'];
  from: Scalars['Bytes'];
  to: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  logIndex: Scalars['BigInt'];
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};

export type Swap_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenIn?: InputMaybe<Scalars['String']>;
  tokenIn_not?: InputMaybe<Scalars['String']>;
  tokenIn_gt?: InputMaybe<Scalars['String']>;
  tokenIn_lt?: InputMaybe<Scalars['String']>;
  tokenIn_gte?: InputMaybe<Scalars['String']>;
  tokenIn_lte?: InputMaybe<Scalars['String']>;
  tokenIn_in?: InputMaybe<Array<Scalars['String']>>;
  tokenIn_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenIn_contains?: InputMaybe<Scalars['String']>;
  tokenIn_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenIn_not_contains?: InputMaybe<Scalars['String']>;
  tokenIn_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenIn_starts_with?: InputMaybe<Scalars['String']>;
  tokenIn_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenIn_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenIn_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenIn_ends_with?: InputMaybe<Scalars['String']>;
  tokenIn_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenIn_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenIn_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenOut?: InputMaybe<Scalars['String']>;
  tokenOut_not?: InputMaybe<Scalars['String']>;
  tokenOut_gt?: InputMaybe<Scalars['String']>;
  tokenOut_lt?: InputMaybe<Scalars['String']>;
  tokenOut_gte?: InputMaybe<Scalars['String']>;
  tokenOut_lte?: InputMaybe<Scalars['String']>;
  tokenOut_in?: InputMaybe<Array<Scalars['String']>>;
  tokenOut_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenOut_contains?: InputMaybe<Scalars['String']>;
  tokenOut_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenOut_not_contains?: InputMaybe<Scalars['String']>;
  tokenOut_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenOut_starts_with?: InputMaybe<Scalars['String']>;
  tokenOut_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenOut_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenOut_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenOut_ends_with?: InputMaybe<Scalars['String']>;
  tokenOut_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenOut_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenOut_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amountIn?: InputMaybe<Scalars['BigDecimal']>;
  amountIn_not?: InputMaybe<Scalars['BigDecimal']>;
  amountIn_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountIn_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountIn_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountIn_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountIn_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountIn_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountOut?: InputMaybe<Scalars['BigDecimal']>;
  amountOut_not?: InputMaybe<Scalars['BigDecimal']>;
  amountOut_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountOut_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountOut_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountOut_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountOut_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountOut_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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

export type Swap_orderBy =
  | 'id'
  | 'pair'
  | 'transaction'
  | 'tokenIn'
  | 'tokenOut'
  | 'amountIn'
  | 'amountOut'
  | 'from'
  | 'to'
  | 'sender'
  | 'logIndex'
  | 'block'
  | 'timestamp';

export type Token = {
  id: Scalars['ID'];
  factory: Factory;
  price: TokenPrice;
  kpi: TokenKpi;
  symbol: Scalars['String'];
  symbolSuccess: Scalars['Boolean'];
  name: Scalars['String'];
  nameSuccess: Scalars['Boolean'];
  decimals: Scalars['BigInt'];
  decimalsSuccess: Scalars['Boolean'];
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};

export type TokenKpi = {
  id: Scalars['ID'];
  token: Token;
  liquidity: Scalars['BigDecimal'];
  liquidityNative: Scalars['BigDecimal'];
  liquidityUSD: Scalars['BigDecimal'];
  volume: Scalars['BigDecimal'];
  volumeNative: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  fees: Scalars['BigDecimal'];
  feesNative: Scalars['BigDecimal'];
  feesUSD: Scalars['BigDecimal'];
  transactionCount: Scalars['BigInt'];
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};

export type TokenKpi_filter = {
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
  liquidity?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityNative?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volume?: InputMaybe<Scalars['BigDecimal']>;
  volume_not?: InputMaybe<Scalars['BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeNative?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  fees?: InputMaybe<Scalars['BigDecimal']>;
  fees_not?: InputMaybe<Scalars['BigDecimal']>;
  fees_gt?: InputMaybe<Scalars['BigDecimal']>;
  fees_lt?: InputMaybe<Scalars['BigDecimal']>;
  fees_gte?: InputMaybe<Scalars['BigDecimal']>;
  fees_lte?: InputMaybe<Scalars['BigDecimal']>;
  fees_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  fees_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesNative?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_not?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  transactionCount?: InputMaybe<Scalars['BigInt']>;
  transactionCount_not?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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

export type TokenKpi_orderBy =
  | 'id'
  | 'token'
  | 'liquidity'
  | 'liquidityNative'
  | 'liquidityUSD'
  | 'volume'
  | 'volumeNative'
  | 'volumeUSD'
  | 'fees'
  | 'feesNative'
  | 'feesUSD'
  | 'transactionCount'
  | 'block'
  | 'timestamp';

export type TokenPrice = {
  id: Scalars['ID'];
  token: Token;
  derivedNative: Scalars['BigDecimal'];
  derivedUSD: Scalars['BigDecimal'];
  whitelistedPairCount: Scalars['BigInt'];
  whitelistedPairs: Array<WhitelistedPair>;
};


export type TokenPricewhitelistedPairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WhitelistedPair_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WhitelistedPair_filter>;
};

export type TokenPrice_filter = {
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
  derivedNative?: InputMaybe<Scalars['BigDecimal']>;
  derivedNative_not?: InputMaybe<Scalars['BigDecimal']>;
  derivedNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  derivedNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  derivedNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  derivedNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  derivedNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  derivedNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  derivedUSD?: InputMaybe<Scalars['BigDecimal']>;
  derivedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  derivedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  derivedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  derivedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  derivedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  derivedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  derivedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  whitelistedPairCount?: InputMaybe<Scalars['BigInt']>;
  whitelistedPairCount_not?: InputMaybe<Scalars['BigInt']>;
  whitelistedPairCount_gt?: InputMaybe<Scalars['BigInt']>;
  whitelistedPairCount_lt?: InputMaybe<Scalars['BigInt']>;
  whitelistedPairCount_gte?: InputMaybe<Scalars['BigInt']>;
  whitelistedPairCount_lte?: InputMaybe<Scalars['BigInt']>;
  whitelistedPairCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  whitelistedPairCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type TokenPrice_orderBy =
  | 'id'
  | 'token'
  | 'derivedNative'
  | 'derivedUSD'
  | 'whitelistedPairCount'
  | 'whitelistedPairs';

export type Token_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  factory?: InputMaybe<Scalars['String']>;
  factory_not?: InputMaybe<Scalars['String']>;
  factory_gt?: InputMaybe<Scalars['String']>;
  factory_lt?: InputMaybe<Scalars['String']>;
  factory_gte?: InputMaybe<Scalars['String']>;
  factory_lte?: InputMaybe<Scalars['String']>;
  factory_in?: InputMaybe<Array<Scalars['String']>>;
  factory_not_in?: InputMaybe<Array<Scalars['String']>>;
  factory_contains?: InputMaybe<Scalars['String']>;
  factory_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_not_contains?: InputMaybe<Scalars['String']>;
  factory_not_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_starts_with?: InputMaybe<Scalars['String']>;
  factory_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_starts_with?: InputMaybe<Scalars['String']>;
  factory_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_ends_with?: InputMaybe<Scalars['String']>;
  factory_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_ends_with?: InputMaybe<Scalars['String']>;
  factory_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  price_not?: InputMaybe<Scalars['String']>;
  price_gt?: InputMaybe<Scalars['String']>;
  price_lt?: InputMaybe<Scalars['String']>;
  price_gte?: InputMaybe<Scalars['String']>;
  price_lte?: InputMaybe<Scalars['String']>;
  price_in?: InputMaybe<Array<Scalars['String']>>;
  price_not_in?: InputMaybe<Array<Scalars['String']>>;
  price_contains?: InputMaybe<Scalars['String']>;
  price_contains_nocase?: InputMaybe<Scalars['String']>;
  price_not_contains?: InputMaybe<Scalars['String']>;
  price_not_contains_nocase?: InputMaybe<Scalars['String']>;
  price_starts_with?: InputMaybe<Scalars['String']>;
  price_starts_with_nocase?: InputMaybe<Scalars['String']>;
  price_not_starts_with?: InputMaybe<Scalars['String']>;
  price_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  price_ends_with?: InputMaybe<Scalars['String']>;
  price_ends_with_nocase?: InputMaybe<Scalars['String']>;
  price_not_ends_with?: InputMaybe<Scalars['String']>;
  price_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  kpi?: InputMaybe<Scalars['String']>;
  kpi_not?: InputMaybe<Scalars['String']>;
  kpi_gt?: InputMaybe<Scalars['String']>;
  kpi_lt?: InputMaybe<Scalars['String']>;
  kpi_gte?: InputMaybe<Scalars['String']>;
  kpi_lte?: InputMaybe<Scalars['String']>;
  kpi_in?: InputMaybe<Array<Scalars['String']>>;
  kpi_not_in?: InputMaybe<Array<Scalars['String']>>;
  kpi_contains?: InputMaybe<Scalars['String']>;
  kpi_contains_nocase?: InputMaybe<Scalars['String']>;
  kpi_not_contains?: InputMaybe<Scalars['String']>;
  kpi_not_contains_nocase?: InputMaybe<Scalars['String']>;
  kpi_starts_with?: InputMaybe<Scalars['String']>;
  kpi_starts_with_nocase?: InputMaybe<Scalars['String']>;
  kpi_not_starts_with?: InputMaybe<Scalars['String']>;
  kpi_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  kpi_ends_with?: InputMaybe<Scalars['String']>;
  kpi_ends_with_nocase?: InputMaybe<Scalars['String']>;
  kpi_not_ends_with?: InputMaybe<Scalars['String']>;
  kpi_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
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
  | 'factory'
  | 'price'
  | 'kpi'
  | 'symbol'
  | 'symbolSuccess'
  | 'name'
  | 'nameSuccess'
  | 'decimals'
  | 'decimalsSuccess'
  | 'block'
  | 'timestamp';

export type Transaction = {
  id: Scalars['ID'];
  gasUsed: Scalars['BigInt'];
  gasLimit: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  mints: Array<Mint>;
  burns: Array<Burn>;
  swaps: Array<Swap>;
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};


export type TransactionmintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Mint_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Mint_filter>;
};


export type TransactionburnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Burn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Burn_filter>;
};


export type TransactionswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
};

export type Transaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit?: InputMaybe<Scalars['BigInt']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  | 'gasUsed'
  | 'gasLimit'
  | 'gasPrice'
  | 'mints'
  | 'burns'
  | 'swaps'
  | 'block'
  | 'timestamp';

export type User = {
  id: Scalars['ID'];
};

export type User_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

export type User_orderBy =
  | 'id';

export type WhitelistedPair = {
  id: Scalars['ID'];
  price: TokenPrice;
  pair: Pair;
};

export type WhitelistedPair_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  price?: InputMaybe<Scalars['String']>;
  price_not?: InputMaybe<Scalars['String']>;
  price_gt?: InputMaybe<Scalars['String']>;
  price_lt?: InputMaybe<Scalars['String']>;
  price_gte?: InputMaybe<Scalars['String']>;
  price_lte?: InputMaybe<Scalars['String']>;
  price_in?: InputMaybe<Array<Scalars['String']>>;
  price_not_in?: InputMaybe<Array<Scalars['String']>>;
  price_contains?: InputMaybe<Scalars['String']>;
  price_contains_nocase?: InputMaybe<Scalars['String']>;
  price_not_contains?: InputMaybe<Scalars['String']>;
  price_not_contains_nocase?: InputMaybe<Scalars['String']>;
  price_starts_with?: InputMaybe<Scalars['String']>;
  price_starts_with_nocase?: InputMaybe<Scalars['String']>;
  price_not_starts_with?: InputMaybe<Scalars['String']>;
  price_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  price_ends_with?: InputMaybe<Scalars['String']>;
  price_ends_with_nocase?: InputMaybe<Scalars['String']>;
  price_not_ends_with?: InputMaybe<Scalars['String']>;
  price_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
};

export type WhitelistedPair_orderBy =
  | 'id'
  | 'price'
  | 'pair';

export type WhitelistedToken = {
  id: Scalars['ID'];
  price: TokenPrice;
  token: Token;
};

export type WhitelistedToken_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  price?: InputMaybe<Scalars['String']>;
  price_not?: InputMaybe<Scalars['String']>;
  price_gt?: InputMaybe<Scalars['String']>;
  price_lt?: InputMaybe<Scalars['String']>;
  price_gte?: InputMaybe<Scalars['String']>;
  price_lte?: InputMaybe<Scalars['String']>;
  price_in?: InputMaybe<Array<Scalars['String']>>;
  price_not_in?: InputMaybe<Array<Scalars['String']>>;
  price_contains?: InputMaybe<Scalars['String']>;
  price_contains_nocase?: InputMaybe<Scalars['String']>;
  price_not_contains?: InputMaybe<Scalars['String']>;
  price_not_contains_nocase?: InputMaybe<Scalars['String']>;
  price_starts_with?: InputMaybe<Scalars['String']>;
  price_starts_with_nocase?: InputMaybe<Scalars['String']>;
  price_not_starts_with?: InputMaybe<Scalars['String']>;
  price_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  price_ends_with?: InputMaybe<Scalars['String']>;
  price_ends_with_nocase?: InputMaybe<Scalars['String']>;
  price_not_ends_with?: InputMaybe<Scalars['String']>;
  price_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
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
};

export type WhitelistedToken_orderBy =
  | 'id'
  | 'price'
  | 'token';

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
    export type QueryExchangeSdk = {
  /** null **/
  factory: InContextSdkMethod<ExchangeTypes.Query['factory'], ExchangeTypes.QueryfactoryArgs, MeshContext>,
  /** null **/
  factories: InContextSdkMethod<ExchangeTypes.Query['factories'], ExchangeTypes.QueryfactoriesArgs, MeshContext>,
  /** null **/
  pair: InContextSdkMethod<ExchangeTypes.Query['pair'], ExchangeTypes.QuerypairArgs, MeshContext>,
  /** null **/
  pairs: InContextSdkMethod<ExchangeTypes.Query['pairs'], ExchangeTypes.QuerypairsArgs, MeshContext>,
  /** null **/
  pairAsset: InContextSdkMethod<ExchangeTypes.Query['pairAsset'], ExchangeTypes.QuerypairAssetArgs, MeshContext>,
  /** null **/
  pairAssets: InContextSdkMethod<ExchangeTypes.Query['pairAssets'], ExchangeTypes.QuerypairAssetsArgs, MeshContext>,
  /** null **/
  pairKpi: InContextSdkMethod<ExchangeTypes.Query['pairKpi'], ExchangeTypes.QuerypairKpiArgs, MeshContext>,
  /** null **/
  pairKpis: InContextSdkMethod<ExchangeTypes.Query['pairKpis'], ExchangeTypes.QuerypairKpisArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<ExchangeTypes.Query['token'], ExchangeTypes.QuerytokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<ExchangeTypes.Query['tokens'], ExchangeTypes.QuerytokensArgs, MeshContext>,
  /** null **/
  tokenKpi: InContextSdkMethod<ExchangeTypes.Query['tokenKpi'], ExchangeTypes.QuerytokenKpiArgs, MeshContext>,
  /** null **/
  tokenKpis: InContextSdkMethod<ExchangeTypes.Query['tokenKpis'], ExchangeTypes.QuerytokenKpisArgs, MeshContext>,
  /** null **/
  tokenPrice: InContextSdkMethod<ExchangeTypes.Query['tokenPrice'], ExchangeTypes.QuerytokenPriceArgs, MeshContext>,
  /** null **/
  tokenPrices: InContextSdkMethod<ExchangeTypes.Query['tokenPrices'], ExchangeTypes.QuerytokenPricesArgs, MeshContext>,
  /** null **/
  whitelistedToken: InContextSdkMethod<ExchangeTypes.Query['whitelistedToken'], ExchangeTypes.QuerywhitelistedTokenArgs, MeshContext>,
  /** null **/
  whitelistedTokens: InContextSdkMethod<ExchangeTypes.Query['whitelistedTokens'], ExchangeTypes.QuerywhitelistedTokensArgs, MeshContext>,
  /** null **/
  whitelistedPair: InContextSdkMethod<ExchangeTypes.Query['whitelistedPair'], ExchangeTypes.QuerywhitelistedPairArgs, MeshContext>,
  /** null **/
  whitelistedPairs: InContextSdkMethod<ExchangeTypes.Query['whitelistedPairs'], ExchangeTypes.QuerywhitelistedPairsArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<ExchangeTypes.Query['user'], ExchangeTypes.QueryuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<ExchangeTypes.Query['users'], ExchangeTypes.QueryusersArgs, MeshContext>,
  /** null **/
  transaction: InContextSdkMethod<ExchangeTypes.Query['transaction'], ExchangeTypes.QuerytransactionArgs, MeshContext>,
  /** null **/
  transactions: InContextSdkMethod<ExchangeTypes.Query['transactions'], ExchangeTypes.QuerytransactionsArgs, MeshContext>,
  /** null **/
  mint: InContextSdkMethod<ExchangeTypes.Query['mint'], ExchangeTypes.QuerymintArgs, MeshContext>,
  /** null **/
  mints: InContextSdkMethod<ExchangeTypes.Query['mints'], ExchangeTypes.QuerymintsArgs, MeshContext>,
  /** null **/
  burn: InContextSdkMethod<ExchangeTypes.Query['burn'], ExchangeTypes.QueryburnArgs, MeshContext>,
  /** null **/
  burns: InContextSdkMethod<ExchangeTypes.Query['burns'], ExchangeTypes.QueryburnsArgs, MeshContext>,
  /** null **/
  swap: InContextSdkMethod<ExchangeTypes.Query['swap'], ExchangeTypes.QueryswapArgs, MeshContext>,
  /** null **/
  swaps: InContextSdkMethod<ExchangeTypes.Query['swaps'], ExchangeTypes.QueryswapsArgs, MeshContext>,
  /** null **/
  candle: InContextSdkMethod<ExchangeTypes.Query['candle'], ExchangeTypes.QuerycandleArgs, MeshContext>,
  /** null **/
  candles: InContextSdkMethod<ExchangeTypes.Query['candles'], ExchangeTypes.QuerycandlesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<ExchangeTypes.Query['_meta'], ExchangeTypes.Query_metaArgs, MeshContext>
};

export type MutationExchangeSdk = {

};

export type SubscriptionExchangeSdk = {
  /** null **/
  factory: InContextSdkMethod<ExchangeTypes.Subscription['factory'], ExchangeTypes.SubscriptionfactoryArgs, MeshContext>,
  /** null **/
  factories: InContextSdkMethod<ExchangeTypes.Subscription['factories'], ExchangeTypes.SubscriptionfactoriesArgs, MeshContext>,
  /** null **/
  pair: InContextSdkMethod<ExchangeTypes.Subscription['pair'], ExchangeTypes.SubscriptionpairArgs, MeshContext>,
  /** null **/
  pairs: InContextSdkMethod<ExchangeTypes.Subscription['pairs'], ExchangeTypes.SubscriptionpairsArgs, MeshContext>,
  /** null **/
  pairAsset: InContextSdkMethod<ExchangeTypes.Subscription['pairAsset'], ExchangeTypes.SubscriptionpairAssetArgs, MeshContext>,
  /** null **/
  pairAssets: InContextSdkMethod<ExchangeTypes.Subscription['pairAssets'], ExchangeTypes.SubscriptionpairAssetsArgs, MeshContext>,
  /** null **/
  pairKpi: InContextSdkMethod<ExchangeTypes.Subscription['pairKpi'], ExchangeTypes.SubscriptionpairKpiArgs, MeshContext>,
  /** null **/
  pairKpis: InContextSdkMethod<ExchangeTypes.Subscription['pairKpis'], ExchangeTypes.SubscriptionpairKpisArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<ExchangeTypes.Subscription['token'], ExchangeTypes.SubscriptiontokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<ExchangeTypes.Subscription['tokens'], ExchangeTypes.SubscriptiontokensArgs, MeshContext>,
  /** null **/
  tokenKpi: InContextSdkMethod<ExchangeTypes.Subscription['tokenKpi'], ExchangeTypes.SubscriptiontokenKpiArgs, MeshContext>,
  /** null **/
  tokenKpis: InContextSdkMethod<ExchangeTypes.Subscription['tokenKpis'], ExchangeTypes.SubscriptiontokenKpisArgs, MeshContext>,
  /** null **/
  tokenPrice: InContextSdkMethod<ExchangeTypes.Subscription['tokenPrice'], ExchangeTypes.SubscriptiontokenPriceArgs, MeshContext>,
  /** null **/
  tokenPrices: InContextSdkMethod<ExchangeTypes.Subscription['tokenPrices'], ExchangeTypes.SubscriptiontokenPricesArgs, MeshContext>,
  /** null **/
  whitelistedToken: InContextSdkMethod<ExchangeTypes.Subscription['whitelistedToken'], ExchangeTypes.SubscriptionwhitelistedTokenArgs, MeshContext>,
  /** null **/
  whitelistedTokens: InContextSdkMethod<ExchangeTypes.Subscription['whitelistedTokens'], ExchangeTypes.SubscriptionwhitelistedTokensArgs, MeshContext>,
  /** null **/
  whitelistedPair: InContextSdkMethod<ExchangeTypes.Subscription['whitelistedPair'], ExchangeTypes.SubscriptionwhitelistedPairArgs, MeshContext>,
  /** null **/
  whitelistedPairs: InContextSdkMethod<ExchangeTypes.Subscription['whitelistedPairs'], ExchangeTypes.SubscriptionwhitelistedPairsArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<ExchangeTypes.Subscription['user'], ExchangeTypes.SubscriptionuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<ExchangeTypes.Subscription['users'], ExchangeTypes.SubscriptionusersArgs, MeshContext>,
  /** null **/
  transaction: InContextSdkMethod<ExchangeTypes.Subscription['transaction'], ExchangeTypes.SubscriptiontransactionArgs, MeshContext>,
  /** null **/
  transactions: InContextSdkMethod<ExchangeTypes.Subscription['transactions'], ExchangeTypes.SubscriptiontransactionsArgs, MeshContext>,
  /** null **/
  mint: InContextSdkMethod<ExchangeTypes.Subscription['mint'], ExchangeTypes.SubscriptionmintArgs, MeshContext>,
  /** null **/
  mints: InContextSdkMethod<ExchangeTypes.Subscription['mints'], ExchangeTypes.SubscriptionmintsArgs, MeshContext>,
  /** null **/
  burn: InContextSdkMethod<ExchangeTypes.Subscription['burn'], ExchangeTypes.SubscriptionburnArgs, MeshContext>,
  /** null **/
  burns: InContextSdkMethod<ExchangeTypes.Subscription['burns'], ExchangeTypes.SubscriptionburnsArgs, MeshContext>,
  /** null **/
  swap: InContextSdkMethod<ExchangeTypes.Subscription['swap'], ExchangeTypes.SubscriptionswapArgs, MeshContext>,
  /** null **/
  swaps: InContextSdkMethod<ExchangeTypes.Subscription['swaps'], ExchangeTypes.SubscriptionswapsArgs, MeshContext>,
  /** null **/
  candle: InContextSdkMethod<ExchangeTypes.Subscription['candle'], ExchangeTypes.SubscriptioncandleArgs, MeshContext>,
  /** null **/
  candles: InContextSdkMethod<ExchangeTypes.Subscription['candles'], ExchangeTypes.SubscriptioncandlesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<ExchangeTypes.Subscription['_meta'], ExchangeTypes.Subscription_metaArgs, MeshContext>
};

export type BentoboxContext = {
      ["bentobox"]: { Query: QueryBentoboxSdk, Mutation: MutationBentoboxSdk, Subscription: SubscriptionBentoboxSdk },
    };

export type ExchangeContext = {
      ["exchange"]: { Query: QueryExchangeSdk, Mutation: MutationExchangeSdk, Subscription: SubscriptionExchangeSdk },
    };

export type MeshContext = BentoboxContext & ExchangeContext & BaseMeshContext;


import { getMesh } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import pathModule from 'path';
import { fileURLToPath } from '@graphql-mesh/utils';
import ExternalModule_0 from '@graphql-mesh/cache-inmemory-lru';
import ExternalModule_1 from '@graphql-mesh/graphql';
import ExternalModule_2 from '@graphql-mesh/merger-stitching';
import ExternalModule_3 from '@graphql-mesh/transform-type-merging';
import ExternalModule_4 from './sources/bentobox/schema.graphql.ts';
import ExternalModule_5 from './sources/exchange/schema.graphql.ts';

const importedModules: Record<string, any> = {
  // @ts-ignore
  ["@graphql-mesh/cache-inmemory-lru"]: ExternalModule_0,
  // @ts-ignore
  ["@graphql-mesh/graphql"]: ExternalModule_1,
  // @ts-ignore
  ["@graphql-mesh/merger-stitching"]: ExternalModule_2,
  // @ts-ignore
  ["@graphql-mesh/transform-type-merging"]: ExternalModule_3,
  // @ts-ignore
  [".graphclient/sources/bentobox/schema.graphql.ts"]: ExternalModule_4,
  // @ts-ignore
  [".graphclient/sources/exchange/schema.graphql.ts"]: ExternalModule_5
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
import StitchingMerger from '@graphql-mesh/merger-stitching';
import TypeMergingTransform from '@graphql-mesh/transform-type-merging';
import { resolveAdditionalResolvers } from '@graphql-mesh/utils';
export const rawConfig: YamlConfig.Config = {"sources":[{"name":"bentobox","handler":{"graphql":{"endpoint":"https://api.thegraph.com/subgraphs/name/matthewlilley/bentobox-ethereum"},"transforms":[{"typeMerging":{"queryFields":[{"queryFieldName":"tokens","keyField":"id","keyArg":"ids"}]}}]}},{"name":"exchange","handler":{"graphql":{"endpoint":"https://api.thegraph.com/subgraphs/name/matthewlilley/legacy-exchange"}},"transforms":[{"typeMerging":{"queryFields":[{"queryFieldName":"tokens","keyField":"id","keyArg":"ids"}]}}]}],"documents":["./query.graphql"]} as any
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
const exchangeTransforms = [];
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
const exchangeHandler = new GraphqlHandler({
              name: rawConfig.sources[1].name,
              config: rawConfig.sources[1].handler["graphql"],
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child(rawConfig.sources[1].name),
              logger: logger.child(rawConfig.sources[1].name),
              importFn
            });
sources.push({
          name: 'bentobox',
          handler: bentoboxHandler,
          transforms: bentoboxTransforms
        })
const merger = new(StitchingMerger as any)({
        cache,
        pubsub,
        logger: logger.child('StitchingMerger'),
        store: rootStore.child('stitchingMerger')
      })
exchangeTransforms.push(
                new TypeMergingTransform({
                  apiName: rawConfig.sources[1].name,
                  config: rawConfig.sources[1].transforms[0]["typeMerging"],
                  baseDir,
                  cache,
                  pubsub,
                  importFn
                })
              );
sources.push({
          name: 'exchange',
          handler: exchangeHandler,
          transforms: exchangeTransforms
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
    tokens {
      id
      symbol
      rebase {
        elastic
      }
      price {
        derivedUSD
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


export type BentoBoxQuery = { bentoBox?: Maybe<{ tokens?: Maybe<Array<(
      Pick<Token, 'id' | 'symbol'>
      & { rebase: Pick<Rebase, 'elastic'>, price: Pick<TokenPrice, 'derivedUSD'> }
    )>> }> };


export const BentoBoxDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BentoBox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bentoBox"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"0xf5bce5077908a1b7370b9ae04adc565ebd643966","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"rebase"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"elastic"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"derivedUSD"}}]}}]}}]}}]}}]} as unknown as DocumentNode<BentoBoxQuery, BentoBoxQueryVariables>;


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