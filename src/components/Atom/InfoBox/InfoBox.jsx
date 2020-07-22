import { Box, Text, Divider } from '@chakra-ui/core'
import React, { useState } from 'react'
import './InfoBox.css'

function InfoBox(props) {
  return (
    <Box {...props}>
      <Text fontSize="xl" color="primary.500">
        {props.label}
      </Text>
      <Text fontSize="3xl" fontWeight="bold" my={4}>
        {props.children}
      </Text>
      <Divider borderColor="primary.500" mt={4} />
    </Box>
  )
}

export default InfoBox
