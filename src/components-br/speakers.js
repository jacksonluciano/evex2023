/** @jsx jsx */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Element8 from "@/images/elements/element-08.png";
import Gradient from "@/images-br/speakers-br/circle-gradient.png";
import Elemen01 from "@/images-br/speakers/element01.svg";
import Elemen02 from "@/images-br/speakers/element02.svg";
import Elemen03 from "@/images-br/speakers/element03.svg";
import Elemen04 from "@/images-br/speakers/element04.svg";
import SpeakersWord from "@/images-br/speakers/speakers.svg";

import { TeamOneData } from "@/data-br";
import TeamCard from "@/components-br/team-card";
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
  element04,
  Word,
  radialElement
} from "../assets/styles-br/speakers.styles";

import { commonSection } from "../assets/styles/layout.styles";

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

const TeamCarousel = () => {
  const { sectionContent, posts } = TeamOneData;
  return (
    <section css={[team, commonSection]}>
      <Container fluid>
        <Row>
          <Col css={speakersTitle} lg={12}>
            <div className="heroTitle">
              <h2>{sectionContent.title}</h2>
              <p>
              Renomados especialistas, executivos C-Level e autoridades do Brasil e de Portugal, com protagonismo na transição energética ibero-americana, serão speakers do EVEx Brasil 2025 – Natal Energy Experience. Conheça os nomes confirmados:
              </p>
            </div>
            {/* <div css={radialElement}></div> */}
            <img css={element} src={Gradient} />
          </Col>
        </Row>
      </Container>
      <Container css={speakersCards}>
       
        <Row>
          {posts.map((post, index) => (
            <Col css={speakerCard} lg={3} md={3}>
              <TeamCard data={post} />
            </Col>
          ))}
        </Row>
        <img src={Elemen01} css={element01} />
        <img src={Elemen02} css={element02} />
        <img src={Elemen03} css={element03} />
        <img src={Elemen04} css={element04} />
      </Container>
        <img src={SpeakersWord} css={Word} />
      
    </section>
  );
};

export default TeamCarousel;
