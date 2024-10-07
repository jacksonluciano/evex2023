/** @jsx jsx */
import React from "react";
import { BigCtaData} from "@/data";
import Element10 from '@/images/elements/element-10.svg'
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from "@emotion/react";
import { Link } from "gatsby";

import {
  abAgency,
  element10,
  dateBlock,
  blocks,
  asideBlock
} from "../assets/styles/BigCta.styles";
import {
  commonBtn,
} from "../assets/styles/layout.styles";

const Bigcta = () => {
  return (
    <section css={[abAgency]}>
      <Container fluid>
        <div css={blocks}>
          <Row>
            {BigCtaData.map(({ date, text, button }, index) => (
              <Col lg={6} md={6} sm={12}>
                <div css={dateBlock} key={index} className={index == 1 ? 'purple' : ''}>
                  <h2>{date}</h2>
                  <p>{text}</p>
                  <Link to={index == 1 ? '/lisboa/inscricoes' : '/lisboa/agenda'} css={commonBtn}>{button}</Link>
                </div>
                <div css={asideBlock}></div>
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
