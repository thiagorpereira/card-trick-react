import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ContainerLayout from '../../components/ContainerLayout';
import { StartButton } from './styles';

const Home = () => {

  return (
    <ContainerLayout>
         <Link to={'/game'} style={{ textDecoration: 'none'}}>
          <StartButton>Começar</StartButton>
        </Link>
    </ContainerLayout>
  );
}

export default Home;