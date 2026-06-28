/** @jsx jsx */
import React from "react";
import { jsx } from '@emotion/react'

import landmarksSVG from '@/images-br/2026/landmark-illustration.svg'

import {
  root,
  illustration
} from "../assets/styles-br/EventLocation.styles"

const EventLocation = () => {
  return (
    <section css={root}>
      <div className="description">
        <h2>João Pessoa: um <span>polo estratégico da nova energia</span></h2>
        <p>
          Segunda cidade mais antiga do Brasil, João Pessoa alia história, qualidade de vida e localização 
          estratégica a um ambiente cada vez mais favorável à inovação e à transição energética. Com oportunidades em energias renováveis, hidrogênio de baixo carbono, gás natural e novas tecnologias, a capital 
          paraibana consolida-se como um cenário ideal para reunir os protagonistas da nova energia.
        </p>
      </div>
      <img css={illustration} src={landmarksSVG}/>
    </section>
  )
}

export default EventLocation