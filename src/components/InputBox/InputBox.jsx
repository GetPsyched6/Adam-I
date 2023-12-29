import React from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './InputBox.module.css';

function getContainerClass(size) {
  return classNames({
    [styles.size_xlarge]: size === 'xlarge',
    [styles.size_large]: size === 'large',
    [styles.size_small]: size === 'small',
    [styles.size_tablet_xlarge]: size === 'tablet_xlarge',
    [styles.size_tablet_large]: size === 'tablet_large',
    [styles.size_tablet_small]: size === 'tablet_small',
    [styles.size_mobile_large]: size === 'mobile_large',
    [styles.size_mobile_small]: size === 'mobile_small',
  });
}

function InputBox(props) {
  const {
    isDropdown,
    value,
    name,
    onChange,
    label,
    id,
    disabled,
    required,
    size,
    hasAddress,
    children,
  } = props;

  const wrapperClass = getContainerClass(size);
  const addressHeight = hasAddress ? '10rem' : '';

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={id}>
        {label}
        <div className={`${styles.input_wrapper} ${wrapperClass}`}>
          {!isDropdown ? (
            <input
              type="text"
              className={`${styles.input} ${wrapperClass}`}
              value={value}
              onChange={onChange}
              id={id}
              disabled={disabled}
              required={required}
              style={{ height: addressHeight }}
            />
          ) : (
            <select
              className={`${styles.input} ${wrapperClass}`}
              name={name}
              id={id}
              value={value}
              disabled={disabled}
              required={required}
              onChange={onChange}
              style={{ height: addressHeight }}
            >
              <option value="" disabled hidden>
                Select...
              </option>
              {children}
            </select>
          )}
          {isDropdown && <FaChevronDown className={styles.icon} />}
        </div>
      </label>
    </div>
  );
}

InputBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isDropdown: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  hasAddress: PropTypes.bool,
  size: PropTypes.oneOf([
    'large',
    'xlarge',
    'small',
    'tablet_xlarge',
    'tablet_large',
    'tablet_small',
    'mobile_large',
    'mobile_small',
  ]),
  children: PropTypes.node,
};

InputBox.defaultProps = {
  isDropdown: false,
  name: '',
  value: '',
  disabled: false,
  required: false,
  hasAddress: false,
  size: 'large',
  children: '',
};

export default InputBox;
