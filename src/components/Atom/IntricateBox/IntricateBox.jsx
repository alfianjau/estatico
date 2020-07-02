import { Flex, Heading } from '@chakra-ui/core'
import React, { useState } from 'react'
import './IntricateBox.css'

function IntricateBox(props) {
  const [isDark] = useState(props.isDark)
  const [hasAlt] = useState(props.hasAlt)
  return (
    <Flex
      className={props.className}
      direction="column"
      width="100%"
      my={props.my}
      py={props.py}
      backgroundColor={props.backgroundColor}
    >
      <Heading
        as="h2"
        fontSize={{ sm: '3xl', md: '5xl' }}
        fontWeight="normal"
        pl={{ md: '5rem' }}
        mt={{ sm: 4 }}
        mb={{ sm: 4, md: 10 }}
        className="custom-quote__title"
        alignSelf="left"
        color={isDark ? 'white' : 'accent.500'}
      >
        {props.title}
      </Heading>
      {hasAlt && (
        <Heading
          as="h2"
          fontSize={{ sm: '3xl', md: '5xl' }}
          fontWeight="normal"
          pl={{ md: '5rem' }}
          mt={{ sm: 4 }}
          mb={{ sm: 4, md: 10 }}
          className="custom-quote__alttitle"
          alignSelf="left"
          color={isDark ? 'white' : 'accent.500'}
        >
          {props.subtitle}
        </Heading>
      )}
      <Flex className="__content">{props.children}</Flex>
    </Flex>
  )
}

export default IntricateBox
