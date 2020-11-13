import React from 'react';
import Menu from '../../components/Menu';
import PhoneHeader from '../../components/PhoneHeader';

import { Container } from './styles';

const Monitoramento: React.FC = () => {
  return (
    <Container>
      <PhoneHeader>monitore sua conta</PhoneHeader>
      <h1>Monitoramento</h1>
      <Menu />
    </Container>
  );
}

export default Monitoramento;