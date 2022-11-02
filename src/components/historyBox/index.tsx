import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

import formatCurrency from '../../utils/formatCurrency';

import {
  Container,
  ChartContainer,
  Header,
  Legend,
  LegendContainer,
} from './styles';

interface IHistoryBoxProps {
  data: {
    month: string;
    amountEntry: number;
    amountOutput: number;
  }[];
  lineColorAmountEntry: string;
  lineColorAmountOutput: string;
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({
  data,
  lineColorAmountEntry,
  lineColorAmountOutput,
}) => (
  <Container>
    <Header>
      <h2>Histórico de saldo</h2>

      <LegendContainer>
        <Legend color={lineColorAmountEntry}>
          <div></div>
          <span>Entradas</span>
        </Legend>
        <Legend color={lineColorAmountOutput}>
          <div></div>
          <span>Saídas</span>
        </Legend>
      </LegendContainer>
    </Header>

    <ChartContainer>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 10, right: 15, left: 15, }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#4e41f0" />
          <XAxis dataKey="month" stroke="#4e41f0" />
          <Tooltip/>
          <Line
            type="monotone"
            dataKey="amountEntry"
            name="Entradas"
            stroke={lineColorAmountEntry}
            strokeWidth={3}
            dot={{ r: 3 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="amountOutput"
            name="Saídas"
            stroke={lineColorAmountOutput}
            strokeWidth={3}
            dot={{ r: 3 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  </Container>
);

export default HistoryBox;