import { Flex, Box, Heading, PseudoBox } from '@chakra-ui/core'
import React, { useState } from 'react'
import { Link } from 'gatsby'
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

There is often a disconnect between the success drivers for the agent, those of the company, and those of the client.`}
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
        <Box
          width={{ sm: '100%', md: 3 / 4 }}
          className="leading-text"
          mb={{ sm: '5rem', md: '10rem' }}
          mt={{ sm: '5rem', md: '10rem' }}
          position="relative"
        >
          <Heading
            className="leading-text__heading"
            as="h2"
            fontSize={{ sm: '4xl', md: '6xl' }}
            fontWeight="normal"
          >
            People turn the buildings and spaces around us into extraordinary
            places
          </Heading>
          <PseudoBox
            as="button"
            display="block"
            my={16}
            mx="auto"
            transition=".3s ease-in"
            border="1px"
            px={8}
            py={4}
            width={{ sm: 'auto', md: '50%' }}
            rounded="2px"
            fontSize="lg"
            fontWeight="semibold"
            bg="primary.500"
            borderColor="#ccd0d5"
            color="white"
            _hover={{ bg: 'accent.500' }}
            _active={{
              bg: '#dddfe2',
              transform: 'scale(0.98)',
              borderColor: '#bec3c9',
            }}
            _focus={{
              boxShadow:
                '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
            }}
          >
            <Link className="composition__link" fontSize="lg" to="/team">
              Schedule Consultation
            </Link>
          </PseudoBox>
        </Box>
      </Flex>
    </Box>
  )
}

export default MultiFamilyPage
