import React from 'react'
import {
  Flex,
  Box,
  Text,
  Heading,
  PseudoBox,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/core'
import { Link } from 'gatsby'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { BsArrowRight } from 'react-icons/bs'
import Commercial from '../../Molecule/Commercial/Commercial'

class AgentSectionDetail extends React.Component {
  render() {
    // const postList = this.getPostList()
    return (
      <Flex direction={{ sm: 'column', md: 'row' }} my="3rem" flexWrap="wrap">
        <Box width={{ sm: '100%', md: '50%' }} minHeight="18rem">
          <Heading
            as="h2"
            fontSize={{ sm: '3xl', md: '5xl' }}
            fontWeight="normal"
            color="primary.500"
            pl={{ md: '5rem' }}
            mt={{ sm: 4 }}
            mb={{ sm: 4, md: 4 }}
            className="custom-quote__title"
          >
            Information
          </Heading>
          <Heading
            as="h3"
            fontSize={{ sm: '3xl', md: '5xl' }}
            fontWeight="normal"
            pl={{ md: '5rem' }}
            mt={{ sm: 4 }}
            mb={{ sm: 4, md: 10 }}
          >
            about Agent
          </Heading>
        </Box>
        <Box width={{ sm: '100%', md: '50%' }} minHeight="18rem">
          <Accordion className="agent-accordion">
            <AccordionItem borderTop="0">
              <AccordionHeader
                borderColor="primary.500"
                fontWeight="bold"
                _expanded={{
                  borderBottom: '3px',
                  color: 'primary.500',
                  fontWeight: 'bold',
                }}
              >
                <Box flex="1" textAlign="left">
                  Background & Experience
                </Box>
                <AccordionIcon />
              </AccordionHeader>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader
                borderColor="primary.500"
                fontWeight="bold"
                _expanded={{
                  borderBottom: '3px',
                  color: 'primary.500',
                  fontWeight: 'bold',
                }}
              >
                <Box flex="1" textAlign="left">
                  Education
                </Box>
                <AccordionIcon />
              </AccordionHeader>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader
                borderColor="primary.500"
                fontWeight="bold"
                _expanded={{
                  borderBottom: '3px',
                  color: 'primary.500',
                  fontWeight: 'bold',
                }}
              >
                <Box flex="1" textAlign="left">
                  Professional Association
                </Box>
                <AccordionIcon />
              </AccordionHeader>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <PseudoBox
          as="button"
          display="inline-block"
          border="1px"
          px={8}
          py={4}
          mx="auto"
          height={16}
          width={{ sm: 'auto', md: 1 / 4 }}
          rounded="2px"
          fontSize="lg"
          fontWeight="semibold"
          bg="primary.500"
          borderColor="#ccd0d5"
          mt={8}
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
            Schedule Consultation
          </Link>
        </PseudoBox>
      </Flex>
    )
  }
}

export default AgentSectionDetail
