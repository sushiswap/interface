export const NULL_ADDRESS = '0x0000000000000000000000000000000000000000'
export const MULTICALL_ADDRESS = '0x1F98415757620B543A52E61c46B32eB19261F984' // Address on Mainnet
export const USDC_ADDRESS = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
export const USDT_ADDRESS = '0xdAC17F958D2ee523a2206206994597C13D831ec7'

export const EXPECTED_THRESHOLD = 3
export const EXPECTED_OWNER_COUNT = 6

export enum ChainId {
  ETHEREUM = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  POLYGON = 137,
  POLYGON_TESTNET = 80001,
  FANTOM = 250,
  FANTOM_TESTNET = 4002,
  XDAI = 100,
  BINANCE = 56,
  BINANCE_TESTNET = 97,
  ARBITRUM = 42161,
  ARBITRUM_TESTNET = 79377087078960,
  MOONBEAM_TESTNET = 1287,
  AVALANCHE = 43114,
  AVALANCHE_TESTNET = 43113,
  HECO = 128,
  HECO_TESTNET = 256,
  HARMONY = 1666600000,
  HARMONY_TESTNET = 1666700000,
  OKEX = 66,
  OKEX_TESTNET = 65,
  CELO = 42220,
  PALM = 11297108109,
  PALM_TESTNET = 11297108099,
  MOONRIVER = 1285,
  FUSE = 122,
  TELOS = 40,
  HARDHAT = 31337,
  MOONBEAM = 1284,
}

export type Safe = {
  baseUrl: string
  name: string
  chainId: ChainId
  address: string
}

export const safes = [
  {
    baseUrl: `https://safe-client.gnosis.io/v1`,
    name: 'Ops',
    chainId: ChainId.ETHEREUM,
    address: '0x19B3Eb3Af5D93b77a5619b047De0EED7115A19e7',
  },
  {
    baseUrl: `https://safe-client.gnosis.io/v1`,
    name: 'Fees',
    chainId: ChainId.POLYGON,
    address: '0x850a57630A2012B2494779fBc86bBc24F2a7baeF',
  },
  {
    baseUrl: `https://safe-client.gnosis.io/v1`,
    name: 'Ops',
    chainId: ChainId.POLYGON,
    address: '0x2B23D9B02FffA1F5441Ef951B4B95c09faa57EBA',
  },
  {
    baseUrl: `https://safe-client.gnosis.io/v1`,
    name: 'Ops',
    chainId: ChainId.XDAI,
    address: '0xc375411C6597F692Add6a7a3AD5b3C38626B0F26',
  },

  {
    baseUrl: `https://safe-client.gnosis.io/v1`,
    name: 'Ops',
    chainId: ChainId.BINANCE,
    address: '0xc6fD91aD4919Fd91e2c84077ba648092cB499638',
  },
  {
    baseUrl: `https://safe-client.gnosis.io/v1`,
    name: 'Ops',
    chainId: ChainId.AVALANCHE,
    address: '0x09842Ce338647906B686aBB3B648A6457fbB25DA',
  },
  {
    baseUrl: `https://client-gateway.celo-safe.io/v1`,
    name: 'Ops',
    chainId: ChainId.CELO,
    address: '0x751b01Fa14fD9640a1DF9014e2D0f3a03A198b81',
  },

  {
    baseUrl: `https://client-gateway.celo-safe.io/v1`,
    name: 'Fees',
    chainId: ChainId.CELO,
    address: '0x8b63fcBB752e425e3C4B12F7802BAd1A24c6d7F4',
  },
  {
    baseUrl: `https://safe-client.gnosis.io/v1`,
    name: 'Ops',
    chainId: ChainId.ARBITRUM,
    address: '0x978982772b8e4055B921bf9295c0d74eB36Bc54e',
  },
  {
    baseUrl: 'https://multisig.t.hmny.io/api/v1',
    name: 'Ops',
    chainId: ChainId.HARMONY,
    address: '0x30af69A3f4a6f266961313Ce0943719dF4A8AA10',
  },

  {
    baseUrl: `https://safe-service.fuse.io/cgw/v1`,
    name: 'Ops',
    chainId: ChainId.FUSE,
    address: '0x33b6beb37837459Ee84a1Ffed2C6a4ca22e5F316',
  },
  {
    baseUrl: `https://safe.fantom.network/v1`,
    name: 'Ops',
    chainId: ChainId.FANTOM,
    address: '0xF9E7d4c6d36ca311566f46c81E572102A2DC9F52',
  },
  {
    baseUrl: `https://gateway.moonriver.multisig.moonbeam.network/v1`,
    name: 'Fees',
    chainId: ChainId.MOONRIVER,
    address: '0x6669cc35031A84fAc1Efe30bB586B9ADdf223Fbc',
  },
  {
    baseUrl: `https://gateway.moonriver.multisig.moonbeam.network/v1`,
    name: 'Ops',
    chainId: ChainId.MOONRIVER,
    address: '0x939f7E76cc515cc296dD3ce362D9a52e148A7D5f',
  },
  //FIXME: Incorrect address?
  // {
  //   baseUrl: 'https://multisig.moonbeam.network/moonbeam:',
  //   name: 'Ops',
  //   chainId: ChainId.MOONBEAM,
  //   address: '0x87AEb22b7BB02AC42204eB312C08A22FC3f077F3',
  // },
] as Safe[]


export const users = new Map<string, string>([
  ['0x3027a0c4E35272c0707dE2651A0638c3dF1c37AC', 'Gasper'],
  ['0x4bb4c1B0745ef7B4642fEECcd0740deC417ca0a0', 'Jiro'],
  ['0xFBb3a85603C398Ff22435DD40873EC190134e1f6', 'Matt'],
  ['0xCc159BCb6a466DA442D254Ad934125f05DAB66b5', 'Matt (Ledger)'],
  ['0xb2701351a2c1c6E30BFA2699d25f85a5100e39D3', 'Ramin'],
  ['0xb4A3f907ec1611F22543219AE9Bb33ec5E96e116', 'Omakase'],
  ['0x6b83270726342E02a11E755e8CC35275712122eC', 'Lufy'],
  ['0x426b3afFbbE924E01575d5b3cb9dc640625bBB49', 'Keno'],
  ['0x5b8C253517b6Bd003369173109693B01cb6841B5', 'LevX'],
  ['0x8f99B0b48b23908Da9f727B5083052d5099e6aea', 'Joe'],
  ['0x285b7EEa81a5B66B62e7276a24c1e0F83F7409c1', 'Maki'],
  ['0x8620D3edd67Ed411CCb314F3CFFF5a27A7C74A74', 'Sarang'],
  ['0xe94B5EEC1fA96CEecbD33EF5Baa8d00E4493F4f3', 'Treasury Multisig'],
  ['0x9a8541Ddf3a932a9A922B607e9CF7301f1d47bD1', 'Timelock'],
])