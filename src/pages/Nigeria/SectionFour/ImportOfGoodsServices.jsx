import { ScatterChart, CartesianGrid, XAxis, YAxis, Tooltip, Scatter } from 'recharts';
import Legend from '../../../components/Legend/Legend';

function ImportGoodsServices() {
  const data = [
    {
      year: 2011,
      'Import of Goods and Services': 89.78,
    },
    {
      year: 2012,
      'Import of Goods and Services': 60.25,
    },
    {
      year: 2013,
      'Import of Goods and Services': 67.61,
    },
    {
      year: 2014,
      'Import of Goods and Services': 71.49,
    },
    {
      year: 2015,
      'Import of Goods and Services': 52.59,
    },
    {
      year: 2016,
      'Import of Goods and Services': 46.55,
    },
    {
      year: 2017,
      'Import of Goods and Services': 49.51,
    },
    {
      year: 2018,
      'Import of Goods and Services': 73.85,
    },
    {
      year: 2019,
      'Import of Goods and Services': 88.74,
    },
    {
      year: 2020,
      'Import of Goods and Services': 35.59,
    },
    {
      year: 2021,
      'Import of Goods and Services': 52.19,
    },
  ];

  return (
    <div>
      <ScatterChart width={400} height={290} data={data}>
        <CartesianGrid fill="#f2f2f2" stroke="transparent" />
        <XAxis dataKey="year" type="number" domain={[2010, 2022]} name="Year" />
        <YAxis
          dataKey="Import of Goods and Services"
          type="number"
          name="Import of Goods and Services"
          domain={[25, 100]}
        />
        <Tooltip
          cursor={{ strokeDasharray: '3 3' }}
          formatter={(value, name, props) => [value, props.payload.year]}
        />
        <Scatter data={data} fill="#8884d8" />
      </ScatterChart>
      <Legend content="Figures in Billion USD" />
    </div>
  );
}

export default ImportGoodsServices;
