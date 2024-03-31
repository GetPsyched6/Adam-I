import CardTransition from '../../../components/CardTransition/CardTransition';
import FadeTransition from '../../../components/FadeTransition/FadeTransition';
import CountryDescription from '../../../components/CountryDescription/CountryDescription';
import nigeriaDesc from '../../../data/Nigeria/nigeriaDesc';
import map from '../../../assets/images/Nigeria/SectionTwo/map.webp';
import styles from './SectionTwo.module.css';

import nigeriaData from '../../../data/Nigeria/nigeriaData';
function SectionThree() {
  return (
    <div className={styles.wrapper} id="nigeria" role="main">
      <div className={styles.country_desc_wrapper}>
        <div className={styles.country_description_wrapper}>
          {nigeriaDesc.map((desc, index) => (
            <CountryDescription
              key={index}
              title={desc.title}
              body={desc.body}
              color={desc.color}
            />
          ))}
        </div>

        <div className={styles.map_wrapper}>
          <img src={map} alt="Nigeria Map" className={styles.map} />
        </div>
      </div>

      <div>
        <FadeTransition bottom={-100} translate={25} scrollAnimation amount="all">
          <h2 className={`${styles.text} ${styles.title}`}>Investment Oportunities</h2>
        </FadeTransition>
        <CardTransition className={styles.card_wrapper} object={nigeriaData} color="yellow" />
      </div>
    </div>
  );
}

export default SectionThree;
