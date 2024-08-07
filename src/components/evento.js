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
             Já nos dias 25 e 26 de outubro, foi realizado o segundo evento presencial do EVEx em Portugal, novamente na prestigiada Reitoria da Universidade NOVA de Lisboa. Assim, o EVEx Lisboa 2023 – Lisbon Energy Experience recebeu um público altamente qualificado, formado por cerca de 200 especialistas portugueses, brasileiros e espanhóis, entre os quais executivos C-Level, lideranças, autoridades, reguladores, jornalistas e acadêmicos da área energética.
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
              Entre as autoridades participantes do painel de abertura do EVEx Lisboa 2023, estavam Alexandre Fernandes, Presidente da ENSE – Entidade Nacional para o Setor Energético; Bruno Veloso, Vice-Presidente do Conselho de Administração da ADENE – Agência para a Energia; Alexandre Ramos Peixoto, Presidente da CCEE – Câmara de Comercialização de Energia Elétrica; e Thiago Prado, Presidente da EPE – Empresa de Pesquisa Energética.
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
              Com moderação da advogada e economista Maria João Rolim, o Fórum C-Level do evento contou com as participações de Jerónimo Meira da Cunha, Diretor-Geral da DGEG – Direção Geral de Energia e Geologia; Nelson Lage, Presidente da ADENE – Agência para a Energia; André Pepitone, Diretor Executivo Financeiro da Itaipu Binacional; e Alexandre Zucarato, Diretor de Planejamento do ONS – Operador Nacional do Sistema Elétrico.
              </p>
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

              {Evex3Data.map(({ img }, index) => (
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

export default Evento;
