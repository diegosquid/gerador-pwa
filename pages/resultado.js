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
        <Typography className={styles.title} variant="h4" component="h1">Resultado da Lotofácil Concurso {props.data?.concurso}</Typography>
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
        <Typography style={{marginTop: 20, marginBottom: 20, color: 'black', textAlign: 'left'}} variant="h4" component="h2">Como Apostar na Lotofácil</Typography>
        <Typography variant="p" component="p">Apostar na Lotofácil é simples e acessível, tornando-a uma das loterias favoritas entre os brasileiros. Para fazer sua aposta, você pode escolher entre 15 a 20 números, dentre os 25 disponíveis no volante. A aposta mínima, de 15 números, tem um custo bastante acessível, e as chances de acertar o prêmio principal são consideravelmente maiores comparadas a outras loterias. As apostas podem ser feitas em casas lotéricas espalhadas por todo o país ou por meio de plataformas online oficiais de loterias, que oferecem a mesma segurança e comodidade de uma aposta presencial. Além do prêmio principal para quem acerta os 15 números, há premiações para quem acerta de 11 a 14 números, aumentando assim as chances de ganhar algum prêmio. Lembre-se de conferir o resultado da Lotofácil após cada sorteio para saber se você foi um dos felizardos. Apostar na Lotofácil pode ser tanto uma diversão quanto uma chance de ganhar prêmios significativos, sempre jogando com responsabilidade e moderação.</Typography>
        <Typography style={{marginTop: 20, marginBottom: 20, color: 'black', textAlign: 'left'}} variant="h4" component="h2">Acompanhe o Resultado da Lotofácil e Planeje Suas Próximas Apostas</Typography>
        <Typography variant="p" component="p">  Acompanhar o resultado da Lotofácil é um momento crucial para milhares de apostadores em todo o Brasil. Esses resultados são divulgados após cada sorteio, que ocorre regularmente às segundas, quartas e sextas-feiras. Verificar o resultado é simples: pode ser feito através do site oficial de loterias da Caixa Econômica Federal, em aplicativos móveis dedicados ou em sites parceiros confiáveis, que oferecem não apenas os números sorteados, mas também análises estatísticas e ferramentas de simulação. Para quem sonha em ganhar na Lotofácil, estar atento ao resultado da Lotofácil não apenas proporciona a emoção de verificar se seus números foram sorteados, mas também é essencial para planejar estratégias futuras de apostas, analisando quais números são sorteados com mais frequência ou buscando padrões que possam aumentar as chances de vitórias futuras.
      </Typography>
       
        

      </Container>
      <br />
        <br />
        <br />
    </div>
  )

};