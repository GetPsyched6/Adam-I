/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextBox.module.css';

function TextBox(props) {
  const { value, onChange, placeholder, id, disabled, required, width } = props;
  const widthMappings = {
    small: '12rem',
    medium: '20rem',
    large: '28rem',
  };
  const textboxWidth = widthMappings[width] || widthMappings.medium;

  return (
    <input
      type="text"
      className={styles.textbox}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      id={id}
      disabled={disabled}
      required={required}
      style={{ width: textboxWidth }}
    />
  );
}

TextBox.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  width: PropTypes.oneOf(['small', 'medium', 'large']),
};

TextBox.defaultProps = {
  value: '',
  id: '',
  disabled: false,
  required: false,
  width: 'medium',
};

export default TextBox;
