/** @jsx jsx */
import React from "react";
import { EvexLisboaData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import Pattern from "@/images/2026/pattern.svg";
import { jsx } from '@emotion/react'
import { Link } from "gatsby";

import { 
  abAgency,
  pr79,
  mb45,
  about,
  element02
}  from '../assets/styles/EvexLisboa2023.styles'
import {
  secTitle,
  secDesk,
  commonBtn,
} from "../assets/styles/layout.styles";

const EvexLisboa2023 = () => {
  const { sectionContent, element} = EvexLisboaData;
  return (
    <section css={[abAgency]}>
      <img src={Pattern} />
      <Container fluid>
        <Row>
          <Col css={pr79} lg={12} md={12} sm={12}>
           <div css={about}>
              <h2 css={[secTitle, mb45]}>EVEx Lisboa + Missão EVEx 2026</h2>
              <h4>No ritmo da nova energia</h4>
              <p css={secDesk}>{sectionContent.text}</p>
              <Link to="/lisboa/lisboa" css={commonBtn}>Conheça o Missão EVEx</Link>
              {/* <img css={element02} src={element} /> */}
           </div>
          </Col>
        </Row>
      </Container>
      <img src={Pattern} />
    </section>
  );
};

export default EvexLisboa2023;
