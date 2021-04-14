import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px;

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #FFFF;
  }

  img {
    margin-top: 30px;
    width: 100px;
    height: 139px
  }
`;

export const BackButton = styled.button`
  margin-top: 78px;
  text-decoration: none;
  border: 1px solid #FFFFFF;
  background: #343B68;
  box-sizing: border-box;
  border-radius: 8px;
  width: 338px;
  height: 66px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
`;
