import React from 'react';
import { Container } from './styles';
import { ToastMessage } from '../../hooks/toast';
import Toast from './Toast';
import { useTransition } from 'react-spring';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const animatedMessages = useTransition(
    messages,
    messages => messages.id,
    {
      from: { bottom: '-120px' },
      enter: { bottom: '0px' },
      leave: { bottom: '-120px' },
    }
  );

  return (
    <Container>
      {animatedMessages && animatedMessages.map(({ item, key, props }) => (
        <Toast key={key} message={item} style={props} />
      ))}
    </Container>
  );
}

export default ToastContainer;
