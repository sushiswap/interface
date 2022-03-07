import { FC } from 'react'
import type { AppProps } from 'next/app'
import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider } from '@web3-react/core'

function getLibrary(provider) {
  return new Web3Provider(provider)
}

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Component {...pageProps} />
      </Web3ReactProvider>
    </>
  )
}

export default MyApp
