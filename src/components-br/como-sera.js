/** @jsx jsx */
import React from "react";
import { VirtualPresencialData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from '@emotion/react'
import { Link } from "gatsby";
import NatalLogo from '@/images-br/home-br/natal.svg'
import SerhsImg from '@/images-br/home-br/serhs.jpg'
import setp1img from '@/images-br/home-br/step1.svg'
import setp2img from '@/images-br/home-br/step2.svg'
import setp3img from '@/images-br/home-br/step3.svg'
import setp4img from '@/images-br/home-br/step4.svg'

import { 
  abAgency,
  pr79,
  mb45,
  about,
  imgFull,
  section,
  header,
  bg,
  comoSeraContainer,
  reverse
}  from '../assets/styles-br/como-sera.styles'
import {
  secTitle,
  secDesk,
  commonBtnBr,
  noPadding
} from "../assets/styles/layout.styles";

const ComoSera = () => {
  const { sectionContent, image} = VirtualPresencialData;
  return (
   <>
   <section css={comoSeraContainer}>
      <Container className='hero_container'>
        <h2>Como será?</h2>
        {/* <img src={GreenElementImage} /> */}
      </Container>
    </section>
    <section css={section}>
    <Container fluid>
      <Row css={reverse}>
        <Col lg={5} md={5} sm={12} css={header}>
          <div className='title_container'>
            <h2 className='title'>Natal Energy <br /> Experience</h2>
            <p>Experiências Interativas, Conteúdos de Alto Nível e Networking Estratégico</p>
            
            <Link to="/brasil/inscricoes" css={commonBtnBr}>Inscreva-se agora</Link>
          </div>
        </Col>
        <Col lg={7} md={7} sm={12} className='px-0'>
          <div className="eventSteps">
             <div className="step">
               <div className="icon">
                    <img src={setp1img} />
               </div>
                <div className="text">
                    <h4>Natal Energy Talks</h4>
                    <p>Painéis com líderes, especialistas e tomadores de <br /> decisão da indústria energética ibero-latino-americana.</p>
                </div>
             </div>
             <div className="step">
             <div className="icon">
                    <img src={setp2img} />
               </div>
                <div className="text">
                    <h4>Natal Energy Academy</h4>
                    <p>Apresentações de trabalhos, projetos e soluções <br /> inovadoras na área de energia.</p>
                </div>
             </div>
             <div className="step">
             <div className="icon">
                    <img src={setp3img} />
               </div>
                <div className="text">
                    <h4>Natal Energy MasterClasses</h4>
                    <p>Masterclasses apresentadas por grandes nomes <br /> dos setores energéticos do Brasil e de Portugal.</p>
                </div>
             </div>
             <div className="step">
             <div className="icon">
                    <img src={setp4img} />
               </div>
                <div className="text">
                    <h4>Natal Energy Expo/Business</h4>
                    <p>Exposição de cases de sucesso, novas tecnologias e <br /> oportunidades de negócios na transição energética.</p>
                </div>
             </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
</>
  );
};

export default ComoSera;
