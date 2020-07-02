import { Flex, Heading, Box, Text } from '@chakra-ui/core'
import React, { useState } from 'react'
import './CommercialProperties.css'

function CommercialProperties() {
  return (
    <Flex
      className="commercial__properties"
      pt="5rem"
      mb={8}
      pb={{ sm: '12rem', md: '5rem' }}
      mt="-9rem"
      backgroundColor="accent.500"
      color="white"
      direction="column"
      zIndex="hide"
    >
      <Heading
        className="custom-quote__title custom-quote__title--center"
        as="h3"
        fontWeight="normal"
        fontSize="5xl"
        textAlign="center"
        mb={16}
      >
        Properties
      </Heading>
      <Flex direction={{ sm: 'column', md: 'row' }} py={8}>
        <Box width={{ sm: '100%', md: '50%' }} mb={8} fontSize="2xl">
          <Text fontWeight="bold" mb={8}>
            MemmoCRE offers a wide variety in property for rent or sale,
            including our own listings, listings sold cooperatively through
            other brokerages, and off-market properties.
          </Text>
          <Text>
            We focus on the commercial real estate properties with the greatest
            potential.
            <br />
            <br />
            Properties are selected based on specific opportunity and cost
            factors, so our buyer’s agents can match you with the prime
            properties to meet your commercial needs.
          </Text>
        </Box>
        <Box
          className="counter"
          display="flex"
          flexDirection={{ sm: 'column', md: 'row' }}
          width={{ sm: '100%', md: '50%' }}
        >
          <Box
            pl={8}
            flexGrow={1}
            mb={{ sm: 8 }}
            alignSelf={{ sm: 'center', md: 'flex-start' }}
          >
            <Text className="counter__number" fontSize="6xl" fontWeight="bold">
              +123
            </Text>
            <Text>Commercial properties</Text>
          </Box>
          <Box
            pl={8}
            display="flex"
            flexGrow={1}
            flexDirection="column"
            justifyContent="center"
            alignSelf={{ sm: 'flex-end', md: 'center' }}
          >
            <Text className="counter__number" fontSize="6xl" fontWeight="bold">
              +123
            </Text>
            <Text>Properties counter</Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  )
}

export default CommercialProperties
