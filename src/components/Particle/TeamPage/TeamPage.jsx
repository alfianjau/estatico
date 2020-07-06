import React from 'react'
import { Flex, Box, Text, PseudoBox } from '@chakra-ui/core'
import { FiMail, FiPhone } from 'react-icons/fi'
import { BsArrowRight } from 'react-icons/bs'
import Hero from '../../Molecule/Hero/Hero'
import IntricateBox from '../../Atom/IntricateBox/IntricateBox'
import TeamCard from './TeamCard'
import './TeamPage.css'

class TeamPage extends React.Component {
  render() {
    // const postList = this.getPostList()
    return (
      <Box className="team-page">
        <Flex
          className="hero-wrapper"
          flexDirection="row"
          flexWrap="wrap"
          position="relative"
          justifyContent="center"
          w="100%"
          pt={{ sm: '0', md: '6' }}
          pb={{ sm: '4', md: '6' }}
          px={{ sm: '1rem', md: '9rem' }}
          color="white.500"
        >
          <Hero
            isAlternate
            image="team-page"
            imageAlt="team-page"
            title="Our Team"
          >
            Our Team
          </Hero>
          <IntricateBox title="Our Team" className="teams">
            <TeamCard imageSrc="about-person" imageAlt="about-person">
              <Box
                className="card__info--floating"
                mt="-4rem"
                mx="auto"
                left="0"
                right="0"
                zIndex="docked"
                p="1rem"
                width="80%"
                textAlign="center"
                fontSize={{ sm: '2xl', md: '4xl' }}
                fontWeight="normal"
                lineHeight="tight"
                background="white"
                position="relative"
                color="accent.500"
              >
                <Text as="h3" mb="1rem" fontSize="3xl" fontWeight="bold">
                  Artur Baduev
                </Text>
                <Text fontSize="md" mb="2rem">
                  Renting Agent
                </Text>
                <Box fontSize="md">
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
                <Box fontSize="md">
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
                    <span fontSize="md">testemail@gmail.com</span>
                  </p>
                </Box>
                <PseudoBox
                  as="button"
                  fontSize="lg"
                  display="flex"
                  alignItems="center"
                  m="auto"
                >
                  <Text fontWeight="bold">View profile</Text>
                  <BsArrowRight className="composition__link--arrow" />
                </PseudoBox>
              </Box>
            </TeamCard>
            <TeamCard imageSrc="about-person" imageAlt="about-person">
              <Box
                className="card__info--floating"
                mt="-4rem"
                mx="auto"
                left="0"
                right="0"
                zIndex="docked"
                p="1rem"
                width="80%"
                textAlign="center"
                fontSize={{ sm: '2xl', md: '4xl' }}
                fontWeight="normal"
                lineHeight="tight"
                background="white"
                position="relative"
                color="accent.500"
              >
                <Text as="h3" mb="1rem" fontSize="3xl" fontWeight="bold">
                  Artur Baduev
                </Text>
                <Text fontSize="md" mb="2rem">
                  Renting Agent
                </Text>
                <Box fontSize="md">
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
                <Box fontSize="md">
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
                    <span fontSize="md">testemail@gmail.com</span>
                  </p>
                </Box>
                <PseudoBox
                  as="button"
                  fontSize="lg"
                  display="flex"
                  alignItems="center"
                  m="auto"
                >
                  <Text fontWeight="bold">View profile</Text>
                  <BsArrowRight className="composition__link--arrow" />
                </PseudoBox>
              </Box>
            </TeamCard>
            <TeamCard imageSrc="about-person" imageAlt="about-person">
              <Box
                className="card__info--floating"
                mt="-4rem"
                mx="auto"
                left="0"
                right="0"
                zIndex="docked"
                p="1rem"
                width="80%"
                textAlign="center"
                fontSize={{ sm: '2xl', md: '4xl' }}
                fontWeight="normal"
                lineHeight="tight"
                background="white"
                position="relative"
                color="accent.500"
              >
                <Text as="h3" mb="1rem" fontSize="3xl" fontWeight="bold">
                  Artur Baduev
                </Text>
                <Text fontSize="md" mb="2rem">
                  Renting Agent
                </Text>
                <Box fontSize="md">
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
                <Box fontSize="md">
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
                    <span fontSize="md">testemail@gmail.com</span>
                  </p>
                </Box>
                <PseudoBox
                  as="button"
                  fontSize="lg"
                  display="flex"
                  alignItems="center"
                  m="auto"
                >
                  <Text fontWeight="bold">View profile</Text>
                  <BsArrowRight className="composition__link--arrow" />
                </PseudoBox>
              </Box>
            </TeamCard>
          </IntricateBox>
        </Flex>
      </Box>
    )
  }
}

export default TeamPage
