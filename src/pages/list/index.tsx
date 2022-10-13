import React from 'react'
import { Container, Content, Filters } from './styles'
import Header from '../../components/header'
import SelectInput from '../../components/selectInput';
import HistoryFinancesCard from '../../components/historyFinancesCard';

const List: React.FC = () => {
    const months = [
        {value: 1 , label: 'Janeiro'},
        {value: 2 , label: 'Fevereiro'},
        {value: 3 , label: 'Março'}
    ]

    const years = [
        {value: 2022 , label: 2022},
        {value: 2021 , label: 2021},
        {value: 2020 , label: 2020},
    ]
    
    return (    
        <Container>
            <Header title="List">
                <SelectInput options={months} />
                <SelectInput options={years} />
            </Header>

            <Filters>
                <button 
                type="button"
                className="tag-filter tag-filter-recurrent"
                >Recorrentes</button>
                <button 
                type="button"
                className="tag-filter tag-filter-eventual"
                >Eventuais</button>
            </Filters>

            <Content>
                <HistoryFinancesCard 
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