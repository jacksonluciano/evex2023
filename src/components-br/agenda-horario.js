/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import { Container, Col, Row } from "react-bootstrap";
import BgOrange from "@/images-br/agenda/orange-elements-02.png"
import {
  div,
  agendaTitle,
  bgColumnTitle,
  bgColumn,
  container,
  schedule,
  title,
  event,
  principalEvent,
  principalEventDescription,
  participantsContainer,
  eventTypeTitle,
  imgOrange,
  content
} from "../assets/styles-br/agenda-horario.styles";

const AgendaHorario = () => {
  return (
   <div css={content}>
     <section>
      <Container fluid className="px-0">
        <div css={div}></div>
        <Container fluid>
          <Row>
            <Col xs={12} lg={6} css={bgColumnTitle} className="px-0">
              <div css={agendaTitle}>
                <h2>Dia 03 de Julho</h2>
                <h3>Horário de Brasília</h3>
              </div>
            </Col>
            <Col xs={0} lg={3} css={bgColumn} className="px-0"></Col>
            <Col xs={0} lg={3} css={bgColumn} className="px-0"></Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="px-0">
        <div css={container}>
          <div css={schedule}>
            <h4 css={title}>Programação Principal</h4>
            <div css={event}>
              <span>08h45</span>
              <p>Credenciamento</p>
            </div>

            <div css={event}>
              <span>09h10</span>
              <p>Boas Vindas</p>
            </div>

            <div>
              <div css={principalEvent}>
                <span>09h20</span>
                <p>Natal Energy Experience - Abertura</p>
              </div>

              <p css={principalEventDescription}>
                Transição Energética Justa e Industrialização Verde: na rota
                ibero-latino-americana
              </p>
            </div>

            <div css={participantsContainer}>
              <div className="participant">
                <p className="participant_name">Alexandre Fernandes</p>
                <p className="participant_role">
                  Presidente, ENSE - Entidade Nacional para o Setor Energético
                </p>
              </div>

              <div className="participant">
                <p className="participant_name">Bruno Veloso</p>
                <p className="participant_role">
                  Vice-Presidente do Conselho de Administração, ADENE - Agência
                  para a Energia
                </p>
              </div>

              <div className="participant">
                <p className="participant_name">Alexandre Ramos</p>
                <p className="participant_role">
                  Presidente, CCEE - Câmara de Comercialização de Energia
                  Elétrica
                </p>
              </div>

              <div className="participant">
                <p className="participant_name">Thiago Prado</p>
                <p className="participant_role">
                  Presidente, EPE - Empresa de Pesquisa Energética
                </p>
              </div>

              <div className="participant">
                <p className="participant_name">Maria João Rolim</p>
                <p className="participant_role">Sócia, Rolim Goulart Cardoso</p>
              </div>

              <div className="participant">
                <p className="participant_name">Joana Garoupa – Moderadora</p>
                <p className="participant_role">Diretora Geral, Garoupa INC</p>
              </div>
            </div>

            <div css={event}>
              <span>10h45</span>
              <p>Coffee Break</p>
            </div>

            <div>
              <div css={principalEvent}>
                <span>08h45</span>
                <p>Natal Energy Expo/Business</p>
              </div>

              <p css={principalEventDescription}>
                Rota do Hidrogênio Verde: projetos e casos de sucesso
              </p>
            </div>

            <h5 css={eventTypeTitle}>Exposição de Cases</h5>

            <div css={participantsContainer}>
              <div className="participant">
                <p className="participant_name">Ana Quelhas</p>
                <p className="participant_role">
                Managing Director for Hydrogen, EDP Renewables
                </p>
              </div>

              <div className="participant">
                <p className="participant_name">Bruno Galvão</p>
                <p className="participant_role">Special Counsel, BLOMSTEIN</p>
              </div>
            </div>

            <h5 css={eventTypeTitle}>DEBATE</h5>

            <div css={participantsContainer}>
              <div className="participant">
                <p className="participant_name">Gema Blanco-Salvá</p>
                <p className="participant_role">
                Ajunta a la Dirección General, MIBGAS - Mercado Iberico del Gas
                </p>
              </div>

              <div className="participant">
                <p className="participant_name">Ricardo Gedra</p>
                <p className="participant_role">Gerente de Análise e Informações ao Mercado, CCEE - Câmara de Comercialização de Energia Elétrica</p>
              </div>
              <div className="participant">
                <p className="participant_name">Afonso Henriques Moreira Santos</p>
                <p className="participant_role">Membro do Conselho de Administração, CEMIG - Companhia Energética de Minas Gerais</p>
              </div>
              <div className="participant">
                <p className="participant_name">Fernanda Delgado – Moderadora</p>
                <p className="participant_role">Diretora Executiva, ABIHV - Associação Brasileira da Indústria de Hidrogênio Verde</p>
              </div>
            </div>

            <div css={event}>
              <span>12h30</span>
              <p>Almoço</p>
            </div>


            

            <div>
              <div css={principalEvent}>
                <span>14h00</span>
                <p>Natal Energy Talks</p>
              </div>

              <p css={principalEventDescription}>
              Rota das Eólicas Offshore: para onde os ventos sopram?
              </p>
            </div>

            <div>
              <div css={principalEvent}>
                <span>15h15</span>
                <p>Natal Energy Expo/Business</p>
              </div>

              <p css={principalEventDescription}>
              Rota do Gás Natural: combustível para a transição
              </p>
            </div>

            <div css={event}>
              <span>16h00</span>
              <p>Coffee Break</p>
            </div>
            
            <div>
              <div css={principalEvent}>
                <span>17h00</span>
                <p>Natal Energy Talks – Fórum C-Level</p>
              </div>

              <p css={principalEventDescription}>
              Segurança Energética e Transição Climática: na rota da COP30
              </p>
            </div>

            <div css={event}>
              <span>18h15</span>
              <p>Entrega dos Prêmios EVEx Brasil 2024 Personalidades do Ano</p>
            </div>
            <div css={event}>
              <span>18h30</span>
              <p>Coquetel</p>
            </div>
            <div css={event}>
              <span>19h30</span>
              <p>Encerramento do Primeiro Dia</p>
            </div>

            <h4 css={title}>Programação Paralela</h4>

            <div>
              <div css={principalEvent}>
                <span>14h00</span>
                <p>Natal Energy Academy</p>
              </div>

              <p css={principalEventDescription}>
              Apresentações de Trabalhos Acadêmicos e Científicos
              </p>
            </div>

          </div>
        </div>
      </Container>
    </section>
        <section>
        <Container fluid className="px-0">
          <div css={div}></div>
          <Container fluid>
            <Row>
              <Col xs={12} lg={6} css={bgColumnTitle} className="px-0">
                <div css={agendaTitle}>
                  <h2>Dia 04 de Julho</h2>
                  <h3>Horário de Brasília</h3>
                </div>
              </Col>
              <Col xs={0} lg={3} css={bgColumn} className="px-0"></Col>
              <Col xs={0} lg={3} css={bgColumn} className="px-0"></Col>
            </Row>
          </Container>
        </Container>
  
        <Container fluid className="px-0">
          <div css={container}>
            <div css={schedule}>
              <h4 css={title}>Programação Principal</h4>
  
              <div>
                <div css={principalEvent}>
                  <span>09h00</span>
                  <p>Natal Energy Expo/Business</p>
                </div> 
                <p css={principalEventDescription}>
                Rota do Nordeste: potencial para liderar a transição energética
                </p>
              </div>

              <div css={event}>
                <span>10h00</span>
                <p>Coffe Break</p>
              </div>

              <div>
                <div css={principalEvent}>
                  <span>10h30</span>
                  <p>Natal Energy MasterClasses</p>
                </div>
                <p css={principalEventDescription}>
                Rota do Mercado Livre de Energia: presente e futuro do consumidor
                </p>
              </div>

              <div>
                <div css={principalEvent}>
                  <span>11h30</span>
                  <p>Natal Energy Talks</p>
                </div>
                <p css={principalEventDescription}>
                Rota da Eletrificação da Economia: inovações e soluções sustentáveis
                </p>
              </div>

              <div css={event}>
                <span>12h30</span>
                <p>Almoço</p>
              </div>

              <div>
                <div css={principalEvent}>
                  <span>14h00</span>
                  <p>Natal Energy Talks</p>
                </div>
                <p css={principalEventDescription}>
                Rota do Biogás e Biometano: como abastecer o futuro?
                </p>
              </div>

              <div>
                <div css={principalEvent}>
                  <span>15h15</span>
                  <p>Natal Energy MasterClasses</p>
                </div>
                <p css={principalEventDescription}>
                Rota dos Investimentos Verdes: financiamento para tecnologias de baixo carbono
                </p>
              </div>

              <div css={event}>
                <span>16h30</span>
                <p>Coffee Break</p>
              </div>

              <div>
                <div css={principalEvent}>
                  <span>17h00</span>
                  <p>Natal Energy Expo/Business</p>
                </div>
                <p css={principalEventDescription}>
                Rota da Descarbonização: oportunidades rumo a uma economia verde
                </p>
              </div>

              <div>
                <div css={principalEvent}>
                  <span>18h15</span>
                  <p>Encerramento do evento</p>
                </div>
              </div>

              <h4 css={title}>Programação Paralela</h4>

              <div>
                <div css={principalEvent}>
                  <span>09h00</span>
                  <p>Natal Energy Academy</p>
                </div>
                <p css={principalEventDescription}>
                Apresentações de Trabalhos Acadêmicos e Científicos
                </p>
              </div>
  

  
            </div>
          </div>
        </Container>
        
      </section>
      <img src={BgOrange} css={imgOrange} />
   </div>
  );
};

export default AgendaHorario;
