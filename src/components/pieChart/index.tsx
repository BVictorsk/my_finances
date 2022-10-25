import React from 'react';
import { Container, SideLeft, LegendContainer, Legend, SideRight } from './styles'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


const PieChartComponent: React.FC = () => {
    return (    
        <Container>
            <SideLeft>
                <LegendContainer>
                    <Legend color={"#0ED004"}>
                        <div>5%</div>
                        <span>Entradas</span>
                    </Legend>
                    <Legend color={"#FA0501"}>
                        <div>95%</div>
                        <span>Saídas</span>
                    </Legend>
                </LegendContainer>
            </SideLeft>
            <SideRight>
                {/* <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={[{amount: 30, percent: 95}]}
                            labelLine={false}
                            dataKey="percent"
                        >

                        </Pie>
                    </PieChart>
                </ResponsiveContainer> */}
            </SideRight>
        </Container>
    );
  }
  
  export default PieChartComponent;