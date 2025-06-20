/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/react'
import { Container, Col, Row } from 'react-bootstrap'
import {
  sectionHeroPapers,
  element
} from '../assets/styles-br/papers-hero.styles'
import BgPinkMobile from '@/images-br/papers/mobile.png'
import Element from '@/images-br/papers/element.png'

const PapersHero = () => {
  return (
    <section css={sectionHeroPapers}>

      <img src={BgPinkMobile} className='bg_mobile' />
      <Container>
        <Row>
          <Col xs={12} sm={12} lg={6} className='bg_papers_mobile'>
            <div className='title_container'>
              <h2 className='title'>Call for<br /> Papers/<br /> Projects</h2>
              <img css={element} src={Element} />
            </div>
          </Col>

          <Col xs={12} sm={12} lg={6}>
            <div className='content_container'>
              <p>
              A Call for Papers/Projects do EVEx Brasil 2025 – Natal Energy Experience tem por finalidade incentivar tanto a produção acadêmica e científica na área de energia, quanto o desenvolvimento de novas tecnologias para acelerar a transição energética ibero-americana.
              </p>

              <p>
              Na experiência Natal Energy Academy, será proporcionado um espaço de debate para apresentações de trabalhos e projetos desenvolvidos por estudantes, pesquisadores, startups e profissionais de diversos setores energéticos.
              </p>

              <p>
              Os resumos deverão ser enviados, exclusivamente, para o e-mail do Comitê Científico do EVEx (comite@evex.energy), conforme cronograma, eixos temáticos e formulário disponíveis abaixo.
              </p>

              <p>
              Todas as propostas recebidas dentro do prazo serão analisadas. As mais bem avaliadas poderão ser apresentadas no EVEx Brasil 2025 mediante inscrição dos respectivos autores na categoria “EVEx Paper/Project”.
              </p>

              <p>
                As versões finais dos trabalhos apresentados no evento serão publicadas nos Anais do EVEx 2025, em formato digital (e-book).
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PapersHero
