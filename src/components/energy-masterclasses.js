/** @jsx jsx */
import React from "react";
import { TransicoesEnergeticasData} from "@/data";
import Element05 from "@/images/elements/element-05.svg"
import Element16 from "@/images/elements/element-16.svg"
import Element08 from "@/images/elements/element-08.png"
import ImgEnergyMaster from "@/images/Energy-Masterclasses.jpg"
import MobileIconMaster from "@/images/icons/icon-master-classes.svg"
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from "@emotion/react";

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
                {'Energy \n Master Classes'}
              </h2>
              <p css={secDesk}>{`
              Na EVEx MasterClassses, os participantes podem aprender diretamente com profissionais que são referências nos seus campos de atuação, em especial, no Brasil e em Portugal. São discutidas diversas questões técnicas, políticas, econômicas, jurídicas e regulatórias de temáticas que estão na agenda dos setores energéticos.`}</p>
            <p>
            Exemplos de Energy MasterClasses da edição passada:
“Transição Energética em Portugal”, com João Galamba, Secretário de Estado do Ambiente e da Energia de Portugal;
<br></br><br></br>
“Energias Renováveis no contexto político e econômico da Transição Energética”, com Elbia Gannoum, CEO da ABEEólica;
<br></br><br></br>
“Medidas de resposta à crise de preços da energia”, com Filipe Matias Santos, Diretor de Serviços Jurídicos da ERSE;
<br></br><br></br>
“Uma visão sobre o setor elétrico brasileiro: presente e futuro.”, com Solange David, Vice-Presidente do Conselho de Administração da SAE;
<br></br><br></br>
“Políticas e contratação de novas tecnologias na Transição Energética”, com Joisa Dutra, Fundadora e Diretora do FGV CERI;
<br></br><br></br>
“Abertura dos Mercados no MIBEL e no Brasil: premissas, resultados alcançados e desafios”, com Ricardo Nunes, Presidente da Direção da ACEMEL, e Rodrigo Ferreira, Presidente Executivo da ABRACEEL;
<br></br><br></br>
“O papel do hidrogênio verde na Transição Energética”, com Maria João Rolim, Sócia do ROLIM Advogados, e Diego Almeida, Head of Hydrogen Business Development da Galp.
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
