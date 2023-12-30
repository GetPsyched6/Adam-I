import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactUs.module.css';

function ContactUs(props) {
  const { color, onClick } = props;
  const colorClass = color === 'white' ? styles.white_color : styles.black_color;
  return (
    <div className={styles.wrapper}>
      <button type="button" className={`${styles.button} ${colorClass}`} onClick={onClick}>
        Contact us
      </button>
    </div>
  );
}

ContactUs.propTypes = {
  color: PropTypes.oneOf(['white', 'black']),
  onClick: PropTypes.func.isRequired,
};

ContactUs.defaultProps = {
  color: 'white',
};

export default ContactUs;
