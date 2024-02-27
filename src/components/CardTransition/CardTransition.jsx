import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useMediaQuery } from '@react-hook/media-query';
import PropTypes from 'prop-types';
import Cards from '../Cards/Cards';

export default function CardTransition(props) {
  const shouldReduceMotion = useReducedMotion();
  const parentVariants = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };
  const childVariants = {
    initial: {
      translateY: '200px',
    },
    enter: {
      translateY: 0,
      transition: { ease: 'easeOut' },
    },
  };

  const isTablet = useMediaQuery('(max-width: 992px)');
  const isMobile = useMediaQuery('(max-width: 600px)');

  const getAmountByScreenSize = () => {
    if (isMobile) return 'some';
    if (isTablet) return 0.5;
    return 0.75;
  };
  const { object, className, color, isGreen } = props;

  const reducedParentMotionProps = shouldReduceMotion
    ? {}
    : {
        variants: parentVariants,
        initial: 'initial',
        whileInView: 'enter',
        viewport: { once: true, amount: getAmountByScreenSize() },
      };

  const reducedChildMotionProps = shouldReduceMotion ? {} : { variants: childVariants };

  return (
    <motion.div
      className={className}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...reducedParentMotionProps}
    >
      {object.map(data => (
        <motion.div
          key={data.id}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...reducedChildMotionProps}
        >
          <Cards
            key={data.id}
            title={data.title}
            image={data.image}
            alt={data.alt}
            color={color}
            body={data.body}
            isGreen={isGreen}
            linkUrl={data.linkUrl}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

CardTransition.propTypes = {
  object: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  isGreen: PropTypes.bool,
};

CardTransition.defaultProps = {
  className: null,
  color: null,
  isGreen: false,
};
