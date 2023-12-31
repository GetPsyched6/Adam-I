import React from 'react';
import styles from './SectionOne.module.css';

function SectionOne() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={`${styles.text} ${styles.title}`}>Invest in Africa</h1>
        <h4 className={`${styles.text} ${styles.subtitle}`}>
          Shaping Tomorrow Together,
          <br />
          Invest in Africa&apos;s Potential.
        </h4>
      </div>
    </div>
  );
}

export default SectionOne;
