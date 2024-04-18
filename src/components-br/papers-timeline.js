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
            <span>31/05/2024</span>
          </Col>

          <Col xs={12} sm={12} lg={6} css={data} className='px-0'>
            <span>Data limite para divulgação das propostas selecionadas:</span>
            <span>10/06/2024</span>
          </Col>

          <Col xs={12} sm={12} lg={6} css={data} className='px-0'>
            <span>Período para inscrição dos autores aprovados:</span>
            <span>de 11/06/2024 a 17/06/2024</span>
          </Col>

          <Col xs={12} sm={12} lg={6} css={data} className='px-0'>
            <span>Apresentação no evento:</span>
            <span>de 03/07/2024 a 04/07/2024</span>
          </Col>

          <Col xs={12} css={data} className='px-0'>
            <span>Data limite para envio da versão final dos trabalhos:</span>
            <span>30/09/2024</span>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PapersTimeLine
