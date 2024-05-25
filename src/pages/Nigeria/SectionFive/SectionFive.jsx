import propTypes from 'prop-types';
import GraphSection from '../../../components/GraphSection/GraphSection';

function SectionFive(props) {
  const { title, background, graphs } = props;

  return (
    <GraphSection
      title={title}
      background={background}
      graphs={graphs}
      amountList={[0.5, 'some', 'some']}
    />
  );
}

SectionFive.propTypes = {
  title: propTypes.string.isRequired,
  background: propTypes.string.isRequired,
  graphs: propTypes.array.isRequired,
};

export default SectionFive;
