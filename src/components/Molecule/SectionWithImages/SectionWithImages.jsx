/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
import { Flex, Box, Heading, Text } from '@chakra-ui/core'
import DImage from '../../Atom/DImage/DImage'
import './SectionWithImages.css'

function SectionWithImages(props) {
  const [isCompact] = useState(props.isCompact)
  const [isReverse] = useState(props.isReverse)
  const [hasSubtitle] = useState(props.hasSubtitle)
  const [image] = useState(props.image)
  const [imageAlt] = useState(props.imageAlt)
  const [isCustom] = useState(props.isCustom)
  const [isCustomSubtitle] = useState(props.isCustomSubtitle)
  const [isCustomDescription] = useState(props.isCustomDescription)
  return (
    <Flex
      className="section has-images"
      {...(isReverse
        ? { direction: 'column-reverse' }
        : { direction: 'column' })}
      justifyContent={{ md: 'center' }}
      height={{ md: '57em' }}
      my={props.my}
      width="100%"
    >
      <Flex width="100%" direction={{ sm: 'column', md: 'row' }}>
        <Flex
          className="section__image"
          justifyContent="space-around"
          width={{ sm: '100%', md: '50%' }}
        >
          <DImage
            className="section__image--left"
            alt={imageAlt ? `${imageAlt}` : 'commercial-specialty'}
            filename={image ? `${image}.jpg` : 'commercial-specialty.jpg'}
          />
          <DImage
            className="section__image--right"
            alt={imageAlt ? `${imageAlt}` : 'commercial-specialty-2'}
            filename={image ? `${image}.jpg` : 'commercial-specialty-2.jpg'}
          />
        </Flex>

        <Box width={{ sm: '100%', md: '50%' }}>
          <Heading
            as="h2"
            fontSize={{ sm: '3xl', md: '5xl' }}
            fontWeight="normal"
            color="primary"
            mt={{ sm: 4 }}
            mb={{ sm: 4, md: 10 }}
            className="composition__head--alt"
          >
            {props.title}
          </Heading>
          {hasSubtitle && (
            <Heading
              as="h3"
              fontSize={{ sm: '3xl', md: '5xl' }}
              fontWeight="normal"
              color="primary"
              mt={{ sm: 4 }}
              mb={{ sm: 4, md: 10 }}
            >
              {props.hasSubtitle}
            </Heading>
          )}
          <Box
            fontSize={{ sm: 'md', md: '4xl' }}
            color="accent.500"
            mb={{ sm: 6, md: 10 }}
            mt={{ sm: 8 }}
          >
            {props.children}
          </Box>
        </Box>
      </Flex>
    </Flex>
  )
}

export default SectionWithImages
