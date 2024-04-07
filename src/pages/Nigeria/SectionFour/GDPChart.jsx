import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from 'recharts';
import Legend from '../../../components/Legend/Legend';

function GDPChart() {
  const data = [
    {
      year: 2011,
      GDP: 414.47,
    },
    {
      year: 2012,
      GDP: 463.97,
    },
    {
      year: 2013,
      GDP: 520.12,
    },
    {
      year: 2014,
      GDP: 574.18,
    },
    {
      year: 2015,
      GDP: 493.03,
    },
    {
      year: 2016,
      GDP: 404.65,
    },
    {
      year: 2017,
      GDP: 375.75,
    },
    {
      year: 2018,
      GDP: 421.74,
    },
    {
      year: 2019,
      GDP: 448.12,
    },
    {
      year: 2020,
      GDP: 432.29,
    },
    {
      year: 2021,
      GDP: 440.83,
    },
  ];

  return (
    <div>
      <LineChart width={400} height={290} data={data}>
        <CartesianGrid fill="#f2f2f2" stroke="transparent" />
        <XAxis dataKey="year" type="number" domain={[2010, 2022]} name="Year" />
        <YAxis dataKey="GDP" type="number" name="GDP" domain={[300, 600]} />
        <Tooltip
          cursor={{ strokeDasharray: '3 3' }}
          formatter={(value, name, props) => [value, props.payload.year]}
        />
        <Line type="monotone" dataKey="GDP" stroke="#8884d8" />
      </LineChart>
      <Legend content="Figures in Billion USD" />
    </div>
  );
}

export default GDPChart;
