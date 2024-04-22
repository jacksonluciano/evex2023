/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/react'
import { Col, Container, Row } from 'react-bootstrap'
import EvexImage from '@/images-br/o-evex/evex.svg'
import BgEvexImage from '@/images-br/o-evex/o-evex-orange-elements-02.png'
import BgEvexImageMobile from '@/images-br/o-evex/oevex_mobile.png'
import {
  description,
  evexImageBg,
  sectionHeroDescription,
  evexImageBgMobile
} from '../assets/styles-br/evex-hero-description.styles'

const EvexHeroDescription = () => {
  return (
    <section css={sectionHeroDescription}>
      <Container>
        <Row style={{ alignItems: 'center' }}>
          <Col lg='auto' xs={12} className='px-0'>
            <div css={evexImageBg}>
              <img src={EvexImage} alt='EVEx' />
              <img src={BgEvexImage} className='bgEvex' />
            </div>
            <div css={evexImageBgMobile}>
              <img src={EvexImage} alt='EVEx' className='logoEvex' />
              <img src={BgEvexImageMobile}  />
            </div>
          </Col>

          <Col xs={12} lg={6}  className='px-0'>
            <div css={description}>
              <p>
                O <span>EVEx – Energy Virtual Experience</span> é uma iniciativa pioneira e internacional que reúne especialistas da área de energia, desde o ano de 2020, com o apoio de empresas e outras organizações. Tem como objetivos principais debater tendências, trocar experiências e encontrar plataformas de cooperação para acelerar a transição energética nos países da Península Ibérica e da América Latina – em especial, Brasil, Portugal e Espanha.
              </p>

              <p>
                Hoje, caminhando para a sua quinta edição anual consecutiva, o EVEx já é reconhecido como o maior e um dos mais relevantes encontros de energia do bloco ibero-latino-americano.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default EvexHeroDescription