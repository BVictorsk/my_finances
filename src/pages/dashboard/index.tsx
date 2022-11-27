import React, { useState, useMemo, useCallback } from 'react'
import { Container, Content } from './styles'

import CardStatus from '../../components/cardStatus'
import Header from '../../components/header'
import HistoryBox from '../../components/historyBox'
import PieChartComponent from '../../components/pieChart'
import SelectInput from '../../components/selectInput'
import WalletCard from '../../components/walletCard'
import BarChartComponent from '../../components/barChart'

import expenses from '../../repositories/expenses'
import gains from '../../repositories/gains'

import listOfMonths from '../../utils/months'

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

    const totalExpenses = useMemo(() => {
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
            return totalGains - totalExpenses;
        }, [totalGains, totalExpenses])
    
    const message = useMemo(() => {
        if(totalBalance < 0){
            return {
                title: "Que triste!",
                description: "Neste mês, você gastou mais do que deveria.",
                footerText: "Verifique seus gastos e tente cortar algumas coisas desnecessárias.",
            }
        }      
        else if(totalGains === 0 && totalExpenses === 0){
            return {
                title: "Ops!",
                description: "Neste mês, não há registros de entradas ou saídas.",
                footerText: "Parece que você não fez nenhum registro no mês e ano selecionado.",
            }
        }
        else if(totalBalance === 0){
            return {
                title: "Ufaa!",
                description: "Neste mês, você gastou exatamente o que ganhou.",
                footerText: "Tenha cuidado. No próximo tente poupar o seu dinheiro.",
            }
        }
        else{
            return {
                title: "Muito bem!",
                description: "Sua carteira está positiva!",
                footerText: "Continue assim. Considere investir o seu saldo.",
            }
        }
        // eslint-disable-next-line
        }, [totalBalance])

    const relationExpenseXGains = useMemo(() => {
        const total = totalGains + totalExpenses;
        
        const percentGains = Number(((totalGains / total) * 100).toFixed(1));
        const percentExpenses = Number(((totalExpenses / total) * 100).toFixed(1));
        
        const data = [
            {
                name: 'Entradas',
                value: totalGains,
                percent: percentGains ? percentGains : 0,
                color: '#0ED004',
            },
            {
                name: 'Saídas',
                value: totalExpenses,
                percent: percentExpenses ? percentExpenses : 0,
                color: '#FA0501',
            },
        ];
        
        return data;
    }, [totalGains, totalExpenses]);

    const historyData = useMemo(() => {
        return listOfMonths
          .map((_, month) => {
            let amountEntry = 0;
            gains.forEach((gain) => {
              const date = new Date(gain.date);
              const gainMonth = date.getMonth();
              const gainYear = date.getFullYear();
    
              if (gainMonth === month && gainYear === yearSelected) {
                try {
                  amountEntry += Number(gain.amount);
                } catch {
                  throw new Error('amountEntry must be number');
                }
              }
            });
    
            let amountOutput = 0;
            expenses.forEach((expense) => {
              const date = new Date(expense.date);
              const expenseMonth = date.getMonth();
              const expenseYear = date.getFullYear();
    
              if (expenseMonth === month && expenseYear === yearSelected) {
                try {
                  amountOutput += Number(expense.amount);
                } catch {
                  throw new Error('expenseEntry must be number');
                }
              }
            });
    
            return {
              monthNumber: month,
              month: listOfMonths[month].substr(0, 3),
              amountEntry,
              amountOutput,
            };
          })
          .filter((item) => {
            const currentMonth = new Date().getMonth();
            const currentYear = new Date().getFullYear();
            return (
              (yearSelected === currentYear && item.monthNumber <= currentMonth) ||
              yearSelected < currentYear
            );
          });
      }, [yearSelected]);

      const relationExpensesRecurrentXEvetual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        expenses.filter((expense) => {
            const date = new Date(expense.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            return month === monthSelected && year === yearSelected;
        })
        .forEach((expense) => {
            if(expense.frequency === 'recorrente') {
                return amountRecurrent += Number(expense.amount);
            }

            if(expense.frequency === 'eventual') {
                return amountEventual += Number(expense.amount);
            }
        });

        const total = amountRecurrent + amountEventual;

        const percentRecurrent = Number(((amountRecurrent / total) * 100).toFixed(1));
        const percentEventual = Number(((amountEventual / total) * 100).toFixed(1));

        return [
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: percentRecurrent ? percentRecurrent : 0,
                color: "#4e41f0"
            },
            {
                name: 'Eventuais',
                amount: amountEventual,
                percent: percentEventual ? percentEventual : 0  ,
                color: "#FA0501"
            }
        ]
      }, [monthSelected, yearSelected]);

      const relationGainsRecurrentXEvetual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        gains.filter((gain) => {
            const date = new Date(gain.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            return month === monthSelected && year === yearSelected;
        })
        .forEach((gain) => {
            if(gain.frequency === 'recorrente') {
                return amountRecurrent += Number(gain.amount);
            }

            if(gain.frequency === 'eventual') {
                return amountEventual += Number(gain.amount);
            }
        });

        const total = amountRecurrent + amountEventual;

        const recurrentPercent = Number(((amountRecurrent / total) * 100).toFixed(1));
        const eventualPercent = Number(((amountEventual / total) * 100).toFixed(1));

        return [
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: recurrentPercent ? recurrentPercent : 0,
                color: "#4e41f0"
            },
            {
                name: 'Eventuais',
                amount: amountEventual,
                percent: eventualPercent ? eventualPercent : 0,
                color: "#FA0501"
            }
        ]
      }, [monthSelected, yearSelected]);

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

    const handleMonthSelected = useCallback((month: string) => {
         try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
         }
         catch {
            throw new Error('invalid month value')
         }
    }, []);

    const handleYearSelected = useCallback((year: string) => {
         try {
            const parseYear = Number(year);
            setYearSelected(parseYear);
         }
         catch(error) {
            throw new Error('invalid month value')
         }
    }, []);
    

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
                    color="#0ED004"
                 />
                <WalletCard
                    title="Saídas"
                    amount={totalExpenses}
                    footerlabel="Atualizada com base nas entradas/saídas."
                    icon="arrowDown"
                    color="#FA0501"
                 />

                <CardStatus
                    title={message.title}
                    description={message.description}
                    footerText={message.footerText}
                />

                <PieChartComponent data={relationExpenseXGains}/>

                <HistoryBox
                    data={historyData}
                    lineColorAmountEntry="#0ED004"
                    lineColorAmountOutput="#FA0501"
                />
                <BarChartComponent title="Entradas" data={relationGainsRecurrentXEvetual} />
                <BarChartComponent title="Saídas" data={relationExpensesRecurrentXEvetual} />
            </Content>

        </Container>
    );
}

export default Dashboard;