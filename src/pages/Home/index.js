import React, { useState, useEffect } from 'react';
/* import { Link } from 'react-router-dom'; */
/* import api from '../../services/api'; */
import Container from '../../components/Container';
import { StartButton } from './styles';

const Home = () => {
/*   const [pokemons, setPokemons] = useState([])
 */
  useEffect(() => {
    console.log('start')
  }, [])

  return (
    <Container>
        <StartButton>Começar</StartButton>
    </Container>
  );
}

export default Home;