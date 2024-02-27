/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { motion } from 'framer-motion';
import styles from './SectionSix.module.css';
import stories from '../../../data/successStories';
import useStaggered from '../../../hooks/useStaggered';

function SectionSix() {
  const { reducedParentMotionProps, reducedChildMotionProps } = useStaggered({
    amount: 0.3,
    translate: 100,
  });
  return (
    <div className={styles.wrapper}>
      <h2 className={`${styles.text} ${styles.title}`}>Success Stories</h2>
      <motion.div className={styles.content_wrapper} {...reducedParentMotionProps}>
        {stories.map(data => (
          <motion.div key={data.id} className={styles.stories_wrapper} {...reducedChildMotionProps}>
            <img src={data.image} alt="youtube thumbnail" className={styles.thumbnail} />
            <div className={styles.body_wrapper}>
              <h5 className={styles.body_title}>{data.title}</h5>
              <p className={styles.body_description}>&quot;{data.body}&quot;</p>
              <p className={styles.body_footer}>{data.footer}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default SectionSix;
