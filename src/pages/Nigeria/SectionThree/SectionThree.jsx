import propTypes from 'prop-types';
import GraphSection from '../../../components/GraphSection/GraphSection';

function SectionThree(props) {
  const { economicInsights } = props;

  return (
    <GraphSection
      title={economicInsights.title}
      background={economicInsights.background}
      graphs={economicInsights.graphs}
      amountList={[0.5, 'some', 'some']}
    />
  );
}

SectionThree.propTypes = {
  economicInsights: propTypes.shape({
    title: propTypes.string,
    background: propTypes.string,
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
  }).isRequired,
};

export default SectionThree;
