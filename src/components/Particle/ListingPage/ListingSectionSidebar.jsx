import { Box } from '@chakra-ui/core'
import React, { useState } from 'react'
import InfoBox from '../../Atom/InfoBox/InfoBox'

function ListingSectionSidebar() {
  return (
    <Box pt={{ md: '9rem' }}>
      <InfoBox label="for">Sale</InfoBox>
      <InfoBox label="Property Type">Land</InfoBox>
      <InfoBox label="Acres Available">7.00</InfoBox>
      <InfoBox label="Price">$ 210.000</InfoBox>
      <InfoBox label="Zoning">R-20 & B-1</InfoBox>
    </Box>
  )
}

export default ListingSectionSidebar
