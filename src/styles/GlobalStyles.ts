import styled, { createGlobalStyle, css } from 'styled-components';
import iphoneTop from '../images/topo.png';
import iphoneRight from '../images/direita.png';
import iphoneBottom from '../images/baixo.png';
import iphoneLeft from '../images/esquerda.png';

export default createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }

  html{
    background: rgb(48,98,146);
    background: linear-gradient(151deg, rgba(48,98,146,1) 0%, rgba(250,109,108,1) 100%);
    height: 100vh;
  }

  #root{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 98vh;
  }

  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
  }

  ::-webkit-scrollbar-track {
    background: #dadada;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }
`;

export const MobileContainer = styled.div`
  width: 90%;
  max-width: 360px;
  height: 710px;
  background: #fcfcfe;
  position: relative;
  border-radius: 40px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:flex-start;
  overflow-y: auto;
  height: 100%;
  padding-top: 75px;
  padding-bottom: 9px;
  overflow: hidden;
  position: relative;
`;

const IphoneBase = css`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  z-index: 2;
`;

export const IphoneTop = styled.image`
  ${IphoneBase}
  background-image: url(${iphoneTop});
  width: 100%;
  background-position:top;
  height: 55px;
  top: -23px;
  left: 0;
`;

export const IphoneRight = styled.image`
  ${IphoneBase}
  background-image: url(${iphoneRight});
  height: 744px;
  width: 35px;
  top: -13px;
  right: -30px;
`;

export const IphoneBottom = styled.image`
  ${IphoneBase}
  background-image: url(${iphoneBottom});
  width: 100%;
  height: 70px;
  bottom: -26px;
  left: 0;
`;

export const IphoneLeft = styled.image`
  ${IphoneBase}
  background-image: url(${iphoneLeft});
  height: 747px;
  width: 35px;
  left: -30px;
  top: -13px;
`;

