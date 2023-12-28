import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cards.module.css';

function Cards(props) {
  const { title, image, alt, body } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.card}>
          <img src={image} alt={alt} className={styles.image} />
          <div className={styles.title_container}>
            <h3 className={styles.title}>{title}</h3>
          </div>
        </div>
        {body && <p className={styles.body}>{body}</p>}
      </div>
    </div>
  );
}

Cards.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Cards;
