import React,  { useState, useEffect } from 'react';
import api from '../../services/api';
import Container from '../../components/Container';
import { List } from './styles';

/* 
import { Container } from './styles'; */

function Game() {
  const [deckId, setDeckId] = useState([])
  const [deck21, setDeck21] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getDeck = async () => {
      setLoading(true)
      const resp = await api.get('/deck/new/shuffle/?deck_count=1')
      const {deck_id} = resp.data
      await api.get(`/deck/${deck_id}/draw/?count=21`).then(response => {
        setDeck21(response.data.cards)
      })
    }
    getDeck()
    setLoading(false)
  }, [])

  console.log('cards', deckId)
  console.log('deck21', deck21)
  return (
   <Container> 
     <div style={{display: 'flex', flexDirection: 'column'}}>
      <List>
          {deck21 && deck21.slice(0,7).map(card => (
            <li key={card.value}>
              {card.image && (
                <img src={card.image} alt={card.value} />
              )}
            </li>
          ))}
        </List>
        <List>
          {deck21 && deck21.slice(7,14).map(card => (
            <li key={card.value}>
              {card.image && (
                <img src={card.image} alt={card.value} />
              )}
            </li>
          ))}
        </List>
         <List>
          {deck21 && deck21.slice(14,21).map(card => (
            <li key={card.value}>
              {card.image && (
                <img src={card.image} alt={card.value} />
              )}
            </li>
          ))}
        </List>  
     </div>
    </Container> 

  );
}

export default Game;