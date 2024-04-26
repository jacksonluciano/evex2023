/** @jsx jsx */
import React from "react";
import { PatrocinadoresData } from "@/data";
import Element11 from "@/images-br/home-br/element_patrocinio.svg"
import Element12 from "@/images-br/home-br/element_patrocinio.svg"
import { Col, Container, Row } from "react-bootstrap";
import Img from '@/images/pat.png'
import Img1 from '@/images/apoio/abeeolica.svg'
import Img2 from '@/images/apoio/ABRADEE.png'
import Img3 from '@/images/apoio/ape.jpg'
import Img4 from '@/images/apoio/enova.png'
import Img5 from '@/images/apoio/ibp.jpg'
import Img6 from '@/images/apoio/ieeusp.jpg'
import Img7 from '@/images/apoio/lneg.jpg'
import Img8 from '@/images/apoio/megawhat.png'
import Img9 from '@/images/apoio/nova.png'
import Img10 from '@/images/apoio/o_instalador.png'
import Img11 from '@/images/apoio/olade.png'
import Img12 from '@/images/apoio/uc.png'
import Img13 from '@/images/apoio/WINESG.svg'
import Img14 from '@/images/apoio/mackenzie.png'
import Img15 from '@/images/apoio/fgv_energia.png'
import Img16 from '@/images/apoio/ccee.png'

import Pat01 from '@/images/patrocinio/adene.jpeg'
import Pat02 from '@/images/patrocinio/cemig.png'
import Pat03 from '@/images/patrocinio/edp.png'
import Pat04 from '@/images/patrocinio/galp.png'
import Pat05 from '@/images/patrocinio/minasGerais.png'
import Pat06 from '@/images/patrocinio/rolim.png'
import Pat07 from '@/images/patrocinio/MotaEngilATIV.png'
import Pat08 from '@/images/patrocinio/hegatech.png'
import Pat09 from '@/images/patrocinio/blomstein.png'
import Pat10 from '@/images/patrocinio/renewing.png'
import Pat11 from '@/images/patrocinio/ren.png'
import { jsx } from '@emotion/react'

import { 
  abAgency,
  pr79,
  mb45,
  about,
  element11,
  element12,
  titleHero,
}  from '../assets/styles-br/patrocinadores.style.js'
import {
  secTitle,
  secDesk
} from "../assets/styles/layout.styles";

const Patrocinadores = () => {
  const { sectionContent, element} = PatrocinadoresData;
  return (
    <section css={[abAgency]}>
      <Container fluid className="px-0">
        <div css={titleHero}>
            <Row className="mx-0">
            <Col lg={2} className="px-0"></Col>
            <Col lg={8} className="px-0" >
                <h2 css={[secTitle, mb45]}>Patrocinadores</h2>
            </Col>
            <Col lg={2} className="px-0"></Col>
            </Row>
        </div>
        </Container>
        <Container fluid>
        <Row>
          <Col css={pr79} lg={12} md={12} sm={12}>
           <div css={about}>
              

              {/* <section className='diamante'>
                <h4 css={secDesk}>Patrocínio Diamante</h4>
                  <ul>
                    <li><img src={Img} /></li>
                    <li><img src={Img} /></li>
                    <li><img src={Img} /></li>
                  </ul>
               </section> */}
{/* 
               <section className='platina'>
                <h4 css={secDesk}>Patrocínio Platina</h4>
                  <ul>
                    <li><img src={Img} /></li>
                    <li><img src={Img} /></li>
                    <li><img src={Img} /></li>
                  </ul>
               </section> */}

               <section className='ouro'>
                <h4 css={secDesk}>Patrocínio Ouro</h4>
                  <ul  style={{display:"flex", justifyContent:'center'}}>
                    <li><a href="https://www.adene.pt" target="_blank"><img src={Pat01} /></a></li>
                  </ul>
               </section>

               {/* <section className='prata'>
                <h4 css={secDesk}>Patrocínio Prata</h4>
                  <ul>
                    <li><a href="https://www.galp.com/corp/pt/" target="_blank"><img src={Pat04} /></a></li>
                    <li><a href="https://www.edp.pt/particulares/" target="_blank"><img src={Pat03} /></a></li>
                    <li><a href="https://www.cemig.com.br" target="_blank"><img src={Pat02} /></a></li>
                    <li><a href="https://www.mg.gov.br" target="_blank"><img src={Pat05} /></a></li>
                  </ul>
               </section> */}

               <section className='bronze'>
                <h4 css={secDesk}>Patrocínio Bronze</h4>
                  <ul>
                    {/* <li><a href="https://www.ren.pt" target="_blank"><img src={Pat11} /></a></li> */}
                    <li><a href="https://www.rolim.com" target="_blank"><img src={Pat06} /></a></li>
                    {/* <li><a href="https://www.ativ.pt" target="_blank"><img src={Pat07} /></a></li>
                    <li><a href="http://www.hega-tech.com" target="_blank"><img src={Pat08} /></a></li>
                    <li><a href="https://www.blomstein.com" target="_blank"><img src={Pat09} /></a></li>
                    <li><a href="https://renewing.pt" target="_blank"><img src={Pat10} /></a></li> */}
                  </ul>
               </section>


              {/* <h2 css={[secTitle, mb45]}>Apoio Institucional</h2> */}
              
              {/* <section className='apoio'>
            
                  <ul>
                    <li><img src={Img16} /></li>
                    <li><img src={Img2} /></li>
                    <li><img src={Img1} /></li>
                    <li><img src={Img3} /></li> */}

                    {/* <li><img src={Img4} /></li> */}
                    {/* <li><img src={Img5} /></li> */}

                  {/* </ul>
                  <ul> */}
                    
                    {/* <li><img src={Img6} /></li> */}
                    {/* <li><img src={Img7} /></li>
                     <li><img src={Img14} /></li>
                     <li><img src={Img11} /></li> */}
                    {/* <li><img src={Img8} /></li>
                    <li><img src={Img9} /></li>
                    <li><img src={Img10} /></li> */}
                  {/* </ul>
                  <ul> */}
                    
                    {/* <li><img src={Img12} /></li>
                    <li><img src={Img13} /></li> */}
                   
                    {/* <li><img src={Img15} /></li> */}
                    
                  {/* </ul>
               </section> */}
               {/* <img css={element13} src={Element13} /> */}
           </div>
          </Col>
        </Row>
      </Container>
      <img css={element11} src={Element11} />   
           <img css={element12} src={Element12} />
    </section>
  );
};

export default Patrocinadores;
