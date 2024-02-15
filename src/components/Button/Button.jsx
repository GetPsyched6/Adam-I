import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button(props) {
  const { isAction, text, isDisabled, isSubmit, onClick } = props;
  return (
    <div className={styles.wrapper}>
      <button
        type={isSubmit ? 'submit' : 'button'}
        className={`${styles.button} ${isAction ? styles.action : ''}`}
        onClick={onClick}
        disabled={isDisabled}
      >
        <span className={styles.text}>{text}</span>
      </button>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  isSubmit: PropTypes.bool,
  isAction: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  isDisabled: false,
  isSubmit: false,
  isAction: false,
};

export default Button;
