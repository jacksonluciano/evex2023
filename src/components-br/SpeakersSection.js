/** @jsx jsx */
import React from "react";
import { jsx } from '@emotion/react'

import sliderDecorationTop from '@/images-br/2026/decoration-bird.svg'
import sliderDecorationBottom from '@/images-br/2026/decoration-flower.svg'
import alexandrePng from '@/images-br/2026/speaker-alexandre.png'
import caioPng from '@/images-br/2026/speaker-caio.png'


import { 
  sliderCss,
  speakerCard,
  leftDecoration,
  rightDecoration,
  speakerPhoto,
  speakerInfo,
  root
} from "../assets/styles-br/SpeakersSection.styles";

import EvexCustomSlider from "./EvexCustomSlider";
import { colorsBr } from "../assets/styles/layout.styles";

const SpeakerCard = ({ item, isFirst, isLast, bgColor }) => (
  <div css={speakerCard(bgColor)}>
    {isFirst && <img css={leftDecoration} src={sliderDecorationTop} alt="" />}
    {isLast && <img css={rightDecoration} src={sliderDecorationBottom} alt="" />}
    <div className="user_wrapper">
      <img css={speakerPhoto} src={item.img} alt={item.name} />
      <div css={speakerInfo}>
        <h3>{item.name}</h3>
        <p>{item.role}</p>
      </div>
    </div>
  </div>
);

const SpeakersSection = () => {
  const speakerColors = [
    colorsBr.evex2026PrimaryBlue, 
    colorsBr.evex2026PinkBright,
    colorsBr.evex2026PrimaryOrange,
    colorsBr.evex2026DarkRed
  ]
  const teste = [
    {img: caioPng, name: 'Caio César Cavalcanti', role: 'Ceo e fundador, EVEx - Energy virtual experience'},
    {img: alexandrePng, name: 'Alexandre Passos', role: 'Presidente do conselho de ADM, CCEE- câmara de Comercialização de energia Elétrica'},
    {img: caioPng, name: 'Caio César Cavalcanti', role: 'Ceo e fundador, EVEx - Energy virtual experience'},
    {img: alexandrePng, name: 'Alexandre Passos', role: 'Presidente do conselho de ADM, CCEE- câmara de Comercialização de energia Elétrica'},
    {img: caioPng, name: 'Caio César Cavalcanti', role: 'Ceo e fundador, EVEx - Energy virtual experience'},
    {img: alexandrePng, name: 'Alexandre Passos', role: 'Presidente do conselho de ADM, CCEE- câmara de Comercialização de energia Elétrica'}
  ]
  return (
    <section css={root}>
      <EvexCustomSlider
        title={<h2>Conheça Alguns dos <span>Speakers Confirmados</span></h2>}
        description={<p>Lideranças, especialistas e executivos do Brasil, Portugal, Espanha, Chile e de instituições de referência do espaço ibero-americano.</p>}
        items={teste}
        slidesPerView={3.7}
        spaceBetween={12}
        renderItem={(item, index) => {
          const bgColor = speakerColors[index % speakerColors.length];
          return (
            <SpeakerCard
              item={item}
              isFirst={index === 0}
              bgColor={bgColor}
              isLast={index === teste.length - 1}
            />
        )}}
        rootCss={sliderCss}
      />
    </section>
  );
};


export default SpeakersSection
