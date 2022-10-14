import React from 'react';
import { Container, TitleContainer, Controllers } from './styles'

//header interface content
interface IHeader {
    title: string;
    children: React.ReactNode;
}

const Header: React.FC<IHeader> = ({title, children}) => {

    return (    
        <Container>
            <TitleContainer>
                <h2>{title}</h2>
            </TitleContainer>
            <Controllers>
                <Controllers>
                    {children}
                </Controllers>
            </Controllers>
        </Container>
    );
  }
  
  export default Header;