import React, { useState, useEffect } from 'react';
import styles from './SectionOne.module.css';
import backgroundOne from '../../../assets/images/Home/home-section-1.webp';
import backgroundTwo from '../../../assets/images/Home/home-section-2.webp';
import backgroundThree from '../../../assets/images/Home/home-section-3.webp';

function SectionOne() {
  const [activeImage, setActiveImage] = useState(0);
  const backgrounds = [backgroundOne, backgroundTwo, backgroundThree];
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setActiveImage(pastImage => (pastImage + 1) % backgrounds.length);
      }, 3000);

      return () => clearInterval(interval);
    }, 1500); // * For the Heading Gradient Animation.

    return () => clearTimeout(timer);
  }, [backgrounds.length]);

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${backgrounds[activeImage]})` }}
      />
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
