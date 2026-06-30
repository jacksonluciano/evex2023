/** @jsx jsx */
import React from "react";
import { jsx } from '@emotion/react'

import heartSVG from '@/images-br/2026/heart-and-birds-ilustration.svg'

import {
  root,
  illustration,
  buyTicketLink,
  elementWrapper
} from "../assets/styles-br/GetTicketSection.styles"

const GetTicketSection = () => {
  return (
    <section css={root}>
      <div className="content_wrapper">
        <div className="content">
          <h2>Faça Parte do <span>Pulsar Ibero-Americano</span></h2>
          <p className="description">Conecte-se aos protagonistas da nova energia e viva a experiência EVEx Brasil 2026, nos dias 01 e 02 de Julho, no Paço dos Leões, em João Pessoa (PB).</p>
          <div css={elementWrapper}>
            <a
              target="_blank" 
              css={buyTicketLink} 
              href={"https://www.sympla.com.br/evento/evex-brasil-2025-natal-energy-experience/2973088"}
            >
              <p>Garanta sua participação</p>
            </a>
          </div>
        
        </div>
        <div css={elementWrapper}>
          <img css={illustration} src={heartSVG}/>
        </div>
      </div>
    </section>
  )
}

export default GetTicketSection