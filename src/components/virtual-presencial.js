/** @jsx jsx */
import React from "react";
import { VirtualPresencialData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from '@emotion/react'

import { 
  abAgency,
  pr79,
  mb45,
  about,
  imgFull
}  from '../assets/styles/VirtualPresencial.styles'
import {
  secTitle,
  subtitle,
  secDesk,
  commonSection,
  commonBtn,
  redBg,
  noPaddingRight
} from "../assets/styles/layout.styles";

const virtualPresencial = () => {
  const { sectionContent, image, element} = VirtualPresencialData;
  return (
    <section css={[abAgency]}>
      <Container fluid>
        <Row>
          <Col css={pr79} lg={6} md={6} sm={12}>
           <div css={about}>
              <h2 css={[secTitle, mb45]}>Do Virtual ao <br/> Presencial</h2>
              <p css={secDesk}>{sectionContent.text}</p>
              <button css={commonBtn}>Confira os destaques</button>
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

export default virtualPresencial;
