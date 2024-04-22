/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { PatrocinadoresData } from "@/data";
import EvexContact from "@/images-br/home-br/evex-contact.svg"
import Element14 from "@/images/elements/element-14.svg"
import ParceiroRn from "@/images-br/home-br/parceiro_rn.svg"
import Serhs from "@/images-br/home-br/serhs.svg"
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
  messageBox
} from "../assets/styles-br/Duvidas.styles";
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
      {/* <img css={element14} src={Element14} />    */}
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
              <h4 css={secDesk}>Promoção e Realização</h4>
              <img src={LogoEvex} />
            </Col>
           
            <Col lg={6} md={6} sm={12}>
              <h4 css={secDesk}>Parceiro Estratégico</h4>
              <a href='https://www.rn.gov.br/' target='_blank'>
              <img src={ParceiroRn} />
              </a>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <h4 css={secDesk}>Hotel Oficial</h4>
              <a href='https://www.serhsnatalgrandhotel.com/' target='_blank'>
                <img src={Serhs} />
              </a>           
            </Col>

            <Col lg={6} md={6} sm={12}>
              <h4 css={secDesk}>Media Partner</h4>
              {/* <a href='https://www.serhsnatalgrandhotel.com/' target='_blank'>
                <img src={Serhs} />
              </a>            */}
            </Col>
          </Row>
        </section>

        <section css={contact}>
          <Row>
            <Col id="contact-form" lg={6} md={6} sm={12}>
              <img src={EvexContact} />
              <div className="inner-div" style={{'max-width': '480px'}}>
                <h2 css={secDesk} className="desktop">Dúvidas e Sugestões</h2>
                <h2 css={secDesk} className="mobile">Dúvidas e<br/> Sugestões</h2>
                <p>
                Entre em contato conosco para tirar dúvidas e fazer sugestões. Sua mensagem será muito bem-vinda!
                </p>

                <form method="POST" action="https://formsubmit.co/secretaria@evex.energy" encType="multipart/form-data"
                  id="contactForm"
                  css={contactFrom}
                  onSubmit={handleFormSubmit}
                >
                  <input type="hidden" name="_next" value="https://evex.energy?form=contato" />
                 <input type="hidden" name="_captcha" value="false" />
                  
                   <Row>
                    <Col lg={6}>
                      <input
                        css={inputForm}
                        className="input-form required"
                        type="text"
                        name="nome"
                        id="f_name"
                        placeholder="Nome"
                      />
                    </Col>
                    <Col lg={6}>
                      <input
                        css={inputForm}
                        className="input-form required"
                        type="phone"
                        name="phone"
                        id="f_phone"
                        placeholder="Telefone"
                      />
                    </Col>
                   </Row>
                 
                  <Row>
                   <Col lg={6}>
                    <input
                        css={inputForm}
                        className="input-form required"
                        type="text"
                        name="cargo"
                        id="cargo"
                        placeholder="Cargo"
                      />
                   </Col>
                   <Col lg={6}>
                    <input
                        css={inputForm}
                        className="input-form required"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                   </Col>
                  </Row>
                  <div>
                  <input
                        css={inputForm}
                        className="input-form required"
                        type="text"
                        name="empresa"
                        id="empresa"
                        placeholder="Empresa"
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
            <Col lg={6} md={6} sm={12} className="px-0">
              <div id="contato" className="inner-div rl">
                <h2 css={secDesk}>Patrocínio e<br/> Exposição</h2>        
                <p>
                Seja patrocinador(a) do EVEx Brasil 2024 e posicione sua marca na vanguarda da Transição Energética Ibero-Latino-Americana. Entre em contato com nosso time comercial e receba uma proposta personalizada para a sua empresa. 
                </p>
                <a href="https://wa.me/+351912349476" css={commonBtn}>
                  fale conosco
                </a>
                {/* <button css={commonBtn}>
                  fale conosco <i className="fa fa-whatsapp"></i>{" "}
                </button>
                <button css={commonBtn}>
                  fale conosco <i className="fa fa-whatsapp"></i>{" "}
                </button> */}
              </div>
              <Row>
                <Col lg={6} xs={6}>
                <div className="content"></div>
                </Col>
                <Col lg={6} xs={6}>
                <div className="content"></div>
                </Col>
              </Row>
              
            </Col>
          </Row>
        </section>
      </Container>
      {/* <img css={element8} src={Element8} />
      <img css={element15} src={Element15} />   */}
    </section>
  );
};

export default Duvidas;
