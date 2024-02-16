import React from "react"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from "@material-ui/core/Container"
import Button from '@material-ui/core/Button'

export default function Cassino () {
  const openCassino = () => {
    try {
      window.gtag('event', 'cassino', { src: window.Android ? 'app' : 'site' });
    } catch (e) {
      console.log(e)
    }

    window.open('http://trck.gdmsecure-ig.com/?a=154408&c=349419&co=202991&mt=5&s1=gerador');
  };

  return (
    <div className={styles.casino}>
      <Head>
        <title>Cassino Online: Emoção de Jogar em Casa</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name='description' content='Experimente a emoção dos cassinos no conforto de sua casa. Jogos de cassino online com segurança e diversão garantidas. Acesse e jogue já!' />
      </Head>

      <Container maxWidth="sm" className={styles.main}>
        <h1 style={{color: 'black', fontSize: 22, textTransform: "uppercase"}}>Oferta de Cassino</h1>

        <img style={{ maxWidth: "90%", marginBottom: "3rem" }} src="https://fnembrasil.org/blog/wp-content/uploads/fezbet-logo.webp" />
         <p style={{ fontSize: '20px', textAlign: "center", maxWidth: "90%" }}>Você ganhou <b  style={{background: "yellow"}}><br />R$2000,00 + 200 rodadas grátis </b> <br /> para apostar no no Cassino.</p>
        <Button onClick={() => openCassino()} variant="contained" color="primary"  style={{marginTop: '1rem', width: '18rem'}}>
          REGISTRE-SE AGORA
        </Button>

      </Container>

    </div>
  )
}