import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactUs.module.css';

function ContactUs(props) {
  const { color, onClick } = props;
  const style = {
    color: `var(--clr-${color})`,
  };
  return (
    <div className={styles.wrapper}>
      <button type="button" className={styles.button} style={style} onClick={onClick}>
        Contact us
      </button>
    </div>
  );
}

ContactUs.propTypes = {
  color: PropTypes.oneOf(['white90', 'black90']),
  onClick: PropTypes.func.isRequired,
};

ContactUs.defaultProps = {
  color: 'white90',
};

export default ContactUs;
