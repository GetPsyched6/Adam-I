import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from './SectionOne.module.css';
import backgroundOne from '../../../assets/images/Home/home-section-1.png';
import backgroundTwo from '../../../assets/images/Home/home-section-2.webp';
import backgroundThree from '../../../assets/images/Home/home-section-3.webp';

function SectionOne() {
  const [activeImage, setActiveImage] = useState(0);
  const backgrounds = [backgroundOne, backgroundTwo, backgroundThree];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage(pastImage => (pastImage + 1) % backgrounds.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div className={styles.wrapper}>
      <TransitionGroup>
        <CSSTransition
          key={backgrounds[activeImage]}
          classNames={{
            ...styles,
          }}
          timeout={500}
          unmountOnExit
        >
          <div
            className={styles.background}
            style={{ backgroundImage: `url(${backgrounds[activeImage]})` }}
          />
        </CSSTransition>
      </TransitionGroup>
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
