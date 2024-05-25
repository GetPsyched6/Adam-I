import {
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  BarChart,
  CartesianGrid,
  Scatter,
  ScatterChart,
} from 'recharts';
import propType from 'prop-types';
import styles from './GraphCard.module.css';

function GraphCard(props) {
  const { data, title, graphType } = props;
  const XAndYAxisLabelStyle = {
    stroke: '#FFF',
    strokeWidth: 0.5,
  };
  return (
    <ResponsiveContainer width="95%" height="80%">
      {graphType === 'line' && (
        <LineChart width={800} height={400} data={data} margin={{ bottom: 0 }}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <XAxis dataKey="year" style={XAndYAxisLabelStyle} />
          <YAxis style={XAndYAxisLabelStyle} width={35} />
          <Tooltip />
          <Legend />
        </LineChart>
      )}

      {graphType === 'bar' && (
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="year" style={XAndYAxisLabelStyle} />
          <YAxis style={XAndYAxisLabelStyle} width={35} />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      )}

      {graphType === 'scatter' && (
        <ScatterChart data={data}>
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="year" style={XAndYAxisLabelStyle} />
          <YAxis style={XAndYAxisLabelStyle} width={35} />
          <Tooltip style={XAndYAxisLabelStyle} />
          <Legend />
          <Scatter dataKey="value" fill="#8884d8" />
        </ScatterChart>
      )}

      <div className={styles.title_wrapper}>
        <div className={styles.bullet} />
        <p className={styles.title}>{title}</p>
      </div>
    </ResponsiveContainer>
  );
}

GraphCard.propTypes = {
  data: propType.arrayOf(
    propType.shape({
      year: propType.number,
      value: propType.number,
    }).isRequired
  ).isRequired,
  title: propType.string.isRequired,
  graphType: propType.string.isRequired,
};

export default GraphCard;
