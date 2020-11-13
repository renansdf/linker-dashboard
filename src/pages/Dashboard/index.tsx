import React from 'react';
import Menu from '../../components/Menu';
import PhoneHeader from '../../components/PhoneHeader';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <PhoneHeader>dashboard</PhoneHeader>
      <h1>Dashboard</h1>
      <Menu />
    </Container>
  );
}

export default Dashboard;