import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../layout'
import SEO from '../components/SEO/SEO'
import Agent from '../components/Particle/AgentPage/AgentPage'
import config from '../../data/SiteConfig'

class AgentPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div className="agent-container">
          <Helmet title={`Our Agent | ${config.siteTitle}`} />
          <SEO />
          <Agent />
        </div>
      </Layout>
    )
  }
}

export default AgentPage
