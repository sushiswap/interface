import { FC } from 'react'
import type { AppProps } from 'next/app'
import { Provider as ReduxProvider } from 'react-redux'
import store, { persistor } from '../state'
import ListsUpdater from '../state/lists/updater'
import { PersistGate } from 'redux-persist/integration/react'
import PriorityConnector from '../components/connectors/PriorityConnector'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
    <PriorityConnector />
        <ReduxProvider store={store}>
          <PersistGate loading={<>loading</>} persistor={persistor}>
            <>
              <ListsUpdater />
            </>
          </PersistGate>
          <Component {...pageProps} />
        </ReduxProvider>
    </>
  )
}

export default MyApp
