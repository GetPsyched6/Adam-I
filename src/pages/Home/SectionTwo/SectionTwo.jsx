import React from 'react';
import styles from './SectionTwo.module.css';

function SectionTwo() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={`${styles.text} ${styles.title}`}>Why Invest in Africa?</h1>
      </div>
    </div>
  );
}

export default SectionTwo;
