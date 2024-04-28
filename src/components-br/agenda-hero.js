/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/react'
import { Container, Col, Row } from 'react-bootstrap'
import { sectionHero, informations } from '../assets/styles-br/agenda-hero.styles'
import OrangeElementVector01 from '@/images-br/agenda/agenda-orange-element01.svg'
import OrangeElementVector02 from '@/images-br/agenda/agenda-orange-element02.svg'
import { Link } from 'gatsby'

const AgendaHero = () => {
  return (
    <section css={sectionHero}>
      <Container fluid className='px-0'>
        <div className='title_container'>
          <h3 className='title'>Agenda Preliminar</h3>
        </div>

        <div css={informations}>
          <img src={OrangeElementVector01} className='element01' />
          <img src={OrangeElementVector02} className='element02' />
          <div className='data_container'>
            <div className='data_info'>
              <a href="#tres">
              <p>Quarta-feira</p>
              <p>03/07/2024</p>
              </a>
            </div>

            <div className='data_info'>
              <p>Quinta-feira</p>
              <p>04/07/2024</p>
            </div>
          </div>

          <p>Sujeita à alteração até o dia 28/06/2024</p>
        </div>
      </Container>

    </section>
  )
}

export default AgendaHero
