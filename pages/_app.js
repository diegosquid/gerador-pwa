import '../styles/globals.css'
import React from 'react'
import Head from 'next/head'
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
        router.push('/casino')
        break
      case 3:
        router.push('/recomendado')
        break
    }
  }, [page])

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
        <BottomNav {...pageProps} handlePageChange={setPage} page={page} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
