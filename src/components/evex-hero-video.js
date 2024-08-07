/** @jsx jsx */
import React from "react";
import Element04 from '@/images/elements/element-04.svg'
import Element05 from '@/images/elements/element-05.svg'
import Element08 from '@/images/elements/element-08.png'
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from "@emotion/react";

import {
  abAgency,
  pr79,
  mb45,
  about,
  element04,
  element05,
  element08,
  dateBlock,
  blocks,
  asideBlock,
  sectionTitle
} from "../assets/styles/EvexHeroVideo.styles";
import {
  secTitle,
  subtitle,
  secDesk,
  commonSection,
  commonBtn,
  redBg,
  noPaddingRight,
} from "../assets/styles/layout.styles";

const Inscricoes = () => {

  return (
    <section css={abAgency}>
      <Container fluid>

      <Row>
          <Col css={sectionTitle} lg={12}>
             <h2>EVEx 2023: <br></br> de volta ao futuro da energia</h2>
             <p>
                {`Com o tema “Transição Energética e Novas Tecnologias: de volta ao futuro da energia ibero-latino-americana”, os dois eventos do EVEx 2023 reuniram os mais importantes players e stakeholders dos mercados de energia da Península Ibérica e da América Latina. Primeiro, ocorreu o EVEx 2023 – Energy Virtual Experience, nos dias 02 a 05 de outubro, em ambiente 100% online. Ao todo, foram mais de 25 horas de transmissão em tempo real, com participação de mais de 50 speakers em diversas sessões de Talks, MasterClasses, Academy e Expo/Business.`}
             </p>
          </Col>
        </Row>

      </Container>
      <img css={element04} src={Element04} />
      <img css={element05} src={Element05} />
      <img css={element08} src={Element08} />
    </section>
  );
};

export default Inscricoes;
