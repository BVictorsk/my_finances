import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import dark from './styles/themes/dark';
import Switch from './routes'

import { ThemeProvider } from 'styled-components';


const App: React.FC = () => {
  return (    
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Switch/>
    </ThemeProvider>
  );
}

export default App;