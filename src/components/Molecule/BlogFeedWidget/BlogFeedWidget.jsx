import { Box } from '@chakra-ui/core'
import React from 'react'
import Btn from '../../Atom/Btn/Btn'
import './BlogFeedWidget.css'

function BlogFeedWidget() {
  return (
    <Box px={{ sm: 'inherit', md: 4 }} my={8}>
      <Box as="p" fontSize="3xl">
        Some Headline
      </Box>
      <Btn isOutline>Jone Lemon</Btn>
      <Btn isOutline>Email</Btn>
      <Box my={8}>
        <Btn my={8}>Sign Up</Btn>
      </Box>
    </Box>
  )
}

export default BlogFeedWidget
