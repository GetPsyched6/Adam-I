import propTypes from 'prop-types';
import { motion, useReducedMotion } from 'framer-motion';
import { useMediaQuery } from '@react-hook/media-query';
import FadeTransition from '../FadeTransition/FadeTransition';
import useStaggered from '../../hooks/useStaggered';
import styles from './ImageAndContentCard.module.css';

function ImageAndContentCard(props) {
  const { data } = props;

  const { reducedParentMotionProps, reducedChildMotionProps } = useStaggered();
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useMediaQuery('(max-width: 600px)');
  const reducedMotionProps =
    shouldReduceMotion || isMobile
      ? {}
      : {
          initial: { borderRadius: '3rem', inset: '18px' },
          whileInView: { borderRadius: '0rem', inset: '0px' },
          transition: { duration: 0.5, ease: [0, 0, 0.5, 1] },
          viewport: { amount: 0.5 },
        };

  const backgroundStyle = {
    backgroundImage: `url(${data.background})`,
  };

  return (
    <div className={styles.wrapper}>
      <motion.div className={styles.background} style={backgroundStyle} {...reducedMotionProps} />
      <div className={styles.content}>
        <FadeTransition bottom={-100} translate={25} scrollAnimation amount="all">
          <h2 className={`${styles.text} ${styles.title}`}>{data.title}</h2>
        </FadeTransition>
        <motion.div className={styles.body_wrapper} {...reducedParentMotionProps}>
          <motion.h4 {...reducedChildMotionProps} className={styles.sub_title}>
            {data.subTitle}
          </motion.h4>
          <motion.p
            className={`${styles.text} ${styles.text_wrapper}`}
            {...reducedChildMotionProps}
          >
            {data.body}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

ImageAndContentCard.propTypes = {
  data: propTypes.shape({
    background: propTypes.string,
    title: propTypes.string,
    subTitle: propTypes.string,
    body: propTypes.string,
  }).isRequired,
};

export default ImageAndContentCard;
