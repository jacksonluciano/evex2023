/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/react'
import { Container, Col, Row } from 'react-bootstrap'
import { EvexData1, EvexData2, EvexData3 } from '@/data-br'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper/core'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import Arrow from "@/images/icons/arrow-down.svg"
import {
  content,
  imgFull,
  lastcontainer,
  slider,
  teamSlider,
  teamPagination,
  reverse
} from '../assets/styles-br/evento.styles'
import SixIcon from '@/images-br/o-evex/6.svg'
import TwoIcon from '@/images-br/o-evex/2.svg'

SwiperCore.use([Pagination, Navigation])

const Evento = () => {
  const carousel01Options = {
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: "#main-slider-next01",
      prevEl: "#main-slider-prev01",
    },
    slidesPerView: 1,
  }

  const carousel02Options = {
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: "#main-slider-next02",
      prevEl: "#main-slider-prev02",
    },
    slidesPerView: 1,
  }

  const carousel03Options = {
    spaceBetween: 20,
    loop: false,
    slidesPerView: 1,
    centeredSlides: false,
    pagination: {
      el: "#team-carousel-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: "#main-slider-next",
      prevEl: "#main-slider-prev",
    },
    breakpoints: {
      0: {
        spaceBetween: 8,
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      576: {
        spaceBetween: 8,
        slidesPerView: 1,
        slidesPerGroup: 3,
      },
      992: {
        spaceBetween: 8,
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
      1200: {
        spaceBetween: 20,
        slidesPerView: 'auto',
        slidesPerGroup: 3,
      },
    },
  }

  return (
    <section>
      <Container fluid>
        <Row css={reverse}>
          <Col lg={7} md={7} sm={12} className='px-0'>
            <Swiper css={slider} {...carousel01Options}>
              <span id="main-slider-prev01">
                <img src={Arrow} />
              </span>

              <span id="main-slider-next01">
                <img src={Arrow} />
              </span>

              {EvexData1.map(({ img }, index) => (
                <SwiperSlide key={index}>
                  <img css={imgFull} src={img} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              className="swiper-pagination"
              id="client-carousel-pagination"
            ></div>
          </Col>

          <Col lg={5} md={5} sm={12} css={content}>
            <div className='content_container'>
              <img src={SixIcon} />
              <h3>
                Eventos, sendo 4 virtuais e 2 presenciais, em Lisboa, Portugal
              </h3>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={5} md={5} sm={12} css={content}>
            <div className='content_container'>
              <img src={TwoIcon} />
              <h3>
                Missões técnicas ao Mercado Ibérico de Eletricidade – MIBEL
              </h3>
            </div>
          </Col>

          <Col lg={7} md={7} sm={12} className='px-0'>
            <Swiper css={slider} {...carousel02Options}>
              <span id="main-slider-prev02">
                <img src={Arrow} />
              </span>

              <span id="main-slider-next02">
                <img src={Arrow} />
              </span>

              {EvexData2.map(({ img }, index) => (
                <SwiperSlide key={index}>
                  <img css={imgFull} src={img} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              className="swiper-pagination"
              id="client-carousel-pagination"
            ></div>
          </Col>
        </Row>
      </Container>

      <Container fluid className='px-0' css={lastcontainer}>
        <Swiper css={teamSlider} {...carousel03Options}>
          {EvexData3.map(({ img }, index) => (
            <SwiperSlide key={index} className='slider'>
              <img src={img} />
            </SwiperSlide>
          ))}
          <div
            css={teamPagination}
            className="swiper-pagination"
            id="team-carousel-pagination"
          ></div>
        </Swiper>
      </Container>
    </section>
  )
}

export default Evento