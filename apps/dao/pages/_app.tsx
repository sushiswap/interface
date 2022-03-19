import { ChainId, getProvider, store, Updater, useLatestBlock } from '../'
import type { AppProps } from 'next/app'
import { FC, useMemo } from 'react'
import { Provider } from 'react-redux'
const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const providerEthereum = getProvider(ChainId.ETHEREUM)
  const providerRinkeby = getProvider(ChainId.RINKEBY)
  const blockNumberEthereum = useLatestBlock(providerEthereum)
  const blockNumberRinkeby = useLatestBlock(providerRinkeby)
  const chainIds = useMemo(() => [ChainId.ETHEREUM, ChainId.RINKEBY], [])
  const blockNumbers = useMemo(
    () => [blockNumberEthereum, blockNumberRinkeby],
    [blockNumberEthereum, blockNumberRinkeby],
  )
  return (
    <Provider store={store}>
      <Updater chainId={ChainId.ETHEREUM} blockNumber={blockNumberEthereum} />
      <Updater chainId={ChainId.RINKEBY} blockNumber={blockNumberRinkeby} />
      <Component {...pageProps} blockNumbers={blockNumbers} chainIds={chainIds} />
    </Provider>
  )

  return
}

export default MyApp
