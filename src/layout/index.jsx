/* eslint-disable no-nested-ternary */
import React from 'react'
import { ThemeProvider, CSSReset, Box } from '@chakra-ui/core'
import { Helmet } from 'react-helmet'
import config from '../../data/SiteConfig'
import Navigation from '../components/Atom/Navigation/Navigation'
import Footer from '../components/Footer/Footer'
import customTheme from '../theme'
import './index.css'

export default function MainLayout({ children, location }) {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      {location.pathname.split('/')[1] === 'blog' ||
      location.pathname.split('/')[1] === 'residential' ? (
        <Navigation isDark />
      ) : location.pathname.split('/')[1] === 'commercial' ? (
        <Navigation isDark />
      ) : location.pathname.split('/')[1] === 'feed' ? (
        <Navigation isDark />
      ) : (
        <Navigation />
      )}
      <Box className="layout-container" px={4} pb={4} pt={0}>
        {children}
      </Box>
      <Footer config={config} />
    </ThemeProvider>
  )
}
