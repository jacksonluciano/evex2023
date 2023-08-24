/** @jsx jsx */
import React from "react";
import { PatrocinadoresData } from "@/data";
import Element11 from "@/images/elements/element-11.svg"
import Element12 from "@/images/elements/element-12.svg"
import { Col, Container, Row } from "react-bootstrap";
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
           <img css={element11} src={Element11} />   
           <img css={element12} src={Element12} />
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
               </section>

               <section className='ouro'>
                <h4 css={secDesk}>Ouro</h4>
                  <ul>
                    <li><img src={Img} /></li>
                    <li><img src={Img} /></li>
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
                    <li><img src={Img} /></li>
                  </ul>
               </section>

               <section className='bronze'>
                <h4 css={secDesk}>Bronze</h4>
                  <ul>
                    <li><img src={Img} /></li>
                    <li><img src={Img} /></li>
                    <li><img src={Img} /></li>
                    <li><img src={Img} /></li>
                    <li><img src={Img} /></li>
                    <li><img src={Img} /></li>
                    <li><img src={Img} /></li>
                    <li><img src={Img} /></li>
                  </ul>
               </section> */}


              <h2 css={[secTitle, mb45]}>Apoio Institucional</h2>
              
              <section className='apoio'>
            
                  <ul>
                    <li><img src={Img16} /></li>
                    <li><img src={Img2} /></li>
                    <li><img src={Img1} /></li>
                    <li><img src={Img3} /></li>
                    {/* <li><img src={Img4} /></li> */}
                    <li><img src={Img5} /></li>
                  </ul>
                  <ul>
                    <li><img src={Img6} /></li>
                    <li><img src={Img7} /></li>
                    <li><img src={Img8} /></li>
                    <li><img src={Img9} /></li>
                    <li><img src={Img10} /></li>
                  </ul>
                  <ul>
                    <li><img src={Img11} /></li>
                    <li><img src={Img12} /></li>
                    <li><img src={Img13} /></li>
                    <li><img src={Img14} /></li>
                    <li><img src={Img15} /></li>
                    
                  </ul>
               </section>
               {/* <img css={element13} src={Element13} /> */}
           </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Patrocinadores;
