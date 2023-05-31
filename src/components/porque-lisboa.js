/** @jsx jsx */
import React from "react";
import { LisboaData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from '@emotion/react'

import { 
  abAgency,
  pr79,
  mb45,
  about,
  imgFull,
  lisboaTwo,
  orangeBg
}  from '../assets/styles/PorqueLisboa.styles'
import {
  secTitle,
  subtitle,
  secDesk,
  commonSection,
  commonBtn,
  redBg,
  noPadding,
  noPaddingRight
} from "../assets/styles/layout.styles";

const virtualPresencial = () => {
  const { image3, image, image2} = LisboaData;
  return (
    <section css={[abAgency]}>
      <Container fluid>
        <Row>
          <Col css={noPadding} lg={6} md={6} sm={12}>
           <div css={about}>
              <h2 css={[secTitle, mb45]}>Porque Lisboa?</h2>
              <p css={secDesk}>
              Lisboa foi escolhida para sediar os eventos presenciais do EVEx, 
              por ser uma das cidades da Península Ibérica que mais tem ganhado 
              destaque no cenário internacional. Nos World Travel Awards 2022, 
              conhecidos como os “Óscares do Turismo”, recebeu o prêmio global 
              de Melhor Destino Europeu. Do Castelo de São Jorge ao Parque das 
              Nações; da Praça do Comércio até a Torre de Belém; são muitos os 
              pontos turísticos que a tornam inesquecível.
              </p>
           </div>
          </Col>
          <Col lg={6} md={6} sm={12} css={noPadding}>
            <img css={imgFull} src={image} />
          </Col>
        </Row>
        <Row>
          <Col css={noPadding} lg={6} md={6} sm={12}>
           <div css={[lisboaTwo,orangeBg]}>
              <p css={secDesk}>
              A capital lusitana respira história e cultura, mas sem deixar de se modernizar,
               apostando na criatividade e na inovação tecnológica – inclusive, também é sede 
               do maior evento da área de tecnologia do mundo, o Web Summit Lisbon.
Possui excelentes infraestruturas e opções de hospedagem, além de transportes públicos eficientes, 
incluindo os famosos bondinhos elétricos e o Elevador de Santa Justa, verdadeiros cartões postais.
              </p>
           </div>
          </Col>
          <Col lg={6} md={6} sm={12} css={noPadding}>
            <img css={imgFull} src={image2} />
          </Col>
        </Row>
        <Row>
          <Col css={noPadding} lg={6} md={6} sm={12}>
           <div css={lisboaTwo}>
              <p css={secDesk}>
              Em complemento à programação do EVEx Lisboa 2023, os participantes do evento
              poderão ter uma experiência gastronômica única, que vai muito além do bacalhau 
              e do pastel de nata. Em Alfama, no Bairro Alto e no Cais de Sodré, também poderão 
              descobrir a noite lisboeta, uma das mais animadas e boemias de toda a Europa.
              </p>
           </div>
          </Col>
          <Col lg={6} md={6} sm={12} css={noPadding}>
            <img css={imgFull} src={image3} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default virtualPresencial;
