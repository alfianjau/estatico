/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
import { Flex, Box } from '@chakra-ui/core'
import TextComposition from '../../Atom/TextComposition/TextComposition'
import DImage from '../../Atom/DImage/DImage'
import './Residential.css'

function Residential(props) {
  const [isCompact] = useState(props.isCompact)
  const [isReverse] = useState(props.isReverse)
  const [image] = useState(props.image)
  const [imageAlt] = useState(props.imageAlt)
  const [isCustom] = useState(props.isCustom)
  const [isCustomSubtitle] = useState(props.isCustomSubtitle)
  const [isCustomDescription] = useState(props.isCustomDescription)
  return (
    <Flex
      {...(isReverse
        ? { direction: 'column-reverse' }
        : { direction: 'column' })}
      justifyContent={{ md: 'center' }}
      height={{ md: '57em' }}
      my={props.my}
      className={props.className}
    >
      <Flex
        className={
          isCompact
            ? `residential residential--compact ${isCustom}`
            : isReverse
            ? `residential residential--reverse ${isCustom}`
            : 'residential'
        }
        {...(isReverse
          ? { direction: { sm: 'column', md: 'row-reverse' } }
          : { direction: { sm: 'column', md: 'row' } })}
        width="100%"
      >
        <Box className="residential__image" width={{ sm: '100%', md: '50%' }}>
          <DImage
            alt={imageAlt ? `${imageAlt}` : 'james-genchi'}
            filename={image ? `${image}.jpg` : 'james-genchi.jpg'}
          />
        </Box>

        <TextComposition
          altHeading
          altButton
          variant="h2"
          className={props.className}
          title={isCustom ? props.title : 'Residential'}
          btnTitle={isCustom ? props.btnTitle : 'About Us'}
          btnLink={isCustom ? props.btnLink : '/blog/'}
          addText={
            isCustom
              ? `${isCustomDescription}`
              : `Our platform is designed to help residential property investors and developers leverage one of the largest and fastest-growing networks of agents in the industry.

We’ll put investors on the map right alongside their investments.`
          }
        >
          {isCustom
            ? isCustomSubtitle
            : `Memmo CRE Knows Where Livelihood Meets Living Space`}
        </TextComposition>
      </Flex>
    </Flex>
  )
}

export default Residential
