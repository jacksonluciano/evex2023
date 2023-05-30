/** @jsx jsx */
import React from "react";
import { PatrocinadoresData } from "@/data";
import Element8 from "@/images/elements/element-08.png"
import Element14 from "@/images/elements/element-14.svg"
import Element15 from "@/images/elements/element-15.svg"
import { Col, Container, Row } from "react-bootstrap";
import Img from "@/images/pat.png";
import { jsx } from "@emotion/react";

import {
  abAgency,
  pr79,
  mb45,
  contact,
  element8,
  element14,
  element15,
  realization,
  contactFrom,
} from "../assets/styles/Duvidas.styles";
import {
  secTitle,
  subtitle,
  secDesk,
  commonSection,
  commonBtn,
  redBg,
  noPaddingRight,
  inputForm,
  textarea,
} from "../assets/styles/layout.styles";

const Patrocinadores = () => {
  const { sectionContent, element } = PatrocinadoresData;
  return (
    <section css={[abAgency]}>
      <img css={element14} src={Element14} />   
      <Container fluid>
        {/* <Row>
          <Col css={pr79} lg={12} md={12} sm={12}>
           <div css={about}>

           </div>
          </Col>
        </Row> */}
        <section css={realization}>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <h4 css={secDesk}>Promoção e realização</h4>
              <img src={Img} />
            </Col>
            <Col lg={6} md={6} sm={12}>
              <h4 css={secDesk}>Operadora oficial</h4>
              <img src={Img} />
            </Col>
          </Row>
        </section>

        <section css={contact}>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="inner-div">
                <h2 css={secDesk}>Dúvidas e Sugestões</h2>
                <p>
                  Entre em contato conosco e tire suas dúvidas, faça sugestões e
                  garanta sua participação nos eventos!
                </p>

                <form
                  action="#"
                  method="post"
                  id="contactForm"
                  css={contactFrom}
                >
                  <div>
                    <input
                      css={inputForm}
                      className="input-form required"
                      type="text"
                      name="f_name"
                      id="f_name"
                      placeholder="First Name"
                    />
                  </div>
                  <div>
                    <input
                      css={inputForm}
                      className="input-form required"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div>
                    <textarea
                      css={[inputForm, textarea]}
                      className="input-form required"
                      name="con_message"
                      id="con_message"
                      placeholder="Write Message"
                    ></textarea>
                  </div>
                  <button
                    css={[commonBtn, redBg]}
                    type="submit"
                    id="con_submit"
                  >
                    <span>Enviar</span>
                  </button>
                </form>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="inner-div rl">
                <h2 css={secDesk}>Patrocinador e/ou Expositor!</h2>
                <p>
                  Entre em contato com o nosso time comercial e receba uma
                  proposta de patrocínio e/ou exposição, conforme as
                  necessidades específicas da sua empresa.
                </p>
                <button css={commonBtn}>
                  fale conosco <i className="fa fa-whatsapp"></i>{" "}
                </button>
                <button css={commonBtn}>
                  fale conosco <i className="fa fa-whatsapp"></i>{" "}
                </button>
                <button css={commonBtn}>
                  fale conosco <i className="fa fa-whatsapp"></i>{" "}
                </button>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
      <img css={element8} src={Element8} />
      <img css={element15} src={Element15} />  
    </section>
  );
};

export default Patrocinadores;
