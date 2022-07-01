import React from "react"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from "@material-ui/core/Container"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemIcon from "@material-ui/core/ListItemIcon"

import DeleteIcon from '@material-ui/icons/Delete';
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
        <title>Jogos Salvos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="sm" className={styles.main}>
        <h2>Jogos Salvos</h2>

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

    </div>
  )
}
