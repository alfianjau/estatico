/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
import { Flex, Box } from '@chakra-ui/core'
import TextComposition from '../../Atom/TextComposition/TextComposition'
import DImage from '../../Atom/DImage/DImage'
import './Commercial.css'

function Commercial(props) {
  const [isAlternate] = useState(props.isAlternate)
  const [isIntricate] = useState(props.isIntricate)
  const [imageAlt] = useState(props.imageAlt)
  const [image] = useState(props.image)
  return (
    <Flex
      direction="column"
      justifyContent={{ md: 'center' }}
      height={{ md: '57em' }}
      my={props.my}
    >
      <Flex
        className={
          isAlternate
            ? 'commercial commercial--alternate'
            : isIntricate
            ? 'commercial commercial--intricate'
            : 'commercial'
        }
        direction={
          isAlternate
            ? { sm: 'column', md: 'row-reverse' }
            : isIntricate
            ? { sm: 'column', md: 'row-reverse' }
            : { sm: 'column', md: 'row' }
        }
        width="100%"
      >
        {isIntricate && (
          <Box
            display="flex"
            fontSize={{ sm: 'lg', md: '3xl' }}
            color="white"
            p={8}
            className="commercial__intricate-text"
          >
            {props.intricateText}
          </Box>
        )}
        <Box className="commercial__image" width={{ sm: '100%', md: '50%' }}>
          <DImage
            alt={imageAlt ? `${imageAlt}` : 'tim-gouw'}
            filename={image ? `${image}.jpg` : 'tim-gouw.jpg'}
          />
        </Box>

        <TextComposition
          {...(!isIntricate && { isDark: true })}
          altHeading
          altButton
          variant="h2"
          title={
            isAlternate ? props.title : isIntricate ? props.title : 'Commercial'
          }
          btnTitle="More info"
          btnLink={
            isAlternate ? props.btnLink : isIntricate ? props.btnLink : '/blog/'
          }
          addText={
            isAlternate
              ? props.description
              : isIntricate
              ? props.description
              : `MemmoCRE focuses on the long-term returns of your commercial properties.

Whether you are leasing warehouses, renting office space,
investing in multifamily opportunities, or selling land for development, we have the expertise to help you succeed.`
          }
        >
          {isAlternate
            ? props.subTitle
            : isIntricate
            ? props.subtitle
            : `Fostering Real Value for Commercial Property`}
        </TextComposition>
      </Flex>
    </Flex>
  )
}

export default Commercial
