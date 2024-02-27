import React from 'react';
import styles from './SectionFive.module.css';
import industries from '../../../data/industries';
import FadeTransition from '../../../components/FadeTransition/FadeTransition';
import CardTransition from '../../../components/CardTransition/CardTransition';

function SectionFive() {
  return (
    <div className={styles.wrapper} id="industries">
      <FadeTransition
        className={styles.title_wrapper}
        bottom={-100}
        translate={25}
        scrollAnimation
        amount="all"
      >
        <h2 className={styles.title}>Our leading Industires</h2>
      </FadeTransition>
      <CardTransition
        className={styles.card_wrapper}
        object={industries}
        amountList={[0.25, 'some', 'some']}
      />
    </div>
  );
}

export default SectionFive;
