import React from 'react'
import { Flex, Box } from '@chakra-ui/core'
import Residential from '../../Molecule/Residential/Residential'
import Hero from '../../Molecule/Hero/Hero'
import CustomQuote from '../../Molecule/CustomQuote/CustomQuote'
import LeasingSectionBox from '../../Molecule/SectionBox/SectionBox'
import CommercialPageSlider from '../../Molecule/CommercialPageSlider/CommercialPageSlider'
import CommercialProperties from '../../Molecule/CommercialProperties/CommercialProperties'
import SectionWithImages from '../../Molecule/SectionWithImages/SectionWithImages'
import TextList from '../../Atom/TextList/TextList'
import './CommercialPage.css'

class CommercialPage extends React.Component {
  render() {
    // const postList = this.getPostList()

    return (
      <Box>
        <Flex
          className="hero-wrapper"
          flexDirection="row"
          flexWrap="wrap"
          position="relative"
          justifyContent="center"
          w="100%"
          pt={{ sm: '0', md: '6' }}
          pb={{ sm: '4', md: '6' }}
          px={{ sm: '1rem', md: '9rem' }}
          color="white.500"
        >
          <Hero
            isAlternate
            image="commercial-hero"
            imageAlt="commercial-hero"
            isDark
            noButton
            title="Commercial Services"
          >
            Tailored solutions for commercial property investors
          </Hero>
          <Residential
            my="3rem"
            title="Services"
            isCompact
            isCustom
            isCustomSubtitle="Solutions for All Commercial Sectors and Property Types"
            isCustomDescription={`MemmoCRE is bringing you leading solutions borne of innovation, expertise, and keen insights.

We know the market from coast to coast better than anyone. Our hard-earned experience is your ticket to commercial real estate success.

Our agents utilize innovative ideas and market awareness to solve real estate challenges for our clients.

We serve investors, buyers, and sellers with skillful approaches to the complex challenges facing the real estate market today.

While there are countless opportunities for discerning commercial real estate
investors, searching through thousands of warehouses, office, land or retail listings is never the best use of your time.

We’re here to help find the cross-section of requirements and opportunities, taking your business from “idea” to “execution” with the best team in the country.`}
            image="residential-meeting"
            imageAlt="residential-meeting"
            btnTitle="More info"
            btnLink="/blog/"
          />
          <CustomQuote
            title="Acquisitions"
            subText="Our acquisitions associates will source, analyze, and perform the due diligence on equity investments for our clients. "
            description={`You need the best return on your investment, and we need to give you that value.

To ensure our clients’ success, we thoroughly assess each property for rent or sale against their specified underwriting criteria.`}
          />
          <Residential
            title="Dispositions"
            isCompact
            isCustom
            my={{ sm: '3rem', md: 'inherit' }}
            isCustomSubtitle="Working Together to Achieve Maximum Return on Your Investment"
            isCustomDescription={`MemmoCRE guides clients through the dispositions of real estate opportunities, employing a suite of wide-ranging expertise together with cutting-edge technological platforms to capitalize on every opportunity.

Regardless of market conditions, MemmoCRE agents are determined to help clients realize and exceed their investment objectives.`}
            image="james-genchi"
            imageAlt="james-genchi"
            btnTitle="More info"
            btnLink="/blog/"
          />
          <Residential
            isReverse
            isCustom
            className="investor"
            my={{ sm: '3rem', md: 'inherit' }}
            title="Investor Services"
            isCustomSubtitle="Tailored Services for Large-Scale Investors"
            isCustomDescription={`Looking to move beyond commercial property rental into investment opportunities?

MemmoCRE gives you the edge that puts you at the forefront of the market We provide our clients with expert guidance on every investment.

We work with both specialized and general portfolios, including self-storage, industrial, office, multifamily and single-family homes.

Whether you’re a seasoned real estate investor or new to the field, our agents are trained in helping you make the most of your portfolio.`}
            image="hunters-race"
            imageAlt="hunters-race"
            btnTitle="More info"
            btnLink="/blog/"
          />
          <LeasingSectionBox title="Leasing">Leasing box</LeasingSectionBox>
          <CommercialPageSlider backgroundColor="gray" />
          <SectionWithImages title="Specialty Services">
            <TextList title="1031 Exchange">
              Plan ahead to identify and capitalize on 1031 exchange
              opportunities.
            </TextList>
            <TextList title="Sales-Leaseback">
              Buyers and sellers can both achieve their financial objectives
              through the properly-designed sale-leaseback transactions.
            </TextList>
            <TextList title="Opportunity Zones">
              We help buyers and sellers leverage this historically significant
              means of maximizing commercial property returns.
            </TextList>
          </SectionWithImages>
          <CommercialProperties />
          <Residential
            title="International"
            className="international"
            isCompact
            isCustom
            isCustomSubtitle="Working Together to Achieve Maximum Return on Your Investment"
            isCustomDescription={`Commercial real estate continues to offer plenty of opportunities for international investors to diversify their portfolio and invest in an asset class that is known for its relative stability and consistent returns.

For international investors actively seeking those opportunities, our agents are able provide a broad picture of the current real estate market or dial in on specific localities or market sectors.`}
            image="commercial-international"
            imageAlt="commercial-international"
            btnTitle="More info"
            btnLink="/blog/"
          />
        </Flex>
      </Box>
    )
  }
}

export default CommercialPage
