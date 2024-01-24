import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button(props) {
  const { isAction, text, isSubmit, onClick } = props;
  return (
    <div className={styles.wrapper}>
      <button
        type={isSubmit ? 'submit' : 'button'}
        className={`${styles.button} ${isAction ? styles.action : ''}`}
        onClick={onClick}
      >
        <span className={styles.text}>{text}</span>
      </button>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isSubmit: PropTypes.bool,
  isAction: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  isSubmit: false,
  isAction: false,
};

export default Button;
