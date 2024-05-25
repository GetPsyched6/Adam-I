import PropTypes from 'prop-types';
import FadeTransition from '../FadeTransition/FadeTransition';
import styles from './CountryDescription.module.css';

function CountryDescription(props) {
  const { title, body, color } = props;
  const fwBold = '800';
  const countryNamestyles = { color, fontWeight: fwBold, textTransform: 'uppercase' };
  const bulletstyles = {
    backgroundColor: color,
    width: '0.625rem',
    height: '1.9rem',
  };

  return (
    <FadeTransition keys={title} mode="popLayout" variants="wait" className={styles.wrapper}>
      <div className={styles.content}>
        <div style={bulletstyles} />
        <h5 style={countryNamestyles}>{title}</h5>
      </div>
      <div className={styles.description}>
        <p>{body}</p>
      </div>
    </FadeTransition>
  );
}

CountryDescription.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default CountryDescription;
