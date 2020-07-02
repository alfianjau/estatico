import { Flex, Heading, Box } from '@chakra-ui/core'
import React, { useState } from 'react'
import TextComposition from '../../Atom/TextComposition/TextComposition'
import './CustomQuote.css'

function CustomQuote(props) {
  const [isAlternate] = useState(props.isAlternate)
  const [title] = useState(props.title)
  const [subtitle] = useState(props.subtitle)
  return (
    <Flex
      className="custom-quote"
      direction={{ sm: 'column', md: 'row' }}
      my="4rem"
      backgroundColor={{ sm: 'gray.500', md: 'transparent' }}
    >
      {isAlternate ? <Heading as="h2">jajal</Heading> : ``}
      <Flex width={{ sm: '100%', md: '50%' }}>
        <Box alignSelf="center">
          <Heading
            as="h2"
            fontSize={{ sm: '3xl', md: '5xl' }}
            fontWeight="normal"
            pl={{ md: '5rem' }}
            mt={{ sm: 4 }}
            mb={{ sm: 4, md: 10 }}
            className="custom-quote__title"
          >
            {title}
          </Heading>
          {subtitle && (
            <Heading
              as="h3"
              fontSize={{ sm: '3xl', md: '5xl' }}
              fontWeight="normal"
              pl={{ md: '5rem' }}
              mt={{ sm: 4 }}
              mb={{ sm: 4, md: 10 }}
            >
              {props.subtitle}
            </Heading>
          )}
        </Box>
      </Flex>
      <Flex width={{ sm: '100%', md: '50%' }}>
        <TextComposition
          isCustomQuote
          noButton
          variant="h2"
          btnTitle="More info"
          btnLink="/blog/"
          addText={props.description}
        >
          {props.subText}
        </TextComposition>
      </Flex>
    </Flex>
  )
}

export default CustomQuote
