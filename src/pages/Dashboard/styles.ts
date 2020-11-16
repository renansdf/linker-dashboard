import styled from 'styled-components';
import { enterAnimation } from '../../styles/GlobalStyles';

export const Container = styled.div`
  ${enterAnimation};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  a{
    width: 100%;
    min-height: 110px;
    border-radius: 20px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 20px;

    text-decoration: none;
    background: #FA6D6C;
    color: #fff;
  }

  a + a{
    margin-top: 10px;
  }

  a.bgBlue{
    background: #306292;
  }

  a.bgGrad{
    background: rgb(48,98,146);
    background: linear-gradient(90deg, rgba(48,98,146,1) 0%, rgba(250,109,108,1) 100%);
  }

  div{
    max-width: 70%;
    align-self: flex-start;
  }

  p{
    font-size: 13px;
  }
`;

export const NovaTransacao = styled.div`
  width: 90%;
  background: #03e85f;
  max-width: 100%!important;
  align-self: center!important;
  padding: 3px 10px;
  color: #306292;
  font-weight: 700;
  margin-bottom: 10px;
  border-radius: 0 0 10px 10px;
`;