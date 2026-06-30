/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { LogoBrasil } from "@/data-br";
import { useLocation } from "@reach/router";
import Envelop from "@/images-br/home-br/envelop.svg";
import linkedinIcon from "@/images-br/2026/linkedin.svg"
import footerImg from "@/images-br/footer-img.svg"
import footerStars from "@/images-br/2026/footer-stars.svg"
import { jsx } from "@emotion/react";

import {
  footer1,
  sideColumn,
  widget,
  aboutWidget,
  contactWidget,
  socialWidget,
  subscribeFrom,
  messageBox,
  reverse,
  mobileSide,
  footerColumn,
  footerColumnCenter,
  dividerbg,
  footerStarsStyle
} from "../assets/styles-br/footer.styles";

import { commonBtnBr, redBg } from "../assets/styles/layout.styles";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const formValue = searchParams.get("form");

  const [buttonText, setButtonText] = useState("Assinar");

  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleFormSubmit = () => {
    setButtonText("Enviando...");
  };

  useEffect(() => {
    if (formValue === "newsletter") {
      setMessage("Obrigado por se inscrever em nossa newsletter!");
      setIsVisible(true);
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [formValue]);

  const { black } = LogoBrasil;
  return (
    <footer id="footer" css={footer1}>
      <div css={dividerbg}>
        {/* <img src={dividerImg} /> */}
      </div>
      <div css={footerStarsStyle}>
        <img src={footerStars} />
      </div>
      <Container fluid>
        {/* <Row css={reverse}>
          <Col xs={12} lg={6} className="px-0">
            <div css={sideColumn}>
              <h2>Contatos</h2>
            </div>
            <div css={sideColumn}>
              <h5>Caio César Cavalcanti <span>| CEO</span></h5>
              <p><img src={Envelop} /> {`caiocavalcanti@evex.energy`}</p>
            </div>
            <div css={sideColumn}>
              <h5>Secretaria</h5>
              <p><img src={Envelop} /> {`secretaria@evex.energy`}</p>
            </div>
            <div css={sideColumn}>
              <h5>Comitê Científico e Organizador</h5>
              <p><img src={Envelop} /> {`comite@evex.energy`}</p>
            </div>
          </Col>
          <Col xs={12} lg={6} className="px-0">
            <div css={sideColumn} className="news" style={{height : '50%', paddingLeft: '80px'}}>
              <aside css={[widget, aboutWidget]}>
                <h2>News</h2>
                <p>Fique por dentro das novidades do EVEx Brasil 2025.</p>
                <form
                  method="POST"
                  action="https://formsubmit.co/secretaria@evex.energy"
                  encType="multipart/form-data"
                  css={subscribeFrom}
                  onSubmit={handleFormSubmit}
                >
                  <input
                    type="hidden"
                    name="_next"
                    value="https://evex.energy?form=newsletter"
                  />
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="email"
                    placeholder="Digite o seu email"
                    name="email"
                  />
                  <button css={commonBtnBr} type="submit" name="submit">
                    <span>{buttonText}</span>
                  </button>
                  {isVisible ? (
                    <div
                      css={{
                        ...messageBox,
                        opacity: isVisible ? 1 : 0,
                        transition: "opacity 0.5s ease-in-out", // Ajuste a duração e o tipo de transição conforme necessário
                      }}
                    >
                      <p>{message}</p>
                    </div>
                  ) : null}
                </form>
              </aside>
            </div>

             <div className="row" style={{margin: 0, height: '50%'}}>
             <Col xs={6} className="px-0">
                <div css={[sideColumn, mobileSide]} style={{height : '100%', padding: '32px', alignItems: 'center'}}>
                  <aside css={[widget, socialWidget]}>
                    <h2 className="widget_title">Siga-nos</h2>
                    <ul>                    
                      <li>
                        <a
                          href="https://www.instagram.com/evexenergy/?igshid=MzRlODBiNWFlZA%3D%3D"
                          target="_blank"
                        >
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/energy-virtual-experience-evex/"
                          target="_blank"
                        >
                          <img src={linkedinIcon} />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/channel/UCKJjSpLyJVn_6VVqzM9RKTw?app=desktop"
                          target="_blank"
                        >
                          <i className="fa fa-youtube-play"></i>
                        </a>
                      </li>
                    </ul>
                   
                  </aside>
                </div>
              </Col>
              <Col xs={6} className="px-0">
              <div css={sideColumn} style={{height : '100%', padding: '32px'}}>
                <img src={black} />
                </div>
              </Col>
             </div>
          </Col>
          <div css={sideColumn}>
            <br/>
          </div>
        </Row> */}
        
        <Container>
   <Row>
            <Col xs={12} lg={4} className="px-0">
              <div className="form" css={footerColumn}>
                <h5>Fique por dentro do EVEx</h5>
                <p>Receba em primeira mão as novidades, anúncios e conteúdos exclusivos.</p>

              <form
                  method="POST"
                  action="https://formsubmit.co/secretaria@evex.energy"
                  encType="multipart/form-data"
                  css={subscribeFrom}
                  onSubmit={handleFormSubmit}
                >
                  <input
                    type="hidden"
                    name="_next"
                    value="https://evex.energy?form=newsletter"
                  />
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="email"
                    placeholder="Digite o seu email"
                    name="email"
                  />
                  <button css={commonBtnBr} type="submit" name="submit">
                    <span>{buttonText}</span>
                  </button>
                  {isVisible ? (
                    <div
                      css={{
                        ...messageBox,
                        opacity: isVisible ? 1 : 0,
                        transition: "opacity 0.5s ease-in-out", // Ajuste a duração e o tipo de transição conforme necessário
                      }}
                    >
                      <p>{message}</p>
                    </div>
                  ) : null}
                </form>
              </div>
           </Col>
           <Col xs={12} lg={4} className="px-0">
              <div css={[footerColumn, footerColumnCenter]}>
                    <h5>Contato</h5>

                    <p css={{marginBottom: 0}}>Secretaria</p>
                    <p>secretaria@evex.energy</p>

                    <p css={{marginBottom: 0}}>Comitê Científico e Organizador</p>
                    <p>comite@evex.energy</p>
              </div>
           </Col>
            <Col xs={12} lg={4} className="px-0">
            <div css={[footerColumn, footerColumnCenter]}>
                <h5>Acompanhe o Evex</h5>
                <ul>       
                     <li>
                        <a
                          href="https://www.youtube.com/channel/UCKJjSpLyJVn_6VVqzM9RKTw?app=desktop"
                          target="_blank"
                        >
                          <i className="fa fa-youtube-play"></i>
                        </a>
                      </li>             
                      <li>
                        <a
                          href="https://www.instagram.com/evexenergy/?igshid=MzRlODBiNWFlZA%3D%3D"
                          target="_blank"
                        >
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/energy-virtual-experience-evex/"
                          target="_blank"
                        >
                          <img src={linkedinIcon} />
                          {/* <i className="fa fa-linkedin-square"></i> */}
                        </a>
                      </li>
                   
                    </ul>
              </div>
           </Col>
   </Row>
          <div css={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '64px', paddingBottom: '32px'}}>
             {/* <img src={footerImg} /> */}
          </div>
        </Container>

      </Container>
    </footer>
  );
};

export default Footer;
