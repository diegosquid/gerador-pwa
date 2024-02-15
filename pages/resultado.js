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

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
  }
  const renderDezenas = (dezenas) => {
    return dezenas.map((dezena, index) => {
      return (
        <Typography key={index} className={styles.dezena} variant="p" component="span">{dezena}</Typography>
      )
    })
  }
  return (
    <div>
      <Head>
        <title>Ultimos Resultados</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Container maxWidth="sm" className={styles.main}>
        <Typography className={styles.title} variant="h4" component="h1">Lotofácil Concurso {props.data?.concurso}</Typography>
        <Card style={{marginTop: 30}}>
          <CardContent >
            <Typography  variant="p" component="p">Data do Sorteio: {props.data?.data}</Typography>
            <Typography  variant="p" component="p">Local do Sorteio: {props.data?.local}</Typography>
            <Typography  variant="p" component="p">Dezenas:</Typography>

            <Container maxWidth="100%" style={{display: 'flex', gap: '5px', flexWrap: 'wrap', marginTop: '20px'}}>
              {renderDezenas(props.data?.dezenas)}
            </Container>
          </CardContent>
        </Card>
        <Card style={{marginTop: 30, width:"100%"}}>
          <CardContent >
            <Typography  variant="h5" component="p">Próximo Concurso</Typography>
            <Typography  variant="p" component="p">{props.data.dataProximoConcurso}</Typography>
            <br />
            <Typography  variant="h5" component="p">Prêmio Estimado</Typography>
            <Typography  variant="p" component="p">{formatCurrency(props.data.valorEstimadoProximoConcurso)}</Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  )

};