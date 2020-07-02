import React from 'react'
import { Flex, Box } from '@chakra-ui/core'
import TextComposition from '../../Atom/TextComposition/TextComposition'
import DImage from '../../Atom/DImage/DImage'
import './Investment.css'

function Investment() {
  return (
    <Flex
      direction="column"
      justifyContent={{ md: 'center' }}
      height={{ md: '57em' }}
      my={{ sm: '3rem' }}
    >
      <Flex
        className="investment"
        direction={{ sm: 'column-reverse', md: 'row' }}
        width="100%"
      >
        <TextComposition
          altHeading
          altButton
          variant="h2"
          title="Investments"
          btnTitle="More info"
          btnLink="/blog/"
          addText={`Our experts work with both large- and small-scale commercial property to build and manage portfolios, with specialized experience targeting high-value off-market opportunities.

We see what the others don’t, ensuring our vision helps you realize yours.`}
        >
          Connecting With Commercial Property Investors to Realize Their Vision
        </TextComposition>
        <Box className="investment__image" width={{ sm: '100%', md: '50%' }}>
          <DImage alt="heloquence" filename="helloquence.jpg" />
        </Box>
      </Flex>
    </Flex>
  )
}

export default Investment
