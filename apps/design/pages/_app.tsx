import '../styles/globals.css'
import 'ui/globals.css'

import { AppProps } from 'next/app'
import { FC } from 'react'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
