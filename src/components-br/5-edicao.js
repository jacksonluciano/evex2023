/** @jsx jsx */
import React, { useState } from "react";
import { LisboaData, Evex1Data, Evex2Data, Evex3Data } from "@/data";
import { EvexBrasil2024 } from "@/data-br";
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from "@emotion/react";
import Arrow from "@/images/icons/arrow-down.svg";
import Element02 from "@/images-br/orange-elements-02.png";
import Evex2024 from "@/images-br/home-br/2024.svg";
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
  mobileButton,
} from "../assets/styles-br/QuintaEdicao.styles";
import {
  secTitle,
  subtitle,
  secDesk,
  commonSection,
  commonBtnBr,
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
            <h1>6ª Edição do EVEx</h1>
          </div>
        </Row>
        <Row>
          <Col xs={12} lg={6} className="px-0">
            <div css={content}>
              <div className="info-content">
              <p>
              Com o tema “Transição Energética e Ação Climática: sinergias ibero-americanas rumo à COP30”, a sexta edição do EVEx – Energy Virtual Experience contará com um formato composto por três eventos que prometem impulsionar a agenda energética para a 30ª Conferência das Nações Unidas sobre Mudança do Clima.
              </p>
              <p>
              Conheça o calendário do EVEx 2025 e participe conosco do maior intercâmbio de Transição Energética da Península Ibérica e da América Latina:
              </p>

              <Link css={commonBtnBr} to="/brasil/o-evex#last-editions">
                Edições Passadas
              </Link>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6} className="px-0">
            <div css={sideColumn}>
             
              <h5>EVEx Brasil 2025 – Natal Energy Experience</h5>
              <p>
                <span>03 e 04 de julho</span> {`| Natal, Rio Grande do Norte`}<br/>
                {`SERHS Natal Grand Hotel & Resort`}
              </p>
            </div>
            <div css={sideColumn}>            
              <h5>EVEx Lisboa 2025 – Lisbon Energy Experience</h5>
              <p>
                <b>07 e 08 de outubro</b> | Lisboa, Portugal <br/>
                LNEG – Laboratório Nacional de Energia e Geologia 
              </p>
            </div>
            <div css={sideColumn}>
             
              <h5>EVEx COP30 – Energy Virtual Experience</h5>
              <p>
                <span>03 a 05 de novembro de 2025</span><br/> online e ao vivo
              </p>
            </div>
            
            <div css={[sideColumn,mobileButton]}>            
            <Link css={commonBtnBr} to="/brasil/o-evex#last-editions">
                Edições Passadas
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col css={noPadding} lg={6} md={6} sm={12}>
            <div css={[lisboaTwo]}>
              <img className="evex-2024" src={Evex2024} />
              <div>
                <h2 css={[secTitle, mb45]}>EVEx Brasil 2025</h2>
                <p css={secDesk}>
                Após o grande sucesso da edição passada, o EVEx retorna este ano a Natal para realizar um evento ainda maior e melhor, com mais inovações, trocas de conhecimentos e networking de alto nível.
                  <br />
                  <br />
                  O EVEx Brasil 2025 – Natal Energy Experience ocorrerá nos dias 03 e 04 de julho, novamente no SERHS Natal Grand Hotel & Resort, reunindo importantes players, autoridades e especialistas dos mercados ibérico e latino-americano de energia, com destaque para Brasil e Portugal.
                  <br />
                  <br />
                  O objetivo é promover discussões estratégicas, novas tecnologias e negócios sustentáveis em prol de uma transição climática e energética mais justa, eficaz e inclusiva na região ibero-americana, com especial enfoque no Nordeste brasileiro.
                </p>
                <Link css={commonBtnBr} to="/brasil/comite">
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
