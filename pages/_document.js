/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Document, {
  Html, Main, NextScript, Head
} from 'next/document';


import { ServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name='application-name' content='PWA App' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='PWA App' />
          <meta name='description' content='Gere seus jogos da Lotofácil' />
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
          <meta property='og:image' content='https://lotofacil.me/icons/apple-touch-icon.png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
  });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};