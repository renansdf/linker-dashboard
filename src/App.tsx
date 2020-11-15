import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider } from './hooks/toast';
import Routes from './routes';
import GlobalStyles, { MobileContainer, Content, IphoneTop, IphoneRight, IphoneBottom, IphoneLeft } from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <Router>
      <MobileContainer>
        <IphoneTop />
        <IphoneRight />
        <IphoneBottom />
        <IphoneLeft />
        <Content>
          <ToastProvider>
            <Routes />
          </ToastProvider>
        </Content>
      </MobileContainer>

      <GlobalStyles />
    </Router>
  );
}

export default App;