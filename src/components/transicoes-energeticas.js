/** @jsx jsx */
import React from "react";
import { TransicoesEnergeticasData, blocksTeData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from "@emotion/react";

import {
  abAgency,
  pr79,
  mb45,
  about,
  element05,
  dateBlock,
  blocks,
  asideBlock
} from "../assets/styles/TransicoesEnergeticas.style";
import {
  secTitle,
  secDesk,
} from "../assets/styles/layout.styles";

const TransicoesEnergeticas = () => {
  const { sectionContent, element } = TransicoesEnergeticasData;
  return (
    <section css={[abAgency]}>
      <Container fluid>
        <Row>
          <Col css={pr79} lg={12} md={12} sm={12}>
            <div css={about}>
              <h2 css={[secTitle, mb45]}>{sectionContent.title}</h2>
              <p css={secDesk}>{sectionContent.text}</p>
            </div>
          </Col>
        </Row>

        <div css={blocks}>
          <Row>
            {/* {blocksTeData.map(({ date, text }, index) => (
              <Col lg={6} md={6} sm={12}>
                <div css={dateBlock} key={index}>
                  <h3>{date}</h3>
                  <p>{text}</p>
                </div>
                <div css={asideBlock}></div>
              </Col>
            ))} */}
            <Col lg={6} md={6} sm={12}>
                <div css={dateBlock}>
                  <h3>07 e 08 de <br/>Outubro</h3>
                  <p>Lisbon Energy Experience<br/>Evento Presencial</p>
                </div>
                <div css={asideBlock}></div>
              </Col>
            <Col lg={6} md={6} sm={12}>
                <div css={dateBlock}>
                  <h3>03, 04 e 07 de Novembro</h3>
                  <p>Energy Virtual Experience<br/>Evento Online</p>
                </div>
                <div css={asideBlock}></div>
              </Col>           
          </Row>
        </div>
        <img css={element05} src={element} />
      </Container>
    </section>
  );
};

export default TransicoesEnergeticas;
