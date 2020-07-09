/* eslint-disable no-nested-ternary */
import React from 'react'
import { Flex, Box, IconButton } from '@chakra-ui/core'
import {
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiMail,
  FiPhone,
} from 'react-icons/fi'
import TextComposition from '../../Atom/TextComposition/TextComposition'
import DImage from '../../Atom/DImage/DImage'

function AgentSectionInfo() {
  return (
    <Flex
      direction="column"
      justifyContent={{ md: 'center' }}
      height={{ md: '57em' }}
      my={8}
      width="100%"
    >
      <Flex
        className="commercial commercial--alternate"
        direction={{ sm: 'column', md: 'row-reverse' }}
        width="100%"
      >
        <Box className="commercial__image" width={{ sm: '100%', md: '50%' }}>
          <DImage alt="about-person" filename="about-person.jpg" />
        </Box>

        <TextComposition
          isCustomQuote
          altHeading
          isDark
          variant="h2"
          title="James Garber"
          btnTitle="More info"
          btnLink="/blog/"
          addText="Brookline"
        >
          Commercial Real Estate Specialist
          <Box>
            <p>
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
            </p>
          </Box>
          <Box>
            <p>
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
            </p>
          </Box>
          <Flex justifyContent={{ sm: 'center', md: 'flex-start' }}>
            <IconButton
              variantColor="primary"
              variant="ghost"
              color="white"
              aria-label="Instagram"
              fontSize="20px"
              icon={FiInstagram}
              mr={4}
            />
            <IconButton
              variantColor="primary"
              variant="ghost"
              color="white"
              aria-label="facebook"
              fontSize="20px"
              icon={FiFacebook}
              mr={4}
            />
            <IconButton
              variantColor="primary"
              variant="ghost"
              color="white"
              aria-label="Twitter"
              fontSize="20px"
              icon={FiTwitter}
              mb={{ sm: '3rem' }}
            />
          </Flex>
        </TextComposition>
      </Flex>
    </Flex>
  )
}

export default AgentSectionInfo
