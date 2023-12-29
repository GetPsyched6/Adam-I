import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button(props) {
  const { isAction, text } = props;
  return (
    <div className={styles.wrapper}>
      <button type="button" className={`${styles.button} ${isAction ? styles.action : ''}`}>
        <span className={styles.text}>{text}</span>
      </button>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isAction: PropTypes.bool,
};

Button.defaultProps = {
  isAction: false,
};

export default Button;
