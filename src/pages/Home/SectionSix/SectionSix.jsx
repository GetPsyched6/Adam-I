import React from 'react';
import styles from './SectionSix.module.css';
import stories from '../../../data/successStories';
import image from '../../../assets/images/Home/SectionSix/Section6.png';

function SectionSix() {
  return (
    <div className={styles.wrapper}>
      <h2 className={`${styles.text} ${styles.title}`}>Success Stories</h2>
      <div className={styles.content_wrapper}>
        {stories.map(data => {
          return (
            <div className={styles.stories_wrapper}>
              <img src={image} alt="youtube thumbnail" className={styles.thumbnail} />
              <div className={styles.body_wrapper}>
                <h5 className={styles.body_title}>{data.title}</h5>
                <p className={styles.body_description}>&quot;{data.body}&quot;</p>
                <p className={styles.body_footer}>{data.footer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SectionSix;
