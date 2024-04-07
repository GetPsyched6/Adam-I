import PieChartX from './PieChartX';
import PieChartI from './PieChartI';
import PieChartE from './PieChartE';
import OutlineButton from '../../../components/Button/OutlinedButton/OutlinedButton';
import boatbg from '../../../assets/images/Nigeria/SectionFive/boat_background.webp';
import importSubstitution from '../../../assets/images/Nigeria/SectionFive/import_substitution.webp';
import styles from './SectionFive.module.css';

function SectionFive() {
  return (
    <div className={styles.wrapper}>
      {/* pie chart */}
      <div className={styles.pie_chart_wrapper}>
        <div className={styles.title}>
          <h2>Distribution Of GDP Across Economic Sectors</h2>
          <PieChartX />
        </div>
      </div>
      {/* Import and Export */}
      <div className={styles.import_and_export}>
        <img src={boatbg} alt="boatbg" />
        <div className={styles.import_and_export_overlay} />
        <div className={styles.import_and_export_content_wrapper}>
          <h2 className={styles.import_and_export_title}>Imports and Exports</h2>
          <h3 className={styles.import_and_export_subheading}>Nigeria's Robust Trade Growth</h3>
          <p className={styles.import_and_export_content}>
            In 2021, Nigeria's intra-African trade surged by 21.7% to US$9.65 billion,
            <br /> elevating its status as the 3rd largest intra-African trading nation.
            <br />
            Despite crude oil dominating exports to African partners, only 3.3% of
            <br /> Nigeria's total imports came from the continent.
          </p>
          <OutlineButton text="Learn More" />
        </div>
      </div>
      {/* Major Imports */}
      {/* <div className={styles.major_imports_wrapper}>
        <h2 className={styles.major_imports_title}>Major Imports</h2>
      </div> */}
      {/* Import PieChart */}
      <div className={styles.import_pie_chart_wrapper}>
        <h2 className={styles.import_pie_chart_title}>Main Import Partners</h2>
        <PieChartI />
      </div>
      {/* import substitution banner */}
      <div className={styles.import_substitution_banner}>
        <img src={importSubstitution} className={styles.import_substitution_banner_image} />
        <div className={styles.import_substitution_banner_overlay} />
        <div className={styles.import_substitution_banner_content}>
          <h2 className={styles.import_substitution_banner_title}>Import Substitution</h2>
          <h4 className={styles.import_substitution_banner_subheading}>
            Backward Integration Option
          </h4>
          <p className={styles.import_substitution_banner_main_content}>
            The Central Bank Of Nigeria CBN in July 2019 rolled <br />
            out a new policy to encourage backward integration <br />
            for the local production of selected items.
          </p>
        </div>
      </div>
      Major Exports
      {/* <div className={styles.major_imports_wrapper}>
        <h2 className={styles.major_imports_title}>Major Exports</h2>
      </div> */}
      {/* Export PieChart */}
      <div className={styles.import_pie_chart_wrapper}>
        <h2 className={styles.import_pie_chart_title}>Main Export Partners</h2>
        <PieChartE />
      </div>
    </div>
  );
}

export default SectionFive;
