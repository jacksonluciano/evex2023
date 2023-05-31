/** @jsx jsx */
import React from "react";
import { TransicoesEnergeticasData} from "@/data";
import Element05 from "@/images/elements/element-05.svg"
import ImgReitoria from "@/images/reitoria.jpg"
import ImgOperadora from "@/images/operadora.jpg"
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from "@emotion/react";

import {
  abAgency,
  mb45,
  about,
  element05,
  operadora
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
              A Universidade NOVA de Lisboa, que figura entre as 200 melhores universidades do mundo no QS World University Rankings by Subjetc 2023 –referência mundial na avaliação de instituições de ensino superior –, será novamente palco do nosso encontro presencial.
              No ano passado, fomos muito bem acolhidos no prédio da Reitoria da NOVA, localizado no Campus de Campolide. Os seus espaços de alto nível, especialmente projetados para a realização de eventos, permitiram-nos realizar uma edição física inesquecível.
              Fundada em agosto de 1973, a NOVA celebra, este ano, 50 anos de existência. Nós estaremos lá para comemorar essa data especial durante a realização do EVEx Lisboa 2023. Vamos juntos?`}</p>
            </div>
          </Col>
          <Col css={noPadding} lg={6} md={6} sm={12}>
            <div css={about}>
              <img src={ImgReitoria} />
            </div>
          </Col>
        </Row>

        {/* <div css={blocks}>
          <Row>
            {blocksTeData.map(({ date, text }, index) => (
              <Col lg={6} md={6} sm={12}>
                <div css={dateBlock} key={index}>
                  <h3>{date}</h3>
                  <p>{text}</p>
                  
                </div>
                <div css={asideBlock}></div>
              </Col>
            ))}
          </Row>
        </div> */}
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
