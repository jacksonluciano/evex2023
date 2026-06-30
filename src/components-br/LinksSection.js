/** @jsx jsx */
import React from "react";
import { jsx } from '@emotion/react'

import {
  root,
  Balloon,
  checkAgendaBtn
}  from '../assets/styles-br/LinksSection.styles'

const LinksSection = () => {
  return (
    <section css={root}>
      <Balloon>
        <h2>Fórum CCEE no EVEx</h2>
        <p>Pela primeira vez no EVEx Brasil. Uma tarde dedicada aos desafios e oportunidades da abertura do mercado de energia elétrica, reunindo especialistas, agentes do setor e lideranças para debater a evolução do mercado livre, a segurança de mercado e a certificação e rastreabilidade como pilares da viabilização do hidrogênio verde.  </p>
        <a
          target="_blank" 
          css={checkAgendaBtn} 
          href={"https://evex.energy/brasil/agenda/"}
        >
          <p className="btnTitle">Confira a agenda</p>
        </a>
      </Balloon>
      <Balloon>
        <h2>Principais Temas da Edição</h2>
        <ul>
          <li>Diversidade Energética e Flexibilidade do Sistema</li>
          <li>Armazenamento de Energia em Baterias</li>
          <li>Mercado Livre de Energia</li>
          <li>Hidrogênio Verde e Combustíveis de Baixa Emissão</li>
          <li>ESG, Inteligência Artificial e Data Centers Sustentáveis</li>
          <li>Minerais Críticos e Estratégicos</li>
          <li>Integração Energética Brasil–Ibero-América</li>
        </ul>
        <a
          target="_blank" 
          css={checkAgendaBtn} 
          href={"https://evex.energy/brasil/agenda/"}
        >
          <p className="btnTitle">Confira a agenda</p>
        </a>
      </Balloon>
    </section>
  )
}

export default LinksSection
