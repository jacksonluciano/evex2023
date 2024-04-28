/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { LogoBrasil } from "@/data-br";
import { useLocation } from "@reach/router";
import Envelop from "@/images-br/home-br/envelop.svg";
import linkedinIcon from "@/images-br/linkedin.svg"
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
  mobileSide
} from "../assets/styles-br/footer.styles";

import { commonBtnBr, redBg } from "../assets/styles/layout.styles";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const formValue = searchParams.get("form");

  const [buttonText, setButtonText] = useState("Inscreva-se");

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
      <Container fluid>
        <Row css={reverse}>
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
            <div css={sideColumn} style={{height : '50%', paddingLeft: '80px'}}>
              <aside css={[widget, aboutWidget]}>
                <h2>News</h2>
                <p>Fique por dentro das novidades do EVEx Brasil 2024.</p>
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
        </Row>
        
        <div className="row">
          {/* <div className="col-lg-5 col-sm-6 col-md-5">
            <aside css={[widget, aboutWidget]}>
              <h2>News</h2>
              <p>Fique por dentro das novidades do EVEx Lisboa 2023.</p>
              <form 
                method="POST" 
                action="https://formsubmit.co/secretaria@evex.energy" 
                encType="multipart/form-data" 
                css={subscribeFrom}
                onSubmit={handleFormSubmit}
              >
              <input type="hidden" name="_next" value="https://evex.energy?form=newsletter" />
              <input type="hidden" name="_captcha" value="false" />
                <input
                  type="email"
                  placeholder="Digite o seu email"
                  name="email"
                />
                <button css={[commonBtn, redBg]} type="submit" name="submit">
                  <span>{buttonText}</span>
                </button>
                {isVisible ?  
                <div css={{...messageBox,
                  opacity: isVisible ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out', // Ajuste a duração e o tipo de transição conforme necessário
                }}>
              <p>{message}</p>
            </div> : null}
              </form>
            </aside>
          </div> */}
          {/* <div className="col-lg-4 col-sm-4 col-md-4">
            <aside css={[widget, contactWidget]}>
              <h2 className="widget_title">Contato</h2>
              <p>
                Secretaria
              </p>
              <p>
                <a href="#">secretaria@evex.energy</a>
              </p>
              <p>Comitê Científico e Organizador</p>
              <p>
                <a href="#">comite@evex.energy</a>
              </p>
            </aside>
          </div> */}
          {/* <div className="col-lg-3 col-sm-2 col-md-3">
            <aside css={[widget, socialWidget]}>
              <h2 className="widget_title">Siga-nos</h2>
              <ul>
              <li>
                  <a href="https://www.youtube.com/channel/UCKJjSpLyJVn_6VVqzM9RKTw?app=desktop" target="_blank">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/evexenergy" target="_blank">
                    <svg width="22px" viewBox="0 0 24 24" aria-label="Twitter" role="img" class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-16y2uox r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/evexenergy/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/energy-virtual-experience-evex/" target="_blank">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
              <img src={small} />
            </aside>
          </div> */}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
