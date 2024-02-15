import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Alert.module.css';

function Alert(props) {
  const { message, state, isActive } = props;
  const wrapperRef = useRef(null);
  const messageRef = useRef(null);
  const [wrapperWidth, setWrapperWidth] = useState('3rem');

  useEffect(() => {
    const colors = {
      success: {
        bubbleColor: 'var(--clr-lgreen)',
        boxShadowColorInitial: 'var(--clr-lgreen)',
        boxShadowColorMid: 'var(--clr-green)',
      },
      error: {
        bubbleColor: 'var(--clr-lred)',
        boxShadowColorInitial: 'var(--clr-lred)',
        boxShadowColorMid: 'var(--clr-red)',
      },
      neutral: {
        bubbleColor: 'var(--clr-lyellow)',
        boxShadowColorInitial: 'var(--clr-lyellow)',
        boxShadowColorMid: 'var(--clr-yellow)',
      },
    };

    const colorState = colors[state] || colors.neutral;

    if (wrapperRef.current) {
      wrapperRef.current.style.setProperty('--bubble-color', colorState.bubbleColor);
      wrapperRef.current.style.setProperty(
        '--box-shadow-color-initial',
        colorState.boxShadowColorInitial
      );
      wrapperRef.current.style.setProperty('--box-shadow-color-mid', colorState.boxShadowColorMid);
    }
  }, [state]);

  useEffect(() => {
    if (isActive && messageRef.current) {
      const messageWidth = messageRef.current.offsetWidth;
      const padding = 40;
      setWrapperWidth(`${messageWidth + padding}px`);
    } else {
      setWrapperWidth('3rem');
    }
  }, [isActive, message]);

  return ReactDOM.createPortal(
    <div
      ref={wrapperRef}
      className={`${styles.wrapper} ${isActive ? styles.wrapper_active : ''}`}
      style={{ width: wrapperWidth }}
    >
      <div
        className={`${styles.background_wrapper} ${
          isActive ? styles.background_wrapper_active : ''
        }`}
      />
      <div className={`${styles.alert_wrapper} ${isActive ? styles.alert_wrapper_active : ''}`}>
        <span
          ref={messageRef}
          className={`${styles.message} ${isActive ? styles.message_active : ''}`}
        >
          {message}
        </span>
      </div>
    </div>,
    document.getElementById('root')
  );
}

Alert.propTypes = {
  message: PropTypes.string,
  state: PropTypes.oneOf(['success', 'neutral', 'error', '']),
  isActive: PropTypes.bool,
};

Alert.defaultProps = {
  message: '',
  state: 'neutral',
  isActive: false,
};

export default Alert;
