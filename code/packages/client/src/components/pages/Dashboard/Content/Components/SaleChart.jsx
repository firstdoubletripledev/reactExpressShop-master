import React from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  { name: '2013', Food: 4000, Clothes: 2400, Electronics: 2400 },
  { name: '2014', Food: 3000, Clothes: 1398, Electronics: 2210 },
  { name: '2015', Food: 2000, Clothes: 9800, Electronics: 2290 },
  { name: '2016', Food: 2780, Clothes: 3908, Electronics: 2000 },
  { name: '2017', Food: 1890, Clothes: 4800, Electronics: 2181 },
  { name: '2018', Food: 2390, Clothes: 3800, Electronics: 2500 },
  { name: '2019', Food: 3490, Clothes: 4300, Electronics: 2100 },
];

function SaleChart() {
  return (
    <ResponsiveContainer>
      <LineChart data={data}>
        <CartesianGrid
          vertical={false}
          stroke="#e5e5e5"
          strokeDasharray="3 3"
        />
        <XAxis
          dataKey="name"
          axisLine={{ stroke: '#e5e5e5', strokeWidth: 1 }}
          tickLine={false}
        />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip
          wrapperStyle={{
            border: 'none',
            boxShadow: '4px 4px 40px rgba(0, 0, 0, 0.05)',
          }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="Food"
          stroke={'#d897eb'}
          strokeWidth={3}
          dot={{ fill: '#d897eb' }}
          activeDot={{ r: 5, strokeWidth: 0 }}
        />
        <Line
          type="monotone"
          dataKey="Clothes"
          stroke={'#f69899'}
          strokeWidth={3}
          dot={{ fill: '#f69899' }}
          activeDot={{ r: 5, strokeWidth: 0 }}
        />
        <Line
          type="monotone"
          dataKey="Electronics"
          stroke={'#64ea91'}
          strokeWidth={3}
          dot={{ fill: '#64ea91' }}
          activeDot={{ r: 5, strokeWidth: 0 }}
        />{' '}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SaleChart;
