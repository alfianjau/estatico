import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../layout'
import SEO from '../components/SEO/SEO'
import Offices from '../components/Particle/OfficesPage/OfficesPage'
import config from '../../data/SiteConfig'

class OfficesPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div className="offices-container">
          <Helmet title={`Office Locations | ${config.siteTitle}`} />
          <SEO />
          <Offices />
        </div>
      </Layout>
    )
  }
}

export default OfficesPage
