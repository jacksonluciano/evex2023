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
                {/* {'Reitoria da \n Universidade \n NOVA de \n Lisboa'} */}
                {'LNEG – \n Laboratório \n Nacional \n de Energia \n e Geologia '}
              </h2>
              <p css={secDesk}>{`
              O EVEx Lisboa 2025 – Lisbon Energy Experience será realizado nos dias 07 e 08 de outubro, em Portugal, no campus do LNEG – Laboratório Nacional de Energia e Geologia em Alfragide, na região de Lisboa.

O LNEG é um centro de investigação, com o estatuto de laboratório do Estado, atualmente sob a tutela do Ministério do Ambiente e Energia de Portugal, que tem por missão impulsionar e realizar ações de investigação, de demonstração e transferência de conhecimento, de assistência técnica e tecnológica e de apoio laboratorial dirigidas às empresas, nos domínios da energia e geologia.

A pareceria entre o EVEx e o LNEG pretende fortalecer a troca de conhecimentos e experiências, para acelerar a transição energética nos países da Península Ibérica e da América Latina.
 
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
