import React, { useMemo, useState, useEffect } from 'react'
import { Container, Content, Filters } from './styles'
import {useParams} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from '../../components/header'
import SelectInput from '../../components/selectInput';
import HistoryFinancesCard from '../../components/historyFinancesCard';
import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'
import formatCurrency from '../../utils/formatCurrency'
import formatDate from '../../utils/formatDate'
import listOfMonths from '../../utils/months'

interface IData {
    id: string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
}

const List: React.FC = () => {
    const [data, setData] = useState<IData[]>([]);
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1); 
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear()); 
    const [frequencyFilterSelected, setFrequencyFilterSelected] = useState(['eventual', 'recorrente']);

    const { type } = useParams();

    const title = useMemo(() => {
        return type === 'income' ? 'Entradas' : 'Saídas'
    }, [type]);

    const listData = useMemo (() => {
        return type === 'income' ? gains : expenses;
    }, [type])

    const months = useMemo(() => {
        return listOfMonths.map(( month, index ) => {
            return {
                value: index + 1,
                label: month,
            }
        })

    }, []);

    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        listData.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if(!uniqueYears.includes(year)) {
                uniqueYears.push(year);
            }
        });

        return uniqueYears.map(year => {
            return {
                value: year,
                label: year,

            }
        })
        // eslint-disable-next-line
    }, []);

    const handleFrequencyClick = (frequency: string) => {
        const alreadySelected = frequencyFilterSelected.findIndex(item => item === frequency);

        if(alreadySelected >= 0){
            // eslint-disable-next-line
            const filtered = frequencyFilterSelected.filter(item => item != frequency);
            setFrequencyFilterSelected(filtered);
        } else {
            setFrequencyFilterSelected((prev) => [...prev, frequency]);
        }
    }

    const handleMonthSelected = (month: string) => {
         try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
         }
         catch(error) {
            throw new Error('invalid month value')
         }
    }

    const handleYearSelected = (year: string) => {
         try {
            const parseYear = Number(year);
            setYearSelected(parseYear);
         }
         catch(error) {
            throw new Error('invalid month value')
         }
    }
    
    useEffect(() => {
        const filteredData = listData.filter(item => {
        const date = new Date(item.date);
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

            return month === monthSelected && year === yearSelected && frequencyFilterSelected.includes(item.frequency);
        });

        const formattedDate = filteredData.map(item => {

            return {
                id: uuidv4(),
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#FA0501',
            }
        })
        
        setData(formattedDate)
    }, [listData, monthSelected, yearSelected, data.length, frequencyFilterSelected])
    
    

    return (    
        <Container>
            <Header title={title}>
                <SelectInput 
                options={months} 
                onChange={e => handleMonthSelected(e.target.value)} 
                defaultValue={monthSelected} />
                <SelectInput 
                options={years} 
                onChange={e => handleYearSelected(e.target.value)} 
                defaultValue={yearSelected}  />
            </Header>

            <Filters>
                <button 
                    type="button"
                    className={`tag-filter tag-filter-eventual ${
                        frequencyFilterSelected.includes('eventual') && 'tag-actived'
                      }`}
                      onClick={() => handleFrequencyClick('eventual')}
                >
                    Eventuais
                </button>
                <button 
                    type="button"
                    className={`tag-filter tag-filter-recurrent ${
                        frequencyFilterSelected.includes('recorrente') && 'tag-actived'
                      }`}
                      onClick={() => handleFrequencyClick('recorrente')}
                >
                    Recorrentes
                </button>
            </Filters>

            <Content>
                {              
                    data.map(item => (
                        <HistoryFinancesCard 
                        key={item.id}
                        tagColor={item.tagColor}
                        title={item.description}
                        subtitle={item.dateFormatted}
                        amount={item.amountFormatted}
                        />
                    ))  

                }
            </Content>

        </Container>
    );
}

export default List;