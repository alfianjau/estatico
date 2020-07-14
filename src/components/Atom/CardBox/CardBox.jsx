/* eslint-disable no-nested-ternary */
// Card Element

import React, { useState } from 'react'
import { Box, Badge, Text, PseudoBox } from '@chakra-ui/core'
import { Link } from 'gatsby'
import './CardBox.css'

function CardBox(props) {
  const { children } = props
  const property = {
    date: '1 Feb. 2020',
  }
  const [tagLink] = useState(props.tagLink)
  const [cardDesc] = useState(props.cardDesc)
  const [isFeatured] = useState(props.isFeatured)
  const [width] = useState(props.width)
  const [isNoImage] = useState(props.isNoImage)

  return (
    <Box
      className={`${
        isFeatured
          ? 'card card--featured'
          : isNoImage
          ? 'card card--noimage'
          : 'card'
      }`}
      borderBottom="5px solid"
      borderColor="primary.500"
      bg={isNoImage ? 'transparent' : 'white'}
      overflow="hidden"
      mx={{ md: '1rem' }}
      my={6}
      width={`${width}`}
      {...(isFeatured && { width: '100%' })}
    >
      {children}
      <Box
        className="card__info"
        p="4"
        {...(isNoImage ? { p: `inherit` } : { p: `1rem` })}
      >
        <Box d="flex" alignItems="baseline">
          <Badge
            variantColor={isNoImage ? 'grey' : 'gray'}
            {...(isNoImage ? { px: `0` } : { px: `1rem` })}
            py="2"
            fontSize="10px"
          >
            {tagLink}
          </Badge>
        </Box>
        <Box
          className="card__description"
          my={6}
          fontSize={isNoImage ? '2xl' : '3xl'}
          lineHeight="tight"
          {...(isFeatured && { color: 'white' })}
        >
          <Text>{cardDesc}</Text>
        </Box>
        <Box textAlign="right">
          <Box
            as="span"
            color={isFeatured ? 'white' : 'accent.500'}
            fontSize="lg"
          >
            {property.date}
          </Box>
        </Box>
        <PseudoBox className="card__button" bg="primary.500">
          <span>
            <Link className="tag__link" to={`${tagLink}`}>
              Read more
            </Link>
          </span>
        </PseudoBox>
      </Box>
    </Box>
  )
}

export default CardBox
