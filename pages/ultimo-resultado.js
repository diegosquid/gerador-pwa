import Head from 'next/head'
import styles from '../styles/Resultados.module.css'
import Container from "@material-ui/core/Container"
import { Card, CardContent }  from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export const getServerSideProps = (async () => {
  // Fetch data from external API
  const res = await fetch('https://loteriascaixa-api.herokuapp.com/api/lotofacil/latest')

  try {
    const data = await res.json()
    console.log(data)
    return { props: { data } }
  } catch(error) {
    return { props: { data: {} } }
  }
})

export default function UltimosResultados (props) {

  return (
    <div>
      <Head>
        <title>Ultimo Resultado</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Container maxWidth="sm" className={styles.main}>
        <Typography className={styles.title} variant="h4" component="h1">Lotofácil Concurso {props.data?.concurso}</Typography>
        <Card>
          <CardContent>
            <Typography  variant="p" component="p">Me salva</Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  )

};