import styled from 'styled-components';

interface IContainerProps {
  backgroundColor: string;
  fontColor: string;
}

export const Container = styled.div<IContainerProps>`
  color: ${props => props.fontColor};
  background: ${props => props.backgroundColor};

  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: auto;
  left: 0;
  height: 75px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  padding: 7px 29px;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;

  svg{
    margin-left: 4px;
  }

  h1{
    position: absolute;
    bottom: 10px;
    left: 50%;
    letter-spacing: 0px;
    transform: translateX(-50%);

    font-size: 15px;
  }
`;