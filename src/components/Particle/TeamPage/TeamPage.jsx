import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Flex, Box, Text, PseudoBox } from '@chakra-ui/core'
import { FiMail, FiPhone } from 'react-icons/fi'
import { BsArrowRight } from 'react-icons/bs'
import Hero from '../../Molecule/Hero/Hero'
import IntricateBox from '../../Atom/IntricateBox/IntricateBox'
import TeamCard from './TeamCard'
import './TeamPage.css'

const TeamPage = () => {
  // const postList = this.getPostList()
  const data = useStaticQuery(graphql`
    query {
      allBridgeAgents {
        edges {
          node {
            bundle {
              MemberKeyNumeric
              MemberFullName
              MemberMobilePhone
              MemberFax
              MemberType
            }
          }
        }
      }
    }
  `)

  const agentEdges = data.allBridgeAgents.edges[0].node.bundle

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
          image="team-page"
          imageAlt="team-page"
          title="Our Team"
        >
          Our Team
        </Hero>
        <IntricateBox title="Our Team" className="teams">
          <Flex flexWrap="wrap">
            {agentEdges.map((agent) => {
              return (
                <Box
                  key={agent.MemberKeyNumeric}
                  width={{ sm: '100%', md: 1 / 3 }}
                  p={{ md: 4 }}
                >
                  <TeamCard
                    imageSrc="about-person"
                    imageAlt="about-person"
                    width="100%"
                  >
                    <Box
                      className="card__info--floating"
                      mt="-4rem"
                      mx="auto"
                      left="0"
                      right="0"
                      zIndex="docked"
                      p="1rem"
                      width="80%"
                      textAlign="center"
                      fontSize={{ sm: '2xl', md: '4xl' }}
                      fontWeight="normal"
                      lineHeight="tight"
                      background="white"
                      position="relative"
                      color="accent.500"
                    >
                      <Text as="h3" mb="1rem" fontSize="3xl" fontWeight="bold">
                        {agent.MemberFullName}
                      </Text>
                      <Text fontSize="md" mb="2rem">
                        {agent.MemberType}
                      </Text>
                      <Box fontSize="md">
                        <p>
                          <Box
                            as="span"
                            verticalAlign="text-top"
                            display="inline-block"
                            mr={4}
                            mb={4}
                          >
                            <FiPhone />
                          </Box>
                          {agent.MemberMobilePhone}
                        </p>
                      </Box>
                      <Box fontSize="md">
                        <p>
                          <Box
                            as="span"
                            verticalAlign="text-top"
                            display="inline-block"
                            mr={4}
                            mb={8}
                          >
                            <FiMail />
                          </Box>
                          <span fontSize="md">{agent.MemberFax}</span>
                        </p>
                      </Box>
                      <PseudoBox
                        as="button"
                        fontSize="lg"
                        display="flex"
                        alignItems="center"
                        m="auto"
                      >
                        <Text fontWeight="bold">View profile</Text>
                        <BsArrowRight className="composition__link--arrow" />
                      </PseudoBox>
                    </Box>
                  </TeamCard>
                </Box>
              )
            })}
          </Flex>
        </IntricateBox>
      </Flex>
    </Box>
  )
}

export default TeamPage
