/** @jsx jsx */
import React from "react";
import { jsx } from '@emotion/react'

import CeoProfile from '@/images-br/2026/ceo-profile.png'

import {
  root,
  ceoProfile,
  ceoMessage
} from "../assets/styles-br/CeoMessage.styles"

const CeoMessage = () => {
  return (
    <section css={root}>
      <img css={ceoProfile} src={CeoProfile}/>
      <div css={ceoMessage}>
        <div className="title_wrapper">
          <p>Mensagem do CEO</p>
          <h2>O Ritmo da Nova Energia é <span>Ibero-Americano</span></h2>
        </div>
        <p className="message">
          Ao longo de sete edições, o EVEx evoluiu de um evento para uma plataforma de conexões estratégicas, negócios e diálogo entre os protagonistas da transição energética. Em 2026, damos mais um passo nessa trajetória, fortalecendo a integração ibero-americana e reunindo, em João Pessoa, lideranças que estão construindo o futuro da energia.
        </p>
        <div className="ceo_presentation">
          <h2>Caio César Cavalcanti</h2>
          <p>CEO e Fundador do EVEx</p>
        </div>
      </div>
    </section>
  )
}

export default CeoMessage