/** @jsx jsx */
import React from "react";
import { EvexLisboaData } from "@/data";
import Regulamento from "@/images/regulamento_tap.pdf"
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from '@emotion/react'

import { 
  abAgency,
  pr79,
  mb45,
  about,
  element02
}  from '../assets/styles/Tap.styles'
import {
  secTitle,
  subtitle,
  secDesk,
  commonSection,
  commonBtn,
  redBg,
  noPaddingRight
} from "../assets/styles/layout.styles";

const Tap = () => {
  const { sectionContent, element} = EvexLisboaData;
  return (
    <section css={[abAgency]}>
      <Container fluid>
        <Row>
          <Col css={pr79} lg={12} md={12} sm={12}>
           <div css={about}>
              <h2 css={[secTitle, mb45]}>Operadora Oficial</h2>
              <p css={secDesk}>
                {`A TAP Air Portugal é a operadora oficial do EVEx Lisboa 2023. A todos os participantes do evento que efetuarem a sua reserva de avião e adquirirem o respectivo bilhete através do website da TAP (www.flytap.com), a TAP concederá os seguintes descontos:`}
              </p>
              <h3>10% em classe econômica;</h3>
              <h3>10% em classe executiva.</h3>
              <p css={secDesk}>
                {`Os descontos são aplicáveis para viagens de ida e volta de qualquer destino TAP para Lisboa e são válidos apenas em voos operados pela TAP. Para demais condições e instruções de como efetuar a reserva online, consulte o regulamento abaixo disponível para download. Qualquer dúvida, entre em contato com a secretaria do EVEx através do e-mail secretaria@evex.energy`}
              </p>
              <a href={Regulamento} target="_blank" css={commonBtn}>Regulamento TAP</a>
           </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Tap;
