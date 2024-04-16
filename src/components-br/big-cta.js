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
                    <li><p>- Transição Energética Justa </p></li>
                    <li><p>- Industrialização Verde </p></li>
                    <li><p>- Descarbonização</p></li>
                    <li><p>- Segurança Energética</p></li>
                    <li><p>- Hidrogênio Verde</p></li>
                    <li><p>- Eólicas Offshore</p></li>
                    <li><p>- Mercado Livre de Energia</p></li>
                    <li><p>- Combustíveis do Futuro</p></li>
                  </ul> : 
                  <p>{text}</p>}
  
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
