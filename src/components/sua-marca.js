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

const SuaMarca = () => {
  const { sectionContent, element} = EvexLisboaData;
  return (
    <section css={[abAgency]}>
      <img src={Pattern} />
      <Container fluid>
        <Row>
          <Col css={pr79} lg={12} md={12} sm={12}>
           <div css={about}>
              <h2 css={[secTitle, mb45]}>Sua marca no ritmo da nova energia</h2>

              <p css={secDesk}>Conecte sua empresa a lideranças e decisores do setor energético. Conheça as oportunidades de patrocínio, exposição e ativação no EVEx Lisboa e na Missão EVEx 2026.</p>
              <Link to="/lisboa/lisboa" css={commonBtn}>Fale com nosso time</Link>
              {/* <img css={element02} src={element} /> */}
           </div>
          </Col>
        </Row>
      </Container>
      <img src={Pattern} />
    </section>
  );
};

export default SuaMarca;
