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
             Esteja lado a lado com grandes nomes que ditam tendências e movem negócios em diferentes setores energéticos da Península Ibérica e da América Latina.
Escolha abaixo a sua categoria de inscrição no EVEx 2025 e impulsione a sua carreira na transição energética! 
Obs.: aos valores apresentados acresce taxa da plataforma de pagamento; para pagamento através de depósito, transferência bancária ou PIX, sem acréscimo de taxa, favor enviar solicitação via e-mail para a secretaria do EVEx <span>secretaria@evex.energy</span>
             </p>
          </Col>
        </Row>

        <div css={blocks}>
          <Row>
          <Col css={sectionTitle} lg={12}>
             <h2>EVEx Lisboa 2025</h2>
          </Col>
            
          <Col lg={6} md={6} sm={12}>
                <div css={dateBlock} className="purple" >
                  <h2>EVEx Pass Lisboa</h2>
                  <h3>Inscrição para os 2 dias de evento</h3>

                  <p>Profissionais Até 07/09</p>
                  <h4>€ 325,00 / R$ 2.200,00</h4>

                  <p>Profissionais De 08/09 a 28/09</p>
                  <h4>€ 375,00 / R$ 2.600,00</h4>
                  
                  <p>Profissionais De 29/09 a 06/10</p>
                  <h4>€ 425,00 / R$ 3.000,00</h4>

                  <p>Estudantes/Investigadores Até 07/09</p>
                  <h4>€ 162,50 / R$ 1.100,00</h4>

                  <p>Estudantes/Investigadores De 08/09 a 28/09</p>
                  <h4>€ 187,50 / R$ 1.300,00</h4>

                  <p>Estudantes/Investigadores De 29/09 a 06/10</p>
                  <h4>€ 212,50 / R$ 1.500,00</h4>

                  <p className="text">
                  {/* Acesso à programação completa do EVEx Lisboa<br></br> 
                    Kit de credenciamento<br></br> 
                    04 coffee breaks<br></br> 
                    Materiais das apresentações<br></br> 
                    Certificado de participação */}

                    Ingresso para os 2 dias de evento<br></br> 
                Acesso à programação completa<br></br> 
                Kit de credenciamento<br></br> 
                04 coffee breaks<br></br> 
                Materiais das apresentações<br></br> 
                Certificado de participação

                  </p>
                  <a href="https://www.eventbrite.pt/e/bilhetes-evex-lisboa-2025-lisbon-energy-experience-1598005019029?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl" target="_blank" css={commonBtn}>Inscreva-se em euros (€)</a>
                  <a href="https://www.eventbrite.pt/e/evex-lisboa-2025-lisbon-energy-experience-tickets-1597932682669?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl" target="_blank" css={[commonBtn,linkBorder]}>Inscreva-se em reais (R$)</a>
                  {/* <a href="#" target="_blank" css={commonBtn}>Inscrições encerradas</a> */}
                </div>
                <div css={asideBlock}></div>
              </Col>

              <Col lg={6} md={6} sm={12}>
                <div css={dateBlock} className="blue" >
                  <h2>EVEx Paper/Project Lisboa</h2>
                  <h3>Inscrição de autores com trabalho aprovado no evento</h3>
                  <p>Profissionais</p>
                  <h4>€ 375,00 / R$ 2.600,00</h4>
                  <p>Estudantes/Investigadores</p>
                  <h4>€ 187,50 / R$ 1.300,00</h4>
                  <p className="text">
                    {/* Publicação nos Anais do EVEx 2024 (ISBN de Portugal)<br></br> 
                    Acesso à programação completa do EVEx Lisboa<br></br> 
                    Kit de credenciamento<br></br> 
                    04 coffee breaks<br></br> 
                    Materiais das apresentações<br></br> 
                    Certificado internacional de participação */}

                    Publicação nos Anais do EVEx 2025<br></br> 
                    Acesso à programação completa<br></br> 
                    Kit de credenciamento<br></br> 
                    04 coffee breaks<br></br> 
                    Materiais das apresentações<br></br> 
                    Certificado de participação

                  </p>
                  {/* <button css={commonBtn}>Inscreva-se em euros (€)</button>
                  <button css={commonBtn}>Inscreva-se em reais (R$)</button> */}
                  {/* <button css={commonBtn}>Inscrições encerradas (€)</button>
                  <button css={commonBtn}>Inscrições encerradas (R$)</button> */}
                  {/* <button css={commonBtn}>Inscrições encerradas</button> */}
                  <a href="https://www.eventbrite.pt/e/bilhetes-evex-lisboa-2025-lisbon-energy-experience-1598005019029?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl" target="_blank" css={commonBtn}>Inscreva-se em euros (€)</a>
                  <a href="https://www.eventbrite.pt/e/evex-lisboa-2025-lisbon-energy-experience-tickets-1597932682669?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl" target="_blank" css={[commonBtn,linkBorder]}>Inscreva-se em reais (R$)</a>                  
                </div>
                <div css={asideBlock}></div>
              </Col>
            
          </Row>
          <img css={element04} src={Element04} />
        </div>

        {/* <div css={blocks}>
          <Row>
          <Col css={sectionTitle} lg={12}>
             <h2>Online</h2>
          </Col>

              <Col lg={6} md={6} sm={12} css={mb}>
                <div css={dateBlock} className="orange" >
                  <h2>EVEx Pass</h2>
                  <h3>10 a 12 de Dezembro</h3>
                  <p>Profissionais (1° lote)</p>
                  <h4>R$ 315,00</h4>
                  <p>Estudantes (1° lote)</p>
                  <h4>R$ 189,00</h4>
                  <p className="text">
                  Acesso a todas as sessões do EVEx Online <br></br> 
                  +20 horas de conteúdo exclusivo <br></br> 
                  Materiais das apresentações <br></br> 
                  Gravações do evento <br></br> 
                  Certificado de participação
                  </p>
                  <a href="https://www.sympla.com.br/evento-online/evex-lisboa-2023-energy-virtual-experience/2166801" target="_blank" css={commonBtn}>Inscreva-se</a>
                  <a href="https://www.sympla.com.br/evento-online/evex-2024-energy-virtual-experience/2594684" target="_blank" css={commonBtn}>Inscreva-se agora</a>
                </div>
                <div css={asideBlock}></div>
              </Col>

              <Col lg={6} md={6} sm={12} css={mb}>
                <div css={dateBlock} className="salmon" >
                  <h2>EVEx Paper/Project</h2>
                  <h3>Apresentação de trabalho e publicação</h3>
                  <p>Profissionais</p>
                  <h4>R$ 750,00</h4>
                  <p>Estudantes</p>
                  <h4>R$ 525,00</h4>
                  <p className="text">
                    Publicação nos Anais do EVEx 2024 (ISBN de Portugal)<br></br> 
                    Acesso a todas as sessões do EVEx Online<br></br> 
                    +20 horas de conteúdo exclusivo<br></br> 
                    Materiais das apresentações<br></br> 
                    Gravações do evento<br></br> 
                    Certificado de participação
                  </p>
                  <a href="https://www.sympla.com.br/evento-online/evex-lisboa-2023-energy-virtual-experience-papers-projects/2166802" target="_blank" css={commonBtn}>Inscreva-se</a>
                  <a href="https://www.sympla.com.br/evento-online/evex-2024-energy-virtual-experience/2594684" target="_blank" css={commonBtn}>Inscreva-se agora</a>
                </div>
                <div css={asideBlock}></div>
              </Col>
          
          </Row>
        </div> */}

      </Container>
      <img css={element05} src={Element05} />
      <img css={element08} src={Element08} />
    </section>
  );
};

export default Inscricoes;
