import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BackButton, Container } from './styles';
import { Link } from 'react-router-dom';
import ContainerLayout from '../../components/ContainerLayout';

const MindReading = () => {
  const history = useHistory()

  const { card } = ('his', history.location.state)

  return (
    <ContainerLayout>
      <Container>
        <h1>A sua carta é</h1>
        {card && (
          <img src={card.image} alt={card.value} />
        )}
        <Link to={'/'} style={{ textDecoration: 'none'}}>
          <BackButton>Tentar novamente</BackButton>  
        </Link>
      </Container>
    </ContainerLayout>
  );
}

export default MindReading;