/** @jsx jsx */
import React from "react";
import { PatrocinadoresData } from "@/data";
import Element11 from "@/images-br/home-br/element_patrocinio.svg"
import Element12 from "@/images-br/home-br/element_patrocinio.svg"
import Element13 from "@/images-br/home-br/element_patrocinio.svg"
import { Col, Container, Row } from "react-bootstrap";
import Img from '@/images-br/home-br/petro-govbr.png'
import Img19 from '@/images-br/patrocinio/bn.png'
import Img191 from '@/images-br/patrocinio/bn_vertical.png'
import Img192 from '@/images-br/patrocinio/adene.png'
import Img193 from '@/images-br/patrocinio/cemig.png'
import Img194 from '@/images-br/patrocinio/reenergisa.png'
import Img195 from '@/images-br/patrocinio/rolim.png'
import Img196 from '@/images-br/patrocinio/sebrae.png'
import Img197 from '@/images-br/patrocinio/itaipu.png'
import Img198 from '@/images-br/patrocinio/petro-govbr.png'
import Img199 from '@/images-br/patrocinio/petro-govbr_vertical.png'
import Img200 from '@/images-br/patrocinio/enbpar.png'
import Img201 from '@/images-br/patrocinio/enbparm.png'
import Img202 from '@/images-br/patrocinio/mmegov.png'
import Img203 from '@/images-br/patrocinio/potigas.png'
import Img204 from '@/images-br/patrocinio/bahiagas.jpg'
import Img205 from '@/images-br/patrocinio/spic.png'
import Img206 from '@/images-br/patrocinio/bancone.png'
import Img207 from '@/images-br/patrocinio/mme.png'
import Img208 from '@/images-br/patrocinio/gov.png'
import Img209 from '@/images-br/patrocinio/copel.png'
import Img210 from '@/images-br/patrocinio/ndf.png'
import Img211 from '@/images-br/patrocinio/caputo.png'
import Img212 from '@/images-br/patrocinio/ejup.png'
import Img20 from '@/images-br/home-br/sebrae.svg'
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
import Pat12 from '@/images/patrocinio/reenergisa.png'
import { jsx } from '@emotion/react'

import { 
  abAgency,
  pr79,
  mb45,
  about,
  element11,
  element12,
  element13,
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
              
{/* 
              <section className='diamante'>
                <h4 css={secDesk}>Patrocínio Diamante</h4>
                  <ul>
                    <li className="desktop"><img src={Img198} /></li>
                    <li className="mobile"><img src={Img199} /></li>
                  </ul>
               </section> */}

               {/* <section className='platina'>
                <h4 css={secDesk}>Patrocínio Platina</h4>
                  <ul>
                    <li><a href="https://www.itaipu.gov.br/" target="_blank"><img src={Img197} /></a></li>
                  </ul>
               </section> */}

               <section className='ouro'>
                <h4 css={secDesk}>Patrocínio Ouro</h4>
                  <ul>
                    {/* <li className="desktop"><a target="_blank"><img src={Img19} /></a></li>
                    <li className="mobile"><a target="_blank"><img src={Img191} /></a></li> */}
                    <li><a target="_blank"><img src={Img197} /></a></li>
                    <li><a target="_blank"><img src={Img192} /></a></li>
                    <li><a target="_blank"><img style={{width:'250px', height: 'auto'}} src={Img205} /></a></li>
                  </ul>
                  {/* <ul>
                    <li className="desktop"><a target="_blank"><img src={Img200} /></a></li>
                    <li className="mobile"><a target="_blank"><img src={Img201} /></a></li>
                    <li className="mobile"><a target="_blank"><img src={Img202} /></a></li>
                  </ul> */}
               </section>

               <section className='prata'>
                <h4 css={secDesk}>Patrocínio Prata</h4>
                  <ul>
                      <li><a href="#" target="_blank"><img src={Img206} /></a></li>
                      <li><a href="https://www.reenergisa.com.br/" target="_blank"><img src={Img201} /></a></li>
                      <li><a href="#" target="_blank"><img src={Img207} /></a></li>
                      <li><a href="#" target="_blank"><img src={Img208} /></a></li>
                  </ul>
                  <ul>
                      <li><a href="https://www.reenergisa.com.br/" target="_blank"><img src={Img204} /></a></li>
                      <li><a href="#" target="_blank"><img src={Img193} /></a></li>
                  </ul>
               </section>
<br/><br/>
               <section className='bronze'>
                <h4 css={secDesk}>Patrocínio Bronze</h4>
                  <ul>
                    <li><a href="https://sebrae.com.br/sites/PortalSebrae/" target="_blank"><img src={Img196} /></a></li>
                    <li><a href="#" target="_blank"><img src={Img203} /></a></li>
                    <li><a href="#" target="_blank"><img src={Img209} /></a></li>
                  </ul>
                  {/* <ul>
                    <li><a href="https://www.cemig.com.br/" target="_blank"><img src={Pat02} /></a></li>
                    <li><a href="https://www.reenergisa.com.br/" target="_blank"><img src={Pat12} /></a></li>
                  </ul> */}
               </section>
               <br/><br/>
               <section className='bronze'>
                <h4 css={secDesk}>Patrocínio EXPO/BUSINESS</h4>
                  <ul>
                    <li><a href="https://sebrae.com.br/sites/PortalSebrae/" target="_blank"><img src={Img195} /></a></li>
                    <li><a href="#" target="_blank"><img style={{width:'230px', height: 'auto'}} src={Img210} /></a></li>
                    <li><a href="#" target="_blank"><img src={Img211} /></a></li>
                    <li><a href="#" target="_blank"><img src={Img212} /></a></li>
                  </ul>
                  {/* <ul>
                    <li><a href="https://www.cemig.com.br/" target="_blank"><img src={Pat02} /></a></li>
                    <li><a href="https://www.reenergisa.com.br/" target="_blank"><img src={Pat12} /></a></li>
                  </ul> */}
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
               
           </div>
          </Col>
        </Row>
      </Container>
      <img css={element11} src={Element11} />   
           <img css={element12} src={Element12} />
           <img css={element13} src={Element13} />
    </section>
  );
};

export default Patrocinadores;
