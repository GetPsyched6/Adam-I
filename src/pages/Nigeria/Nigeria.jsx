import SectionThree from './SectionThree/SectionThree';
import SectionFour from './SectionFour/SectionFour';
import styles from './Nigeria.module.css';

function Nigeria() {
  return (
    <div className={styles.card_wrapper} id="nigeria" role="main">
      <SectionThree />
      <SectionFour />
    </div>
  );
}

export default Nigeria;
