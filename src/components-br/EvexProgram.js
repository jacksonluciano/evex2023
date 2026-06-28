/** @jsx jsx */
import React from "react";
import { jsx } from '@emotion/react'
import { colorsBr } from "../assets/styles/layout.styles";

import decorationBird from '@/images-br/2026/decoration-bird.svg'
import decorationFlower from '@/images-br/2026/decoration-flower.svg'
import decorationFish from '@/images-br/2026/decoration-fish.svg'
import decorationLighthouse from '@/images-br/2026/decoration-lighthouse.svg'
import decorationStraightFlower from '@/images-br/2026/decoration-straight-flower.svg'

import {
  root,
  CardComponent,
  imageWrapper,
  imgClass
} from "../assets/styles-br/EvexProgram.styles"

const EvexProgram = () => {
  const programs = [
    {
      title: 'Painéis, masterclasses e entrevistas',
      description: 'Com líderes, executivos e especialistas do Brasil, Portugal, Espanha, Chile e de instituições de referência do espaço ibero-americano.',
      color: colorsBr.evex2026BloodRed,
      img: <img src={decorationLighthouse}/>
    },
    {
      title: 'Debates estratégicos de alto nível',
      description: 'Discussões sobre transição energética, abertura do mercado, inteligência artificial, data centers, combustíveis sustentáveis, hidrogênio de baixo carbono, armazenamento de energia e novas tecnologias.',
      color: colorsBr.evex2026PinkBright,
      img: <img src={decorationStraightFlower}/>
    },
    {
      title: 'Integração entre Brasil, Europa e América Latina',
      description: 'Lideranças, empresas e instituições conectadas para fortalecer o diálogo, a cooperação e novas oportunidades de negócios entre os mercados.',
      color: colorsBr.evex2026PrimaryBlue,
    },
    {
      title: 'Networking qualificado C-Level',
      description: 'Encontros exclusivos entre executivos, autoridades e tomadores de decisão para fortalecer relacionamentos e desenvolver parcerias estratégicas.',
      color: colorsBr.evex2026DarkRed,
      img: <img src={decorationBird}/>,
      imgClass
    },
    {
      title: 'Geração de negócios e parcerias',
      description: 'Um ambiente criado para transformar conexões em oportunidades, projetos e acordos de cooperação.',
      color: colorsBr.evex2026PrimaryOrange,
      img: <img src={decorationFish}/>,
      imgClass
    },
    {
      title: 'Conteúdo com visão global',
      description: 'Uma programação alinhada às principais tendências e desafios do setor energético, conectando perspectivas nacionais e internacionais.',
      color: colorsBr.evex2026DarkGreen,
      img: <img src={decorationFlower}/>,
      imgClass
    }
  ]
  return (
    <section css={root}>
      <h2 className="title">O que espera por você no <span>EVEx Brasil</span></h2>
      <div className="cards_wrapper">
        {programs.map(item => {
          return (
            <CardComponent>
              <div css={[imageWrapper(item.color), ...(item?.imgClass ? [item.imgClass] : '')]}>
                {item?.img}
              </div>
              <div className="description">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </CardComponent>
          )
        })}
      </div>
    </section>
  )
}

export default EvexProgram