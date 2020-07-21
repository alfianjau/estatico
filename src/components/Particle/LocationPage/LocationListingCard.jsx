/* eslint-disable no-nested-ternary */
// Card Element

import React, { useState } from 'react'
import { Box, Text } from '@chakra-ui/core'
import { FiMapPin } from 'react-icons/fi'
import DImage from '../../Atom/DImage/DImage'
import '../../Atom/CardFlex/CardFlex.css'

function LocationListingCard(props) {
  const [hasFloatingBox] = useState(props.hasFloatingBox)
  const [hasMapPin] = useState(props.hasMapPin)

  return (
    <Box
      className="card team-card"
      overflow="hidden"
      my={6}
      width={{ sm: '100%', md: '100%' }}
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
          position="relative"
        >
          <Text>{props.floatingText}</Text>
        </Box>
      )}
      {hasMapPin && (
        <Box
          className="card__map-pin"
          mt="-5rem"
          ml="1rem"
          mr="auto"
          left="0"
          textAlign="center"
          fontSize={{ sm: '2xl', md: '4xl' }}
          lineHeight="tight"
          position="absolute"
        >
          <FiMapPin color="white" />
        </Box>
      )}
      {props.children}
    </Box>
  )
}

export default LocationListingCard
