import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts';
import Legend from '../../../components/Legend/Legend';

function AfricanCountriesGDP() {
  const data = [
    {
      Value: 76.36,
      Country: 'Ghana',
    },
    {
      Value: 99.27,
      Country: 'Ethiopia',
    },
    {
      Value: 109.8,
      Country: 'Kenya',
    },
    {
      Value: 131.47,
      Country: 'Morocco',
    },
    {
      Value: 164.56,
      Country: 'Algeria',
    },
    {
      Value: 402.84,
      Country: 'Egypt',
    },
    {
      Value: 418.02,
      Country: 'South Africa',
    },
    {
      Value: 441.54,
      Country: 'Nigeria',
      color: '#006239',
    },
  ];

  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <div>
      <BarChart
        width={isMobile ? 300 : 400}
        height={isMobile ? 140 : 290}
        data={data.reverse()}
        layout="vertical"
        margin={{ left: 30 }}
      >
        <CartesianGrid fill="#f2f2f2" stroke="transparent" />
        <XAxis dataKey="Value" type="number" domain={[50, 450]} name="Value" />
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

export default AfricanCountriesGDP;
