import React from 'react';
import { Container, TitleContainer, Controllers } from './styles'

const Header: React.FC = () => {
    return (    
        <Container>
            <TitleContainer>
                <h2>Titulo</h2>
            </TitleContainer>
            <Controllers>
                <button>teste</button>
                <button>teste</button>
            </Controllers>
        </Container>
    );
  }
  
  export default Header;