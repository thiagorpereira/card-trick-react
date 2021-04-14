import styled, { keyframes, css } from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;
  display: flex;
  flex-direction: row; //trocar no query
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

export const ContainerCards = styled.div`
  width: 1169px;
  height: 706px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 700px;

  img {
      width: 75px;
      height: 100px;
    }
  
  // descomentar no query
/*   display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 10px;  */
`;
