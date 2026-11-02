/** @jsx jsx */
import React from "react";
import { BigCtaData} from "@/data";
import Ystar from '@/images/2026/ystar.svg'
import Bstar from '@/images/2026/bstar.svg'
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from "@emotion/react";
import { Link } from "gatsby";
import Pattern from "@/images/2026/pattern.svg";

import {
  abAgency,
  element10,
  dateBlock,
  blocks,
  asideBlock
} from "../assets/styles/BigCta.styles";
import {
  commonBtn,
} from "../assets/styles/layout.styles";

const Bigcta = () => {
  return (
    <section css={[abAgency]}>
      <Container fluid>
        <div css={blocks}>
          <Row>
            {/* {BigCtaData.map(({ date, text, button }, index) => (
              <Col lg={6} md={6} sm={12}>
                <div css={dateBlock} key={index} className={index == 1 ? 'purple' : ''}>
                  <h2>{date}</h2>
                  <p>{text}</p>
                  <Link to={index == 1 ? '/lisboa/inscricoes' : '/lisboa/agenda'} css={commonBtn}>{button}</Link>
                </div>
                <div css={asideBlock}></div>
              </Col>
            ))} */}
            <Col lg={6} md={6} sm={12}>
                <div css={dateBlock} className={'purple'}>
                  <h2>Agenda</h2>
                  <p>Conheça a programação do EVEx Lisboa 2026 e prepare-se para uma experiência de conexão, conhecimento e negócios no setor energético ibero-americano.</p>
                  <h5>A agenda reúne:</h5>
                  <p className="stars"><img src={Ystar} />Painéis com lideranças e especialistas</p> 
                  <p className="stars"><img src={Bstar} />Sessões especiais sobre os desafios e as oportunidades da energia</p> 
                  <p className="stars"><img src={Ystar} />Conversas na Arena CEMIG</p> 
                  <p className="stars" style={{marginBottom:'16px'}}><img src={Bstar} />Visitas técnicas e reuniões exclusivas da Missão EVEx</p>

                  <p>Confira os temas, os participantes e os horários das atividades e descubra o que espera por você no EVEx Lisboa 2026.</p>
                  <Link to={'/lisboa/agenda'} css={commonBtn}>Agenda oficial</Link>
                </div>
                <div css={asideBlock}></div>
              </Col>

              <Col lg={6} md={6} sm={12}>
                <div css={dateBlock} className={''}>
                   <h2>Inscrição</h2>
                  <p>Participe do EVEx Lisboa 2026, nos dias 03 e 04 de novembro, no Altis Grand Hotel.</p>
                  <h5>A inscrição inclui:</h5>
                  <p className="stars"><img src={Ystar} />Acesso à programação completa dos dois dias do evento</p> 
                  <p className="stars"><img src={Bstar} />Kit do participante</p> 
                  <p className="stars"><img src={Ystar} />Almoço nos dois dias </p> 
                  <p className="stars"><img src={Bstar} />Coffee breaks</p> 
                  <p className="stars"><img src={Ystar} />Acesso às apresentações disponibilizadas pelos Speakers</p> 
                  <p className="stars" style={{marginBottom:'16px'}}><img src={Bstar} />Certificado de participação</p>

                  <p>Entre em contato com a Secretaria para consultar a disponibilidade e receber as condições de inscrição: secretaria@evex.energy</p>
                  <Link to={'/lisboa/inscricoes'} css={commonBtn}>Inscrições</Link>
                </div>
                <div css={asideBlock}></div>
              </Col>
             {/* <Col lg={6} md={6} sm={12}>
                <div css={dateBlock} className={'purple'}>
                  <h2>Agenda</h2>
                  <p>Conheça a programação do EVEx Lisboa 2026 e prepare-se para uma experiência de conexão, conhecimento e negócios no setor energético ibero-americano.</p>
                 
                 <h4>A agenda reúne:</h4>

                    <p> Painéis com lideranças e especialistas </p>
                    <p>Sessões especiais sobre os desafios e as oportunidades 
                    da energia</p>
                    <p>Conversas na Arena CEMIG</p>
                   <p>Visitas técnicas e reuniões exclusivas da Missão EVEx</p>

                   <p>Confira os temas, os participantes e os horários das atividades e descubra o que espera por você no EVEx Lisboa 2026.</p>

                  <Link to={'/lisboa/agenda'} css={commonBtn}>Agenda oficial</Link>
                </div>
                <div css={asideBlock}></div>
              </Col> */}
          </Row>
        </div>
      </Container>
      <img src={Pattern} />
    </section>
  );
};

export default Bigcta;
