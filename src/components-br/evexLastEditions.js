/** @jsx jsx */
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { jsx } from '@emotion/react'
import { centerColumn, content, sideColumn } from '../assets/styles-br/evexLastEdition.styles'

const EvexLastEditions = () => {
  return (
    <section id="last-editions">
      <Container fluid>
        <Row>
          <Col xs={2} lg={4} className='px-0'>
            <div css={sideColumn}></div>
            <div css={sideColumn}></div>
            <div css={sideColumn}></div>
            <div css={sideColumn}></div>
            <div css={sideColumn}></div>
          </Col>

          <Col xs={8} lg={4} className='px-0'>
            <div css={centerColumn}></div>
            <div css={content}>
              <h2>Edições Passadas</h2>

              <p>
                As duas primeiras edições do EVEx foram realizadas nos anos de 2020 e 2021 de forma totalmente virtual, em razão da pandemia de COVID-19. Já a terceira e quarta, respectivamente em 2022 e 2023, tiveram formato composto por dois eventos, sendo um online e outro presencial em Lisboa, Portugal, incluindo visitas e reuniões técnicas com entidades do mercado ibérico de energia.
              </p>
            </div>

            <div css={centerColumn}></div>
          </Col>

          <Col xs={2} lg={4} className='px-0'>
            <div css={sideColumn}></div>
            <div css={sideColumn}></div>
            <div css={sideColumn}></div>
            <div css={sideColumn}></div>
            <div css={sideColumn}></div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default EvexLastEditions