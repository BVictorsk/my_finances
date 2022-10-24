import React, { useState, useMemo } from 'react'
import { Container } from './styles'
import Header from '../../components/header'
import SelectInput from '../../components/selectInput'
import expenses from '../../repositories/expenses'
import gains from '../../repositories/gains'
import listOfMonths from '../../utils/months'

const Dashboard: React.FC = () => {
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1); 
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear()); 

    const options = [
        { value: 'Brian', label: 'Brian' },
        { value: 'Brian', label: 'Brian' }
    ];

    
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

        [...expenses, ...gains].forEach(item => {
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
    

    return (    
        <Container>
            <Header title="Dashboard">
                <SelectInput 
                    options={months} 
                    onChange={e => handleMonthSelected(e.target.value)} 
                    defaultValue={monthSelected} />
                    <SelectInput 
                    options={years} 
                    onChange={e => handleYearSelected(e.target.value)} 
                    defaultValue={yearSelected}  />
            </Header>
        </Container>
    );
}

export default Dashboard;