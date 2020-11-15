import styled from 'styled-components';

import loginBg from '../../images/login-bg.png';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: url(${loginBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0 20px 40px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  img{
    position: absolute;
    top: 40%;
    width: 50%;
  }

  input{
    width: 100%;
    background: none;
    border: none;
    border-bottom: 2px solid #fff;
    padding-bottom: 3px;
    font-size: 16px;
    letter-spacing: 1px;
    color: #fff;

    &::placeholder{
      color: #fff;
    }

    &:focus{
      outline: none;
    }
  }

  a{
    background: rgb(255 98 97 / 72%);
    color: #fff;
    text-decoration: none;
    padding: 12px 10px;
    border-radius: 30px;
    font-size: 14px;
    margin-top: 20px;
    width: 100%;
    text-align: center;
    font-weight: bold;
    letter-spacing: 1px;

  }
`;