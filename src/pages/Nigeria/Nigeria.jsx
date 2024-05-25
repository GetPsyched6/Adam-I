import data from './NigeriaData';
import SectionOne from './SectionOne/SectionOne';
import SectionTwo from './SectionTwo/SectionTwo';
import SectionThree from './SectionThree/SectionThree';
import SectionFour from './SectionFour/SectionFour';
import SectionFive from './SectionFive/SectionFive';

// Section above footer borrowed from home
import SectionSeven from '../Home/SectionSeven/SectionSeven';
// import SideBar from '../../components/SideBar/SideBar';
import Footer from '../../components/Footer/Footer';

function Nigeria() {
  const { sectionOne, sectionTwo, sectionThree, sectionFour, sectionFive } = data;
  return (
    <div>
      <div>
        <SectionOne mainHeading={sectionOne.mainHeading} />
        <SectionTwo
          descriptionAndMap={sectionTwo.descriptionAndMap}
          investmentOpportunities={sectionTwo.investmentOpportunities}
          whyInvest={sectionTwo.whyInvest}
          investmentSupportAndResources={sectionTwo.investmentSupportAndResources}
        />
        <SectionThree economicInsights={sectionThree.economicInsights} />
        <SectionFour
          importAndExports={sectionFour.importsAndExports}
          importSubstitution={sectionFour.importSubstitution}
          commitmentToRegionalTrade={sectionFour.commitmentToRegionalTrade}
        />
        <SectionFive
          title={sectionFive.title}
          background={sectionFive.background}
          graphs={sectionFive.graphs}
        />
        <SectionSeven />
        <Footer />
      </div>
    </div>
  );
}

export default Nigeria;
