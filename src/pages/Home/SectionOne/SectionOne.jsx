import React, { useState, useEffect } from 'react';
import styles from './SectionOne.module.css';

function SectionOne() {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageClasses = [styles.backgroundImage1, styles.backgroundImage2, styles.backgroundImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(current => (current === imageClasses.length - 1 ? 0 : current + 1));
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className={`${imageClasses[activeIndex]} ${styles.carousel} ${styles.active}`}>
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
