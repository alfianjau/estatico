import { Text, Box, Divider } from '@chakra-ui/core'
import { Link } from 'gatsby'
import React from 'react'
import './SearchItem.css'

function SearchItem(props) {
  return (
    <Box width="100%" my={4}>
      <Text fontSize="xl">{props.children}</Text>
      <Link to={props.link}>Show</Link>
      <Divider borderColor="primary.500" />
    </Box>
  )
}

export default SearchItem
