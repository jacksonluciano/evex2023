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
            <img src={itaipuSVG}/>
            <img src={cceeSVG}/>
          </div>
        </div>
        <div className="gold">
          <p>Patrocínio ouro</p>
          <div className="sponsors">
            <img src={adeneSVG}/>
            <img src={lnegSVG}/>
            <img src={enseSVG}/>
          </div>
        </div>
        <div className="silver">
          <p>Patrocínio prata</p>
          <div className="sponsors">
            <img src={bancoNordesteSVG}/>
            <img src={copelSVG}/>
            <img src={spicBrasilSVG}/>
            <img src={bahiaGasSVG}/>
            <img src={fernandaPaulaSVG}/>
          </div>
        </div>
        <div className="bronze">
          <p>Patrocínio bronze</p>
          <div className="sponsors">
            <img src={enparSVG}/>
            <img src={rolimGoulartSVG}/>
            <img src={ndfSVG}/>
            <img src={pbGasSVG}/>
            <img src={energisaSVG}/>
            <img src={sebraeSVG}/>
            <img src={poloSebraeErSVG}/>
          </div>
        </div>
        <div className="org-wrapper">
          <div className="org">
            <p>Promoção e realização</p>
            <img src={evexSVG}/>
          </div>
          <div className="org">
            <p>Parceria estratégica</p>
            <img src={cemigSVG}/>
          </div>
        </div>
        <div className="org">
          <p>Parceria de mídia</p>
          <img src={eixosSVG}/>
        </div>
      </SponsorsWrapper>
      <div css={decorationWrapper}>
        <img css={decoration} src={sponsorDecoration}/>
      </div>
    </section>
  )
}

export default SponsorSection