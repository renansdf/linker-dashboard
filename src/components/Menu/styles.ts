import styled, { css } from 'styled-components';

interface IMenuProps {
  open: boolean;
}

export const Container = styled.div`
  position: absolute;
  left: 20px;
  bottom: 3px;
`;

export const MenuIcon = styled.button`
  border: none;
  background: none;
  outline: none;
`;

export const MenuContainer = styled.nav<IMenuProps>`
  position: absolute;
  left: -340px;
  width: 300px;
  height: 630px;
  background: #316094;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 40px 0 40px 30px;
  z-index: 11;

  transition: left .4s;

  a{
    color: #fff;
    text-decoration: none;
    height: auto;
    font-weight: 700;
    font-size: 20px;
    background: none!important;
    box-shadow: none;
    min-height: 0!important;
    padding: 0!important;
  }

  a + a{
    margin-top: 10px;
  }

  ${props => props.open && css`
    left: -20px;
  `}
`;