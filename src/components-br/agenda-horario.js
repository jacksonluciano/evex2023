/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/react";
import { Container, Col, Row } from "react-bootstrap";
import BgBlueimg from "@/images-br/2026/bluebanner-img.svg"
import RedBalloonSVG from '@/images-br/2026/red-balloon.svg'
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
  under,
  pinkBreak,
  timeBlock,
  blueBanner,
  seventhEditionBannerSection,
  redBallon,
  buyTicketWrapper,
  buyTicketLink,
  bannerWrapper,
  bannerStyle,
  RedBalloonWrapper,
  EditionDescription
} from "../assets/styles-br/agenda-horario.styles";
import { Link } from "gatsby";

const AgendaHorario = ({ agendaSelecionada }) => {

  // console.log('agendaSelecionada', agendaSelecionada)

  const i = 0

  return (
   <div id="agenda" css={content}>
     <section style={{display: agendaSelecionada === 3 && 'block'}}>
      <Container fluid className="px-0">
        {/* <div css={div}></div> */}
        <Container fluid>
          <Row>
            <Container>
              <Col xs={12} lg={12} css={bgColumnTitle} className="px-0">
              <div css={agendaTitle}>
                <span>Dia 1</span>
                <h3>O PULSAR DA ESTRATÉGIA E DA LIDERANÇA </h3>
                <span>1 de Julho de 2026</span>
              </div>
            </Col>
            </Container>

            

          </Row>
        </Container>
      </Container>

      <Container fluid className="px-0" style={{position: 'relative'}}>

       <Container>
              <Col xs={12} lg={12} className="px-0">
              <div css={pinkBreak}>
                <span>08:45</span>
                <span>Credenciamento e Welcome Coffe</span>
              </div>
            </Col>
        </Container>
      
        <Container>           
          <div css={timeBlock}>
           <div className="hour">
              <span>09:15</span>
           </div>
           <div className="event">   

            <h2>Abertura com lideranças e autoridades</h2>
            <div className="participantsContainer">
              <div className="participant">
                <p className="participant_bullet">• Boas Vindas</p>
                <p className="participant_name">Lucas Ribeiro (a confirmar)</p>
                <p className="participant_role">
                Governador do Estado da Paraíba
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Caio César Cavalcanti</p>
                <p className="participant_role">
                CEO e Fundador do EVEx – Energy Virtual Experience
                </p>
              </div>             
            </div>

            <div className="participantsContainer">
              <div className="participant">
                <p className="participant_bullet">
                  • Pulsar Ibero-Americano: 
                  <span>Segurança e Independência Energética na Nova Era da Transição</span>
                </p>
                 <p className="participant_name">Veneziano Vital do Rêgo</p>
                <p className="participant_role">
                Senador e Presidente da Frente Parlamentar de Recursos Naturais e Energia
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Alexandre Fernandes</p>
                <p className="participant_role">
                Presidente da Entidade Nacional para o Setor Energético – ENSE, Portugal
                </p>
              </div>             
              <div className="participant">
                <p className="participant_name">André Pepitone</p>
                <p className="participant_role">
                Diretor Financeiro Executivo da Itaipu Binacional
                </p>
              </div>             
              <div className="participant">
                <p className="participant_name">Alexandre Ramos</p>
                <p className="participant_role">
                Presidente da Companhia Energética de Minas Gerais – CEMIG
                </p>
              </div>             
              <div className="participant">
                <p className="participant_name">Gerusa Côrtes</p>
                <p className="participant_role">
                Diretora de Operação de Mercado da Câmara de Comercialização de Energia Elétrica – CCEE
                </p>
              </div>             
              <div className="participant">
                <p className="participant_name">Maria João Rolim – Moderadora</p>
                <p className="participant_role">
                Embaixadora do EVEx – Energy Virtual Experience
                </p>
              </div>             
            </div>

           </div>
          </div>    
        </Container>

        <Container>           
          <div css={timeBlock}>
           <div className="hour">
              <span>11:00</span>
           </div>
           <div className="event">   

            <h2>O Pulsar da Matriz e das Baterias:</h2>
            <h3>Diversidade Energética, Fontes Híbridas e Flexibilidade do Sistema</h3>

            <div className="participantsContainer">
              <div className="participant">
                <p className="participant_name">Fernando Mosna</p>
                <p className="participant_role">
                Diretor da Agência Nacional de Energia Elétrica – ANEEL
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Marisete Pereira</p>
                <p className="participant_role">
                Presidente da Associação Brasileira das Empresas Geradoras de Energia Elétrica – ABRAGE
                </p>
              </div>             
              <div className="participant">
                <p className="participant_name">Alessandra Torres</p>
                <p className="participant_role">
                Presidente da Associação Brasileira de Geração de Energia Limpa – ABRAGEL
                </p>
              </div>             
              <div className="participant">
                <p className="participant_name">Rudinei Miranda</p>
                <p className="participant_role">
                Presidente da Associação Nacional das Entidades Representativas de Energias Renováveis – ANER
                </p>
              </div>             
              <div className="participant">
                <p className="participant_name">Fernanda De Paula</p>
                <p className="participant_role">
                Sócia do Fernanda De Paula Advocacia e Consultoria Jurídica
                </p>
              </div>             
              <div className="participant">
                <p className="participant_name">Silla Motta – Moderadora  </p>
                <p className="participant_role">
                CEO da Donna Lamparina
                </p>
              </div>             
            </div>

           </div>
          </div>    
        </Container>

        <Container>
              <Col xs={12} lg={12} className="px-0">
              <div css={pinkBreak}>
                <span>12:30</span>
                <span>Almoço de Networking</span>
              </div>
            </Col>
        </Container>   

         <Container>           
          <div css={timeBlock}>
           <div className="hour">
              <span>13:45</span>
           </div>
           <div className="event">   

            <h2>O Ritmo das Moléculas:</h2>
            <h3>Combustíveis de Baixa Emissão como Vetores para a Descarbonização dos Transportes</h3>

            <div className="participantsContainer">
              <div className="participant">
                <p className="participant_name">Gustavo De Marchi</p>
                <p className="participant_role">
                Presidente da Companhia de Gás de Minas Gerais – Gasmig
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Fernando Alves Pinto</p>
                <p className="participant_role">
                Vogal Executivo do Conselho de Administração da Entidade Nacional para o Setor Energético – ENSE, Portugal
                </p>
              </div>             
              <div className="participant">
                <p className="participant_name">Patrícia Lima Franco </p>
                <p className="participant_role">
                Coordenadora de Gás Natural Veicular da Companhia de Gás da Bahia – Bahiagás
                </p>
              </div>             
              <div className="participant">
                <p className="participant_name">Marcelo Martins</p>
                <p className="participant_role">
                Economista do Sindicato da Indústria de Fabricação de Álcool do Estado da Paraíba – Sindalcool-PB
                </p>
              </div>                          
              <div className="participant">
                <p className="participant_name">Nayara Machado – Moderadora </p>
                <p className="participant_role">
                Jornalista e Editora da Agência Eixos
                </p>
              </div>             
            </div>

           </div>
          </div>    
        </Container> 

         <Container>           
          <div css={timeBlock}>
           <div className="hour">
              <span>14:45</span>
           </div>
           <div className="event">   

            <h2>O Pulsar dos Investimentos:</h2>
            <h3>Visão de Mercado e a Estratégia dos Grandes Players na Transição</h3>

            <div className="participantsContainer">
              <div className="participant">
                <p className="participant_name">Robson Barbosa</p>
                <p className="participant_role">
                Secretário Executivo de Energia e Transição Energética do Governo da Paraíba
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Secretário Executivo de Energia e Transição Energética do Governo da Paraíba</p>
                <p className="participant_role">
                
                </p>
              </div>             
              <div className="participant">
                <p className="participant_name">Denise Delmiro – Moderadora</p>
                <p className="participant_role">
                Apresentadora do JPB1 da TV Cabo Branco – Afiliada Globo na Paraíba
                </p>
              </div>             
                          
            </div>

           </div>
          </div>    
        </Container> 

        <Container>
              <Col xs={12} lg={12} className="px-0">
              <div css={pinkBreak}>
                <span>16:00</span>
                <span>Coffee Break & Networking</span>
              </div>
            </Col>
        </Container> 

        <Container>           
          <div css={timeBlock}>
           <div className="hour">
              <span>16:30</span>
           </div>
           <div className="event">   

            <h2>O Ritmo da Indústria:</h2>
            <h3>Minerais Críticos e Estratégicos na Autonomia da Transição</h3>

            <div className="participantsContainer">
              <div className="participant">
                <p className="participant_name">Teresa Ponce de Leão</p>
                <p className="participant_role">
                Presidente do Laboratório Nacional de Energia e Geologia – LNEG, Portugal
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Maria João Rolim</p>
                <p className="participant_role">
                Sócia do Rolim Goulart Cardoso Advogados
                </p>
              </div>             
              <div className="participant">
                <p className="participant_name">Cácia Pimentel – Moderadora</p>
                <p className="participant_role">
                Diretora do Centro Mackenzie de Políticas Públicas e Políticas de Integridade
                </p>
              </div>             
                          
            </div>

           </div>
          </div>    
        </Container>   

         <Container>           
          <div css={timeBlock}>
           <div className="hour">
              <span>17:30</span>
           </div>
           <div className="event">   

            <h2>O Pulsar da Cooperação:</h2>
            <h3>Aliança Ibero-Americana no Combate à Pobreza Energética</h3>

            <div className="participantsContainer">
              <div className="participant">
                <p className="participant_name">Manuel Casquiço</p>
                <p className="participant_role">
                Diretor de Indústria e Transição Energética da ADENE – Agência para a Energia, Portugal
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Mariana Weiss</p>
                <p className="participant_role">
                Analista da Empresa de Pesquisa Energética – EPE, Brasil
                </p>
              </div>             
              <div className="participant">
                <p className="participant_name">Julián Cortés Oggero</p>
                <p className="participant_role">
                Investigador da RedPE – Red de Pobreza Energética, Chile
                </p>
              </div>             
              <div className="participant">
                <p className="participant_name">Hugo Lucas</p>
                <p className="participant_role">
                Diretor de Conhecimento, Desenvolvimento de Novos Modelos de Negócio e Competitividade do IDAE 
                (Instituto para la Diversificación y Ahorro de la Energía), Espanha
                </p>
              </div>                          
              <div className="participant">
                <p className="participant_name">Luiz Miranda – Moderador</p>
                <p className="participant_role">
                Fundador da EnergyC
                </p>
              </div>             
                          
            </div>

           </div>
          </div>    
        </Container>  


        <Container>           
          <div css={timeBlock}>
           <div className="hour">
              <span>18:35</span>
           </div>
           <div className="event">   

            <h2>Assinatura de Manifestação de Interesse de Cooperação Mútua entre a ADENE e o CEAR/UFPB</h2>

            <div className="participantsContainer">
              <div className="participant">
                <p className="participant_name">Bruno Veloso</p>
                <p className="participant_role">
                Vice-Presidente da ADENE – Agência para a Energia, Portugal
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Euler Macêdo</p>
                <p className="participant_role">
                Diretor do Centro de Energias Alternativas e Renováveis da Universidade Federal da Paraíba – CEAR/UFPB
                </p>
              </div>                                                            
            </div>
           </div>
          </div>    
        </Container>  

        <Container>           
          <div css={timeBlock}>
           <div className="hour">
              <span>18:45</span>
           </div>
           <div className="event">   

            <h2>Em Tom de Reconhecimento: Prêmio EVEx Brasil 2026</h2>

            <div className="participantsContainer">
              <div className="participant">
                <p className="participant_name">• Protagonismo em Regulação e Governança </p>
                <p className="participant_role">
                Agnes M. da Costa, Diretora da Agência Nacional de Energia Elétrica – ANEEL
                </p>
                <p className="participant_name">• Vanguarda em Planejamento e Inteligência Setorial  </p>
                <p className="participant_role">
                Vanguarda em Planejamento e Inteligência Setorial Empresa de Pesquisa Energética – EPE
                </p>
                <p className="participant_name">• Excelência em Gestão e Modernização Setorial   </p>
                <p className="participant_role">
                Daniel Slaviero, Presidente da Companhia Paranaense de Energia – Copel
                </p>
                <p className="participant_name">• Referência em Liderança e Impacto Regional    </p>
                <p className="participant_role">
                Luiz Gavazza, Diretor-Presidente da Companhia de Gás da Bahia – Bahiagás
                </p>
                <p className="participant_name">• Inovação em Comunicação Setorial     </p>
                <p className="participant_role">
                Flávia Fonseca de Albuquerque, Gerente Executiva de Comunicação Institucional da Câmara de Comercialização de Energia Elétrica – CCEE
                </p>
              </div>                                                            
            </div>
           </div>
          </div>    
        </Container>  

        <Container>
              <Col xs={12} lg={12} className="px-0">
              <div css={pinkBreak}>
                <span>19:30</span>
                <span>Coquetel de Celebração & Networking</span>
              </div>
            </Col>
        </Container> 

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
                  <p className="participant_name">Yuri Tisi</p>
                  <p className="participant_role">
                  Presidente Executivo da ABREN – Associação Brasileira de Recuperação Energética de Resíduos    
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Rossana Fonseca  – Moderadora</p>
                  <p className="participant_role">
                  Sócia do NDF Advogados   
                  </p>
                </div>
              </div>

              <div>
                <div css={principalEvent}>
                  <span>10h00</span>
                  <p>Entrega do Prêmio EVEx Brasil 2025</p>
                </div> 
              </div>
              <div css={participantsContainer}>
                <div className="participant">
                  <p className="participant_name">•	Entidade Setorial do Ano</p>
                  <p className="participant_role">
                  ADENE – Agência para a Energia     
                  </p>
                </div>
              </div>

              <div css={event}>
                <span>10h10</span>
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
                  <p className="participant_name">Filipe Matias Santos</p>
                  <p className="participant_role">
                  Diretor Jurídico da ERSE – Entidade Reguladora dos Serviços Energéticos de Portugal    
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Cesar Pereira</p>
                  <p className="participant_role">
                  Gerente Executivo de Regulação, Informações ao Mercado & Capacitação da CCEE – Câmara de Comercialização de Energia Elétrica    
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
                  <p className="participant_name">Williman Oliveira</p>
                  <p className="participant_role">
                  Presidente da APER – Associação Potiguar de Energias Renováveis    
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
                <b>Apagão Ibérico 2025</b>
                </p>
              </div>
              <div css={participantsContainer}>
                <div className="participant">
                  <p className="participant_name">Filipe Matias Santos</p>
                  <p className="participant_role">
                  Diretor Jurídico da ERSE – Entidade Reguladora dos Serviços Energéticos de Portugal   
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">José Marcelo Costa – Moderador </p>
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
                  <p className="participant_name">Werner Farkatt</p>
                  <p className="participant_role">
                  Presidente do IDEMA – Instituto de Desenvolvimento Sustentável e Meio Ambiente do Rio Grande do Norte  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Mario González </p>
                  <p className="participant_role">
                  Coordenador do Creation/UFRN – Universidade Federal do Rio Grande do Norte</p>
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
                  <p className="participant_name">Giovane Rosa</p>
                  <p className="participant_role">
                  CEO da Gás Orgânico     
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Magno Bernardo</p>
                  <p className="participant_role">
                  Assessor de Tecnologia de Gás Natural da Bahiagás – Companhia de Gás da Bahia      
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Amanda Gondim</p>
                  <p className="participant_role">
                  Coordenadora da Rede Brasileira de Bioquerosene e Hidrocarbonetos Sustentáveis para Aviação
                  </p>
                </div>
                <div className="participant">
                  <p className="participant_name">Leonardo Pivotto – Moderador</p>
                  <p className="participant_role">
                  Doutor em Desenvolvimento e Meio Ambiente e Docente do IFRN
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
          {/* <img src={Element} css={element4} />
          <img src={Element} css={element5} /> */}
        </Container>
        
      </section>
      {/* <img src={BgOrange} css={imgOrange} /> */}
     <div css={seventhEditionBannerSection}>
           <EditionDescription>
             <h1 className="event_name">Participe do EVEx Brasil 2026</h1>
             <RedBalloonWrapper>
               <img css={redBallon} src={RedBalloonSVG} />
             </RedBalloonWrapper>
             <div css={buyTicketWrapper}>
               <a
                 target="_blank" 
                 css={buyTicketLink} 
                 href={"https://www.sympla.com.br/evento/evex-brasil-2025-natal-energy-experience/2973088"}
               >
                 <p>Garanta sua participação</p>
               </a>
             </div>
             
           </EditionDescription>
           <div css={bannerWrapper}>
             <img css={bannerStyle} src={BgBlueimg}/>
           </div>
         </div>
   </div>
   
  );
};

export default AgendaHorario;
