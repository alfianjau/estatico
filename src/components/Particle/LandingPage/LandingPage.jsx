import React from 'react'
import { Flex, Box, Heading } from '@chakra-ui/core'
import Hero from '../../Molecule/Hero/Hero'
import Commercial from '../../Molecule/Commercial/Commercial'
import Investment from '../../Molecule/Investment/Investment'
import Residential from '../../Molecule/Residential/Residential'
import Career from '../../Molecule/Career/Career'
import Quote from '../../Molecule/Quote/Quote'
import BlogPreview from '../../Molecule/BlogPreview/BlogPreview'
import './LandingPage.css'

class LandingPage extends React.Component {
  render() {
    // const postList = this.getPostList()
    return (
      <Box className="homepage">
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
          <Hero />
          <Box
            width={{ sm: '100%', md: 2 / 3 }}
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
              Using experience and technology to achieve extraordinary results
              for commercial property investors
            </Heading>
          </Box>
          <Commercial />
          <Investment />
          <Residential />
          <Career />
          <Quote />
          <BlogPreview />
        </Flex>
      </Box>
    )
  }
}

export default LandingPage
