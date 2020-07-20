import { Flex, Box, PseudoBox } from '@chakra-ui/core'
import React, { useState } from 'react'
import { Link } from 'gatsby'
import Hero from '../../Molecule/Hero/Hero'
import CardBox from '../../Atom/CardBox/CardBox'
import ListingFooter from './ListingFooter'
import ListingSectionOverview from './ListingSectionOverview'
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
          <Box width={{ sm: '100%', md: 2 / 3 }} pr={4}>
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
              <PseudoBox
                as="button"
                display="block"
                mt={8}
                transition=".3s ease-in"
                border="1px"
                px={8}
                py={4}
                width={{ sm: 'auto', md: '100%' }}
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
