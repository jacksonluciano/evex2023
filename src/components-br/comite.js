/** @jsx jsx */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Gradient from "@/images-br/comite-br/green-gradient.png";
import Elemen01 from "@/images-br/comite-br/element01.svg";
import Elemen03 from "@/images-br/comite-br/Element03.svg";
import Elemen02 from "@/images-br/comite-br/element2.svg";
import SpeakersWord from "@/images-br/comite-br/word.svg";

import { ComiteData } from "@/data-br";
import TeamCard from "@/components-br/comite-card";
import { jsx } from "@emotion/react";
import "swiper/swiper-bundle.min.css";

import {
  team,
  singleTM,
  speakerInfo,
  tmImg,
  speakersTitle,
  element,
  speakerCard,
  speakersCards,
  element01,
  element02,
  element03,
  Word,
  space
} from "../assets/styles-br/comite-styles";

import { commonSection } from "../assets/styles/layout.styles";

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

const TeamCarousel = () => {
  const { sectionContent, posts } = ComiteData;
  return (
    <>
      <section css={[team, commonSection]}>
        <Container fluid>
          <Row>
            <Col css={speakersTitle} lg={12}>
              <div className="heroTitle">
                <h2>Comitê Científico e Organizador</h2>
                <p>
                  O EVEx é promovido e realizado, anualmente, pela empresa
                  homônima, com base em um Comitê Científico e Organizador
                  formado por profissionais altamente especializados na área
                  energética e atuantes no eixo ibero-latino-americano. Conheça
                  abaixo os integrantes da quinta edição.
                </p>
              </div>
              <img css={element} src={Gradient} />
            </Col>
          </Row>
        </Container>
        <Container css={speakersCards}>
          <Row style={{ position: "relative", zIndex: 22 }}>
            {posts.map((post, index) => (
              <Col css={speakerCard} lg={3} md={3}>
                <TeamCard data={post} />
              </Col>
            ))}
          </Row>
          <img src={Elemen01} css={element01} />
        </Container>
        <img src={Elemen02} css={element02} />
        <img src={SpeakersWord} css={Word} />
        <img src={Elemen02} css={element03} />
      </section>
      <div css={space}></div>
    </>
  );
};

export default TeamCarousel;
