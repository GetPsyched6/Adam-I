import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ContactUs.module.css';

function ContactUs(props) {
  const { color } = props;
  const style = {
    color: `var(--clr-${color})`,
  };
  return (
    <div className={styles.content}>
      <Link to="/contactus">
        <div className={styles.btn} style={style}>
          Contact us
        </div>
      </Link>
    </div>
  );
}

ContactUs.propTypes = {
  color: PropTypes.oneOf(['lgreen', 'lyellow', 'green', 'yellow', 'white']),
};

ContactUs.defaultProps = {
  color: 'white90',
};

export default ContactUs;
