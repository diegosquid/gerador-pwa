/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import Document, {
  Html, Main, NextScript, Head
} from 'next/document'

import { ServerStyleSheets } from '@material-ui/core/styles'

export default class MyDocument extends Document {
  render () {
    return (
      <Html lang='pt-br'>
        <Head>
          <meta name='application-name' content='Aplicativo da Lotofácil' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='Aplicativo da Lotofácil' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-config' content='/icons/browserconfig.xml' />
          <meta name='msapplication-TileColor' content='#2B5797' />
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name='theme-color' content='#000000' />

          <link rel='apple-touch-icon' href='/icons/touch-icon-iphone.png' />
          <link rel='apple-touch-icon' sizes='152x152' href='/icons/touch-icon-ipad.png' />
          <link rel='apple-touch-icon' sizes='180x180' href='/icons/touch-icon-iphone-retina.png' />
          <link rel='apple-touch-icon' sizes='167x167' href='/icons/touch-icon-ipad-retina.png' />

          <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
          <link rel='manifest' href='/manifest.json' />
          <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#5bbad5' />
          <link rel='shortcut icon' href='/favicon.ico' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />

          <meta name='twitter:card' content='summary' />
          <meta name='twitter:url' content='https://lotofacil.me' />
          <meta name='twitter:title' content='Aplicativo da Lotofácil' />
          <meta name='twitter:description' content='Gere seus jogos da Lotofácil' />
          <meta name='twitter:image' content='https://lotofacil.me/icons/android-chrome-192x192.png' />
          <meta name='twitter:creator' content='@diegosquid' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Aplicativo da Lotofácil' />
          <meta property='og:description' content='Gere seus jogos da Lotofácil' />
          <meta property='og:site_name' content='Aplicativo da Lotofacil' />
          <meta property='og:url' content='https://lotofacil.me' />
          <meta property='og:image' content='/lotofacil.png' />
          <script async src='https://www.googletagmanager.com/gtag/js?id=G-HQHBMSYDXF' />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-HQHBMSYDXF');
                `
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function (w, d, t) {
                  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
                  ttq.load('CAFSEGJC77U59N959ORG');
                  ttq.page();
                }(window, document, 'ttq');
                `
            }}
          />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
  })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()]
  }
}
