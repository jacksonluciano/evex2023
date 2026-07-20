/** @jsx jsx */
import React from "react";
import { jsx } from '@emotion/react'


import sponsorDecoration from '@/images-br/2026/sponsor-decoration.svg'

import itaipuSVG from '@/images-br/2026/sponsors/itaipu.svg'
import cceeSVG from '@/images-br/2026/sponsors/ccee.svg'
import adeneSVG from '@/images-br/2026/sponsors/adene.svg'
import lnegSVG from '@/images-br/2026/sponsors/lneg.svg'
import enseSVG from '@/images-br/2026/sponsors/ense.svg'
import bancoNordesteSVG from '@/images-br/2026/sponsors/banco-nordeste.svg'
import copelSVG from '@/images-br/2026/sponsors/copel.svg'
import spicBrasilSVG from '@/images-br/2026/sponsors/spic-brasil.svg'
import bahiaGasSVG from '@/images-br/2026/sponsors/bahia-gas.svg'
import fernandaPaulaSVG from '@/images-br/2026/sponsors/fernanda-paula.svg'
import enparSVG from '@/images-br/2026/sponsors/enpar.svg'
import rolimGoulartSVG from '@/images-br/2026/sponsors/rolim-goulart.svg'
import ndfSVG from '@/images-br/2026/sponsors/ndf.svg'
import pbGasSVG from '@/images-br/2026/sponsors/pb-gas.svg'
import energisaSVG from '@/images-br/2026/sponsors/energisa.svg'
import sebraeSVG from '@/images-br/2026/sponsors/sebrae.svg'
import poloSebraeErSVG from '@/images-br/2026/sponsors/polo-sebrae-er.svg'
import evexSVG from '@/images-br/2026/sponsors/evex.svg'
import cemigSVG from '@/images-br/2026/sponsors/cemig.svg'
import eixosSVG from '@/images-br/2026/sponsors/eixos.svg'

import {
  root,
  SponsorsWrapper,
  decorationWrapper,
  decoration
} from "../assets/styles-br/SponsorSection.styles"

const SponsorSection = () => {

  return (
    <section css={root}>
      <div className="description">
        <h2>Patrocínio e Parcerias</h2>
        <p>Empresas e instituições que tornam o EVEx brasil 2026 possível</p>
      </div>
      <SponsorsWrapper>
        <div className="master">
          <p>Patrocínio master</p>
          <div className="sponsors">
            <a href="https://www.itaipu.gov.br/" target="_blank" rel="noopener noreferrer">
              <img src={itaipuSVG} alt="Itaipu" />
            </a>
            <a href="https://www.ccee.org.br/" target="_blank" rel="noopener noreferrer">
              <img src={cceeSVG} alt="CCEE" />
            </a>
          </div>
        </div>
        <div className="gold">
          <p>Patrocínio ouro</p>
          <div className="sponsors">
            <a href="https://www.adene.pt/" target="_blank" rel="noopener noreferrer">
              <img src={adeneSVG} alt="ADENE" />
            </a>
            <a href="https://www.lneg.pt/en/homepage/" target="_blank" rel="noopener noreferrer">
              <img src={lnegSVG} alt="LNEG" />
            </a>
            <a href="https://www.ense.gov.br/" target="_blank" rel="noopener noreferrer">
              <img src={enseSVG} alt="ENSE" />
            </a>
          </div>
        </div>
        <div className="silver">
          <p>Patrocínio prata</p>
          <div className="sponsors">
            <a href="https://www.bnb.gov.br/" target="_blank" rel="noopener noreferrer">
              <img src={bancoNordesteSVG} alt="Banco Nordeste" />
            </a>
            <a href="https://www.copel.com/site/" target="_blank" rel="noopener noreferrer">
              <img src={copelSVG} alt="Copel" />
            </a>
            <a href="https://www.spicbrasil.com.br/" target="_blank" rel="noopener noreferrer">
              <img src={spicBrasilSVG} alt="SPIC Brasil" />
            </a>
            <a href="https://www.bahiagas.com.br/ " target="_blank" rel="noopener noreferrer">
              <img src={bahiaGasSVG} alt="Bahia Gás" />
            </a>
            <a href="https://fernandadepaula.com/" target="_blank" rel="noopener noreferrer">
              <img src={fernandaPaulaSVG} alt="Fernanda Paula" />
            </a>
          </div>
        </div>
        <div className="bronze">
          <p>Patrocínio bronze</p>
          <div className="sponsors">
            <a href="https://enbpar.gov.br/" target="_blank" rel="noopener noreferrer">
              <img src={enparSVG} alt="Enpar" />
            </a>
            <a href="https://www.rolim.com/" target="_blank" rel="noopener noreferrer">
              <img src={rolimGoulartSVG} alt="Rolim Goulart" />
            </a>
            <a href="https://ndf.adv.br/" target="_blank" rel="noopener noreferrer">
              <img src={ndfSVG} alt="NDF" />
            </a>
            <a href="https://pbgas.com.br/" target="_blank" rel="noopener noreferrer">
              <img src={pbGasSVG} alt="PB Gás" />
            </a>
            <a href="https://www.energisa.com.br/" target="_blank" rel="noopener noreferrer">
              <img src={energisaSVG} alt="Energisa" />
            </a>
            <a href="https://sebrae.com.br/" target="_blank" rel="noopener noreferrer">
              <img src={sebraeSVG} alt="Sebrae" />
            </a>
            <a href="https://sebrae.com.br/subsites/polos-de-referencia" target="_blank" rel="noopener noreferrer">
              <img src={poloSebraeErSVG} alt="Polo Sebrae" />
            </a>
          </div>
        </div>
        <div className="org-wrapper">
          <div className="org promotion">
            <p>Promoção e realização</p>
            <img src={evexSVG}/>
          </div>
          <div className="org strategy">
            <p>Parceria estratégica</p>
            <a href="https://www.cemig.com.br/" target="_blank" rel="noopener noreferrer">
              <img src={cemigSVG} alt="Cemig" />
            </a>
          </div>
        </div>
        <div className="org midia">
          <p>Parceria de mídia</p>
          <a href="https://www.eixos.com.br/" target="_blank" rel="noopener noreferrer">
            <img src={eixosSVG} alt="Eixos" />
          </a>
        </div>
      </SponsorsWrapper>
      <div css={decorationWrapper}>
        <img css={decoration} src={sponsorDecoration}/>
      </div>
    </section>
  )
}

export default SponsorSection