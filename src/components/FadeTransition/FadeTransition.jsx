import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

export default function FadeTransition(props) {
  const {
    children,
    keys,
    mode,
    duration,
    variants,
    className,
    style,
    translate,
    scrollAnimation,
    once,
    amount,
    top,
    bottom,
    staggerChildren,
  } = props;

  const syncVariants = {
    initial: { opacity: 0, translateY: `${translate}px` },
    enter: {
      opacity: 1,
      translateY: '0px',
      transition: { duration: duration / 2, staggerChildren },
    },
    exit: { opacity: 0, translateY: `${translate}px`, transition: { duration: duration / 2 } },
  };
  const waitVariants = {
    initial: { opacity: 0, translateY: `${translate}px` },
    enter: {
      opacity: 1,
      translateY: '0px',
      transition: { duration: duration / 2, delay: duration / 2, staggerChildren },
    },
    exit: { opacity: 0, translateY: `${translate}px`, transition: { duration: duration / 2 } },
  };
  const chosenVariants = variants === 'sync' ? syncVariants : waitVariants;

  const animationProps = scrollAnimation
    ? { whileInView: 'enter', viewport: { once, amount, margin: `${top}px 0px ${bottom}px 0px` } }
    : { animate: 'enter', exit: 'exit' };

  return (
    <AnimatePresence mode={mode}>
      <motion.div
        key={keys}
        initial="initial"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...animationProps}
        variants={chosenVariants}
        className={className}
        style={style}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

FadeTransition.propTypes = {
  keys: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  variants: PropTypes.oneOf(['sync', 'wait']),
  mode: PropTypes.oneOf(['sync', 'wait', 'popLayout']),
  duration: PropTypes.number,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  translate: PropTypes.number,
  scrollAnimation: PropTypes.bool,
  once: PropTypes.bool,
  amount: PropTypes.oneOfType([PropTypes.oneOf(['some', 'all']), PropTypes.number]),
  top: PropTypes.number,
  bottom: PropTypes.number,
  staggerChildren: PropTypes.number,
};

FadeTransition.defaultProps = {
  keys: null,
  className: '',
  variants: 'sync',
  mode: 'sync',
  duration: 0.5,
  style: {},
  translate: 0,
  scrollAnimation: false,
  once: true,
  amount: 'some',
  top: '0',
  bottom: '0',
  staggerChildren: 0,
};
