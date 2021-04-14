import styled, { keyframes, css } from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;
  display: flex;
  flex-direction: row; //trocar no query
   @media (max-width: 600px) { 
      flex-direction: column;
  }  
  background: rgba(196, 196, 196, 0.4);
  border-radius: 27px;
  padding: 10px;
  &:hover {
    background: gray;
    cursor: pointer;
  }
  li {
    padding: 5px;
    align-items: center;
    font-size: 20px;
    /*Segundo Li pra frente */
/*     & + li {
      border-top: 1px solid #eee;
    } */
    a {
      color: #003459;
      text-decoration: none;
    }

    img {
      width: 75px;
      height: 100px;
    }
  }
  `;

export const ContainerCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1px;  
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 600px) {
      flex-direction: column;
    } 
    @media (max-width: 600px) {
      flex-direction: row;
    }  

  img {
      width: 75px;
      height: 100px;
    }

`;


