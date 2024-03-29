import React from "react";

import InvestmentSupport from "../../components/Countries/InvestmentSupport/InvestmentSupport";
import ImportExport from "../../components/Countries/ImportExport/ImportExport";
import ImportSubstituition from "../../components/Countries/ImportSubstituition/ImportSubstituition";
import styles from './Nigeria.module.css';

function Nigeria() {
  return (
    <div className={styles.content}>
      <h1>Nigeria</h1>
      <InvestmentSupport />
      <br />
      <ImportExport />
      <br />
      <ImportSubstituition />
      <br />
    </div>
  );
}

export default Nigeria;
