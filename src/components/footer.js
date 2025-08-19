/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { LogoImage } from "@/data";
import { useLocation } from '@reach/router';
import { jsx } from "@emotion/react";

import {
  footer1,
  widget,
  aboutWidget,
  contactWidget,
  socialWidget,
  subscribeFrom,
  messageBox,
  logoSmall
} from "../assets/styles/Footer.styles";

import { commonBtn, redBg } from "../assets/styles/layout.styles";

const Footer = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const formValue = searchParams.get('form');

  const [buttonText, setButtonText] = useState('Inscreva-se');

  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleFormSubmit = () => {
    setButtonText('Enviando...');
  };

  useEffect(() => {
    if (formValue === 'newsletter') {
      setMessage('Obrigado por se inscrever em nossa newsletter!');
      setIsVisible(true);
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [formValue]);


  const { small } = LogoImage;
  return (
    <footer css={footer1}>
     
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-6 col-md-5">
            <aside css={[widget, aboutWidget]}>
              {/* <a href="/">
                <img src={light} alt="" />
              </a> */}
              <h2>News</h2>
              <p>Fique por dentro das novidades do EVEx Lisboa 2025.</p>
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
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
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

              <p>Caio César Cavalcanti | CEO</p>
              <p>
                <a href="#">caiocavalcanti@evex.energy</a>
              </p>
            </aside>
          </div>
          <div className="col-lg-3 col-sm-2 col-md-3">
            <aside css={[widget, socialWidget]}>
              <h2 className="widget_title">Siga-nos</h2>
              <ul>
              <li>
                  <a href="https://www.youtube.com/channel/UCKJjSpLyJVn_6VVqzM9RKTw?app=desktop" target="_blank">
                    <i className="fa fa-youtube-play"></i>
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
              <img css={logoSmall} src={small} />
            </aside>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div css={copyright}>
              Lorem ipsum dolor {new Date().getFullYear()} by{" "}
              <a href="#">ipsum dolor</a>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
