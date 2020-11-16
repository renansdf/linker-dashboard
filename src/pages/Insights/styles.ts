import styled from 'styled-components';
import { enterAnimation } from '../../styles/GlobalStyles';

export const Container = styled.div`
  ${enterAnimation};

  width: 100%;
  overflow-y: auto;
  padding: 20px;

  h2{
    color: #3a3a3a;
    margin-bottom: 20px;
    font-size: 24px;

    span{
      color: #FA6D6C;
    }
  }


  article + article{
    margin-top: 20px;
  }
`;

export const Post = styled.article`
  a{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    text-decoration: none;
    color: #202020;
  }

  img{
    width: 50%;
    max-width: 100%;
    border-radius: 10px;
  }

  div{
    margin-left: 5%;
    width: 45%;
    font-size: 12px;
  }

  strong{
    color: #8224e3;
    font-size: 10px;
  }

  h3{
    font-weight: 400;
  }
`;