import { PieChart } from '@mui/x-charts/PieChart';
import background from '../../../assets/images/Nigeria/SectionFive/graphs_background.webp';
import GraphContainer from '../../../components/GraphContainer/GraphContainer';
import GDP from './GDP';
import styles from './SectionFive.module.css';

export default function SectionFive() {
  return (
    <div>
      <div className={styles.graphs}>
        <img src={background} alt="background" className={styles.background} />
        <div className={styles.graph_wrapper}>
          <h2>Economic Insights of Nigeria</h2>
          <div className={styles.graph}>
            <div>
              <GraphContainer Graph={GDP} title="GDP" />
            </div>
            <div>
              <GraphContainer Graph={GDP} />
            </div>
            <div>
              <GraphContainer Graph={GDP} />
            </div>
            <div>
              <GraphContainer Graph={GDP} />
            </div>
            <div>
              <GraphContainer Graph={GDP} />
            </div>
            <div>
              <GraphContainer Graph={GDP} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.pie_chart_wrapper}>
        <div className={styles.title}>
          <h3>Distribution of GDP Across Economic Sectors</h3>
        </div>
        <div className={styles.pie_chart}>
          <PieChart
            colors={['#006401', '#87CEEA', '#FE6347']}
            series={[
              {
                arcLabel: item => `${item.value}%`,
                highlightScope: { faded: 'global', highlighted: 'item' },
                data: [
                  { id: 0, color: '#006401', value: 31.9, label: 'Agriculture' },
                  { id: 1, color: '#87CEEA', value: 23.7, label: 'Industry' },
                  { id: 2, color: '#FE6347', value: 44.4, label: 'Services' },
                ],
              },
            ]}
            width={600}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
