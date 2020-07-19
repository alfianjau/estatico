import React from 'react'
import { Flex, Box, Text, Button, Divider, PseudoBox } from '@chakra-ui/core'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'gatsby'
import BlogFeedWidget from '../../Molecule/BlogFeedWidget/BlogFeedWidget'
import CardBox from '../../Atom/CardBox/CardBox'
import './PostPage.css'

class PostPage extends React.Component {
  render() {
    // const postList = this.getPostList()
    const { postNode } = this.props

    return (
      <Flex
        className="hero-wrapper"
        flexDirection="column"
        flexWrap="wrap"
        position="relative"
        justifyContent="center"
        w="100%"
      >
        <Flex
          className="post-header"
          py={{ sm: '6rem', md: '9rem' }}
          px={{ sm: '1rem', md: '9rem' }}
          color="white"
          backgroundColor="accent.500"
        >
          <Button fontSize="3xl" variant="link" width="100%">
            <Link alt="see more" to="/blog">
              Go to Blog
            </Link>
          </Button>
        </Flex>

        <Box width="100%">
          <Flex direction={{ sm: 'column', md: 'row' }}>
            <Box width={{ sm: '100%', md: 2 / 3 }} pr={4}>
              <Box
                className="post-content"
                dangerouslySetInnerHTML={{ __html: postNode.html }}
              />
              <Box className="post-footer">
                <Divider />
                <Flex justifyContent="space-between">
                  <Text>23 Sep 2020</Text>
                  <PseudoBox
                    as="button"
                    display="block"
                    className="composition__button--alt"
                    transition=".3s ease-in"
                    px={8}
                    py={4}
                    rounded="2px"
                    fontSize="lg"
                    fontWeight="semibold"
                    color="accent.500"
                  >
                    <Link
                      className="composition__link"
                      color="accent.500"
                      fontSize="lg"
                      display="inline-flex"
                      to="/blog"
                    >
                      Go to blog
                      <BsArrowRight className="composition__link--arrow" />
                    </Link>
                  </PseudoBox>
                </Flex>
              </Box>
            </Box>
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
                  test
                </CardBox>
              </Box>
              <Box width="100%">
                <CardBox
                  isNoImage
                  tagLink="other"
                  cardDesc="Cursus in nec diam, sed tortor fames ut sit. lorem ipsum dolor"
                >
                  test
                </CardBox>
              </Box>
              <Box width="100%">
                <CardBox
                  isNoImage
                  tagLink="other"
                  cardDesc="Cursus in nec diam, sed tortor fames ut sit. lorem ipsum dolor"
                >
                  test
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
      </Flex>
    )
  }
}

export default PostPage
