import '../styles/globals.css'
import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'
import BottomNav from '../components/BottomNav'
import { useRouter } from 'next/router'

import saveUtms from '../util/saveUtms'

function MyApp ({Component, pageProps, router: serverRouter}) {
  let getPath = (path) => {
    switch(path) {
      case '/': return 0
      case '/salvos': return 1
      case '/cassino': return 2
      case '/resultado': return 3
      default: return 0
    }
  }

  const [page, setPage] = React.useState(getPath(serverRouter.pathname))

  const router = useRouter()

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])


  getPath = (path) => {
    switch(path) {
      case '/': return 0
      case '/salvos': return 1
      case '/cassino': return 2
      case '/resultado': return 3
      default: return 0
    }
  }
    

  React.useEffect(() => {
    saveUtms();

    switch (page) {
      case 0:
        router.push('/')
        break
      case 1:
        router.push('/salvos')
        break
      case 2:
        router.push('/cassino')
        break
      case 3:
        router.push('/resultado')
        break
    }
  }, [page])

  const [deferredPrompt, setDeferredPrompt] = React.useState(null)

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} deferredPrompt={deferredPrompt} setDeferredPrompt={setDeferredPrompt} setPage={setPage}/>
        <BottomNav {...pageProps} handlePageChange={setPage} page={page} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
