/** @jsx jsx */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCardOne from "@/components/service-card-one";
import { ServicePostData } from "@/data";
import { jsx } from '@emotion/react'

import {
  commonSection,
} from "../assets/styles/layout.styles";

const ServiceOne = () => {
  return (
    <section className="service_section_2" css={commonSection}>
      <Container>
        <Row>
          {ServicePostData.map((post, index) => (
            <Col lg={4} md={12} key={index}>
              <ServiceCardOne data={post} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceOne;
