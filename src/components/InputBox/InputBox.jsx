import React, { useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { FaChevronDown } from 'react-icons/fa6';
import { AiOutlineInfoCircle } from 'react-icons/ai';
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
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const toggleTooltip = () => {
    setIsTooltipOpen(!isTooltipOpen);
  };

  const { message, isDropdown, label, id, size, tooltip, isAddress, children } = props;
  const options = children;

  const isTablet = useMediaQuery('(max-width: 992px)');
  const isMobile = useMediaQuery('(max-width: 600px)');
  const wrapperClass = getResponsiveClassName(size, isAddress, isTablet, isMobile);
  const addressHeight = isAddress ? '10rem' : '';

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={id}>
        {label}
        {tooltip ? (
          <button
            type="button"
            aria-label="Input field information"
            aria-haspopup="true"
            aria-expanded={isTooltipOpen}
            className={styles.infoButton}
            onMouseEnter={toggleTooltip}
            onMouseLeave={toggleTooltip}
            onFocus={toggleTooltip}
            onBlur={toggleTooltip}
            data-tooltip-id={tooltip}
          >
            <AiOutlineInfoCircle />
          </button>
        ) : (
          ''
        )}
      </label>
      <div className={`${styles.input_wrapper} ${wrapperClass}`} style={{ height: addressHeight }}>
        {!isDropdown ? (
          <TextBox parentProps={props} wrapperClass={wrapperClass} addressHeight={addressHeight} />
        ) : (
          <DropdownBox parentProps={props} wrapperClass={wrapperClass} options={options} />
        )}
        {isDropdown && <FaChevronDown className={styles.icon} />}
      </div>
      <div className={styles.message}>{message}</div>
    </div>
  );
}

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  message: PropTypes.string,
  tooltip: PropTypes.string,
  isDropdown: PropTypes.bool,
  isAddress: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'small']),
  children: PropTypes.node,
};

InputBox.defaultProps = {
  message: '',
  tooltip: '',
  isDropdown: false,
  isAddress: false,
  size: 'large',
  children: '',
};

export default InputBox;
