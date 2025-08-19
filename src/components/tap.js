/** @jsx jsx */
import React from "react";
import { EvexLisboaData } from "@/data";
import Regulamento from "@/images/Regulamento TAP - EVEx Lisboa 2024.pdf"
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from '@emotion/react'

import { 
  abAgency,
  pr79,
  mb45,
  about,
  element02,
  underline
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
                A TAP Air Portugal é a operadora oficial do EVEx Lisboa 2024. A todos os participantes do evento que efetuarem a sua reserva de avião e adquirirem o respectivo bilhete através do website da TAP (<a href="https://www.flytap.com/pt-br/">www.flytap.com</a>), a TAP concederá os seguintes descontos:
              </p>
              <h3>10% em classe econômica;</h3>
              <h3>15% em classe executiva.</h3>
              <p css={[secDesk,underline]}>
                Os descontos são aplicáveis para viagens de ida e volta de qualquer destino TAP para Lisboa e são válidos apenas em voos operados pela TAP. Para demais condições e instruções de como efetuar a reserva online, consulte o regulamento abaixo disponível para download. Qualquer dúvida, entre em contato com a secretaria do EVEx através do e-mail <span>secretaria@evex.energy</span>.
              </p>
              <a href={Regulamento} target="_blank" css={commonBtn}>Regulamento TAP</a>
              <br/><br/><br/>
              {/* <h2 css={[secTitle, mb45]}>Hotel Oficial</h2>
              <p css={secDesk}>
              O Dom Pedro Lisboa, um dos melhores hotéis cinco estrelas de Lisboa, é o hotel oficial do EVEx Lisboa 2024. Está localizado estrategicamente no coração da cidade e a menos de 3,5 km do local do evento.
Para reservas com condições especiais, siga as seguintes orientações:
              </p>
              <p>
              1.	Acesse o website: <a href="https://www.dompedro.com/pt/">https://www.dompedro.com/pt/</a>;<br/>
2.	Selecione o Hotel: Dom Pedro Lisboa;<br/>
3.	Preencha as informações de Check-in, Check-out, Quartos e Adultos,<br/> utilizando ao final o Promo Code: EVEX23

              </p> */}
           </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Tap;
