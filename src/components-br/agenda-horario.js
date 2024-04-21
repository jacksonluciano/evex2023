/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/react'
import { Container, Col, Row } from 'react-bootstrap'
import {
  div,
  agendaTitle,
  bgColumnTitle,
  bgColumn,
  container,
  schedule,
  title,
  event,
  principalEvent,
  principalEventDescription,
  participantsContainer,
  eventTypeTitle
} from '../assets/styles-br/agenda-horario.styles'

const AgendaHorario = () => {
  return (
    <section>
      <Container fluid className='px-0'>
        <div css={div}></div>
        <Container fluid>
          <Row>
            <Col xs={12} md={8} css={bgColumnTitle} className='px-0'>
              <div css={agendaTitle}>
                <h2>Dia 03 de Julho</h2>
                <h3>Horário de Brasília</h3>
              </div>
            </Col>
            <Col xs={0} md={2} css={bgColumn} className='px-0'></Col>
            <Col xs={0} md={2} css={bgColumn} className='px-0'></Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className='px-0'>
        <div css={container}>
          <div css={schedule}>
            <h4 css={title}>Programação Principal</h4>
            <div css={event}>
              <span>08h45</span>
              <p>Credenciamento</p>
            </div>

            <div>
              <div css={principalEvent}>
                <span>08h45</span>
                <p>Natal Energy Experience - Abertura</p>
              </div>

              <p css={principalEventDescription}>
                Transição Energética Justa e Industrialização Verde:
                na rota ibero-latino-americana
              </p>
            </div>

            <div css={participantsContainer}>
              <div className='participant'>
                <p className='participant_name'>Alexandre Fernandes</p>
                <p className='participant_role'>
                  Presidente, ENSE - Entidade Nacional para o Setor Energético
                </p>
              </div>

              <div className='participant'>
                <p className='participant_name'>Maria João Rolim</p>
                <p className='participant_role'>
                  Sócia, Rolim Goulart Cardoso
                </p>
              </div>
            </div>

            <div>
              <div css={principalEvent}>
                <span>08h45</span>
                <p>Natal Energy Expo/Business</p>
              </div>

              <p css={principalEventDescription}>
                Rota do Hidrogênio Verde: projetos e casos de sucesso
              </p>
            </div>

            <h5 css={eventTypeTitle}>Exposição de Cases</h5>

            <div css={participantsContainer}>
              <div className='participant'>
                <p className='participant_name'>Alexandre Fernandes</p>
                <p className='participant_role'>
                  Presidente, ENSE - Entidade Nacional para o Setor Energético
                </p>
              </div>

              <div className='participant'>
                <p className='participant_name'>Maria João Rolim</p>
                <p className='participant_role'>
                  Sócia, Rolim Goulart Cardoso
                </p>
              </div>
            </div>

            <h4 css={title}>Programação Paralela</h4>

            <div>
              <div css={principalEvent}>
                <span>08h45</span>
                <p>Natal Energy Academy</p>
              </div>

              <p css={principalEventDescription}>
                Apresentações de Trabalhos Acadêmicos e Científicos
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AgendaHorario
