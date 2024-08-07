/** @jsx jsx */
import React from "react";
import { TransicoesEnergeticasData} from "@/data";
import Element05 from "@/images/elements/element-05.svg"
import Element08 from "@/images/elements/element-08.png"
import ImgReitoria from "@/images/reitoria.jpg"
import ImgOperadora from "@/images/operadora.jpg"
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from "@emotion/react";

import {
  abAgency,
  mb45,
  about,
  element05,
  operadora,
  element08
} from "../assets/styles/Reitoria.styles";
import {
  secTitle,
  secDesk,
  noPadding
} from "../assets/styles/layout.styles";

const Reitoria = () => {
  const { sectionContent, element } = TransicoesEnergeticasData;
  return (
    <>
    <section css={[abAgency]}>
      <Container fluid>
        <Row>
          <Col css={noPadding} lg={6} md={6} sm={12}>
            <div css={about}>
              <h2 css={[secTitle, mb45]}>
                {'Reitoria da \n Universidade \n NOVA de \n Lisboa'}
              </h2>
              <p css={secDesk}>{`
              O EVEx Lisboa será realizado, pelo terceiro ano consecutivo, na Reitoria da Universidade NOVA de Lisboa. 
              O edifício da Reitoria da NOVA está localizado no Campus de Campolide e conta com espaços de alto nível, especialmente projetados para a realização de eventos. Inclusive, já foi reconhecido com o Prémio Valmor de Arquitetura.
              No QS World University Rankings by Subject 2025, a Universidade NOVA figura entre as 400 melhores instituições de ensino superior, num universo de 1.500 em todo o mundo. 
              `}</p>
            </div>
            <img css={element08} src={Element08} />
          </Col>
          <Col css={noPadding} lg={6} md={6} sm={12}>
            <div css={about}>
              <img src={ImgReitoria} />
            </div>
          </Col>
        </Row>
      </Container>
      <img css={element05} src={Element05} />
     
    </section>
    <div css={operadora}>
    <img src={ImgOperadora} /> 
    </div>
    </>
  );
};

export default Reitoria;
