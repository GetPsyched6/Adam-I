import React from 'react';
import InvestmentSupport from '../../components/Countries/InvestmentSupport/InvestmentSupport';
import ImportExport from '../../components/Countries/ImportExport/ImportExport';
import ImportSubstituition from '../../components/Countries/ImportSubstituition/ImportSubstituition';
import SectionThree from './SectionThree/SectionThree';
import SectionFour from './SectionFour/SectionFour';

import styles from './Nigeria.module.css';

function Nigeria() {
  return (

    <div className={styles.card_wrapper} id="nigeria" role="main">
            <h1>Nigeria</h1>
      <InvestmentSupport />
      <br />
      <ImportExport />
      <br />
      <ImportSubstituition />
      <br />
      <SectionThree />
      <SectionFour />
    </div>
  );
}

export default Nigeria;
