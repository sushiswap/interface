import type { AppProps } from 'next/app'
import { FC } from 'react'
import NoSSR from 'react-no-ssr'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import PriorityConnector from '../components/connectors/PriorityConnector'
import store, { persistor } from '../state'
import ListsUpdater from '../state/lists/updater'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
    <NoSSR>
    <PriorityConnector />
    </NoSSR>
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
