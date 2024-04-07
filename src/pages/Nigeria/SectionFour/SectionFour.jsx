import React, { useEffect } from 'react';
import GraphCard from '../../../components/GraphCard/GraphCard';
import graphBackground from '../../../assets/images/Nigeria/SectionFour/graphs_background.webp';
import GDPChart from './GDPChart';
import GDPGrowthChart from './GDPGrowthChart';
import GDPPerCapita from './GDPPerCapita';
import FDINetInflow from './FDINetInflow';
import ImportGoodsServices from './ImportOfGoodsServices';
import ExportGoodsServices from './ExportsOfGoodsServices';
import styles from './SectionFour.module.css';

function SectionFour() {
  return (
    <div className={styles.wrapper}>
      {/* Graphs */}
      <img src={graphBackground} alt="graph" className={styles.background} />
      <div className={styles.overlay}>
        <div className={styles.graph_wrapper}>
          <h2 className={styles.title} id="sectionFourTitle">
            Economic Insights Of Nigeria
          </h2>
          <div className={styles.graphs}>
            <GraphCard
              title="GDP"
              color="#F1DE79"
              CustomGraph={GDPChart}
              className={styles.graphCard}
            />

            <GraphCard
              title="GDP Growth Rate"
              color="#F1DE79"
              CustomGraph={GDPGrowthChart}
              className={styles.graphCard}
            />

            <GraphCard
              title="GDP Per Capita"
              color="#F1DE79"
              CustomGraph={GDPPerCapita}
              className={styles.graphCard}
            />

            <GraphCard
              title="FDI Net Inflow"
              color="#F1DE79"
              CustomGraph={FDINetInflow}
              className={styles.graphCard}
            />

            <GraphCard
              title="Imports"
              color="#F1DE79"
              CustomGraph={ImportGoodsServices}
              className={styles.graphCard}
            />

            <GraphCard
              title="Exports"
              color="#F1DE79"
              CustomGraph={ExportGoodsServices}
              className={styles.graphCard}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
