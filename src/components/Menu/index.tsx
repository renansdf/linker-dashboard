import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <Link to="/" >signin</Link>
      <Link to="/dashboard" >dashboard</Link>
      <Link to="/monitoramento" >monitoramento</Link>
      <Link to="/insights" >insights</Link>
      <Link to="/tag" >tag</Link>
    </Container>
  );
}

export default Menu;