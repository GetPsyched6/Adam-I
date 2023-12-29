import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({ Name, backgroundColor, buttontype, onClick }) {
  const buttonStyle = {
    backgroundColor: backgroundColor || 'rgba(255, 255, 255, 0.72)',
  };

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={buttontype} onClick={onClick} className={styles.button} style={buttonStyle}>
      {Name}
    </button>
  );
}

Button.propTypes = {
  Name: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  buttontype: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: 'rgba(255, 255, 255, 0.72)',
  onClick: null,
};

export default Button;
