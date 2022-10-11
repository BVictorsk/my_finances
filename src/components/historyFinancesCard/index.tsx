import React from 'react'
import { Container, Tag } from './styles'

interface IHistoryFinancesCardProps {
    cardColor: string;
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string;
}

const HistoryFinancesCard: React.FC<IHistoryFinancesCardProps> = ({ 
    cardColor, 
    tagColor, 
    title, 
    subtitle,
    amount
}) => {
    return (    
        <Container color={cardColor}>
            <Tag color={tagColor} />
            <div>
                <span>{title}</span>
                <small>{subtitle}</small>
            </div>
            <div>{amount}</div>
        </Container>
    );
}

export default HistoryFinancesCard;