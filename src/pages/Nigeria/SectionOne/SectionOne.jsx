import propTypes from 'prop-types';
import FadeTransition from '../../../components/FadeTransition/FadeTransition';
import styles from './SectionOne.module.css';

function SectionOne(props) {
  const { mainHeading } = props;
  return (
    <div>
      {/* Invest in Nigeria section */}
      <div className={styles.wrapper}>
        <img src={mainHeading.background} className={styles.background_image} />
        <div className={styles.content}>
          <FadeTransition bottom={-130} translate={55} scrollAnimation amount={0.8}>
            <h1 className={styles.text}>{mainHeading.title}</h1>
            <p className={styles.text}>{mainHeading.description}</p>
          </FadeTransition>
        </div>
      </div>
    </div>
  );
}

SectionOne.propTypes = {
  mainHeading: propTypes.shape({
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    background: propTypes.string.isRequired,
  }).isRequired,
};

export default SectionOne;
