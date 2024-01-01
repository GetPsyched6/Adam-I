import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputBox.module.css';

function DropdownBox(props) {
  const { value, name, onChange, id, disabled, required, options, wrapperClass } = props;
  return (
    <div className={styles.dropdownbox_wrapper}>
      <select
        className={`${styles.input} ${wrapperClass}`}
        name={name}
        id={id}
        value={value}
        disabled={disabled}
        required={required}
        onChange={onChange}
      >
        <option value="" disabled hidden>
          Select...
        </option>
        {options}
      </select>
    </div>
  );
}

DropdownBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  wrapperClass: PropTypes.string.isRequired,
  options: PropTypes.node.isRequired,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

DropdownBox.defaultProps = {
  value: '',
  disabled: false,
  required: false,
};

export default DropdownBox;
