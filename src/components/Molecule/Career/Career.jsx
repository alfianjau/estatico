import React from 'react'
import { Flex, Box } from '@chakra-ui/core'
import TextComposition from '../../Atom/TextComposition/TextComposition'
import DImage from '../../Atom/DImage/DImage'
import './Career.css'

function Career() {
  return (
    <Flex
      direction="column"
      justifyContent={{ md: 'center' }}
      height={{ md: '57em' }}
      my={{ sm: '3rem' }}
    >
      <Flex
        className="career"
        direction={{ sm: 'column-reverse', md: 'row' }}
        alignItems={{ md: 'center' }}
        width="100%"
      >
        <TextComposition
          altHeading
          noButton
          variant="h2"
          title="Agents and Clients: Partners in Success"
          btnTitle="More info"
          btnLink="/blog/"
          addText={`MemmoCRE operates on the premise that commercial real estate professionals and their clients should work together seamlessly with thoughtful strategy and teamwork.

Learn more about opportunities to join one of our teams, blending distinct disciplines and technology platforms into real estate success.`}
        >
          Agents and clients are two sides of the equation, and the formula
          equals success.
        </TextComposition>
        <Box className="career__image" width={{ sm: '100%', md: '50%' }}>
          <DImage alt="hunters-race" filename="hunters-race.jpg" />
        </Box>
      </Flex>
    </Flex>
  )
}

export default Career
