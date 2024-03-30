import React from 'react';
import FadeTransition from '../../../components/FadeTransition/FadeTransition';
import CardTransition from '../../../components/CardTransition/CardTransition';
import styles from './SectionThree.module.css';
import investData from '../../../data/Nigeria/whyInvestNigeria';

function SectionFour() {
  return (
    <div className={styles.wrapper} id="whyafrica" role="main">
      <FadeTransition bottom={-100} translate={25} scrollAnimation amount="all">
        <h2 className={`${styles.text} ${styles.title}`}>Why Invest in Nigeria?</h2>
      </FadeTransition>
      <CardTransition className={styles.card_wrapper} object={investData} color="yellow" />
    </div>
  );
}

export default SectionFour;
