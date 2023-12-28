import React from 'react';
import styles from './Section1.module.css';

function Section1() {
  return (
    <div className={styles.home_sec1}>
      <div className={styles.s1_img}>
        <div className={styles.s1_text}>
          <p className={styles.h1}>Invest in Africa</p>
          <p className={styles.h2}>
            Shaping Tomorrow Together,
            <br />
            Invest in Africa&apos;s Potential.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
