import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Container from '../../components/Container';
import { StartButton } from './styles';

const Home = () => {

  return (
    <Container>
         <Link to={'/game'}>
        
        <StartButton>Começar</StartButton>
        </Link>
    </Container>
  );
}

export default Home;