/** @jsx jsx */
import React from "react";
import { BigCtaBrData} from "@/data-br";
import Element10 from '@/images-br/home-br/bg-speakers.jpg'
import ElementPink from '@/images-br/home-br/pink-element.svg'
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from "@emotion/react";
import { Link } from "gatsby";

import {
  abAgency,
  element10,
  dateBlock,
  blocks,
  asideBlock,
  elementPink
} from "../assets/styles-br/big-cta.styles";
import {
  commonBtn,
} from "../assets/styles/layout.styles";

const Bigcta = () => {
  return (
    <section css={[abAgency]}>
      <img css={elementPink} src={ElementPink} />
      <Container fluid>
        <div css={blocks}>
          <Row>
            {BigCtaBrData.map(({ date, text, button, link }, index) => (
              <Col lg={4} md={4} sm={12}>
                {/* <div css={dateBlock} key={index} className={index == 1 ? 'purple' : ''}> */}
                <div css={dateBlock} key={index}>
                  <h2>{date}</h2>
                  {index == 1 ? 
                  <ul>
                    <li><p><span></span> Transição Energética</p></li>
                    <li><p><span></span> Ação Climática </p></li>
                    <li><p><span></span> Descarbonização</p></li>
                    <li><p><span></span> Hidrogênio Verde</p></li>
                    <li><p><span></span> Eólicas Offshore</p></li>
                    <li><p><span></span> Combustíveis do Futuro</p></li>
                    <li><p><span></span> Mercado Livre de Energia</p></li>
                    <li><p><span></span> Novas Tecnologias e Soluções</p></li>
                  </ul> : 
                  <p className="paragraf">{text}</p>}
  
                  {/* <Link to={index == 1 ? '/inscricoes' : '/agenda'} css={commonBtn}>{button}</Link> */}
                  <Link to={link} css={commonBtn}>{button}</Link>
                </div>
                {/* <div css={asideBlock}></div> */}
              </Col>
            ))}
          </Row>
        </div>
      </Container>
      <img css={element10} src={Element10} />
    </section>
  );
};

export default Bigcta;
