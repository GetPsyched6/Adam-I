import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function GDPGrowthChart() {
  const data = [
    {
      year: 2012,
      'GDP Growth': 4.2,
    },
    {
      year: 2013,
      'GDP Growth': 6.7,
    },
    {
      year: 2014,
      'GDP Growth': 6.3,
    },
    {
      year: 2015,
      'GDP Growth': 2.7,
    },
    {
      year: 2016,
      'GDP Growth': -1.6,
    },
    {
      year: 2017,
      'GDP Growth': 0.8,
    },
    {
      year: 2018,
      'GDP Growth': 1.9,
    },
    {
      year: 2019,
      'GDP Growth': 2.2,
    },
    {
      year: 2020,
      'GDP Growth': -1.8,
    },
    {
      year: 2021,
      'GDP Growth': 3.6,
    },
  ];
  return (
    <LineChart width={400} height={290} data={data}>
      <CartesianGrid stroke="transaprent" fill="#f2f2f2" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip
        cursor={{ strokeDasharray: '3 3' }}
        formatter={(value, name, props) => [value, props.payload.year]}
      />
      {/* Correct the dataKey to match the key in the data array */}
      <Line type="monotone" dataKey="GDP Growth" stroke="#82ca9d" />
    </LineChart>
  );
}

export default GDPGrowthChart;
