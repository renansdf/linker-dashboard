import styled from 'styled-components';

export const Container = styled.div`
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