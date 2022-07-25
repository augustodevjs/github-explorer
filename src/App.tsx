import React from 'react';

import RoutesApp from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <RoutesApp />
      <GlobalStyle />
    </>
  )
}

export default App;