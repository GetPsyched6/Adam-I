import React from 'react';
import styles from './SectionTwo.module.css';
import Cards from '../../../components/Cards/Cards';
import investData from '../../../data/whyinvest';

function SectionTwo() {
  return (
    <div className={styles.wrapper}>
      {investData.map(data => (
        <Cards
          key={data.id}
          title={data.title}
          image={data.image}
          alt={data.alt}
          body={data.body}
        />
      ))}
    </div>
  );
}

export default SectionTwo;
