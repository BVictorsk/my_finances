import React from 'react';
import { Container } from './styles';

interface ICardStatusProps {
    title: string;
    description: string;
    footerText: string;
}

const CardStatus: React.FC<ICardStatusProps> = ({
    title,
    description,
    footerText,
 }) => {
    return (    
       <Container>
            <header>
                <h1>
                    {title}
                </h1>
                <p>{description}</p>
            </header>
            <footer>{footerText}</footer>
       </Container>
    );
  }
  
  export default CardStatus;