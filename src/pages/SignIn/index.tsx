import React from 'react';
import Menu from '../../components/Menu';
import PhoneHeader from '../../components/PhoneHeader';

import { Container } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <PhoneHeader>sign in</PhoneHeader>
      <h1>tela de sign in</h1>
      <Menu />
    </Container>
  );
}

export default SignIn;