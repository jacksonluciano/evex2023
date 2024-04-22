/** @jsx jsx */
import React from "react";
import { VirtualPresencialData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from '@emotion/react'
import { Link } from "gatsby";
import NatalLogo from '@/images-br/home-br/natal.svg'
import NatalElement1 from '@/images-br/home-br/natal_element_1.svg'
import NatalElement2 from '@/images-br/home-br/natal_element_2.svg'
import SerhsImg from '@/images-br/home-br/serhs.jpg'
import GreenElementImage from '@/images-br/natal/natal-green-element01.svg'

import { 
  abAgency,
  pr79,
  mb45,
  about,
  imgFull,
  section,
  header,
  bg,
  natalHeroContainer,
  elem1,
  elem2,
  vidSection
}  from '../assets/styles-br/onde-sera.styles'
import {
  secTitle,
  secDesk,
  commonBtn,
  noPadding
} from "../assets/styles/layout.styles";

const ondeSera = () => {
  const { sectionContent, image} = VirtualPresencialData;
  return (
   <>
   <section css={natalHeroContainer}>
      <Container className='hero_container'>
        <h2>Onde será?</h2>
        <img src={GreenElementImage} />
      </Container>
    </section>
    <section css={section}>
    <Container fluid>
      <Row>
        <Col xs={9} md={7} sm={12} css={header}>
          <div className='title_container'>
            <h2 className='title'>SERHS Natal <br /> Grand Hotel & Resort</h2>
          </div>
        </Col>
        <Col xs={3} md={5} sm={0} className='px-0'>
          <Container fluid style={{ height: '100%' }}>
            <Row style={{ height: '100%' }}>
              <Col xs={12} lg={6} css={bg} className='px-0'></Col>
              <Col xs={12} lg={6} css={bg} className='px-0'></Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>


  </section>
    <section css={[abAgency]}>
    <img src={NatalLogo} className='natal_logo' />
      <Container style={{position: 'relative', zIndex: 2}}>
        <Row>       
          <Col lg={7} md={7} sm={12} css={vidSection} style={{position: 'relative'}} >
            <img css={imgFull} src={SerhsImg} />
            <img css={elem1} src={NatalElement1} />
            <img css={elem2} src={NatalElement2} />
          </Col>
          <Col css={pr79} lg={5} md={5} sm={12}>
           <div css={about}>
              {/* <h2 css={[secTitle, mb45]}>Do Virtual ao <br/> Presencial</h2> */}
              <p css={secDesk}>
              O luxuoso SERHS Natal Grand Hotel & Resort será a casa do EVEx Brasil 2024, por oferecer um excelente atendimento e toda a infraestrutura necessária para a realização do evento. Encontra-se localizado na Via Costeira, principal avenida de Natal, próximo de importantes pontos turísticos, como as praias de Ponta Negra e Areia Preta.
              </p>
              <p css={secDesk}>
              Com todos os ambientes voltados para o mar, o resort possui uma arquitetura imponente, permitindo que participantes do EVEx Brasil também apreciem as belezas do litoral potiguar e tenham uma vista privilegiada do Morro do Careca, cartão postal da cidade.
              </p>
              <Link to="/brasil/natal" css={commonBtn}>Por que Natal?</Link>
           </div>
          </Col>
        </Row>
      </Container>
    </section></>
  );
};

export default ondeSera;
