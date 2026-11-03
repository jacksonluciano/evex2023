/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/react";
import { Container, Col, Row } from "react-bootstrap";
import Pattern from "@/images/2026/pattern.svg"
import RedBalloonSVG from '@/images-br/2026/red-balloon.svg'
import agendaStar from "@/images/2026/star.svg"
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
  EditionDescription,
  mobileHour,
  subTitle,
  localBreak,
  mibelBreak,
  hat
} from "../assets/styles/agenda-horario.styles";
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
                <span><img src={agendaStar} alt="Star" /> Dia 1</span>
                <h3>INTEGRAÇÃO, MERCADOS E INFRAESTRUTURAS</h3>
                <span>03 de Novembro de 2026</span>
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
                <span>CREDENCIAMENTO</span>
              </div>
            </Col>
        </Container>
      
        <Container>           
          <div css={timeBlock}>
           <div className="hour">
              <span>09:30</span>
           </div>
           <div className="event">   

            <h2><span css={mobileHour}>09:30</span> Abertura com lideranças e autoridades</h2>
            <div className="participantsContainer">
              <div className="participant">
                <p className="participant_bullet">
                  • Boas Vindas
                </p>
                <span css={hat}>Boas Vindas</span>
                <p className="participant_name">Caio César Cavalcanti</p>
                <p className="participant_role">
                CEO e Fundador do EVEx – Energy Virtual Experience
                </p>
              </div> 
              <div className="participant">
                <span css={hat}>Saudação Institucional</span>
                <p className="participant_name">Samanda Alves</p>
                <p className="participant_role">
                Senadora eleita pelo Rio Grande do Norte, Brasil
                </p>
              </div>                
              <div className="participant">
                <span css={hat}>DISCURSO DE ABERTURA</span>
                <p className="participant_name">Alexandre Miguel Santos</p>
                <p className="participant_role">
                Diretor-Geral de Energia e Geologia de Portugal
                </p>
              </div>             
            </div>

            <h5 css={subTitle}>PAINEL DE ABERTURA</h5>

            <div className="participantsContainer">
              <div className="participant">
                <p className="participant_bullet">
                  • O Pulsar da Integração Energética Transatlântica
                </p>
                 <p className="participant_name">Pedro Verdelho</p>
                <p className="participant_role">
                Presidente da ERSE e do CEER
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Nelson Lage</p>
                <p className="participant_role">
                Presidente da ADENE
                </p>
              </div>                       
              <div className="participant">
                <p className="participant_name">Alexandre Ramos</p>
                <p className="participant_role">
                Presidente da Companhia Energética de Minas Gerais – CEMIG
                </p>
              </div>                        
              <div className="participant">
                <p className="participant_name">Ludimila Lima</p>
                <p className="participant_role">
                Diretora-Substituta da ANEEL
                </p>
              </div>                        
              <div className="participant">
                <p className="participant_name">Gerusa Côrtes</p>
                <p className="participant_role">
                Diretora de Operação de Mercado da CCEE
                </p>
              </div>                        
              <div className="participant">
                <p className="participant_name" style={{color: '#126092'}}>Maria João Rolim – Moderadora</p>
                <p className="participant_role">
                Embaixadora do EVEx
                </p>
              </div>             
            </div>

           </div>
          </div>    
        </Container>

        <Container>           
          <div css={timeBlock}>
           <div className="hour">
              <span>10:35</span>
           </div>
           <div className="event">   

            <h2> <span css={mobileHour}>10:35 </span>PRÊMIO EVEx LISBOA 2026 E HOMENAGENS ESPECIAIS</h2>

            <div className="participantsContainer">
              <div className="participant">
                <p className="participant_name">Pedro Verdelho</p>
                <p className="participant_role">
                Personalidade do Ano da Península Ibérica
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">EDP</p>
                <p className="participant_role">
                Homenagem especial pelos 50 anos de história e 
30 anos de presença no Brasil
                </p>
              </div>             
              <div className="participant">
                <p className="participant_name">Raimundo Carreiro – Embaixador do Brasil em Portugal</p>
                <p className="participant_role">
                Homenagem especial pela relevante contribuição na integração
diplomática e cooperação energética bilateral 
entre Brasil e Portugal
                </p>
              </div>             
              <div className="participant">
                <p className="participant_name">Rodrigo Ferreira</p>
                <p className="participant_role">
                Personalidade do Ano da América Latina
                </p>
              </div>             
              <div className="participant">
                <p className="participant_name">ANEEL</p>
                <p className="participant_role">
                Homenagem especial pelos 30 anos de história
                </p>
              </div>                      
            </div>

           </div>
          </div>    
        </Container>

        <Container>
              <Col xs={12} lg={12} className="px-0">
              <div css={pinkBreak}>
                <span>11:05</span>
                <span>Pausa para café</span>
              </div>
            </Col>
        </Container>   

         <Container>           
          <div css={timeBlock}>
           <div className="hour">
              <span>11:20</span>
           </div>
           <div className="event">   

            <h2><span css={mobileHour}>11:20</span>O Movimento da Flexibilidade</h2>
            <h3>Armazenamento, integração das renováveis, financiamento e segurança do sistema</h3>

            <div className="participantsContainer">
              <div className="participant">
                <p className="participant_name">Teresa Ponce de Leão</p>
                <p className="participant_role">
                Presidente do LNEG
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Nuno Pignatelli</p>
                <p className="participant_role">
                Vice-Presidente da Associação Portuguesa da Energia
                </p>
              </div>                      
              <div className="participant">
                <p className="participant_name">Fernanda De Paula</p>
                <p className="participant_role">
                Sócia do Fernanda De Paula Advocacia e Consultoria Jurídica
                </p>
              </div>             
              <div className="participant">
                <p className="participant_name">Vítor Santos</p>
                <p className="participant_role">
                Professor Catedrático do ISEG Universidade de Lisboa
                </p>
              </div>                          
              <div className="participant">
                <p className="participant_name">Alessandra Torres</p>
                <p className="participant_role">
                Presidente da ABRAGEL
                </p>
              </div>                          
              <div className="participant">
                <p className="participant_name" style={{color: '#126092'}}>Alice Khouri – Moderadora</p>
                <p className="participant_role">
                Head of Legal da Helexia Portugal
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
                <span>Almoço</span>
              </div>
            </Col>
        </Container> 

         <Container>
              <Col xs={12} lg={12} className="px-0">
              <div css={localBreak}>
                <span>ARENA CEMIG | PULSAÇÃO DA NOVA ENERGIA</span>
              </div>
            </Col>
        </Container> 

         <Container>           
          <div css={timeBlock}>
           <div className="hour">
              <span>14:00</span>
           </div>
           <div className="event">   

            <h2><span css={mobileHour}>14:00</span>Da Transição à Transformação</h2>

            <div className="participantsContainer">
              <div className="participant">
                <p className="participant_name">João Galamba</p>
                <p className="participant_role">
                Economista, ex-Ministro das Infraestruturas e ex-Secretário de Estado Adjunto e da Energia de Portugal
                </p>
              </div>                    
            </div>
           </div>
          </div>    
        </Container> 

         <Container>           
          <div css={timeBlock}>
           <div className="hour">
              <span>14:20</span>
           </div>
           <div className="event">   

            <h2><span css={mobileHour}>14:20</span>O Pulso Global das Renováveis</h2>

            <div className="participantsContainer">
              <div className="participant">
                <p className="participant_name">Ben Backwell</p>
                <p className="participant_role">
                CEO do Global Wind Energy Council – GWEC
                </p>
              </div>                    
            </div>
           </div>
          </div>    
        </Container> 

         <Container>           
          <div css={timeBlock} style={{marginBottom:'0'}}>
           <div className="hour">
              <span>14:40</span>
           </div>
           <div className="event">   

            <h2><span css={mobileHour}>14:40</span>A Experiência do MIBEL</h2>
            <h3>Minerais Críticos e Estratégicos na Autonomia da Transição</h3>

            <div className="participantsContainer">
              <div className="participant">
                <p className="participant_name">Pedro Amaral Jorge</p>
                <p className="participant_role">
                Presidente do OMIP e do OMIE
                </p>
              </div>                    
            </div>
            <div className="participantsContainer">
               <div className="participant">
                <p className="participant_name" style={{color: '#126092'}}>Nayara Machado– Moderadora</p>
                <p className="participant_role">
                Jornalista e editora da agência eixos
                </p>
              </div>                       
            </div>
           </div>
          </div>
           <div css={mibelBreak}>
                <span>FÓRUM BRASIL–MIBEL</span>
                <p>Mercados e Infraestruturas para a Nova Energia</p>

              </div>    
        </Container> 

        <Container>           
          <div css={timeBlock}>
           <div className="hour">
              <span>15:03</span>
           </div>
           <div className="event">   

            <h2><span css={mobileHour}>15:03</span>Assinatura de Protocolo de Colaboração Técnica entre o OMIP e a CCEE</h2>

           </div>
          </div>    
        </Container>  

        <Container>           
          <div css={timeBlock}>
           <div className="hour">
              <span>15:15</span>
           </div>
           <div className="event">   

            <h2><span css={mobileHour}>15:15</span>O Ritmo dos Mercados</h2>
            <h3>Abertura, comercialização, liquidez e novas plataformas</h3>

            <div className="participantsContainer">
              <div className="participant">
                <p className="participant_name">Ricardo Nunes</p>
                <p className="participant_role">
                Chief Strategy Officer do OMIP
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Rodrigo Ferreira</p>
                <p className="participant_role">
                Presidente-Executivo da ABRACEEL
                </p>
              </div>             
              <div className="participant">
                <p className="participant_name">Sérgio Lopes Cabral</p>
                <p className="participant_role">
                Vice-Presidente de Comercialização da CEMIG
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Gerusa Côrtes</p>
                <p className="participant_role">
                Diretora de Operação de Mercado da CCEE
                </p>
              </div>             
              <div className="participant">
                <p className="participant_name">Carlos Moreno</p>
                <p className="participant_role">
                Membro da Direção da ACEMEL
                </p>
              </div>
              <div className="participant">
                <p className="participant_name" style={{color: '#126092'}}>Silla Motta – Moderadora</p>
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
                <span>16:30</span>
                <span>Coffee Break</span>
              </div>
            </Col>
        </Container> 

        <Container>           
          <div css={timeBlock}>
           <div className="hour">
              <span>17:00</span>
           </div>
           <div className="event">   

            <h2><span css={mobileHour}>17:00</span>O Movimento das Infraestruturas</h2>
            <h3>Redes, investimentos, resiliência e segurança energética</h3>

            <div className="participantsContainer">
              <div className="participant">
                <p className="participant_name">Filipe Matias Santos</p>
                <p className="participant_role">
                Diretor Jurídico da ERSE
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Marlos Costa de Andrade</p>
                <p className="participant_role">
                Diretor-Presidente da ENBPar
                </p>
              </div>             
               <div className="participant">
                <p className="participant_name">Alessandra Amaral</p>
                <p className="participant_role">
                Presidente da ADELAT
                </p>
              </div>
              <div className="participant">
                <p className="participant_name" style={{color: '#126092'}}>Guilherme Chrispim – Moderador</p>
                <p className="participant_role">
                Apresentador do Diário de Uma Vida Elétrica – DUVE
                </p>
              </div>                
                          
            </div>

           </div>
          </div>    
        </Container>   

         <Container>           
          <div css={timeBlock}>
           <div className="hour">
              <span>18:00</span>
           </div>
           <div className="event">   

            <h2><span css={mobileHour}>18:00</span>ENCERRAMENTO DO PRIMEIRO DIA</h2>

           </div>
          </div>    
        </Container>  


        {/* <Container>           
          <div css={timeBlock}>
           <div className="hour">
              <span>18:35</span>
           </div>
           <div className="event">   

            <h2><span css={mobileHour}>18:35</span>Assinatura de Manifestação de Interesse de Cooperação Mútua entre a ADENE e o CEAR/UFPB</h2>

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

            <h2><span css={mobileHour}>18:45</span>Em Tom de Reconhecimento: Prêmio EVE<i>x</i> Brasil 2026</h2>

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
        </Container>  */}

      </Container>

    </section>
      <section style={{display: agendaSelecionada === 4 && 'block'}}>
       <Container fluid className="px-0">
        {/* <div css={div}></div> */}
        <Container fluid>
          <Row>
            <Container>
              <Col xs={12} lg={12} css={bgColumnTitle} className="px-0">
              <div css={agendaTitle}>
                <span><img src={agendaStar} alt="Star" /> Dia 2</span>
                <h3>MOLÉCULAS, RECURSOS E NOVAS DEMANDAS</h3>
                <span>04 de Novembro de 2026</span>
              </div>
            </Col>
            </Container>
          </Row>
        </Container>
      </Container>

        {/* AGENDA 02 */}
        <Container fluid className="px-0" style={{position: 'relative'}}>
        {/* <Container>
              <Col xs={12} lg={12} className="px-0">
              <div css={pinkBreak}>
                <span>08:30</span>
                <span>Welcome Coffee & Networking </span>
              </div>
            </Col>
        </Container> */}
      
        <Container>           
          <div css={timeBlock} style={{marginBottom:'0'}}>
           <div className="hour">
              <span>09:30</span>
           </div>
           <div className="event">   

            <h2><span css={mobileHour}>09:30</span>ABERTURA DO SEGUNDO DIA</h2>
            <h5 css={subTitle}>PALESTRA MAGNA</h5>

            <p className="participant_bullet">
                  • Insegurança Jurídica
                </p>

            <div className="participantsContainer">
              <div className="participant">
                 <p className="participant_name">Décio Freire</p>
                <p className="participant_role">
                Sócio do DFA – Décio Freire Advogados
                </p>
              </div>           
            </div>

           </div>
          </div>
          <div css={mibelBreak}>
                <span>FÓRUM BRASIL–MIBEL</span>
                <p>Mercados e Infraestruturas para a Nova Energia</p>
              </div>        
        </Container>

        <Container>           
          <div css={timeBlock}>
           <div className="hour">
              <span>09:25</span>
           </div>
           <div className="event">   

            <h2><span css={mobileHour}>09:25</span>O Pulsar das Novas Moléculas</h2>
            <h3>Combustíveis de baixa emissão de carbono</h3>

            <div className="participantsContainer">
              <div className="participant">
                 <p className="participant_name">Symone Araújo</p>
                <p className="participant_role">
                Diretora da ANP
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">André Pina</p>
                <p className="participant_role">
                Senior Director, Hydrogen & Data Centers Strategy and Business Development, EDP Renewables
                </p>
              </div>             
              <div className="participant">
                <p className="participant_name">Marise Grinstrein</p>
                <p className="participant_role">
                Diretora Administrativa da GASMIG
                </p>
              </div>             
              <div className="participant">
                <p className="participant_name">Magno Bernardo</p>
                <p className="participant_role">
                Assessor de Tecnologia de Gás Natural da BAHIAGÁS
                </p>
              </div>             
              <div className="participant">
                <p className="participant_name" style={{color: '#126092'}}>Fernando Alves Pinto – Moderador</p>
                <p className="participant_role">
                Vogal Executivo da ENSE
                </p>
              </div>              
            </div>

           </div>
          </div>    
        </Container>

         <Container>
              <Col xs={12} lg={12} className="px-0">
              <div css={pinkBreak}>
                <span>10:45</span>
                <span>Pausa  para café</span>
              </div>
            </Col>
        </Container>

        <Container>           
          <div css={timeBlock}>
           <div className="hour">
              <span>11:00</span>
           </div>
           <div className="event">   

            <h2><span css={mobileHour}>11:00</span>O Ritmo do Gás Natural</h2>
            <h3>Segurança do abastecimento, infraestrutura e competitividade</h3>

            <div className="participantsContainer">
              <div className="participant">
                 <p className="participant_name">Alexandre Fernandes</p>
                <p className="participant_role">
                Presidente da ENSE
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Daniela Santos</p>
                <p className="participant_role">
                Diretora de Gás Natural do IBP
                </p>
              </div>             
              <div className="participant">
                <p className="participant_name">Marina Melo</p>
                <p className="participant_role">
                  Diretora-Presidente da POTIGÁS
                </p>
              </div>                                       
              <div className="participant">
                <p className="participant_name">Luiz Gavazza</p>
                <p className="participant_role">
                  Diretor-Presidente da BAHIAGÁS
                </p>
              </div>                                       
              <div className="participant">
                <p className="participant_name">Paulo Preto dos Santos</p>
                <p className="participant_role">
                  Diretor Executivo da Dourogás Renovável
                </p>
              </div>                                       
               <div className="participant">
                <p className="participant_name" style={{color: '#126092'}}>Karine Fragoso – Moderadora</p>
                <p className="participant_role">
                Gerente-Geral de Petróleo, Gás, Energias e Naval da Firjan SENAI
                </p>
              </div>             
            </div>

           </div>
          </div>    
        </Container>

         <Container>
              <Col xs={12} lg={12} className="px-0">
              <div css={pinkBreak}>
                <span>12:15</span>
                <span>Almoço</span>
              </div>
            </Col>
        </Container>

         <Container>
              <Col xs={12} lg={12} className="px-0">
              <div css={localBreak}>
                <span>ARENA CEMIG | PULSAÇÃO DA NOVA ENERGIA</span>
              </div>
            </Col>
        </Container> 

        <Container>           
          <div css={timeBlock}>
           <div className="hour">
              <span>13:45</span>
           </div>
           <div className="event">   

            <h2><span css={mobileHour}>13:45</span>O Pulsar da Comunicação</h2>

            <div className="participantsContainer">
              <div className="participant">
                 <p className="participant_name">Cristiana Kumaira</p>
                <p className="participant_role">
                Diretora de Comunicação e Marketing da CEMIG
                </p>
              </div>  
              <div className="participant">
                 <p className="participant_name">Raquel Mendes</p>
                <p className="participant_role">
                Head of European Affairs & Senior Director da EDP
                </p>
              </div>  
               <div className="participant">
                <p className="participant_name" style={{color: '#126092'}}>André Cabrita-Mendes – Moderador</p>
                <p className="participant_role">
                Jornalista do Jornal Económico
                </p>
              </div>            
            </div>

           </div>
          </div>    
        </Container>

        {/* <Container>           
          <div css={timeBlock}>
           <div className="hour">
              <span>14:15</span>
           </div>
           <div className="event">   

            <h2><span css={mobileHour}>14:15</span>Caminhos para a Abertura Total:</h2>
            <h3>Uma Construção Coletiva entre CCEE, Comercializadores e Consumidores</h3>

            <div className="participantsContainer">
              <div className="participant">
                 <p className="participant_name">Camila Schoti</p>
                <p className="participant_role">
                Diretora de Operações de Varejo da (re)energisa 
                </p>
              </div>             
              <div className="participant">
                 <p className="participant_name">Marcos Pimentel</p>
                <p className="participant_role">
                Superintendente de Compra e Venda de Energia no Atacado da Companhia Energética de Minas Gerais – CEMIG
                </p>
              </div>             
              <div className="participant">
                 <p className="participant_name">Victor Santos</p>
                <p className="participant_role">
                Gerente de Gestão de Energia da Companhia de Água e Esgotos da Paraíba – CAGEPA
                </p>
              </div>             
              <div className="participant">
                <p className="participant_name" style={{color: '#126092'}}>André Cabrita-Mendes – Moderador</p>
                <p className="participant_role">
                Jornalista do Jornal Económico
                </p>
              </div>                               
            </div>

           </div>
          </div>    
        </Container> */}

        <Container>           
          <div css={timeBlock}>
           <div className="hour">
              <span>14:20</span>
           </div>
           <div className="event">   

            <h2><span css={mobileHour}>14:20</span>A Nova Mobilidade</h2>

            <div className="participantsContainer">
              <div className="participant">
                 <p className="participant_name">Sílvia Amaral</p>
                <p className="participant_role">
                Administradora da MOBI.E
                </p>
              </div>                                      
            </div>

           </div>
          </div>    
        </Container>

         <Container>           
          <div css={timeBlock} style={{marginBottom: '0'}}>
           <div className="hour">
              <span>14:40</span>
           </div>
           <div className="event">   

            <h2><span css={mobileHour}>14:40</span>Data Centers e a Nova Demanda da Energia</h2>

            <div className="participantsContainer">
              <div className="participant">
                 <p className="participant_name">Maria Sales Luís</p>
                <p className="participant_role">
                Associada da área de Energia & Recursos Naturais da VdA
                </p>
              </div>
              <div className="participant">
                <p className="participant_name" style={{color: '#126092'}}>Rossana Fonseca – Moderadora</p>
                <p className="participant_role">
                Sócia do NDF – Neves, De Rosso e Fonseca Advogados
                </p>
              </div>                                       
            </div>

           </div>
          </div>
          <div css={mibelBreak}>
            <span>SESSÃO ESPECIAL LNEG-EPE</span>
          </div>      
        </Container>

         <Container>           
          <div css={timeBlock}>
           <div className="hour">
              <span>15:03</span>
           </div>
           <div className="event">   

            <h2><span css={mobileHour}>15:03</span>O Movimento dos Recursos Estratégicos</h2>
            <h3>Minerais Críticos e Estratégicos na Autonomia da Transição</h3>

            <div className="participantsContainer">
              <div className="participant">
                 <p className="participant_name">Sofia Simões</p>
                <p className="participant_role">
                Investigadora Principal e Coordenadora da Unidade de Economia de Recursos do LNEG
                </p>
              </div>  
              <div className="participant">
                 <p className="participant_name">Werner Farkatt</p>
                <p className="participant_role">
                Diretor-Geral do IDEMA-RN
                </p>
              </div>  
              <div className="participant">
                 <p className="participant_name">Maria João Rolim</p>
                <p className="participant_role">
                Sócia do Rolim Goulart Cardoso Advogados
                </p>
              </div>  
              <div className="participant">
                 <p className="participant_name">Carla Achão</p>
                <p className="participant_role">
                Superintendente de Estudos Econômicos e Energéticos da EPE
                </p>
              </div>  
              <div className="participant">
                 <p className="participant_name">Cácia Pimentel</p>
                <p className="participant_role">
                Diretora do Mackenzie Integridade
                </p>
              </div>  
               <div className="participant">
                <p className="participant_name" style={{color: '#126092'}}>Caio César Cavalcanti – Moderador</p>
                <p className="participant_role">
                CEO e Fundador do EVEx
                </p>
              </div>            
            </div>

           </div>
          </div>    
        </Container>

        <Container>
              <Col xs={12} lg={12} className="px-0">
              <div css={pinkBreak} style={{marginBottom: '0'}}>
                <span>16:00</span>
                <span>Coffee Break</span>
              </div>
            </Col>
             <div css={mibelBreak}>
            <span>PAINEL DE ENCERRAMENTO | SESSÃO ESPECIAL ADENE-EPE</span>
          </div>   
        </Container>

        <Container>           
          <div css={timeBlock}>
           <div className="hour">
              <span>16:30</span>
           </div>
           <div className="event">   

            <h2><span css={mobileHour}>16:30</span>O Ritmo da Transição</h2>
            <h3>Da estratégia à implementação</h3>

            <div className="participantsContainer">
              <div className="participant">
                 <p className="participant_name">Jorge Barata Marques</p>
                <p className="participant_role">
                Diretor de Formação, Informação e Educação da ADENE
                </p>
              </div>             
              {/* <div className="participant">
                 <p className="participant_name">Representante do IDAE</p>
                <p className="participant_role">
                Instituto para la Diversificación y Ahorro de la Energía
                </p>
              </div>              */}
              <div className="participant">
                 <p className="participant_name">Carla Achão</p>
                <p className="participant_role">
                Superintendente de Estudos Econômicos e Energéticos da EPE
                </p>
              </div>             
              <div className="participant">
                 <p className="participant_name">Susana Camacho</p>
                <p className="participant_role">
                Administradora-Delegada da S.ENERGIA – Agência Regional de Energia para os concelhos do Barreiro, Moita, Montijo e Alcochete
                </p>
              </div>             
               <div className="participant">
                <p className="participant_name" style={{color: '#126092'}}>Filipe Sampaio – Moderador</p>
                <p className="participant_role">
                CEO do Instituto de Regulação, Inovação e Sustentabilidade – IRIS
                </p>
              </div>                           
            </div>

           </div>
          </div>    
        </Container>

        <Container>           
          <div css={timeBlock} style={{marginBottom: '80px'}}>
           <div className="hour">
              <span>17:30</span>
           </div>
           <div className="event">   

            <h2><span css={mobileHour}>17:30</span>ENCERRAMENTO DO EVEx LISBOA 2026</h2>
            <h3>Assinatura de Protocolo de Cooperação entre o EVEx e a Universidade Autónoma de Lisboa</h3>

           </div>
          </div>    
        </Container>

      </Container>
        <img src={Pattern} style={{width: '100%'}} />
      </section>
   </div>
   
  );
};

export default AgendaHorario;
