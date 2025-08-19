/** @jsx jsx */
import React, { useState } from "react";
import {
  LisboaData,
  LisboaSlideData,
  CapitalSlideData,
  AlfamaSlideData,
} from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from "@emotion/react";
import Arrow from "@/images/icons/arrow-down.svg";
import Element17 from "@/images/elements/element-17.svg";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import {
  abAgency,
  pr79,
  mb45,
  about,
  imgFull,
  lisboaTwo,
  orangeBg,
  slider,
  element17,
  bgSalmon,
  bgWhite
} from "../assets/styles/PorqueLisboa.styles";
import {
  secTitle,
  subtitle,
  secDesk,
  commonSection,
  commonBtn,
  redBg,
  noPadding,
  noPaddingRight,
} from "../assets/styles/layout.styles";

SwiperCore.use([Pagination, Navigation]);

const PorqueLisboa = () => {
  const { image, image2 } = LisboaData;

  const testimonialsOptions = {
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: "#main-slider-next",
      prevEl: "#main-slider-prev",
    },
    slidesPerView: 'auto',
    spaceBetween: 8,
  };

  return (
    <section css={[abAgency]}>
      <Container fluid>
        <Row>
          <Col css={noPadding} lg={6} md={6} sm={12}>
            <div css={about}>
              <h2 css={[secTitle, mb45]}>Por que Lisboa?</h2>
              <p css={secDesk}>
              Lisboa foi escolhida para sediar os eventos presenciais do EVEx na Península Ibérica, em virtude de ser uma das cidades que mais tem ganhado destaque no cenário internacional. Na World Travel Awards 2024, foi consagrada como o “Melhor Destino Urbano da Europa”. Do Castelo de São Jorge ao Parque das Nações; da Praça do Comércio até a Torre de Belém; são muitos os pontos turísticos que a tornam inesquecível.
              </p>
            </div>
            <img css={element17} src={Element17} />
          </Col>
          <Col lg={6} md={6} sm={12} css={noPadding}>
            <Swiper css={slider} {...testimonialsOptions}>
              <span id="main-slider-prev">
                <img src={Arrow} />
              </span>

              <span id="main-slider-next">
                <img src={Arrow} />
              </span>

              {LisboaSlideData.map(({ img }, index) => (
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
        <Row>
          <Col css={noPadding} lg={6} md={6} sm={12}>
            <div css={[lisboaTwo, orangeBg]}>
              <p css={secDesk}>
                A capital lusitana respira história e cultura, mas sem deixar de
                se modernizar, apostando na criatividade e na inovação
                tecnológica – inclusive, também é sede do maior evento da área
                de tecnologia do mundo, o Web Summit Lisbon. Possui excelentes
                infraestruturas e opções de hospedagem, além de transportes
                públicos eficientes, incluindo os famosos bondinhos elétricos e
                o Elevador de Santa Justa, verdadeiros cartões postais.
              </p>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} css={noPadding}>
            <Swiper css={[slider, bgSalmon]} {...testimonialsOptions}>
              <span id="main-slider-prev">
                <img src={Arrow} />
              </span>

              <span id="main-slider-next">
                <img src={Arrow} />
              </span>

              {CapitalSlideData.map(({ img }, index) => (
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
        <Row>
          <Col css={noPadding} lg={6} md={6} sm={12}>
            <div css={lisboaTwo}>
              <p css={secDesk}>
              Em complemento à programação do EVEx Lisboa 2025 – Lisbon Energy Experience, os participantes do evento poderão ter uma experiência gastronômica única, que vai muito além do bacalhau e do pastel de nata. Em Alfama, no Bairro Alto e no Cais de Sodré também poderão descobrir a noite lisboeta, uma das mais animadas e boemias de toda a Europa.
              </p>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} css={noPadding}>
            <Swiper css={[slider,bgWhite]} {...testimonialsOptions}>
              <span id="main-slider-prev">
                <img src={Arrow} />
              </span>

              <span id="main-slider-next">
                <img src={Arrow} />
              </span>

              {AlfamaSlideData.map(({ img }, index) => (
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
    </section>
  );
};

export default PorqueLisboa;
