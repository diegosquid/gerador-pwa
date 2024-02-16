import React from "react"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from "@material-ui/core/Container"
import Button from '@material-ui/core/Button'
import { Typography } from "@material-ui/core"
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
    <div className={styles.casino} style={{marginBottom: '5rem'}}>
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

      <Container maxWidth="sm" className={styles.main}>
        <Typography variant="h4" component="h2" style={{color: 'black', fontSize: 22, textTransform: "uppercase"}}> Uma Experiência de Jogo Incomparável no Fezbet Cassino
        </Typography>
        <Typography variant="p" component="p" style={{color: "black", marginTop: "1rem"}}>
          O Fezbet Cassino destaca-se como uma joia no mundo dos jogos online, estabelecendo-se rapidamente como uma plataforma de topo para entusiastas de cassino de todos os níveis. Com uma impressionante variedade de jogos, que vão desde os clássicos caça-níqueis até jogos de mesa sofisticados, como poker, blackjack, e roleta, o Fezbet oferece uma experiência de jogo incomparável. Além disso, sua interface amigável e gráficos de alta qualidade asseguram uma imersão total no jogo, fazendo com que cada visita seja uma nova aventura. A dedicação do Fezbet em fornecer um ambiente de jogo seguro e justo, juntamente com seu compromisso com a excelência, solidifica sua posição como líder de mercado.
        </Typography>
        <Typography variant="h4" component="h2" style={{color: 'black', fontSize: 22, textTransform: "uppercase", marginTop: '1rem'}}>Bônus Generosos e Suporte Excepcional
        </Typography>
        <Typography variant="p" component="p" style={{color: "black", marginTop: "1rem"}}>  
          Além da vasta seleção de jogos, o Fezbet Cassino eleva a experiência do usuário com bônus generosos e promoções regulares, projetadas para aumentar as chances de ganho dos jogadores e proporcionar ainda mais emoção. A equipe de suporte ao cliente do Fezbet é outra faceta que merece destaque; disponível 24/7, ela garante que qualquer dúvida ou problema seja resolvido com rapidez e eficiência. Esta combinação de um catálogo de jogos de primeira linha, atendimento ao cliente excepcional, e um ambiente de jogo seguro e acolhedor faz do Fezbet Cassino a escolha ideal para quem busca não apenas entretenimento, mas uma experiência de jogo de qualidade superior.
        </Typography>
        <br />
      </Container>

    </div>
  )
}