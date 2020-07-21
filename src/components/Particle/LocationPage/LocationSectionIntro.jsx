import React from 'react'
import { Flex, PseudoBox, Text, Box } from '@chakra-ui/core'
import { FiMail, FiPhone } from 'react-icons/fi'
import { Link } from 'gatsby'
import IntricateBox from '../../Atom/IntricateBox/IntricateBox'

class LocationSectionIntro extends React.Component {
  render() {
    // const postList = this.getPostList()
    return (
      <IntricateBox title="Locations" className="location-info" my="5rem">
        <Flex
          justifyContent="Space-between"
          direction={{ sm: 'column', md: 'row' }}
          width="100%"
        >
          <Flex
            direction="column"
            width={{ sm: '100%', md: 1 / 3 }}
            px={{ sm: 0, md: 4 }}
          >
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              nulla dolor veritatis rem quae fugiat necessitatibus eveniet,
              magnam error delectus odit asperiores vero excepturi ab ad vitae
              deserunt, architecto sapiente.
            </Text>
            <PseudoBox
              as="button"
              display="block"
              mt={8}
              transition=".3s ease-in"
              border="1px"
              px={8}
              py={4}
              width={{ sm: 'auto', md: '80%' }}
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
              <Link className="composition__link" fontSize="lg" to="/team">
                Schedule a consultation
              </Link>
            </PseudoBox>
          </Flex>
          <Flex
            direction="column"
            width={{ sm: '100%', md: 1 / 3 }}
            px={{ sm: 0, md: 4 }}
            my={{ sm: 12, md: 0 }}
          >
            <Text fontSize="3xl" fontWeight="bold">
              Brookline
            </Text>
            <Text fontSize="2xl" fontWeight="normal">
              191 Grove Street Brookline, MA 02467
            </Text>
          </Flex>
          <Flex
            direction="column"
            width={{ sm: '100%', md: 1 / 3 }}
            px={{ sm: 0, md: 4 }}
          >
            {' '}
            <Box fontWeight="normal">
              <Box
                as="span"
                verticalAlign="text-top"
                display="inline-block"
                mr={4}
                mb={4}
              >
                <FiPhone />
              </Box>
              +44 (0)855 534 3230
            </Box>
            <Box fontWeight="normal">
              <Box
                as="span"
                verticalAlign="text-top"
                display="inline-block"
                mr={4}
                mb={8}
              >
                <FiMail />
              </Box>
              <span>testemail@gmail.com</span>
            </Box>
          </Flex>
        </Flex>
      </IntricateBox>
    )
  }
}

export default LocationSectionIntro
