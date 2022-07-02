import '../styles/globals.css'
import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'
import BottomNav from '../components/BottomNav'
import { useRouter } from 'next/router'

function MyApp ({ Component, pageProps }) {
  const [page, setPage] = React.useState(0)

  const router = useRouter()

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  React.useEffect(() => {
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
        router.push('/recomendado')
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
