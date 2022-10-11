import React from 'react'
import { Container, Content } from './styles'
import Header from '../../components/header'
import SelectInput from '../../components/selectInput';
import HistoryFinancesCard from '../../components/historyFinancesCard';

const List: React.FC = () => {
    const options = [
        {value: 'teste', label: 'teste'},
        {value: 'teste1', label: 'teste1'}
    ]
    
    return (    
        <Container>
            <Header title="List">
                <SelectInput options={options} />
            </Header>

            <Content>
                <HistoryFinancesCard 
                cardColor="#110e36"
                tagColor="#e44c4f"
                title="Conta"
                subtitle="10/10/2022"
                amount="R$ 130,00"
                />
                <HistoryFinancesCard 
                cardColor="#110e36"
                tagColor="#e44c4f"
                title="Conta"
                subtitle="10/10/2022"
                amount="R$ 130,00"
                />
                <HistoryFinancesCard 
                cardColor="#110e36"
                tagColor="#e44c4f"
                title="Conta"
                subtitle="10/10/2022"
                amount="R$ 130,00"
                />
                <HistoryFinancesCard 
                cardColor="#110e36"
                tagColor="#e44c4f"
                title="Conta"
                subtitle="10/10/2022"
                amount="R$ 130,00"
                />
                <HistoryFinancesCard 
                cardColor="#110e36"
                tagColor="#e44c4f"
                title="Conta"
                subtitle="10/10/2022"
                amount="R$ 130,00"
                />
                <HistoryFinancesCard 
                cardColor="#110e36"
                tagColor="#e44c4f"
                title="Conta"
                subtitle="10/10/2022"
                amount="R$ 130,00"
                />
                <HistoryFinancesCard 
                cardColor="#110e36"
                tagColor="#e44c4f"
                title="Conta"
                subtitle="10/10/2022"
                amount="R$ 130,00"
                />
                <HistoryFinancesCard 
                cardColor="#110e36"
                tagColor="#e44c4f"
                title="Conta"
                subtitle="10/10/2022"
                amount="R$ 130,00"
                />
            </Content>

        </Container>
    );
}

export default List;