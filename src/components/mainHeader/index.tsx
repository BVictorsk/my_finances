import React, { useMemo, useState } from 'react';
import { Container, Profile, Welcome, UserName } from './styles'
import { useTheme } from '../../hooks/themes'
import emojis from '../../utils/emojis'
import Toggle from '../toggle'

const MainHeader: React.FC = () => {
    const { toggleTheme, theme } = useTheme();

    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }

    const emoji =  useMemo(() => {
        const index = Math.floor(Math.random() * emojis.length);
        return emojis[index];
    }, [])

    return (    
        <Container>
            <Toggle 
                labelLeft="Light"
                labelRight="Dark"
                checked={darkTheme}
                onChange={handleChangeTheme}
            />

            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Brian</UserName>
            </Profile>

        </Container>
    );
  }
  
  export default MainHeader;