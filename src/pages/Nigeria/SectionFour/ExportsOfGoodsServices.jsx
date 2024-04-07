import { ScatterChart, CartesianGrid, XAxis, YAxis, Tooltip, Scatter } from 'recharts';
import Legend from '../../../components/Legend/Legend';

function ExportGoodsServices() {
  const data = [
    {
      year: 2011,
      'Export of Goods and Services': 131.04,
    },
    {
      year: 2012,
      'Export of Goods and Services': 146.37,
    },
    {
      year: 2013,
      'Export of Goods and Services': 93.88,
    },
    {
      year: 2014,
      'Export of Goods and Services': 105.85,
    },
    {
      year: 2015,
      'Export of Goods and Services': 52.59,
    },
    {
      year: 2016,
      'Export of Goods and Services': 37.3,
    },
    {
      year: 2017,
      'Export of Goods and Services': 49.49,
    },
    {
      year: 2018,
      'Export of Goods and Services': 65.36,
    },
    {
      year: 2019,
      'Export of Goods and Services': 63.73,
    },
    {
      year: 2020,
      'Export of Goods and Services': 35.09,
    },
    {
      year: 2021,
      'Export of Goods and Services': 47.34,
    },
  ];

  return (
    <div>
      <ScatterChart width={400} height={290} data={data}>
        <CartesianGrid fill="#f2f2f2" stroke="transparent" />
        <XAxis dataKey="year" type="number" domain={[2010, 2022]} name="Year" />
        <YAxis
          dataKey="Export of Goods and Services"
          type="number"
          name="Export of Goods and Services"
          domain={[25, 150]}
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

export default ExportGoodsServices;
