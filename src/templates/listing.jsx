import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { Tabs, TabList, Tab } from '@chakra-ui/core'
import Layout from '../layout'
import PostListing from '../components/PostListing/PostListing'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'
import './listing.css'

class Listing extends React.Component {
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
    const postEdges = this.props.data.allMarkdownRemark.edges
    const pageContext = this.props.pageContext
    const groupTag = this.props.data.allMarkdownRemark.group
    return (
      <Layout location={this.props.location}>
        <div className="listing-container">
          <div className="posts-container">
            <Helmet title={config.siteTitle} />
            <SEO />
            <Tabs align="center" className="blog-tab" variant="unstyled">
              <TabList
                color="white"
                className="blog-tab__tablist"
                flexWrap="wrap"
                flexDirection={{ sm: 'column', md: 'row' }}
                py={{ sm: 10, md: 32 }}
              >
                {groupTag.map((tag, i) => (
                  <Tab
                    key={i}
                    fontWeight="bold"
                    fontSize={{ sm: 'lg', md: '4xl' }}
                    px={8}
                    _selected={{ color: 'primary.500' }}
                  >
                    <Link to={`/categories/${tag.tag}/`}>{tag.tag}</Link>
                  </Tab>
                ))}
              </TabList>
            </Tabs>
            <PostListing postEdges={postEdges} pageContext={pageContext} />
          </div>
          {/* {this.renderPaging()} */}
        </div>
      </Layout>
    )
  }
}

export default Listing

/* eslint no-undef: "off" */
export const listingQuery = graphql`
  query ListingQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      group(field: frontmatter___category) {
        tag: fieldValue
      }
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
