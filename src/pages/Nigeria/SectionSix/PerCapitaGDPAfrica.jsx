import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts';
import Legend from '../../../components/Legend/Legend';

function PerCapitaGDPAfrica() {
  const data = [
    {
      Value: 2.33,
      Country: 'Nigeria',
    },
    {
      Value: 6.74,
      Country: 'South Africa',
    },
    {
      Value: 7.35,
      Country: 'Botswana',
    },
    {
      Value: 9.11,
      Country: 'Mauritius',
    },
    {
      Value: 10.28,
      Country: 'Gabon',
    },
    {
      Value: 11.26,
      Country: 'Equitoria Guniea',
    },
    {
      Value: 20.27,
      Country: 'Seychelles',
    },
  ];

  return (
    <div>
      <BarChart
        width={400}
        height={290}
        data={data.reverse()}
        layout="vertical"
        margin={{ left: 40 }}
      >
        <CartesianGrid fill="#f2f2f2" stroke="transparent" />
        <XAxis dataKey="Value" type="number" domain={[0, 25]} name="GDP Per Capita" />
        <YAxis dataKey="Country" type="category" name="Country" />
        <Tooltip
          cursor={{ strokeDasharray: '3 3' }}
          formatter={(value, name, props) => [props.payload.Value, props.payload.Country]}
        />
        <Bar dataKey="Value" fill="#8884d8" />
      </BarChart>
      <Legend content="Figures in Thousand USD" />
    </div>
  );
}

export default PerCapitaGDPAfrica;
