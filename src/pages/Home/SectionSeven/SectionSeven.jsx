import React from 'react';
import styles from './SectionSeven.module.css';
import ContactUs from '../../../components/Button/OutlinedButton/OutlinedButton';

function SectionSeven() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <ContactUs />
        <h2 className={styles.title}>
          Partner with us to build
          <br />
          Prosperity for Africa.
        </h2>
      </div>
    </div>
  );
}

export default SectionSeven;
