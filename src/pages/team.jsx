import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../layout'
import SEO from '../components/SEO/SEO'
import Team from '../components/Particle/TeamPage/TeamPage'
import config from '../../data/SiteConfig'

class TeamPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div className="teams-container">
          <Helmet title={`Our Teams | ${config.siteTitle}`} />
          <SEO />
          <Team />
        </div>
      </Layout>
    )
  }
}

export default TeamPage
