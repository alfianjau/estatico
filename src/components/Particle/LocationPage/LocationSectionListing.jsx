import React from 'react'
import { Flex, Box, Text, ButtonGroup, Button } from '@chakra-ui/core'
import styled from '@emotion/styled'
import IntricateBox from '../../Atom/IntricateBox/IntricateBox'
import LocationListingCard from './LocationListingCard'

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

class LocationSectionListing extends React.Component {
  render() {
    // const postList = this.getPostList()
    return (
      <IntricateBox title="Team Listings" className="location-listing">
        <Flex direction="column">
          <ButtonGroup>
            <SortButton variantColor="primary" variant="solid">
              Name of Agent
            </SortButton>
            <SortButton variantColor="primary" variant="solid">
              Agent Type
            </SortButton>
            <SortButton variantColor="primary" variant="solid">
              Agent Location
            </SortButton>
            <SortButton variantColor="primary" variant="solid">
              Agent Status
            </SortButton>
            <SortButton variantColor="primary" variant="solid">
              Name of Agent
            </SortButton>
            <SortButton variantColor="primary" variant="solid">
              Agent Type
            </SortButton>
            <SortButton variantColor="primary" variant="solid">
              Agent Location
            </SortButton>
            <SortButton variantColor="primary" variant="solid">
              Agent Status
            </SortButton>
          </ButtonGroup>
          <Flex direction={{ sm: 'column', md: 'row' }}>
            <LocationListingCard
              hasMapPin
              imageSrc="listing-card"
              imageAlt="listing-card"
            >
              <Box
                className="card__info--floating"
                mx="auto"
                left="0"
                right="0"
                zIndex="docked"
                p="1rem"
                textAlign="center"
                fontSize={{ sm: '2xl', md: '4xl' }}
                fontWeight="normal"
                lineHeight="tight"
                position="relative"
                color="accent.500"
              >
                <Text as="h3" mb="1rem" fontSize="3xl" fontWeight="bold">
                  408 Craigleith Drive 3
                </Text>
                <Text fontSize="md" mb="2rem">
                  Waterloo, ON N2L5T2
                </Text>
                <Flex justifyContent="space-between">
                  <Box>
                    <Text as="h3" mb="1rem" fontSize="xl">
                      Price
                    </Text>
                    <Text as="h3" fontWeight="bold" fontSize="xl">
                      $23,000
                    </Text>
                  </Box>
                  <Box>
                    <Text as="h3" mb="1rem" fontSize="xl">
                      Bed
                    </Text>
                    <Text as="h3" fontWeight="bold" fontSize="xl">
                      2
                    </Text>
                  </Box>
                  <Box>
                    <Text as="h3" mb="1rem" fontSize="xl">
                      Bath
                    </Text>
                    <Text as="h3" fontWeight="bold" fontSize="xl">
                      3
                    </Text>
                  </Box>
                  <Box>
                    <Text as="h3" mb="1rem" fontSize="xl">
                      Sqft
                    </Text>
                    <Text as="h3" fontWeight="bold" fontSize="xl">
                      1,540
                    </Text>
                  </Box>
                </Flex>
                <Box fontSize="md">
                  <Text as="h3" my="2rem" fontSize="3xl" fontWeight="bold">
                    Listed 5 Days ago
                  </Text>
                </Box>
                <Box fontSize="md">
                  <Text as="h3" mb="1rem" fontSize="lg">
                    Courtesy of: Keller Williams Golden Triangle Realty
                  </Text>
                </Box>
              </Box>
            </LocationListingCard>
            <LocationListingCard
              hasMapPin
              imageSrc="listing-card"
              imageAlt="listing-card"
            >
              <Box
                className="card__info--floating"
                mx="auto"
                left="0"
                right="0"
                zIndex="docked"
                p="1rem"
                textAlign="center"
                fontSize={{ sm: '2xl', md: '4xl' }}
                fontWeight="normal"
                lineHeight="tight"
                position="relative"
                color="accent.500"
              >
                <Text as="h3" mb="1rem" fontSize="3xl" fontWeight="bold">
                  408 Craigleith Drive 3
                </Text>
                <Text fontSize="md" mb="2rem">
                  Waterloo, ON N2L5T2
                </Text>
                <Flex justifyContent="space-between">
                  <Box>
                    <Text as="h3" mb="1rem" fontSize="xl">
                      Price
                    </Text>
                    <Text as="h3" fontWeight="bold" fontSize="xl">
                      $23,000
                    </Text>
                  </Box>
                  <Box>
                    <Text as="h3" mb="1rem" fontSize="xl">
                      Bed
                    </Text>
                    <Text as="h3" fontWeight="bold" fontSize="xl">
                      2
                    </Text>
                  </Box>
                  <Box>
                    <Text as="h3" mb="1rem" fontSize="xl">
                      Bath
                    </Text>
                    <Text as="h3" fontWeight="bold" fontSize="xl">
                      3
                    </Text>
                  </Box>
                  <Box>
                    <Text as="h3" mb="1rem" fontSize="xl">
                      Sqft
                    </Text>
                    <Text as="h3" fontWeight="bold" fontSize="xl">
                      1,540
                    </Text>
                  </Box>
                </Flex>
                <Box fontSize="md">
                  <Text as="h3" my="2rem" fontSize="3xl" fontWeight="bold">
                    Listed 5 Days ago
                  </Text>
                </Box>
                <Box fontSize="md">
                  <Text as="h3" mb="1rem" fontSize="lg">
                    Courtesy of: Keller Williams Golden Triangle Realty
                  </Text>
                </Box>
              </Box>
            </LocationListingCard>
          </Flex>
        </Flex>
      </IntricateBox>
    )
  }
}

export default LocationSectionListing
