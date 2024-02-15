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

    window.open('https://go.betobet.online/visit/?bta=36421&nci=5656&afp=CLICKID&utm_campaign=SOURCE&afp1=PWA');
  };

  return (
    <div className={styles.casino}>
      <Head>
        <title>Cassino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="sm" className={styles.main}>
        <img style={{ maxWidth: "90%", marginBottom: "3rem" }} src="https://fnembrasil.org/blog/wp-content/uploads/fezbet-logo.webp" />
         <p style={{ fontSize: '20px', textAlign: "center", maxWidth: "90%" }}>Você ganhou <b  style={{background: "yellow"}}><br />R$2000,00 + 200 rodadas grátis </b> <br /> para apostar no no Cassino.</p>
        <Button onClick={() => openCassino()} variant="contained" color="primary"  style={{marginTop: '1rem', width: '18rem'}}>
          REGISTRE-SE AGORA
        </Button>

      </Container>

    </div>
  )
}