import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import styles from './SectionSeven.module.css';
import ContactUs from '../../../components/Button/OutlinedButton/OutlinedButton';

function SectionSeven() {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });
  const motionY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y = shouldReduceMotion ? 0 : motionY;
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
