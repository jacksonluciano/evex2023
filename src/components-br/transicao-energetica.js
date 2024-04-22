/** @jsx jsx */
import React, { useState } from "react";
import { TransicoesEnergeticasData, blocksTeData } from "@/data";
import Evex2024Brasil from "@/images-br/home-br/evex2024brasil.png";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { FunfactBrData } from "@/data-br";
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
  const [counter, setCounter] = useState({
    startCounter: false,
  });
  const onVisibilityChange = isVisible => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
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
            <Col lg={6} md={6} sm={6} xs={6} className='px-0'>
              <div css={dateBlock}>
                <p>
                03 e 04 de Julho
                </p>
              </div>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6} className='px-0'>
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
            {FunfactBrData.map(({ title, countNumber }, index) => (
              <Col lg={4} md={4} sm={4} xs={4}  className='px-0'>
                <div css={dateBlock} className={`greenbg-${index}`}>
                  <p>
                  {index === 2 && '+'} 
                  <VisibilitySensor
                    onChange={onVisibilityChange}
                    offset={{ top: 10 }}
                    delayedCall
                  >
                    
                    <CountUp duration={5} end={counter.startCounter ? countNumber : 0} />
                  </VisibilitySensor>
                  {` ` + title}
                  </p>
                </div>
              </Col>
              // <Col lg={4} md={4} sm={12} className='px-0'>
              //   <div css={dateBlock} className='greenbg'>
              //     <p>
              //     1 Experiências
              //     </p>
              //   </div>
              // </Col>
              // <Col lg={4} md={4} sm={12} className='px-0'>
              //   <div css={dateBlock} className='greenbg'>
              //     <p>
              //     +10 Speakers
              //     </p>
              //   </div>
              // </Col>
              ))}
          </Row>
        </div>
        {/* <img css={element05} src={element} /> */}
      </Container>
    </section>
  );
};

export default TransicaoEnergetica;
