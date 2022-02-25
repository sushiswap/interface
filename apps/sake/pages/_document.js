import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import { GA_TRACKING_ID } from '../analytics'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <meta name="application-name" content={process.env.APP_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content={process.env.APP_NAME} />

          <meta name="description" content={process.env.NEXT_PUBLIC_APP_DESCRIPTION} />
          <meta name="keywords" content={process.env.NEXT_PUBLIC_APP_KEYWORDS} />

          <link
            rel="preload"
            href="/fonts/BPdotsSquareBold-webfont.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />

          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />

          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="msapplication-TileColor" content={'#000000'} />
          <meta name="msapplication-tap-highlight" content="no" />

          <meta name="theme-color" content={'#000000'} />

          {/* <link rel="apple-touch-icon" href="/apple-icon.png"></link> */}

          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link href="/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
          <link href="/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />

          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
          <link rel="shortcut icon" href="/favicon.ico" />

          {/* TWITTER */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://sake.sushi.com" />
          <meta name="twitter:title" content="SAKΞ" />
          <meta
            name="twitter:description"
            content="SAKΞ is the first of its kind: a tokenized sake bridging tradition and technology with quality design."
          />
          <meta
            name="twitter:image"
            content="https://raw.githubusercontent.com/sushiswap/sushi-content/master/sake/sake-box.jpg"
          />
          <meta name="twitter:creator" content="@0xSAKE" />

          {/* FACEBOOK */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content={process.env.APP_NAME} />
          <meta property="og:description" content={process.env.APP_DESCRIPTION} />
          <meta property="og:site_name" content={process.env.APP_NAME} />
          <meta property="og:url" content={process.env.APP_URL} />
          <meta property="og:image" content="/apple-touch-icon.png" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                });
                `,
            }}
          />
        </Head>
        <body className="no-js">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
