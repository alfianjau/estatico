import React from 'react'
import { Helmet } from 'react-helmet'
import { Flex, Button } from '@chakra-ui/core'
import { graphql, Link } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing/PostListing'
import config from '../../data/SiteConfig'

export default class CategoryTemplate extends React.Component {
  render() {
    const { category } = this.props.pageContext
    const postEdges = this.props.data.allMarkdownRemark.edges
    const pageContext = this.props.pageContext
    return (
      <Layout location={this.props.location}>
        <div className="category-container">
          <Helmet
            title={`Posts in category "${category}" | ${config.siteTitle}`}
          />
          <Flex
            className="post-header"
            pt={{ sm: '0', md: '9rem' }}
            pb={{ sm: '4', md: '9rem' }}
            px={{ sm: '1rem', md: '9rem' }}
            color="white"
            backgroundColor="accent.500"
          >
            <Button fontSize="3xl" variant="link" width="100%" py={1}>
              <Link alt="see more" to="/blog">
                Go to Blog
              </Link>
            </Button>
          </Flex>
          <PostListing postEdges={postEdges} pageContext={pageContext} />
        </div>
      </Layout>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`
