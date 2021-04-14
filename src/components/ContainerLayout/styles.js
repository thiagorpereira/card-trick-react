import styled from 'styled-components';

export const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
`;

export const TitleGame = styled.h1`   
  font-size: 48px;
  line-height: 63px;
  color: #FFFF;
  font-family: 'Andada SC';
  margin-top: 14px;
`;

export const RectangleLarge = styled.div`
/*   max-width: 700px; */
  background: linear-gradient(180deg, rgba(54, 59, 103, 0.9) 0%, rgba(51, 57, 101, 0.9) 100%);
  margin: 50px auto;
  padding: 30px;
  border-radius: 512px;
  width: 1268px;
  height: 766px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    width: 600px
  } 
`;

export const RectangleMedium = styled.div`
  background: linear-gradient(180deg, rgba(54, 59, 103, 0.9) 0%, rgba(51, 57, 101, 0.9) 100%);
  margin: 80px auto;
  width: 1169px;
  height: 706px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 512px;
  @media (max-width: 600px) {
    width: 600px
  } 
`;

export const RectangleSmall = styled.div`
  background: linear-gradient(180deg, rgba(54, 59, 103, 0.9) 0%, rgba(51, 57, 101, 0.9) 100%);
  width: 898px;
  height: 543px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.15);
  box-sizing: border-box;
  border-radius: 512px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    width: 600px
  } 
`;
export const RectangleSmaller = styled.div`
  background: linear-gradient(180deg, rgba(54, 59, 103, 0.9) 0%, rgba(51, 57, 101, 0.9) 100%);
  width: 870px;
  height: 526px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.15);
  box-sizing: border-box;
  border-radius: 512px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    width: 600px
  } 
`;



