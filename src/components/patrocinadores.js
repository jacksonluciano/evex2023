/** @jsx jsx */
import React from "react";
import { PatrocinadoresData } from "@/data";
import Element11 from "@/images/elements/element-11.svg"
import Element12 from "@/images/elements/element-12.svg"
import { Col, Container, Row } from "react-bootstrap";
import Img from '@/images/pat.png'
import Img1 from '@/images/apoio/abeeolica.svg'
import Img2 from '@/images/apoio/ABRADEE.png'
import Img3 from '@/images/apoio/ape.jpg'
import Img4 from '@/images/apoio/enova.png'
import Img5 from '@/images/apoio/ibp.jpg'
import Img6 from '@/images/apoio/ieeusp.jpg'
import Img7 from '@/images/2026/patrocinio/lneg.svg'
import Img8 from '@/images/apoio/megawhat.png'
import Img9 from '@/images/apoio/nova.png'
import Img10 from '@/images/apoio/o_instalador.png'
import Img11 from '@/images/apoio/olade.png'
import Img12 from '@/images/apoio/uc.png'
import Img13 from '@/images/apoio/WINESG.svg'
import Img14 from '@/images/apoio/mackenzie.png'
import Img15 from '@/images/apoio/fgv_energia.png'
import Img16 from '@/images/2026/patrocinio/ccee.svg'
import Img17 from '@/images/apoio/abraceel.png'
import Img18 from '@/images/apoio/ABIOGAS.png'
import Img19 from '@/images/apoio/ABIHV.png'
import Img20 from '@/images/apoio/epe.png'
import Img21 from '@/images/apoio/ons.png'
import Img22 from '@/images/apoio/Firjan.svg'
import Img23 from '@/images/apoio/ONIP.svg'
import Img24 from '@/images/apoio/abegás.svg'
import Img25 from '@/images/apoio/Ordem dos Engenheiros.svg'

import Img193 from '@/images/2026/patrocinio/cemig.svg'
import Img201 from '@/images-br/patrocinio/enbparm.png'
import Img202 from '@/images-br/patrocinio/mmegov.png'
import Img203 from '@/images-br/patrocinio/potigas.png'
import Img204 from '@/images-br/patrocinio/bahiagas.jpg'
import Img205 from '@/images-br/patrocinio/spic.png'
import Img206 from '@/images-br/patrocinio/bancone.png'
import Img207 from '@/images-br/patrocinio/mme.png'
import Img208 from '@/images-br/patrocinio/gov.png'
import Img209 from '@/images/patrocinio/copel.svg'
import Img210 from '@/images-br/patrocinio/ndf.png'
import Img211 from '@/images-br/patrocinio/caputo.png'
import Img212 from '@/images-br/patrocinio/ejup.png'
import Img213 from '@/images/2026/patrocinio/ense.svg'
import Img214 from '@/images/patrocinio/mobi.e.svg'

import Pat01 from '@/images/2026/patrocinio/adene.svg'
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
import Pat12 from '@/images/2026/patrocinio/itaipu.svg'
import Pat13 from '@/images/patrocinio/enbpar.png'
import Pat14 from '@/images/patrocinio/demarest.svg'
import Pat15 from '@/images/patrocinio/copel.png'
import LogosPrata from '@/images/2026/patrocinio/logos-prata.svg'
import LogosBronze from '@/images/2026/patrocinio/logos-bronze.svg'
import Master from '@/images/2026/patrocinio/master.svg'
import Diamante from '@/images/2026/patrocinio/diamante.svg'
import Ouro from '@/images/2026/patrocinio/ouro.svg'
import Prata from '@/images/2026/patrocinio/prata.svg'
import Bronze from '@/images/2026/patrocinio/bronze.svg'
import Media from '@/images/2026/patrocinio/media.svg'
import Tap from '@/images/2026/patrocinio/tap.svg'
import Floral from '@/images/2026/floral.svg'
import Eixos from '@/images/2026/patrocinio/eixos.svg'
import Evex from '@/images/2026/patrocinio/evex.svg'
import Operadora from '@/images/2026/patrocinio/op.svg'
import Promocao from '@/images/2026/patrocinio/promocao.svg'
import { jsx } from '@emotion/react'

import { 
  abAgency,
  pr79,
  mb45,
  about,
  element11,
  element12,
}  from '../assets/styles/Patrocinadores.styles'
import {
  secTitle,
  secDesk
} from "../assets/styles/layout.styles";

const Patrocinadores = () => {
  const { sectionContent, element} = PatrocinadoresData;
  return (
    <section css={[abAgency]}>
      <Container fluid>
        <Row>
          <Col css={pr79} lg={12} md={12} sm={12}>
           <div css={about}>
              {/* <h2 css={[secTitle, mb45]}>Patrocinadores</h2> */}
              {/* <section className='diamante'>
                <h4 css={secDesk}>Diamante</h4>
                  <ul>
                    <li><img src={Img} /></li>
                    <li><img src={Img} /></li>
                    <li><img src={Img} /></li>
                  </ul>
               </section>

               <section className='platina'>
                <h4 css={secDesk}>Platina</h4>
                  <ul>
                    <li><img src={Img} /></li>
                    <li><img src={Img} /></li>
                    <li><img src={Img} /></li>
                  </ul>
               </section> */}

                {/* <section className='platina'>
                <h4 css={secDesk}><img src={LabelImg} /></h4>
                  <ul style={{display:"flex", justifyContent:'center', gap: '24px', marginBottom: '24px'}}>
                    <li><img style={{height:'60px'}} src={Img7} /></li>
                  </ul>
               </section> */}

               <section className='platina'>
                <h4 css={secDesk}><img src={Master} /></h4>
                  <ul  style={{display:"flex", justifyContent:'center', gap: '32px'}}>
                    <li><a href="https://www.adene.pt" target="_blank"><img src={Img16} /></a></li>
                    <li><a href="https://www.itaipu.gov.br/" target="_blank"><img src={Pat12} /></a></li>
                  </ul>
                  {/* <ul  style={{display:"flex", justifyContent:'center', gap: '24px'}}>
                    <li><a href="#" target="_blank"><img src={Pat13} /></a></li>
                  </ul> */}
               </section>

               <section className='diamante'>
                 <h4 css={secDesk}><img src={Diamante} /></h4>
                  {/* <ul>
                    <li><a href="https://www.galp.com/corp/pt/" target="_blank"><img src={Pat04} /></a></li>
                    <li><a href="https://www.edp.pt/particulares/" target="_blank"><img src={Pat03} /></a></li>
                    <li><a href="https://www.cemig.com.br" target="_blank"><img src={Pat02} /></a></li>
                    <li><a href="https://www.mg.gov.br" target="_blank"><img src={Pat05} /></a></li>
                  </ul>
                  <ul>
                    <li><a href="https://www.mg.gov.br" target="_blank"><img src={Pat15} /></a></li>
                  </ul> */}

                   {/* <ul>
                        <li><a href="https://www.reenergisa.com.br/" target="_blank"><img src={Img201} /></a></li>
                        <li><a href="#" target="_blank"><img src={Img207} /></a></li>
                        <li><a href="#" target="_blank"><img src={Img208} /></a></li>
                        <li><a href="#" target="_blank"><img src={Img213} /></a></li>
                    </ul> */}
                    <ul style={{display:"flex", justifyContent:'center', gap: '32px'}}>
                        {/* <li><a href="https://www.reenergisa.com.br/" target="_blank"><img src={Img204} /></a></li> */}
                        <li><a href="#" target="_blank"><img src={Img193} /></a></li>
                    </ul>
               </section>

               <section className='ouro'>
                <h4 css={secDesk}><img src={Ouro} /></h4>
                  <ul style={{display:"flex", justifyContent:'center', gap: '48px'}}>
                    {/* <li><a href="https://www.rolim.com" target="_blank"><img src={Pat06} /></a></li> */}
                    <li><a href="#" target="_blank"><img src={Pat01} /></a></li>
                    <li><a href="#" target="_blank"><img src={Img7} /></a></li>
                    <li><a href="#" target="_blank"><img src={Img213} /></a></li>
                  </ul>
               </section>

                <section className='prata'>
                <h4 css={secDesk}><img src={Prata} /></h4>
                  <ul style={{display:"flex", justifyContent:'center', gap: '32px'}}>
                    <li><a href="#" target="_blank"><img src={LogosPrata} /></a></li>
                  </ul>
                  {/* <ul>
                    <li><a href="#" target="_blank"><img src={Img204} /></a></li>
                    <li><a href="#" target="_blank"><img src={Img202} /></a></li>
                  </ul> */}
               </section>

               <section className='bronze'>
                <h4 css={secDesk}><img src={Bronze} /></h4>
                  <ul style={{display:"flex", justifyContent:'center', gap: '32px'}}>
                    <li><a href="#" target="_blank"><img src={LogosBronze} /></a></li>
                  </ul>
                  {/* <ul>
                    <li><a href="#" target="_blank"><img src={Img204} /></a></li>
                    <li><a href="#" target="_blank"><img src={Img202} /></a></li>
                  </ul> */}
               </section>

               <section  style={{width: '100%', maxWidth: '512px', marginBottom:'48px'}}>
                <img src={Floral} />
               </section>

               <section className='media-partner'>
                <h4 css={secDesk}><img src={Media} /></h4>
                  <ul style={{display:"flex", justifyContent:'center', gap: '32px'}}>
                    <li><a href="#" target="_blank"><img src={Eixos} /></a></li>
                  </ul>
               </section>

               <section className='operadora'>
                <h4 css={secDesk}><img src={Operadora} /></h4>
                  <ul style={{display:"flex", justifyContent:'center', gap: '32px'}}>
                    <li><a href="#" target="_blank"><img src={Tap} /></a></li>
                  </ul>
               </section>

               <section className='promocao'>
                <h4 css={secDesk}><img src={Promocao} /></h4>
                  <ul style={{display:"flex", justifyContent:'center', gap: '32px'}}>
                    <li><a href="#" target="_blank"><img src={Evex} /></a></li>
                  </ul>
               </section>


              {/* <h2 css={[secTitle, mb45]}>Apoio Institucional</h2> */}
              
              {/* <section className='apoio'>
               <h4 css={secDesk}><img src={LabelImg} /></h4>
                  <ul>
                    <li><img src={Img204} /></li>
                    <li><img src={Img20} /></li>
                  </ul>
                  <ul>
                    <li><img src={Img23} /></li>
                    <li><img src={Img24} /></li>
                    <li><img src={Img25} /></li>
                    <li><img src={Img19} /></li>
                  </ul>
                  <ul>
                    <li><img src={Img11} /></li>
                    <li><img src={Img12} /></li>
                    
                    <li><img src={Img10} /></li>
                    <li><img src={Img14} /></li>
                    <li><img src={Img15} /></li>
                    
                  </ul>
               </section> */}
               {/* <img css={element13} src={Element13} /> */}
           </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Patrocinadores;
