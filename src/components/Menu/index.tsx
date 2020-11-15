import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, MenuIcon, MenuContainer } from './styles';

interface IMenuProps {
  menuBarColor?: string;
}

const Menu: React.FC<IMenuProps> = ({ menuBarColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <MenuIcon onClick={() => setIsOpen(!isOpen)}><FiMenu size={30} color={menuBarColor} /></MenuIcon>
      <MenuContainer open={isOpen}>
        <Link to="/" >signin</Link>
        <Link to="/dashboard" >início</Link>
        <Link to="/monitoramento" >monitoramento</Link>
        <Link to="/insights" >dicas</Link>
        <Link to="/tag" >tag</Link>
      </MenuContainer>
    </Container>
  );
}

export default Menu;