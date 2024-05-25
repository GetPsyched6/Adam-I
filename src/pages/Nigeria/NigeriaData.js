// SectionOne imports
import investInNigeria from '../../assets/images/Nigeria/SectionOne/invest_in_nigeria_background.webp';
import mapOfNigeria from '../../assets/images/Nigeria/SectionTwo/map_of_nigeria.webp';

// SectionTwo imports
// Oportunities
import agriculture from '../../assets/images/Nigeria/SectionTwo/opportunities_agriculture.webp';
import manufacturing from '../../assets/images/Nigeria/SectionTwo/opportunities_manufacturing.webp';
import services from '../../assets/images/Nigeria/SectionTwo/opportunities_services.webp';
import retail from '../../assets/images/Nigeria/SectionTwo/opportunities_retail.webp';
import ict from '../../assets/images/Nigeria/SectionTwo/opportunities_ict.webp';
// Why invest in Nigeria
import largeMarket from '../../assets/images/Nigeria/SectionTwo/reason_large_consumer_base.webp';
import economicSize from '../../assets/images/Nigeria/SectionTwo/reason_economic_size.webp';
import naturalResources from '../../assets/images/Nigeria/SectionTwo/reason_natural_resources.webp';
import strategicLocation from '../../assets/images/Nigeria/SectionTwo/reason_strategic_location.webp';
// Investment Support and Resources
import nipcLogo from '../../assets/images/Nigeria/SectionTwo/nipc_logo.webp';

// SectionThree imports
import economicInsightsBackground from '../../assets/images/Nigeria/SectionThree/economic_insights_background.webp';

// SectionFour imports
import importAndExportBG from '../../assets/images/Nigeria/SectionFour/import_and_exports_bg.webp';
import importSubstitutionBG from '../../assets/images/Nigeria/SectionFour/import_substitution_bg.webp';
import commitmentBG from '../../assets/images/Nigeria/SectionFour/commitment_bg.webp';

// SectionFive imports
import nigeriaStandingInAfricaBG from '../../assets/images/Nigeria/SectionFive/nigeria_standing_in_africa_bg.webp';

const Nigeria = {
  sectionOne: {
    mainHeading: {
      title: 'Invest in Nigeria',
      description: "Unlocking opportunities in Africa's largest economy",
      background: investInNigeria,
    },
  },
  sectionTwo: {
    descriptionAndMap: {
      description: [
        {
          id: 1,
          title: 'Land Area',
          body: 'Nigeria offers a substantial land area of 923,769 sq. km.',
          color: '#004F9F',
        },
        {
          id: 2,
          title: 'Population',
          body: "As of 2023, Nigeria's population of 230.8 million promises a vast consumer base.",
          color: '#007736',
        },
        {
          id: 3,
          title: 'GDP',
          body: "Nigeria's GDP stood at US$400 Billion in 2022, indicating a significant economic footprint.",
          color: '#E02626',
        },
        {
          id: 4,
          title: 'Labour Force',
          body: 'With a labour force of 126 million in 2022, Nigeria boasts a substantial workforce.',
          color: '#EF7D00',
        },
      ],
      map: mapOfNigeria,
    },
    investmentOpportunities: {
      title: 'Investment Opportunities',
      opportunities: [
        {
          id: 1,
          title: 'Agriculture',
          image: agriculture,
        },
        {
          id: 2,
          title: 'Manufacturing',
          image: manufacturing,
        },
        {
          id: 3,
          title: 'Services',
          image: services,
        },
        {
          id: 4,
          title: 'Retail',
          image: retail,
        },
        {
          id: 4,
          title: 'ICT',
          image: ict,
        },
      ],
    },
    whyInvest: {
      title: 'Why Invest in Nigeria?',
      reasons: [
        {
          id: 1,
          title: 'Large Market',
          body: 'Largest population in Africa. The burgeoning middle class is driving demand for a wide array of products and services.',
          image: largeMarket,
        },
        {
          id: 2,
          title: 'Economic Size',
          body: 'Largest economy in Africa, Nigeria offers a substantial market for businesses looking to expand.',
          image: economicSize,
        },
        {
          id: 3,
          title: 'Natural Resources',
          body: "The country's economy thrives on oil and gas but holds untapped potential in agriculture, minerals, and renewable energy.",
          image: naturalResources,
        },
        {
          id: 4,
          title: 'Strategic Location',
          body: 'Nigeria is strategically located in West Africa, providing easy access to regional markets.',
          image: strategicLocation,
        },
        {
          id: 5,
          title: 'Diversification Efforts',
          body: 'The Nigerian government is actively working to diversify the economy, creating new opportunities for investors.',
          image: strategicLocation,
        },
        {
          id: 6,
          title: 'Government Incentives',
          body: 'The government offers a range of incentives to attract foreign investment, including tax breaks and duty exemptions.',
          image: strategicLocation,
        },
      ],
    },
    investmentSupportAndResources: {
      title: 'Investment Support and Resources',
      body: 'Nigerian Investment Promotion Commission (NIPC): The NIPC serves as your guide to investing in Nigeria. They offer valuable insights, facilitate business registration, and provide investment incentives.',
      image: nipcLogo,
    },
  },

  sectionThree: {
    economicInsights: {
      title: 'Economic Insights Of Nigeria',
      background: economicInsightsBackground,
      graphs: [
        {
          title: 'GDP',
          graphType: 'scatter',
          data: [
            { year: 2011, value: 414.47 },
            { year: 2012, value: 463.97 },
            { year: 2013, value: 520.12 },
            { year: 2014, value: 574.18 },
            { year: 2015, value: 493.03 },
            { year: 2016, value: 404.65 },
            { year: 2017, value: 375.75 },
            { year: 2018, value: 421.74 },
            { year: 2019, value: 448.12 },
            { year: 2020, value: 432.2 },
            { year: 2021, value: 440.83 },
          ],
        },
        {
          title: 'GDP Growth Rate',
          graphType: 'line',
          data: [
            { year: 2012, value: 4.2 },
            { year: 2013, value: 6.7 },
            { year: 2014, value: 6.3 },
            { year: 2015, value: 2.7 },
            { year: 2016, value: -1.6 },
            { year: 2017, value: 0.8 },
            { year: 2018, value: 1.9 },
            { year: 2019, value: 2.2 },
            { year: 2020, value: -1.8 },
            { year: 2021, value: 3.6 },
            { year: 2022, value: 3.5 },
          ],
        },
        {
          title: 'GDP Per Capita',
          graphType: 'bar',
          data: [
            { year: 2011, value: 2.5 },
            { year: 2012, value: 2.7 },
            { year: 2013, value: 2.9 },
            { year: 2014, value: 3.2 },
            { year: 2015, value: 2.6 },
            { year: 2016, value: 2.1 },
            { year: 2017, value: 1.9 },
            { year: 2018, value: 2.1 },
            { year: 2019, value: 2.2 },
            { year: 2020, value: 2.0 },
            { year: 2021, value: 2.0 },
          ],
        },
        {
          title: 'FDI Net Inflow',
          graphType: 'bar',
          data: [
            { year: 2011, value: 8.84 },
            { year: 2012, value: 7.07 },
            { year: 2013, value: 5.56 },
            { year: 2014, value: 4.69 },
            { year: 2015, value: 3.06 },
            { year: 2016, value: 3.45 },
            { year: 2017, value: 2.41 },
            { year: 2018, value: 0.78 },
            { year: 2019, value: 2.31 },
            { year: 2020, value: 2.39 },
            { year: 2021, value: 3.31 },
          ],
        },
        {
          title: 'Imports',
          graphType: 'bar',
          data: [
            { year: 2011, value: 89.78 },
            { year: 2012, value: 60.25 },
            { year: 2013, value: 67.61 },
            { year: 2014, value: 71.49 },
            { year: 2015, value: 52.59 },
            { year: 2016, value: 46.55 },
            { year: 2017, value: 49.51 },
            { year: 2018, value: 73.85 },
            { year: 2019, value: 88.74 },
            { year: 2020, value: 35.59 },
            { year: 2021, value: 45.19 },
          ],
        },
        {
          title: 'Exports',
          graphType: 'scatter',
          data: [
            { year: 2011, value: 131.04 },
            { year: 2012, value: 146.37 },
            { year: 2013, value: 93.88 },
            { year: 2014, value: 105.85 },
            { year: 2015, value: 52.59 },
            { year: 2016, value: 37.3 },
            { year: 2017, value: 49.49 },
            { year: 2018, value: 65.36 },
            { year: 2019, value: 63.73 },
            { year: 2020, value: 35.09 },
            { year: 2021, value: 47.34 },
          ],
        },
      ],
    },
    distributionOfGDP: {
      title: 'Distribution Of GDP Across Economic Sectors',
      data: [
        { title: 'Agriculture', value: 31.9, color: '#FE6347' },
        { title: 'Industry', value: 23.7, color: '#87CEEA' },
        { title: 'Services', value: 44.4, color: '#006401' },
      ],
    },
  },
  sectionFour: {
    importsAndExports: {
      title: 'Imports and Exports',
      subTitle: "Nigeria's Robust Trade Growth",
      body: "In 2021,Nigeria's intra-African trade surged by 21.7% to US$9.65 billion, elevating it's status as the 3rd largest intra-African trading nation.Despite crude oil dominating exports to African partners, only 3.3% of Nigeria's total exports were destined for the continent.",
      button: 'LEARN MORE',
      background: importAndExportBG,
    },
    majorImports: {
      title: 'Major Imports',
      products: [
        {
          id: 1,
          title: 'Refined Petroleum',
          value: 'US$11.3 B',
        },
        {
          id: 2,
          title: 'Wheat',
          value: 'US$3.32 B',
        },
        {
          id: 3,
          title: 'Cars',
          value: 'US$2.42 B',
        },
        {
          id: 4,
          title: 'Packaged Medicaments',
          value: 'US$972 M',
        },
        {
          id: 5,
          title: 'Packaged Medicaments',
          value: 'US$2.61 B',
        },
      ],
    },
    importSubstitution: {
      title: 'Import Substitution',
      subTitle: 'Backward Integration Option',
      body: 'The Central Bank Of Nigeria (CBN) in July 2019 rolled out a new policy to encourage backward integration for the local production of select items.',
      background: importSubstitutionBG,
    },
    commitmentToRegionalTrade: {
      background: commitmentBG,
      title: "Nigeria's Commitment to Regional Trade",
      body: [
        {
          id: 1,
          title: "-Nigeria's Diplomatic Alliances:",
          body: 'Nigeria is part of two Regional Economic Communities (RECs) - the Economic Community of West African States (ECOWAS) and the Community of Sahel-Saharan States (CEN-SAD). Nigeria deposited its instrument of ratification and schedule of tariff concessions,along with other ECOWAS member states.',
        },
        {
          id: 2,
          title: '-ECOWAS Trade Commitments:',
          body: 'As of 2020, the African Union recognizes 8 Regional Economic Communities, with Nigeria being a member of two: the Community of Sahel-Saharan States (CEN-SAD) and the Economic Community of West African States (ECOWAS). These communities foster regional trade through various agreements, with ECOWAS specifically having multiple trade instruments and engaging in multilateral, continental, and bilateral trade agreements at both regional and international levels.',
        },
        {
          id: 3,
          title: '-AFCFTA Barrier Resolution:',
          body: 'The African Continental Free Trade Area (AfCFTA) has implemented an online reporting, monitoring, and elimination mechanism for non-tariff barriers to trade (NTBs). Through the platform at https://tradebarriers.africa, individuals and businesses can report obstacles encountered during trade within Africa, such as delays, ad hoc fees, document requirements, and product standards. This mechanism is inclusive, welcoming participation from all sectors, including small, medium, and large companies, informal traders, as well as women and youth business operators. Watch an introductory video about the initiative at https://tradebarriers.africa/about.',
        },
        {
          id: 4,
          title: '-Trade Report:',
          body: `Leading intra-African trading nation in 2021:
          <ol>
          <li>1.South Africa</li>
          <li>2.DRC(largest intra-African trading nation in Central Africa)</li>
          <li>3.Nigeria</li>
          <li>4.Algeria</li>
          </ol>
          <p>~African Trade Report 2022`,
        },
      ],
    },
  },
  sectionFive: {
    title: "Nigeria's standing in Africa",
    background: nigeriaStandingInAfricaBG,
    graphs: [
      {
        title: 'GDP growth rate',
        graphType: 'bar',
        data: [
          { country: 'Libya', value: 131 },
          { country: 'Kenya', value: 7.6 },
          { country: 'Botswana', value: 7.5 },
          { country: 'Niger', value: 6.9 },
          { country: 'Mauritius', value: 6.6 },
          { country: 'Uganda', value: 6.3 },
          { country: 'South Africa', value: 3.1 },
          { country: 'Nigeria', value: 2.5 },
        ],
      },
      {
        title: 'GDP growth rate',
        graphType: 'bar',
        data: [
          { country: 'Nigeria', value: 441.54 },
          { country: 'South Africa', value: 418.02 },
          { country: 'Egypt', value: 402.84 },
          { country: 'Algeria', value: 164.56 },
          { country: 'Moroco', value: 131.47 },
          { country: 'Kenya', value: 109.8 },
          { country: 'Ethiopia', value: 98.27 },
          { country: 'Ghana', value: 76.36 },
        ],
      },
    ],
  },
};

export default Nigeria;
