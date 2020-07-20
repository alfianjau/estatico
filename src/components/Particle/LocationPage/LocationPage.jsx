import { Flex, Box, Button, PseudoBox, Divider, Text } from '@chakra-ui/core'
import React, { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'gatsby'
import Hero from '../../Molecule/Hero/Hero'
import CardBox from '../../Atom/CardBox/CardBox'
import BlogFeedWidget from '../../Molecule/BlogFeedWidget/BlogFeedWidget'
import LocationSectionIntro from './LocationSectionIntro'
import LocationSectionListing from './LocationSectionListing'
import LocationSectionBlog from './LocationSectionBlog'

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
        <Flex direction={{ sm: 'column', md: 'row' }} width="100%">
          <Box width={{ sm: '100%', md: 2 / 3 }} pr={4}>
            <LocationSectionBlog />
            <LocationSectionListing />
          </Box>
          <Flex
            className="blog-feed__aside"
            bg="gray.500"
            direction="column"
            width={{ sm: '100%', md: 1 / 3 }}
            pl={{ sm: 'inherit', md: 12 }}
          >
            <Box width="100%">
              <CardBox
                isNoImage
                tagLink="other"
                cardDesc="Cursus in nec diam, sed tortor fames ut sit. lorem ipsum dolor"
              >
                test
              </CardBox>
            </Box>
            <Box width="100%">
              <CardBox
                isNoImage
                tagLink="other"
                cardDesc="Cursus in nec diam, sed tortor fames ut sit. lorem ipsum dolor"
              >
                test
              </CardBox>
            </Box>
            <Box width="100%">
              <CardBox
                isNoImage
                tagLink="other"
                cardDesc="Cursus in nec diam, sed tortor fames ut sit. lorem ipsum dolor"
              >
                test
              </CardBox>
            </Box>
            <Box width="100%" px={{ sm: 'inherit', md: 4 }} my={4}>
              <Button width="100%">
                <Link alt="see more" to="/blog">
                  See More
                </Link>
              </Button>
            </Box>
            <BlogFeedWidget />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default LocationPage
