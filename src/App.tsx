import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/layout';
import List from './pages/list';
import dark from './styles/themes/dark';

import { ThemeProvider } from 'styled-components';


const App: React.FC = () => {
  return (    
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <List />
      </Layout>
    </ThemeProvider>
  );
}

export default App;