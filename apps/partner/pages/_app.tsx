import { FC } from 'react'
import type { AppProps } from 'next/app'
import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider } from '@web3-react/core'
import { Provider as ReduxProvider } from 'react-redux'
import store from '../state'

function getLibrary(provider) {
  return new Web3Provider(provider)
}

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
              <ReduxProvider store={store}>
        <Component {...pageProps} />
        </ReduxProvider>
      </Web3ReactProvider>
    </>
  )
}

export default MyApp
