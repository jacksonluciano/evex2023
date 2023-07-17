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
              As empresas e demais organizações apoiadoras do EVEx podem expor e discutir ações, projetos, produtos, serviços, programas e cenários que tenham relação com a transformação dos mercados ibérico e latino-americano de energia.`}</p>
            <p>
            Exemplos de sessões Energy Expo/Business da edição passada:
“Comerc Impacta e Vibra: na rota da descarbonização”, promovida pela Comerc Energia em conjunto com a Vibra;
<br></br><br></br>
“Transição Energética e os novos papéis do consumidor-cliente” e “Transformações do Mercado Retalhista”, ambas promovidas pela EDP;
<br></br><br></br>
“O potencial do hidrogênio de baixo carbono na Transição Energética”, promovida pela Galp;
<br></br><br></br>
“Segurança Energética e Clima: o papel das cidades” e “Comunidades de Energia Ibero-Americanas”, ambas promovidas pela ADENE e EnR;
<br></br><br></br>
“Abertura total do mercado de energia elétrica no Brasil: do atacado ao varejo”, promovida pela ABRACEEL.
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
