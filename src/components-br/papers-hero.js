/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/react'
import { Container, Col, Row } from 'react-bootstrap'
import {
  sectionHeroPapers
} from '../assets/styles-br/papers-hero.styles'

const PapersHero = () => {
  return (
    <section css={sectionHeroPapers}>
      <Container>
        <Row>
          <Col xs={12} sm={12} lg={6}>
            <div className='title_container'>
              <h2 className='title'>Call for<br /> Papers/<br /> Projects</h2>
            </div>
          </Col>

          <Col xs={12} sm={12} lg={6}>
            <div className='content_container'>
              <p>
                A Call for Papers/Projects do EVEx Brasil 2024 tem por finalidade incentivar tanto a produção acadêmica e científica na área de energia, quanto o desenvolvimento de novos negócios para acelerar a Transição Energética Ibero-Latino-Americana.
              </p>

              <p>
                Na experiência Natal Energy Academy, será proporcionado um espaço de debate e grande visibilidade para apresentação de pesquisas, projetos e soluções inovadoras desenvolvidas por estudantes, professores, startups e empresas.
              </p>

              <p>
                Os resumos deverão ser enviados, exclusivamente, para o e-mail do Comitê Científico (comite@evex.energy), conforme cronograma, normas, eixos temáticos e formulário disponíveis abaixo.
              </p>

              <p>
                Todas as propostas recebidas dentro do prazo serão analisadas. As mais bem avaliadas poderão ser apresentadas no EVEx Brasil 2024, após as inscrições dos respectivos autores.
              </p>

              <p>
                As versões finais dos trabalhos apresentados no evento serão publicadas nos Anais do EVEx 2024, em formato digital (e-book).
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PapersHero
