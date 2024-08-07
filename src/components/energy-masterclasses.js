/** @jsx jsx */
import React from "react"
import { TransicoesEnergeticasData} from "@/data"
import Element05 from "@/images/elements/element-05.svg"
import Element16 from "@/images/elements/element-16.svg"
import Element08 from "@/images/elements/element-08.png"
import ImgEnergyMaster from "@/images/energy_master.png"
import MobileIconMaster from "@/images/icons/icon-master-classes.svg"
import { Col, Container, Row } from "react-bootstrap"
import { jsx } from "@emotion/react"

import {
  abAgency,
  mb45,
  about,
  element04,
  element05,
  element08,
  mobileIconMaster
} from "../assets/styles/EnergyMarterclasses.style";
import {
  secTitle,
  secDesk,
  noPadding
} from "../assets/styles/layout.styles";

const EnergyMasterclasses = () => {
  const { sectionContent, element } = TransicoesEnergeticasData;
  return (
    <>
    <section css={[abAgency]}>
      <Container fluid>
        <Row>
          <Col css={noPadding} lg={6} md={6} sm={12}>
            <div css={about}>
              <span css={mobileIconMaster}><img src={MobileIconMaster} /></span>
              <img src={ImgEnergyMaster} />
            </div>
          </Col>
          <Col css={noPadding} lg={6} md={6} sm={12}>
            <div css={about}>
              <h2 css={[secTitle, mb45]}>
                {'Energy'}<img src={MobileIconMaster} /><br/>
                {'MasterClasses'}
              </h2>
              <p css={secDesk}>{`
              Na EVEx MasterClasses, os participantes podem aprender diretamente com profissionais que são referências nos seus campos de atuação, em especial, no Brasil e em Portugal. São discutidas diversas questões técnicas, políticas, econômicas, jurídicas e regulatórias que estão na agenda dos setores energéticos ibero-latino-americanos.`}</p>
            <p>
            Exemplos de Energy MasterClasses que foram realizadas no EVEx 2023:
            “Transição Energética na Indústria de Petróleo & Gás: integração com renováveis e geopolítica em tempos de Guerra”, com Maurício Tolmasquim, Diretor de Transição Energética e Sustentabilidade da Petrobras;
<br></br><br></br>
“Arbitragem e Transição Energética Justa: resolução de conflitos rumo a uma economia de baixo carbono e redução de desigualdades”, com Solange David, Women in Energy do CIGRE Internacional, e Filipe Matias Santos, Diretor de Serviços Jurídicos da ERSE;
<br></br><br></br>
“Redes do Futuro: modernização dos Mercados Ibérico e Brasileiro de Energia à luz da sustentabilidade”, com Ferrari Careto, CEO da E-Redes, e Wagner Ferreira, na ocasião Diretor Institucional e Jurídico da ABRADEE;
<br></br><br></br>
“Instrumentos Financeiros para a Descarbonização e Ação Climática do BNDES”, com Carla Primavera, Superintendente da Área de Transição Energética e Clima do BNDES;
<br></br><br></br>
“Biocombustíveis para a Descarbonização do Setor de Aviação”, com Luana Gaspar, Head de Descarbonização da PSR Energy & Consulting;
<br></br><br></br>
“Apoio às PME no caminho para a circularidade: a classificação eCIRCULAR”, com Paulo Santos, Diretor de Sustentabilidade e Mobilidade da ADENE – Agência para a Energia; 
<br></br><br></br>
“Indústria Verde: urgência global, oportunidade econômica e justiça social”, com Rosana Santos, Diretora Executiva do Instituto E+ Transição Energética.
            </p>
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
      <img css={element04} src={Element16} />
      <img css={element08} src={Element08} />
    </section>
    {/* <div css={operadora}>
    <img src={ImgOperadora} /> 
    </div> */}
    </>
  );
};

export default EnergyMasterclasses;
