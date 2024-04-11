/** @jsx jsx */
import React, { useState } from "react";
import { LisboaData, Evex1Data, Evex2Data, Evex3Data } from "@/data";
import { EvexBrasil2024 } from "@/data-br";
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from "@emotion/react";
import Arrow from "@/images/icons/arrow-down.svg";
import Element02 from "@/images-br/orange-elements-02.png";
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
  element2,
  gradient,
  centerColumn,
  content,
  sideColumn,
} from "../assets/styles-br/QuintaEdicao.styles";
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
import { Link } from "gatsby";

SwiperCore.use([Pagination, Navigation]);

const QuintaEdicao = () => {
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
      <img css={element2} src={Element02} />
      <Container fluid>
        <Row>
          <div css={gradient}>
            <h1>5º Edição do EVEx</h1>
          </div>
        </Row>
        <Row>
          <Col xs={6} className="px-0">
            <div css={content}>
              <p>
                Após o enorme sucesso das últimas edições virtuais e presenciais
                em Lisboa, o EVEx vai desembarcar este ano pela primeira vez no
                Brasil, para iniciar uma edição especial do maior e mais
                prestigiado encontro de transição energética da Península
                Ibérica e da América Latina.
              </p>
              <p>
                Com o tema “Transição Energética Justa e Industrialização Verde:
                na rota ibero-latino-americana”, a quinta edição do EVEx
                promoverá uma expedição energética inédita e transformadora,
                mediante formato composto por três eventos:
              </p>
              <Link css={commonBtn} to="/brasil/o-evex">
                Edições passadas
              </Link>
            </div>
          </Col>
          <Col xs={6} className="px-0">
            <div css={sideColumn}>
              <h5>EVEx Brasil 2024 - Natal Energy Experience</h5>
              <p>
                <b>03 e 04 de julho</b> {`| SERHS Natal Grande Hotel & Resort`}
              </p>
            </div>
            <div css={sideColumn}>
              <h5>EVEx Brasil 2024 - Natal Energy Experience</h5>
              <p>
                <b>03 e 04 de julho</b> {`| SERHS Natal Grande Hotel & Resort`}
              </p>
            </div>
            <div css={sideColumn}>
              <h5>EVEx Brasil 2024 - Natal Energy Experience</h5>
              <p>
                <b>03 e 04 de julho</b> {`| SERHS Natal Grande Hotel & Resort`}
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col css={noPadding} lg={6} md={6} sm={12}>
            <div css={[lisboaTwo, lightBg]}>
              <div>
                <h2 css={[secTitle, mb45]}>EVEx Brasil 2024</h2>
                <p css={secDesk}>
                  Nos dias 03 e 04 de julho, o EVEx Brasil 2024 vai reunir na
                  cidade de Natal, capital do Rio Grande do Norte, os principais
                  agentes dos mercados ibérico e latino-americano de energia,
                  incluindo executivos C-Level, renomados especialistas e
                  autoridades públicas, sobretudo do Brasil e de Portugal.
                  <br />
                  <br />
                  O objetivo do evento é promover a troca de conhecimentos e
                  experiências entre players e stakeholders do setor, visando a
                  impulsionar soluções sustentáveis, tecnologias inovadoras e
                  novos negócios em prol da transformação energética e
                  industrial.
                  <br />
                  <br />
                  Vamos juntos acelerar a transição energética e
                  industrialização verde na rota ibero-latino-americana?
                </p>
                <Link css={commonBtn} to="/brasil/o-evex">
                  Quem Somos?
                </Link>
              </div>
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

              {EvexBrasil2024.map(({ img }, index) => (
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

export default QuintaEdicao;
