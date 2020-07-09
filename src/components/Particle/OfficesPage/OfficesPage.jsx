import React, { useState, useEffect } from 'react'
import { Flex, PseudoBox, Box, Text, Heading } from '@chakra-ui/core'
import { useStaticQuery, graphql } from 'gatsby'
import Hero from '../../Molecule/Hero/Hero'
import IntricateBox from '../../Atom/IntricateBox/IntricateBox'
import DImage from '../../Atom/DImage/DImage'
import './OfficesPage.css'

const OfficesPage = () => {
  const [filtered, setFiltered] = useState(true)

  useEffect(() => {
    if (filtered) {
      setFiltered(filtered)
    }
  }, [filtered])

  const data = useStaticQuery(graphql`
    query {
      allBridgeOffices(filter: { id: { ne: "dummy" } }) {
        edges {
          node {
            id
            value {
              OfficeKeyNumeric
              OfficeCity
              OfficeStateOrProvince
            }
          }
        }
      }
    }
  `)

  const officeEdges = data.allBridgeOffices.edges[0].node.value
  // console.log(data)

  return (
    <Box className="offices-page">
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
          {filtered === true
            ? officeEdges.slice(0, 9).map((office) => {
                return (
                  <Box
                    key={office.OfficeKeyNumeric}
                    position="relative"
                    width={{ sm: '100%', md: '33.3%' }}
                  >
                    <DImage alt="gainsville" filename="gainsville.jpg" />
                    <Box className="office-information">
                      <Heading fontSize="45px" mb="2rem">
                        {office.OfficeStateOrProvince}
                      </Heading>
                      <Text>{office.OfficeCity}</Text>
                    </Box>
                  </Box>
                )
              })
            : officeEdges.map((office) => {
                return (
                  <Box
                    key={office.OfficeKeyNumeric}
                    position="relative"
                    width={{ sm: '100%', md: '33.3%' }}
                  >
                    <DImage alt="gainsville" filename="gainsville.jpg" />
                    <Box className="office-information">
                      <Heading fontSize="45px" mb="2rem">
                        {office.OfficeStateOrProvince}
                      </Heading>
                      <Text>{office.OfficeCity}</Text>
                    </Box>
                  </Box>
                )
              })}
          {filtered === true && (
            <PseudoBox
              position="relative"
              width="100%"
              cursor="pointer"
              minHeight="inherit"
              onClick={() => setFiltered(!filtered)}
            >
              <DImage alt="phoenix" filename="phoenix.jpg" />
              <Box className="office-information">
                <Heading fontSize="2xl" mb="2rem" fontWeight="500">
                  See other locations
                </Heading>
                <Text>OUR NEXT LOCATION</Text>
              </Box>
            </PseudoBox>
          )}
        </IntricateBox>
      </Flex>
    </Box>
  )
}

export default OfficesPage
