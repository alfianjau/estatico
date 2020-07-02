import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * ? 1. write query to get image data
 * ! pass data into Img component,ind
 */

const DImage = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }
      return (
        <Img
          className={props.className}
          alt={props.alt}
          fluid={image.node.childImageSharp.fluid}
        />
      )
    }}
  />
)

export default DImage
