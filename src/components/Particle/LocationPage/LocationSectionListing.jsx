import React, { useEffect, useState } from 'react'
import {
  Flex,
  Box,
  Text,
  ButtonGroup,
  Button,
  Divider,
  PseudoBox,
} from '@chakra-ui/core'
import { Link } from 'gatsby'
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

const LocationSectionListing = () => {
  const [filtered, setFiltered] = useState(true)

  useEffect(() => {
    if (filtered) {
      setFiltered(filtered)
    }
  }, [filtered])

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
        <Flex direction={{ sm: 'column', md: 'row' }} flexWrap="wrap">
          <Box width={{ sm: '100%', md: 1 / 2 }} px={{ sm: 0, md: 4 }}>
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
                <Divider borderColor="accent.500" />
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
                <Divider borderColor="accent.500" />
                <Box fontSize="md">
                  <Text as="h3" my="2rem" fontSize="3xl" fontWeight="bold">
                    Sale
                  </Text>
                </Box>
                <Box fontSize="md">
                  <Text as="h3" mb="1rem" fontSize="lg">
                    Courtesy of: Keller Williams Golden Triangle Realty
                  </Text>
                </Box>
              </Box>
              <PseudoBox className="card__button" bg="primary.500">
                <span>
                  <Link className="tag__link" to="/blog">
                    Read more
                  </Link>
                </span>
              </PseudoBox>
            </LocationListingCard>
          </Box>
          <Box width={{ sm: '100%', md: 1 / 2 }} px={{ sm: 0, md: 4 }}>
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
                <Divider borderColor="accent.500" />
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
                <Divider borderColor="accent.500" />
                <Box fontSize="md">
                  <Text as="h3" my="2rem" fontSize="3xl" fontWeight="bold">
                    Sale
                  </Text>
                </Box>
                <Box fontSize="md">
                  <Text as="h3" mb="1rem" fontSize="lg">
                    Courtesy of: Keller Williams Golden Triangle Realty
                  </Text>
                </Box>
              </Box>
              <PseudoBox className="card__button" bg="primary.500">
                <span>
                  <Link className="tag__link" to="/blog">
                    Read more
                  </Link>
                </span>
              </PseudoBox>
            </LocationListingCard>
          </Box>
          <Box width={{ sm: '100%', md: 1 / 2 }} px={{ sm: 0, md: 4 }}>
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
                <Divider borderColor="accent.500" />
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
                <Divider borderColor="accent.500" />
                <Box fontSize="md">
                  <Text as="h3" my="2rem" fontSize="3xl" fontWeight="bold">
                    Sale
                  </Text>
                </Box>
                <Box fontSize="md">
                  <Text as="h3" mb="1rem" fontSize="lg">
                    Courtesy of: Keller Williams Golden Triangle Realty
                  </Text>
                </Box>
              </Box>
              <PseudoBox className="card__button" bg="primary.500">
                <span>
                  <Link className="tag__link" to="/blog">
                    Read more
                  </Link>
                </span>
              </PseudoBox>
            </LocationListingCard>
          </Box>
          <Box width={{ sm: '100%', md: 1 / 2 }} px={{ sm: 0, md: 4 }}>
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
                <Divider borderColor="accent.500" />
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
                <Divider borderColor="accent.500" />
                <Box fontSize="md">
                  <Text as="h3" my="2rem" fontSize="3xl" fontWeight="bold">
                    Sale
                  </Text>
                </Box>
                <Box fontSize="md">
                  <Text as="h3" mb="1rem" fontSize="lg">
                    Courtesy of: Keller Williams Golden Triangle Realty
                  </Text>
                </Box>
              </Box>
              <PseudoBox className="card__button" bg="primary.500">
                <span>
                  <Link className="tag__link" to="/blog">
                    Read more
                  </Link>
                </span>
              </PseudoBox>
            </LocationListingCard>
          </Box>
          <Box width={{ sm: '100%', md: 1 / 2 }} px={{ sm: 0, md: 4 }}>
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
                <Divider borderColor="accent.500" />
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
                <Divider borderColor="accent.500" />
                <Box fontSize="md">
                  <Text as="h3" my="2rem" fontSize="3xl" fontWeight="bold">
                    Sale
                  </Text>
                </Box>
                <Box fontSize="md">
                  <Text as="h3" mb="1rem" fontSize="lg">
                    Courtesy of: Keller Williams Golden Triangle Realty
                  </Text>
                </Box>
              </Box>
              <PseudoBox className="card__button" bg="primary.500">
                <span>
                  <Link className="tag__link" to="/blog">
                    Read more
                  </Link>
                </span>
              </PseudoBox>
            </LocationListingCard>
          </Box>
          <Box width={{ sm: '100%', md: 1 / 2 }} px={{ sm: 0, md: 4 }}>
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
                <Divider borderColor="accent.500" />
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
                <Divider borderColor="accent.500" />
                <Box fontSize="md">
                  <Text as="h3" my="2rem" fontSize="3xl" fontWeight="bold">
                    Sale
                  </Text>
                </Box>
                <Box fontSize="md">
                  <Text as="h3" mb="1rem" fontSize="lg">
                    Courtesy of: Keller Williams Golden Triangle Realty
                  </Text>
                </Box>
              </Box>
              <PseudoBox className="card__button" bg="primary.500">
                <span>
                  <Link className="tag__link" to="/blog">
                    Read more
                  </Link>
                </span>
              </PseudoBox>
            </LocationListingCard>
          </Box>

          <PseudoBox
            as="button"
            display="block"
            my={16}
            mx="auto"
            transition=".3s ease-in"
            border="1px"
            px={8}
            py={4}
            width={{ sm: 'auto', md: '20rem' }}
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
              Load More
            </Link>
          </PseudoBox>
        </Flex>
      </Flex>
    </IntricateBox>
  )
}

export default LocationSectionListing
