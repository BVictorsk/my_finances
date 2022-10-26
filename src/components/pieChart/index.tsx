import React from 'react';
import { Container, SideLeft, LegendContainer, Legend, SideRight } from './styles'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

interface IPieChartProps {
    data: {
      name: string;
      value: number;
      percent: number;
      color: string;
    }[];
  }

const PieChartComponent: React.FC<IPieChartProps> = ({data}) => {
    return (    
        <Container>
            <SideLeft>
                <LegendContainer>
                    {data.map((indicator) => (
                        <Legend key={indicator.name} color={indicator.color}>
                            <div>{indicator.percent}%</div>
                            <span>{indicator.name}</span>
                        </Legend>
                    ))}
                </LegendContainer>
            </SideLeft>
            <SideRight>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="percent"
                        >
                            {
                                data.map((indicator) => (
                                    <Cell key={indicator.name} fill={indicator.color} />
                                ))
                            }
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </SideRight>
        </Container>
    );
  }
  
  export default PieChartComponent;