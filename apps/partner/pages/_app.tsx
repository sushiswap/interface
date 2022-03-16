import '../styles/index.css'
import type { AppProps } from 'next/app'
import { FC } from 'react'
import NoSSR from 'react-no-ssr'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import PriorityConnector from 'app/components/connectors/PriorityConnector'
import DefaultLayout from 'app/layouts/Default'
import store, { persistor } from 'app/state'
import ApplicationUpdater from 'app/state/application/updater'
import MulticallUpdater from 'app/state/multicall/updater'
import TransactionUpdater from 'app/state/transactions/updater'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  // Allows for conditionally setting a layout to be hoisted per page
    // @ts-ignore TYPE NEEDS FIXING
  const Layout = Component.Layout || DefaultLayout  
  return (
    <>
      <NoSSR>
        <PriorityConnector />
        <ReduxProvider store={store}>
          <PersistGate loading={<>loading</>} persistor={persistor}>
            <>
              <ApplicationUpdater />
              <MulticallUpdater />
              <TransactionUpdater />
            </>
          </PersistGate>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ReduxProvider>
      </NoSSR>
    </>
  )
}

export default MyApp
