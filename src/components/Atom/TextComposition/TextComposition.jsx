import { Flex, PseudoBox, Heading, Text } from '@chakra-ui/core'
import React, { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'gatsby'
import './TextComposition.css'

function TextComposition(props) {
  const [title] = useState(props.title)
  const [variant] = useState(props.variant)
  const [noButton] = useState(props.noButton)
  const [btnTitle] = useState(props.btnTitle)
  const [btnLink] = useState(props.btnLink)
  const [isDark] = useState(props.isDark)
  const [altHeading] = useState(props.altHeading)
  const [altButton] = useState(props.altButton)
  const [addText] = useState(props.addText)
  const [isCustomQuote] = useState(props.isCustomQuote)

  return (
    <Flex
      className="composition"
      {...(isCustomQuote
        ? { width: { sm: '100%', md: '100%' } }
        : { width: { sm: '100%', md: '50%' } })}
      direction="column"
    >
      {altHeading ? (
        <Heading
          as="h2"
          fontSize={{ sm: '3xl', md: '5xl' }}
          fontWeight="normal"
          color={`${isDark ? 'white' : 'accent.500'}`}
          mt={{ sm: 4 }}
          mb={{ sm: 4, md: 10 }}
          className="composition__head--alt"
        >
          {title}
        </Heading>
      ) : (
        <Heading
          as={`${variant}`}
          fontSize={{ sm: '5xl', md: '6xl' }}
          fontWeight="normal"
          color={`${isDark ? 'white' : 'accent.500'}`}
          mt={{ sm: 4 }}
          mb={{ sm: 4, md: 10 }}
          className={`composition__head ${props.classname}`}
        >
          {title}
        </Heading>
      )}
      <Text
        fontWeight={`${altHeading ? 'Bold' : 'normal'}`}
        fontSize={{ sm: 'md', md: '3xl' }}
        color={`${isDark ? 'white' : 'accent.500'}`}
        whiteSpace="break-spaces"
        mb={{ sm: 6, md: 10 }}
        mt={{ sm: 8 }}
      >
        {props.children}
      </Text>
      {addText ? (
        <Text
          fontSize={{ sm: 'md', md: 'lg' }}
          mb={{ sm: 6, md: 10 }}
          whiteSpace="break-spaces"
          color={`${isDark ? 'white' : 'accent.500'}`}
        >
          {addText}
        </Text>
      ) : (
        ``
      )}
      {altButton ? (
        <PseudoBox
          as="button"
          display={`${noButton ? 'none' : 'block'}`}
          className="composition__button--alt"
          transition=".3s ease-in"
          px={8}
          py={4}
          rounded="2px"
          fontSize="lg"
          fontWeight="semibold"
          color={`${isDark ? 'white' : 'accent.500'}`}
        >
          <Link
            className="composition__link"
            color={`${isDark ? 'white' : 'accent.500'}`}
            fontSize="lg"
            display="inline-flex"
            to={`${btnLink}`}
          >
            {btnTitle}
            <BsArrowRight className="composition__link--arrow" />
          </Link>
        </PseudoBox>
      ) : (
        <PseudoBox
          as="button"
          display={`${noButton ? 'none' : 'block'}`}
          transition=".3s ease-in"
          border="1px"
          px={8}
          py={4}
          width={{ sm: 'auto', md: '50%' }}
          rounded="2px"
          fontSize="lg"
          fontWeight="semibold"
          bg="primary.500"
          borderColor="#ccd0d5"
          color="white"
          _hover={{ bg: 'accent.500' }}
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
          <Link className="composition__link" fontSize="lg" to={`${btnLink}`}>
            {btnTitle}
          </Link>
        </PseudoBox>
      )}
    </Flex>
  )
}

export default TextComposition
