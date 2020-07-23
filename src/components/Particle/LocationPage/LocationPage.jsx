import { Flex, Box, Button, PseudoBox, Divider, Text } from '@chakra-ui/core'
import React, { useState } from 'react'
import { Link } from 'gatsby'
import Hero from '../../Molecule/Hero/Hero'
import LocationSectionIntro from './LocationSectionIntro'
import LocationSectionMap from './LocationSectionMap'
import LocationSectionListing from './LocationSectionListing'
import LocationSectionBlog from './LocationSectionBlog'
import LocationSectionSearch from './LocationSectionSearch'

import './LocationPage.css'

function LocationPage() {
  return (
    <Box className="location-page">
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
          title="Scottsdate"
        >
          Location Page
        </Hero>
        <LocationSectionIntro />
        <LocationSectionMap />
        <Flex direction={{ sm: 'column', md: 'row' }} width="100%">
          <Box width={{ sm: '100%', md: 2 / 3 }} pr={4}>
            <LocationSectionBlog />
            <LocationSectionListing />
          </Box>
          <Flex
            className="blog-feed__aside"
            bg={{ sm: 'transparent', md: 'gray.500' }}
            direction="column"
            width={{ sm: '100%', md: 1 / 3 }}
            pl={{ sm: 'inherit', md: 12 }}
          >
            <LocationSectionSearch />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default LocationPage
