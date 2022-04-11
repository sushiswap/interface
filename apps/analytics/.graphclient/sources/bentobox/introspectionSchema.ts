// @ts-nocheck
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

type BentoBox {
  id: ID!
  protocols(skip: Int = 0, first: Int = 100, orderBy: Protocol_orderBy, orderDirection: OrderDirection, where: Protocol_filter): [Protocol!]
  users(skip: Int = 0, first: Int = 100, orderBy: User_orderBy, orderDirection: OrderDirection, where: User_filter): [User!]
  tokens(skip: Int = 0, first: Int = 100, orderBy: Token_orderBy, orderDirection: OrderDirection, where: Token_filter): [Token!]
  masterContracts(skip: Int = 0, first: Int = 100, orderBy: MasterContract_orderBy, orderDirection: OrderDirection, where: MasterContract_filter): [MasterContract!]!
  clones(skip: Int = 0, first: Int = 100, orderBy: Clone_orderBy, orderDirection: OrderDirection, where: Clone_filter): [Clone!]
  flashloans(skip: Int = 0, first: Int = 100, orderBy: FlashLoan_orderBy, orderDirection: OrderDirection, where: FlashLoan_filter): [FlashLoan!]
  transactions(skip: Int = 0, first: Int = 100, orderBy: Transaction_orderBy, orderDirection: OrderDirection, where: Transaction_filter): [Transaction!]
  protocolCount: BigInt!
  userCount: BigInt!
  tokenCount: BigInt!
  masterContractCount: BigInt!
  cloneCount: BigInt!
  flashloanCount: BigInt!
  transactionCount: BigInt!
}

input BentoBox_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  protocolCount: BigInt
  protocolCount_not: BigInt
  protocolCount_gt: BigInt
  protocolCount_lt: BigInt
  protocolCount_gte: BigInt
  protocolCount_lte: BigInt
  protocolCount_in: [BigInt!]
  protocolCount_not_in: [BigInt!]
  userCount: BigInt
  userCount_not: BigInt
  userCount_gt: BigInt
  userCount_lt: BigInt
  userCount_gte: BigInt
  userCount_lte: BigInt
  userCount_in: [BigInt!]
  userCount_not_in: [BigInt!]
  tokenCount: BigInt
  tokenCount_not: BigInt
  tokenCount_gt: BigInt
  tokenCount_lt: BigInt
  tokenCount_gte: BigInt
  tokenCount_lte: BigInt
  tokenCount_in: [BigInt!]
  tokenCount_not_in: [BigInt!]
  masterContractCount: BigInt
  masterContractCount_not: BigInt
  masterContractCount_gt: BigInt
  masterContractCount_lt: BigInt
  masterContractCount_gte: BigInt
  masterContractCount_lte: BigInt
  masterContractCount_in: [BigInt!]
  masterContractCount_not_in: [BigInt!]
  cloneCount: BigInt
  cloneCount_not: BigInt
  cloneCount_gt: BigInt
  cloneCount_lt: BigInt
  cloneCount_gte: BigInt
  cloneCount_lte: BigInt
  cloneCount_in: [BigInt!]
  cloneCount_not_in: [BigInt!]
  flashloanCount: BigInt
  flashloanCount_not: BigInt
  flashloanCount_gt: BigInt
  flashloanCount_lt: BigInt
  flashloanCount_gte: BigInt
  flashloanCount_lte: BigInt
  flashloanCount_in: [BigInt!]
  flashloanCount_not_in: [BigInt!]
  transactionCount: BigInt
  transactionCount_not: BigInt
  transactionCount_gt: BigInt
  transactionCount_lt: BigInt
  transactionCount_gte: BigInt
  transactionCount_lte: BigInt
  transactionCount_in: [BigInt!]
  transactionCount_not_in: [BigInt!]
}

enum BentoBox_orderBy {
  id
  protocols
  users
  tokens
  masterContracts
  clones
  flashloans
  transactions
  protocolCount
  userCount
  tokenCount
  masterContractCount
  cloneCount
  flashloanCount
  transactionCount
}

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

scalar Bytes

type Clone {
  id: ID!
  bentoBox: BentoBox!
  masterContract: MasterContract!
  data: Bytes!
  block: BigInt!
  timestamp: BigInt!
}

input Clone_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  bentoBox: String
  bentoBox_not: String
  bentoBox_gt: String
  bentoBox_lt: String
  bentoBox_gte: String
  bentoBox_lte: String
  bentoBox_in: [String!]
  bentoBox_not_in: [String!]
  bentoBox_contains: String
  bentoBox_contains_nocase: String
  bentoBox_not_contains: String
  bentoBox_not_contains_nocase: String
  bentoBox_starts_with: String
  bentoBox_starts_with_nocase: String
  bentoBox_not_starts_with: String
  bentoBox_not_starts_with_nocase: String
  bentoBox_ends_with: String
  bentoBox_ends_with_nocase: String
  bentoBox_not_ends_with: String
  bentoBox_not_ends_with_nocase: String
  masterContract: String
  masterContract_not: String
  masterContract_gt: String
  masterContract_lt: String
  masterContract_gte: String
  masterContract_lte: String
  masterContract_in: [String!]
  masterContract_not_in: [String!]
  masterContract_contains: String
  masterContract_contains_nocase: String
  masterContract_not_contains: String
  masterContract_not_contains_nocase: String
  masterContract_starts_with: String
  masterContract_starts_with_nocase: String
  masterContract_not_starts_with: String
  masterContract_not_starts_with_nocase: String
  masterContract_ends_with: String
  masterContract_ends_with_nocase: String
  masterContract_not_ends_with: String
  masterContract_not_ends_with_nocase: String
  data: Bytes
  data_not: Bytes
  data_in: [Bytes!]
  data_not_in: [Bytes!]
  data_contains: Bytes
  data_not_contains: Bytes
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

enum Clone_orderBy {
  id
  bentoBox
  masterContract
  data
  block
  timestamp
}

type FlashLoan {
  id: ID!
  bentoBox: BentoBox!
  borrower: Bytes!
  receiver: Bytes!
  token: Token!
  amount: BigDecimal!
  feeAmount: BigDecimal!
  block: BigInt!
  timestamp: BigInt!
}

input FlashLoan_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  bentoBox: String
  bentoBox_not: String
  bentoBox_gt: String
  bentoBox_lt: String
  bentoBox_gte: String
  bentoBox_lte: String
  bentoBox_in: [String!]
  bentoBox_not_in: [String!]
  bentoBox_contains: String
  bentoBox_contains_nocase: String
  bentoBox_not_contains: String
  bentoBox_not_contains_nocase: String
  bentoBox_starts_with: String
  bentoBox_starts_with_nocase: String
  bentoBox_not_starts_with: String
  bentoBox_not_starts_with_nocase: String
  bentoBox_ends_with: String
  bentoBox_ends_with_nocase: String
  bentoBox_not_ends_with: String
  bentoBox_not_ends_with_nocase: String
  borrower: Bytes
  borrower_not: Bytes
  borrower_in: [Bytes!]
  borrower_not_in: [Bytes!]
  borrower_contains: Bytes
  borrower_not_contains: Bytes
  receiver: Bytes
  receiver_not: Bytes
  receiver_in: [Bytes!]
  receiver_not_in: [Bytes!]
  receiver_contains: Bytes
  receiver_not_contains: Bytes
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
  amount: BigDecimal
  amount_not: BigDecimal
  amount_gt: BigDecimal
  amount_lt: BigDecimal
  amount_gte: BigDecimal
  amount_lte: BigDecimal
  amount_in: [BigDecimal!]
  amount_not_in: [BigDecimal!]
  feeAmount: BigDecimal
  feeAmount_not: BigDecimal
  feeAmount_gt: BigDecimal
  feeAmount_lt: BigDecimal
  feeAmount_gte: BigDecimal
  feeAmount_lte: BigDecimal
  feeAmount_in: [BigDecimal!]
  feeAmount_not_in: [BigDecimal!]
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

enum FlashLoan_orderBy {
  id
  bentoBox
  borrower
  receiver
  token
  amount
  feeAmount
  block
  timestamp
}

type MasterContract {
  id: ID!
  bentoBox: BentoBox!
  clones(skip: Int = 0, first: Int = 100, orderBy: Clone_orderBy, orderDirection: OrderDirection, where: Clone_filter): [Clone!]
  masterContractApprovals(skip: Int = 0, first: Int = 100, orderBy: MasterContractApproval_orderBy, orderDirection: OrderDirection, where: MasterContractApproval_filter): [MasterContractApproval!]
}

type MasterContractApproval {
  id: ID!
  masterContract: MasterContract!
  user: User!
  approved: Boolean!
}

input MasterContractApproval_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  masterContract: String
  masterContract_not: String
  masterContract_gt: String
  masterContract_lt: String
  masterContract_gte: String
  masterContract_lte: String
  masterContract_in: [String!]
  masterContract_not_in: [String!]
  masterContract_contains: String
  masterContract_contains_nocase: String
  masterContract_not_contains: String
  masterContract_not_contains_nocase: String
  masterContract_starts_with: String
  masterContract_starts_with_nocase: String
  masterContract_not_starts_with: String
  masterContract_not_starts_with_nocase: String
  masterContract_ends_with: String
  masterContract_ends_with_nocase: String
  masterContract_not_ends_with: String
  masterContract_not_ends_with_nocase: String
  user: String
  user_not: String
  user_gt: String
  user_lt: String
  user_gte: String
  user_lte: String
  user_in: [String!]
  user_not_in: [String!]
  user_contains: String
  user_contains_nocase: String
  user_not_contains: String
  user_not_contains_nocase: String
  user_starts_with: String
  user_starts_with_nocase: String
  user_not_starts_with: String
  user_not_starts_with_nocase: String
  user_ends_with: String
  user_ends_with_nocase: String
  user_not_ends_with: String
  user_not_ends_with_nocase: String
  approved: Boolean
  approved_not: Boolean
  approved_in: [Boolean!]
  approved_not_in: [Boolean!]
}

enum MasterContractApproval_orderBy {
  id
  masterContract
  user
  approved
}

input MasterContract_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  bentoBox: String
  bentoBox_not: String
  bentoBox_gt: String
  bentoBox_lt: String
  bentoBox_gte: String
  bentoBox_lte: String
  bentoBox_in: [String!]
  bentoBox_not_in: [String!]
  bentoBox_contains: String
  bentoBox_contains_nocase: String
  bentoBox_not_contains: String
  bentoBox_not_contains_nocase: String
  bentoBox_starts_with: String
  bentoBox_starts_with_nocase: String
  bentoBox_not_starts_with: String
  bentoBox_not_starts_with_nocase: String
  bentoBox_ends_with: String
  bentoBox_ends_with_nocase: String
  bentoBox_not_ends_with: String
  bentoBox_not_ends_with_nocase: String
}

enum MasterContract_orderBy {
  id
  bentoBox
  clones
  masterContractApprovals
}

"""Defines the order direction, either ascending or descending"""
enum OrderDirection {
  asc
  desc
}

type Protocol {
  id: ID!
  bentoBox: BentoBox!
}

input Protocol_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  bentoBox: String
  bentoBox_not: String
  bentoBox_gt: String
  bentoBox_lt: String
  bentoBox_gte: String
  bentoBox_lte: String
  bentoBox_in: [String!]
  bentoBox_not_in: [String!]
  bentoBox_contains: String
  bentoBox_contains_nocase: String
  bentoBox_not_contains: String
  bentoBox_not_contains_nocase: String
  bentoBox_starts_with: String
  bentoBox_starts_with_nocase: String
  bentoBox_not_starts_with: String
  bentoBox_not_starts_with_nocase: String
  bentoBox_ends_with: String
  bentoBox_ends_with_nocase: String
  bentoBox_not_ends_with: String
  bentoBox_not_ends_with_nocase: String
}

enum Protocol_orderBy {
  id
  bentoBox
}

type Query {
  bentoBox(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): BentoBox
  bentoBoxes(
    skip: Int = 0
    first: Int = 100
    orderBy: BentoBox_orderBy
    orderDirection: OrderDirection
    where: BentoBox_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [BentoBox!]!
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
  strategy(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Strategy
  strategies(
    skip: Int = 0
    first: Int = 100
    orderBy: Strategy_orderBy
    orderDirection: OrderDirection
    where: Strategy_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Strategy!]!
  strategyHarvest(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): StrategyHarvest
  strategyHarvests(
    skip: Int = 0
    first: Int = 100
    orderBy: StrategyHarvest_orderBy
    orderDirection: OrderDirection
    where: StrategyHarvest_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [StrategyHarvest!]!
  rebase(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Rebase
  rebases(
    skip: Int = 0
    first: Int = 100
    orderBy: Rebase_orderBy
    orderDirection: OrderDirection
    where: Rebase_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Rebase!]!
  flashLoan(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): FlashLoan
  flashLoans(
    skip: Int = 0
    first: Int = 100
    orderBy: FlashLoan_orderBy
    orderDirection: OrderDirection
    where: FlashLoan_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [FlashLoan!]!
  masterContract(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): MasterContract
  masterContracts(
    skip: Int = 0
    first: Int = 100
    orderBy: MasterContract_orderBy
    orderDirection: OrderDirection
    where: MasterContract_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [MasterContract!]!
  clone(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Clone
  clones(
    skip: Int = 0
    first: Int = 100
    orderBy: Clone_orderBy
    orderDirection: OrderDirection
    where: Clone_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Clone!]!
  masterContractApproval(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): MasterContractApproval
  masterContractApprovals(
    skip: Int = 0
    first: Int = 100
    orderBy: MasterContractApproval_orderBy
    orderDirection: OrderDirection
    where: MasterContractApproval_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [MasterContractApproval!]!
  protocol(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Protocol
  protocols(
    skip: Int = 0
    first: Int = 100
    orderBy: Protocol_orderBy
    orderDirection: OrderDirection
    where: Protocol_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Protocol!]!
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
  userToken(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): UserToken
  userTokens(
    skip: Int = 0
    first: Int = 100
    orderBy: UserToken_orderBy
    orderDirection: OrderDirection
    where: UserToken_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [UserToken!]!
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
  """Access to subgraph metadata"""
  _meta(block: Block_height): _Meta_
}

type Rebase {
  id: ID!
  token: Token!
  base: BigDecimal!
  elastic: BigDecimal!
}

input Rebase_filter {
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
  base: BigDecimal
  base_not: BigDecimal
  base_gt: BigDecimal
  base_lt: BigDecimal
  base_gte: BigDecimal
  base_lte: BigDecimal
  base_in: [BigDecimal!]
  base_not_in: [BigDecimal!]
  elastic: BigDecimal
  elastic_not: BigDecimal
  elastic_gt: BigDecimal
  elastic_lt: BigDecimal
  elastic_gte: BigDecimal
  elastic_lte: BigDecimal
  elastic_in: [BigDecimal!]
  elastic_not_in: [BigDecimal!]
}

enum Rebase_orderBy {
  id
  token
  base
  elastic
}

type Strategy {
  id: ID!
  token: Token!
  balance: BigInt!
  totalProfit: BigInt!
  harvests(skip: Int = 0, first: Int = 100, orderBy: StrategyHarvest_orderBy, orderDirection: OrderDirection, where: StrategyHarvest_filter): [StrategyHarvest!]
  timestamp: BigInt!
  block: BigInt!
}

type StrategyHarvest {
  id: ID!
  strategy: Strategy!
  profit: BigDecimal!
  tokenElastic: BigDecimal!
  timestamp: BigInt!
  block: BigInt!
}

input StrategyHarvest_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  strategy: String
  strategy_not: String
  strategy_gt: String
  strategy_lt: String
  strategy_gte: String
  strategy_lte: String
  strategy_in: [String!]
  strategy_not_in: [String!]
  strategy_contains: String
  strategy_contains_nocase: String
  strategy_not_contains: String
  strategy_not_contains_nocase: String
  strategy_starts_with: String
  strategy_starts_with_nocase: String
  strategy_not_starts_with: String
  strategy_not_starts_with_nocase: String
  strategy_ends_with: String
  strategy_ends_with_nocase: String
  strategy_not_ends_with: String
  strategy_not_ends_with_nocase: String
  profit: BigDecimal
  profit_not: BigDecimal
  profit_gt: BigDecimal
  profit_lt: BigDecimal
  profit_gte: BigDecimal
  profit_lte: BigDecimal
  profit_in: [BigDecimal!]
  profit_not_in: [BigDecimal!]
  tokenElastic: BigDecimal
  tokenElastic_not: BigDecimal
  tokenElastic_gt: BigDecimal
  tokenElastic_lt: BigDecimal
  tokenElastic_gte: BigDecimal
  tokenElastic_lte: BigDecimal
  tokenElastic_in: [BigDecimal!]
  tokenElastic_not_in: [BigDecimal!]
  timestamp: BigInt
  timestamp_not: BigInt
  timestamp_gt: BigInt
  timestamp_lt: BigInt
  timestamp_gte: BigInt
  timestamp_lte: BigInt
  timestamp_in: [BigInt!]
  timestamp_not_in: [BigInt!]
  block: BigInt
  block_not: BigInt
  block_gt: BigInt
  block_lt: BigInt
  block_gte: BigInt
  block_lte: BigInt
  block_in: [BigInt!]
  block_not_in: [BigInt!]
}

enum StrategyHarvest_orderBy {
  id
  strategy
  profit
  tokenElastic
  timestamp
  block
}

input Strategy_filter {
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
  balance: BigInt
  balance_not: BigInt
  balance_gt: BigInt
  balance_lt: BigInt
  balance_gte: BigInt
  balance_lte: BigInt
  balance_in: [BigInt!]
  balance_not_in: [BigInt!]
  totalProfit: BigInt
  totalProfit_not: BigInt
  totalProfit_gt: BigInt
  totalProfit_lt: BigInt
  totalProfit_gte: BigInt
  totalProfit_lte: BigInt
  totalProfit_in: [BigInt!]
  totalProfit_not_in: [BigInt!]
  timestamp: BigInt
  timestamp_not: BigInt
  timestamp_gt: BigInt
  timestamp_lt: BigInt
  timestamp_gte: BigInt
  timestamp_lte: BigInt
  timestamp_in: [BigInt!]
  timestamp_not_in: [BigInt!]
  block: BigInt
  block_not: BigInt
  block_gt: BigInt
  block_lt: BigInt
  block_gte: BigInt
  block_lte: BigInt
  block_in: [BigInt!]
  block_not_in: [BigInt!]
}

enum Strategy_orderBy {
  id
  token
  balance
  totalProfit
  harvests
  timestamp
  block
}

type Subscription {
  bentoBox(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): BentoBox
  bentoBoxes(
    skip: Int = 0
    first: Int = 100
    orderBy: BentoBox_orderBy
    orderDirection: OrderDirection
    where: BentoBox_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [BentoBox!]!
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
  strategy(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Strategy
  strategies(
    skip: Int = 0
    first: Int = 100
    orderBy: Strategy_orderBy
    orderDirection: OrderDirection
    where: Strategy_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Strategy!]!
  strategyHarvest(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): StrategyHarvest
  strategyHarvests(
    skip: Int = 0
    first: Int = 100
    orderBy: StrategyHarvest_orderBy
    orderDirection: OrderDirection
    where: StrategyHarvest_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [StrategyHarvest!]!
  rebase(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Rebase
  rebases(
    skip: Int = 0
    first: Int = 100
    orderBy: Rebase_orderBy
    orderDirection: OrderDirection
    where: Rebase_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Rebase!]!
  flashLoan(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): FlashLoan
  flashLoans(
    skip: Int = 0
    first: Int = 100
    orderBy: FlashLoan_orderBy
    orderDirection: OrderDirection
    where: FlashLoan_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [FlashLoan!]!
  masterContract(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): MasterContract
  masterContracts(
    skip: Int = 0
    first: Int = 100
    orderBy: MasterContract_orderBy
    orderDirection: OrderDirection
    where: MasterContract_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [MasterContract!]!
  clone(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Clone
  clones(
    skip: Int = 0
    first: Int = 100
    orderBy: Clone_orderBy
    orderDirection: OrderDirection
    where: Clone_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Clone!]!
  masterContractApproval(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): MasterContractApproval
  masterContractApprovals(
    skip: Int = 0
    first: Int = 100
    orderBy: MasterContractApproval_orderBy
    orderDirection: OrderDirection
    where: MasterContractApproval_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [MasterContractApproval!]!
  protocol(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Protocol
  protocols(
    skip: Int = 0
    first: Int = 100
    orderBy: Protocol_orderBy
    orderDirection: OrderDirection
    where: Protocol_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Protocol!]!
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
  userToken(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): UserToken
  userTokens(
    skip: Int = 0
    first: Int = 100
    orderBy: UserToken_orderBy
    orderDirection: OrderDirection
    where: UserToken_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [UserToken!]!
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
  """Access to subgraph metadata"""
  _meta(block: Block_height): _Meta_
}

type Token {
  id: ID!
  bentoBox: BentoBox!
  rebase: Rebase!
  symbol: String!
  symbolSuccess: Boolean!
  name: String!
  nameSuccess: Boolean!
  decimals: BigInt!
  decimalsSuccess: Boolean!
  strategy: Strategy
  strategyTargetPercentage: BigInt!
  block: BigInt!
  timestamp: BigInt!
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
  bentoBox: String
  bentoBox_not: String
  bentoBox_gt: String
  bentoBox_lt: String
  bentoBox_gte: String
  bentoBox_lte: String
  bentoBox_in: [String!]
  bentoBox_not_in: [String!]
  bentoBox_contains: String
  bentoBox_contains_nocase: String
  bentoBox_not_contains: String
  bentoBox_not_contains_nocase: String
  bentoBox_starts_with: String
  bentoBox_starts_with_nocase: String
  bentoBox_not_starts_with: String
  bentoBox_not_starts_with_nocase: String
  bentoBox_ends_with: String
  bentoBox_ends_with_nocase: String
  bentoBox_not_ends_with: String
  bentoBox_not_ends_with_nocase: String
  rebase: String
  rebase_not: String
  rebase_gt: String
  rebase_lt: String
  rebase_gte: String
  rebase_lte: String
  rebase_in: [String!]
  rebase_not_in: [String!]
  rebase_contains: String
  rebase_contains_nocase: String
  rebase_not_contains: String
  rebase_not_contains_nocase: String
  rebase_starts_with: String
  rebase_starts_with_nocase: String
  rebase_not_starts_with: String
  rebase_not_starts_with_nocase: String
  rebase_ends_with: String
  rebase_ends_with_nocase: String
  rebase_not_ends_with: String
  rebase_not_ends_with_nocase: String
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
  strategy: String
  strategy_not: String
  strategy_gt: String
  strategy_lt: String
  strategy_gte: String
  strategy_lte: String
  strategy_in: [String!]
  strategy_not_in: [String!]
  strategy_contains: String
  strategy_contains_nocase: String
  strategy_not_contains: String
  strategy_not_contains_nocase: String
  strategy_starts_with: String
  strategy_starts_with_nocase: String
  strategy_not_starts_with: String
  strategy_not_starts_with_nocase: String
  strategy_ends_with: String
  strategy_ends_with_nocase: String
  strategy_not_ends_with: String
  strategy_not_ends_with_nocase: String
  strategyTargetPercentage: BigInt
  strategyTargetPercentage_not: BigInt
  strategyTargetPercentage_gt: BigInt
  strategyTargetPercentage_lt: BigInt
  strategyTargetPercentage_gte: BigInt
  strategyTargetPercentage_lte: BigInt
  strategyTargetPercentage_in: [BigInt!]
  strategyTargetPercentage_not_in: [BigInt!]
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
  bentoBox
  rebase
  symbol
  symbolSuccess
  name
  nameSuccess
  decimals
  decimalsSuccess
  strategy
  strategyTargetPercentage
  block
  timestamp
}

type Transaction {
  id: ID!
  bentoBox: BentoBox!
  type: TransactionType!
  from: User!
  to: User!
  token: Token!
  amount: BigInt
  share: BigInt!
  block: BigInt!
  timestamp: BigInt!
}

enum TransactionType {
  deposit
  transfer
  withdraw
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
  bentoBox: String
  bentoBox_not: String
  bentoBox_gt: String
  bentoBox_lt: String
  bentoBox_gte: String
  bentoBox_lte: String
  bentoBox_in: [String!]
  bentoBox_not_in: [String!]
  bentoBox_contains: String
  bentoBox_contains_nocase: String
  bentoBox_not_contains: String
  bentoBox_not_contains_nocase: String
  bentoBox_starts_with: String
  bentoBox_starts_with_nocase: String
  bentoBox_not_starts_with: String
  bentoBox_not_starts_with_nocase: String
  bentoBox_ends_with: String
  bentoBox_ends_with_nocase: String
  bentoBox_not_ends_with: String
  bentoBox_not_ends_with_nocase: String
  type: TransactionType
  type_not: TransactionType
  type_in: [TransactionType!]
  type_not_in: [TransactionType!]
  from: String
  from_not: String
  from_gt: String
  from_lt: String
  from_gte: String
  from_lte: String
  from_in: [String!]
  from_not_in: [String!]
  from_contains: String
  from_contains_nocase: String
  from_not_contains: String
  from_not_contains_nocase: String
  from_starts_with: String
  from_starts_with_nocase: String
  from_not_starts_with: String
  from_not_starts_with_nocase: String
  from_ends_with: String
  from_ends_with_nocase: String
  from_not_ends_with: String
  from_not_ends_with_nocase: String
  to: String
  to_not: String
  to_gt: String
  to_lt: String
  to_gte: String
  to_lte: String
  to_in: [String!]
  to_not_in: [String!]
  to_contains: String
  to_contains_nocase: String
  to_not_contains: String
  to_not_contains_nocase: String
  to_starts_with: String
  to_starts_with_nocase: String
  to_not_starts_with: String
  to_not_starts_with_nocase: String
  to_ends_with: String
  to_ends_with_nocase: String
  to_not_ends_with: String
  to_not_ends_with_nocase: String
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
  amount: BigInt
  amount_not: BigInt
  amount_gt: BigInt
  amount_lt: BigInt
  amount_gte: BigInt
  amount_lte: BigInt
  amount_in: [BigInt!]
  amount_not_in: [BigInt!]
  share: BigInt
  share_not: BigInt
  share_gt: BigInt
  share_lt: BigInt
  share_gte: BigInt
  share_lte: BigInt
  share_in: [BigInt!]
  share_not_in: [BigInt!]
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
  bentoBox
  type
  from
  to
  token
  amount
  share
  block
  timestamp
}

type User {
  id: ID!
  bentoBox: BentoBox!
  masterContractApprovals(skip: Int = 0, first: Int = 100, orderBy: MasterContractApproval_orderBy, orderDirection: OrderDirection, where: MasterContractApproval_filter): [MasterContractApproval!]
  block: BigInt!
  timestamp: BigInt!
}

type UserToken {
  id: ID!
  token: Token!
  user: User!
  share: BigDecimal!
}

input UserToken_filter {
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
  user: String
  user_not: String
  user_gt: String
  user_lt: String
  user_gte: String
  user_lte: String
  user_in: [String!]
  user_not_in: [String!]
  user_contains: String
  user_contains_nocase: String
  user_not_contains: String
  user_not_contains_nocase: String
  user_starts_with: String
  user_starts_with_nocase: String
  user_not_starts_with: String
  user_not_starts_with_nocase: String
  user_ends_with: String
  user_ends_with_nocase: String
  user_not_ends_with: String
  user_not_ends_with_nocase: String
  share: BigDecimal
  share_not: BigDecimal
  share_gt: BigDecimal
  share_lt: BigDecimal
  share_gte: BigDecimal
  share_lte: BigDecimal
  share_in: [BigDecimal!]
  share_not_in: [BigDecimal!]
}

enum UserToken_orderBy {
  id
  token
  user
  share
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
  bentoBox: String
  bentoBox_not: String
  bentoBox_gt: String
  bentoBox_lt: String
  bentoBox_gte: String
  bentoBox_lte: String
  bentoBox_in: [String!]
  bentoBox_not_in: [String!]
  bentoBox_contains: String
  bentoBox_contains_nocase: String
  bentoBox_not_contains: String
  bentoBox_not_contains_nocase: String
  bentoBox_starts_with: String
  bentoBox_starts_with_nocase: String
  bentoBox_not_starts_with: String
  bentoBox_not_starts_with_nocase: String
  bentoBox_ends_with: String
  bentoBox_ends_with_nocase: String
  bentoBox_not_ends_with: String
  bentoBox_not_ends_with_nocase: String
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

enum User_orderBy {
  id
  bentoBox
  masterContractApprovals
  block
  timestamp
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
`, `.graphclient/sources/bentobox/introspectionSchema`);

export default buildSchema(source, {
  assumeValid: true,
  assumeValidSDL: true
});