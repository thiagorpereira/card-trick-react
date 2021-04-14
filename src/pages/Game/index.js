import React,  { useState, useEffect } from 'react';
import api from '../../services/api';
import Container from '../../components/Container';
import { List, ContainerCards } from './styles';

/* 
import { Container } from './styles'; */

function Game() {
  const [deck21, setDeck21] = useState([])
  const [loading, setLoading] = useState(false)
  const [round, setRound] = useState(1)

  useEffect(() => {
    const getDeck = async () => {
      setLoading(true)
      const resp = await api.get('/deck/new/shuffle/?deck_count=1')
      const {deck_id} = resp.data
      console.log("buscou dadosss!!")
      await api.get(`/deck/${deck_id}/draw/?count=21`).then(response => {
        setDeck21(response.data.cards)
      })
    }
    getDeck()
    setLoading(false)
  }, [])

  const setStackInMiddle = (n) => {

    setRound(round + 1)

    const stack1 = deck21.slice(0,7)
    const stack2 = deck21.slice(7,14)
    const stack3 = deck21.slice(14,21)

    setDeck21([])

    var stackFinal = []

    if (n === 1) {
      stackFinal = stack2.concat(stack1).concat(stack3)
    }
    if (n === 2) {
      stackFinal = stack1.concat(stack2).concat(stack3)
    }
    if (n === 3) {
      stackFinal = stack1.concat(stack3).concat(stack2)
    }

/*     var arrayReverse = [...stackFinal].map((item, indice, array) => {
      return array[array.length - indice - 1];
    });
 */
    console.log('ori',stackFinal)

  /*   console.log('rev', [...stackFinal].reverse()) */
  /*   setTimeout(() => {  setDeck21([...stackFinal].reverse()) }, 2000); */
/*     setTimeout(() => {  setDeck21(stackFinal)}, 2000); */
   if (round !== 3) {
      console.log('fooi')
      const stack1 = []
      const stack2 = []
      const stack3 = []
/*       const var21 = deck21;
      console.log('before', var21) */
/*       setTimeout(() => {  setDeck21([]) }, 2000);  */
      for (var i = 3; i < stackFinal.length + 1 ; i = i + 3) {
        console.log('i', i)
        // primeira i = 3
        stack1.push(stackFinal[i-3]) // i -3
        stack2.push(stackFinal[i-2]) // i -2
        stack3.push(stackFinal[i-1]) // i -1
        console.log(stackFinal[i-3]) // i -3
        console.log(stackFinal[i-2]) // i -2
        console.log(stackFinal[i-1]) // i -1
  /*       // segunda i = 6
        stack1.push(deck21[3])
        stack2.push(deck21[4])
        stack3.push(deck21[5]) // i -1 */ 
      }
  
      console.log('stack1', stack1)
      console.log('stack2', stack2)
      console.log('stack3', stack3)
      
  
      const stackFinal2 = stack1.concat(stack2).concat(stack3)
      setTimeout(() => {  setDeck21(stackFinal2) }, 2000);



      
/*       distributeCards()  */
    } else {
      setTimeout(() => {  setDeck21(stackFinal)}, 2000);
    }
/*     setDeck21(stackFinal) */
  }

  const distributeCards = () => {
    var stackFinal = []
    const stack1 = []
    const stack2 = []
    const stack3 = []
    const var21 = deck21;
    console.log('before', var21)
    setTimeout(() => {  setDeck21([]) }, 2000);
    for (var i = 3; i < var21.length + 1 ; i = i + 3) {
      console.log('i', i)
      // primeira i = 3
      stack1.push(deck21[i-3]) // i -3
      stack2.push(deck21[i-2]) // i -2
      stack3.push(deck21[i-1]) // i -1
      console.log(deck21[i-3]) // i -3
      console.log(deck21[i-2]) // i -2
      console.log(deck21[i-1]) // i -1
/*       // segunda i = 6
      stack1.push(deck21[3])
      stack2.push(deck21[4])
      stack3.push(deck21[5]) // i -1 */ 
    }

    console.log('stack1', stack1)
    console.log('stack2', stack2)
    console.log('stack3', stack3)
    

    var stackFinal = stack1.concat(stack2).concat(stack3)
    console.log('stackFinal', stackFinal)
    setTimeout(() => {  setDeck21(stackFinal) }, 2000);
  }

  console.log('deck21', deck21)
  return (
   <Container> 
     <ContainerCards>
       <h1>{round}</h1>
        <List onClick={() => setStackInMiddle(1)}>
          {deck21 && deck21.slice(0,7).map(card => (
            <li key={card.value}>
              {card.image && (
                <img src={card.image} alt={card.value} />
              )}
            </li>
          ))}
        </List>
        <List onClick={() => setStackInMiddle(2)}>
          {deck21 && deck21.slice(7,14).map(card => (
            <li key={card.value}>
              {card.image && (
                <img src={card.image} alt={card.value} />
              )}
            </li>
          ))}
        </List>
         <List onClick={() => setStackInMiddle(3)}>
          {deck21 && deck21.slice(14,21).map(card => (
            <li key={card.value}>
              {card.image && (
                <img src={card.image} alt={card.value} />
              )}
            </li>
          ))}
        </List> 
     </ContainerCards> 
    </Container> 

  );
}

export default Game;