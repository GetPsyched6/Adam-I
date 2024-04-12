import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useMediaQuery } from '@react-hook/media-query';
import styles from './SectionSeven.module.css';
import ContactUs from '../../../components/Button/OutlinedButton/OutlinedButton';

function getMaxPercentage(isNotDesktop) {
  if (isNotDesktop) return '35vh';
  return '40vh';
}

function SectionSeven() {
  const isNotDesktop = useMediaQuery('(max-width: 992px)');

  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });
  const maxPercentage = getMaxPercentage(isNotDesktop);
  const motionY = useTransform(scrollYProgress, [0, 1], ['0vh', maxPercentage]);
  const y = shouldReduceMotion ? '0vh' : motionY;
  return (
    <motion.div className={styles.wrapper} ref={ref}>
      <motion.div className={styles.content} style={{ y }}>
        <h2 className={styles.title}>
          Partner with us to build
          <br />
          Prosperity for Africa.
        </h2>
        <ContactUs />
      </motion.div>
    </motion.div>
  );
}

export default SectionSeven;
