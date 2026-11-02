/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import { Container, Col, Row } from "react-bootstrap";
import Logo from "@/images/2026/logo-agenda.svg"
import Pattern from "@/images/2026/pattern.svg"
import RedBalloonSVG from '@/images-br/2026/red-balloon.svg'
import {
  sectionHero,
  informations,
  seventhEditionBannerSection,
  EditionDescription,
  patternImg,
  RedBalloonWrapper,
  buyTicketLink,
  bannerStyle,
  bannerWrapper,
  buyTicketWrapper,
  birdStyle
} from "../assets/styles/agenda-hero.styles";
import OrangeElementVector01 from "@/images-br/agenda/agenda-orange-element01.svg";
import OrangeElementVector02 from "@/images-br/agenda/agenda-orange-element02.svg";
import { Link } from "gatsby";

const AgendaHero = ({ agendaSelecionada, handleClickBotao }) => {
  return (
    <section css={sectionHero}>
      <Container fluid className="px-0">
             <div css={seventhEditionBannerSection}>
                   <EditionDescription>
                     <h1 className="event_name">Agenda</h1>  
          <img src={Logo} />
                   </EditionDescription>
                 </div>

        <div css={informations}>
          <div className="data_container">
            <div className="data_info">
              <a href="#agenda"
                onClick={() => handleClickBotao(3)}
                className={agendaSelecionada === 3 && 'selected'}
              >
                <h3>03/11/2026</h3>
                <p>Terça feira</p>
              </a>
            </div>

            <div className="data_info">
              <a href="#agenda"
                onClick={() => handleClickBotao(4)}
                className={agendaSelecionada === 4 && 'selected'}
              >
                <h3>04/11/2026</h3>
                <p>Quarta feira</p>
              </a>
            </div>
          </div>

          {/* <p>Sujeita à alteração até o dia 28/06/2024</p> */}
        </div>
      </Container>
      <img src={Pattern} css={patternImg}/>
    </section>
  );
};

export default AgendaHero;
