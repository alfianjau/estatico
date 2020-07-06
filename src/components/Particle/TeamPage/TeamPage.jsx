import React from 'react'
import { Flex, Box } from '@chakra-ui/core'
import Hero from '../../Molecule/Hero/Hero'
import IntricateBox from '../../Atom/IntricateBox/IntricateBox'
import DImage from '../../Atom/DImage/DImage'
import './TeamPage.css'

class TeamPage extends React.Component {
  render() {
    // const postList = this.getPostList()
    return (
      <Box className="team-page">
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
            image="our-team"
            imageAlt="our-team"
            title="Our Team"
          >
            Our Team
          </Hero>
          <IntricateBox title="[Placeholder]" className="offices">
            <Box width={{ sm: '100%', md: '33.3%' }}>
              <DImage alt="offices" filename="offices.jpg" />
            </Box>
            <Box width={{ sm: '100%', md: '33.3%' }}>
              <DImage alt="offices" filename="offices.jpg" />
            </Box>
            <Box width={{ sm: '100%', md: '33.3%' }}>
              <DImage alt="offices" filename="offices.jpg" />
            </Box>
          </IntricateBox>
        </Flex>
      </Box>
    )
  }
}

export default TeamPage
