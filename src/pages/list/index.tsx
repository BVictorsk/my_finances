import React, { useMemo, useState, useEffect } from 'react'
import { Container, Content, Filters } from './styles'
import {useParams} from 'react-router-dom';
import Header from '../../components/header'
import SelectInput from '../../components/selectInput';
import HistoryFinancesCard from '../../components/historyFinancesCard';
import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'
import formatCurrency from '../../utils/formatCurrency'
import formatDate from '../../utils/formatDate'

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
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1)); 
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear())); 

    const { type } = useParams();

    const title = useMemo(() => {
        return type === 'income' ? 'Entradas' : 'Saídas'
    }, [type]);

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
        const filteredData = listData.filter(item => {
        const date = new Date(item.date);
        const month = String(date.getMonth() + 1);
        const year = String(date.getFullYear());

            return month === monthSelected && year === yearSelected;
        });

        const formattedDate = filteredData.map(item => {

            return {
                id: String(new Date().getTime()) + item.amount,
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dataFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#FA0501',
            }
        })
        
        setData(formattedDate)
    }, [listData, monthSelected, yearSelected, data.length])
    
    

    return (    
        <Container>
            <Header title={title}>
                <SelectInput 
                options={months} 
                onChange={e => setMonthSelected(e.target.value)} 
                defaultValue={monthSelected} />
                <SelectInput 
                options={years} 
                onChange={e => setYearSelected(e.target.value)} 
                defaultValue={yearSelected}  />
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