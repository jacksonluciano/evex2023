/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/react'
import { Container, Col, Row } from 'react-bootstrap'
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel
// } from 'react-accessible-accordion'
import Accordion from './accordion'

import 'react-accessible-accordion/dist/fancy-example.css'
import PinkElementImage from '@/images-br/papers/papers-pink-element02.svg'
import PapersLogo from '@/images-br/papers/papers-logo.svg'
// import Arrow from '@/images/icons/arrow-down.svg'
import {
  accordion,
  bgPapers,
  container,
  contentContainer,
  imageContainer,
  pergunta,
  resposta
} from '../assets/styles-br/papers-observations.styles'

const PapersObservations = () => {
  return (
    <section css={bgPapers}>
      <img className='logo' src={PapersLogo} alt='logo papers' />
      <Container>
        <Row css={container}>
          <Col xs={12} md={12} lg={7} css={imageContainer}>
            <img
              src={PinkElementImage}
              alt='background'
              style={{ maxWidth: '544px', width: '100%' }}
            />
          </Col>

          <Col xs={12} md={12} lg={5} css={contentContainer}>
            <h3 className='title'>Observações</h3>
            <div className='content'>
              <div className='item'>
                <p className='item_number item_one'>1</p>
                <p className='item_content'>
                  A submissão de resumos para avaliação não exige qualquer inscrição prévia no EVEx Brasil 2024. Apenas o correto preenchimento e envio do formulário (disponível abaixo para download) dentro do prazo estipulado no cronograma acima descrito.
                </p>
              </div>

              <div className='item'>
                <p className='item_number item_two'>2</p>
                <p className='item_content'>
                  Somente após a possível aprovação da proposta submetida, a inscrição (incluindo o pagamento) deverá ser realizada na categoria EVEx Paper/Project Brasil, também dentro do prazo estipulado no cronograma.
                </p>
              </div>

              <div className='item'>
                <p className='item_number item_three'>3</p>
                <p className='item_content'>
                  Os autores que tiverem dois ou mais resumos aprovados poderão realizar as apresentações de todos eles no evento, caso assim desejem, desde que efetuem a inscrição e o pagamento de cada trabalho a ser apresentado.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* <Container css={accordion}>
        <Row>
          <Col xs={12}>
            <Accordion allowZeroExpanded>
              <AccordionItem>
                <AccordionItemHeading css={pergunta}>
                  <AccordionItemButton>
                    <div className='accordion_title'>
                      <h3>
                        Downloads
                      </h3>
                      <span>
                        <img src={Arrow} />
                      </span>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel css={resposta}>
                  <div className='accordion_informations'>
                    <a href='#' target='_blank'>Normas</a>
                    <a href='#' target='_blank'>Eixos Temáticos</a>
                    <a href='#' target='_blank'>Formulário de Resumo</a>
                    <a href='#' target='_blank'>Template de Apresentação</a>
                    <a href='#' target='_blank'>Template de Artigo</a>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </Col>
        </Row>
      </Container> */}

      <Container css={accordion}>
        <Row>
          <Col xs={12}>
            <Accordion
              accordionHeader={
                <h3>
                  Downloads
                </h3>
              }
              accordionBody={
                <>
                  <a href='#' target='_blank'>Normas</a>
                  <a href='#' target='_blank'>Eixos Temáticos</a>
                  <a href='#' target='_blank'>Formulário de Resumo</a>
                  <a href='#' target='_blank'>Template de Apresentação</a>
                  <a href='#' target='_blank'>Template de Artigo</a>
                </>
              }
            />
          </Col>

          <Col xs={12}>
            <Accordion
              accordionHeader={
                <h3>
                  Publicações
                </h3>
              }
              accordionBody={
                <>
                  <a href='#' target='_blank'>Energia em Tempos de Pandemia</a>
                  <a href='#' target='_blank'>O Futuro da Energia Pós-Pandemia</a>
                  <a href='#' target='_blank'>Anais do EVEx 2020</a>
                  <a href='#' target='_blank'>Anais do EVEx 2021</a>
                  <a href='#' target='_blank'>Anais do EVEx Lisboa 2022</a>
                  <a href='#' target='_blank'>Anais do EVEx Lisboa 2023</a>
                </>
              }
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PapersObservations