import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

export default function FadeTransition(props) {
  const { children, keys, mode, duration, variants, className, style } = props;
  const syncVariants = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: duration / 2 } },
    exit: { opacity: 0, transition: { duration: duration / 2 } },
  };
  const waitVariants = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: duration / 2, delay: duration / 2 } },
    exit: { opacity: 0, transition: { duration: duration / 2 } },
  };
  const chosenVariants = variants === 'sync' ? syncVariants : waitVariants;

  return (
    <AnimatePresence mode={mode}>
      <motion.div
        key={keys}
        initial="initial"
        animate="enter"
        exit="exit"
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
  keys: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]).isRequired,
  variants: PropTypes.oneOf(['sync', 'wait']).isRequired,
  mode: PropTypes.oneOf(['sync', 'wait', 'popLayout']).isRequired,
  duration: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

FadeTransition.defaultProps = {
  className: '',
  style: {},
};
