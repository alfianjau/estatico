import React, { useState } from 'react'
import { PseudoBox, Box, Flex, Text, IconButton } from '@chakra-ui/core'
import { FiSearch, FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi'
import { RiMenu3Line } from 'react-icons/ri'
import { Link } from 'gatsby'
import Logo from '../../../../static/images/svg/logo.svg'
import './Navigation.css'

const MenuItems = ({ children }) => (
  <PseudoBox
    as="p"
    mt={{ base: 4, md: 0 }}
    mr={16}
    display="block"
    transition=".3s ease-in color"
    _hover={{ color: 'primary.500' }}
  >
    {children}
  </PseudoBox>
)

const Header = (props) => {
  const [isDark] = useState(props.isDark)
  const [isGray] = useState(props.isGray)
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <Flex
      as="nav"
      className="navigation"
      align="center"
      justify="space-between"
      fontSize="lg"
      wrap="wrap"
      py={[4, 6]}
      pr={{ sm: '1rem', md: '7rem', lg: '9rem' }}
      pl={4}
      bg={isDark ? 'accent.500' : isGray ? 'gray.500' : 'white'}
      color={!isDark ? 'accent.500' : 'white'}
      {...props}
    >
      <Flex align="center" mr={5}>
        <Logo fill="white" className={isDark ? `light-logo` : `dark-logo`} />
      </Flex>

      <Box display={{ sm: 'block', md: 'none' }} onClick={handleToggle}>
        <RiMenu3Line size="2em" color="accent.500" />
      </Box>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'flex' }}
        width={{ sm: 'full', md: 'auto' }}
        alignItems="center"
        justifyContent="space-between"
        flexGrow={1}
      >
        <Flex
          direction={{ sm: 'column', md: 'row' }}
          justifyContent="space-between"
        >
          <MenuItems>
            <Link to="/">Company</Link>
          </MenuItems>
          <MenuItems>
            <Link to="/about">About Us</Link>
          </MenuItems>
          <MenuItems>
            <Link to="/commercial">Commercial</Link>
          </MenuItems>
          <MenuItems>
            <Link to="/residential">Residential</Link>
          </MenuItems>
          <MenuItems>
            <Link to="/blog/">Blog</Link>
          </MenuItems>
          <MenuItems>
            <Link to="/team/">Contacts</Link>
          </MenuItems>
        </Flex>
        <Flex>
          <IconButton
            variantColor="primary"
            variant="ghost"
            color={isDark ? 'white' : 'accent.500'}
            aria-label="search"
            mr={4}
            fontSize="20px"
            icon={FiSearch}
          />
          <Text mr={4} fontSize="2rem" color="primary.500">
            |
          </Text>
          <Flex>
            <IconButton
              variantColor={isDark ? 'gray' : 'primary'}
              variant="ghost"
              color={isDark ? 'white' : 'accent.500'}
              aria-label="Instagram"
              fontSize="20px"
              icon={FiInstagram}
              mr={4}
            />
            <IconButton
              variantColor="primary"
              variant="ghost"
              color={isDark ? 'white' : 'accent.500'}
              aria-label="facebook"
              fontSize="20px"
              icon={FiFacebook}
              mr={4}
            />
            <IconButton
              variantColor="primary"
              variant="ghost"
              color={isDark ? 'white' : 'accent.500'}
              aria-label="Twitter"
              fontSize="20px"
              icon={FiTwitter}
            />
          </Flex>
        </Flex>
      </Box>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      />
    </Flex>
  )
}

export default Header
