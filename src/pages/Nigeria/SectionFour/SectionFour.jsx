import propTypes from 'prop-types';
import ImageAndContentCard from '../../../components/ImageAndContentCard/ImageAndContentCard';
import Commitment from './Commitment';

function SectionFour(props) {
  const { importAndExports, importSubstitution, commitmentToRegionalTrade } = props;

  return (
    <div>
      <ImageAndContentCard data={importAndExports} />
      <ImageAndContentCard data={importSubstitution} />
      <Commitment
        title={commitmentToRegionalTrade.title}
        background={commitmentToRegionalTrade.background}
        body={commitmentToRegionalTrade.body}
      />
    </div>
  );
}

SectionFour.propTypes = {
  importAndExports: propTypes.shape({
    background: propTypes.string,
    title: propTypes.string,
    subTitle: propTypes.string,
    body: propTypes.string,
  }).isRequired,
  importSubstitution: propTypes.shape({
    background: propTypes.string,
    title: propTypes.string,
    subTitle: propTypes.string,
    body: propTypes.string,
  }).isRequired,
  commitmentToRegionalTrade: propTypes.shape({
    title: propTypes.string,
    background: propTypes.string,
    body: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number,
        title: propTypes.string,
        body: propTypes.string,
      })
    ),
  }).isRequired,
};
export default SectionFour;
