/** @jsx jsx */
import React, { useState } from "react";
import { LisboaData, SixtySpeakers, Evex2Data, Evex3Data } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from "@emotion/react";
import Arrow from "@/images/icons/arrow-down.svg";
import Element08 from "@/images/elements/element-08.png";
import Element03 from "@/images/elements/element-03.svg";
import Pdf from "@/images/Especial MW - Brasil e Portugal - Lições de um mercado de energia livre.pdf";
import Abraceel from "@/images/oevex/missao-abraceel.png";
import Premios from "@/images/oevex/premios-evex.png";
import Acemel from "@/images/oevex/acemel.png";
import MegaWhat from "@/images/oevex/especial-megawhat.png";
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
  darkBg,
  slider,
  element3,
  element8,
  divider,
} from "../assets/styles/EventoTwo.styles";
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
                <h2 css={[secTitle, mb45]}>+ 60 Speakers</h2>
                <p css={secDesk}>
                  A agenda dos dois dias contou com o contributo de mais de 60
                  Speakers, sendo ocupada por discussões de alto nível sobre
                  temáticas diversas, como o futuro do consumidor na transição
                  energética; abertura dos mercados de energia no MIBEL e no
                  Brasil; transformações do mercado retalhista; segurança e
                  formação de preços; guerra na Europa, crise energética e
                  descarbonização da economia; segurança de abastecimento;
                  hidrogênio verde; mercado de carbono e comunidades de energia.
                </p>
              </div>
            </div>
            <img css={element3} src={Element03} />
          </Col>
          <Col lg={6} md={6} sm={12} css={noPadding}>
            <Swiper css={slider} {...testimonialsOptions}>
              <span id="main-slider-prev">
                <img src={Arrow} />
              </span>

              <span id="main-slider-next">
                <img src={Arrow} />
              </span>

              {SixtySpeakers.map(({ img }, index) => (
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
        <div css={divider}></div>
        <Row>
          <Col lg={6} md={6} sm={12} css={noPadding}>
            <img src={Abraceel} />
          </Col>
          <Col css={noPadding} lg={6} md={6} sm={12}>
            <div css={[lisboaTwo, darkBg]}>
              <div>
                <h2 css={[secTitle, mb45]}>
                  Missão <br></br> Abraceel
                </h2>
                <p css={secDesk}>
                  O EVEx Lisboa também foi palco da Missão ABRACEEL – Associação
                  Brasileira dos Comercializadores de Energia, liderada por seu
                  Presidente Executivo, Rodrigo Ferreira, que levou ao evento um
                  grupo de mais de 40 pessoas, entre profissionais das empresas
                  associadas, da ANEEL, do Congresso Nacional e do Ministério de
                  Minas e Energia do Brasil, para conhecer aspectos do MIBEL –
                  Mercado Ibérico de Eletricidade.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col css={noPadding} lg={6} md={6} sm={12}>
            <div css={[lisboaTwo, darkBg]}>
              <div>
                <p css={secDesk}>
                  Um dos frutos da missão foi a negociação de um acordo de
                  cooperação entre a ABRACEEL e a ACEMEL – Associação dos
                  Comercializadores de Energia no Mercado Liberalizado (na
                  ocasião, presidida por Ricardo Antunes), com vista à troca de
                  informações e condução de inciativas comuns para o
                  desenvolvimento do mercado livre de energia do Brasil e de
                  Portugal.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} css={noPadding}>
            <img src={Acemel} />
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} sm={12} css={noPadding}>
            <img src={Premios} />
          </Col>
          <Col css={noPadding} lg={6} md={6} sm={12}>
            <div css={[lisboaTwo, darkBg]}>
              <div>
                <h2 css={[secTitle, mb45]}>Prêmios Evex</h2>
                <p css={secDesk}>
                  A advogada Maria João Rolim, personalidade homenageada no EVEx
                  2021, e Caio César Cavalcanti, fundador do EVEx, entregaram os
                  Prêmios EVEx Personalidades do Ano 2022 para: Teresa Ponce de
                  Leão, Presidente do Laboratório Nacional de Energia e Geologia
                  – LNEG, na categoria “Personalidade da Península Ibérica”, e
                  Reynaldo Passanezi, CEO da Companhia Energética de Minas
                  Gerais – Cemig, na categoria “Personalidade da América
                  Latina”.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col css={noPadding} lg={6} md={6} sm={12}>
            <div css={[lisboaTwo]}>
              <div>
                <h2 css={[secTitle, mb45]}>
                  Especial <br></br> MegaWhat
                </h2>
                <p css={secDesk}>
                  A MegaWhat, media partner do EVEx desde a sua primeira edição,
                  esteve presente no EVEx Lisboa 2022. A CEO, Larissa Araium, e
                  os jornalistas, Camila Maia e Rodrigo Polito, além de
                  representarem a MegaWhat como moderadores de painéis, fizeram
                  uma cobertura especial das principais discussões do evento.
                  <br></br>{" "}
                  <a href={Pdf} target="_blank">
                    Confira o editorial aqui
                  </a>
                  .
                </p>
              </div>
              <img src={Element08} css={element8} />
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} css={noPadding}>
            <img src={MegaWhat} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Evento;
