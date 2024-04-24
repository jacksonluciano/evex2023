/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/react'
import { Container, Col, Row } from 'react-bootstrap'
import FourIcon from '../assets/images-br/o-evex/4.png'
import { bg, container, title } from '../assets/styles-br/edition.styles'
import LogoEvex2020 from '../assets/images-br/o-evex/evex01.png'
import LogoEvex2021 from '../assets/images-br/o-evex/evex02.png'
import LogoEvex2022 from '../assets/images-br/o-evex/evex03.png'
import LogoEvex2023 from '../assets/images-br/o-evex/evex04.png'
import Bg from '../assets/images-br/o-evex/bg02.svg'

const Editions = () => {
  return (
    <section>
      <Container fluid>
        <Row>
          <Col xs={10} lg={8} css={title}>
            <div className='title_container'>
              <img src={FourIcon} />
              <div className='title'>
                <h2>Edições consecutivas</h2>
                <h2>realizadas desde 2020</h2>
              </div>
            </div>
          </Col>

          <Col xs={12} lg={2} css={bg}></Col>
          <Col xs={2} lg={2} css={bg}></Col>
        </Row>
      </Container>

      <Container>
        <Row css={container}>
          <Col xs={12} lg={3}>
            <img src={LogoEvex2020} alt='Logo do EVEx 2020' />
          </Col>

          <Col xs={12} lg={3}>
            <img src={LogoEvex2021} alt='Logo do EVEx 2021' />
          </Col>

          <Col xs={12} lg={3}>
            <img src={LogoEvex2022} alt='Logo do EVEx 2022' />
          </Col>

          <Col xs={12} lg={3}>
            <img src={LogoEvex2023} alt='Logo do EVEx 2023' />
          </Col>
        </Row>
      </Container>

      <img src={Bg} width='100%' />
    </section>
  )
}

export default Editions
