import { Flex, Text, PseudoBox } from '@chakra-ui/core'
import React from 'react'
import { Link } from 'gatsby'
import SearchItem from '../../Atom/SearchItem/SearchItem'

function LocationSectionSearch() {
  return (
    <Flex direction="column" mt={{ md: '12rem' }}>
      <Text fontSize="2xl" mb={8}>
        Agent Search
      </Text>
      <PseudoBox
        as="button"
        display="block"
        transition=".3s ease-in"
        border="1px"
        px={8}
        py={4}
        my={{ sm: 4, md: 4 }}
        width={{ sm: 'auto', md: '100%' }}
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
          All Agent
        </Link>
      </PseudoBox>
      <PseudoBox
        as="button"
        display="block"
        transition=".3s ease-in"
        border="1px"
        px={8}
        py={4}
        my={{ sm: 4, md: 4 }}
        width={{ sm: 'auto', md: '100%' }}
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
        <Link className="composition__link" fontSize="lg" to="/agent">
          Go to Agent
        </Link>
      </PseudoBox>
      <SearchItem link="/blog">Multifamily</SearchItem>
      <SearchItem link="/blog">Multifamily 2</SearchItem>
      <SearchItem link="/blog">Multifamily 3</SearchItem>
    </Flex>
  )
}

export default LocationSectionSearch
