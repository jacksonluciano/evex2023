/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/react";
import { Container, Col, Row } from "react-bootstrap";
import BgOrange from "@/images-br/agenda/orange-elements-02.png"
import Element from "@/images-br/agenda/element.png"
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
  content,
  element1,
  element2,
  element3,
  element4,
  element5,
  under
} from "../assets/styles-br/agenda-horario.styles";
import { Link } from "gatsby";

const AgendaHorario = ({ agendaSelecionada }) => {

  console.log('agendaSelecionada', agendaSelecionada)

  const i = 0

  return (
   <div id="agenda" css={content}>
     <section style={{display: agendaSelecionada === 3 && 'block'}}>
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

      <Container fluid className="px-0" style={{position: 'relative'}}>
        
        <div css={container} >
          <div css={schedule}>
            <h4 css={title}>Programação Principal</h4>
            <div css={event}>
              <span>08h30</span>
              <p>Credenciamento</p>
            </div>

            {/* <div css={event}>
              <span>09h15</span>
              <p>Boas-Vindas</p>
            </div> */}

            <div>
              <div css={principalEvent}>
                <span>09h15</span>
                <p>Natal Energy Experience | Abertura com Lideranças e Autoridades </p><br/><br/>
              </div>

              <div css={event}>
                <p css={under}>Cerimônia de Abertura</p>
              </div>

              <p css={principalEventDescription}>
                <b>Boas-Vindas</b><br/>
              </p>

              <p css={principalEventDescription}>
                <b>Caio César Cavalcanti</b><br/>
                Presidente do EVEx
              </p>
              <p css={principalEventDescription}>
                <b>Fátima Bezerra</b><br/>
                Governadora do Estado do Rio Grande do Norte
              </p>

              <div css={event}>
                <p css={under}>Painel de Abertura</p>
              </div>

              <p css={principalEventDescription}>
              <b>Transição Energética e Ação Climática: sinergias ibero-americanas rumo à COP30</b><br/><br/>
              </p>
                <div css={participantsContainer}>
                  <div className="participant">
                    <p className="participant_name">Representante do Ministério de Minas e Energia do Brasil</p>
                    <p className="participant_role"></p>
                  </div>
                  <div className="participant">
                    <p className="participant_name">Representante do Ministério do Ambiente e Energia de Portugal</p>
                    <p className="participant_role"></p>
                  </div>
                  <div className="participant">
                  <p className="participant_name">Alexandre Ramos</p>
                  <p className="participant_role">
                  Presidente do Conselho de Administração da CCEE – Câmara de Comercialização de Energia Elétrica
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">André Pepitone</p>
                  <p className="participant_role">
                  Diretor Executivo Financeiro de Itaipu Binacional
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">João Hélio Cavalcanti</p>
                  <p className="participant_role">
                    Diretor Técnico do SEBRAE-RN
                  </p>
                </div>
                <div className="participant">
                    <p className="participant_name">José Aldemir Freire</p>
                    <p className="participant_role">Diretor de Planejamento do Banco do Nordeste do Brasil</p>
                </div>
                <div className="participant">
                <p className="participant_name">Maria João Rolim – Moderadora</p>
                <p className="participant_role">
                Sócia do Rolim Goulart Cardoso Advogados
                </p>
              </div>
              </div>
            </div>

            {/* <div>
              <div css={principalEvent}>
                <span>09h40</span>
                <p>Natal Energy Experience <i style={{letterSpacing: '-2px'}}> --</i> Abertura com Autoridades</p>
              </div>

              <p css={principalEventDescription}>
              <b>Transição Energética Justa e Industrialização Verde: na rota ibero-latino-americana</b>
              </p>
            </div> */}

            {/* <div css={participantsContainer}>
              <div className="participant">
                <p className="participant_name">Alexandre Ramos</p>
                <p className="participant_role">
                Presidente da CCEE – Câmara de Comercialização de Energia Elétrica
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Nelson Lage</p>
                <p className="participant_role">
                Presidente da ADENE – Agência para a Energia de Portugal
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">André Pepitone</p>
                <p className="participant_role">
                Diretor Executivo Financeiro de Itaipu Binacional
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Wander Azevedo</p>
                <p className="participant_role">
                Diretor de Comercialização de Energia da ENBPar, empresa pública vinculada ao Ministério de Minas e Energia do Brasil
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">José Ferreira de Melo Neto</p>
                <p className="participant_role">
                Diretor Superintendente do SEBRAE-RN
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">José Aldemir Freire</p>
                <p className="participant_role">
                Diretor de Planejamento do Banco do Nordeste do Brasil
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Maria João Rolim – Moderadora</p>
                <p className="participant_role">
                Sócia do Rolim Goulart Cardoso Advogados
                </p>
              </div>
            </div> */}

            {/* <div css={participantsContainer}>
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
            </div> */}
              {/* <div>
                <div css={principalEvent}>
                  <span>10h40</span>
                  <p>Assinatura de protocolos de cooperação</p>
                </div>

                <p css={principalEventDescription}>
                <b>Entre ADENE – Agência para a Energia e Polo SEBRAE de Energias Renováveis</b>
                </p>
                <p css={principalEventDescription}>
                <b>Entre Governo do Estado do Rio Grande do Norte e ABIHV – Associação Brasileira da Indústria do Hidrogênio Verde </b>
                </p>
              </div> */}

            <div css={event}>
              <span>11h00</span>
              <p>Coffee Break powered by POTIGÁS</p>
            </div>

            <div>
              <div css={principalEvent}>
                <span>11h30</span>
                <p>Natal Energy Expo/Business</p>
              </div>

              <p css={principalEventDescription}>
                <b>Curtailment, Armazenamento de Energia e Data Centers</b>
              </p>
            </div>

            <div css={participantsContainer}>
              <div className="participant">
                <p className="participant_name">• Exposição de Estudo: Armazenamento de Energia</p>
                <p className="participant_name">Manuel Casquiço</p>
                <p className="participant_role">
                Diretor de Indústria e Transição Energética da ADENE – Agência para a Energia de Portugal
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">•	Exposição de Case: Data Centers</p>
                <p className="participant_name">Vital Neto</p>
                <p className="participant_role">
                Conselheiro de Administração da CCEE – Câmara de Comercialização de Energia Elétrica 
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">•	Debate</p>
                <p className="participant_name">Solange David</p>
                <p className="participant_role">
                Chairperson do Women in Energy do CIGRE Internacional 
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Francisco Silva</p>
                <p className="participant_role">
                Diretor Técnico Regulatório da ABEEólica – Associação Brasileira de Energia Eólica e Novas Tecnologias 
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Marília Rabassa</p>
                <p className="participant_role">
                Head de Consultoria e Sócia da CELA – Clean Energy Latin America 
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Maurício Godoi  – Moderador </p>
                <p className="participant_role">
                Subeditor do CanalEnergia – Informa Markets 
                </p>
              </div>
            </div>
            

            {/* <h5 css={eventTypeTitle}>Exposição de Cases</h5>

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
            </div> */}

            <div css={event}>
              <span>12h30</span>
              <p>Intervalo para Almoço</p>
            </div>


            <div>
              <div css={principalEvent}>
                <span>14h00</span>
                <p>Natal Energy MasterClass | Apagão Ibérico 2025</p>
              </div>

            </div>
            <div css={participantsContainer}>
              <div className="participant">
                <p className="participant_name">Filipe Matias Santos</p>
                <p className="participant_role">
                Diretor Jurídico da ERSE – Entidade Reguladora dos Serviços Energéticos de Portugal 
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">José Marcelo Costa – Moderador</p>
                <p className="participant_role">
                Procurador do Estado do Rio Grande do Norte
                </p>
              </div>
            </div>



            <div>
              <div css={principalEvent}>
                <span>14h30</span>
                <p>Natal Energy Talks</p>
              </div>

              <p css={principalEventDescription}>
             <b>Segurança Energética, Diversificação da Matriz e Transição Climática: o que esperar da COP30?</b>
              </p>
            </div>
            <div css={participantsContainer}>
              <div className="participant">
                <p className="participant_name">Teresa Ponce de Leão</p>
                <p className="participant_role">
                Presidente do LNEG – Laboratório Nacional de Energia e Geologia de Portugal 
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Thiago Ivanoski </p>
                <p className="participant_role">
                Diretor de Estudos Econômico-Energéticos e Ambientais da EPE – Empresa de Pesquisa Energética
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Adriana Waltrick (a confirmar)</p>
                <p className="participant_role">
                CEO da SPIC Brasil  
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Diogo Mac Cord (a confirmar)</p>
                <p className="participant_role">
                Vice-Presidente de Estratégia, Novos Negócios e Transformação Digital da COPEL
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Maria João Rolim</p>
                <p className="participant_role">
                Sócia do Rolim Goulart Cardoso Advogados  
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Natália Bezutti – Moderadora</p>
                <p className="participant_role">
                Jornalista e Sócia da MegaWhat
                </p>
              </div>
             
            </div>

            <div css={event}>
              <span>15h30</span>
              <p>Coffee Break</p>
            </div>

            <div>
              <div css={principalEvent}>
                <span>16h00</span>
                <p>Natal Energy Talks</p>
              </div>

              <p css={principalEventDescription}>
              <b>Reforma e Modernização do Setor Elétrico Brasileiro</b>
              </p>
            </div>
            <div css={participantsContainer}>
              <div className="participant">
                <p className="participant_name">Agnes da Costa</p>
                <p className="participant_role">
                Diretora da ANEEL – Agência Nacional de Energia Elétrica  
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Reynaldo Passanezi</p>
                <p className="participant_role">
                CEO da CEMIG – Companhia Energética de Minas Gerais 
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Marisete Pereira</p>
                <p className="participant_role">
                Presidente da ABRAGE – Associação Brasileira de Empresas Geradoras de Energia Elétrica 
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Wander Azevedo </p>
                <p className="participant_role">
                Diretor de Comercialização de Energia, Projetos Estratégicos e Estudos de Mercado da ENBPar – Empresa Brasileira de Participações em Energia Nuclear e Binacional
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Ricardo Simabuku</p>
                <p className="participant_role">
                Conselheiro de Administração da CCEE – Câmara de Comercialização de Energia Elétrica 
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Wagner Ferreira – Moderador </p>
                <p className="participant_role">
                Sócio do Caputo, Bastos e Serra Advogados  
                </p>
              </div>          
            </div>

            {/* <div css={event}>
              <span>17h00</span>
              <p>Coffee Break</p>
            </div> */}
            
            <div>
              <div css={principalEvent}>
                <span>17h00</span>
                <p>Fórum C-Level</p>
              </div>

              <p css={principalEventDescription}>
                  <b>Gás Natural: papel na transição e integração energética regional</b>
              </p>
            </div>
            <div css={participantsContainer}>
              <div className="participant">
                <p className="participant_name">Pietro Mendes</p>
                <p className="participant_role">
                Secretário de Petróleo, Gás Natural e Biocombustíveis do Ministério de Minas e Energia do Brasil   
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Luiz Gavazza</p>
                <p className="participant_role">
                CEO da Bahiagás – Companhia de Gás da Bahia
                </p>
              </div>          
              <div className="participant">
                <p className="participant_name">Marina Melo</p>
                <p className="participant_role">
                CEO da Potigás – Companhia Potiguar de Gás 
                </p>
              </div>          
              <div className="participant">
                <p className="participant_name">Carlos Camargo</p>
                <p className="participant_role">
                CEO da Gasmig – Companhia de Gás de Minas Gerais 
                </p>
              </div>          
              <div className="participant">
                <p className="participant_name">Felipe Maciel – Moderador</p>
                <p className="participant_role">
                Diretor Executivo da Agência Eixos  
                </p>
              </div>          
            </div>

            <div css={principalEvent}>
              <span>18h00</span>
              <p>Entrega dos Prêmios EVEx Brasil 2025 </p>
            </div>

            <div css={participantsContainer}>
              <div className="participant">
                <p className="participant_name">• Personalidade Política Setorial do Ano</p>
                <p className="participant_name">Veneziano Vital do Rêgo</p>
                <p className="participant_role">
                Senador da República e Presidente da Frente Parlamentar de Recursos Naturais e Energia
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">•	Representatividade Setorial do Ano</p>
                <p className="participant_name">Fernanda Delgado</p>
                <p className="participant_role">
                CEO da ABIHV – Associação Brasileira da Indústria do Hidrogênio Verde 
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">•	Comunicação Setorial do Ano</p>
                <p className="participant_name">Felipe Maciel</p>
                <p className="participant_role">
                Diretor Executivo da Agência Eixos 
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">•	Entidade Setorial do Ano</p>
                <p className="participant_role">
                ADENE – Agência para a Energia 
                </p>
              </div>
            </div>

            <div css={event}>
              <span>18h30</span>
              <p>Coquetel powered by EVEx – Energy Virtual Experience</p>
            </div>
            <div css={event}>
              <span>20h00</span>
              <p>Encerramento do primeiro dia</p>
            </div>

          </div>
        </div>
        <img src={Element} css={element1} />
        <img src={Element} css={element2} />
        <img src={Element} css={element3} />
      </Container>
    </section>
        <section style={{display: agendaSelecionada === 4 && 'block'}}>
        <Container fluid className="px-0">
          <div css={div}></div>
          <Container id="quatro" fluid>
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
  
        <Container fluid className="px-0" style={{position: 'relative'}}>
          <div css={container}>
            <div css={schedule}>
              <h4 css={title}>Programação Principal</h4>
  
              <div>
                <div css={principalEvent}>
                  <span>09h00</span>
                  <p>Natal Energy Talks</p>
                </div> 
                <p css={principalEventDescription}>
                  <b>Integração Energética e Resiliência Climática: fortalecendo a transição ibero-americana</b>
                </p>
              </div>
              <div css={participantsContainer}>
                <div className="participant">
                  <p className="participant_name">Nelson Lage</p>
                  <p className="participant_role">
                  Presidente da ADENE – Agência para a Energia de Portugal   
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Alessandra Amaral</p>
                  <p className="participant_role">
                  Presidente Executiva da ADELAT – Asociación de Distribuidoras de Energía Eléctrica Latinoamericanas   
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Clauber Leite</p>
                  <p className="participant_role">
                  Diretor de Energia Sustentável e Bioeconomia do Instituto E+ Transição Energética    
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Angela Livino</p>
                  <p className="participant_role">
                  Consultora de Energia da OLADE – Organización Latinoamericana de Energía   
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Rossana Fonseca  – Moderadora</p>
                  <p className="participant_role">
                  Sócia do NDF Advogados   
                  </p>
                </div>
              </div>

              {/* <div>
                <div css={principalEvent}>
                  <span>09h45</span>
                  <p>Natal Energy Talks</p>
                </div> 
                <p css={principalEventDescription}>
                  <b>Rota das Infraestruturas Energéticas: modernização e resiliência frente a situações climáticas adversas</b>
                </p>
              </div>
              <div css={participantsContainer}>
                <div className="participant">
                  <p className="participant_name">Wagner Ferreira</p>
                  <p className="participant_role">
                  Diretor Institucional e Jurídico da ABRADEE – Associação Brasileira de Distribuidores de Energia Elétrica    
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Luiz Eduardo Diniz Araújo</p>
                  <p className="participant_role">
                  Sócio do Wald, Antunes, Vita e Blattner Advogados    
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Roberta Nanini Rolim</p>
                  <p className="participant_role">
                  Diretora de Regulação da CEMIG – Companhia Energética de Minas Gerais    
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Rossana Fonseca – Moderadora </p>
                  <p className="participant_role">
                  Sócia do Escritório NDF Advogados     
                  </p>
                </div>
              </div> */}

              <div css={event}>
                <span>10h00</span>
                <p>Coffe Break</p>
              </div>

              <div>
                <div css={principalEvent}>
                  <span>10h30</span>
                  <p>Natal Energy Talks</p>
                </div>
                <p css={principalEventDescription}>
                <b>Mercado Livre de Energia: abertura total, inovação e integração com geração distribuída</b> 
                </p>
              </div>
              <div css={participantsContainer}>
                <div className="participant">
                  <p className="participant_name">Gerusa Côrtes</p>
                  <p className="participant_role">
                  Vice-Presidente do Conselho de Administração da CCEE – Câmara de Comercialização de Energia Elétrica    
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Filipe Matias Santos</p>
                  <p className="participant_role">
                  Diretor Jurídico da ERSE – Entidade Reguladora dos Serviços Energéticos de Portugal    
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Frederico Rodrigues</p>
                  <p className="participant_role">
                  Vice-Presidente Executivo da ABRACEEL – Associação Brasileira dos Comercializadores de Energia    
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Camila Schotti</p>
                  <p className="participant_role">
                  Diretora Executiva de Marketing e Growth da (re)energisa    
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Silla Motta – Moderadora </p>
                  <p className="participant_role">
                  CEO da Donna Lamparina   
                  </p>
                </div>
              </div>


              <div>
                <div css={principalEvent}>
                  <span>11h30</span>
                  <p>Natal Energy Expo/Business</p>
                </div>
                <p css={principalEventDescription}>
                <b>Descarbonização, Eletromobilidade e Eficiência Energética: experiências ibero-americanas</b> 
                </p>
              </div>
              <div css={participantsContainer}>
                <div className="participant">
                  <p className="participant_name">Elisa Bastos</p>
                  <p className="participant_role">
                  Diretora de Assuntos Corporativos do ONS – Operador Nacional do Sistema Elétrico    
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Luís Barroso</p>
                  <p className="participant_role">
                  CEO da MOBI.E, Entidade Gestora da Rede de Mobilidade Elétrica de Portugal    
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Manuel Casquiço</p>
                  <p className="participant_role">
                  Diretor de Indústria e Transição Energética da ADENE – Agência para a Energia de Portugal     
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Roberto Wagner</p>
                  <p className="participant_role">
                  Presidente do CREA-RN – Conselho Regional de Engenharia e Agronomia do Rio Grande do Norte    
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Leandro Xingó  – Moderador</p>
                  <p className="participant_role">
                  Diretor de Gestão Corporativa e Sustentabilidade da ENBPar – Empresa Brasileira de Participações em Energia Nuclear e Binacional     
                  </p>
                </div>
              </div>

              {/* <div>
                <div css={principalEvent}>
                  <span>11h30</span>
                  <p>Natal Energy Talks</p>
                </div>
                <p css={principalEventDescription}>
                Rota da Eletrificação da Economia: inovações e soluções sustentáveis
                </p>
              </div> */}

              <div css={event}>
                <span>12h30</span>
                <p>Intervalo para Almoço</p>
              </div>

              <div>
                <div css={principalEvent}>
                  <span>14h00</span>
                  <p>Natal Energy MasterClass</p>
                </div>
                <p css={principalEventDescription}>
                <b>Segurança de Mercado</b>
                </p>
              </div>
              <div css={participantsContainer}>
                <div className="participant">
                  <p className="participant_name">Eduardo Rossi</p>
                  <p className="participant_role">
                  Conselheiro de Administração da CCEE – Câmara de Comercialização de Energia Elétrica   
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Caio Alves – Moderador </p>
                  <p className="participant_role">
                  Head de Regulação do Rolim Goulart Cardoso Advogados    
                  </p>
                </div>
              </div>

              <div>
                <div css={principalEvent}>
                  <span>14h30</span>
                  <p>Natal Energy Talks</p>
                </div>
                <p css={principalEventDescription}>
                <b>Hidrogênio Verde: projetos, entraves e avanços da indústria</b>
                </p>
              </div>
              <div css={participantsContainer}>
                <div className="participant">
                  <p className="participant_name">Fernanda Delgado </p>
                  <p className="participant_role">
                  CEO da ABIHV – Associação Brasileira da Indústria do Hidrogênio Verde   
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Hugo Fonseca</p>
                  <p className="participant_role">
                  Secretário-Adjunto de Desenvolvimento Econômico do Rio Grande do Norte   
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Ligia Schlittler</p>
                  <p className="participant_role">
                  Sócia do TozziniFreire Advogados   
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Maria João Rolim</p>
                  <p className="participant_role">
                  Sócia do Rolim Goulart Cardoso Advogados  
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Gabriel Chiappini – Moderador </p>
                  <p className="participant_role">
                  Jornalista da Agência Eixos    
                  </p>
                </div>
              </div>

              <div css={event}>
                <span>15h30</span>
                <p>Coffee Break</p>
              </div>

              <div>
                <div css={principalEvent}>
                  <span>16h00</span>
                  <p>Natal Energy Talks</p>
                </div>
                <p css={principalEventDescription}>
                <b>Eólicas Offshore: cenário atual e perspectivas futuras  </b>
                </p>
              </div>
              <div css={participantsContainer}>
                <div className="participant">
                  <p className="participant_name">Mario González </p>
                  <p className="participant_role">
                  Coordenador do Creation/UFRN – Universidade Federal do Rio Grande do Norte                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Matheus Noronha </p>
                  <p className="participant_role">
                  Head de Energia Eólica Offshore da ABEEólica – Associação Brasileira de Energia Eólica e Novas Tecnologias    
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Diogo Pignataro </p>
                  <p className="participant_role">
                  Presidente do INTÉ – Instituto Nacional de Transição Energética    
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Solange David – Moderadora </p>
                  <p className="participant_role">
                  Chairperson do Women in Energy do CIGRE Internacional   
                  </p>
                </div>
              </div>
           

              <div>
                <div css={principalEvent}>
                  <span>17h00</span>
                  <p>Natal Energy Expo/Business </p>
                </div>
                <p css={principalEventDescription}>
                <b>Combustíveis do Futuro: biogás, biometano, SAF e novos negócios de baixo carbono</b>
                </p>
              </div>
              <div css={participantsContainer}>
                <div className="participant">
                  <p className="participant_name">Fernando Alves Pinto</p>
                  <p className="participant_role">
                  Vogal Executivo do Conselho de Administração da ENSE – Entidade Nacional para o Setor Energético de Portugal   
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Yuri Tisi</p>
                  <p className="participant_role">
                  Presidente Executivo da ABREN – Associação Brasileira de Recuperação Energética de Resíduos      
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Rudinei Miranda</p>
                  <p className="participant_role">
                  Presidente da ANER – Associação Nacional das Entidades Representativas de Energias Renováveis      
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Giovane Rosa</p>
                  <p className="participant_role">
                  CEO da Gás Orgânico
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Representante da Bahiagás</p>
                  <p className="participant_role">
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Moderador a definir</p>
                  <p className="participant_role">

                  </p>
                </div>
              </div>

              <div>
                <div css={principalEvent}>
                  <span>18h00</span>
                  <p>Encerramento do evento</p>
                </div>
              </div>

              {/* <h4 css={title}>Programação Paralela</h4>

              <div>
                <div css={principalEvent}>
                  <span>13h000</span>
                  <p>Natal Energy Academy</p>
                </div>
                <p css={principalEventDescription}>
                Apresentações de Trabalhos Acadêmicos e Científicos
                </p>
              </div>
              <div css={participantsContainer}>
                <div className="participant">
                  <p className="participant_name">Atualizações sobre a regulação de CCUS no Brasil: implicações para o ambiental offshore</p>
                  <p className="participant_role">
                  Hirdan Katarina de Medeiros Costa  
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Do EOR aos Hubs – a visão da Petrobras para CCUS no Brasil</p>
                  <p className="participant_role">
                  Roberto Evelim Penha Borges     
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Créditos de Carbono e Sustentabilidade: Implementação dos ODS nas Políticas de Mitigação Climática Usando MAUT</p>
                  <p className="participant_role">
                  Jéssyk Daiana Bianconi   
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Diplomacia Científica e a atuação brasileira no Painel Intergovernamental sobre Mudança do Clima (1990 – 2022)</p>
                  <p className="participant_role">
                  Daniel Farati de Oliveira Silva   
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">ANÁLISE COMPARATIVA ENTRE A EXPERIÊNCIA BRASILEIRA E CHINESA NA ALOCAÇÃO DE DIREITOS DE PROPRIEDADE NA EXPANSÃO DA ENERGIA EÓLICA: PLANEJAMENTO ESTATAL E CONTROLE, LIMITE ESPACIAL E TEMPORAL DE TERRAS ARRENDADAS</p>
                  <p className="participant_role">
                  Maria Eduarda Oliveria    
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">The decarbonization challenges over the mining sector: Hydrogen and its derivates contribution in the Brazilian Scenario</p>
                  <p className="participant_role">
                  Vinicius Andrade dos Santos   
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Transição Energética e Agricultura: o papel do nitrogênio na crise climática</p>
                  <p className="participant_role">
                  Helena Marinho Ketzer Yacoub   
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Transformação mineral das baterias de lítio: a economia circular como caminho para a industrialização verde na mobilidade elétrica</p>
                  <p className="participant_role">
                  Mariana Melo Botelho   
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Avaliação da produção de hidrogênio eletrolítico utilizando um sistema de microgeração híbrido eólico-solar</p>
                  <p className="participant_role">
                  Alice Bastos Holanda   
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Densidade de Potência Eólica a partir de ensembles de Modelos Climáticos Regionais no Nordeste do Brasil para o passado recente e futuro</p>
                  <p className="participant_role">
                  Augusto de Rubim Costa Gurgel   
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Mulheres no setor eólico offshore: Barreiras e oportunidades</p>
                  <p className="participant_role">
                  Andressa Santiso   
                  </p>
                </div>
              </div> */}
  

  
            </div>
          </div>
          <img src={Element} css={element4} />
          <img src={Element} css={element5} />
        </Container>
        
      </section>
      <img src={BgOrange} css={imgOrange} />
   </div>
  );
};

export default AgendaHorario;
