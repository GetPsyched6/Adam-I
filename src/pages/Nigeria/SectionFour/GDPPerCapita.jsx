import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts';
import Legend from '../../../components/Legend/Legend';
function GDPPerCapita() {
  const data = [
    {
      year: 2011,
      'GDP Per Capita': 2505,
    },
    {
      year: 2012,
      'GDP Per Capita': 2728,
    },
    {
      year: 2013,
      'GDP Per Capita': 2977,
    },
    {
      year: 2014,
      'GDP Per Capita': 3201,
    },
    {
      year: 2015,
      'GDP Per Capita': 2608,
    },
    {
      year: 2016,
      'GDP Per Capita': 2145,
    },
    {
      year: 2017,
      'GDP Per Capita': 1942,
    },
    {
      year: 2018,
      'GDP Per Capita': 2126,
    },
    {
      year: 2019,
      'GDP Per Capita': 2204,
    },
    {
      year: 2020,
      'GDP Per Capita': 2705,
    },
    {
      year: 2021,
      'GDP Per Capita': 2066,
    },
  ];
  return (
    <div>
      <BarChart width={400} height={290} data={data}>
        <CartesianGrid fill="#f2f2f2" stroke="transparent" />
        <XAxis dataKey="year" type="number" domain={[2010, 2022]} name="Year" />
        <YAxis dataKey="GDP Per Capita" type="number" name="GDP Per Capita" domain={[1800, 3500]} />
        <Tooltip
          cursor={{ strokeDasharray: '3 3' }}
          formatter={(value, name, props) => [value, props.payload.year]}
        />
        <Bar dataKey="GDP Per Capita" fill="#8884d8" />
      </BarChart>
      <Legend content="Figures in USD" />
    </div>
  );
}

export default GDPPerCapita;
