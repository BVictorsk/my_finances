import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import dark from './styles/themes/dark';

import { useTheme } from './hooks/themes'

import Switch from './routes'

import { ThemeProvider } from 'styled-components';


const App: React.FC = () => {
  const {theme} = useTheme();
  return (    
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Switch/>
    </ThemeProvider>
  );
}

export default App;