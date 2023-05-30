/** @jsx jsx */
import React from "react";
import { LogoImage } from "@/data";
import { jsx } from "@emotion/react";

import {
  footer1,
  widget,
  aboutWidget,
  contactWidget,
  copyright,
  socialWidget,
  subscribeFrom,
} from "../assets/styles/Footer.styles";

import { commonBtn, redBg } from "../assets/styles/layout.styles";

const Footer = () => {
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
              <p>Fique por dentro das novidades do EVEx Lisboa 2023.</p>
              <form action="" method="post" css={subscribeFrom}>
                <input
                  type="email"
                  placeholder="Digite o seu email"
                  name="email"
                />
                <button css={[commonBtn, redBg]} type="submit" name="submit">
                  <span>Inscreva-se</span>
                </button>
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
            </aside>
          </div>
          <div className="col-lg-3 col-sm-2 col-md-3">
            <aside css={[widget, socialWidget]}>
              <h2 className="widget_title">Siga-nos</h2>
              <ul>
              <li>
                  <a href="#">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
              <img src={small} />
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
