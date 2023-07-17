/** @jsx jsx */
import React from "react";
import { PatrocinadoresData } from "@/data";
import Element11 from "@/images/elements/element-11.svg"
import Element12 from "@/images/elements/element-12.svg"
import Element07 from "@/images/elements/element-07.svg"
import Caio from "@/images/caio.jpg"
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
              <p>A terceira edição do EVEx foi assim especial e histórica, principalmente, por marcar a sua chegada em ambiente físico, estreitando ainda mais os “laços energéticos” entre Brasil, Portugal e Espanha, com o apoio fundamental dos seguintes patrocinadores:</p>
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
                · Patrocínio Diamante: Galp.<br/>
· Patrocínio Platina: ADENE – Agência para a Energia e European Energy Network (EnR).<br/>
· Patrocínio Ouro: Cemig e Governo do Estado de Minas Gerais.<br/>
· Patrocínio Prata: EDP, Elétron Energy, Norte Energia e Comerc Energia.<br/>
· Patrocínio Bronze: REN, Enel Brasil e ROLIM Advogados.<br/>
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
