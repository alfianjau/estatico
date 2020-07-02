import { Box, Heading, Text } from '@chakra-ui/core'
import React, { useState } from 'react'
import { BsStarFill } from 'react-icons/bs'
import './TextList.css'

function TextList(props) {
  const [hasStar] = useState(props.hasStar)
  return (
    <Box my={8} className="text-list">
      {hasStar && (
        <Box className="star-box__item">
          <BsStarFill size="2rem" />
        </Box>
      )}
      <Heading as="h3" fontSize="3xl" mb={4}>
        {props.title}
      </Heading>
      <Text pl={12} fontSize="lg">
        {props.children}
      </Text>
    </Box>
  )
}

export default TextList
