import React from 'react'
import { Helmet } from 'react-helmet'
// import { graphql } from 'gatsby'
import Layout from '../layout'
import CommercialPage from '../components/Particle/CommercialPage/CommercialPage'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'

function Commercial(props) {
  // const postEdges = this.props.data.allMarkdownRemark.edges;
  return (
    <Layout location={props.location}>
      <Helmet title={`Commercial Services | ${config.siteTitle}`} />
      <SEO />
      <CommercialPage />
    </Layout>
  )
}

export default Commercial
