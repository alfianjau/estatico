import { Flex, Box } from '@chakra-ui/core'
import React, { useState } from 'react'
import Hero from '../../Molecule/Hero/Hero'
import CustomQuote from '../../Molecule/CustomQuote/CustomQuote'
import TextList from '../../Atom/TextList/TextList'
import SectionWithImages from '../../Molecule/SectionWithImages/SectionWithImages'
import BlogPreview from '../../Molecule/BlogPreview/BlogPreview'
import './MultiFamilyPage.css'

function MultiFamilyPage() {
  return (
    <Box className="multifamily-page">
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
          image="team-page"
          imageAlt="team-page"
          title="Multifamily"
        >
          Multi Family Page
        </Hero>
        <CustomQuote
          title="MultiFamily"
          subtitle="the Principal-Agent Problem"
          subText="We want to be the Coca-Cola of the commercial real estate industry."
          description={`One of the primary drawbacks of the brokerage model is that agents are inherently driven by short-term rewards – getting listings, closing sales, building their personal book of business.

There is often a disconnect between the success drivers for the agent, those of the company, and those of the client.

Therefore, our goal from the outset has been to create a company that incents agents to think like principals.

We want them to have a stake in the success of the company and to see a direct line between the success of their clients, the success of our company, and their long-term financial well-being.`}
        />
        <SectionWithImages
          my="12rem"
          title="MultiFamily"
          hasSubtitle="We’re Different"
        >
          <TextList hasStar title="Experience">
            We apply creative solutions to real estate challenges. Time is
            always of the essence in the commercial real estate world, so you
            can’t afford to miss an opportunity. MemmoCRE positions itself at
            the heart of where you want to be, allowing you to capitalize on
            opportunities other companies miss. Our experts stand ready to help
            analyze every potential investment, identifying risks factors and
            ensuring that you maximize the likelihood of long-term positive
            returns.
          </TextList>
          <TextList hasStar title="Approach">
            MemmoCRE is bringing a different mindset to meeting the requirements
            of commercial and residential investors. From our inception,
            MemmoCRE is casting aside the traditional thinking that has
            reinforced the status quo in the industry. We are an organization
            built on a virtual footprint, pushing our team members to the edges
            of our footprint, encouraging collaboration and time in the field.
          </TextList>
          <TextList hasStar title="Marketing">
            MemmoCRE is embracing the new world order of marketing. Real estate
            marketing, particularly on the commercial side, hasn’t exactly
            responded nimbly as the world has changed around it. We’re working
            directly with the companies leading change in the industry, while
            developing proprietary back end systems that will enable us to
            leverage these platforms for the mutual benefit of MemmoCRE and our
            clients.
          </TextList>
        </SectionWithImages>
        <BlogPreview title="Multifamily News" />
      </Flex>
    </Box>
  )
}

export default MultiFamilyPage
