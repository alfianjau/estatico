import React from 'react'
import { Flex, PseudoBox, Text, Box } from '@chakra-ui/core'
import { FiMail, FiPhone } from 'react-icons/fi'
import { Link } from 'gatsby'
import IntricateBox from '../../Atom/IntricateBox/IntricateBox'

class ListingSectionOverview extends React.Component {
  render() {
    // const postList = this.getPostList()
    return (
      <IntricateBox title="Overview" className="listings-overview" my="5rem">
        <Flex justifyContent="Space-between" width="100%">
          <Flex direction="column" width="100%" px={4}>
            <Text>
              7 Acres available for sale along Monroe Road in Matthews, NC
              Potential uses include multi-family/senior housing, retail, or
              mixed-use. Matthews future land plan calls for commercial
              mixed-use. commercial mixed-use. All utilities available All
              structures sold as-is where-is
            </Text>
          </Flex>
        </Flex>
      </IntricateBox>
    )
  }
}

export default ListingSectionOverview
