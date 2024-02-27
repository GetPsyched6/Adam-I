/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@react-hook/media-query';
import PropTypes from 'prop-types';
import Cards from '../Cards/Cards';
import useStaggered from '../../hooks/useStaggered';

export default function CardTransition(props) {
  const { object, className, color, isGreen, amountList } = props;

  const isTablet = useMediaQuery('(max-width: 992px)');
  const isMobile = useMediaQuery('(max-width: 600px)');
  const getAmountByScreenSize = () => {
    if (isMobile) return amountList[2];
    if (isTablet) return amountList[1];
    return amountList[0];
  };
  const { reducedParentMotionProps, reducedChildMotionProps } = useStaggered({
    amount: getAmountByScreenSize(),
    translate: 200,
  });

  return (
    <motion.div className={className} {...reducedParentMotionProps}>
      {object.map(data => (
        <motion.div key={data.id} {...reducedChildMotionProps}>
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
  amountList: PropTypes.array,
};

CardTransition.defaultProps = {
  className: null,
  color: null,
  isGreen: false,
  amountList: [0.75, 0.5, 'some'],
};
