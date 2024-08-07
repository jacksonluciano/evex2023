/** @jsx jsx */
import React from "react";
import { Link } from "gatsby";
import Element04 from '@/images/elements/element-04.svg'
import Element05 from '@/images/elements/element-05.svg'
import Element08 from '@/images/elements/element-08.png'
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from "@emotion/react";

import {
  abAgency,
  pr79,
  mb45,
  linkBorder,
  element04,
  element05,
  element08,
  dateBlock,
  blocks,
  asideBlock,
  sectionTitle,
  underline, 
  mb
} from "../assets/styles/Inscricoes.styles";
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
      <Container fluid>

      <Row>
          <Col css={sectionTitle} lg={12}>
             <h2>Inscrições</h2>
             <p css={underline}>
                 Escolha abaixo sua(s) categoria(s) de inscrição no EVEx 2023 e vamos juntos desbravar a rota ibero-latino-americana da energia! Observações: os ingressos darão acesso ao respectivo evento (EVEx Online ou EVEx Lisboa); aos valores apresentados acresce IVA à taxa legal em vigor, quando aplicável; para pagamentos através de depósito, transferência bancária ou PIX, favor enviar solicitação para: <span>secretaria@evex.energy</span>
             </p>
          </Col>
        </Row>

        <div css={blocks}>
          <Row>
          <Col css={sectionTitle} lg={12}>
             <h2>Online</h2>
          </Col>
           
              <Col lg={6} md={6} sm={12} css={mb}>
                <div css={dateBlock} className="orange" >
                  <h2>Free EVEx Pass</h2>
                  <h3>24 a 26 de Setembro</h3>
                  <p>Profissionais</p>
                  <h4>Inscrições gratuitas</h4>
                  <p>Estudantes</p>
                  <h4>Inscrições gratuitas</h4>
                  <p className="text">
                  Acesso a todas as sessões do EVEx Online <br></br> 
                  +20 horas de conteúdo exclusivo <br></br> 
                  </p>
                  {/* <a href="https://www.sympla.com.br/evento-online/evex-lisboa-2023-energy-virtual-experience/2166801" target="_blank" css={commonBtn}>Inscreva-se</a> */}
                  <a href="#" target="_blank" css={commonBtn}>Inscreva-se agora</a>
                </div>
                <div css={asideBlock}></div>
              </Col>

              <Col lg={6} md={6} sm={12} css={mb}>
                <div css={dateBlock} className="orange" >
                  <h2>Full EVEx Pass</h2>
                  <h3>24 a 26 de Setembro</h3>
                  <p>Profissionais</p>
                  <h4>R$ 360,00</h4>
                  <p>Estudantes</p>
                  <h4>R$ 216,00</h4>
                  <p className="text">
                  Acesso a todas as sessões do EVEx Online <br></br> 
                  +20 horas de conteúdo exclusivo <br></br> 
                  Materiais das apresentações <br></br> 
                  Gravações do evento <br></br> 
                  Certificado de participação
                  </p>
                  {/* <a href="https://www.sympla.com.br/evento-online/evex-lisboa-2023-energy-virtual-experience/2166801" target="_blank" css={commonBtn}>Inscreva-se</a> */}
                  <a href="#" target="_blank" css={commonBtn}>Inscreva-se agora</a>
                </div>
                <div css={asideBlock}></div>
              </Col>

              <Col lg={6} md={6} sm={12} css={mb}>
                <div css={dateBlock} className="salmon" >
                  <h2>EVEx Paper/Project</h2>
                  <h3>Apresentação de trabalho e publicação</h3>
                  <p>Profissionais</p>
                  <h4>R$ 1.260,00</h4>
                  <p>Estudantes</p>
                  <h4>R$ 756,00</h4>
                  <p className="text">
                    Publicação nos Anais do EVEx 2024 (ISBN de Portugal)<br></br> 
                    Acesso a todas as sessões do EVEx Online<br></br> 
                    +20 horas de conteúdo exclusivo<br></br> 
                    Materiais das apresentações<br></br> 
                    Gravações do evento<br></br> 
                    Certificado de participação
                  </p>
                  {/* <a href="https://www.sympla.com.br/evento-online/evex-lisboa-2023-energy-virtual-experience-papers-projects/2166802" target="_blank" css={commonBtn}>Inscreva-se</a> */}
                  <a href="#" target="_blank" css={commonBtn}>Inscreva-se agora</a>
                </div>
                <div css={asideBlock}></div>
              </Col>
          
          </Row>
        </div>

        <div css={blocks}>
          <Row>
          <Col css={sectionTitle} lg={12}>
             <h2>Presencial</h2>
          </Col>
            
          <Col lg={6} md={6} sm={12}>
                <div css={dateBlock} className="purple" >
                  <h2>EVEx Pass Lisboa</h2>
                  <h3>08 e 09 de Outubro</h3>
                  <p>Profissionais (1º lote até 30/08)</p>
                  <h4>€ 350,00 / R$ 2.100,00</h4>
                  <p>Estudantes (1º lote até 30/08)</p>
                  <h4>€ 210,00 / R$ 1.126,00</h4>
                  <p className="text">
                  Acesso à programação completa do EVEx Lisboa<br></br> 
                    Kit de credenciamento<br></br> 
                    04 coffee breaks<br></br> 
                    Materiais das apresentações<br></br> 
                    Certificado de participação
                  </p>
                  <a href="https://www.eventbrite.pt/e/evex-lisboa-2023-tickets-696129912307?aff=ebdsoporgprofile" target="_blank" css={commonBtn}>Inscreva-se em euros (€)</a>
                  <a href="https://www.eventbrite.pt/e/evex-lisboa-2023-tickets-696294243827?aff=oddtdtcreator" target="_blank" css={[commonBtn,linkBorder]}>Inscreva-se em reais (R$)</a>
                  {/* <a href="#" target="_blank" css={commonBtn}>Inscrições encerradas</a> */}
                </div>
                <div css={asideBlock}></div>
              </Col>

              <Col lg={6} md={6} sm={12}>
                <div css={dateBlock} className="blue" >
                  <h2>EVEx Paper/Project Lisboa</h2>
                  <h3>Apresentação de trabalho e publicação</h3>
                  <p>Profissionais</p>
                  <h4>€ 400,00 / R$ 2.400,00</h4>
                  <p>Estudantes</p>
                  <h4>€ 240,00 / R$ 1.440,00</h4>
                  <p className="text">
                    Publicação nos Anais do EVEx 2024 (ISBN de Portugal)<br></br> 
                    Acesso à programação completa do EVEx Lisboa<br></br> 
                    Kit de credenciamento<br></br> 
                    04 coffee breaks<br></br> 
                    Materiais das apresentações<br></br> 
                    Certificado internacional de participação
                  </p>
                  <button css={commonBtn}>Inscreva-se em euros (€)</button>
                  <button css={commonBtn}>Inscreva-se em reais (R$)</button>
                  {/* <button css={commonBtn}>Inscrições encerradas</button> */}
                </div>
                <div css={asideBlock}></div>
              </Col>
            
          </Row>
          <img css={element04} src={Element04} />
        </div>
      </Container>
      <img css={element05} src={Element05} />
      <img css={element08} src={Element08} />
    </section>
  );
};

export default Inscricoes;
