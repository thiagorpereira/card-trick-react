import styled, { keyframes, css } from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  li {
    padding: 15px 0;
    align-items: center;
    font-size: 20px;
    /*Segundo Li pra frente */
    & + li {
      border-top: 1px solid #eee;
    }
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