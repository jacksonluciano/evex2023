/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { PatrocinadoresData } from "@/data";
import EvexContact from "@/images-br/home-br/evex-contact.svg";
import Element14 from "@/images/elements/element-14.svg";
import ParceiroRn from "@/images-br/home-br/parceiro_rn.svg";
import logoEp from "@/images-br/home-br/logo-ep.png";
import Serhs from "@/images-br/home-br/serhs.svg";
import LogoTap from "@/images/logo_tap.svg";
import LogoEvex from "@/images/logo-evex.png";
import Hotel from "@/images/hotel_dom_pedro.png";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "@reach/router";
import { jsx } from "@emotion/react";

import Img from '@/images/pat.png'
import Img1 from '@/images/apoio/abeeolica.svg'
import Img2 from '@/images/apoio/abradee2.png'
import Img3 from '@/images/apoio/ape.jpg'
import Img4 from '@/images/apoio/enova.png'
import Img5 from '@/images/apoio/ibp.jpg'
import Img6 from '@/images/apoio/ieeusp.jpg'
import Img7 from '@/images/apoio/lneg.jpg'
import Img8 from '@/images/apoio/megawhat.png'
import Img9 from '@/images/apoio/nova.png'
import Img10 from '@/images/apoio/o_instalador.png'
import Img11 from '@/images/apoio/olade.png'
import Img12 from '@/images/apoio/uc.png'
import Img13 from '@/images/apoio/WINESG.svg'
import Img14 from '@/images/apoio/mackenzie.png'
import Img15 from '@/images/apoio/fgv_energia.png'
import Img16 from '@/images/apoio/ccee.png'
import Img17 from '@/images-br/home-br/ABIHV.png'
import Img18 from '@/images-br/home-br/ABIOGAS.png'
import Img19 from "@/images-br/home-br/recell.png"
import Img20 from '@/images/apoio/abraceel.png'
import Img21 from '@/images/apoio/aner.png'
import Img22 from '@/images/apoio/creation.png'
import Img23 from '@/images-br/home-br/ndf.png'
import Img24 from '@/images/apoio/eixos.png'
import Img25 from '@/images/apoio/epe.png'
import Img26 from '@/images/apoio/ons.png'
import Img27 from '@/images/apoio/abren.png'
import Img28 from '@/images/apoio/aper.png'
import Img29 from '@/images/apoio/inte.png'

import {
  abAgency,
  contact,
  realization,
  contactFrom,
  messageBox,
  apoio,
  pat,
  formFields
} from "../assets/styles-br/Duvidas.styles";
import {
  secDesk,
  commonBtnBr,
  inputForm,
  textarea,
} from "../assets/styles/layout.styles";

const Duvidas = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const formValue = searchParams.get("form");

  const [buttonText, setButtonText] = useState("Enviar");

  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleFormSubmit = () => {
    setButtonText("Enviando...");
  };

  useEffect(() => {
    if (formValue === "contato") {
      setMessage("Obrigado por nos enviar sua sua mensagem!");
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
      <Container fluid style={{padding: 0}}>

        <section css={realization}>
          <Row>
            

            <Col lg={6} md={6} sm={6} xs={6}>
              <h4 css={secDesk}>Estado Anfitrião</h4>
              <a href="https://www.rn.gov.br/" target="_blank">
                <img src={ParceiroRn} />
              </a>
            </Col>

            <Col lg={6} md={6} sm={6} xs={6}>
              <h4 css={secDesk}>Promoção e Realização</h4>
              <img src={LogoEvex} />
            </Col>

            <Col lg={6} md={6} sm={6} xs={6}>
              <h4 css={secDesk}>Parceira de Conteúdo</h4>
              <a href="https://www.ccee.org.br/" target="_blank">
                <img src={Img16} />
              </a>
            </Col>

            <Col lg={6} md={6} sm={6} xs={6}>
              <h4 css={secDesk}>Parceira de Mídia</h4>
              <a href='#' target='_blank'>
                <img src={Img24} style={{width: '200px'}} />
              </a>           
            </Col>

            <Col lg={12} md={12} sm={12} xs={12}>
              <h4 css={secDesk}>Hotel Oficial</h4>
              <a href="https://www.serhsnatalgrandhotel.com/" target="_blank">
                <img src={Serhs} />
              </a>
            </Col>
          </Row>
        </section>

        <section css={apoio}>
          <h2>Apoio Institucional</h2>
          <ul>
            <li>
              <img src={Img25} />
            </li>
            <li>
              <img src={Img26} />
            </li>
            <li>
              <img src={Img1} />
            </li>
            <li>
              <img src={Img17} />
            </li>
           
            <li>
              <img src={Img27} />
            </li>  
          </ul>
          <ul>
          <li>
              <img src={Img28} />
            </li>  
          <li>
              <img src={Img21} />
            </li>
            <li>
              <img src={Img29} />
            </li>
            <li>
              <img src={Img7} />
            </li>
            <li>
              <img src={Img22} />
            </li>
            
          </ul>
          {/* <ul>
            <li>
              <img src={Img18} />
            </li>
            <li>
              <img src={Img19} />
            </li>
            <li>
              <img src={Img23} />
            </li>            
          </ul> */}

        </section>

        <section css={contact}>
          <Row style={{width: '100%', margin: 0}}>
            <Col id="contact-form" lg={6} md={6} sm={12} xs={12}>
              <img src={EvexContact} />
              <div className="inner-div">
                <h2 css={secDesk} className="desktop">
                  Dúvidas e Sugestões
                </h2>
                <h2 css={secDesk} className="mobile">
                  Dúvidas e<br /> Sugestões
                </h2>
                <p>
                  Entre em contato conosco para tirar dúvidas e fazer sugestões.
                  Sua mensagem será muito bem-vinda!
                </p>

                <form
                  method="POST"
                  action="https://formsubmit.co/secretaria@evex.energy"
                  encType="multipart/form-data"
                  id="contactForm"
                  css={contactFrom}
                  onSubmit={handleFormSubmit}
                >
                  <input
                    type="hidden"
                    name="_next"
                    value="https://evex.energy?form=contato"
                  />
                  <input type="hidden" name="_captcha" value="false" />

                  <Row css={formFields}> 
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

                  <Row css={formFields}>
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
                  <button css={[commonBtnBr]} type="submit" id="con_submit">
                    <span>{buttonText}</span>
                  </button>
                  {isVisible ? (
                    <div
                      css={{
                        ...messageBox,
                        opacity: isVisible ? 1 : 0,
                        transition: "opacity 0.5s ease-in-out",
                      }}
                    >
                      <p>{message}</p>
                    </div>
                  ) : null}
                </form>
              </div>
            </Col>
            <Col css={pat} lg={6} md={6} sm={12} className="px-0">
              <div
                id="contato"
                className="inner-div rl"
                style={{ maxWidth: "100%", paddingLeft: "64px" }}
              >
                <h2 css={secDesk}>
                  Patrocínio e<br /> Exposição
                </h2>
                <p style={{ maxWidth: "500px" }}>
                  Seja patrocinador(a) do EVEx Brasil 2025 e posicione sua marca
                  na vanguarda da Transição Energética Ibero-Latino-Americana.
                  Entre em contato com nosso time comercial e receba uma
                  proposta personalizada para a sua empresa.
                </p>
                <a href="https://wa.me/+351912349476" css={commonBtnBr}>
                  Fale conosco
                </a>
                {/* <button css={commonBtn}>
                  fale conosco <i className="fa fa-whatsapp"></i>{" "}
                </button>
                <button css={commonBtn}>
                  fale conosco <i className="fa fa-whatsapp"></i>{" "}
                </button> */}
              </div>
              <Row>
                <Col lg={6} xs={6} className="pr-0">
                  <div className="content" ></div>
                </Col>
                <Col lg={6} xs={6} className="px-0">
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
