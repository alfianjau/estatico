import React, { useState, useEffect, useRef } from 'react'
import { Box } from '@chakra-ui/core'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import 'swiper/css/swiper.css'
import {
  Swiper as SwiperClass,
  Navigation,
  Pagination,
  Scrollbar,
  Controller,
} from 'swiper/js/swiper.esm'
import Swiper from 'react-id-swiper'
import IntricateBox from '../../Atom/IntricateBox/IntricateBox'
import ListingHeader from './ListingHeader'
import ListingMap from './ListingMap'

function ListingSectionMap() {
  // Swiper instance
  const [swiper, updateSwiper] = useState(null)
  // Swiper thumbsinstance
  const [swiperThumbs, updateSwiperThumbs] = useState(null)

  if (typeof window === 'undefined') {
    global.window = {}
  }

  const gallerySwiperParams = {
    // Provide Swiper class as props
    SwiperClass,
    containerClass: 'swiper-gallery',
    // Add modules you need
    modules: [Navigation, Pagination, Scrollbar, Controller],
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      clickable: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    slidesPerView: 1,
    spaceBetween: 50,
    getSwiper: updateSwiper,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
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
  const thumbnailSwiperParams = {
    // Swiper,
    containerClass: 'swiper-thumb',
    modules: [Controller],
    spaceBetween: 10,
    getSwiper: updateSwiperThumbs,
    centeredSlides: true,
    slidesPerView: 2,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
    },
  }

  const thumbMap = {
    mapTypeControl: false,
    zoomControl: false,
    fullScreenControl: false,
  }

  // Bind swiper and swiper thumbs
  useEffect(() => {
    if (swiper && swiperThumbs) {
      swiper.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiper
    }
  }, [swiper, swiperThumbs])

  return (
    <IntricateBox
      className="listings__slider"
      title="408 Craigleith Drive 3"
      pr="2rem"
    >
      <ListingHeader />
      <Swiper {...gallerySwiperParams}>
        <div className="carousel__content">
          <div className="carousel__content-item ">
            <ListingMap
              height="30rem"
              options={{
                panControl: false,
                mapTypeControl: false,
                scrollwheel: false,
              }}
            />
          </div>
        </div>
        <div className="carousel__content">
          <div className="carousel__content-item ">
            <ListingMap height="30rem" />
          </div>
        </div>
        <div className="carousel__content">
          <div className="carousel__content-item ">
            <ListingMap height="30rem" />
          </div>
        </div>
        <div className="carousel__content">
          <div className="carousel__content-item ">
            <ListingMap height="30rem" />
          </div>
        </div>
        <div className="carousel__content">
          <div className="carousel__content-item ">
            <ListingMap height="30rem" />
          </div>
        </div>
      </Swiper>
      <Swiper {...thumbnailSwiperParams}>
        <div className="carousel__content">
          <div className="carousel__content-item ">
            <ListingMap height="11rem" options={{ ...thumbMap }} />
          </div>
        </div>
        <div className="carousel__content">
          <div className="carousel__content-item ">
            <ListingMap height="11rem" />
          </div>
        </div>
        <div className="carousel__content">
          <div className="carousel__content-item ">
            <ListingMap height="11rem" />
          </div>
        </div>
        <div className="carousel__content">
          <div className="carousel__content-item ">
            <ListingMap height="11rem" />
          </div>
        </div>
        <div className="carousel__content">
          <div className="carousel__content-item ">
            <ListingMap height="11rem" />
          </div>
        </div>
      </Swiper>
    </IntricateBox>
  )
}

export default ListingSectionMap
