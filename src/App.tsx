import React from 'react';
import GlobalStyle from './global';
import Routes from './routes';
import { IntlProvider } from 'rsuite';
import pt_BR from 'rsuite/lib/IntlProvider/locales/pt_BR';
import NavBar from './components/NavBar';

function App() {
  return (
    <IntlProvider locale={pt_BR}>
      <Routes /> 
      <GlobalStyle />
    </IntlProvider>
  );
}

export default App;
