import React from 'react'
import { Box } from '@chakra-ui/core'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import 'swiper/css/swiper.css'
import { Swiper, Navigation, Pagination, Scrollbar } from 'swiper/js/swiper.esm'
import ReactIdSwiperCustom from 'react-id-swiper/lib/ReactIdSwiper.custom'
import DImage from '../../Atom/DImage/DImage'
import IntricateBox from '../../Atom/IntricateBox/IntricateBox'
import CardBox from '../../Atom/CardBox/CardBox'

function LocationSectionBlog() {
  if (typeof window === 'undefined') {
    global.window = {}
  }
  function getDirection() {
    const windowWidth = window.innerWidth
    const direction = windowWidth <= 760 ? 'vertical' : 'horizontal'

    return direction
  }

  const params = {
    // Provide Swiper class as props
    Swiper,
    // Add modules you need
    modules: [Navigation, Pagination, Scrollbar],
    on: {
      resize() {
        Swiper.changeDirection(getDirection())
      },
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    direction: getDirection(),
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    slidesPerView: 2,
    spaceBetween: 50,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    },
    renderPrevButton: () => (
      <BsArrowLeft className="swiper-button-prev">Prev</BsArrowLeft>
    ),
    renderNextButton: () => (
      <BsArrowRight className="swiper-button-next">Next</BsArrowRight>
    ),

    themeColor: '#8ac832',
  }

  return (
    <IntricateBox className="location__slider" title="James Blog" py="2rem">
      <ReactIdSwiperCustom {...params}>
        <div className="carousel__content">
          <div className="carousel__content-item ">
            <CardBox
              width="100%"
              tagLink="other"
              cardDesc="Cursus in nec diam, sed tortor fames ut sit. lorem ipsum dolor"
            >
              <Box className="card__image">
                <DImage alt="hunters-race" filename="nastuh-abootalebi.jpg" />
              </Box>
            </CardBox>
          </div>
        </div>
        <div className="carousel__content">
          <div className="carousel__content-item ">
            <CardBox
              width="100%"
              tagLink="other"
              cardDesc="Cursus in nec diam, sed tortor fames ut sit. lorem ipsum dolor"
            >
              <Box className="card__image">
                <DImage alt="hunters-race" filename="nastuh-abootalebi.jpg" />
              </Box>
            </CardBox>
          </div>
        </div>
        <div className="carousel__content">
          <div className="carousel__content-item ">
            <CardBox
              width="100%"
              tagLink="other"
              cardDesc="Cursus in nec diam, sed tortor fames ut sit. lorem ipsum dolor"
            >
              <Box className="card__image">
                <DImage alt="hunters-race" filename="nastuh-abootalebi.jpg" />
              </Box>
            </CardBox>
          </div>
        </div>
        <div className="carousel__content">
          <div className="carousel__content-item ">
            <CardBox
              width="100%"
              tagLink="other"
              cardDesc="Cursus in nec diam, sed tortor fames ut sit. lorem ipsum dolor"
            >
              <Box className="card__image">
                <DImage alt="hunters-race" filename="nastuh-abootalebi.jpg" />
              </Box>
            </CardBox>
          </div>
        </div>
      </ReactIdSwiperCustom>
    </IntricateBox>
  )
}

export default LocationSectionBlog
