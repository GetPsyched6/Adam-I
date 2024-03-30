import CardTransition from '../../../components/CardTransition/CardTransition';
import FadeTransition from '../../../components/FadeTransition/FadeTransition';
import CountryDescription from '../../../components/CountryDescription/CountryDescription';
import styles from './SectionTwo.module.css';
import nigeriaData from '../../../data/Nigeria/nigeriaData';
import countryDesc from '../../../data/Nigeria/nigeriaDesc';
import map from '../../../assets/images/Nigeria/SectionTwo/map.webp';

function SectionThree() {
  return (
    <div className={styles.wrapper} id="nigeria" role="main">
      <div className={styles.country_desc_wrapper}>
        <div>
          {countryDesc.map(desc => (
            <CountryDescription
              key={desc.id}
              title={desc.title}
              body={desc.body}
              color={desc.color}
            />
          ))}
        </div>
        <div>
          <img src={map} alt="Nigeria map" className={styles.map} />
        </div>
      </div>
      <hr />
      <div>
        <FadeTransition bottom={-100} translate={25} scrollAnimation amount={0.5}>
          <h2 className={`${styles.text} ${styles.title}`}>Investment Oportunities</h2>
        </FadeTransition>
        <CardTransition className={styles.card_wrapper} object={nigeriaData} color="yellow" />
      </div>
    </div>
  );
}

export default SectionThree;
