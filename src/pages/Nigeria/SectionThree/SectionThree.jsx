import FadeTransition from '../../../components/FadeTransition/FadeTransition';
import CardTransition from '../../../components/CardTransition/CardTransition';
import whyInvest from '../../../data/Nigeria/whyInvestNigeria';
import nipc from '../../../assets/images/Nigeria/SectionThree/nipc.webp';
import styles from './SectionThree.module.css';

function SectionThree() {
  window.addEventListener('scroll', function () {
    var title = document.getElementById('title');
    var position = title.getBoundingClientRect();

    // Check if the title is in the viewport
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
      title.style.transform = 'translateY(0)';
      content.style.transform = 'translateX(0)';
    } else {
      title.style.transform = 'translateY(100%)';
      content.style.transform = 'translateX(-100%)';
    }
  });

  return (
    <div className={styles.wrapper}>
      {/* Why Invest in Nigeria Banner */}
      <div className={styles.why_invest}>
        <FadeTransition
          bottom={-100}
          translate={25}
          scrollAnimation
          amount="all"
          className={styles.title_wrapper}
        >
          <h2 className={styles.title}>Why Invest In Nigeria?</h2>
        </FadeTransition>

        <CardTransition
          className={styles.card_wrapper}
          object={whyInvest}
          amountList={[0.5, 0.25, 'some']}
        />
      </div>

      {/* Investment Support and resoures banner */}
      <div className={styles.invest_support}>
        <div className={styles.invest_support_desc_wrapper}>
          <div className={styles.invest_support_title} id="title">
            <h2>Investment Support and Resources</h2>
          </div>
          <div className={styles.invest_support_content_image_wrapper}>
            <div className={styles.invest_support_content} id="content">
              <p>
                Nigerian Investment Promotion Commission(NIPC):
                <br /> The NIPC serves as your guide to investing in Nigeria.
                <br />
                They offer valuable insights, facilitate business registration,
                <br /> and provide investment incentives.
              </p>
            </div>
            <div className={styles.invest_support_image}>
              <img src={nipc} alt="Nigerian Investment Promotion Commission" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
