/** @jsx jsx */
import React from "react";
import { PatrocinadoresData } from "@/data";
import Element11 from "@/images/elements/element-11.svg"
import Element12 from "@/images/elements/element-12.svg"
import Element07 from "@/images/elements/element-07.svg"
import Caio from "@/images/caio_.jpg"
import { Col, Container, Row } from "react-bootstrap";
import Img from '@/images/pat.png'
import { jsx } from '@emotion/react'

import { 
  abAgency,
  pr79,
  mb45,
  about,
  patrocinadores,
  element12,
  caio,
  element7
}  from '../assets/styles/PatrocinadoresEvento.styles'
import {
  secTitle,
  subtitle,
  secDesk,
  commonSection,
  commonBtn,
  redBg,
  noPaddingRight
} from "../assets/styles/layout.styles";

const PatrocinadoresEvento = () => {
  const { sectionContent, element} = PatrocinadoresData;
  return (
    <section css={[abAgency]}>
      <Container fluid>
        <Row>
          <Col css={pr79} lg={12} md={12} sm={12}>
           <div css={about}>
              <h2 css={[secTitle, mb45]}>Patrocinadores</h2>
              <p>Os eventos do EVEx 2023 foram realizados com o patrocínio de grandes empresas e entidades atuantes no eixo ibero-latino-americano da energia, para as quais tecemos agradecimentos especiais: </p>
           <img css={element7} src={Element07} />   
              {/* <section className='diamante'>
                <h4 css={secDesk}>Diamante</h4>
                  <ul>
                    <li><img src={Img} /></li>
                  </ul>
               </section>

               <section className='platina'>
                <h4 css={secDesk}>Platina</h4>
                  <ul>
                    <li><img src={Img} /></li>
                    <li><img src={Img} /></li>
                  </ul>
               </section>

               <section className='ouro'>
                <h4 css={secDesk}>Ouro</h4>
                  <ul>
                    <li><img src={Img} /></li>
                    <li><img src={Img} /></li>
                  </ul>
               </section>

               <section className='prata'>
                <h4 css={secDesk}>Prata</h4>
                  <ul>
                    <li><img src={Img} /></li>
                    <li><img src={Img} /></li>
                    <li><img src={Img} /></li>
                    <li><img src={Img} /></li>
                  </ul>
               </section>

               <section className='bronze'>
                <h4 css={secDesk}>Bronze</h4>
                  <ul>
                    <li><img src={Img} /></li>
                    <li><img src={Img} /></li>
                    <li><img src={Img} /></li>
                  </ul>
               </section> */}

               <p css={patrocinadores} className="text-center">
                · Patrocínio Ouro: ADENE – Agência para a Energia;<br/>
                · Patrocínio Prata: EDP, Galp, CEMIG e Governo do Estado de Minas Gerais;<br/>
                · Patrocínio Bronze: REN, Mota-Engil Renewing, Mota-Engil ATIV, HEGATECH,<br/> BLOMNSTEIN e Rolim Goulart Cardoso Advogados.<br/>
               </p>

           </div>
          </Col>
        </Row>
      </Container>
      <div css={caio}>
        <img src={Caio} />
      </div>
    </section>
  );
};

export default PatrocinadoresEvento;
