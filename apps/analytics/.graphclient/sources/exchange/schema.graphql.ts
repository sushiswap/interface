import { buildSchema, Source } from 'graphql';

const source = new Source(/* GraphQL */`
schema {
  query: Query
  subscription: Subscription
}

"Marks the GraphQL type as indexable entity.  Each type that should be an entity is required to be annotated with this directive."
directive @entity on OBJECT

"Defined a Subgraph ID for an object type"
directive @subgraphId(id: String!) on OBJECT

"creates a virtual field on the entity that may be queried but cannot be set manually through the mappings API."
directive @derivedFrom(field: String!) on FIELD_DEFINITION

scalar BigDecimal

scalar BigInt

"""The block at which the query should be executed."""
input Block_height {
  """Value containing a block hash"""
  hash: Bytes
  """Value containing a block number"""
  number: Int
  """
  Value containing the minimum block number. 
  In the case of \`number_gte\`, the query will be executed on the latest block only if
  the subgraph has progressed to or past the minimum block number.
  Defaults to the latest block when omitted.
  
  """
  number_gte: Int
}

type Burn {
  id: ID!
  pair: Pair!
  transaction: Transaction!
  token0: Token!
  token1: Token!
  amount: BigInt!
  amount0: BigDecimal!
  amount1: BigDecimal!
  from: Bytes!
  to: Bytes!
  sender: Bytes!
  logIndex: BigInt!
  block: BigInt!
  timestamp: BigInt!
}

input Burn_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  pair: String
  pair_not: String
  pair_gt: String
  pair_lt: String
  pair_gte: String
  pair_lte: String
  pair_in: [String!]
  pair_not_in: [String!]
  pair_contains: String
  pair_contains_nocase: String
  pair_not_contains: String
  pair_not_contains_nocase: String
  pair_starts_with: String
  pair_starts_with_nocase: String
  pair_not_starts_with: String
  pair_not_starts_with_nocase: String
  pair_ends_with: String
  pair_ends_with_nocase: String
  pair_not_ends_with: String
  pair_not_ends_with_nocase: String
  transaction: String
  transaction_not: String
  transaction_gt: String
  transaction_lt: String
  transaction_gte: String
  transaction_lte: String
  transaction_in: [String!]
  transaction_not_in: [String!]
  transaction_contains: String
  transaction_contains_nocase: String
  transaction_not_contains: String
  transaction_not_contains_nocase: String
  transaction_starts_with: String
  transaction_starts_with_nocase: String
  transaction_not_starts_with: String
  transaction_not_starts_with_nocase: String
  transaction_ends_with: String
  transaction_ends_with_nocase: String
  transaction_not_ends_with: String
  transaction_not_ends_with_nocase: String
  token0: String
  token0_not: String
  token0_gt: String
  token0_lt: String
  token0_gte: String
  token0_lte: String
  token0_in: [String!]
  token0_not_in: [String!]
  token0_contains: String
  token0_contains_nocase: String
  token0_not_contains: String
  token0_not_contains_nocase: String
  token0_starts_with: String
  token0_starts_with_nocase: String
  token0_not_starts_with: String
  token0_not_starts_with_nocase: String
  token0_ends_with: String
  token0_ends_with_nocase: String
  token0_not_ends_with: String
  token0_not_ends_with_nocase: String
  token1: String
  token1_not: String
  token1_gt: String
  token1_lt: String
  token1_gte: String
  token1_lte: String
  token1_in: [String!]
  token1_not_in: [String!]
  token1_contains: String
  token1_contains_nocase: String
  token1_not_contains: String
  token1_not_contains_nocase: String
  token1_starts_with: String
  token1_starts_with_nocase: String
  token1_not_starts_with: String
  token1_not_starts_with_nocase: String
  token1_ends_with: String
  token1_ends_with_nocase: String
  token1_not_ends_with: String
  token1_not_ends_with_nocase: String
  amount: BigInt
  amount_not: BigInt
  amount_gt: BigInt
  amount_lt: BigInt
  amount_gte: BigInt
  amount_lte: BigInt
  amount_in: [BigInt!]
  amount_not_in: [BigInt!]
  amount0: BigDecimal
  amount0_not: BigDecimal
  amount0_gt: BigDecimal
  amount0_lt: BigDecimal
  amount0_gte: BigDecimal
  amount0_lte: BigDecimal
  amount0_in: [BigDecimal!]
  amount0_not_in: [BigDecimal!]
  amount1: BigDecimal
  amount1_not: BigDecimal
  amount1_gt: BigDecimal
  amount1_lt: BigDecimal
  amount1_gte: BigDecimal
  amount1_lte: BigDecimal
  amount1_in: [BigDecimal!]
  amount1_not_in: [BigDecimal!]
  from: Bytes
  from_not: Bytes
  from_in: [Bytes!]
  from_not_in: [Bytes!]
  from_contains: Bytes
  from_not_contains: Bytes
  to: Bytes
  to_not: Bytes
  to_in: [Bytes!]
  to_not_in: [Bytes!]
  to_contains: Bytes
  to_not_contains: Bytes
  sender: Bytes
  sender_not: Bytes
  sender_in: [Bytes!]
  sender_not_in: [Bytes!]
  sender_contains: Bytes
  sender_not_contains: Bytes
  logIndex: BigInt
  logIndex_not: BigInt
  logIndex_gt: BigInt
  logIndex_lt: BigInt
  logIndex_gte: BigInt
  logIndex_lte: BigInt
  logIndex_in: [BigInt!]
  logIndex_not_in: [BigInt!]
  block: BigInt
  block_not: BigInt
  block_gt: BigInt
  block_lt: BigInt
  block_gte: BigInt
  block_lte: BigInt
  block_in: [BigInt!]
  block_not_in: [BigInt!]
  timestamp: BigInt
  timestamp_not: BigInt
  timestamp_gt: BigInt
  timestamp_lt: BigInt
  timestamp_gte: BigInt
  timestamp_lte: BigInt
  timestamp_in: [BigInt!]
  timestamp_not_in: [BigInt!]
}

enum Burn_orderBy {
  id
  pair
  transaction
  token0
  token1
  amount
  amount0
  amount1
  from
  to
  sender
  logIndex
  block
  timestamp
}

scalar Bytes

type Candle {
  id: ID!
  time: Int!
  period: Int!
  lastBlock: Int!
  pair: Pair!
  token0: Token!
  token1: Token!
  token0Amount: BigDecimal!
  token0AmountUSD: BigDecimal!
  token0AmountNative: BigDecimal!
  token1Amount: BigDecimal!
  token1AmountUSD: BigDecimal!
  token1AmountNative: BigDecimal!
  open: BigDecimal!
  openUSD: BigDecimal!
  openNative: BigDecimal!
  close: BigDecimal!
  closeUSD: BigDecimal!
  closeNative: BigDecimal!
  low: BigDecimal!
  lowUSD: BigDecimal!
  lowNative: BigDecimal!
  high: BigDecimal!
  highUSD: BigDecimal!
  highNative: BigDecimal!
}

input Candle_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  time: Int
  time_not: Int
  time_gt: Int
  time_lt: Int
  time_gte: Int
  time_lte: Int
  time_in: [Int!]
  time_not_in: [Int!]
  period: Int
  period_not: Int
  period_gt: Int
  period_lt: Int
  period_gte: Int
  period_lte: Int
  period_in: [Int!]
  period_not_in: [Int!]
  lastBlock: Int
  lastBlock_not: Int
  lastBlock_gt: Int
  lastBlock_lt: Int
  lastBlock_gte: Int
  lastBlock_lte: Int
  lastBlock_in: [Int!]
  lastBlock_not_in: [Int!]
  pair: String
  pair_not: String
  pair_gt: String
  pair_lt: String
  pair_gte: String
  pair_lte: String
  pair_in: [String!]
  pair_not_in: [String!]
  pair_contains: String
  pair_contains_nocase: String
  pair_not_contains: String
  pair_not_contains_nocase: String
  pair_starts_with: String
  pair_starts_with_nocase: String
  pair_not_starts_with: String
  pair_not_starts_with_nocase: String
  pair_ends_with: String
  pair_ends_with_nocase: String
  pair_not_ends_with: String
  pair_not_ends_with_nocase: String
  token0: String
  token0_not: String
  token0_gt: String
  token0_lt: String
  token0_gte: String
  token0_lte: String
  token0_in: [String!]
  token0_not_in: [String!]
  token0_contains: String
  token0_contains_nocase: String
  token0_not_contains: String
  token0_not_contains_nocase: String
  token0_starts_with: String
  token0_starts_with_nocase: String
  token0_not_starts_with: String
  token0_not_starts_with_nocase: String
  token0_ends_with: String
  token0_ends_with_nocase: String
  token0_not_ends_with: String
  token0_not_ends_with_nocase: String
  token1: String
  token1_not: String
  token1_gt: String
  token1_lt: String
  token1_gte: String
  token1_lte: String
  token1_in: [String!]
  token1_not_in: [String!]
  token1_contains: String
  token1_contains_nocase: String
  token1_not_contains: String
  token1_not_contains_nocase: String
  token1_starts_with: String
  token1_starts_with_nocase: String
  token1_not_starts_with: String
  token1_not_starts_with_nocase: String
  token1_ends_with: String
  token1_ends_with_nocase: String
  token1_not_ends_with: String
  token1_not_ends_with_nocase: String
  token0Amount: BigDecimal
  token0Amount_not: BigDecimal
  token0Amount_gt: BigDecimal
  token0Amount_lt: BigDecimal
  token0Amount_gte: BigDecimal
  token0Amount_lte: BigDecimal
  token0Amount_in: [BigDecimal!]
  token0Amount_not_in: [BigDecimal!]
  token0AmountUSD: BigDecimal
  token0AmountUSD_not: BigDecimal
  token0AmountUSD_gt: BigDecimal
  token0AmountUSD_lt: BigDecimal
  token0AmountUSD_gte: BigDecimal
  token0AmountUSD_lte: BigDecimal
  token0AmountUSD_in: [BigDecimal!]
  token0AmountUSD_not_in: [BigDecimal!]
  token0AmountNative: BigDecimal
  token0AmountNative_not: BigDecimal
  token0AmountNative_gt: BigDecimal
  token0AmountNative_lt: BigDecimal
  token0AmountNative_gte: BigDecimal
  token0AmountNative_lte: BigDecimal
  token0AmountNative_in: [BigDecimal!]
  token0AmountNative_not_in: [BigDecimal!]
  token1Amount: BigDecimal
  token1Amount_not: BigDecimal
  token1Amount_gt: BigDecimal
  token1Amount_lt: BigDecimal
  token1Amount_gte: BigDecimal
  token1Amount_lte: BigDecimal
  token1Amount_in: [BigDecimal!]
  token1Amount_not_in: [BigDecimal!]
  token1AmountUSD: BigDecimal
  token1AmountUSD_not: BigDecimal
  token1AmountUSD_gt: BigDecimal
  token1AmountUSD_lt: BigDecimal
  token1AmountUSD_gte: BigDecimal
  token1AmountUSD_lte: BigDecimal
  token1AmountUSD_in: [BigDecimal!]
  token1AmountUSD_not_in: [BigDecimal!]
  token1AmountNative: BigDecimal
  token1AmountNative_not: BigDecimal
  token1AmountNative_gt: BigDecimal
  token1AmountNative_lt: BigDecimal
  token1AmountNative_gte: BigDecimal
  token1AmountNative_lte: BigDecimal
  token1AmountNative_in: [BigDecimal!]
  token1AmountNative_not_in: [BigDecimal!]
  open: BigDecimal
  open_not: BigDecimal
  open_gt: BigDecimal
  open_lt: BigDecimal
  open_gte: BigDecimal
  open_lte: BigDecimal
  open_in: [BigDecimal!]
  open_not_in: [BigDecimal!]
  openUSD: BigDecimal
  openUSD_not: BigDecimal
  openUSD_gt: BigDecimal
  openUSD_lt: BigDecimal
  openUSD_gte: BigDecimal
  openUSD_lte: BigDecimal
  openUSD_in: [BigDecimal!]
  openUSD_not_in: [BigDecimal!]
  openNative: BigDecimal
  openNative_not: BigDecimal
  openNative_gt: BigDecimal
  openNative_lt: BigDecimal
  openNative_gte: BigDecimal
  openNative_lte: BigDecimal
  openNative_in: [BigDecimal!]
  openNative_not_in: [BigDecimal!]
  close: BigDecimal
  close_not: BigDecimal
  close_gt: BigDecimal
  close_lt: BigDecimal
  close_gte: BigDecimal
  close_lte: BigDecimal
  close_in: [BigDecimal!]
  close_not_in: [BigDecimal!]
  closeUSD: BigDecimal
  closeUSD_not: BigDecimal
  closeUSD_gt: BigDecimal
  closeUSD_lt: BigDecimal
  closeUSD_gte: BigDecimal
  closeUSD_lte: BigDecimal
  closeUSD_in: [BigDecimal!]
  closeUSD_not_in: [BigDecimal!]
  closeNative: BigDecimal
  closeNative_not: BigDecimal
  closeNative_gt: BigDecimal
  closeNative_lt: BigDecimal
  closeNative_gte: BigDecimal
  closeNative_lte: BigDecimal
  closeNative_in: [BigDecimal!]
  closeNative_not_in: [BigDecimal!]
  low: BigDecimal
  low_not: BigDecimal
  low_gt: BigDecimal
  low_lt: BigDecimal
  low_gte: BigDecimal
  low_lte: BigDecimal
  low_in: [BigDecimal!]
  low_not_in: [BigDecimal!]
  lowUSD: BigDecimal
  lowUSD_not: BigDecimal
  lowUSD_gt: BigDecimal
  lowUSD_lt: BigDecimal
  lowUSD_gte: BigDecimal
  lowUSD_lte: BigDecimal
  lowUSD_in: [BigDecimal!]
  lowUSD_not_in: [BigDecimal!]
  lowNative: BigDecimal
  lowNative_not: BigDecimal
  lowNative_gt: BigDecimal
  lowNative_lt: BigDecimal
  lowNative_gte: BigDecimal
  lowNative_lte: BigDecimal
  lowNative_in: [BigDecimal!]
  lowNative_not_in: [BigDecimal!]
  high: BigDecimal
  high_not: BigDecimal
  high_gt: BigDecimal
  high_lt: BigDecimal
  high_gte: BigDecimal
  high_lte: BigDecimal
  high_in: [BigDecimal!]
  high_not_in: [BigDecimal!]
  highUSD: BigDecimal
  highUSD_not: BigDecimal
  highUSD_gt: BigDecimal
  highUSD_lt: BigDecimal
  highUSD_gte: BigDecimal
  highUSD_lte: BigDecimal
  highUSD_in: [BigDecimal!]
  highUSD_not_in: [BigDecimal!]
  highNative: BigDecimal
  highNative_not: BigDecimal
  highNative_gt: BigDecimal
  highNative_lt: BigDecimal
  highNative_gte: BigDecimal
  highNative_lte: BigDecimal
  highNative_in: [BigDecimal!]
  highNative_not_in: [BigDecimal!]
}

enum Candle_orderBy {
  id
  time
  period
  lastBlock
  pair
  token0
  token1
  token0Amount
  token0AmountUSD
  token0AmountNative
  token1Amount
  token1AmountUSD
  token1AmountNative
  open
  openUSD
  openNative
  close
  closeUSD
  closeNative
  low
  lowUSD
  lowNative
  high
  highUSD
  highNative
}

type Factory {
  id: ID!
  volumeUSD: BigDecimal!
  volumeNative: BigDecimal!
  untrackedVolumeUSD: BigDecimal!
  liquidityUSD: BigDecimal!
  liquidityNative: BigDecimal!
  pairCount: BigInt!
  txCount: BigInt!
  tokenCount: BigInt!
  userCount: BigInt!
  pairs(skip: Int = 0, first: Int = 100, orderBy: Pair_orderBy, orderDirection: OrderDirection, where: Pair_filter): [Pair!]!
  tokens(skip: Int = 0, first: Int = 100, orderBy: Token_orderBy, orderDirection: OrderDirection, where: Token_filter): [Token!]!
}

input Factory_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  volumeUSD: BigDecimal
  volumeUSD_not: BigDecimal
  volumeUSD_gt: BigDecimal
  volumeUSD_lt: BigDecimal
  volumeUSD_gte: BigDecimal
  volumeUSD_lte: BigDecimal
  volumeUSD_in: [BigDecimal!]
  volumeUSD_not_in: [BigDecimal!]
  volumeNative: BigDecimal
  volumeNative_not: BigDecimal
  volumeNative_gt: BigDecimal
  volumeNative_lt: BigDecimal
  volumeNative_gte: BigDecimal
  volumeNative_lte: BigDecimal
  volumeNative_in: [BigDecimal!]
  volumeNative_not_in: [BigDecimal!]
  untrackedVolumeUSD: BigDecimal
  untrackedVolumeUSD_not: BigDecimal
  untrackedVolumeUSD_gt: BigDecimal
  untrackedVolumeUSD_lt: BigDecimal
  untrackedVolumeUSD_gte: BigDecimal
  untrackedVolumeUSD_lte: BigDecimal
  untrackedVolumeUSD_in: [BigDecimal!]
  untrackedVolumeUSD_not_in: [BigDecimal!]
  liquidityUSD: BigDecimal
  liquidityUSD_not: BigDecimal
  liquidityUSD_gt: BigDecimal
  liquidityUSD_lt: BigDecimal
  liquidityUSD_gte: BigDecimal
  liquidityUSD_lte: BigDecimal
  liquidityUSD_in: [BigDecimal!]
  liquidityUSD_not_in: [BigDecimal!]
  liquidityNative: BigDecimal
  liquidityNative_not: BigDecimal
  liquidityNative_gt: BigDecimal
  liquidityNative_lt: BigDecimal
  liquidityNative_gte: BigDecimal
  liquidityNative_lte: BigDecimal
  liquidityNative_in: [BigDecimal!]
  liquidityNative_not_in: [BigDecimal!]
  pairCount: BigInt
  pairCount_not: BigInt
  pairCount_gt: BigInt
  pairCount_lt: BigInt
  pairCount_gte: BigInt
  pairCount_lte: BigInt
  pairCount_in: [BigInt!]
  pairCount_not_in: [BigInt!]
  txCount: BigInt
  txCount_not: BigInt
  txCount_gt: BigInt
  txCount_lt: BigInt
  txCount_gte: BigInt
  txCount_lte: BigInt
  txCount_in: [BigInt!]
  txCount_not_in: [BigInt!]
  tokenCount: BigInt
  tokenCount_not: BigInt
  tokenCount_gt: BigInt
  tokenCount_lt: BigInt
  tokenCount_gte: BigInt
  tokenCount_lte: BigInt
  tokenCount_in: [BigInt!]
  tokenCount_not_in: [BigInt!]
  userCount: BigInt
  userCount_not: BigInt
  userCount_gt: BigInt
  userCount_lt: BigInt
  userCount_gte: BigInt
  userCount_lte: BigInt
  userCount_in: [BigInt!]
  userCount_not_in: [BigInt!]
}

enum Factory_orderBy {
  id
  volumeUSD
  volumeNative
  untrackedVolumeUSD
  liquidityUSD
  liquidityNative
  pairCount
  txCount
  tokenCount
  userCount
  pairs
  tokens
}

type Mint {
  id: ID!
  pair: Pair!
  transaction: Transaction!
  token0: Token!
  token1: Token!
  amount: BigInt!
  amount0: BigDecimal!
  amount1: BigDecimal!
  from: Bytes!
  to: Bytes
  sender: Bytes!
  logIndex: BigInt!
  block: BigInt!
  timestamp: BigInt!
}

input Mint_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  pair: String
  pair_not: String
  pair_gt: String
  pair_lt: String
  pair_gte: String
  pair_lte: String
  pair_in: [String!]
  pair_not_in: [String!]
  pair_contains: String
  pair_contains_nocase: String
  pair_not_contains: String
  pair_not_contains_nocase: String
  pair_starts_with: String
  pair_starts_with_nocase: String
  pair_not_starts_with: String
  pair_not_starts_with_nocase: String
  pair_ends_with: String
  pair_ends_with_nocase: String
  pair_not_ends_with: String
  pair_not_ends_with_nocase: String
  transaction: String
  transaction_not: String
  transaction_gt: String
  transaction_lt: String
  transaction_gte: String
  transaction_lte: String
  transaction_in: [String!]
  transaction_not_in: [String!]
  transaction_contains: String
  transaction_contains_nocase: String
  transaction_not_contains: String
  transaction_not_contains_nocase: String
  transaction_starts_with: String
  transaction_starts_with_nocase: String
  transaction_not_starts_with: String
  transaction_not_starts_with_nocase: String
  transaction_ends_with: String
  transaction_ends_with_nocase: String
  transaction_not_ends_with: String
  transaction_not_ends_with_nocase: String
  token0: String
  token0_not: String
  token0_gt: String
  token0_lt: String
  token0_gte: String
  token0_lte: String
  token0_in: [String!]
  token0_not_in: [String!]
  token0_contains: String
  token0_contains_nocase: String
  token0_not_contains: String
  token0_not_contains_nocase: String
  token0_starts_with: String
  token0_starts_with_nocase: String
  token0_not_starts_with: String
  token0_not_starts_with_nocase: String
  token0_ends_with: String
  token0_ends_with_nocase: String
  token0_not_ends_with: String
  token0_not_ends_with_nocase: String
  token1: String
  token1_not: String
  token1_gt: String
  token1_lt: String
  token1_gte: String
  token1_lte: String
  token1_in: [String!]
  token1_not_in: [String!]
  token1_contains: String
  token1_contains_nocase: String
  token1_not_contains: String
  token1_not_contains_nocase: String
  token1_starts_with: String
  token1_starts_with_nocase: String
  token1_not_starts_with: String
  token1_not_starts_with_nocase: String
  token1_ends_with: String
  token1_ends_with_nocase: String
  token1_not_ends_with: String
  token1_not_ends_with_nocase: String
  amount: BigInt
  amount_not: BigInt
  amount_gt: BigInt
  amount_lt: BigInt
  amount_gte: BigInt
  amount_lte: BigInt
  amount_in: [BigInt!]
  amount_not_in: [BigInt!]
  amount0: BigDecimal
  amount0_not: BigDecimal
  amount0_gt: BigDecimal
  amount0_lt: BigDecimal
  amount0_gte: BigDecimal
  amount0_lte: BigDecimal
  amount0_in: [BigDecimal!]
  amount0_not_in: [BigDecimal!]
  amount1: BigDecimal
  amount1_not: BigDecimal
  amount1_gt: BigDecimal
  amount1_lt: BigDecimal
  amount1_gte: BigDecimal
  amount1_lte: BigDecimal
  amount1_in: [BigDecimal!]
  amount1_not_in: [BigDecimal!]
  from: Bytes
  from_not: Bytes
  from_in: [Bytes!]
  from_not_in: [Bytes!]
  from_contains: Bytes
  from_not_contains: Bytes
  to: Bytes
  to_not: Bytes
  to_in: [Bytes!]
  to_not_in: [Bytes!]
  to_contains: Bytes
  to_not_contains: Bytes
  sender: Bytes
  sender_not: Bytes
  sender_in: [Bytes!]
  sender_not_in: [Bytes!]
  sender_contains: Bytes
  sender_not_contains: Bytes
  logIndex: BigInt
  logIndex_not: BigInt
  logIndex_gt: BigInt
  logIndex_lt: BigInt
  logIndex_gte: BigInt
  logIndex_lte: BigInt
  logIndex_in: [BigInt!]
  logIndex_not_in: [BigInt!]
  block: BigInt
  block_not: BigInt
  block_gt: BigInt
  block_lt: BigInt
  block_gte: BigInt
  block_lte: BigInt
  block_in: [BigInt!]
  block_not_in: [BigInt!]
  timestamp: BigInt
  timestamp_not: BigInt
  timestamp_gt: BigInt
  timestamp_lt: BigInt
  timestamp_gte: BigInt
  timestamp_lte: BigInt
  timestamp_in: [BigInt!]
  timestamp_not_in: [BigInt!]
}

enum Mint_orderBy {
  id
  pair
  transaction
  token0
  token1
  amount
  amount0
  amount1
  from
  to
  sender
  logIndex
  block
  timestamp
}

"""Defines the order direction, either ascending or descending"""
enum OrderDirection {
  asc
  desc
}

type Pair {
  id: ID!
  factory: Factory!
  token0: Token!
  token1: Token!
  assets(skip: Int = 0, first: Int = 100, orderBy: PairAsset_orderBy, orderDirection: OrderDirection, where: PairAsset_filter): [PairAsset!]!
  candles(skip: Int = 0, first: Int = 100, orderBy: Candle_orderBy, orderDirection: OrderDirection, where: Candle_filter): [Candle!]!
  kpi: PairKpi!
  block: BigInt!
  timestamp: BigInt!
}

type PairAsset {
  id: ID!
  pair: Pair!
  token: Token!
  reserve: BigDecimal!
  price: BigDecimal!
}

input PairAsset_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  pair: String
  pair_not: String
  pair_gt: String
  pair_lt: String
  pair_gte: String
  pair_lte: String
  pair_in: [String!]
  pair_not_in: [String!]
  pair_contains: String
  pair_contains_nocase: String
  pair_not_contains: String
  pair_not_contains_nocase: String
  pair_starts_with: String
  pair_starts_with_nocase: String
  pair_not_starts_with: String
  pair_not_starts_with_nocase: String
  pair_ends_with: String
  pair_ends_with_nocase: String
  pair_not_ends_with: String
  pair_not_ends_with_nocase: String
  token: String
  token_not: String
  token_gt: String
  token_lt: String
  token_gte: String
  token_lte: String
  token_in: [String!]
  token_not_in: [String!]
  token_contains: String
  token_contains_nocase: String
  token_not_contains: String
  token_not_contains_nocase: String
  token_starts_with: String
  token_starts_with_nocase: String
  token_not_starts_with: String
  token_not_starts_with_nocase: String
  token_ends_with: String
  token_ends_with_nocase: String
  token_not_ends_with: String
  token_not_ends_with_nocase: String
  reserve: BigDecimal
  reserve_not: BigDecimal
  reserve_gt: BigDecimal
  reserve_lt: BigDecimal
  reserve_gte: BigDecimal
  reserve_lte: BigDecimal
  reserve_in: [BigDecimal!]
  reserve_not_in: [BigDecimal!]
  price: BigDecimal
  price_not: BigDecimal
  price_gt: BigDecimal
  price_lt: BigDecimal
  price_gte: BigDecimal
  price_lte: BigDecimal
  price_in: [BigDecimal!]
  price_not_in: [BigDecimal!]
}

enum PairAsset_orderBy {
  id
  pair
  token
  reserve
  price
}

type PairKpi {
  id: ID!
  liquidity: BigDecimal!
  liquidityNative: BigDecimal!
  liquidityUSD: BigDecimal!
  volume: BigDecimal!
  volumeNative: BigDecimal!
  volumeUSD: BigDecimal!
  fees: BigDecimal!
  feesNative: BigDecimal!
  feesUSD: BigDecimal!
  transactionCount: BigInt!
  block: BigInt!
  timestamp: BigInt!
}

input PairKpi_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  liquidity: BigDecimal
  liquidity_not: BigDecimal
  liquidity_gt: BigDecimal
  liquidity_lt: BigDecimal
  liquidity_gte: BigDecimal
  liquidity_lte: BigDecimal
  liquidity_in: [BigDecimal!]
  liquidity_not_in: [BigDecimal!]
  liquidityNative: BigDecimal
  liquidityNative_not: BigDecimal
  liquidityNative_gt: BigDecimal
  liquidityNative_lt: BigDecimal
  liquidityNative_gte: BigDecimal
  liquidityNative_lte: BigDecimal
  liquidityNative_in: [BigDecimal!]
  liquidityNative_not_in: [BigDecimal!]
  liquidityUSD: BigDecimal
  liquidityUSD_not: BigDecimal
  liquidityUSD_gt: BigDecimal
  liquidityUSD_lt: BigDecimal
  liquidityUSD_gte: BigDecimal
  liquidityUSD_lte: BigDecimal
  liquidityUSD_in: [BigDecimal!]
  liquidityUSD_not_in: [BigDecimal!]
  volume: BigDecimal
  volume_not: BigDecimal
  volume_gt: BigDecimal
  volume_lt: BigDecimal
  volume_gte: BigDecimal
  volume_lte: BigDecimal
  volume_in: [BigDecimal!]
  volume_not_in: [BigDecimal!]
  volumeNative: BigDecimal
  volumeNative_not: BigDecimal
  volumeNative_gt: BigDecimal
  volumeNative_lt: BigDecimal
  volumeNative_gte: BigDecimal
  volumeNative_lte: BigDecimal
  volumeNative_in: [BigDecimal!]
  volumeNative_not_in: [BigDecimal!]
  volumeUSD: BigDecimal
  volumeUSD_not: BigDecimal
  volumeUSD_gt: BigDecimal
  volumeUSD_lt: BigDecimal
  volumeUSD_gte: BigDecimal
  volumeUSD_lte: BigDecimal
  volumeUSD_in: [BigDecimal!]
  volumeUSD_not_in: [BigDecimal!]
  fees: BigDecimal
  fees_not: BigDecimal
  fees_gt: BigDecimal
  fees_lt: BigDecimal
  fees_gte: BigDecimal
  fees_lte: BigDecimal
  fees_in: [BigDecimal!]
  fees_not_in: [BigDecimal!]
  feesNative: BigDecimal
  feesNative_not: BigDecimal
  feesNative_gt: BigDecimal
  feesNative_lt: BigDecimal
  feesNative_gte: BigDecimal
  feesNative_lte: BigDecimal
  feesNative_in: [BigDecimal!]
  feesNative_not_in: [BigDecimal!]
  feesUSD: BigDecimal
  feesUSD_not: BigDecimal
  feesUSD_gt: BigDecimal
  feesUSD_lt: BigDecimal
  feesUSD_gte: BigDecimal
  feesUSD_lte: BigDecimal
  feesUSD_in: [BigDecimal!]
  feesUSD_not_in: [BigDecimal!]
  transactionCount: BigInt
  transactionCount_not: BigInt
  transactionCount_gt: BigInt
  transactionCount_lt: BigInt
  transactionCount_gte: BigInt
  transactionCount_lte: BigInt
  transactionCount_in: [BigInt!]
  transactionCount_not_in: [BigInt!]
  block: BigInt
  block_not: BigInt
  block_gt: BigInt
  block_lt: BigInt
  block_gte: BigInt
  block_lte: BigInt
  block_in: [BigInt!]
  block_not_in: [BigInt!]
  timestamp: BigInt
  timestamp_not: BigInt
  timestamp_gt: BigInt
  timestamp_lt: BigInt
  timestamp_gte: BigInt
  timestamp_lte: BigInt
  timestamp_in: [BigInt!]
  timestamp_not_in: [BigInt!]
}

enum PairKpi_orderBy {
  id
  liquidity
  liquidityNative
  liquidityUSD
  volume
  volumeNative
  volumeUSD
  fees
  feesNative
  feesUSD
  transactionCount
  block
  timestamp
}

input Pair_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  factory: String
  factory_not: String
  factory_gt: String
  factory_lt: String
  factory_gte: String
  factory_lte: String
  factory_in: [String!]
  factory_not_in: [String!]
  factory_contains: String
  factory_contains_nocase: String
  factory_not_contains: String
  factory_not_contains_nocase: String
  factory_starts_with: String
  factory_starts_with_nocase: String
  factory_not_starts_with: String
  factory_not_starts_with_nocase: String
  factory_ends_with: String
  factory_ends_with_nocase: String
  factory_not_ends_with: String
  factory_not_ends_with_nocase: String
  token0: String
  token0_not: String
  token0_gt: String
  token0_lt: String
  token0_gte: String
  token0_lte: String
  token0_in: [String!]
  token0_not_in: [String!]
  token0_contains: String
  token0_contains_nocase: String
  token0_not_contains: String
  token0_not_contains_nocase: String
  token0_starts_with: String
  token0_starts_with_nocase: String
  token0_not_starts_with: String
  token0_not_starts_with_nocase: String
  token0_ends_with: String
  token0_ends_with_nocase: String
  token0_not_ends_with: String
  token0_not_ends_with_nocase: String
  token1: String
  token1_not: String
  token1_gt: String
  token1_lt: String
  token1_gte: String
  token1_lte: String
  token1_in: [String!]
  token1_not_in: [String!]
  token1_contains: String
  token1_contains_nocase: String
  token1_not_contains: String
  token1_not_contains_nocase: String
  token1_starts_with: String
  token1_starts_with_nocase: String
  token1_not_starts_with: String
  token1_not_starts_with_nocase: String
  token1_ends_with: String
  token1_ends_with_nocase: String
  token1_not_ends_with: String
  token1_not_ends_with_nocase: String
  kpi: String
  kpi_not: String
  kpi_gt: String
  kpi_lt: String
  kpi_gte: String
  kpi_lte: String
  kpi_in: [String!]
  kpi_not_in: [String!]
  kpi_contains: String
  kpi_contains_nocase: String
  kpi_not_contains: String
  kpi_not_contains_nocase: String
  kpi_starts_with: String
  kpi_starts_with_nocase: String
  kpi_not_starts_with: String
  kpi_not_starts_with_nocase: String
  kpi_ends_with: String
  kpi_ends_with_nocase: String
  kpi_not_ends_with: String
  kpi_not_ends_with_nocase: String
  block: BigInt
  block_not: BigInt
  block_gt: BigInt
  block_lt: BigInt
  block_gte: BigInt
  block_lte: BigInt
  block_in: [BigInt!]
  block_not_in: [BigInt!]
  timestamp: BigInt
  timestamp_not: BigInt
  timestamp_gt: BigInt
  timestamp_lt: BigInt
  timestamp_gte: BigInt
  timestamp_lte: BigInt
  timestamp_in: [BigInt!]
  timestamp_not_in: [BigInt!]
}

enum Pair_orderBy {
  id
  factory
  token0
  token1
  assets
  candles
  kpi
  block
  timestamp
}

type Query {
  factory(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Factory
  factories(
    skip: Int = 0
    first: Int = 100
    orderBy: Factory_orderBy
    orderDirection: OrderDirection
    where: Factory_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Factory!]!
  pair(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Pair
  pairs(
    skip: Int = 0
    first: Int = 100
    orderBy: Pair_orderBy
    orderDirection: OrderDirection
    where: Pair_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Pair!]!
  pairAsset(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): PairAsset
  pairAssets(
    skip: Int = 0
    first: Int = 100
    orderBy: PairAsset_orderBy
    orderDirection: OrderDirection
    where: PairAsset_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [PairAsset!]!
  pairKpi(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): PairKpi
  pairKpis(
    skip: Int = 0
    first: Int = 100
    orderBy: PairKpi_orderBy
    orderDirection: OrderDirection
    where: PairKpi_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [PairKpi!]!
  token(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Token
  tokens(
    skip: Int = 0
    first: Int = 100
    orderBy: Token_orderBy
    orderDirection: OrderDirection
    where: Token_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Token!]!
  tokenKpi(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): TokenKpi
  tokenKpis(
    skip: Int = 0
    first: Int = 100
    orderBy: TokenKpi_orderBy
    orderDirection: OrderDirection
    where: TokenKpi_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [TokenKpi!]!
  tokenPrice(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): TokenPrice
  tokenPrices(
    skip: Int = 0
    first: Int = 100
    orderBy: TokenPrice_orderBy
    orderDirection: OrderDirection
    where: TokenPrice_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [TokenPrice!]!
  whitelistedToken(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): WhitelistedToken
  whitelistedTokens(
    skip: Int = 0
    first: Int = 100
    orderBy: WhitelistedToken_orderBy
    orderDirection: OrderDirection
    where: WhitelistedToken_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [WhitelistedToken!]!
  whitelistedPair(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): WhitelistedPair
  whitelistedPairs(
    skip: Int = 0
    first: Int = 100
    orderBy: WhitelistedPair_orderBy
    orderDirection: OrderDirection
    where: WhitelistedPair_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [WhitelistedPair!]!
  user(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): User
  users(
    skip: Int = 0
    first: Int = 100
    orderBy: User_orderBy
    orderDirection: OrderDirection
    where: User_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [User!]!
  transaction(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Transaction
  transactions(
    skip: Int = 0
    first: Int = 100
    orderBy: Transaction_orderBy
    orderDirection: OrderDirection
    where: Transaction_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Transaction!]!
  mint(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Mint
  mints(
    skip: Int = 0
    first: Int = 100
    orderBy: Mint_orderBy
    orderDirection: OrderDirection
    where: Mint_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Mint!]!
  burn(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Burn
  burns(
    skip: Int = 0
    first: Int = 100
    orderBy: Burn_orderBy
    orderDirection: OrderDirection
    where: Burn_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Burn!]!
  swap(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Swap
  swaps(
    skip: Int = 0
    first: Int = 100
    orderBy: Swap_orderBy
    orderDirection: OrderDirection
    where: Swap_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Swap!]!
  candle(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Candle
  candles(
    skip: Int = 0
    first: Int = 100
    orderBy: Candle_orderBy
    orderDirection: OrderDirection
    where: Candle_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Candle!]!
  """Access to subgraph metadata"""
  _meta(block: Block_height): _Meta_
}

type Subscription {
  factory(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Factory
  factories(
    skip: Int = 0
    first: Int = 100
    orderBy: Factory_orderBy
    orderDirection: OrderDirection
    where: Factory_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Factory!]!
  pair(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Pair
  pairs(
    skip: Int = 0
    first: Int = 100
    orderBy: Pair_orderBy
    orderDirection: OrderDirection
    where: Pair_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Pair!]!
  pairAsset(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): PairAsset
  pairAssets(
    skip: Int = 0
    first: Int = 100
    orderBy: PairAsset_orderBy
    orderDirection: OrderDirection
    where: PairAsset_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [PairAsset!]!
  pairKpi(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): PairKpi
  pairKpis(
    skip: Int = 0
    first: Int = 100
    orderBy: PairKpi_orderBy
    orderDirection: OrderDirection
    where: PairKpi_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [PairKpi!]!
  token(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Token
  tokens(
    skip: Int = 0
    first: Int = 100
    orderBy: Token_orderBy
    orderDirection: OrderDirection
    where: Token_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Token!]!
  tokenKpi(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): TokenKpi
  tokenKpis(
    skip: Int = 0
    first: Int = 100
    orderBy: TokenKpi_orderBy
    orderDirection: OrderDirection
    where: TokenKpi_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [TokenKpi!]!
  tokenPrice(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): TokenPrice
  tokenPrices(
    skip: Int = 0
    first: Int = 100
    orderBy: TokenPrice_orderBy
    orderDirection: OrderDirection
    where: TokenPrice_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [TokenPrice!]!
  whitelistedToken(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): WhitelistedToken
  whitelistedTokens(
    skip: Int = 0
    first: Int = 100
    orderBy: WhitelistedToken_orderBy
    orderDirection: OrderDirection
    where: WhitelistedToken_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [WhitelistedToken!]!
  whitelistedPair(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): WhitelistedPair
  whitelistedPairs(
    skip: Int = 0
    first: Int = 100
    orderBy: WhitelistedPair_orderBy
    orderDirection: OrderDirection
    where: WhitelistedPair_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [WhitelistedPair!]!
  user(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): User
  users(
    skip: Int = 0
    first: Int = 100
    orderBy: User_orderBy
    orderDirection: OrderDirection
    where: User_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [User!]!
  transaction(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Transaction
  transactions(
    skip: Int = 0
    first: Int = 100
    orderBy: Transaction_orderBy
    orderDirection: OrderDirection
    where: Transaction_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Transaction!]!
  mint(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Mint
  mints(
    skip: Int = 0
    first: Int = 100
    orderBy: Mint_orderBy
    orderDirection: OrderDirection
    where: Mint_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Mint!]!
  burn(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Burn
  burns(
    skip: Int = 0
    first: Int = 100
    orderBy: Burn_orderBy
    orderDirection: OrderDirection
    where: Burn_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Burn!]!
  swap(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Swap
  swaps(
    skip: Int = 0
    first: Int = 100
    orderBy: Swap_orderBy
    orderDirection: OrderDirection
    where: Swap_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Swap!]!
  candle(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Candle
  candles(
    skip: Int = 0
    first: Int = 100
    orderBy: Candle_orderBy
    orderDirection: OrderDirection
    where: Candle_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Candle!]!
  """Access to subgraph metadata"""
  _meta(block: Block_height): _Meta_
}

type Swap {
  id: ID!
  pair: Pair!
  transaction: Transaction!
  tokenIn: Token!
  tokenOut: Token!
  amountIn: BigDecimal!
  amountOut: BigDecimal!
  from: Bytes!
  to: Bytes!
  sender: Bytes!
  logIndex: BigInt!
  block: BigInt!
  timestamp: BigInt!
}

input Swap_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  pair: String
  pair_not: String
  pair_gt: String
  pair_lt: String
  pair_gte: String
  pair_lte: String
  pair_in: [String!]
  pair_not_in: [String!]
  pair_contains: String
  pair_contains_nocase: String
  pair_not_contains: String
  pair_not_contains_nocase: String
  pair_starts_with: String
  pair_starts_with_nocase: String
  pair_not_starts_with: String
  pair_not_starts_with_nocase: String
  pair_ends_with: String
  pair_ends_with_nocase: String
  pair_not_ends_with: String
  pair_not_ends_with_nocase: String
  transaction: String
  transaction_not: String
  transaction_gt: String
  transaction_lt: String
  transaction_gte: String
  transaction_lte: String
  transaction_in: [String!]
  transaction_not_in: [String!]
  transaction_contains: String
  transaction_contains_nocase: String
  transaction_not_contains: String
  transaction_not_contains_nocase: String
  transaction_starts_with: String
  transaction_starts_with_nocase: String
  transaction_not_starts_with: String
  transaction_not_starts_with_nocase: String
  transaction_ends_with: String
  transaction_ends_with_nocase: String
  transaction_not_ends_with: String
  transaction_not_ends_with_nocase: String
  tokenIn: String
  tokenIn_not: String
  tokenIn_gt: String
  tokenIn_lt: String
  tokenIn_gte: String
  tokenIn_lte: String
  tokenIn_in: [String!]
  tokenIn_not_in: [String!]
  tokenIn_contains: String
  tokenIn_contains_nocase: String
  tokenIn_not_contains: String
  tokenIn_not_contains_nocase: String
  tokenIn_starts_with: String
  tokenIn_starts_with_nocase: String
  tokenIn_not_starts_with: String
  tokenIn_not_starts_with_nocase: String
  tokenIn_ends_with: String
  tokenIn_ends_with_nocase: String
  tokenIn_not_ends_with: String
  tokenIn_not_ends_with_nocase: String
  tokenOut: String
  tokenOut_not: String
  tokenOut_gt: String
  tokenOut_lt: String
  tokenOut_gte: String
  tokenOut_lte: String
  tokenOut_in: [String!]
  tokenOut_not_in: [String!]
  tokenOut_contains: String
  tokenOut_contains_nocase: String
  tokenOut_not_contains: String
  tokenOut_not_contains_nocase: String
  tokenOut_starts_with: String
  tokenOut_starts_with_nocase: String
  tokenOut_not_starts_with: String
  tokenOut_not_starts_with_nocase: String
  tokenOut_ends_with: String
  tokenOut_ends_with_nocase: String
  tokenOut_not_ends_with: String
  tokenOut_not_ends_with_nocase: String
  amountIn: BigDecimal
  amountIn_not: BigDecimal
  amountIn_gt: BigDecimal
  amountIn_lt: BigDecimal
  amountIn_gte: BigDecimal
  amountIn_lte: BigDecimal
  amountIn_in: [BigDecimal!]
  amountIn_not_in: [BigDecimal!]
  amountOut: BigDecimal
  amountOut_not: BigDecimal
  amountOut_gt: BigDecimal
  amountOut_lt: BigDecimal
  amountOut_gte: BigDecimal
  amountOut_lte: BigDecimal
  amountOut_in: [BigDecimal!]
  amountOut_not_in: [BigDecimal!]
  from: Bytes
  from_not: Bytes
  from_in: [Bytes!]
  from_not_in: [Bytes!]
  from_contains: Bytes
  from_not_contains: Bytes
  to: Bytes
  to_not: Bytes
  to_in: [Bytes!]
  to_not_in: [Bytes!]
  to_contains: Bytes
  to_not_contains: Bytes
  sender: Bytes
  sender_not: Bytes
  sender_in: [Bytes!]
  sender_not_in: [Bytes!]
  sender_contains: Bytes
  sender_not_contains: Bytes
  logIndex: BigInt
  logIndex_not: BigInt
  logIndex_gt: BigInt
  logIndex_lt: BigInt
  logIndex_gte: BigInt
  logIndex_lte: BigInt
  logIndex_in: [BigInt!]
  logIndex_not_in: [BigInt!]
  block: BigInt
  block_not: BigInt
  block_gt: BigInt
  block_lt: BigInt
  block_gte: BigInt
  block_lte: BigInt
  block_in: [BigInt!]
  block_not_in: [BigInt!]
  timestamp: BigInt
  timestamp_not: BigInt
  timestamp_gt: BigInt
  timestamp_lt: BigInt
  timestamp_gte: BigInt
  timestamp_lte: BigInt
  timestamp_in: [BigInt!]
  timestamp_not_in: [BigInt!]
}

enum Swap_orderBy {
  id
  pair
  transaction
  tokenIn
  tokenOut
  amountIn
  amountOut
  from
  to
  sender
  logIndex
  block
  timestamp
}

type Token {
  id: ID!
  factory: Factory!
  price: TokenPrice!
  kpi: TokenKpi!
  symbol: String!
  symbolSuccess: Boolean!
  name: String!
  nameSuccess: Boolean!
  decimals: BigInt!
  decimalsSuccess: Boolean!
  block: BigInt!
  timestamp: BigInt!
}

type TokenKpi {
  id: ID!
  token: Token!
  liquidity: BigDecimal!
  liquidityNative: BigDecimal!
  liquidityUSD: BigDecimal!
  volume: BigDecimal!
  volumeNative: BigDecimal!
  volumeUSD: BigDecimal!
  fees: BigDecimal!
  feesNative: BigDecimal!
  feesUSD: BigDecimal!
  transactionCount: BigInt!
  block: BigInt!
  timestamp: BigInt!
}

input TokenKpi_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  token: String
  token_not: String
  token_gt: String
  token_lt: String
  token_gte: String
  token_lte: String
  token_in: [String!]
  token_not_in: [String!]
  token_contains: String
  token_contains_nocase: String
  token_not_contains: String
  token_not_contains_nocase: String
  token_starts_with: String
  token_starts_with_nocase: String
  token_not_starts_with: String
  token_not_starts_with_nocase: String
  token_ends_with: String
  token_ends_with_nocase: String
  token_not_ends_with: String
  token_not_ends_with_nocase: String
  liquidity: BigDecimal
  liquidity_not: BigDecimal
  liquidity_gt: BigDecimal
  liquidity_lt: BigDecimal
  liquidity_gte: BigDecimal
  liquidity_lte: BigDecimal
  liquidity_in: [BigDecimal!]
  liquidity_not_in: [BigDecimal!]
  liquidityNative: BigDecimal
  liquidityNative_not: BigDecimal
  liquidityNative_gt: BigDecimal
  liquidityNative_lt: BigDecimal
  liquidityNative_gte: BigDecimal
  liquidityNative_lte: BigDecimal
  liquidityNative_in: [BigDecimal!]
  liquidityNative_not_in: [BigDecimal!]
  liquidityUSD: BigDecimal
  liquidityUSD_not: BigDecimal
  liquidityUSD_gt: BigDecimal
  liquidityUSD_lt: BigDecimal
  liquidityUSD_gte: BigDecimal
  liquidityUSD_lte: BigDecimal
  liquidityUSD_in: [BigDecimal!]
  liquidityUSD_not_in: [BigDecimal!]
  volume: BigDecimal
  volume_not: BigDecimal
  volume_gt: BigDecimal
  volume_lt: BigDecimal
  volume_gte: BigDecimal
  volume_lte: BigDecimal
  volume_in: [BigDecimal!]
  volume_not_in: [BigDecimal!]
  volumeNative: BigDecimal
  volumeNative_not: BigDecimal
  volumeNative_gt: BigDecimal
  volumeNative_lt: BigDecimal
  volumeNative_gte: BigDecimal
  volumeNative_lte: BigDecimal
  volumeNative_in: [BigDecimal!]
  volumeNative_not_in: [BigDecimal!]
  volumeUSD: BigDecimal
  volumeUSD_not: BigDecimal
  volumeUSD_gt: BigDecimal
  volumeUSD_lt: BigDecimal
  volumeUSD_gte: BigDecimal
  volumeUSD_lte: BigDecimal
  volumeUSD_in: [BigDecimal!]
  volumeUSD_not_in: [BigDecimal!]
  fees: BigDecimal
  fees_not: BigDecimal
  fees_gt: BigDecimal
  fees_lt: BigDecimal
  fees_gte: BigDecimal
  fees_lte: BigDecimal
  fees_in: [BigDecimal!]
  fees_not_in: [BigDecimal!]
  feesNative: BigDecimal
  feesNative_not: BigDecimal
  feesNative_gt: BigDecimal
  feesNative_lt: BigDecimal
  feesNative_gte: BigDecimal
  feesNative_lte: BigDecimal
  feesNative_in: [BigDecimal!]
  feesNative_not_in: [BigDecimal!]
  feesUSD: BigDecimal
  feesUSD_not: BigDecimal
  feesUSD_gt: BigDecimal
  feesUSD_lt: BigDecimal
  feesUSD_gte: BigDecimal
  feesUSD_lte: BigDecimal
  feesUSD_in: [BigDecimal!]
  feesUSD_not_in: [BigDecimal!]
  transactionCount: BigInt
  transactionCount_not: BigInt
  transactionCount_gt: BigInt
  transactionCount_lt: BigInt
  transactionCount_gte: BigInt
  transactionCount_lte: BigInt
  transactionCount_in: [BigInt!]
  transactionCount_not_in: [BigInt!]
  block: BigInt
  block_not: BigInt
  block_gt: BigInt
  block_lt: BigInt
  block_gte: BigInt
  block_lte: BigInt
  block_in: [BigInt!]
  block_not_in: [BigInt!]
  timestamp: BigInt
  timestamp_not: BigInt
  timestamp_gt: BigInt
  timestamp_lt: BigInt
  timestamp_gte: BigInt
  timestamp_lte: BigInt
  timestamp_in: [BigInt!]
  timestamp_not_in: [BigInt!]
}

enum TokenKpi_orderBy {
  id
  token
  liquidity
  liquidityNative
  liquidityUSD
  volume
  volumeNative
  volumeUSD
  fees
  feesNative
  feesUSD
  transactionCount
  block
  timestamp
}

type TokenPrice {
  id: ID!
  token: Token!
  derivedNative: BigDecimal!
  derivedUSD: BigDecimal!
  whitelistedPairCount: BigInt!
  whitelistedPairs(skip: Int = 0, first: Int = 100, orderBy: WhitelistedPair_orderBy, orderDirection: OrderDirection, where: WhitelistedPair_filter): [WhitelistedPair!]!
}

input TokenPrice_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  token: String
  token_not: String
  token_gt: String
  token_lt: String
  token_gte: String
  token_lte: String
  token_in: [String!]
  token_not_in: [String!]
  token_contains: String
  token_contains_nocase: String
  token_not_contains: String
  token_not_contains_nocase: String
  token_starts_with: String
  token_starts_with_nocase: String
  token_not_starts_with: String
  token_not_starts_with_nocase: String
  token_ends_with: String
  token_ends_with_nocase: String
  token_not_ends_with: String
  token_not_ends_with_nocase: String
  derivedNative: BigDecimal
  derivedNative_not: BigDecimal
  derivedNative_gt: BigDecimal
  derivedNative_lt: BigDecimal
  derivedNative_gte: BigDecimal
  derivedNative_lte: BigDecimal
  derivedNative_in: [BigDecimal!]
  derivedNative_not_in: [BigDecimal!]
  derivedUSD: BigDecimal
  derivedUSD_not: BigDecimal
  derivedUSD_gt: BigDecimal
  derivedUSD_lt: BigDecimal
  derivedUSD_gte: BigDecimal
  derivedUSD_lte: BigDecimal
  derivedUSD_in: [BigDecimal!]
  derivedUSD_not_in: [BigDecimal!]
  whitelistedPairCount: BigInt
  whitelistedPairCount_not: BigInt
  whitelistedPairCount_gt: BigInt
  whitelistedPairCount_lt: BigInt
  whitelistedPairCount_gte: BigInt
  whitelistedPairCount_lte: BigInt
  whitelistedPairCount_in: [BigInt!]
  whitelistedPairCount_not_in: [BigInt!]
}

enum TokenPrice_orderBy {
  id
  token
  derivedNative
  derivedUSD
  whitelistedPairCount
  whitelistedPairs
}

input Token_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  factory: String
  factory_not: String
  factory_gt: String
  factory_lt: String
  factory_gte: String
  factory_lte: String
  factory_in: [String!]
  factory_not_in: [String!]
  factory_contains: String
  factory_contains_nocase: String
  factory_not_contains: String
  factory_not_contains_nocase: String
  factory_starts_with: String
  factory_starts_with_nocase: String
  factory_not_starts_with: String
  factory_not_starts_with_nocase: String
  factory_ends_with: String
  factory_ends_with_nocase: String
  factory_not_ends_with: String
  factory_not_ends_with_nocase: String
  price: String
  price_not: String
  price_gt: String
  price_lt: String
  price_gte: String
  price_lte: String
  price_in: [String!]
  price_not_in: [String!]
  price_contains: String
  price_contains_nocase: String
  price_not_contains: String
  price_not_contains_nocase: String
  price_starts_with: String
  price_starts_with_nocase: String
  price_not_starts_with: String
  price_not_starts_with_nocase: String
  price_ends_with: String
  price_ends_with_nocase: String
  price_not_ends_with: String
  price_not_ends_with_nocase: String
  kpi: String
  kpi_not: String
  kpi_gt: String
  kpi_lt: String
  kpi_gte: String
  kpi_lte: String
  kpi_in: [String!]
  kpi_not_in: [String!]
  kpi_contains: String
  kpi_contains_nocase: String
  kpi_not_contains: String
  kpi_not_contains_nocase: String
  kpi_starts_with: String
  kpi_starts_with_nocase: String
  kpi_not_starts_with: String
  kpi_not_starts_with_nocase: String
  kpi_ends_with: String
  kpi_ends_with_nocase: String
  kpi_not_ends_with: String
  kpi_not_ends_with_nocase: String
  symbol: String
  symbol_not: String
  symbol_gt: String
  symbol_lt: String
  symbol_gte: String
  symbol_lte: String
  symbol_in: [String!]
  symbol_not_in: [String!]
  symbol_contains: String
  symbol_contains_nocase: String
  symbol_not_contains: String
  symbol_not_contains_nocase: String
  symbol_starts_with: String
  symbol_starts_with_nocase: String
  symbol_not_starts_with: String
  symbol_not_starts_with_nocase: String
  symbol_ends_with: String
  symbol_ends_with_nocase: String
  symbol_not_ends_with: String
  symbol_not_ends_with_nocase: String
  symbolSuccess: Boolean
  symbolSuccess_not: Boolean
  symbolSuccess_in: [Boolean!]
  symbolSuccess_not_in: [Boolean!]
  name: String
  name_not: String
  name_gt: String
  name_lt: String
  name_gte: String
  name_lte: String
  name_in: [String!]
  name_not_in: [String!]
  name_contains: String
  name_contains_nocase: String
  name_not_contains: String
  name_not_contains_nocase: String
  name_starts_with: String
  name_starts_with_nocase: String
  name_not_starts_with: String
  name_not_starts_with_nocase: String
  name_ends_with: String
  name_ends_with_nocase: String
  name_not_ends_with: String
  name_not_ends_with_nocase: String
  nameSuccess: Boolean
  nameSuccess_not: Boolean
  nameSuccess_in: [Boolean!]
  nameSuccess_not_in: [Boolean!]
  decimals: BigInt
  decimals_not: BigInt
  decimals_gt: BigInt
  decimals_lt: BigInt
  decimals_gte: BigInt
  decimals_lte: BigInt
  decimals_in: [BigInt!]
  decimals_not_in: [BigInt!]
  decimalsSuccess: Boolean
  decimalsSuccess_not: Boolean
  decimalsSuccess_in: [Boolean!]
  decimalsSuccess_not_in: [Boolean!]
  block: BigInt
  block_not: BigInt
  block_gt: BigInt
  block_lt: BigInt
  block_gte: BigInt
  block_lte: BigInt
  block_in: [BigInt!]
  block_not_in: [BigInt!]
  timestamp: BigInt
  timestamp_not: BigInt
  timestamp_gt: BigInt
  timestamp_lt: BigInt
  timestamp_gte: BigInt
  timestamp_lte: BigInt
  timestamp_in: [BigInt!]
  timestamp_not_in: [BigInt!]
}

enum Token_orderBy {
  id
  factory
  price
  kpi
  symbol
  symbolSuccess
  name
  nameSuccess
  decimals
  decimalsSuccess
  block
  timestamp
}

type Transaction {
  id: ID!
  gasUsed: BigInt!
  gasLimit: BigInt!
  gasPrice: BigInt!
  mints(skip: Int = 0, first: Int = 100, orderBy: Mint_orderBy, orderDirection: OrderDirection, where: Mint_filter): [Mint!]!
  burns(skip: Int = 0, first: Int = 100, orderBy: Burn_orderBy, orderDirection: OrderDirection, where: Burn_filter): [Burn!]!
  swaps(skip: Int = 0, first: Int = 100, orderBy: Swap_orderBy, orderDirection: OrderDirection, where: Swap_filter): [Swap!]!
  block: BigInt!
  timestamp: BigInt!
}

input Transaction_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  gasUsed: BigInt
  gasUsed_not: BigInt
  gasUsed_gt: BigInt
  gasUsed_lt: BigInt
  gasUsed_gte: BigInt
  gasUsed_lte: BigInt
  gasUsed_in: [BigInt!]
  gasUsed_not_in: [BigInt!]
  gasLimit: BigInt
  gasLimit_not: BigInt
  gasLimit_gt: BigInt
  gasLimit_lt: BigInt
  gasLimit_gte: BigInt
  gasLimit_lte: BigInt
  gasLimit_in: [BigInt!]
  gasLimit_not_in: [BigInt!]
  gasPrice: BigInt
  gasPrice_not: BigInt
  gasPrice_gt: BigInt
  gasPrice_lt: BigInt
  gasPrice_gte: BigInt
  gasPrice_lte: BigInt
  gasPrice_in: [BigInt!]
  gasPrice_not_in: [BigInt!]
  block: BigInt
  block_not: BigInt
  block_gt: BigInt
  block_lt: BigInt
  block_gte: BigInt
  block_lte: BigInt
  block_in: [BigInt!]
  block_not_in: [BigInt!]
  timestamp: BigInt
  timestamp_not: BigInt
  timestamp_gt: BigInt
  timestamp_lt: BigInt
  timestamp_gte: BigInt
  timestamp_lte: BigInt
  timestamp_in: [BigInt!]
  timestamp_not_in: [BigInt!]
}

enum Transaction_orderBy {
  id
  gasUsed
  gasLimit
  gasPrice
  mints
  burns
  swaps
  block
  timestamp
}

type User {
  id: ID!
}

input User_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
}

enum User_orderBy {
  id
}

type WhitelistedPair {
  id: ID!
  price: TokenPrice!
  pair: Pair!
}

input WhitelistedPair_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  price: String
  price_not: String
  price_gt: String
  price_lt: String
  price_gte: String
  price_lte: String
  price_in: [String!]
  price_not_in: [String!]
  price_contains: String
  price_contains_nocase: String
  price_not_contains: String
  price_not_contains_nocase: String
  price_starts_with: String
  price_starts_with_nocase: String
  price_not_starts_with: String
  price_not_starts_with_nocase: String
  price_ends_with: String
  price_ends_with_nocase: String
  price_not_ends_with: String
  price_not_ends_with_nocase: String
  pair: String
  pair_not: String
  pair_gt: String
  pair_lt: String
  pair_gte: String
  pair_lte: String
  pair_in: [String!]
  pair_not_in: [String!]
  pair_contains: String
  pair_contains_nocase: String
  pair_not_contains: String
  pair_not_contains_nocase: String
  pair_starts_with: String
  pair_starts_with_nocase: String
  pair_not_starts_with: String
  pair_not_starts_with_nocase: String
  pair_ends_with: String
  pair_ends_with_nocase: String
  pair_not_ends_with: String
  pair_not_ends_with_nocase: String
}

enum WhitelistedPair_orderBy {
  id
  price
  pair
}

type WhitelistedToken {
  id: ID!
  price: TokenPrice!
  token: Token!
}

input WhitelistedToken_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  price: String
  price_not: String
  price_gt: String
  price_lt: String
  price_gte: String
  price_lte: String
  price_in: [String!]
  price_not_in: [String!]
  price_contains: String
  price_contains_nocase: String
  price_not_contains: String
  price_not_contains_nocase: String
  price_starts_with: String
  price_starts_with_nocase: String
  price_not_starts_with: String
  price_not_starts_with_nocase: String
  price_ends_with: String
  price_ends_with_nocase: String
  price_not_ends_with: String
  price_not_ends_with_nocase: String
  token: String
  token_not: String
  token_gt: String
  token_lt: String
  token_gte: String
  token_lte: String
  token_in: [String!]
  token_not_in: [String!]
  token_contains: String
  token_contains_nocase: String
  token_not_contains: String
  token_not_contains_nocase: String
  token_starts_with: String
  token_starts_with_nocase: String
  token_not_starts_with: String
  token_not_starts_with_nocase: String
  token_ends_with: String
  token_ends_with_nocase: String
  token_not_ends_with: String
  token_not_ends_with_nocase: String
}

enum WhitelistedToken_orderBy {
  id
  price
  token
}

type _Block_ {
  """The hash of the block"""
  hash: Bytes
  """The block number"""
  number: Int!
}

"""The type for the top-level _meta field"""
type _Meta_ {
  """
  Information about a specific subgraph block. The hash of the block
  will be null if the _meta field has a block constraint that asks for
  a block number. It will be filled if the _meta field has no block constraint
  and therefore asks for the latest  block
  
  """
  block: _Block_!
  """The deployment ID"""
  deployment: String!
  """If \`true\`, the subgraph encountered indexing errors at some past block"""
  hasIndexingErrors: Boolean!
}

enum _SubgraphErrorPolicy_ {
  """Data will be returned even if the subgraph has indexing errors"""
  allow
  """
  If the subgraph has indexing errors, data will be omitted. The default.
  """
  deny
}
`, `.graphclient/sources/exchange/schema.graphql`);

export default buildSchema(source, {
  assumeValid: true,
  assumeValidSDL: true
});