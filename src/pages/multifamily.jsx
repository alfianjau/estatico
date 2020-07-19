import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../layout'
import SEO from '../components/SEO/SEO'
import MultiPage from '../components/Particle/MultiFamilyPage/MultiFamilyPage'
import config from '../../data/SiteConfig'

class MultiFamilyPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div className="multi-family-container">
          <Helmet title={`Multifamily | ${config.siteTitle}`} />
          <SEO />
          <MultiPage />
        </div>
      </Layout>
    )
  }
}

export default MultiFamilyPage
