/** @jsx jsx */
import React from "react";
import { VirtualPresencialData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import IconEnergy from "@/images/icons/icon-energy-academy.svg";
import MobileIconAcademy from "@/images/icons/icon-academy.svg"
import ImgEnergyAcademy from "@/images/energy_academy.png";
import { jsx } from '@emotion/react'

import { 
  abAgency,
  pr79,
  mb45,
  about,
  imgFull,
  mobileIconAcademy
}  from '../assets/styles/EnergyAcademy.styles'
import {
  secTitle,
  secDesk,
  noPaddingRight
} from "../assets/styles/layout.styles";

const EnergyAcademy = () => {
  const { sectionContent, image, element} = VirtualPresencialData;
  return (
    <section css={[abAgency]}>
      <Container fluid>
        <Row>
          <Col css={pr79} lg={6} md={6} sm={12}>
           <div css={about}>
              <h2 css={[secTitle, mb45]}>Energy<br></br> Academy <img src={IconEnergy} /></h2>
              <p css={secDesk}>
              Minicursos e workshops na área energética lecionados por professores e investigadores de centros de pesquisa e prestigiadas universidades lusófonas, de que são exemplos a Universidade de Coimbra, Universidade de Lisboa, a Universidade de São Paulo, o Mackenzie Integridade e o FGV CERI.
              </p>
              <p css={secDesk}>
              Na EVEx Academy, também ocorrem as apresentações dos trabalhos aprovados na Call for Papers/Projects de cada edição do evento. Para informações sobre a chamada de trabalhos do EVEx 2024, acesse a aba “Papers” no menu deste site.
              </p>
           </div>
          </Col>
          <Col lg={6} md={6} sm={12} css={noPaddingRight}>
            <span  css={mobileIconAcademy}><img src={MobileIconAcademy} /></span>
            <img css={imgFull} src={ImgEnergyAcademy} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EnergyAcademy;
