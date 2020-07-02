import { Flex } from '@chakra-ui/core'
import React from 'react'
import IntricateBox from '../../Atom/IntricateBox/IntricateBox'
import CardFlex from '../../Atom/CardFlex/CardFlex'
import './SectionBox.css'

function SectionBox(props) {
  return (
    <IntricateBox title={props.title} my={12}>
      <Flex width="100%" direction={{ sm: 'column', md: 'row' }}>
        <CardFlex
          hasFloatingBox
          hasDescription
          imageSrc="leasing-image"
          imageAlt="leasing-image"
          width={{ sm: '100%', md: '50%' }}
          floatingText="Landlord Representation"
        >
          Our agents work with landlords to explore leasing opportunities and
          implement strategies to maximize the profitability of their rental
          space.
        </CardFlex>
        <CardFlex
          hasFloatingBox
          hasDescription
          imageSrc="leasing-tenant"
          imageAlt="leasing-tenant"
          width={{ sm: '100%', md: '50%' }}
          floatingText="Tenant Representation"
        >
          MemmoCRE will provide you with a dedicated tenant representative
          familiar with your market and ready to guide you through all phases of
          the leasing process.
        </CardFlex>
      </Flex>
    </IntricateBox>
  )
}

export default SectionBox
