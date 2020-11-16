import React from 'react';
import PhoneHeader from '../../components/PhoneHeader';

import { Container } from './styles';
import LinkerLogo from '../../images/linker-logo-branco.png';
import { Link } from 'react-router-dom';


const SignIn: React.FC = () => {
  return (
    <Container>
      <PhoneHeader background="#316094" />
      <img src={LinkerLogo} alt="linker logo" />

      <input type="text" placeholder="CPF" />
      <Link to="/dashboard/s">Continuar</Link>
    </Container>
  );
}

export default SignIn;