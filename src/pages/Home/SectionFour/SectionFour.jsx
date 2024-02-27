import React from 'react';
import styles from './SectionFour.module.css';
import oppurtunities from '../../../data/oppurtunities';
import FadeTransition from '../../../components/FadeTransition/FadeTransition';

function SectionFour() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <FadeTransition bottom={-100} translate={25} scrollAnimation amount="all">
          <h2 className={`${styles.text} ${styles.title}`}>
            Crafting Tomorrow&apos;s Success Stories Today
          </h2>
        </FadeTransition>
        <div className={styles.body_wrapper}>
          {oppurtunities.map(data => (
            <p key={data.id} className={`${styles.text} ${styles.text_wrapper}`}>
              <span className={styles.mini_title}>{data.title}</span>
              {data.body}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
