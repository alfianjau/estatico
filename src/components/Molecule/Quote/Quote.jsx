import React from 'react'
import { Flex, Box } from '@chakra-ui/core'
import TextComposition from '../../Atom/TextComposition/TextComposition'
import './Quote.css'

function Quote() {
  return (
    <Flex
      direction="column"
      className="quote-wrapper"
      justifyContent={{ md: 'center' }}
      mb={{ sm: '3rem' }}
      mt={{ sm: '3rem', md: '-6rem' }}
      py={{ md: '10rem' }}
      backgroundColor="accent.500"
    >
      <Flex
        className="quote"
        direction={{ sm: 'column-reverse', md: 'row' }}
        alignItems={{ md: 'center' }}
        width="100%"
      >
        <TextComposition
          isDark
          noButton
          variant="h2"
          title="Quotes"
          btnTitle="More info"
          btnLink="/blog/"
          addText={`KW Crosstown is committed to growing interdisciplinary teams of real estate experts in strategic markets across the United States and internationally.

Contact us to learn about joining or starting your own team`}
        >
          Our Commitment
        </TextComposition>
        <Box className="quote__image" width={{ sm: '100%', md: '50%' }} />
      </Flex>
    </Flex>
  )
}

export default Quote
