/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/react'
import { Container, Col, Row } from 'react-bootstrap'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper/core'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import { NatalData1, NatalData2, NatalData3 } from '@/data-br'
import {
  bg,
  content,
  header,
  description,
  imgFull,
  lastcontainer,
  section,
  slider,
  teamPagination,
  teamSlider,
  reverse
} from '../assets/styles-br/natal-description.styles'
import Arrow from '@/images/icons/arrow-down.svg'
import NatalLogo from '@/images-br/natal/natal-logo.svg'

SwiperCore.use([Pagination, Navigation])

const NatalDescription = () => {
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
        spaceBetween: 20,
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      576: {
        spaceBetween: 20,
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 1,
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
    <>
     <section>
        <Container fluid>
          <Row>
            <Col lg={6} md={6} sm={12} className='px-0'>
              <Swiper css={slider} {...carousel01Options}>
                <span id="main-slider-prev01">
                  <img src={Arrow} />
                </span>

                <span id="main-slider-next01">
                  <img src={Arrow} />
                </span>

                {NatalData1.map(({ img }, index) => (
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

            <Col lg={6} md={6} sm={12} css={description}>
              <div className='description_container'>
                <p>
                Natal será novamente a cidade-sede do EVEx Brasil, sobretudo, em virtude de sua localização estratégica no Nordeste do país, onde há abundância de recursos naturais para a geração de energia renovável e, assim, cada vez mais oportunidades na transição energética. 
                </p>

                <p>
                O seu estado, o Rio Grande do Norte, é líder em produção de energia eólica no Brasil e vem recebendo inúmeros investimentos em diversas áreas energéticas, como a primeira planta-piloto de hidrogênio renovável da Petrobras (na Usina Termelétrica do Vale do Açu, em Alto do Rodrigues). A produção onshore de petróleo e gás natural na região também é expressiva.
                </p>

                <p>
                Além disso, os participantes do EVEx Brasil 2025 poderão aproveitar a realização do evento para conhecer as belezas da capital potiguar, uma vez que é considerada um dos destinos turísticos mais procurados do mundo, sendo famosa por suas belas praias, dunas e lagoas. 
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section css={section}>
        <Container fluid>
          <Row>
            <Col xs={9} md={7} sm={12} css={header}>
              <div className='title_container'>
                <h2 className='title'>SERHS Natal <br /> Grand Hotel & Resort</h2>
              </div>
            </Col>
            <Col xs={3} md={5} sm={0} className='px-0'>
              <Container fluid style={{ height: '100%' }}>
                <Row style={{ height: '100%' }}>
                  <Col xs={12} lg={6} css={bg} className='px-0'></Col>
                  <Col xs={6} lg={6} css={bg} className='px-0'></Col>
                </Row>
              </Container>
            </Col>
          </Row>

          <Row css={reverse}>
            <Col xs={12} md={7} sm={12} className='px-0' css={content}>
              <div className='content_container'>
                <p>
                  O EVEx Brasil 2025 será realizado no SERHS Natal Grand Hotel & Resort, que oferece toda a infraestrutura necessária para o formato do evento, além de ser condizente com o seu principal público-alvo – as mais importantes lideranças e autoridades dos mercados ibérico e latino-americano de energia.
                </p>

                <p>
                  Durante a realização do encontro, os participantes terão condições especiais para se hospedarem e desfrutarem de uma estadia agradável no Serhs Natal, com todos os confortos proporcionados por um dos melhores resorts da capital do Rio Grande do Norte. Para mais informações e instruções sobre como efetuar a reserva de quartos, entre em contato com a secretaria do EVEx através do seguinte e-mail: secretaria@evex.energy
                </p>
              </div>
            </Col>

            <Col xs={12} md={5} sm={12} className='px-0'>
              <Swiper css={slider} {...carousel02Options}>
                <span id="main-slider-prev02">
                  <img src={Arrow} />
                </span>

                <span id="main-slider-next02">
                  <img src={Arrow} />
                </span>

                {NatalData2.map(({ img }, index) => (
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

        <img src={NatalLogo} className='natal_logo' />
      </section>

      <section>
        <Container fluid className='px-0' css={lastcontainer}>
          <Swiper css={teamSlider} {...carousel03Options}>
            {NatalData3.map(({ img }, index) => (
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
    </>
  )
}

export default NatalDescription