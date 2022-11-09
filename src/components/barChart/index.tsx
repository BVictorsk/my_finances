import { Container, SideLeft, SideRight, Legend, LegendContainer } from './styles'
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts'
import formatCurrency from '../../utils/formatCurrency'
import React from 'react'

interface IBarChartProps {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[];
}

const BarChartComponent: React.FC<IBarChartProps> = ({ title, data }) => (
  <Container>
    <SideLeft>
      <h2>{title}</h2>
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
        <BarChart data={data}>
          <Bar dataKey="amount" name="Valor">
            {data.map((indicator) => (
              <Cell key={indicator.name} fill={indicator.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
);

export default BarChartComponent