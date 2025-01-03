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
  element5
} from "../assets/styles-br/agenda-horario.styles";
import { Link } from "gatsby";

const AgendaHorario = ({ agendaSelecionada }) => {

  console.log('agendaSelecionada', agendaSelecionada)

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
                <p>BOAS-VINDAS</p>
              </div>

              <p css={principalEventDescription}>
                <b>Caio César Cavalcanti</b><br/>
                Presidente do EVEx
              </p>
              <p css={principalEventDescription}>
                <b>Silvio Torquato</b><br/>
                Secretário de Desenvolvimento Econômico do Estado do Rio Grande do Norte
              </p>
            </div>

            <div>
              <div css={principalEvent}>
                <span>09h40</span>
                <p>Natal Energy Experience <i style={{letterSpacing: '-2px'}}> --</i> Abertura com Autoridades</p>
              </div>

              <p css={principalEventDescription}>
              <b>Transição Energética Justa e Industrialização Verde: na rota ibero-latino-americana</b>
              </p>
            </div>

            <div css={participantsContainer}>
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
            </div>

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
            <div>
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
            </div>

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
                <b>Rota do Hidrogênio Verde: produção, regulação e certificação </b>
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
                <p className="participant_name">Eduardo Rossi</p>
                <p className="participant_role">
                Conselheiro de Administração da CCEE – Câmara de Comercialização de Energia Elétrica
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Maria João Rolim</p>
                <p className="participant_role">
                Sócia do Rolim Goulart Cardoso Advogados 
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Paulo Prunzel</p>
                <p className="participant_role">
                Engenheiro de Processo com Especialização em Transição Energética – Petrobras 
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Fernanda Delgado – Moderadora </p>
                <p className="participant_role">
                Diretora Executiva da ABIHV – Associação Brasileira da Indústria do Hidrogênio Verde 
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
                <p>NATAL ENERGY TALKS – ENTREVISTA COM CEO</p>
              </div>

              <p css={principalEventDescription}>
             <b>Transição Energética Justa e Industrialização Verde: o papel da CEMIG</b>
              </p>
            </div>
            <div css={participantsContainer}>
              <div className="participant">
                <p className="participant_name">Reynaldo Passanezi</p>
                <p className="participant_role">
                CEO da CEMIG – Companhia Energética de Minas Gerais 
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Rodrigo Polito – Moderador</p>
                <p className="participant_role">
                Jornalista Especializado no Setor de Energia – Lead Specialist da PSR
                </p>
              </div>
            </div>



            <div>
              <div css={principalEvent}>
                <span>14h30</span>
                <p>Natal Energy MasterClasses</p>
              </div>

              <p css={principalEventDescription}>
             <b>Rota das Eólicas Offshore: para onde os ventos sopram?</b>
              </p>
            </div>
            <div css={participantsContainer}>
              <div className="participant">
                <p className="participant_name">Matheus Noronha</p>
                <p className="participant_role">
                Head de Energia Eólica Offshrore da ABEEólica – Associação Brasileira de Energia Eólica e Novas Tecnologias 
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Hugo Fonseca</p>
                <p className="participant_role">
                Coordenador de Desenvolvimento Energético do Estado do Rio Grande do Norte
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Solange David</p>
                <p className="participant_role">
                Chair Women in Energy do CIGRE Internacional  
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Mario González</p>
                <p className="participant_role">
                Coordenador do Grupo Creation/UFRN – Universidade Federal do Rio Grande do Norte  
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Daniel Faro</p>
                <p className="participant_role">
                Gerente Geral de Geração Renovável da Petrobras
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Nayara Machado – Moderadora</p>
                <p className="participant_role">
                Jornalista da epbr
                </p>
              </div>
            </div>

            <div css={event}>
              <span>15h45</span>
              <p>Coffee Break</p>
            </div>

            <div>
              <div css={principalEvent}>
                <span>16h15</span>
                <p>Natal Energy Expo/Business</p>
              </div>

              <p css={principalEventDescription}>
              <b>Rota do Gás Natural e Biometano: combustíveis para a transição</b>
              </p>
            </div>
            <div css={participantsContainer}>
              <div className="participant">
                <p className="participant_name">Heloísa Borges</p>
                <p className="participant_role">
                Diretora de Estudos do Petróleo, Gás e Biocombustíveis da EPE – Empresa de Pesquisa Energética  
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Renata Isfer</p>
                <p className="participant_role">
                Presidente de ABiogás – Associação Brasileira do Biogás 
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Marina Melo</p>
                <p className="participant_role">
                Diretora Presidente da POTIGÁS – Companhia Potiguar de Gás 
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Luiz Gavazza</p>
                <p className="participant_role">
                Presidente da Bahiagás – Companhia de Gás da Bahia
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Larissa Dantas</p>
                <p className="participant_role">
                Gerente de Relações Institucionais da 3R Petroleum 
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Gustavo De Marchi – Moderador </p>
                <p className="participant_role">
                Consultor Jurídico da FGV Energia  
                </p>
              </div>          
            </div>

            <div css={event}>
              <span>17h00</span>
              <p>Coffee Break</p>
            </div>
            
            <div>
              <div css={principalEvent}>
                <span>17h30</span>
                <p>Natal Energy Talks – Fórum C-Level</p>
              </div>

              <p css={principalEventDescription}>
                  <b>Segurança Energética e Transição Climática: na rota da COP30</b>
              </p>
            </div>
            <div css={participantsContainer}>
              <div className="participant">
                <p className="participant_name">André Pepitone</p>
                <p className="participant_role">
                Diretor Executivo Financeiro de Itaipu Binacional   
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Nelson Lage</p>
                <p className="participant_role">
                Presidente da ADENE – Agência para a Energia de Portugal
                </p>
              </div>          
              <div className="participant">
                <p className="participant_name">Wander Azevedo</p>
                <p className="participant_role">
                Diretor de Comercialização de Energia da ENBPar – Empresa Brasileira de Participações em Energia Nuclear e Binacional
                </p>
              </div>          
              <div className="participant">
                <p className="participant_name">Thiago Ivanoski</p>
                <p className="participant_role">
                Diretor de Estudos Econômico-Energéticos e Ambientais da EPE – Empresa de Pesquisa Energética
                </p>
              </div>          
              <div className="participant">
                <p className="participant_name">Rodrigo Polito – Moderador</p>
                <p className="participant_role">
                Jornalista Especializado no Setor de Energia – Lead Specialist da PSR 
                </p>
              </div>          
            </div>

            <div css={event}>
              <span>18h30</span>
              <p>Coquetel powered by (re)energisa</p>
            </div>
            <div css={event}>
              <span>20h30</span>
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
                  <p>Natal Energy MasterClass</p>
                </div> 
                <p css={principalEventDescription}>
                  <b>How to Ensure Sustainable Land-use while enhancing Renewable Energy Production</b>
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
                  <p className="participant_name">Maria João Rolim – Moderadora</p>
                  <p className="participant_role">
                  Sócia do Rolim Goulart Cardoso Advogados   
                  </p>
                </div>
              </div>

              <div>
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
              </div>

              <div css={event}>
                <span>10h45</span>
                <p>Coffe Break</p>
              </div>

              <div>
                <div css={principalEvent}>
                  <span>11h15</span>
                  <p>Natal Energy Talks</p>
                </div>
                <p css={principalEventDescription}>
                <b>Rota do Mercado Livre de Energia: abertura, desafios e oportunidades</b> 
                </p>
              </div>
              <div css={participantsContainer}>
                <div className="participant">
                  <p className="participant_name">Fernado Mosna</p>
                  <p className="participant_role">
                  Diretor da ANEEL – Agência Nacional de Energia Elétrica    
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Gerusa Magalhães</p>
                  <p className="participant_role">
                  Vice-Presidente do Conselho de Administração da CCEE – Câmara de Comercialização de Energia Elétrica    
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Camila Schoti</p>
                  <p className="participant_role">
                  Diretora Executiva de Marketing & Growth da (re)energisa    
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Bernardo Sicsú – Moderador </p>
                  <p className="participant_role">
                  Vice-Presidente de Estratégia da ABRACEEL – Associação Brasileira dos Comercializadores de Energia   
                  </p>
                </div>
              </div>


              <div>
                <div css={principalEvent}>
                  <span>12h30</span>
                  <p>ENTREGA DO PRÊMIO EVEX BRASIL PERSONALIDADE DO ANO</p>
                </div>
              </div>
              <div css={participantsContainer}>
                <div className="participant">
                  <p className="participant_name">Fátima Bezerra – Personalidade Homenageada </p>
                  <p className="participant_role">
                  Governadora do Estado do Rio Grande do Norte    
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Elbia Gannoum – Apresentadora</p>
                  <p className="participant_role">
                  Presidente da ABEEólica e Membro do Conselho de Desenvolvimento Econômico e Social Sustentável (CDESS) da Presidência da República do Brasil     
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
                <span>13h00</span>
                <p>Intervalo para Almoço</p>
              </div>

              <div>
                <div css={principalEvent}>
                  <span>14h30</span>
                  <p>Natal Energy Expo/Business</p>
                </div>
                <p css={principalEventDescription}>
                <b>Rota da Descarbonização e Eletrificação: rumo a uma economia Net Zero </b>
                </p>
              </div>
              <div css={participantsContainer}>
                <div className="participant">
                  <p className="participant_name">Luís Barroso</p>
                  <p className="participant_role">
                  CEO da MOBI.E, Entidade Gestora da Rede de Mobilidade Elétrica de Portugal    
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Marina Alves</p>
                  <p className="participant_role">
                  Diretora de Estratégia, Políticas e Projetos da ADENE – Agência para a Energia de Portugal     
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Rosana Santos</p>
                  <p className="participant_role">
                  Diretora Executiva do Instituto E+ Transição Energética  
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Karine Fragoso</p>
                  <p className="participant_role">
                  Gerente Geral de Petróleo, Gás, Energias e Naval da Firjan SENAI  
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Rodrigo Polito – Moderador </p>
                  <p className="participant_role">
                  Jornalista Especializado no Setor de Energia – Lead Specialist da PSR   
                  </p>
                </div>
              </div>

              <div css={event}>
                <span>15h40</span>
                <p>Coffee Break</p>
              </div>

              <div>
                <div css={principalEvent}>
                  <span>16h00</span>
                  <p>Natal Energy Talks</p>
                </div>
                <p css={principalEventDescription}>
                <b>Rota da Geração Distribuída: inovações e modelos de negócios</b>
                </p>
              </div>
              <div css={participantsContainer}>
                <div className="participant">
                  <p className="participant_name">Lorena Roosevelt </p>
                  <p className="participant_role">
                  Gestora do Polo SEBRAE de Energias Renováveis    
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Aurélien Maudonnet</p>
                  <p className="participant_role">
                  CEO da Helexia Brasil    
                  </p>
                </div>
                {/* <div className="participant">
                  <p className="participant_name">Marina Meyer</p>
                  <p className="participant_role">
                  Diretora Jurídica do INEL – Instituto Nacional de Energia Limpa     
                  </p>
                </div> */}
                <div className="participant">
                  <p className="participant_name">Maria João Rolim – Moderadora </p>
                  <p className="participant_role">
                  Sócia do Rolim Goulart Cardoso Advogados   
                  </p>
                </div>
              </div>
           

              <div>
                <div css={principalEvent}>
                  <span>17h00</span>
                  <p>Natal Energy Talks</p>
                </div>
                <p css={principalEventDescription}>
                <b>Rota do Nordeste Brasileiro: potencial para liderar a transição energética justa e verde</b>
                </p>
              </div>
              <div css={participantsContainer}>
                <div className="participant">
                  <p className="participant_name">José Aldemir Freire</p>
                  <p className="participant_role">
                  Diretor de Planejamento do Banco do Nordeste   
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Dirceu Simabucuru</p>
                  <p className="participant_role">
                  Diretor de ESG e Sustentabilidade da CDL Natal     
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
                  <span>18h15</span>
                  <p>Encerramento do evento</p>
                </div>
              </div>

              <h4 css={title}>Programação Paralela</h4>

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
              </div>
  

  
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
