import React from "react"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from "@material-ui/core/Container"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemIcon from "@material-ui/core/ListItemIcon"

import DeleteIcon from '@material-ui/icons/Delete';
import { Typography } from "@material-ui/core"
export default function Salvos() {

  const [games,setGames] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    const obj = localStorage.getItem("games") ? JSON.parse(localStorage.getItem("games")) : []

    if(obj.length != games.length){
      setGames(obj)
    }
  })
  
  const handleDelete = function(index){
    games.splice(index,1)
    //setGames(games)
    localStorage.setItem("games", JSON.stringify(games))

    setLoading(true)

    setTimeout(function(){
      setLoading(false)
    },1000)
  }

  console.log(games)

  return (
    <div className={styles.container}>
      <Head>
        <title>Lotofácil: Acesso aos Jogos Salvos e Dicas</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name='description' content='Acesse facilmente seus jogos salvos da Lotofácil e obtenha dicas valiosas para otimizar suas apostas. Tudo o que você precisa em um só lugar!' />
      </Head>

      <Container maxWidth="sm" className={styles.main}>
        <h1 style={{color: 'white', fontSize: 22, textTransform: "uppercase"}}>Jogos Salvos da Lotofácil</h1>

        { games.length == 0 && 
          <p style={{color: "white"}}>Nenhum jogo salvo :( </p>
        }

        { games.length >0 &&
        <List className={styles.list}>

          {games.map((item,index) => {

            let games = "";

            item.numbers.forEach(number => {
              if(games != ""){
                games+=" "
              }
              games+=number;
            })
            return (
              <ListItem key={item.name}>
                
                <ListItemText primary={item.name} secondary={games}/>
                <ListItemIcon className={styles.listicon} onClick={() => handleDelete(index)}>
                  <DeleteIcon />
                </ListItemIcon>
              </ListItem>
            )
          })
          }
        </List>
        }
      </Container>

      <Container maxWidth="sm" className={styles.main}>
        <Typography variant="h4" component="h2" style={{color: 'white', fontSize: 22, textTransform: "uppercase"}}>Acompanhe Seus Jogos com Facilidade
        </Typography>
        <Typography variant="p" component="p" style={{color: "white", marginTop: "1rem"}}>
          Manter um registro dos seus jogos salvos na Lotofácil é essencial para uma estratégia de jogo eficaz e para acompanhar de perto os resultados da Lotofácil. Em nossa seção de Jogos Salvos, você pode facilmente consultar as apostas que realizou, verificar quais números foram sorteados e comparar com os resultados da Lotofácil. Essa funcionalidade foi pensada para jogadores que buscam maximizar suas chances de ganhar, oferecendo uma maneira organizada de gerenciar suas apostas e acompanhar os resultados de forma atualizada.
        </Typography>
        <Typography variant="h4" component="h2" style={{color: 'white', fontSize: 22, textTransform: "uppercase",  marginTop: "1rem"}}>Siga os Resultados da Lotofácil e Aumente suas Chances
        </Typography>
        <Typography variant="p" component="p" style={{color: "white", marginTop: "1rem"}}>
        Encorajamos nossos usuários a repetir os jogos que acreditam ter o maior potencial, baseando-se na análise dos resultados da Lotofácil. Essa prática, quando feita de maneira informada e estratégica, pode ser a chave para se aproximar do grande prêmio. Ao revisitar e ajustar seus jogos salvos com base nos resultados atualizados, você desenvolve uma compreensão mais profunda sobre quais combinações de números têm maiores chances de serem sorteadas. Este método não apenas otimiza suas apostas, mas também torna o processo de participação mais emocionante e fundamentado em uma estratégia sólida.
        </Typography>
      </Container>

    </div>
  )
}
