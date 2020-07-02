import React from 'react'
import { Text } from '@chakra-ui/core'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import 'swiper/css/swiper.css'
import { Swiper, Navigation, Pagination, Scrollbar } from 'swiper/js/swiper.esm'
import ReactIdSwiperCustom from 'react-id-swiper/lib/ReactIdSwiper.custom'
import DImage from '../../Atom/DImage/DImage'
import IntricateBox from '../../Atom/IntricateBox/IntricateBox'
import './CommercialPageSlider.css'

function CommercialPageSlider() {
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
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
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
    <IntricateBox
      className="commercial__slider"
      isDark
      backgroundColor="accent.500"
      title="Property Types"
      py="2rem"
    >
      <ReactIdSwiperCustom {...params}>
        <div className="carousel__content">
          <div className="carousel__content-item ">
            <DImage alt="nastuh-abootalebi" filename="nastuh-abootalebi" />
            <Text fontSize="2xl" className="carousel__content-title">
              Office
            </Text>
          </div>
        </div>
        <div className="carousel__content">
          <div className="carousel__content-item ">
            <DImage alt="industrial" filename="industrial" />
            <Text fontSize="2xl" className="carousel__content-title">
              Industrial
            </Text>
          </div>
        </div>
        <div className="carousel__content">
          <div className="carousel__content-item ">
            <DImage alt="multifamily" filename="multifamily" />
            <Text fontSize="2xl" className="carousel__content-title">
              Multifamily
            </Text>
          </div>
        </div>
        <div className="carousel__content">
          <div className="carousel__content-item ">
            <DImage alt="land" filename="land" />
            <Text fontSize="2xl" className="carousel__content-title">
              Land
            </Text>
          </div>
        </div>
        <div className="carousel__content">
          <div className="carousel__content-item ">
            <DImage alt="nastuh-abootalebi" filename="nastuh-abootalebi" />
            <Text fontSize="2xl" className="carousel__content-title">
              Office
            </Text>
          </div>
        </div>
        <div className="carousel__content">
          <div className="carousel__content-item ">
            <DImage alt="nastuh-abootalebi" filename="nastuh-abootalebi" />
            <Text fontSize="2xl" className="carousel__content-title">
              Office
            </Text>
          </div>
        </div>
      </ReactIdSwiperCustom>
    </IntricateBox>
  )
}

export default CommercialPageSlider
