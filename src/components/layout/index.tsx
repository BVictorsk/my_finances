import React from 'react';
import Aside from '../aside';
import Content from '../content';
import MainHeader from '../mainHeader';
import { Grid } from './styles'

interface ChildrenProps {
	children: React.ReactNode;
}

const Layout: React.FC<ChildrenProps> = ({ children }) => (
    <Grid>
        <MainHeader />
        <Aside />
        <Content>
            { children }
        </Content>
    </Grid>
);


export default Layout;