import { Flex, Box, PseudoBox, Text, Divider } from '@chakra-ui/core'
import React, { useState } from 'react'
import { Link } from 'gatsby'
import Hero from '../../Molecule/Hero/Hero'

import ListingFooter from './ListingFooter'
import ListingSectionMap from './ListingSectionMap'
import ListingSectionOverview from './ListingSectionOverview'
import ListingSectionSidebar from './ListingSectionSidebar'
import './ListingPage.css'

function ListingPage() {
  return (
    <Box className="listings-page">
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
          className="listings-hero"
          isAlternate
          image="listings"
          imageAlt="listings"
          title="Listing"
        >
          Listing Page
        </Hero>
        <Flex direction={{ sm: 'column', md: 'row' }} width="100%">
          <Box width={{ sm: '100%', md: 2 / 3 }} pr={{ sm: 0, md: 4 }}>
            <ListingSectionMap />
            <ListingSectionOverview />
            <ListingFooter />
          </Box>
          <Flex
            className="blog-feed__aside"
            bg="gray.500"
            direction="column"
            width={{ sm: '100%', md: 1 / 3 }}
            pl={{ sm: 'inherit', md: 12 }}
          >
            <ListingSectionSidebar />
            <Box>
              <Text fontSize="xl" color="primary.500">
                Contacts
              </Text>
              <Text fontSize="3xl" fontWeight="bold" my={4}>
                J.Nolan Mills
              </Text>
              <Text>704.248.2133</Text>
            </Box>
            <Box width="100%" px={{ sm: 'inherit', md: 'initial' }} my={4}>
              <PseudoBox
                as="button"
                display="block"
                mt={8}
                transition=".3s ease-in"
                border="1px"
                px={8}
                py={4}
                width={{ sm: '100%', md: '100%' }}
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
                  Schedule a consultation
                </Link>
              </PseudoBox>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default ListingPage
