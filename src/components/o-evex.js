/** @jsx jsx */
import React from "react";
import { OevexData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from '@emotion/react'

import { 
  abAgency,
  pr79,
  mb45,
  about,
  element01,
  imgFull
}  from '../assets/styles/Oevex.style'
import {
  secTitle,
  subtitle,
  secDesk,
  commonSection,
  commonBtn,
  redBg,
  noPaddingRight
} from "../assets/styles/layout.styles";

const OEvex = () => {
  const { sectionContent, image, element} = OevexData;
  return (
    <section css={[abAgency]}>
      <Container fluid>
        <Row>
          <Col css={pr79} lg={6} md={6} sm={12}>
           <div css={about}>
              <h2 css={[secTitle, mb45]}>O EVE<span>x</span></h2>
              <p css={secDesk}>{sectionContent.text}</p>
              <img css={element01} src={element} />
           </div>
          </Col>
          <Col lg={6} md={6} sm={12} css={noPaddingRight}>
            <img css={imgFull} src={image} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OEvex;
