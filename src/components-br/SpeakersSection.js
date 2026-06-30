/** @jsx jsx */
import React from "react";
import { jsx } from '@emotion/react'

import sliderDecorationTop from '@/images-br/2026/decoration-bird.svg'
import sliderDecorationBottom from '@/images-br/2026/decoration-flower.svg'

import alexandreFernandes from '@/images-br/2026/speakers/alexandre-fernandes.png'
import alexandreRamos from '@/images-br/2026/speakers/alexandre-ramos.png'
import andrePepitone from '@/images-br/2026/speakers/andre-pepitone.png'
import caioCesars from '@/images-br/2026/speakers/caio-cesar.png'
import fernandaDePaula from '@/images-br/2026/speakers/fernanda-de-paula.png'
import fernandoMosna from '@/images-br/2026/speakers/fernando-mosna.png'
import marisetePereira from '@/images-br/2026/speakers/marisete-pereira.png'
import robsonBarbosa from '@/images-br/2026/speakers/robson-barbosa.png'
import sillaMotta from '@/images-br/2026/speakers/silla-motta.png'

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
    {isFirst && <img className="decoration" css={leftDecoration} src={sliderDecorationTop} alt="" />}
    {isLast && <img className="decoration" css={rightDecoration} src={sliderDecorationBottom} alt="" />}
    <div className="user_wrapper">
      <img css={speakerPhoto} src={item?.img} alt={item.name} />
      <div css={speakerInfo}>
        <h3>{item.name}</h3>
        <p>{item.role}</p>
        <span>{item.firm}</span>
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
  const speakers = [
    {img: andrePepitone, name: 'André Pepitone', role: 'Diretor Financeiro Executivo', firm: 'Itaipu Binacional'},
    { name: 'Maria João Rolim', role: 'Sócia', firm: 'Rolim Goulart Cardoso Advogados'},
    {img: fernandoMosna, name: 'Fernando Mosna', role: 'Fernando Mosna', firm: 'ANEEL'},
    { name: 'Teresa Ponce de Leão', role: 'Presidente', firm: 'LNEG, Portugal'},
    {img: marisetePereira, name: 'Marisete Pereira', role: 'Presidente', firm: 'ABRAGE'},
    { name: 'Ricardo Simabuku', role: 'Diretor-Presidente Interino', firm: 'CCEE'},
    {img: alexandreRamos, name: 'Alexandre Ramos', role: 'Presidente', firm: 'CEMIG'},
    {img: fernandaDePaula, name: 'Fernanda de Paula', role: 'Sócia', firm: 'Fernanda De Paula Advocacia e Consultoria Jurídica'},
    {img: alexandreFernandes, name: 'Alexandre Fernandes', role: 'Presidente', firm: 'ENSE, Portugal'},
    { name: 'Cácia Pimentel', role: 'Sócia', firm: 'Mackenzie Integridade'},
    {img: robsonBarbosa, name: 'Robson Barbosa', role: 'Secretário Executivo de Energia e Transição Energética', firm: 'Governo da Paraíba'},
    { name: 'Gustavo de Marchi', role: 'Presidente', firm: 'GASMIG'},
    {img: sillaMotta, name: 'Silla Motta', role: 'CEO', firm: 'Donna Lamparina'},
    { name: 'Euler Macêdo', role: 'Diretor', firm: 'CEAR/UFPB'},
    {img: caioCesars, name: 'Caio César Cavalcanti', role: 'CEO e Fundador', firm: 'EVEx - Energy Virtual Experience'},
    {name: 'Vital do Rêgo Filho', role: 'Ministro-Presidente', firm: 'Tribunal de Contas da União - TCU'},
  ]
  return (
    <section css={root}>
      <EvexCustomSlider
        title={<h2>Conheça Alguns dos <span>Speakers Confirmados</span></h2>}
        description={<p>Lideranças, especialistas e executivos do Brasil, Portugal, Espanha, Chile e de instituições de referência do espaço ibero-americano.</p>}
        items={speakers}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 12,
          },
          520: {
            slidesPerView: 1.3,
            
          },
          700: {
            slidesPerView: 2,
          },
          1400: {
            slidesPerView: 4,
          },
          1440: {
            slidesPerView: 5,
          }
        }}
        renderItem={(item, index) => {
          const bgColor = speakerColors[index % speakerColors.length];
          return (
            <SpeakerCard
              item={item}
              isFirst={index === 0}
              bgColor={bgColor}
              isLast={index === speakers.length - 1}
            />
        )}}
        rootCss={sliderCss}
      />
    </section>
  );
};


export default SpeakersSection
