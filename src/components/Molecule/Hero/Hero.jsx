import React, { useState } from 'react'
import { Flex, Box } from '@chakra-ui/core'
import TextComposition from '../../Atom/TextComposition/TextComposition'
import DImage from '../../Atom/DImage/DImage'
import './Hero.css'

function Hero(props) {
  const { children, title } = props
  const [isAlternate] = useState(props.isAlternate)
  const [noButton] = useState(props.noButton)
  const [isDark] = useState(props.isDark)
  const [image] = useState(props.image)
  const [imageAlt] = useState(props.imageAlt)

  return (
    <Flex
      direction="column"
      justifyContent={{ md: 'center' }}
      height={{ md: 'calc(100vh - 20rem)' }}
      width="100%"
      mb="10rem"
    >
      <Flex
        className={isDark ? 'hero hero--dark' : 'hero'}
        direction={{ sm: 'column', md: 'row' }}
        width="100%"
      >
        <Box className="hero__image" width={{ sm: '100%', md: '50%' }}>
          <DImage
            alt={imageAlt ? `${imageAlt}` : 'Testing'}
            filename={image ? `${image}.jpg` : 'sean-pollock.jpg'}
          />
        </Box>
        <TextComposition
          variant="h1"
          title={isAlternate ? title : 'Local. Everywhere.'}
          {...(noButton && { noButton })}
          {...(isDark && { isDark })}
          btnTitle="Schedule Consultation"
          btnLink="/blog/"
        >
          {isAlternate
            ? children
            : `Successful commercial real estate execution blends location with perfect timing and market knowledge.

Boots on the ground means maximizing your growth potential.`}
        </TextComposition>
      </Flex>
    </Flex>
  )
}

export default Hero
