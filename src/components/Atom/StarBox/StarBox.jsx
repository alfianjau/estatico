import { Box, Heading, Text } from '@chakra-ui/core'
import React, { useState } from 'react'
import { BsStarFill, BsCircleFill } from 'react-icons/bs'
import './StarBox.css'

function StarBox(props) {
  return (
    <Box className="geometric-box">
      <Box className="star-box">
        <Box className="star-box__item">
          <BsStarFill size="4rem" />
        </Box>
        <Box className="star-box__dot" color="primary.500">
          <BsCircleFill size="1rem" />
        </Box>
      </Box>
      <Box mt={12}>
        <Text fontWeight="bold" fontSize="2xl" textAlign="center">
          {props.title}
        </Text>
        <Text mt={4} textAlign="center">
          {props.children}
        </Text>
      </Box>
    </Box>
  )
}

export default StarBox
