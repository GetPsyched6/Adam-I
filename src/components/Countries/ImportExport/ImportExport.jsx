import React from 'react';

import styles from './ImportExport.module.css';

function ImportExport() {
  return (
    <div className={styles.content}>
      <div className={styles.desc}>
        <h3> Imports and Exports</h3>
        <h2 className={styles.heading}> Nigeria's Robust Trade Growth</h2>
        <br />
        <p>
          In 2021, Nigeria's intra-African trade surged by 21.7% to US$9.65 billion, elevating its
          status as the 3rd largest intra-African trading nation. Despite crude oil dominating
          exports to African partners, only 3.3% of Nigeria's total imports came from the continent.
        </p>
        <br />
        <button className={styles.learnMore}>LEARN MORE</button>
      </div>
    </div>
  );
}
export default ImportExport;
