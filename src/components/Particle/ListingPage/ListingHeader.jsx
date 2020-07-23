import { Flex, Box, Divider, PseudoBox, Text } from '@chakra-ui/core'
import React, { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'gatsby'

function ListingHeader() {
  return (
    <Box className="listing-header" my={8}>
      <Flex
        justifyContent="space-between"
        direction={{ sm: 'column', md: 'row' }}
      >
        <Text fontSize="3xl">Waterloo, ON N2L5T2</Text>
        <PseudoBox
          as="button"
          display="block"
          transition=".3s ease-in"
          border="1px"
          px={8}
          py={4}
          width={{ sm: 'auto', md: '18rem' }}
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
            View Flyer
          </Link>
        </PseudoBox>
      </Flex>
    </Box>
  )
}

export default ListingHeader
