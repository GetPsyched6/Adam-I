import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { FaChevronDown } from 'react-icons/fa6';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './InputBox.module.css';
import TextBox from './TextBox';
import DropdownBox from './DropdownBox';

function getResponsiveClassName(size, isAddress, isTablet, isMobile) {
  if (isAddress) {
    // ?If isAddress is true, always use the largest size for the respective media query
    if (isMobile) {
      return styles.size_mobile_large;
    }
    if (isTablet) {
      return styles.size_tablet_xlarge;
    }
    return styles.size_xlarge;
  }
  // ?Regular size handling
  if (isMobile) {
    return classNames({
      [styles.size_mobile_large]: size === 'large',
      [styles.size_mobile_small]: size === 'small',
    });
  }
  if (isTablet) {
    return classNames({
      [styles.size_tablet_large]: size === 'large',
      [styles.size_tablet_small]: size === 'small',
    });
  }
  return classNames({
    [styles.size_large]: size === 'large',
    [styles.size_small]: size === 'small',
  });
}

function InputBox(props) {
  const { isDropdown, label, id, size, isAddress, children } = props;
  const options = children;

  const isTablet = useMediaQuery('(max-width: 992px)');
  const isMobile = useMediaQuery('(max-width: 600px)');
  const wrapperClass = getResponsiveClassName(size, isAddress, isTablet, isMobile);
  const addressHeight = isAddress ? '10rem' : '';

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div className={`${styles.input_wrapper} ${wrapperClass}`} style={{ height: addressHeight }}>
        {!isDropdown ? (
          <TextBox props={props} wrapperClass={wrapperClass} addressHeight={addressHeight} />
        ) : (
          <DropdownBox
            props={props}
            wrapperClass={wrapperClass}
            addressHeight={addressHeight}
            options={options}
          />
        )}
        {isDropdown && <FaChevronDown className={styles.icon} />}
      </div>
    </div>
  );
}

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isDropdown: PropTypes.bool,
  isAddress: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'small']),
  children: PropTypes.node,
};

InputBox.defaultProps = {
  isDropdown: false,
  isAddress: false,
  size: 'large',
  children: '',
};

export default InputBox;
