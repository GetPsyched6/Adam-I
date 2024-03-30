import SectionTwo from './SectionTwo/SectionTwo';
import SectionThree from './SectionThree/SectionThree';
import Footer from '../../components/Footer/Footer';
import styles from './Nigeria.module.css';

function Nigeria() {
  return (
    <div className={styles.card_wrapper} id="nigeria" role="main">
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>
  );
}

export default Nigeria;
