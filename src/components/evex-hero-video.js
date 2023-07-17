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
             <h2>EVEx Lisboa 2023: <br></br> Do Virtul ao Presencial</h2>
             <p>
                {`Com o tema “Transição e Transformação Energética: novos rumos para Europa e América Latina”, os dois eventos do EVEx Lisboa 2022 (Energy Virtual Experience e Lisbon Energy Experience) reuniram alguns dos principais players e stakeholders dos mercados ibérico e latino-americano de energia.
O encontro online foi realizado nos dias 10 a 14 de outubro de 2022, no mesmo formato clássico das edições anteriores, incluindo mais de 25 sessões de Energy Virtual Talks, Energy Virtual MasterClasses, Energy Virtual Academy e Energy Virtual Expo/Business. Ao todo, foram mais de 30 horas de transmissão livestream, com cerca de 80 oradores e 350 participantes inscritos..`}
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
