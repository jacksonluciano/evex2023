/** @jsx jsx */
import React from "react";
import { PatrocinadoresData } from "@/data";
import Element8 from "@/images/elements/element-08.png"
import Element14 from "@/images/elements/element-14.svg"
import Element15 from "@/images/elements/element-15.svg"
import LogoTap from "@/images/logo_tap.svg"
import LogoEvex from "@/images/logo-evex.png" 
import Hotel from "@/images/hotel_dom_pedro.png" 
import { Col, Container, Row } from "react-bootstrap";  
import { jsx } from "@emotion/react";

import {
  abAgency,
  contact,
  element8,
  element14,
  element15,
  realization,
  contactFrom,
} from "../assets/styles/Duvidas.styles";
import {
  secDesk,
  commonBtn,
  redBg,
  inputForm,
  textarea,
} from "../assets/styles/layout.styles";

const Duvidas = () => {
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
            <Col lg={4} md={4} sm={12}>
              <h4 css={secDesk}>Promoção e Realização</h4>
              <img src={LogoEvex} />
            </Col>
            <Col lg={4} md={4} sm={12}>
              <h4 css={secDesk}>Hotel Oficial</h4>
              <img src={Hotel} />
            </Col>
            <Col lg={4} md={4} sm={12}>
              <h4 css={secDesk}>Operadora Oficial</h4>
              <img src={LogoTap} />
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
                      placeholder="Nome"
                    />
                  </div>
                  <div>
                    <input
                      css={inputForm}
                      className="input-form required"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <textarea
                      css={[inputForm, textarea]}
                      className="input-form required"
                      name="con_message"
                      id="con_message"
                      placeholder="Mensagem"
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
              <div id="contato" className="inner-div rl">
                <h2 css={secDesk}>Patrocinador e/ou Expositor!</h2>
                <p>
                  Entre em contato com o nosso time comercial e receba uma
                  proposta de patrocínio e/ou exposição, conforme as
                  necessidades específicas da sua empresa.
                </p>
                <a href="https://wa.me/+351912349476" css={commonBtn}>
                  fale conosco <i className="fa fa-whatsapp"></i>{" "}
                </a>
                {/* <button css={commonBtn}>
                  fale conosco <i className="fa fa-whatsapp"></i>{" "}
                </button>
                <button css={commonBtn}>
                  fale conosco <i className="fa fa-whatsapp"></i>{" "}
                </button> */}
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

export default Duvidas;
