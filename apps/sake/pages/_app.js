import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { AnimateSharedLayout } from 'framer-motion'
import { pageview } from '../analytics'
import fontTheme from '../font'
import '../globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <title>SAK3</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
      <style jsx global>
        {fontTheme}
      </style>
    </>
  )
}

export default MyApp
