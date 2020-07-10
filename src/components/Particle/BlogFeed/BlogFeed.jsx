import { Flex, Box } from '@chakra-ui/core'
import React from 'react'
import { Link } from 'gatsby'
import DImage from '../../Atom/DImage/DImage'
import CardBox from '../../Atom/CardBox/CardBox'
import BlogFeedWidget from '../../Molecule/BlogFeedWidget/BlogFeedWidget'
import Btn from '../../Atom/Btn/Btn'

import './BlogFeed.css'

function BlogFeed() {
  //   const [title] = useState(props.title)

  return (
    <Flex
      className="blog-feed"
      width="100%"
      direction={{ sm: 'column', md: 'row' }}
      my="5rem"
    >
      <Flex
        className="blog-feed__content"
        alignContent="flex-start"
        flexWrap="wrap"
        pr={{ sm: 'inherit', md: 12 }}
        width={{ sm: '100%', md: 2 / 3 }}
      >
        <Box width={{ sm: '100%', md: '50%' }}>
          <CardBox
            tagLink="other"
            m={0}
            cardDesc="Cursus in nec diam, sed tortor fames ut sit. lorem ipsum dolor"
          >
            <Box className="card__image">
              <DImage alt="hunters-race" filename="nastuh-abootalebi.jpg" />
            </Box>
          </CardBox>
        </Box>
        <Box width={{ sm: '100%', md: '50%' }}>
          <CardBox
            tagLink="other"
            m={0}
            cardDesc="Cursus in nec diam, sed tortor fames ut sit. lorem ipsum dolor"
          >
            <Box className="card__image">
              <DImage alt="windows" filename="windows.jpg" />
            </Box>
          </CardBox>
        </Box>
        <Box width="100%">
          <CardBox
            isFeatured
            tagLink="other"
            m={0}
            cardDesc="testaa, sed tortor fames ut sit. lorem ipsum dolor"
          >
            <Box className="card__image">
              <DImage alt="austin-distel" filename="austin-distel.jpg" />
            </Box>
          </CardBox>
        </Box>
        <Box width={{ sm: '100%', md: '50%' }}>
          <CardBox
            tagLink="other"
            m={0}
            cardDesc="Cursus in nec diam, sed tortor fames ut sit. lorem ipsum dolor"
          >
            <Box className="card__image">
              <DImage alt="windows" filename="windows.jpg" />
            </Box>
          </CardBox>
        </Box>
        <Box width={{ sm: '100%', md: '50%' }}>
          <CardBox
            tagLink="other"
            m={0}
            cardDesc="Cursus in nec diam, sed tortor fames ut sit. lorem ipsum dolor"
          >
            <Box className="card__image">
              <DImage alt="windows" filename="windows.jpg" />
            </Box>
          </CardBox>
        </Box>
      </Flex>
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
            {}
          </CardBox>
        </Box>
        <Box width="100%">
          <CardBox
            isNoImage
            tagLink="other"
            cardDesc="Cursus in nec diam, sed tortor fames ut sit. lorem ipsum dolor"
          >
            {}
          </CardBox>
        </Box>
        <Box width="100%">
          <CardBox
            isNoImage
            tagLink="other"
            cardDesc="Cursus in nec diam, sed tortor fames ut sit. lorem ipsum dolor"
          >
            {}
          </CardBox>
        </Box>
        <Box width="100%" px={{ sm: 'inherit', md: 4 }} my={4}>
          <Btn width="100%">
            <Link alt="see more" to="/blog">
              See More
            </Link>
          </Btn>
        </Box>
        <BlogFeedWidget />
      </Flex>
    </Flex>
  )
}

export default BlogFeed
