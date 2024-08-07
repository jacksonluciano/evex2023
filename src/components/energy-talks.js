/** @jsx jsx */
import React from "react";
import { VirtualPresencialData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import IconEnergy from "@/images/icons/icon-energy-talks.svg";
import MobileIconEnergy from "@/images/icons/icon-talks.svg";
import ImgEnergyTalks from "@/images/energy_talks.jpg";
import { jsx } from '@emotion/react'

import { 
  abAgency,
  pr79,
  mb45,
  about,
  imgFull,
  mobileIconEnergy
}  from '../assets/styles/EnergyTalks.styles'
import {
  secTitle,
  secDesk,
  noPaddingRight
} from "../assets/styles/layout.styles";

const EnergyTalks = () => {
  const { sectionContent, image, element} = VirtualPresencialData;
  return (
    <section css={[abAgency]}>
      <Container fluid>
        <Row>
          <Col css={pr79} lg={6} md={6} sm={12}>
           <div css={about}>
              <h2 css={[secTitle, mb45]}>Energy Talks <img src={IconEnergy} /></h2>
              <p css={secDesk}>
              Os painéis da EVEx Talks proporcionam um intenso diálogo ibero-latino-americano, para o compartilhamento de informações e conhecimentos em prol de uma transição energética sustentável e bem-sucedida. São estabelecidas redes e sinergias entre executivos C-Level, membros de governos, políticos, reguladores, investidores, representantes de instituições e associações, investigadores científicos e acadêmicos, para além de outros profissionais e empreendedores atuantes nos mais variados setores energéticos e em indústrias associadas. 
              </p>
              <p>
              No EVEx 2023, por exemplo, foram abordados temas como Eólicas Offshore na Península Ibérica e na América Latina; Segurança Energética, Descarbonização da Economia e Ação Climática; ESG e Inovação; Mobilidade Elétrica e Sustentável para a Transição Energética, entre outros.
              </p>
           </div>
          </Col>
          <Col lg={6} md={6} sm={12} css={noPaddingRight}>
             <img css={mobileIconEnergy} src={MobileIconEnergy} />
            <img css={imgFull} src={ImgEnergyTalks} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EnergyTalks;
