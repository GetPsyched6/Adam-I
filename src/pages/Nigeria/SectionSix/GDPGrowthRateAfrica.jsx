import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts';
function GDPGrowthRateAfrica() {
  const data = [
    {
      Value: 131,
      Country: 'Libya',
    },
    {
      Value: 7.6,
      Country: 'Kenya',
    },
    {
      Value: 7.5,
      Country: 'Botswana',
    },
    {
      Value: 6.9,
      Country: 'Niger',
    },
    {
      Value: 6.6,
      Country: 'Mauritius',
    },
    {
      Value: 6.3,
      Country: 'Uganda',
    },
    {
      Value: 3.1,
      Country: 'South Africa',
    },
    {
      Value: 2.5,
      Country: 'Nigeria',
    },
  ];

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
        <XAxis dataKey="Value" type="number" domain={[0, 135]} name="Value" />
        <YAxis dataKey="Country" type="category" name="Country" />
        <Tooltip
          cursor={{ strokeDasharray: '3 3' }}
          formatter={(value, name, props) => [props.payload.Value, props.payload.Country]}
        />
        <Bar dataKey="Value" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default GDPGrowthRateAfrica;
