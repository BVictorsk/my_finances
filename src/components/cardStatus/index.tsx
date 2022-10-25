import React from 'react';
import { Container } from './styles';
import happyImg from '../../assets/happy.svg'

interface ICardStatusProps {
    title: string;
    description: string;
    footerText: string;
    icon: string;
}

const CardStatus: React.FC<ICardStatusProps> = ({
    title,
    description,
    footerText,
    icon,
 }) => {
    return (    
       <Container>
            <header>
                <h1>
                    {title}
                    <img src={icon} alt={title} />
                </h1>
                <p>{description}</p>
            </header>
            <footer>{footerText}</footer>
       </Container>
    );
  }
  
  export default CardStatus;