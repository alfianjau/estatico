import { Flex, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/core'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Layout from '../layout'
// import BlogPage from '../templates/blogListing'
import BlogFeed from '../components/Particle/BlogFeed/BlogFeed'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'
import './blog.css'

function Blog(props) {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
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
              category
              title
              tags
              cover
              date
            }
          }
        }
      }
    }
  `)

  // const postEdges = data.allMarkdownRemark.edges
  const groupTag = data.allMarkdownRemark.group
  return (
    <Layout location={props.location}>
      <Flex px={{ sm: '1rem', md: '9rem' }}>
        <div className="posts-container">
          <Helmet title={`Blog | ${config.siteTitle}`} />
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
              {/* <Tab
                fontWeight="bold"
                fontSize={{ sm: 'lg', md: '4xl' }}
                px={8}
                _selected={{ color: 'primary.500' }}
              >
                News{' '}
              </Tab>
              <Tab
                fontWeight="bold"
                fontSize={{ sm: 'lg', md: '4xl' }}
                px={8}
                _selected={{ color: 'primary.500' }}
              >
                Transaction
              </Tab>
              <Tab
                fontWeight="bold"
                fontSize={{ sm: 'lg', md: '4xl' }}
                px={8}
                _selected={{ color: 'primary.500' }}
              >
                Case Studies
              </Tab> */}
            </TabList>
            <TabPanels>
              <TabPanel>
                <BlogFeed />
              </TabPanel>
              <TabPanel>
                <BlogFeed />
              </TabPanel>
              <TabPanel>
                <BlogFeed />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </Flex>
    </Layout>
  )
}

export default Blog

/* eslint no-undef: "off" */
