import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../layout'
import SEO from '../components/SEO/SEO'
import PostPage from '../components/Particle/PostPage/PostPage'
import config from '../../data/SiteConfig'

class singlePostPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div className="post-container">
          <Helmet title={`post | ${config.siteTitle}`} />
          <SEO />
          <PostPage />
        </div>
      </Layout>
    )
  }
}

export default singlePostPage
