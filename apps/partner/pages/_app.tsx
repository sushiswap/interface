import type { AppProps } from 'next/app'
import { FC } from 'react'
import NoSSR from 'react-no-ssr'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import PriorityConnector from 'app/components/connectors/PriorityConnector'
import store, { persistor } from 'app/state'
import ListsUpdater from 'app/state/lists/updater'
import ApplicationUpdater from 'app/state/application/updater'
import './index.css'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
    
    <NoSSR>
    <PriorityConnector />
        <ReduxProvider store={store}>
          <PersistGate loading={<>loading</>} persistor={persistor}>
            <>
              <ListsUpdater />
              <ApplicationUpdater />
            </>
          </PersistGate>
          <Component {...pageProps} />
        </ReduxProvider>
    </NoSSR>
    </>
  )
}

export default MyApp
