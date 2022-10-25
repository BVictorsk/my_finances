import React, { useState, useMemo } from 'react'
import { Container, Content } from './styles'

import WalletCard from '../../components/walletCard'
import Header from '../../components/header'
import SelectInput from '../../components/selectInput'
import expenses from '../../repositories/expenses'
import gains from '../../repositories/gains'
import listOfMonths from '../../utils/months'
import CardStatus from '../../components/cardStatus'
import happyImg from '../../assets/happy.svg'
import sadImg from '../../assets/sad.svg'
import grinningImg from '../../assets/grinning.svg'

const Dashboard: React.FC = () => {
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1); 
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear()); 
    
    const months = useMemo(() => {
        return listOfMonths.map(( month, index ) => {
            return {
                value: index + 1,
                label: month,
            }
        })

    }, []);

    const totalExpense = useMemo(() => {
        let total: number = 0;

        expenses.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if(month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount);
                } catch {
                    throw new Error('invelid amount! amount must be number')
                }
            }
        });

        return total;
    }, [monthSelected, yearSelected]);

        const totalGains = useMemo(() => {
            let total: number = 0;
    
            gains.forEach(item => {
                const date = new Date(item.date);
                const year = date.getFullYear();
                const month = date.getMonth() + 1;
    
                if(month === monthSelected && year === yearSelected) {
                    try {
                        total += Number(item.amount);
                    } catch {
                        throw new Error('invalid amount! amount must be number')
                    }
                }
            });
    
            return total;
        }, [monthSelected, yearSelected]);

        const totalBalance = useMemo(() => {
            return totalGains - totalExpense;
        }, [totalGains, totalExpense])
    
        const message = useMemo(() => {
            if(totalBalance < 0) {
                return {
                    title:"Atenção",
                    description:"Status da carteira: Negativo",
                    footerText:"Verifique seus gastos!",
                    icon: sadImg
                }
            } 
            else if(totalBalance === 0) {
                return {
                    title:"Tenha cuidado",
                    description:"Status da carteira: Neutro",
                    footerText:"Acompanhe sua carteira mais de perto",
                    icon: grinningImg
                }
            } 
            else {
                return {
                    title:"Parabens!",
                    description:"Status da carteira: Positivo",
                    footerText:"Considere investir seu saldo.",
                    icon: happyImg
                }
            }
    
        }, [totalBalance])

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
         catch {
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

            <Content>
                <WalletCard
                    title="Saldo"
                    amount={totalBalance}
                    footerlabel="Atualizada com base nas entradas/saídas."
                    icon="dollar"
                    color="#4e41f0"
                 />
                <WalletCard
                    title="Entradas"
                    amount={totalGains}
                    footerlabel="Atualizada com base nas entradas/saídas."
                    icon="arrowUp"
                    color="#56E521"
                 />
                <WalletCard
                    title="Saídas"
                    amount={totalExpense}
                    footerlabel="Atualizada com base nas entradas/saídas."
                    icon="arrowDown"
                    color="#FA0501"
                 />

                <CardStatus
                    title={message.title}
                    description={message.description}
                    footerText={message.footerText}
                    icon={message.icon}
                />

            </Content>

        </Container>
    );
}

export default Dashboard;