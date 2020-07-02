/* eslint-disable no-nested-ternary */
// Card Element

import React, { useState } from 'react'
import { Box, Text } from '@chakra-ui/core'
import DImage from '../DImage/DImage'
import './CardFlex.css'

function CardFlex(props) {
  const [hasFloatingBox] = useState(props.hasFloatingBox)
  const [hasDescription] = useState(props.hasDescription)

  return (
    <Box
      className="card card--flex"
      overflow="hidden"
      mx={{ md: '1rem' }}
      my={6}
      width={props.width}
    >
      <DImage alt={props.imageAlt} filename={props.imageSrc} />
      {hasFloatingBox && (
        <Box
          className="card__info--floating"
          mt="-4rem"
          mx="auto"
          left="0"
          right="0"
          zIndex="docked"
          p="4rem"
          width="80%"
          textAlign="center"
          fontSize={{ sm: '2xl', md: '4xl' }}
          fontWeight="bold"
          lineHeight="tight"
          background="white"
          position="relative"
        >
          <Text>{props.floatingText}</Text>
        </Box>
      )}
      {hasDescription && (
        <Box
          className="card__description"
          my={6}
          p={{ sm: '1rem', md: '2.5rem' }}
          fontSize={{ sm: 'xl', md: '3xl' }}
          lineHeight="tight"
          textAlign="center"
        >
          <Text>{props.children}</Text>
        </Box>
      )}
    </Box>
  )
}

export default CardFlex
