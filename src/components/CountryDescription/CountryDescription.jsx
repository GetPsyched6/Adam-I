import propTypes from 'prop-types';
import styles from './CountryDescription.module.css';

function CountryDescription({ title, body, color }) {
  const fwBold = '800';
  const countryNamestyles = { color, fontWeight: fwBold, textTransform: 'uppercase' };
  const bulletstyles = {
    backgroundColor: color,
    width: '0.625rem',
    height: '1.9rem',
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div style={bulletstyles} />
        <div className={styles.title}>
          <h4 style={countryNamestyles}>{title}</h4>
        </div>
      </div>
      <div className={styles.description}>
        <p>{body}</p>
      </div>
    </div>
  );
}

CountryDescription.propTypes = {
  title: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  color: propTypes.string.isRequired,
};

export default CountryDescription;
