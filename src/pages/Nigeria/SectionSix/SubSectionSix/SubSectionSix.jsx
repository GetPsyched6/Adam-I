/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useMediaQuery } from '@react-hook/media-query';
import styles from './SubSectionSix.module.css';
import data from '../../../../data/Nigeria/regionalTradeCommitment';
import FadeTransition from '../../../../components/FadeTransition/FadeTransition';
import useStaggered from '../../../../hooks/useStaggered';

function SectionFour() {
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

  return (
    <div className={styles.wrapper}>
      <motion.div className={styles.background} {...reducedMotionProps} />
      <div className={styles.content} style={{ paddingLeft: '20%' }}>
        <FadeTransition bottom={-100} translate={25} scrollAnimation amount="all">
          <h2 className={`${styles.text} ${styles.title}`}>
            Crafting Tomorrow&apos;s Success Stories Today
          </h2>
        </FadeTransition>
        <motion.div className={styles.body_wrapper} {...reducedParentMotionProps}>
          {data.map(data => (
            <motion.p
              key={data.id}
              className={`${styles.text} ${styles.text_wrapper}`}
              {...reducedChildMotionProps}
            >
              <span className={styles.mini_title}>{data.title}</span>
              {data.body}
            </motion.p>
          ))}

          <motion.p
            className={`${styles.text} ${styles.text_wrapper}`}
            {...reducedChildMotionProps}
          >
            <span className={styles.mini_title}>
              -Trade Report:Leading Intra Africa trading nation in 2021:
            </span>

            <ol style={{ listStyleType: 'decimal' }}>
              <li>South Africa</li>
              <li>DRC</li>
              <li>Nigeria</li>
              <li>Algeria</li>
            </ol>
            <p>~African trade report 2022</p>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default SectionFour;
