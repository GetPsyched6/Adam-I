/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useMediaQuery } from '@react-hook/media-query';
import propTypes from 'prop-types';
import FadeTransition from '../../../components/FadeTransition/FadeTransition';
import useStaggered from '../../../hooks/useStaggered';
import styles from './Commitment.module.css';

function Commitment(props) {
  const { title, background, body } = props;
  const { reducedParentMotionProps, reducedChildMotionProps } = useStaggered();
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useMediaQuery('(max-width: 600px)');
  const reducedMotionProps =
    shouldReduceMotion || isMobile
      ? {}
      : {
          initial: { borderRadius: '3rem', inset: '18px' },
          whileInView: { borderRadius: '0rem', inset: '0px' },
          transition: { duration: 0.5, ease: [0, 0, 0.5, 1] },
          viewport: { amount: 0.5 },
        };

  const backgroundStyle = {
    backgroundImage: `url(${background})`,
  };

  return (
    <div className={styles.wrapper}>
      <motion.div className={styles.background} style={backgroundStyle} {...reducedMotionProps} />
      <div className={styles.content}>
        <FadeTransition bottom={-100} translate={25} scrollAnimation amount="all">
          <h2 className={`${styles.text} ${styles.title}`}>{title}</h2>
        </FadeTransition>
        <motion.div className={styles.body_wrapper} {...reducedParentMotionProps}>
          {body.map(data => (
            <motion.p
              key={data.id}
              className={`${styles.text} ${styles.text_wrapper}`}
              {...reducedChildMotionProps}
            >
              <span className={styles.mini_title}>{data.title}</span>
              <span dangerouslySetInnerHTML={{ __html: data.body }} />
            </motion.p>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

Commitment.propTypes = {
  title: propTypes.string.isRequired,
  background: propTypes.string.isRequired,
  body: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
      body: propTypes.string.isRequired,
    })
  ).isRequired,
};

export default Commitment;
