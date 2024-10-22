/* eslint-disable react/jsx-curly-newline */
import React from 'react'
import { PseudoBox } from '@chakra-ui/core'
import { Link } from 'gatsby'
// import './BlogPage.css'

class BlogListing extends React.Component {
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

  render() {
    const postList = this.getPostList()
    return (
      <div>
        {/* Your post list here. */
        postList.map((post) => (
          <Link className="blog-list " to={post.path} key={post.title}>
            <PseudoBox
              as="h3"
              fontSize="2xl"
              mb={4}
              transition=".3s ease-in color"
              _hover={{ color: 'primary.500' }}
            >
              {post.title}
            </PseudoBox>
          </Link>
        ))}
      </div>
    )
  }
}

export default BlogListing
