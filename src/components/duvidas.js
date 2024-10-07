/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { PatrocinadoresData } from "@/data";
import Element8 from "@/images/elements/element-08.png"
import Element14 from "@/images/elements/element-14.svg"
import Element15 from "@/images/elements/element-15.svg"
import LogoEixos from "@/images/apoio/eixos.png"
import LogoTap from "@/images/logo_tap.svg"
import LogoEvex from "@/images/logo-evex.png" 
import Hotel from "@/images/hotel_dom_pedro.png" 
import { Col, Container, Row } from "react-bootstrap";  
import { useLocation } from '@reach/router';
import { jsx } from "@emotion/react";

import {
  abAgency,
  contact,
  element8,
  element14,
  element15,
  realization,
  contactFrom,
  messageBox,
  eplogo,
  RowMargin
} from "../assets/styles/Duvidas.styles";
import {
  secDesk,
  commonBtn,
  redBg,
  inputForm,
  textarea,
} from "../assets/styles/layout.styles";

const Duvidas = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const formValue = searchParams.get('form');

  const [buttonText, setButtonText] = useState('Enviar');

  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleFormSubmit = () => {
    setButtonText('Enviando...');
  };

  useEffect(() => {
    if (formValue === 'contato') {
      setMessage('Obrigado por nos enviar sua sua mensagem!');
      setIsVisible(true);
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [formValue]);


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
          <Row css={RowMargin}>
            <Col lg={6} md={6} sm={12}>
              <h4 css={secDesk}>Promoção e Realização</h4>
              <img src={LogoEvex} />
            </Col>
            <Col lg={6} md={6} sm={12}>
              <h4 css={secDesk}>Parceira de Mídia</h4>
              <img src={LogoEixos} css={eplogo} />
            </Col>
          </Row>
          <Row>
          {/* <Col lg={6} md={6} sm={12}>
              <h4 css={secDesk}>Hotel Oficial</h4>
              <a href='https://www.dompedrolisboa.com/m/' target='_blank'>
                <img src={Hotel} />
              </a>
              
            </Col> */}
            <Col lg={12} md={12} sm={12}>
              <h4 css={secDesk}>Operadora Oficial</h4>
              <a href='https://www.flytap.com/pt-br/' target='_blank'>
              <img src={LogoTap} />
              </a>
            </Col>
          </Row>
        </section>

        <section css={contact}>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="inner-div">
                <h2 css={secDesk}>Dúvidas e Sugestões</h2>
                <p>
                Entre em contato com a gente para tirar dúvidas, fazer sugestões e garantir a sua participação no EVEx Online e no EVEx Lisboa 2024. Sua mensagem será muito bem-vinda!
                </p>

                <form method="POST" action="https://formsubmit.co/secretaria@evex.energy" encType="multipart/form-data"
                  id="contactForm"
                  css={contactFrom}
                  onSubmit={handleFormSubmit}
                >
                  <input type="hidden" name="_next" value="https://evex.energy?form=contato" />
                 <input type="hidden" name="_captcha" value="false" />
                  <div>
                    <input
                      css={inputForm}
                      className="input-form required"
                      type="text"
                      name="nome"
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
                      name="mensagem"
                      id="con_message"
                      placeholder="Mensagem"
                    ></textarea>
                  </div>
                  <button
                    css={[commonBtn]}
                    type="submit"
                    id="con_submit"
                  >
                    <span>{buttonText}</span>
                  </button>
                  {isVisible ?  
                <div css={{...messageBox,
                  opacity: isVisible ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out',
                }}>
              <p>{message}</p>
            </div> : null}
                </form>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div id="contato" className="inner-div rl">
                <h2 css={secDesk}>Patrocínio e Exposição</h2>
                <p>
                Seja patrocinador do EVEx 2024 e posicione a sua marca na vanguarda da Transição Energética Ibero-Latino-Americana! Entre em contato com o nosso time comercial e receba uma proposta de patrocínio personalizada.
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
