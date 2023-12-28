/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from './DropdownBox.module.css';

function DropdownBox(props) {
  const { width, id, name, onChange, disabled, required, placeholder, children } = props;
  const widthMappings = {
    small: '12rem',
    medium: '20rem',
    large: '28rem',
  };
  const dropdownBoxWidth = widthMappings[width] || widthMappings.medium;

  return (
    <div className={styles.wrapper} style={{ width: dropdownBoxWidth }}>
      <select
        className={styles.dropdownbox}
        name={name}
        id={id}
        disabled={disabled}
        required={required}
        onChange={onChange}
        style={{ width: dropdownBoxWidth }}
      >
        <option value="" disabled selected hidden>
          {placeholder}
        </option>
        {children}
      </select>
      <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />
    </div>
  );
}

DropdownBox.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  width: PropTypes.oneOf(['small', 'medium', 'large']),
  placeholder: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

DropdownBox.defaultProps = {
  name: '',
  id: '',
  disabled: false,
  required: false,
  width: 'medium',
};

export default DropdownBox;
