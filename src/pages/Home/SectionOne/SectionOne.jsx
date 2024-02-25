import React, { useState, useEffect } from 'react';
import FadeTransition from '../../../components/FadeTransition/FadeTransition';
import styles from './SectionOne.module.css';
import backgroundOne from '../../../assets/images/Home/home-section-1.webp';
import backgroundTwo from '../../../assets/images/Home/home-section-2.webp';
import backgroundThree from '../../../assets/images/Home/home-section-3.webp';

function SectionOne() {
  const [activeImage, setActiveImage] = useState(0);
  const backgrounds = [backgroundOne, backgroundTwo, backgroundThree];

  useEffect(() => {
    const startImageRotation = () => {
      return setInterval(() => {
        setActiveImage(pastImage => (pastImage + 1) % backgrounds.length);
      }, 3000);
    };

    // * Initial delay for the Heading Gradient Animation.
    const timer = setTimeout(() => {
      const interval = startImageRotation();
      return () => clearInterval(interval);
    }, 1500);
    return () => clearTimeout(timer);
  }, [backgrounds.length]);

  return (
    <div className={styles.wrapper}>
      <FadeTransition keys={activeImage} variants="sync" mode="sync" duration={0.5}>
        <div
          className={styles.background}
          style={{ backgroundImage: `url(${backgrounds[activeImage]})` }}
        />
      </FadeTransition>
      <div className={styles.content}>
        <h1 className={`${styles.text} ${styles.title}`}>Invest in Africa</h1>
        <h4 className={`${styles.text} ${styles.subtitle}`}>
          Shaping Tomorrow Together,
          <br />
          Invest in Africa&apos;s Potential.
        </h4>
      </div>
    </div>
  );
}

export default SectionOne;
