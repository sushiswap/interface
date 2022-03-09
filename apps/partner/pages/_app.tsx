import { FC } from 'react'
import type { AppProps } from 'next/app'
import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider } from '@web3-react/core'
import { Provider as ReduxProvider } from 'react-redux'
import store, { persistor } from '../state'
import ListsUpdater from '../state/lists/updater'
import { PersistGate } from 'redux-persist/integration/react'

function getLibrary(provider) {
  return new Web3Provider(provider)
}

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <ReduxProvider store={store}>
          <PersistGate loading={<>loading</>} persistor={persistor}>
            <>
              <ListsUpdater />
            </>
          </PersistGate>
          <Component {...pageProps} />
        </ReduxProvider>
      </Web3ReactProvider>
    </>
  )
}

export default MyApp
