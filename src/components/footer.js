/** @jsx jsx */
import React from "react";
import { LogoImage } from "@/data";
import { jsx } from "@emotion/react";

import {
  footer1,
  widget,
  aboutWidget,
  contactWidget,
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
              <form method="POST" action="https://formsubmit.co/jackson.ides@gmail.com" encType="multipart/form-data" css={subscribeFrom}>
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
                  <a href="https://www.youtube.com/channel/UCKJjSpLyJVn_6VVqzM9RKTw?app=desktop" target="_blank">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/evexenergy" target="_blank">
                    {/* <i className="fa fa-twitter"></i> */}
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
