import React from 'react'
import { Flex, Box, Text, Heading } from '@chakra-ui/core'
import { useStaticQuery, graphql } from 'gatsby'
import Hero from '../../Molecule/Hero/Hero'
import IntricateBox from '../../Atom/IntricateBox/IntricateBox'
import DImage from '../../Atom/DImage/DImage'
import './OfficesPage.css'

const OfficesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allBridgeOffices(filter: { id: { ne: "dummy" } }) {
        edges {
          node {
            id
            value {
              OfficeKey
              OfficeCity
              OfficeName
            }
          }
        }
      }
    }
  `)

  const officeEdges = data.allBridgeOffices.edges[0].node.value
  // console.log(data)

  return (
    <Box className="Offices-page">
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
          image="offices"
          imageAlt="offices"
          title="Find a Location near you"
        >
          Offices locations
        </Hero>
        <IntricateBox title="Office Locations" className="offices">
          {officeEdges.map((office) => {
            return (
              <Box
                key={office.OfficeKey}
                position="relative"
                width={{ sm: '100%', md: '33.3%' }}
              >
                <DImage alt="gainsville" filename="gainsville.jpg" />
                <Box className="office-information">
                  <Heading fontSize="45px" mb="2rem">
                    {office.OfficeName}
                  </Heading>
                  <Text>{office.OfficeCity}</Text>
                </Box>
              </Box>
            )
          })}
        </IntricateBox>
      </Flex>
    </Box>
  )
}

export default OfficesPage
