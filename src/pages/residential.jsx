import React from 'react'
import { Helmet } from 'react-helmet'
// import { graphql } from 'gatsby'
import Layout from '../layout'
import ResidentialPage from '../components/Particle/ResidentialPage/ResidentialPage'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'

function Residential(props) {
  // const postEdges = this.props.data.allMarkdownRemark.edges;
  return (
    <Layout location={props.location}>
      <Helmet title={`Residential Services | ${config.siteTitle}`} />
      <SEO />
      <ResidentialPage />
    </Layout>
  )
}

export default Residential
