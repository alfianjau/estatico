import React from 'react'
import { Helmet } from 'react-helmet'
// import { graphql } from 'gatsby'
import Layout from '../layout'
import LandingPage from '../components/Particle/LandingPage/LandingPage'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'

function Landing(props) {
  // const postEdges = this.props.data.allMarkdownRemark.edges;
  return (
    <Layout location={props.location}>
      <Helmet title={config.siteTitle} />
      <SEO />
      <LandingPage />
    </Layout>
  )
}

export default Landing
