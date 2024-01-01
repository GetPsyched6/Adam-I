import React from 'react';
import styles from './SectionFour.module.css';
import oppurtunities from '../../../data/oppurtunities';

function SectionFour() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={`${styles.text} ${styles.title}`}>
          Crafting Tomorrow&apos;s Success Stories Today
        </h2>
        <div className={styles.body_wrapper}>
          {oppurtunities.map(data => {
            return (
              <h5 className={`${styles.text} ${styles.text_wrapper}`}>
                <span className={styles.mini_title}>{data.title}</span>
                {data.body}
              </h5>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
