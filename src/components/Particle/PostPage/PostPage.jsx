import React from 'react'
import { Flex, Box, Text, Button, PseudoBox } from '@chakra-ui/core'
import { Link } from 'gatsby'
import BlogFeedWidget from '../../Molecule/BlogFeedWidget/BlogFeedWidget'
import CardBox from '../../Atom/CardBox/CardBox'
import './PostPage.css'

class PostPage extends React.Component {
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
          color="white"
          backgroundColor="accent.500"
        >
          <Text color="white">Blogpost</Text>
        </Flex>
        <Flex>
          <Box width={3 / 4}>Content</Box>
          <Flex
            className="blog-feed__aside"
            bg="gray.500"
            direction="column"
            width={{ sm: '100%', md: 1 / 3 }}
            pl={{ sm: 'inherit', md: 12 }}
          >
            <Box width="100%">
              <CardBox
                isNoImage
                tagLink="other"
                cardDesc="Cursus in nec diam, sed tortor fames ut sit. lorem ipsum dolor"
              >
                tes
              </CardBox>
            </Box>
            <Box width="100%">
              <CardBox
                isNoImage
                tagLink="other"
                cardDesc="Cursus in nec diam, sed tortor fames ut sit. lorem ipsum dolor"
              >
                tes
              </CardBox>
            </Box>
            <Box width="100%">
              <CardBox
                isNoImage
                tagLink="other"
                cardDesc="Cursus in nec diam, sed tortor fames ut sit. lorem ipsum dolor"
              >
                tes
              </CardBox>
            </Box>
            <Box width="100%" px={{ sm: 'inherit', md: 4 }} my={4}>
              <Button width="100%">
                <Link alt="see more" to="/blog">
                  See More
                </Link>
              </Button>
            </Box>
            <BlogFeedWidget />
          </Flex>
        </Flex>
      </Box>
    )
  }
}

export default PostPage
