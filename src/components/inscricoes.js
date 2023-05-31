/** @jsx jsx */
import React from "react";
import { BigCtaData, blocksTeData } from "@/data";
import Element10 from '@/images/elements/element-10.svg'
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from "@emotion/react";

import {
  abAgency,
  pr79,
  mb45,
  about,
  element10,
  dateBlock,
  blocks,
  asideBlock,
  sectionTitle
} from "../assets/styles/Inscricoes.styles";
import {
  secTitle,
  subtitle,
  secDesk,
  commonSection,
  commonBtn,
  redBg,
  noPaddingRight,
} from "../assets/styles/layout.styles";

const Bigcta = () => {
  const { sectionContent, element } = BigCtaData;
  return (
    <section css={abAgency}>
      <Container fluid>

      <Row>
          <Col css={sectionTitle} lg={12}>
             <h2>Inscrições</h2>
             <p>
                {`Escolha abaixo sua(s) categoria(s) de inscrição no EVEx Lisboa 2023 e vamos juntos de volta ao futuro da
                 energia ibero-latino-americana. 
                 Observações: os ingressos darão acesso ao respectivo evento (EVEx Online ou EVEx Presencial); aos valores
                 apresentados acresce IVA à taxa legal em vigor, quando aplicável; para pagamentos através de depósito,
                 transferência bancária ou PIX, favor enviar solicitação para secretaria@evex.energy.`}
             </p>
          </Col>
        </Row>

        <div css={blocks}>
          <Row>
          <Col css={sectionTitle} lg={12}>
             <h2>Online</h2>
          </Col>
            {BigCtaData.map(({ date, text, button }, index) => (
              <Col lg={6} md={6} sm={12}>
                <div css={dateBlock} key={index} className={index == 1 ? 'purple' : ''}>
                  <h2>{date}</h2>
                  <p>{text}</p>
                  <button css={commonBtn}>{button}</button>
                </div>
                <div css={asideBlock}></div>
              </Col>
            ))}
          </Row>
        </div>

        <div css={blocks}>
          <Row>
          <Col css={sectionTitle} lg={12}>
             <h2>Presencial</h2>
          </Col>
            {BigCtaData.map(({ date, text, button }, index) => (
              <Col lg={6} md={6} sm={12}>
                <div css={dateBlock} key={index} className={index == 1 ? 'purple' : ''}>
                  <h2>{date}</h2>
                  <p>{text}</p>
                  <button css={commonBtn}>{button}</button>
                </div>
                <div css={asideBlock}></div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
      {/* <img css={element10} src={Element10} /> */}
    </section>
  );
};

export default Bigcta;
