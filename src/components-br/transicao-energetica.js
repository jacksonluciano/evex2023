/** @jsx jsx */
import React from "react";
import { TransicoesEnergeticasData, blocksTeData } from "@/data";
import Evex2024Brasil from "@/images-br/home-br/evex2024brasil.png";
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from "@emotion/react";

import {
  abAgency,
  pr79,
  mb45,
  about,
  element05,
  dateBlock,
  blocks,
  asideBlock,
} from "../assets/styles-br/transicao-energetica.style";
import { secTitle, secDesk } from "../assets/styles/layout.styles";

const TransicaoEnergetica = () => {
  const { sectionContent, element } = TransicoesEnergeticasData;
  return (
    <section css={[abAgency]}>
      <Container fluid>
        <Row>
          <Col css={pr79} lg={12} md={12} sm={12}>
            <div css={about}>
              <img src={Evex2024Brasil} />
              <div className="info">
                <h2 css={[secTitle, mb45]}>
                  {`Transição Energética Justa e \n Industrialização Verde:`}
                </h2>
                <p css={secDesk}>na rota ibero-latino-americana</p>
              </div>
            </div>
          </Col>
        </Row>

        <div css={blocks}>
          <Row>
            <Col lg={6} md={6} sm={12} className='px-0'>
              <div css={dateBlock}>
                <p>
                03 e 04 de Julho
                </p>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} className='px-0'>
              <div css={dateBlock}>
                <p>
                {`SERHS Natal Grand`}
                </p>
                <p>
                {`Hotel & Resort`}
                </p>
              </div>
            </Col>
          </Row>
          
          <Row>
            <Col lg={4} md={4} sm={12} className='px-0'>
              <div css={dateBlock} className='greenbg'>
                <p>
                1 Dias
                </p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12} className='px-0'>
              <div css={dateBlock} className='greenbg'>
                <p>
                1 Experiências
                </p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12} className='px-0'>
              <div css={dateBlock} className='greenbg'>
                <p>
                +10 Speakers
                </p>
              </div>
            </Col>
        
          </Row>
        </div>
        {/* <img css={element05} src={element} /> */}
      </Container>
    </section>
  );
};

export default TransicaoEnergetica;
