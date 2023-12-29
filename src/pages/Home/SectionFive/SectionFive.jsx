import React from 'react';
import styles from './SectionFive.module.css';
import Cards from '../../../components/Cards/Cards';
import industries from '../../../data/industries';

function SectionFive() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title_wrapper}>
        <h2 className={styles.title}>Our leading Industires</h2>
      </div>
      <div className={styles.card_wrapper}>
        {industries.map(data => (
          <Cards
            key={data.id}
            title={data.title}
            image={data.image}
            alt={data.alt}
            linkUrl={data.linkUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default SectionFive;
