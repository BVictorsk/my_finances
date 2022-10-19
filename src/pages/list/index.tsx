import React, { useMemo, useState, useEffect } from 'react'
import { Container, Content, Filters } from './styles'
import {useParams} from 'react-router-dom';
import Header from '../../components/header'
import SelectInput from '../../components/selectInput';
import HistoryFinancesCard from '../../components/historyFinancesCard';
import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'

interface IData {
    id: string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dataFormatted: string;
    tagColor: string;
}

const List: React.FC = () => {
    const [data, setData] = useState<IData[]>([]);

    const { type } = useParams();

    const title = useMemo(() => {
        return type === 'income' ? 'Entradas' : 'Saídas'
    }, [type]);

    // const lineColor = useMemo(() => {
    //     return type === 'income' ? '#FA0501' : '#4e41f0'
    // }, [type]);

    const listData = useMemo (() => {
        return type === 'income' ? gains : expenses;
    }, [type])

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
    
    useEffect(() => {
        const response = listData.map(item => {
            return {
                id: String(Math.random() * data.length),
                description: item.description,
                amountFormatted: item.amount,
                frequency: item.frequency,
                dataFormatted: item.date,
                tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#FA0501',
            }
        })
        
        setData(response)
    }, [])
    
    

    return (    
        <Container>
            <Header title={title}>
                <SelectInput options={months} />
                <SelectInput options={years} />
            </Header>

            <Filters>
                <button 
                    type="button"
                    className="tag-filter tag-filter-eventual"
                >Eventuais</button>
                <button 
                    type="button"
                    className="tag-filter tag-filter-recurrent"
                >Recorrentes</button>
            </Filters>

            <Content>
                {              
                    data.map(item => (
                        <HistoryFinancesCard 
                        key={item.id}
                        tagColor={item.tagColor}
                        title={item.description}
                        subtitle={item.dataFormatted}
                        amount={item.amountFormatted}
                        />
                    ))  

                }
            </Content>

        </Container>
    );
}

export default List;