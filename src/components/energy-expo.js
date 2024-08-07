/** @jsx jsx */
import React from "react";
import { TransicoesEnergeticasData} from "@/data";
import IconEnergyExpo from "@/images/icons/icon-energy-expo.svg"
import MobileIconExpo from "@/images/icons/icon-expo.svg"
import ImgEnergyExpo from "@/images/energy_expo.png"
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from "@emotion/react";

import {
  abAgency,
  mb45,
  about,
  p50,
  mobileIconExpo
} from "../assets/styles/EnergyExpo.styles";
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
            <div css={[about,p50]}>
              <h2 css={[secTitle, mb45]}>
                {'Energy Expo/ \n Business'}<img src={IconEnergyExpo} />
              </h2>
              <p css={secDesk}>{`
              Nos eventos virtuais e presenciais, as empresas e demais organizações apoiadoras do EVEx podem expor e discutir projetos, serviços, cases de sucesso, novas tecnologias, modelos de negócios e outras iniciativas que tenham relação com a transformação dos mercados ibérico e latino-americano de energia rumo a uma economia de baixo carbono.`}</p>
            <p>
            Exemplos de painéis de Energy Expo/Business que foram realizados no EVEx 2023:
            “Geração Distribuída e Comunidades de Energia Renovável: cases, oportunidades e modelos de negócio”;
<br></br><br></br>
“Hidrogênio Verde como acelerador da Transição Energética: tecnologias e projetos em desenvolvimento”;
<br></br><br></br>
“Abertura e Segurança dos Mercados de Energia: a experiência ibero-brasileira”;
<br></br><br></br>
“Mobilidade Elétrica e Sustentável: como acelerar a transição energética no setor dos transportes?”;
<br></br><br></br>
“COP28 e as perspectivas para Mercados de Carbono no combate à Mudança Climática: o que esperar no futuro próximo?”;
<br></br><br></br>
”Desafios da estratégia de ESG das empresas em Portugal: entre reporting e diretivas”;
<br></br><br></br>
“O Mercado de Carbono na Transição Energética: a experiência ibero-brasileira”.
            </p>
            </div>
          </Col>
          <Col css={noPadding} lg={6} md={6} sm={12}>
            <div css={about}>
              <span css={mobileIconExpo}><img src={MobileIconExpo} /></span>
              <img src={ImgEnergyExpo} />
            </div>
          </Col>
        </Row>
      </Container>
      {/* <img css={element05} src={Element05} /> */}
    </section>
      </>
  );
};

export default Reitoria;
