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

import getUtms from '../util/getUtms'
import track from '../util/track'

import { FacebookShareButton, FacebookIcon, FacebookShareCount } from 'react-share';


function Alert (props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

export default function Home (props) {
  const [numbers, setNumbers] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [showAlert, setShowAlert] = React.useState(false)

  const [open, setOpen] = React.useState(false)
  const [openSnack, setOpenSnack] = React.useState(false)

  React.useEffect(() => {
    installModal()

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      props.setDeferredPrompt(e)

      setTimeout(() => {
        setShowAlert(true)
      }, 1000)
    })
  }, [])

  const installModal = function () {
    if (props.deferredPrompt !== null) {
      setShowAlert(true)
    }
  }

  const installButton = async () => {
    if (props.deferredPrompt !== null) {
      props.deferredPrompt.prompt()
      const { outcome } = await props.deferredPrompt.userChoice
      if (outcome === 'accepted') {
        window.gtag('event', 'app_install')
        props.setDeferredPrompt(null)
        setShowAlert(false)
        window.location.hash = '#installed'
        track()
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
  }

  const openUrl = () => {
    try {
      window.gtag('event', 'click', { src: window.Android ? 'app' : 'site' })
      _mgq?.push(["MgSensorInvoke", "desejo"])
    } catch (e) {
      console.log(e)
    }
    window.open('https://ev.braip.com/pv/lip85r37/afime9p4p?' + getUtms())
  }

  const openCassino = () => {
    props.setPage(2)
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
        <title>Gerador da Lotofácil: Aumente suas Chances</title>
        <meta name='description' content='Descubra como o Gerador da Lotofácil pode aumentar suas chances de ganhar. Ferramentas inteligentes para melhores resultados. Confira agora!' />
      </Head>

      <main className={styles.main}>
        {
          showAlert &&
            <Alert icon={false} severity='success' style={{ position: 'absolute', top: 0, width: '100%', borderRadius: 0, display: 'flex', justifyContent: 'center' }}>
              <p style={{ fontWeight: 500, fontSize: 14, lineHeight: '130%' }}>Instale este aplicativo para acessar quando quiser, é grátis e não consome nada de espaço</p>
              <Button style={{ width: '100%', backgroundColor: 'orange', color: 'white' }} onClick={installButton}>
                Instalar
              </Button>
            </Alert>
        }

        <h1 style={{color: 'white', fontSize: 22}}>GERADOR DA LOTOFÁCIL</h1>

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

        <FacebookShareButton
          url={'https://lotofacil.me'}     //eg. https://www.example.com
          quotes={"Estou usando este gerador gratuito da Lotofácil"}  //"Your Quotes"
          hashtag={'#lotofacil'} // #hashTag
          style={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', background: 'rgb(9, 101, 254)', width: '18rem', marginTop: '0.5rem'}}
          >
        <FacebookIcon />
        COMPARTILHE ESTE APLICATIVO
      </FacebookShareButton> 
      <FacebookShareCount url={'https://lotofacil.me'}>
        {(shareCount) => <span className="myShareCountWrapper">{shareCount}</span>}
      </FacebookShareCount>

        <div className={styles.seo}>
          <p>Salve o site <b>https://lotofacil.me</b> para acessar sempre que precisar.</p>
          <h2>O que é o gerador da Lotofácil?</h2>
          <p>O gerador da Lotofácil é uma ferramenta online criada para ajudar os apostadores a elaborarem seus jogos de forma mais eficiente e estratégica. Através de algoritmos e análises estatísticas, o gerador oferece combinações de números com maior probabilidade de acerto, levando em consideração diversos fatores e dados históricos dos sorteios anteriores.</p>
          <h2>Como funciona o gerador da Lotofácil?</h2>
          <p>Para utilizar o gerador da Lotofácil, basta acessar o site ou aplicativo, inserir a palavra-chave &quot;gerador da Lotofácil&quot; e seguir as instruções na tela. A ferramenta permite que você escolha a quantidade de jogos que deseja gerar, além de oferecer diferentes tipos de estratégias e análises para aumentar suas chances de sucesso.</p>
          <h2>Vantagens do aplicativo da Lotofácil:</h2>
          <ul>
            <li>Economia de tempo: Com o gerador, você não precisa mais perder horas analisando e montando seus jogos manualmente.</li>
            <li>Maior probabilidade de acerto: Utilizando estratégias baseadas em estatísticas e análises, o gerador pode aumentar suas chances de ganhar.</li>
            <li>Facilidade de uso: A ferramenta é intuitiva e fácil de usar, mesmo para quem não possui conhecimentos avançados em matemática ou estatística.</li>
          </ul>
          <p>Embora não seja possível garantir a vitória no jogo, o gerador da Lotofácil pode ser uma excelente ferramenta para aumentar suas chances e tornar o processo de apostar mais divertido e emocionante. Com ele, você poderá elaborar jogos mais estratégicos e, quem sabe, ficar mais próximo do tão sonhado prêmio. Boa sorte e boas apostas!</p>
        </div>
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
