import React from 'react';
import Aside from '../aside';
import Content from '../content';
import MainHeader from '../mainHeader';
import { Grid } from './styles'

const Layout: React.FC = () => {
    return (    
        <Grid>
            <MainHeader />
            <Aside />
            <Content />
        </Grid>
    );
  }
  
  export default Layout;