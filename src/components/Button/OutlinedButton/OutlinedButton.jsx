import React from 'react';
import PropTypes from 'prop-types';
import styles from './OutlinedButton.module.css';

function OutlinedButton(props) {
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

OutlinedButton.propTypes = {
  color: PropTypes.oneOf(['white', 'black']),
  onClick: PropTypes.func,
};

OutlinedButton.defaultProps = {
  color: 'white',
  onClick: null,
};

export default OutlinedButton;
