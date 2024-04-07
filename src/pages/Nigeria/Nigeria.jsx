import SectionOne from './SectionOne/SectionOne';
import SectionTwo from './SectionTwo/SectionTwo';
import SectionThree from './SectionThree/SectionThree';
import SectionFour from './SectionFour/SectionFour';
import SectionFive from './SectionFive/SectionFive';
import SectionSix from './SectionSix/SectionSix';
import SectionSeven from '../Home/SectionSeven/SectionSeven';
import Footer from '../../components/Footer/Footer';
import styles from './Nigeria.module.css';

function Nigeria() {
  return (
    <div>
      <SectionOne />
      <div className={styles.section_two}>
        <SectionTwo />
      </div>
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <Footer />
    </div>
  );
}

export default Nigeria;
