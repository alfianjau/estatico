import React from 'react'
import { Flex, Box, Text, PseudoBox } from '@chakra-ui/core'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { BsArrowRight } from 'react-icons/bs'
import IntricateBox from '../../Atom/IntricateBox/IntricateBox'
import AgentListingCard from './AgentListingCard'

class AgentSecctionListing extends React.Component {
  render() {
    // const postList = this.getPostList()
    return (
      <IntricateBox title="Team Listings" className="teams">
        <Flex direction={{ sm: 'column', md: 'row' }}>
          <AgentListingCard
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
              background="white"
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
          </AgentListingCard>
          <AgentListingCard
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
              background="white"
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
          </AgentListingCard>
          <AgentListingCard
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
              background="white"
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
          </AgentListingCard>
        </Flex>
      </IntricateBox>
    )
  }
}

export default AgentSecctionListing
