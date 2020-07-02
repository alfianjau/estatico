import React, { useState } from 'react'
import { PseudoBox } from '@chakra-ui/core'
import './Btn.css'

function Btn({ ...props }) {
  const { children } = props
  const [isOutline] = useState(props.isOutline)
  return (
    <>
      <PseudoBox
        as="button"
        transition=".3s ease-in"
        border="1px"
        my={4}
        px={8}
        py={4}
        width="100%"
        rounded="2px"
        fontSize="lg"
        fontWeight="semibold"
        bg={isOutline ? 'gray.500' : 'primary.500'}
        borderColor={isOutline ? 'primary.500' : '#ccd0d5'}
        color={isOutline ? 'black' : 'white'}
        _hover={{ bg: 'accent.500', color: 'white' }}
        _active={{
          bg: '#dddfe2',
          transform: 'scale(0.98)',
          borderColor: '#bec3c9',
        }}
        _focus={{
          boxShadow:
            '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
        }}
      >
        {children}
      </PseudoBox>
    </>
  )
}

export default Btn
