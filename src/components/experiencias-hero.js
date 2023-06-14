/** @jsx jsx */
import React, { useState } from "react";
import {
  LisboaData
} from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from "@emotion/react";
import Element1 from "@/images/elements/element-01.svg";
import Element8 from "@/images/elements/element-08.png";

import {
  abAgency,
  pr79,
  mb45,
  about,
  imgFull,
  lisboaTwo,
  orangeBg,
  slider,
  element01,
  element08,
  element081
} from "../assets/styles/ExperienciasHero.styles";
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



const ExperienciasHero = () => {
  const { image, image2 } = LisboaData;
  return (
    <section css={[abAgency]}>
      <Container fluid>
        <Row>
          <Col css={noPadding} lg={6} md={6} sm={12}>
            <div css={about}>
              <h2 css={[secTitle, mb45]}>Experiências <br></br>Interativas</h2>
              <p css={secDesk}>
              O EVEx é composto por quatro experiências energéticas disruptivas. Conheça mais sobre cada uma delas:
              </p>
            </div>
            <img src={Element1} css={element01} />
            <img src={Element8} css={element081} />
          </Col>
          <Col lg={6} md={6} sm={12} css={noPadding}>
          <img src={Element8} css={element08} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ExperienciasHero;
