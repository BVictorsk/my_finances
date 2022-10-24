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
    dataFormatted: string;
    tagColor: string;
}

const List: React.FC = () => {
    const [data, setData] = useState<IData[]>([]);
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1)); 
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear())); 
    const [selectedFrequency, setSelectedFrequency] = useState(['eventual', 'recorrente']);

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
    }, []);

    const handleFrequencyClick = (frequency: string) => {
        const alreadySelected = selectedFrequency.findIndex(item => item === frequency);

        if(alreadySelected >= 0){
            const filtered = selectedFrequency.filter(item => item != frequency);
            setSelectedFrequency(filtered);
        } else {
            setSelectedFrequency((prev) => [...prev, frequency]);
        }
    }
    
    useEffect(() => {
        const filteredData = listData.filter(item => {
        const date = new Date(item.date);
        const month = String(date.getMonth() + 1);
        const year = String(date.getFullYear());

            return month === monthSelected && year === yearSelected && selectedFrequency.includes(item.frequency);
        });

        const formattedDate = filteredData.map(item => {

            return {
                id: uuidv4(),
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dataFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#FA0501',
            }
        })
        
        setData(formattedDate)
    }, [listData, monthSelected, yearSelected, data.length, selectedFrequency])
    
    

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
                    className={`tag-filter tag-filter-eventual ${
                        selectedFrequency.includes('eventual') && 'tag-actived'
                      }`}
                      onClick={() => handleFrequencyClick('eventual')}
                >
                    Eventuais
                </button>
                <button 
                    type="button"
                    className={`tag-filter tag-filter-recurrent ${
                        selectedFrequency.includes('recorrente') && 'tag-actived'
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