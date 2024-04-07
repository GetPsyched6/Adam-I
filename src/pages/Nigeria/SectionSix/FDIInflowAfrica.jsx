import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts';
import { useMediaQuery } from '@react-hook/media-query';
import Legend from '../../../components/Legend/Legend';

function FDIInflowAfrica() {
  const data = [
    {
      Value: 40.9,
      Country: 'South Africa',
    },
    {
      Value: 5.1,
      Country: 'Egypt',
    },
    {
      Value: 4.8,
      Country: 'Nigeria',
    },
    {
      Value: 4.3,
      Country: 'Ethiopia',
    },
    {
      Value: 3.7,
      Country: 'Republic of Congo',
    },
  ];

  function legendContent() {
    return <div>(IN billion USD)</div>;
  }

  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <div>
      <BarChart
        width={isMobile ? 300 : 400}
        height={isMobile ? 140 : 290}
        data={data}
        layout="vertical"
        margin={{ left: 30 }}
      >
        <CartesianGrid fill="#f2f2f2" stroke="transparent" />
        <XAxis dataKey="Value" type="number" domain={[0, 50]} name="Value" />
        <YAxis dataKey="Country" type="category" name="Country" />
        <Tooltip
          cursor={{ strokeDasharray: '3 3' }}
          formatter={(value, name, props) => [props.payload.Value, props.payload.Country]}
        />
        <Bar dataKey="Value" fill="#8884d8" />
      </BarChart>
      <Legend content="Figures in Billion USD" />
    </div>
  );
}

export default FDIInflowAfrica;
