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
    window.open('https://eastrk-dt.com/?a=154408&c=272519&co=202991&mt=25&s1=pwa');
    //window.open('https://eastrk-dt.com/?a=154408&c=315193&co=202991&mt=25&s1=pwa')
  };

  return (
    <div className={styles.casino}>
      <Head>
        <title>Cassino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="sm" className={styles.main}>
        <img style={{ maxWidth: "90%", marginBottom: "3rem" }} src="/mrbet.png" />
         <p style={{ fontSize: '20px', textAlign: "center", maxWidth: "90%" }}>Você ganhou <b  style={{background: "yellow"}}><br />400% do valor depositado</b> para apostar no Cassino. São 4x mais chances de ganhar.</p>
        <Button onClick={() => openCassino()} variant="contained" color="primary"  style={{marginTop: '1rem', width: '18rem'}}>
          QUERO MEU BÔNUS
        </Button>

      </Container>

    </div>
  )
}