import React from 'react';

import nipc from '../../../assets/nipc.png';
import styles from './InvestmentSupport.module.css';

function InvestmentSupport() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles.title}>Investment Support and Resources</h2>

        <div className={styles.info}>
          <p>
            Nigerian Investment Promotion Commission (NIPC): The NIPC serves as your guide to
            investing in Nigeria. They offer valuable insights, facilitate business registration,
            and provide investment incentives.
          </p>
          <img src={nipc} alt="NIPC Logo" className={styles.logo} />
        </div>
      </div>
    </div>
  );
}

export default InvestmentSupport;
