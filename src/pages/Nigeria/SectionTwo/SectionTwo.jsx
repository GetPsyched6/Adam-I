import propTypes from 'prop-types';
import FadeTransition from '../../../components/FadeTransition/FadeTransition';
import CountryDescription from '../../../components/CountryDescription/CountryDescription';
import CardTransition from '../../../components/CardTransition/CardTransition';
import styles from './SectionTwo.module.css';

function SectionTwo(props) {
  const { descriptionAndMap, investmentOpportunities, whyInvest, investmentSupportAndResources } =
    props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.sub_section}>
        {/* Statistics and map section */}

        <FadeTransition bottom={-130} translate={55} scrollAnimation amount={0.3}>
          <div className={styles.statistics_and_map}>
            <div className={styles.statistics}>
              {descriptionAndMap.description.map(item => (
                <CountryDescription
                  key={item.id}
                  title={item.title}
                  body={item.body}
                  color={item.color}
                />
              ))}
            </div>

            <div className={styles.map}>
              <img src={descriptionAndMap.map} alt="map of nigeria" className={styles.map_image} />
            </div>
          </div>
        </FadeTransition>

        <hr />

        {/* Investment opportunities */}
        <div className={styles.investment_opportunities_wrapper}>
          <FadeTransition
            bottom={-100}
            translate={25}
            scrollAnimation
            amount={0.8}
            className={styles.title_wrapper}
          >
            <h2 className={styles.title}>{investmentOpportunities.title}</h2>
          </FadeTransition>

          <CardTransition
            className={styles.card_wrapper}
            object={investmentOpportunities.opportunities}
            isGreen
            amountList={[0.5, 0.25, 'some']}
          />
        </div>
      </div>

      {/* Why invest */}
      <div className={styles.why_invest}>
        <FadeTransition
          bottom={-100}
          translate={25}
          scrollAnimation
          amount={0.8}
          className={styles.title_wrapper}
        >
          <h2 className={styles.title}>{whyInvest.title}</h2>
        </FadeTransition>
        <CardTransition
          className={styles.card_wrapper}
          object={whyInvest.reasons}
          amountList={[0.5, 0.25, 'some']}
          color="yellow"
        />
      </div>

      {/* Investment support and resources */}
      <div className={styles.investment_support_and_resources}>
        <FadeTransition bottom={-100} translate={25} scrollAnimation amount={0.5}>
          <div className={styles.investment_support_and_resources_body}>
            <h2>{investmentSupportAndResources.title}</h2>
            <div className={styles.investment_support_and_resources_flexbox}>
              <p>{investmentSupportAndResources.body}</p>
              <img src={investmentSupportAndResources.image} alt="NPIC logo" />
            </div>
          </div>
        </FadeTransition>
      </div>
    </div>
  );
}

SectionTwo.propTypes = {
  descriptionAndMap: propTypes.shape({
    description: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number.isRequired,
        title: propTypes.string.isRequired,
        body: propTypes.string.isRequired,
        color: propTypes.string.isRequired,
      })
    ).isRequired,
    map: propTypes.string.isRequired,
  }).isRequired,
  investmentOpportunities: propTypes.shape({
    title: propTypes.string.isRequired,
    opportunities: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number.isRequired,
        title: propTypes.string.isRequired,
        image: propTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  whyInvest: propTypes.shape({
    title: propTypes.string.isRequired,
    reasons: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number.isRequired,
        title: propTypes.string.isRequired,
        body: propTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  investmentSupportAndResources: propTypes.shape({
    title: propTypes.string.isRequired,
    body: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
  }).isRequired,
};

export default SectionTwo;
