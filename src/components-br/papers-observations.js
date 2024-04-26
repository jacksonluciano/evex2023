/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/react'
import { Container, Col, Row } from 'react-bootstrap'
import { downloadLinks, publicationsLinks } from '@/data-br'
import Accordion from './accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import PinkElementImage from '@/images-br/papers/papers-pink-element02.svg'
import PapersLogo from '@/images-br/papers/papers-logo.svg'
import {
  accordion,
  bgPapers,
  container,
  contentContainer,
  imageContainer
} from '../assets/styles-br/papers-observations.styles'


const PapersObservations = () => {
  return (
    <section css={bgPapers}>
      <img className='logo' src={PapersLogo} alt='logo papers' />
      <Container>
        <Row css={container}>
          <Col xs={12} md={12} lg={6} xl={7} className='px-0'>
            <div css={imageContainer}>
              <img
                src={PinkElementImage}
                alt='background'
              />
            </div>
          </Col>

          <Col xs={12} md={12} lg={6} xl={5} css={contentContainer} className='px-0'>
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

      <Container css={accordion}  className='px-0'>
        <img className='logo_mobile' src={PapersLogo} alt='logo papers' />
        <Row className='mx-0'>
          <Col xs={12} className='px-0'>
            <Accordion
              width='630px'
              accordionHeader={
                <h3>
                  Downloads
                </h3>
              }
              accordionBody={
                <>
                  {downloadLinks?.map(item => (
                    <a
                      key={item?.number}
                      href={item?.url}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {item?.name}
                    </a>
                  ))}
                </>
              }
            />
          </Col>

          <Col xs={12} className='px-0'>
            <Accordion
              width='630px'
              accordionHeader={
                <h3>
                  Publicações
                </h3>
              }
              accordionBody={
                <>
                  {publicationsLinks?.map(item => (
                    <a
                      key={item?.number}
                      href={item?.url}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {item?.name}
                    </a>
                  ))}
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