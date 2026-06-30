/** @jsx jsx */
import React from "react";
import { jsx } from '@emotion/react'

import RedBalloonSVG from '@/images-br/2026/red-balloon.svg'
import BannerFrame from '@/images-br/2026/seventh-edition-banner-frame.svg'

import { 
  seventhEditionBannerSection,
  EditionDescription,
  redBallon,
  RedBalloonWrapper,
  buyTicketLink,
  bannerStyle,
  bannerWrapper,
  buyTicketWrapper
}  from '../assets/styles-br/SeventhEditionHero.styles'


const SeventhEditionHero = () => {

  return (
   <section css={seventhEditionBannerSection}>
      <EditionDescription>
        <p className="event_edition">7ª edição do EVEx · 3ª edição do EVEx Brasil</p>
        <h1 className="event_name">Pulsar Ibero-Americano: O Ritmo da Nova Energia</h1>
        <p className="event_description">O principal encontro ibero-americano da transição energética</p>
        <RedBalloonWrapper>
          <img css={redBallon} src={RedBalloonSVG} />
        </RedBalloonWrapper>
        <div css={buyTicketWrapper}>
          <a
            target="_blank" 
            css={buyTicketLink} 
            href={"https://www.sympla.com.br/evento/evex-brasil-2025-natal-energy-experience/2973088"}
          >
            <p>Garanta sua participação</p>
          </a>
        </div>
        
      </EditionDescription>
      <div css={bannerWrapper}>
        <img css={bannerStyle} src={BannerFrame}/>
      </div>
    </section>
  );
};

export default SeventhEditionHero;
