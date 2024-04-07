import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts';
import Legend from '../../../components/Legend/Legend';

function FDINetInflow() {
  const data = [
    {
      year: 2011,
      'FDI Net Inflow': 8.9,
    },
    {
      year: 2012,
      'FDI Net Inflow': 8.4,
    },
    {
      year: 2013,
      'FDI Net Inflow': 8.9,
    },
    {
      year: 2014,
      'FDI Net Inflow': 9.0,
    },
    {
      year: 2015,
      'FDI Net Inflow': 5.6,
    },
    {
      year: 2016,
      'FDI Net Inflow': 4.4,
    },
    {
      year: 2017,
      'FDI Net Inflow': 3.5,
    },
    {
      year: 2018,
      'FDI Net Inflow': 2.4,
    },
    {
      year: 2019,
      'FDI Net Inflow': 3.3,
    },
    {
      year: 2020,
      'FDI Net Inflow': 2.4,
    },
    {
      year: 2021,
      'FDI Net Inflow': 2.8,
    },
  ];

  return (
    <div>
      <BarChart width={400} height={290} data={data}>
        <CartesianGrid fill="#f2f2f2" stroke="transparent" />
        <XAxis dataKey="year" type="number" domain={[2010, 2022]} name="Year" />
        <YAxis dataKey="FDI Net Inflow" type="number" name="FDI net Inflow" domain={[0, 10]} />
        <Tooltip
          cursor={{ strokeDasharray: '3 3' }}
          formatter={(value, name, props) => [value, props.payload.year]}
        />
        <Bar dataKey="FDI Net Inflow" fill="#8884d8" />
      </BarChart>
      <Legend content="Figures in Billion USD" />
    </div>
  );
}

export default FDINetInflow;
