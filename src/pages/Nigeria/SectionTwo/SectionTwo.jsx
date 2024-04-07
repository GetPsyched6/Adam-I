import CountryDescription from '../../../components/CountryDescription/CountryDescription';
import FadeTransition from '../../../components/FadeTransition/FadeTransition';
import CardTransition from '../../../components/CardTransition/CardTransition';
import map from '../../../assets/images/Nigeria/SectionTwo/map.webp';
import data from '../../../data/Nigeria/nigeriaData';
import countryDesc from '../../../data/Nigeria/nigeriaDesc';
import styles from './SectionTwo.module.css';

function SectionTwo() {
  return (
    <div className={styles.wrapper}>
      {/* Container for data and map */}
      <div className={styles.data_map_wrapper}>
        <div className={styles.data}>
          {data.map(item => (
            <CountryDescription
              key={item.id}
              title={item.title}
              body={item.body}
              color={item.color}
            />
          ))}
        </div>

        <div className={styles.map}>
          <img src={map} alt="Nigeria map" className={styles.map} />
        </div>
      </div>

      <hr />

      {/* Container for Investment Oportunities */}
      <div className={styles.investment_opportunities}>
        <FadeTransition
          bottom={-100}
          translate={25}
          scrollAnimation
          amount="all"
          className={styles.title_wrapper}
        >
          <h2 className={styles.title}>Investment Opportunities</h2>
        </FadeTransition>

        <CardTransition
          className={styles.card_wrapper}
          object={countryDesc}
          amountList={[0.5, 0.25, 'some']}
        />
      </div>
    </div>
  );
}

export default SectionTwo;
