import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Box, Flex, Divider, IconButton, Text } from '@chakra-ui/core'
import {
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiMail,
  FiPhone,
} from 'react-icons/fi'
import Logo from '../../../static/images/svg/logo.svg'
import './Footer.css'

class Footer extends Component {
  render() {
    const { config } = this.props
    const { copyright, address } = config
    if (!copyright) {
      return null
    }
    return (
      <Box
        as="footer"
        className="footer"
        bg="accent.500"
        mt={4}
        bt={2}
        py={(4, 6)}
        px={{ sm: '1rem', md: '9rem' }}
        color="white"
      >
        <Box>
          <Box position="relative" zIndex="20">
            <Box
              d="flex"
              flexDirection={[null, 'column', 'row']}
              justifyContent="between"
              px={{ sm: '2rem' }}
            >
              <Box
                flexGrow={1}
                my={4}
                className="footer-item"
                flexDirection="column"
              >
                <Logo className="footer__logo" />
              </Box>
              <Flex
                direction="column"
                flexGrow={1}
                mt={12}
                mb={4}
                className="footer-item"
              >
                <Text fontSize="3xl" mb={{ sm: '6', md: '2' }}>
                  Menu
                </Text>
                <Divider
                  background="primary"
                  borderColor="primary.500"
                  w={{ sm: '100%', md: 2 / 3 }}
                  mb={8}
                />
                <Box as="span" mb={4}>
                  <Link className="footer__link" fontSize="xl" to="/">
                    Company
                  </Link>
                </Box>
                <Box as="span" mb={4}>
                  <Link className="footer__link" fontSize="xl" to="/">
                    About Us
                  </Link>
                </Box>
                <Box as="span" mb={4}>
                  <Link className="footer__link" fontSize="xl" to="/">
                    Commercial
                  </Link>
                </Box>
                <Box as="span" mb={4}>
                  <Link className="footer__link" fontSize="xl" to="/">
                    Residential
                  </Link>
                </Box>
                <Box as="span" mb={4}>
                  <Link className="footer__link" fontSize="xl" to="/">
                    Blog
                  </Link>
                </Box>
                <Box as="span" mb={4}>
                  <Link className="footer__link" fontSize="xl" to="/">
                    Contacts
                  </Link>
                </Box>
              </Flex>
              <Flex
                direction="column"
                flexGrow={1}
                mt={12}
                mb={4}
                className="footer-item"
              >
                <Text fontSize="3xl" mb={{ sm: '6', md: '2' }}>
                  Location
                </Text>
                <Divider
                  background="primary"
                  borderColor="primary.500"
                  w={{ sm: '100%', md: 2 / 3 }}
                  mb={8}
                />
                <Box as="span" mb={4}>
                  <Link className="footer__link" fontSize="xl" to="/">
                    New York
                  </Link>
                </Box>
                <Box as="span" mb={4}>
                  <Link className="footer__link" fontSize="xl" to="/">
                    Boston
                  </Link>
                </Box>
                <Box as="span" mb={4}>
                  <Link className="footer__link" fontSize="xl" to="/">
                    Los Angeles
                  </Link>
                </Box>
                <Box as="span" mb={4}>
                  <Link className="footer__link" fontSize="xl" to="/">
                    Chicago
                  </Link>
                </Box>
                <Box as="span" mb={4}>
                  <Link className="footer__link" fontSize="xl" to="/">
                    San Diego
                  </Link>
                </Box>
                <Box as="span" mb={4}>
                  <Link className="footer__link" fontSize="xl" to="/">
                    San Jose
                  </Link>
                </Box>
              </Flex>
              <Flex
                direction="column"
                flexGrow={1}
                mt={12}
                mb={4}
                className="footer-item"
              >
                <Text fontSize="3xl" mb={{ sm: '6', md: '2' }}>
                  Contact
                </Text>
                <Divider
                  background="primary"
                  borderColor="primary.500"
                  w={{ sm: '100%', md: 2 / 3 }}
                  mb={8}
                />
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
              </Flex>
            </Box>
          </Box>
          <Divider
            background="primary"
            borderColor="primary.500"
            display={{ sm: 'block', md: 'none' }}
            w={{ sm: '100%', md: 2 / 3 }}
            mb={8}
          />
          <Box
            className="notice-container sm:px-8"
            flexDirection={{ sm: 'column-reverse', md: 'row' }}
          >
            <Flex direction="column">
              <p>Company Number: AF 344 990</p>
              <p>
                Registered Address:
                {address}
              </p>
            </Flex>

            <Flex direction={{ sm: 'column-reverse', md: 'row' }} mb={4}>
              <h4>{copyright}</h4>
              <Link to="/" sx={{ color: 'inherit' }}>
                Privacy Policy
              </Link>
            </Flex>
          </Box>
        </Box>
      </Box>
    )
  }
}

export default Footer
