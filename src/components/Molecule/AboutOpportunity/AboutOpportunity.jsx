import React from 'react'
import { Flex } from '@chakra-ui/core'
import { BsStarFill } from 'react-icons/bs'
import IntricateBox from '../../Atom/IntricateBox/IntricateBox'
import Starbox from '../../Atom/StarBox/StarBox'
import './AboutOpportunity.css'

function AboutOpportunity() {
  return (
    <Flex direction="column" width="100%" my={{ sm: '3rem' }}>
      <Flex
        className="about-opportunity"
        direction={{ sm: 'column-reverse', md: 'row' }}
        width="100%"
      >
        <IntricateBox
          className="geometric-text"
          hasAlt
          title="Agent"
          subtitle="Opportunities"
        >
          <Flex
            className="about-opportunity__geometry"
            direction={{ sm: 'column', md: 'row' }}
            my={12}
          >
            <Starbox title="Virtual First">
              Company is based on a virtual model, providing flexibility and
              cost savings for agents
            </Starbox>
            <Starbox title="Healthcare">
              Healthcare negotiated at the national level for one of the largest
              and fastest growing agent teams in the industry
            </Starbox>
            <Starbox title="Company Stock">
              Build ownership and a financial stake in the company with stock
              ownership programs
            </Starbox>
            <Starbox title="Incentive Plans">
              Cash and stock based incentive programs rewarding sales,
              mentorship, and outreach
            </Starbox>
          </Flex>
        </IntricateBox>
      </Flex>
    </Flex>
  )
}

export default AboutOpportunity
