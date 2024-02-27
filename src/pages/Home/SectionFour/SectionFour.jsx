/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { motion } from 'framer-motion';
import styles from './SectionFour.module.css';
import oppurtunities from '../../../data/oppurtunities';
import FadeTransition from '../../../components/FadeTransition/FadeTransition';
import useStaggered from '../../../hooks/useStaggered';

function SectionFour() {
  const { reducedParentMotionProps, reducedChildMotionProps } = useStaggered();
  return (
    <div className={styles.wrapper}>
      <div className={styles.background} />
      <div className={styles.content}>
        <FadeTransition bottom={-100} translate={25} scrollAnimation amount="all">
          <h2 className={`${styles.text} ${styles.title}`}>
            Crafting Tomorrow&apos;s Success Stories Today
          </h2>
        </FadeTransition>
        <motion.div className={styles.body_wrapper} {...reducedParentMotionProps}>
          {oppurtunities.map(data => (
            <motion.p
              key={data.id}
              className={`${styles.text} ${styles.text_wrapper}`}
              {...reducedChildMotionProps}
            >
              <span className={styles.mini_title}>{data.title}</span>
              {data.body}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default SectionFour;
