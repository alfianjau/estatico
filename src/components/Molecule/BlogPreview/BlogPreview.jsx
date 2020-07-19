import React, { useState } from 'react'
import { Flex, Box, PseudoBox, Heading } from '@chakra-ui/core'
import { Link } from 'gatsby'
import { BsArrowRight } from 'react-icons/bs'
import CardBox from '../../Atom/CardBox/CardBox'
import DImage from '../../Atom/DImage/DImage'
import './BlogPreview.css'

function BlogPreview(props) {
  const [title] = useState(props.title)

  return (
    <Flex
      className="blog-preview"
      direction="column"
      justifyContent="space-between"
      position="relative"
      my={{ md: '10rem' }}
    >
      <Flex justifyContent="space-between">
        <Heading
          as="h2"
          fontSize={{ sm: '3xl', md: '5xl' }}
          fontWeight="normal"
          color="accent.500"
          mt={{ sm: 4 }}
          mb={{ sm: 4, md: 10 }}
          className="composition__head--alt"
        >
          {props.title ? props.title : `Blog - Featured Stories`}
        </Heading>
        <PseudoBox
          as="button"
          className="composition__button--alt"
          transition=".3s ease-in"
          px={8}
          py={4}
          rounded="2px"
          fontSize="lg"
          fontWeight="semibold"
        >
          <Link
            className="composition__link"
            fontSize="lg"
            display="inline-flex"
            to="/blog/"
          >
            Go to Blog
            <BsArrowRight className="composition__link--arrow" />
          </Link>
        </PseudoBox>
      </Flex>

      <Flex direction={{ sm: 'column', md: 'row' }} mx={{ md: '-1rem' }}>
        <CardBox
          width="100%"
          tagLink="other"
          cardDesc="Cursus in nec diam, sed tortor fames ut sit. lorem ipsum dolor"
        >
          <Box className="card__image">
            <DImage alt="hunters-race" filename="nastuh-abootalebi.jpg" />
          </Box>
        </CardBox>
        <CardBox
          width="100%"
          tagLink="industry"
          cardDesc="Cursus in nec diam, sed tortor fames ut sit."
        >
          <Box className="card__image">
            <DImage alt="hunters-race" filename="christian-wiediger.jpg" />
          </Box>
        </CardBox>
        <CardBox
          width="100%"
          tagLink="company"
          cardDesc="Felis dictum vel natoque hendrerit massa duisdasdasdsadass tortor sed"
        >
          <Box className="card__image">
            <DImage alt="hunters-race" filename="windows.jpg" />
          </Box>
        </CardBox>
      </Flex>
    </Flex>
  )
}

export default BlogPreview
