import React from 'react'
import { Flex, Box } from '@chakra-ui/core'
import Residential from '../../Molecule/Residential/Residential'
import Hero from '../../Molecule/Hero/Hero'
import Commercial from '../../Molecule/Commercial/Commercial'
import './ResidentialPage.css'

class ResidentialPage extends React.Component {
  render() {
    // const postList = this.getPostList()
    return (
      <Box className="residential-page">
        <Flex
          className="hero-wrapper"
          flexDirection="row"
          flexWrap="wrap"
          position="relative"
          justifyContent="center"
          w="100%"
          pt={{ sm: '0', md: '6' }}
          pb={{ sm: '4', md: '6' }}
          px={{ sm: '1rem', md: '9rem' }}
          color="white.500"
        >
          <Hero
            isAlternate
            image="residential-hero"
            imageAlt="residential-hero"
            isDark
            noButton
            title="Residential Services"
          >
            Residential investor and developer real estate services.
          </Hero>

          <Residential
            my="3rem"
            title="Keller Offers"
            isCompact
            isCompactSubtitle="Specialized Investor Services"
            isCompactDescription="MemmoCRE works with specialized offers to bring its clients the top value in residential real estate
services. Our agents use technology and expert analysis to help determine and exploit the value of your
residential properties. You deserve the best, so we help you buy and sell at the optimal prices, and offer
a variety of support services. The result is reduced burden on our clients, while enabling you to
maximize the return on your investment. You can fill out your portfolio or find buyers for that property
you just fixed up or developed. We’ll help you turn living spaces into a real living."
            image="residential-meeting"
            imageAlt="residential-meeting"
            btnTitle="More info"
            btnLink="/blog/"
          />
          <Commercial
            isAlternate
            my="3rem"
            title="Integrated Services"
            btnLink="/blog/"
            subTitle="Our wholly owned integrated partners make it easy to get your residential deals across the finish line"
            description={`Our agents understand how to get our clients the most value for their investments in any market.

Through our partnership with eXp, MemmoCRE residential experts pair our clients with the right partners to close the deal, cutting through red tape so that you can ensure a smooth transaction and satisfied buyers or sellers.`}
            imageAlt="residential-mortgage"
            image="residential-mortgage"
          />
          <Residential
            title="International Services"
            isCompact
            isCompactSubtitle="International Investors with a variety of residential requirements will find services perfectly tailored
toward meeting their varied needs."
            isCompactDescription="Whether you are interested in portfolio diversification, vacation property, or even a second home,
memmoCRE is equipped to work with international investors from all over the world. As part of one of

the fastest growing brokerages in the world, we can leverage our rapidly growing footprint and unique
technology platform to meet your specific requirements."
            image="residential-view"
            imageAlt="residential-view"
            btnTitle="More info"
            btnLink="/blog/"
          />
          <Commercial
            isIntricate
            my="3rem"
            title="Express Offers"
            btnLink="/blog/"
            image="residential-luxuries"
            imageAlt="residential-luxuries"
            subTitle="Increase your buyer pool by enrolling as an investor in our Express Offers Program."
            description={`Engaging through our vast network of residential agent partners, bids are requested from institutional buyers who are interested in purchasing homes in that particular local market.

This gives sellers the option to sell their home quickly without the hassle of showings, staging and uncertainty.

Properties may qualify to be submitted to more than one buyer yielding multiple cash offers within two business days.`}
            intricateText="Express Offers allows home sellers to request an offer online. "
          />
        </Flex>
      </Box>
    )
  }
}

export default ResidentialPage
