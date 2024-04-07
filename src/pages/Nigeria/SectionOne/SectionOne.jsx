import React, { useEffect, useState } from 'react';
import investNigeria from '../../../assets/images/Nigeria/SectionOne/InvestInNigeria.webp';
import styles from './SectionOne.module.css';

function SectionOne() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`${styles.wrapper} ${loaded ? styles.loaded : ''}`}>
      <img src={investNigeria} alt="Invest Nigeria" className={styles.invest_nigeria} />
      <div className={styles.content_wrapper}>
        <h2 className={`${styles.title} ${loaded ? styles.titleLoaded : ''}`}>Invest In Nigeria</h2>
        <p className={`${styles.content} ${loaded ? styles.contentLoaded : ''}`}>
          Unlocking Opportunities in Africa's Largest Economy
        </p>
      </div>
    </div>
  );
}

export default SectionOne;
