/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/react'
import { Container, Col, Row } from 'react-bootstrap'
import {
  data,
  timelineTitle
} from '../assets/styles-br/papers-timeline.styles'

const PapersTimeLine = () => {
  return (
    <section>
      <Container fluid css={timelineTitle}>
        <h2>Cronograma</h2>
      </Container>

      <Container fluid>
        <Row>
          <Col xs={12} sm={12} lg={6} css={data} className='px-0'>
            <span>Data limite para envio de resumos:</span>
            <span>26/06/2025</span>
          </Col>

          <Col xs={12} sm={12} lg={6} css={data} className='px-0'>
            <span>Data limite para divulgação das propostas selecionadas:</span>
            <span>27/06/2025</span>
          </Col>

          <Col xs={12} sm={12} lg={6} css={data} className='px-0'>
            <span>Período para inscrição dos autores aprovados:</span>
            <span>de 27/06/2025 a 30/06/2025</span>
          </Col>

          <Col xs={12} sm={12} lg={6} css={data} className='px-0'>
            <span>Apresentação no evento:</span>
            <span>de 03/07/2025 e 04/07/2025</span>
          </Col>

          <Col xs={12} css={data} className='px-0'>
            <span>Data limite para envio da versão final dos trabalhos:</span>
            <span>31/10/2025</span>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PapersTimeLine
