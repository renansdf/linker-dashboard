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
        <Link to="/dashboard/tag" >Início</Link>
        <Link to="/tag" >Categorizar</Link>
        <Link to="/monitoramento" >Monitoramento</Link>
        <Link to="/insights" >Dicas</Link>
        <Link to="/" >Log Out</Link>
      </MenuContainer>
    </Container>
  );
}

export default Menu;