import { FC } from 'react'
import type { AppProps } from 'next/app'
import { Provider as ReduxProvider } from 'react-redux'
import store, { persistor } from '../state'
import ListsUpdater from '../state/lists/updater'
import { PersistGate } from 'redux-persist/integration/react'
import PriorityExample from '../componenets/connectors/PriorityExample'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      {/* <Web3ReactProvider getLibrary={getLibrary}> */}
      {/* <PriorityExample/> */}
        <ReduxProvider store={store}>
          <PersistGate loading={<>loading</>} persistor={persistor}>
            <>
              <ListsUpdater />
            </>
          </PersistGate>
          <Component {...pageProps} />
        </ReduxProvider>
      {/* </Web3ReactProvider> */}
    </>
  )
}

export default MyApp
