import { Flex, Box, Divider, PseudoBox, Text } from '@chakra-ui/core'
import React, { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'gatsby'

function ListingFooter() {
  return (
    <Box className="post-footer">
      <Divider />
      <Flex justifyContent="space-between">
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
            Schedule a consultation
          </Link>
        </PseudoBox>
        <PseudoBox
          as="button"
          display="block"
          className="composition__button--alt"
          transition=".3s ease-in"
          px={8}
          py={4}
          rounded="2px"
          fontSize="lg"
          fontWeight="semibold"
          color="accent.500"
        >
          <Link
            className="composition__link"
            color="accent.500"
            fontSize="lg"
            display="inline-flex"
            to="/blog"
          >
            Go to blog
            <BsArrowRight className="composition__link--arrow" />
          </Link>
        </PseudoBox>
      </Flex>
    </Box>
  )
}

export default ListingFooter
