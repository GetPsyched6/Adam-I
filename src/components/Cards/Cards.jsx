import React from 'react';
import PropTypes from 'prop-types';
import { RiArrowRightUpLine } from 'react-icons/ri';
import styles from './Cards.module.css';

function Cards(props) {
  const { title, image, alt, body, color, hasArrow, hasBorder } = props;
  const style = {
    color: `var(--clr-${color})`,
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={`${styles.card} ${hasBorder ? styles.border : ''}`}>
          <img src={image} alt={alt} className={styles.image} />
          <div className={styles.title_container}>
            <h4 className={styles.title} style={style}>
              {title}
            </h4>
            {hasArrow && <RiArrowRightUpLine />}
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
  color: PropTypes.string,
  hasArrow: PropTypes.bool,
  hasBorder: PropTypes.bool,
};

Cards.defaultProps = {
  color: '',
  hasArrow: false,
  hasBorder: false,
};

export default Cards;
