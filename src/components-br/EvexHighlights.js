/** @jsx jsx */
import React from "react";
import { jsx } from '@emotion/react'

import pinkStart from '@/images-br/2026/highlight-star-pink.svg'
import blueStart from '@/images-br/2026/highlight-star-blue.svg'
import darkGreenStart from '@/images-br/2026/highlight-star-dark-green.svg'
import greenStart from '@/images-br/2026/highlight-star-green.svg'
import redStart from '@/images-br/2026/highlight-star-red.svg'
import violetStart from '@/images-br/2026/highlight-star-violet.svg'

import {
  root,
  highlights,
  highlight
}  from '../assets/styles-br/EvexHighlights.styles'

const EvexHighlights = () => {
  return (
    <section css={root}>
      <div className="title_wrapper">
        <h2>Destaques do <span>EVEx Brasil 2026</span></h2> 
        <p>Conheça algumas das experiências exclusivas preparadas para esta edição.</p>
      </div>
      <div css={highlights}>
        {[
          {label: 'Fórum CCEE', img: pinkStart}, 
          {label: 'Experiência Cultural Paraibana', img: blueStart}, 
          {label: 'Lounge dos Patrocinadores', img: violetStart},
          {label: 'Almoço & Coquetel de Networking', img: darkGreenStart},
          {label: 'Premiação EVEx Brasil 2026', img: redStart},
          {label: 'Ativações Premium', img: greenStart}
        ].map(item => {
          return (
            <div css={highlight}>
              <img src={item.img}/>
              <h2>{item.label}</h2>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default EvexHighlights
