import React from 'react';
import Menu from '../../components/Menu';
import PhoneHeader from '../../components/PhoneHeader';

import { Container } from './styles';

const Insights: React.FC = () => {
  return (
    <Container>
      <PhoneHeader>insights</PhoneHeader>
      <h1>Insights</h1>
      <Menu />
    </Container>
  );
}

export default Insights;