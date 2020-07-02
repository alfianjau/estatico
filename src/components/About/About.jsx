import React from 'react'
import { Flex, Box } from '@chakra-ui/core'
import Hero from '../Molecule/Hero/Hero'
import CustomQuote from '../Molecule/CustomQuote/CustomQuote'
import SectionWithImages from '../Molecule/SectionWithImages/SectionWithImages'
import TextList from '../Atom/TextList/TextList'
import Residential from '../Molecule/Residential/Residential'
import AboutOpportunity from '../Molecule/AboutOpportunity/AboutOpportunity'
import './About.css'

class About extends React.Component {
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
            image="about"
            imageAlt="about"
            noButton
            title="About Us"
          >
            MemmoCRE brings innovative solutions together with industry-leading
            technology and wide-ranging expertise.
          </Hero>
          <SectionWithImages
            my="12rem"
            title="Why"
            hasSubtitle="We’re Different"
          >
            <TextList hasStar title="Experience">
              We apply creative solutions to real estate challenges. Time is
              always of the essence in the commercial real estate world, so you
              can’t afford to miss an opportunity. MemmoCRE positions itself at
              the heart of where you want to be, allowing you to capitalize on
              opportunities other companies miss. Our experts stand ready to
              help analyze every potential investment, identifying risks factors
              and ensuring that you maximize the likelihood of long-term
              positive returns.
            </TextList>
            <TextList hasStar title="Approach">
              MemmoCRE is bringing a different mindset to meeting the
              requirements of commercial and residential investors. From our
              inception, MemmoCRE is casting aside the traditional thinking that
              has reinforced the status quo in the industry. We are an
              organization built on a virtual footprint, pushing our team
              members to the edges of our footprint, encouraging collaboration
              and time in the field.
            </TextList>
            <TextList hasStar title="Marketing">
              MemmoCRE is embracing the new world order of marketing. Real
              estate marketing, particularly on the commercial side, hasn’t
              exactly responded nimbly as the world has changed around it. We’re
              working directly with the companies leading change in the
              industry, while developing proprietary back end systems that will
              enable us to leverage these platforms for the mutual benefit of
              MemmoCRE and our clients.
            </TextList>
          </SectionWithImages>
          <CustomQuote
            title="Resolving "
            subtitle="the Principal-Agent Problem"
            subText="We want to be the Coca-Cola of the commercial real estate industry."
            description={`One of the primary drawbacks of the brokerage model is that agents are inherently driven by short-term rewards – getting listings, closing sales, building their personal book of business.

There is often a disconnect between the success drivers for the agent, those of the company, and those of the client.

Therefore, our goal from the outset has been to create a company that incents agents to think like principals.

We want them to have a stake in the success of the company and to see a direct line between the success of their clients, the success of our company, and their long-term financial well-being.`}
          />
          <AboutOpportunity />
          <Residential
            title="Careers"
            isCompact
            isCustom
            my={{ sm: '3rem', md: 'inherit' }}
            isCustomSubtitle="We are actively seeing to expand our presence in markets around the country"
            isCustomDescription={`We are reimagining the world of real estate. If you are an experienced and forward-thinking agent that wants to drive change rather than react to it, we want to talk to you.`}
            image="about-person"
            imageAlt="about-person"
            btnTitle="More info"
            btnLink="/blog/"
          />
        </Flex>
      </Box>
    )
  }
}

export default About
