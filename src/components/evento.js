/** @jsx jsx */
import React, { useState } from "react";
import {
  LisboaData,
  Evex1Data,
  Evex2Data,
  Evex3Data,
} from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from "@emotion/react";
import Arrow from "@/images/icons/arrow-down.svg";
import Element02 from "@/images/elements/element-02.svg";
import Element17 from "@/images/elements/element-17.svg";
import Evex3 from "@/images/oevex/evento03.png";
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
  lightBg,
  slider,
  element17,
  element2
} from "../assets/styles/Evento.styles";
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

const Evento = () => {
  const { image, image2 } = LisboaData;

  const testimonialsOptions = {
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: "#main-slider-next",
      prevEl: "#main-slider-prev",
    },
    slidesPerView: 1,
  };

  return (
    <section css={[abAgency]}>
      <Container fluid>
        <Row>
          <Col css={noPadding} lg={6} md={6} sm={12}>
            <div css={about}>
             <div>
             <p css={secDesk}>
                Em seguida, nos dias 29 e 30 de novembro de 2022, ocorreu o
                primeiro evento presencial do EVEx, na Reitoria da Universidade
                NOVA de Lisboa, com um público seleto formado por 250
                especialistas do mundo da energia, de acadêmicos a executivos
                C-Level, de jornalistas a reguladores e protagonistas políticos.
              </p>
             </div>
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

              {Evex1Data.map(({ img }, index) => (
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
            <div css={[lisboaTwo, lightBg]}>
             <div>
             <h2 css={[secTitle, mb45]}>Autoridades</h2>
              <p css={secDesk}>
                Entre as autoridades participantes, estavam o Secretário de
                Estado do Ambiente e da Energia de Portugal, João Galamba; o
                Presidente da ADENE – Agência para a Energia, Nelson Lage; o
                Presidente do MIBGAS – Mercado Ibérico de Gás Natural, Raúl
                Yunta Huete; e o Embaixador do Brasil em Portugal, Raimundo
                Carreiro.
              </p>
             </div>
              <img css={element2} src={Element02} />
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} css={noPadding}>
            <Swiper css={slider} {...testimonialsOptions}>
              <span id="main-slider-prev">
                <img src={Arrow} />
              </span>

              <span id="main-slider-next">
                <img src={Arrow} />
              </span>

              {Evex2Data.map(({ img }, index) => (
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
                Destacaram-se também as participações do Diretor de Serviços
                Jurídicos da ERSE – Entidade Reguladora dos Serviços
                Energéticos, Filipe Matias Santos, e do Procurador-Geral da
                ANEEL – Agência Nacional de Energia Elétrica, Luiz Eduardo Diniz
                Araújo
              </p>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} css={noPadding}>
            <img src={Evex3} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Evento;
