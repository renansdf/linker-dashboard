import React from 'react';
import Menu from '../../components/Menu';
import PhoneHeader from '../../components/PhoneHeader';

import { Container } from './styles';

const Tag: React.FC = () => {
  return (
    <Container>
      <PhoneHeader>tag</PhoneHeader>
      <h1>Tag</h1>
      <Menu />
    </Container>
  );
}

export default Tag;