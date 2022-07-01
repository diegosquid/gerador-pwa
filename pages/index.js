import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'

import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'

import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'

import MuiAlert from '@material-ui/lab/Alert'
import Snackbar from '@material-ui/core/Snackbar'

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

export default function Home (props) {
  const [numbers, setNumbers] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [showAlert, setShowAlert] = React.useState(false)

  const [open, setOpen] = React.useState(false)
  const [openSnack, setOpenSnack] = React.useState(false)
  const [deferredPrompt, setDeferredPrompt] = React.useState(null)

  React.useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
    })
  }, [])

  const installModal = function () {
    if (deferredPrompt !== null) {
      setShowAlert(true)
    }
  }

  const installButton = async () => {
    if (deferredPrompt !== null) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === 'accepted') {
        window.gtag('event', 'app_install', 0)
        setDeferredPrompt(null)
      }
    }
  }

  const guess = function () {
    setLoading(true)
    setNumbers([])
    const numbers = []
    const qty = 25
    const dezenas = 15
    for (let i = 0; i < dezenas; null) {
      while (numbers.length < dezenas) {
        let number = Math.floor(Math.random() * qty) + 1
        number = ('0' + number).slice(-2)
        if (numbers.indexOf(number) < 0) {
          numbers.push(number)
          i++
        }
      }
    }

    numbers.sort()

    setTimeout(() => {
      setNumbers(numbers)
      setLoading(false)
      installModal()
    }, 1500)
  }

  const openUrl = () => {
    try {
      window.gtag('event', 'click', { src: window.Android ? 'app' : 'site' })
    } catch (e) {
      console.log(e)
    }
    window.open('https://ev.braip.com/ref?pv=prolmvkk&af=afime9p4p')
  }

  const openCassino = () => {
    props.openPage(2)
  }

  const save = () => {
    if (!numbers.length) { return }
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSnackClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpenSnack(false)
  }

  const handleSave = (name) => {
    const games = window.localStorage.getItem('games') ? JSON.parse(window.localStorage.getItem('games')) : []

    games.push({
      name,
      numbers
    })

    window.localStorage.setItem('games', JSON.stringify(games))
    setOpen(false)
    setOpenSnack(true)

    setTimeout(() => {
      setOpenSnack(false)
    }, 2000)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>GERADOR DA LOTOFÁCIL</title>
      </Head>

      <main className={styles.main}>
        {
          showAlert &&
            <Alert icon={false} severity='success' onClose={handleClose} style={{ position: 'absolute', top: 0, width: '100%', borderRadius: 0 }}>
              <p>Instale este aplicativo no seu celular, é grátis e não consome quase nada de espaço ;)</p>
              <Button onClick={installButton}>
                Instalar
              </Button>
            </Alert>
        }

        <h2>GERADOR DA LOTOFÁCIL</h2>

        <SaveDialog open={open} handleClose={handleClose} handleSave={handleSave}/>

        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={openSnack}
          autoHideDuration={3000}
          onClose={handleClose}
        >

          <Alert onClose={handleSnackClose} severity='success'>
            Salvo com sucesso!
          </Alert>

        </Snackbar>

        <ul className={styles.result}>

          {loading && <CircularProgress color='inherit' />}

          {!loading && numbers.map(number => {
            return <li key={'number' + number}>{number}</li>
          })}
        </ul>
        <Button onClick={() => guess()} variant='contained' color='primary' style={{ marginTop: '5rem', width: '18rem' }}>
          Gerar Jogo
        </Button>
        <Button onClick={() => save()} style={{ marginTop: '0.5rem', width: '18rem' }} variant='contained' color='primary'>
          Salvar
        </Button>

        <Button onClick={openUrl} style={{ marginTop: '0.5rem', width: '18rem' }} variant='contained' color='secondary'>
          Sistema Vip da Lotofácil
        </Button>

        <Button onClick={openCassino} style={{ marginTop: '0.5rem', width: '18rem', background: 'black' }} variant='contained' color='secondary'>
          Cassino Online
        </Button>
      </main>
    </div>
  )
}

function SaveDialog ({ handleClose, handleSave, open }) {
  const [error, setError] = React.useState(false)
  const [name, setName] = React.useState('')

  const save = () => {
    if (!name) {
      setError(true)
      return
    }

    setError(false)

    handleSave(name)
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby='simple-dialog-title'
      open={open}
      maxWidth='md'
    >
      <DialogTitle id='simple-dialog-title'>Nome do jogo</DialogTitle>
      <DialogContent>
        <TextField style={{ width: '15rem' }} onChange={(e) => setName(e.target.value)} error={error} id='standard-basic' label='Digite o nome do jogo' />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          Cancelar
        </Button>
        <Button onClick={save} color='primary'>
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
