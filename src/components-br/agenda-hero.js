/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import { Container, Col, Row } from "react-bootstrap";
import AgendaBanner from "@/images-br/2026/agenda-banner.svg"
import AgendaBird from "@/images-br/2026/agenda-bird.svg"
import RedBalloonSVG from '@/images-br/2026/red-balloon.svg'
import {
  sectionHero,
  informations,
  seventhEditionBannerSection,
  EditionDescription,
  redBallon,
  RedBalloonWrapper,
  buyTicketLink,
  bannerStyle,
  bannerWrapper,
  buyTicketWrapper,
  birdStyle
} from "../assets/styles-br/agenda-hero.styles";
import OrangeElementVector01 from "@/images-br/agenda/agenda-orange-element01.svg";
import OrangeElementVector02 from "@/images-br/agenda/agenda-orange-element02.svg";
import { Link } from "gatsby";

const AgendaHero = ({ agendaSelecionada, handleClickBotao }) => {
  return (
    <section css={sectionHero}>
      <Container fluid className="px-0">
          {/* <img src={BgOrange} css={imgOrange} /> */}
             <div css={seventhEditionBannerSection}>
                   <EditionDescription>
                    <img css={birdStyle} src={AgendaBird}/>
                     <h1 className="event_name">Agenda do Evento</h1>
                      <p className="event_description">Pulsar Ibero-Americano: O Ritmo da Nova Energia</p>
                     <RedBalloonWrapper>
                       <img css={redBallon} src={RedBalloonSVG} />
                     </RedBalloonWrapper>             
                   </EditionDescription>
                   <div css={bannerWrapper}>
                     <img css={bannerStyle} src={AgendaBanner}/>
                   </div>
                 </div>

        <div css={informations}>
          {/* <img src={OrangeElementVector01} className="element01" />
          <img src={OrangeElementVector02} className="element02" /> */}
          <div className="data_container">
            <div className="data_info">
              <a href="#agenda"
                onClick={() => handleClickBotao(3)}
                className={agendaSelecionada === 3 && 'selected'}
              >
                <h3>Dia 1</h3>
                <p>1 de Julho - Quarta feira</p>
              </a>
            </div>

            <div className="data_info">
              <a href="#agenda"
                onClick={() => handleClickBotao(4)}
                className={agendaSelecionada === 4 && 'selected'}
              >
                <h3>Dia 2</h3>
                <p>2 de Julho - Quinta feira</p>
              </a>
            </div>
          </div>

          {/* <p>Sujeita à alteração até o dia 28/06/2024</p> */}
        </div>
      </Container>
    </section>
  );
};

export default AgendaHero;
