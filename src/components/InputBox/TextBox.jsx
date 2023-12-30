import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputBox.module.css';

function TextBox(props) {
  const { value, name, onChange, id, disabled, required, wrapperClass, addressHeight } = props;
  // ? addressHeight is true if isAddress is true.
  return (
    <div className={styles.textbox_wrapper}>
      {addressHeight ? (
        <textarea
          className={`${styles.input} ${wrapperClass}`}
          name={name}
          value={value}
          onChange={onChange}
          id={id}
          disabled={disabled}
          required={required}
          style={{ height: addressHeight, resize: 'none', paddingBlock: '1rem' }}
        />
      ) : (
        <input
          type="text"
          className={`${styles.input} ${wrapperClass}`}
          name={name}
          value={value}
          onChange={onChange}
          id={id}
          disabled={disabled}
          required={required}
        />
      )}
    </div>
  );
}

TextBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  wrapperClass: PropTypes.string.isRequired,
  addressHeight: PropTypes.string.isRequired,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

TextBox.defaultProps = {
  value: '',
  disabled: false,
  required: false,
};

export default TextBox;
