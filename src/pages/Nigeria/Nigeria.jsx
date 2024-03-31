import SectionTwo from './SectionTwo/SectionTwo';
import SectionThree from './SectionThree/SectionThree';
import SectionFive from './SectionFive/SectionFive';
import Footer from '../../components/Footer/Footer';
import styles from './Nigeria.module.css';

function Nigeria() {
  return (
    <div className={styles.wrapper} id="nigeria" role="main">
      <SectionTwo className={styles.section_two} />
      <SectionThree />
      <SectionFive />
      <Footer />
    </div>
  );
}

export default Nigeria;
