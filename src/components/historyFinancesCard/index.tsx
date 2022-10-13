import React from 'react'
import { Container, Tag } from './styles'

interface IHistoryFinancesCardProps {
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string;
}

const HistoryFinancesCard: React.FC<IHistoryFinancesCardProps> = ({ 
    tagColor, 
    title, 
    subtitle,
    amount
}) => {
    return (    
        <Container>
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