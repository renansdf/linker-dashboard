import React from 'react';
import PhoneHeader from '../../components/PhoneHeader';

import { Container } from './styles';
import LinkerLogo from '../../images/linker-logo-branco.png';
import { Link } from 'react-router-dom';


const SignIn: React.FC = () => {
  return (
    <Container>
      <PhoneHeader background="#316094">sign in</PhoneHeader>
      <img src={LinkerLogo} alt="linker logo" />

      <input type="text" placeholder="CPF" />
      <Link to="/dashboard">Continuar</Link>
    </Container>
  );
}

export default SignIn;