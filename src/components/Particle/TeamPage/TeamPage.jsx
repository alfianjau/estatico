import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'
import {
  Flex,
  Box,
  Text,
  PseudoBox,
  ButtonGroup,
  Button,
} from '@chakra-ui/core'
import { FiMail, FiPhone } from 'react-icons/fi'
import { BsArrowRight } from 'react-icons/bs'
import Hero from '../../Molecule/Hero/Hero'
import IntricateBox from '../../Atom/IntricateBox/IntricateBox'
import TeamCard from './TeamCard'
import './TeamPage.css'

const SortButton = styled(Button)`
  & {
    background-color: var(--accent-gray);
    border-radius: 0;
    width: 25%;
    padding: 2rem 3rem;
    margin: 0;
    @media (max-width: 750px) {
      /* Mobile custom breakpoint */
      width: 100%;
    }
  }
  &:focus-within {
    border-color: black;
    box-shadow: 0 0 0 3px #2bbaa4;
  }
`

const TeamPage = () => {
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
              MemberStateOrProvince
              MemberStatus
            }
          }
        }
      }
    }
  `)

  const agentEdges = data.allBridgeAgents.edges[0].node.bundle
  const [sorted, setSorted] = useState([...agentEdges])

  useEffect(() => {
    if (sorted) {
      setSorted(sorted)
    }
  }, [sorted])

  const sortedByName = _.sortBy(agentEdges, (e) => e.MemberFullName)
  const sortedByType = _.sortBy(agentEdges, (e) => e.MemberType)
  const sortedByLocation = _.sortBy(agentEdges, (e) => e.MemberStateOrProvince)
  const sortedByStatus = _.sortBy(agentEdges, (e) => e.MemberStatus)

  const handleSortedByName = () => {
    setSorted([...sortedByName])
  }
  const handleSortedByType = () => {
    setSorted([...sortedByType])
  }
  const handleSortedByLocation = () => {
    setSorted([...sortedByLocation])
  }
  const handleSortedByStatus = () => {
    setSorted([...sortedByStatus])
  }

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
        <IntricateBox title="Our Team" className="teams" flexDirection="column">
          <Flex direction="column">
            <ButtonGroup>
              <SortButton
                variantColor="primary"
                variant="solid"
                onClick={handleSortedByName}
              >
                Name of Agent
              </SortButton>
              <SortButton
                variantColor="primary"
                variant="solid"
                onClick={handleSortedByType}
              >
                Agent Type
              </SortButton>
              <SortButton
                variantColor="primary"
                variant="solid"
                onClick={handleSortedByLocation}
              >
                Agent Location
              </SortButton>
              <SortButton
                variantColor="primary"
                variant="solid"
                onClick={handleSortedByStatus}
              >
                Agent Status
              </SortButton>
            </ButtonGroup>

            <Flex flexWrap="wrap" mx="-1rem">
              {sorted.map((agent) => {
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
                        <Text
                          as="h3"
                          mb="1rem"
                          fontSize="3xl"
                          fontWeight="bold"
                        >
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
          </Flex>
        </IntricateBox>
      </Flex>
    </Box>
  )
}

export default TeamPage
