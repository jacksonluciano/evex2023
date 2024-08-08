/** @jsx jsx */
import React, { useState } from "react";
import { LisboaData, SixtySpeakers, Missao01Data, Missao02Data, PremiosData, JantarData } from "@/data";
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
  lisboaTwoRow,
  premiosMobile
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
                Participaram do EVEx Lisboa 2023 mais de 60 speakers de 03 países: Portugal, Brasil e Espanha. Eles discutiram temáticas essenciais para a aceleração da transição energética e de novas tecnologias no eixo ibero-latino-americano, como hidrogênio verde, eólicas offshore, geração distribuída, comunidades de energia, abertura de mercado, ESG, descarbonização, mobilidade elétrica, ação climática e mercado de carbono. 
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
            {/* <img src={Abraceel} /> */}
            <Swiper css={slider} {...testimonialsOptions}>
              <span id="main-slider-prev">
                <img src={Arrow} />
              </span>

              <span id="main-slider-next">
                <img src={Arrow} />
              </span>

              {Missao01Data.map(({ img }, index) => (
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
          <Col css={noPadding} lg={6} md={6} sm={12}>
            <div css={[lisboaTwo, darkBg]}>
              <div>
                <h2 css={[secTitle, mb45]}>
                  Missão <br></br> EVEx
                </h2>
                <p css={secDesk}>
                Com o apoio conjunto da CCEE, ABRADEE e ABEEólica, o EVEx também organizou uma missão especial para Portugal, reunindo um seleto grupo de executivos e profissionais do setor de energia do Brasil, para participar das discussões do EVEx Lisboa 2023, bem como conhecer melhor o funcionamento e as especificidades do Mercado Ibérico de Eletricidade (MIBEL), que integra os sistemas elétricos de Portugal e da Espanha.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row css={[lisboaTwoRow]}>
          <Col css={noPadding} lg={6} md={6} sm={12}>
            <div css={[lisboaTwo, darkBg]}>
              <div>
                <p css={secDesk}>
                A missão promoveu uma imersão executiva no centro das transformações do MIBEL, objetivando que os participantes pudessem expandir os respectivos horizontes sobre a transição energética global e compreender como a experiência ibérica pode contribuir para a evolução brasileira e para as atuações deles no setor. No dia 27 de outubro de 2023, foram realizadas visitas técnicas e reuniões exclusivas na ERSE – Entidade Reguladora dos Serviços Energéticos, na sede da EDP e na ENSE – Entidade Nacional para o Setor Energético.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} css={noPadding}>
            {/* <img src={Acemel} /> */}
            <Swiper css={slider} {...testimonialsOptions}>
              <span id="main-slider-prev">
                <img src={Arrow} />
              </span>

              <span id="main-slider-next">
                <img src={Arrow} />
              </span>

              {Missao02Data.map(({ img }, index) => (
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
          <Col lg={6} md={6} sm={12} css={noPadding}>
            {/* <img src={Premios} /> */}
            <Swiper css={slider} {...testimonialsOptions}>
              <span id="main-slider-prev">
                <img src={Arrow} />
              </span>

              <span id="main-slider-next">
                <img src={Arrow} />
              </span>

              {PremiosData.map(({ img }, index) => (
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
          <Col css={noPadding} lg={6} md={6} sm={12}>
            <div css={[lisboaTwo, darkBg, premiosMobile]}>
              <div>
                <h2 css={[secTitle, mb45]}>Prêmios EVEx</h2>
                <p css={secDesk}>
                O Prêmio EVEx Lisboa 2023 Personalidade do Ano foi entregue para Elbia Gannoum, Presidente da ABEEólica, na categoria América Latina, e para Nelson Lage, Presidente da ADENE, na categoria Península Ibérica. Filipe Matias Santos, Diretor de Serviços Jurídicos da ERSE, e Solange David, Women in Energy do CIGRE International, também tiveram os seus trabalhos reconhecidos no evento com a Homenagem EVEx Honra ao Mérito. 
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row css={[lisboaTwoRow]}>
          <Col css={noPadding} lg={6} md={6} sm={12}>
            <div css={[lisboaTwo]}>
              <div>
                <h2 css={[secTitle, mb45]}>
                  Jantar de<br></br> Confraternização
                </h2>
                <p css={secDesk}>
                O jantar de confraternização da Missão e do EVEx Lisboa 2023 foi realizado no restaurante Terraço Editorial, com vista para o emblemático Elevador de Santa Justa.
Uma verdadeira experiência gastronômica portuguesa, assinada pelo Chef Rui Rebelo, que proporcionou momentos especiais de networking e descontração entre os participantes.

                  <br></br>{" "}
                  {/* <a href={Pdf} target="_blank">
                    Confira o editorial aqui
                  </a> */}
                  .
                </p>
              </div>
              <img src={Element08} css={element8} />
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} css={noPadding}>
            {/* <img src={MegaWhat} /> */}
            <Swiper css={slider} {...testimonialsOptions}>
              <span id="main-slider-prev">
                <img src={Arrow} />
              </span>

              <span id="main-slider-next">
                <img src={Arrow} />
              </span>

              {JantarData.map(({ img }, index) => (
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
