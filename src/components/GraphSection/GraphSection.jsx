/* eslint-disable react/jsx-props-no-spreading */
import propTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@react-hook/media-query';
import useStaggered from '../../hooks/useStaggered';
import GraphCard from '../GraphCard/GraphCard';
import FadeTransition from '../FadeTransition/FadeTransition';
import styles from './GraphSection.module.css';

function GraphSection(props) {
  const { title, background, graphs, amountList } = props;

  const isTablet = useMediaQuery('(max-width: 992px)');
  const isMobile = useMediaQuery('(max-width: 600px)');
  const getAmountByScreenSize = () => {
    if (isMobile) return amountList[2];
    if (isTablet) return amountList[1];
    return amountList[0];
  };
  const { reducedParentMotionProps, reducedChildMotionProps } = useStaggered({
    amount: getAmountByScreenSize(),
    translate: 200,
  });

  const sectionStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
  };

  return (
    <div>
      <div className={styles.overlay} />
      <div className={styles.economic_insights} style={sectionStyle}>
        <FadeTransition bottom={-100} translate={25} scrollAnimation amount="some">
          <h2 className={styles.title}>{title}</h2>
        </FadeTransition>
        <motion.div className={styles.graph_wrapper} {...reducedParentMotionProps}>
          {graphs.map(graph => (
            <motion.div className={styles.graph} {...reducedChildMotionProps}>
              <div className={styles.underlay} />
              <div className={styles.graph_component}>
                <GraphCard data={graph.data} title={graph.title} graphType={graph.graphType} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

GraphSection.propTypes = {
  title: propTypes.string.isRequired,
  background: propTypes.string.isRequired,
  graphs: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string,
      graphType: propTypes.string,
      data: propTypes.arrayOf(
        propTypes.shape({
          year: propTypes.number,
          value: propTypes.number,
        }).isRequired
      ).isRequired,
    }).isRequired
  ).isRequired,
  amountList: propTypes.array.isRequired,
};

export default GraphSection;
