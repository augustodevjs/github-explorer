import React  from 'react';
import RoutesApp from './routes';

import usePersistedTheme from './hooks/usePersistedTheme';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from './styles/global'; 
import { dark, light } from './styles/themes';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedTheme<DefaultTheme>('theme' ,light);

  const toogleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <RoutesApp toogleTheme={toogleTheme}/>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App;