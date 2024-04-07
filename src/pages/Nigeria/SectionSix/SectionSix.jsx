import commitmentBg from '../../../assets/images/Nigeria/SectionSix/commitment.webp';
import nigeriaBg from '../../../assets/images/Nigeria/SectionSix/africa_on_globe.webp';
import GraphCard from '../../../components/GraphCard/GraphCard';
import GDPGrowthRateAfrica from './GDPGrowthRateAfrica';
import AfricanCountriesGDP from './AfricanCountriesGDP';
import PerCapitaGDPAfrica from './PerCapitaGDPAfrica';
import FDIInflowAfrica from './FDIInflowAfrica';
import SubSectionSix from './SubSectionSix/SubSectionSix';
import styles from './SectionSix.module.css';

function SectionSix() {
  return (
    <div className={styles.wrapper}>
      {/* commitment */}
      <SubSectionSix />
      {/* Nigeria's standing Africa */}
      <div className={styles.nigeria_standing_wrapper}>
        <img src={nigeriaBg} alt="Africa on Globe" className={styles.nigeria_standing_image} />
        <div className={styles.nigeria_standing_content}>
          <h2 className={styles.nigeria_standing_title}>Nigeria's standing in Africa</h2>
          <div className={styles.graphs}>
            <GraphCard
              title="GDP Growth Rate in Africa"
              CustomGraph={GDPGrowthRateAfrica}
              color={'#FFFFFF'}
            />

            <GraphCard
              title="African countries with highest GDP (2021)"
              CustomGraph={AfricanCountriesGDP}
              color={'#FFFFFF'}
            />

            <GraphCard
              title="Higest per capita GDP of Arican Countries (2022)"
              CustomGraph={PerCapitaGDPAfrica}
              color={'#FFFFFF'}
            />

            <GraphCard
              title="FDI inflows in Africa (2021)"
              CustomGraph={FDIInflowAfrica}
              color={'#FFFFFF'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionSix;
