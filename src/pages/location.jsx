import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../layout'
import SEO from '../components/SEO/SEO'
import Location from '../components/Particle/LocationPage/LocationPage'
import config from '../../data/SiteConfig'

class LocationPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div className="location-container">
          <Helmet title={`Location | ${config.siteTitle}`} />
          <SEO />
          <Location />
        </div>
      </Layout>
    )
  }
}

export default LocationPage
