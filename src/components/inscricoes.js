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
  underline
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
                Escolha abaixo sua(s) categoria(s) de inscrição no EVEx Lisboa 2023 e vamos juntos de volta ao futuro da
                 energia ibero-latino-americana. 
                 Observações: os ingressos darão acesso ao respectivo evento (EVEx Online ou EVEx Presencial); aos valores
                 apresentados acresce IVA à taxa legal em vigor, quando aplicável; para pagamentos através de depósito,
                 transferência bancária ou PIX, favor enviar solicitação para <span>secretaria@evex.energy</span>
             </p>
          </Col>
        </Row>

        <div css={blocks}>
          <Row>
          <Col css={sectionTitle} lg={12}>
             <h2>Online</h2>
          </Col>
           
              <Col lg={6} md={6} sm={12}>
                <div css={dateBlock} className="orange" >
                  <h2>EVEx Pass</h2>
                  <h3>02 a 05 de Outubro</h3>
                  <p>Profissionais</p>
                  <h4>R$ 665,00 / € 95,00</h4>
                  <p>Estudantes</p>
                  <h4>R$ 332,50 / € 47,50</h4>
                  <p className="text">
                    Acesso a todas as sessões do EVEx Online <br></br> 
                    +25 horas de conteúdo exclusivo <br></br> 
                    Materiais das apresentações <br></br> 
                    Gravações do evento <br></br> 
                    Certificado internacional de participação
                  </p>
                  {/* <a href="https://www.sympla.com.br/evento-online/evex-lisboa-2023-energy-virtual-experience/2166801" target="_blank" css={commonBtn}>Inscreva-se</a> */}
                  <a href="#" target="_blank" css={commonBtn}>Inscrições encerradas</a>
                </div>
                <div css={asideBlock}></div>
              </Col>

              <Col lg={6} md={6} sm={12}>
                <div css={dateBlock} className="salmon" >
                  <h2>EVEx Paper/Project</h2>
                  <h3>Apresentação de trabalho e publicação</h3>
                  <p>Profissionais</p>
                  <h4>R$ 1.260,00 / € 180,00</h4>
                  <p>Estudantes</p>
                  <h4>R$ 630,00 / € 90,00</h4>
                  <p className="text">
                    Publicação nos Anais do EVEx Lisboa 2023<br></br> 
                    Acesso a todas as sessões do EVEx Online<br></br> 
                    +25 horas de conteúdo exclusivo<br></br> 
                    Materiais das apresentações<br></br> 
                    Gravações de todo o evento<br></br> 
                    Certificado internacional de participação
                  </p>
                  {/* <a href="https://www.sympla.com.br/evento-online/evex-lisboa-2023-energy-virtual-experience-papers-projects/2166802" target="_blank" css={commonBtn}>Inscreva-se</a> */}
                  <a href="#" target="_blank" css={commonBtn}>Inscrições encerradas</a>
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
                  {/* <a href="#" target="_blank" css={commonBtn}>Inscrições encerradas</a> */}
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
                  {/* <button css={commonBtn}>Inscreva-se em breve (€)</button>
                  <button css={commonBtn}>Inscreva-se em breve (R$)</button> */}
                  <button css={commonBtn}>Inscrições encerradas</button>
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
