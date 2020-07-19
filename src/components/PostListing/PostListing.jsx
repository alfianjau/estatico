import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import { Flex, Box } from '@chakra-ui/core'
import config from '../../../data/SiteConfig'
import DImage from '../Atom/DImage/DImage'
import CardBox from '../Atom/CardBox/CardBox'
import BlogFeedWidget from '../Molecule/BlogFeedWidget/BlogFeedWidget'
import Btn from '../Atom/Btn/Btn'

class PostListing extends React.Component {
  getPostList() {
    const postList = []
    this.props.postEdges.forEach((postEdge) => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      })
    })
    return postList
  }

  renderPaging() {
    const { currentPageNum, pageCount } = this.props.pageContext
    const prevPage =
      currentPageNum - 1 === 1 ? '/blog' : `/blog/${currentPageNum - 1}/`
    const nextPage = `/blog/${currentPageNum + 1}/`
    const isFirstPage = currentPageNum === 1
    const isLastPage = currentPageNum === pageCount

    return (
      <div className="paging-container">
        {!isFirstPage && <Link to={prevPage}>Previous</Link>}
        {[...Array(pageCount)].map((_val, index) => {
          const pageNum = index + 1
          return (
            <Link
              key={`listing-page-${pageNum}`}
              to={pageNum === 1 ? '/blog' : `/blog/${pageNum}/`}
            >
              {pageNum}
            </Link>
          )
        })}
        {!isLastPage && <Link to={nextPage}>Next</Link>}
      </div>
    )
  }

  render() {
    const postList = this.getPostList()
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
          {postList.map((post, index) => {
            return index % 3 === 2 ? (
              <Box key={post.title} width={{ sm: '100%', md: '100%' }}>
                <CardBox
                  isFeatured
                  tagLink={`/blog/${post.path}`}
                  m={0}
                  cardDesc={post.title}
                  hasDate={moment(post.date).format(config.dateFromFormat)}
                  hasTag={[...post.tags]}
                >
                  <Box className="card__image">
                    <DImage
                      alt="hunters-race"
                      filename="nastuh-abootalebi.jpg"
                    />
                  </Box>
                </CardBox>
              </Box>
            ) : (
              <Box key={post.title} width={{ sm: '100%', md: '50%' }}>
                <CardBox
                  tagLink={`/blog/${post.path}`}
                  m={0}
                  cardDesc={post.title}
                  hasDate={moment(post.date).format(config.dateFromFormat)}
                  hasTag={post.tags}
                >
                  <Box className="card__image">
                    <DImage
                      alt="hunters-race"
                      filename="nastuh-abootalebi.jpg"
                    />
                  </Box>
                </CardBox>
              </Box>
            )
          })}
          {this.renderPaging()}
        </Flex>
        <Flex
          className="blog-feed__aside"
          bg="gray.500"
          direction="column"
          width={{ sm: '100%', md: 1 / 3 }}
          pl={{ sm: 'inherit', md: 12 }}
        >
          {postList.map((post) => (
            <Box key={post.title} width="100%">
              <CardBox
                isNoImage
                tagLink={post.path}
                cardDesc={post.title}
                hasDate={moment(post.date).format(config.dateFromFormat)}
                hasTag={post.tags}
              >
                {post.title}
              </CardBox>
            </Box>
          ))}

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
}

export default PostListing
