/** @jsx jsx */
import React from 'react'
import { Container } from 'react-bootstrap'
import { jsx } from '@emotion/react'
import { natalHeroContainer, radialElement } from '../assets/styles-br/natal-hero.styles'
import GreenElementImage from '@/images-br/natal/natal-green-element01.svg'

const NatalHero = () => {
  return (
    <section css={natalHeroContainer}>
      <Container className='hero_container'>
        <h2>Por que Natal?</h2>
        {/* <img src={GreenElementImage} /> */}
        <div css={radialElement}></div>
      </Container>
    </section>
  )
}

export default NatalHero
