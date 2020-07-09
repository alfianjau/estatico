import React from 'react'
import { Flex, Box, Text, PseudoBox } from '@chakra-ui/core'
import { FiMail, FiPhone } from 'react-icons/fi'
import { BsArrowRight } from 'react-icons/bs'
import Hero from '../../Molecule/Hero/Hero'
import AgentSectionListing from './AgentSectionListing'
import AgentSectionInfo from './AgentSectionInfo'
import AgentSectionDetail from './AgentSectionDetail'
import BlogPreview from '../../Molecule/BlogPreview/BlogPreview'
import './AgentPage.css'

class AgentPage extends React.Component {
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
          <AgentSectionInfo />
          <AgentSectionDetail />
          <AgentSectionListing />
          <BlogPreview />
        </Flex>
      </Box>
    )
  }
}

export default AgentPage
