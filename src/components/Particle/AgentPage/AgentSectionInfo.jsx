import React from 'react'
import { Flex, Box, Text, PseudoBox } from '@chakra-ui/core'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { BsArrowRight } from 'react-icons/bs'
import Commercial from '../../Molecule/Commercial/Commercial'

class AgentSectionInfo extends React.Component {
  render() {
    // const postList = this.getPostList()
    return (
      <Commercial
        isAlternate
        my="3rem"
        title="James Garber"
        btnLink="/blog/"
        subTitle="Commercial Real Estate Specialist"
        description={`Our agents understand how to get our clients the most value for their investments in any market.

Through our partnership with eXp, MemmoCRE residential experts pair our clients with the right partners to close the deal, cutting through red tape so that you can ensure a smooth transaction and satisfied buyers or sellers.`}
        imageAlt="about-person"
        image="about-person"
      />
    )
  }
}

export default AgentSectionInfo
