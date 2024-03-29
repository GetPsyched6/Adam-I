import CardTransition from '../../../components/CardTransition/CardTransition';
import FadeTransition from '../../../components/FadeTransition/FadeTransition';
import styles from './SectionThree.module.css';
import nigeriaData from '../../../data/nigeriaData';

function SectionThree() {
  return (
    <div className={styles.wrapper} id="nigeria" role="main">
      <FadeTransition bottom={-100} translate={25} scrollAnimation amount="all">
        <h2 className={`${styles.text} ${styles.title}`}>Investment Oportunities</h2>
      </FadeTransition>
      <CardTransition className={styles.card_wrapper} object={nigeriaData} color="yellow" />
    </div>
  );
}

export default SectionThree;
