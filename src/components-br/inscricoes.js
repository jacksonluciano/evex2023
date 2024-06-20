/** @jsx jsx */
import React from "react";
import { Link } from "gatsby";
import Element01 from '@/images-br/element_inscr.svg'
import Element02 from '@/images-br/home-br/inscricao_elem2.png'
import Element03 from '@/images-br/home-br/inscricao_elem3.png'
import inscriElement from '@/images-br/inscricoes/insc.svg'
import inscriElementMobile from '@/images-br/inscricoes/insc-mobile.svg'
import Bg from '@/images-br/home-br/bg-speakers.jpg'
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from "@emotion/react";

import {
  abAgency,
  pr79,
  mb45,
  linkBorder,
  element01,
  element05,
  element08,
  dateBlock,
  blocks,
  asideBlock,
  sectionTitle,
  underline,
  inscriHero,
  bgElement
} from "../assets/styles-br/inscricoes.styles";
import {
  secTitle,
  subtitle,
  secDesk,
  commonSection,
  commonBtn,
  redBg,
  noPaddingRight,
} from "../assets/styles/layout.styles";

const Inscricoes = () => {

  return (
    <section css={abAgency}>
      <Container fluid className='px-0'>

        <div css={inscriHero}>
          <Row>
            <Col css={sectionTitle} lg={6}>
              <div className="inscriTitle">
                <h2>Inscrições</h2>
                <img src={inscriElement} />
                <img src={inscriElementMobile} />
              </div>
            </Col>
            <Col css={sectionTitle} lg={6}>
              <p css={underline}>
                Prepare-se para viver uma experiência única e transformadora! <br /><br /> Serão dois dias de debates intensos, networking estratégico e conexões valiosas que vão impulsionar sua jornada profissional na transição energética rumo a uma economia verde. Escolha abaixo sua categoria de inscrição no EVEx Brasil 2024 e garanta sua vaga na rota ibero-latino-americana da energia! <br /><br /> Observação: para pagamentos através de depósito, transferência bancária ou PIX, envie solicitação via e-mail (<span>secretaria@evex.energy</span>).
              </p>
            </Col>
          </Row>
        </div>

        <div css={blocks}>
          <Row>
            {/* <Col css={sectionTitle} lg={12}>
             <h2>Online</h2>
          </Col> */}

            <Col sm={12} md={12} lg={6} className='column'>
              <div css={dateBlock} className="orange" >
                <h2>EVEx Pass Brasil</h2>
                <p className="text">Ingresso para os<br /> 2 dias de evento</p>
                {/* <h3>02 a 05 de Outubro</h3> */}
                <p>Profissionais (3° lote)</p>
                <h4>R$ 1.080,00</h4><br />
                <p>Estudantes (3° lote)</p>
                <h4>R$ 702,00</h4>

                <ul>
                  <p style={{ textAlign: 'left', marginLeft: '-20px' }}>O investimento inclui:</p>
                  <li>Acesso à programação completa</li>
                  <li>Kit de credenciamento</li>
                  <li>Coffee breaks</li>
                  <li>Materiais das apresentações</li>
                  <li>Certificado de participação</li>
                  {/* <li>
                    <p>- Acesso à programação completa</p>
                    <p>- Kit de credenciamento</p>
                    <p>- Coffee breaks</p>
                    <p>- Materiais das apresentações</p>
                    <p>- Certificado de participação</p>
                  </li> */}
                </ul>
                <a href="https://www.sympla.com.br/evento/evex-brasil-2024-natal-energy-experience/2432817" target="_blank" css={commonBtn}>Faça sua inscrição aqui</a>
                {/* <a href="#" target="_blank" css={commonBtn}>Inscrições encerradas</a> */}
              </div>
            </Col>

            <Col sm={12} md={12} lg={6} className='column'>
              <div css={dateBlock} className="salmon" >
                <h2>EVEx Paper/Project Brasil</h2>
                <p className="text">Ingresso exclusivo para autores<br /> aprovados no evento</p>
                <p>Profissionais</p>
                <h4>R$ 1.260,00</h4><br />
                <p>Estudantes</p>
                <h4>R$ 756,00</h4>
                <ul style={{ padding: '0 30px' }}>
                  <p style={{ textAlign: 'left', marginLeft: '-20px' }}>O investimento inclui:</p>
                  <li>Apresentação de 1 trabalho</li>
                  <li>Publicação internacional nos Anais do EVEx 2024</li>
                  <li>Acesso à programação completa</li>
                  <li>Kit de credenciamento</li>
                  <li>Coffee breaks</li>
                  <li>Materiais das apresentações</li>
                  <li>Certificado de participação</li>
                  {/* <li>
                    <p>- Apresentação de 1 trabalho</p>
                    <p>- Publicação internacional nos Anais do EVEx 2024</p>
                    <p>- Acesso à programação completa</p>
                    <p>- Kit de credenciamento</p>
                    <p>- Coffee breaks</p>
                    <p>- Materiais das apresentações</p>
                    <p>- Certificado de participação</p>
                  </li> */}
                </ul>
                <a href="https://www.sympla.com.br/evento/evex-brasil-2024-natal-energy-experience/2432817" target="_blank" css={commonBtn}>Faça sua inscrição aqui</a>
                {/* <a href="#" target="_blank" css={commonBtn}>Inscrições encerradas</a> */}
              </div>
            </Col>

          </Row>
          <img src={Element01} css={element01} />
        </div>

        {/* <div css={blocks}>
          <Row>
          <Col css={sectionTitle} lg={12}>
             <h2>Presencial</h2>
          </Col>
            
          <Col lg={6} md={6} sm={12}>
                <div css={dateBlock} className="purple" >
                  <h2>EVEx Pass Lisboa</h2>
                  <h3>25 e 26 de Outubro</h3>
                  <p>Profissionais (último lote)</p>
                  <h4>€ 320,00 / R$ 2.240,00</h4>
                  <p>Estudantes (último lote)</p>
                  <h4>€ 160,00 / R$ 1.120,00</h4>
                  <p className="text">
                    Acesso à programação completa do EVEx Presencial<br></br> 
                    Kit de credenciamento<br></br> 
                    Coffee breaks<br></br> 
                    Materiais das apresentações<br></br> 
                    Certificado internacional de participação
                  </p>
                  <a href="https://www.eventbrite.pt/e/evex-lisboa-2023-tickets-696129912307?aff=ebdsoporgprofile" target="_blank" css={commonBtn}>Inscreva-se em euros (€)</a>
                  <a href="https://www.eventbrite.pt/e/evex-lisboa-2023-tickets-696294243827?aff=oddtdtcreator" target="_blank" css={[commonBtn,linkBorder]}>Inscreva-se em reais (R$)</a>
  
                </div>
                <div css={asideBlock}></div>
              </Col>

              <Col lg={6} md={6} sm={12}>
                <div css={dateBlock} className="blue" >
                  <h2>EVEx Paper/Project Lisboa</h2>
                  <h3>Apresentação de trabalho e publicação</h3>
                  <p>Profissionais</p>
                  <h4>€ 320,00 / R$ 2.240,00</h4>
                  <p>Estudantes</p>
                  <h4>€ 160,00 / R$ 1.120,00</h4>
                  <p className="text">
                    Publicação nos Anais do EVEx Lisboa 2023<br></br> 
                    Acesso à programação completa do EVEx Presencial<br></br> 
                    Kit de credenciamento<br></br> 
                    Coffee breaks<br></br> 
                    Materiais das apresentações<br></br> 
                    Certificado internacional de participação
                  </p>
                  <button css={commonBtn}>Inscrições encerradas</button>
                </div>
                <div css={asideBlock}></div>
              </Col>
            
          </Row>
        </div> */}

      </Container>
      <img css={bgElement} src={Bg} />
    </section>
  );
};

export default Inscricoes;
