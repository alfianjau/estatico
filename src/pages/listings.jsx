import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../layout'
import SEO from '../components/SEO/SEO'
import Listing from '../components/Particle/ListingPage/ListingPage'
import config from '../../data/SiteConfig'

class ListingsPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div className="listings-container">
          <Helmet title={`Listing | ${config.siteTitle}`} />
          <SEO />
          <Listing />
        </div>
      </Layout>
    )
  }
}

export default ListingsPage
