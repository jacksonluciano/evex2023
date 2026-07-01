/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/react";
import { Container, Col, Row } from "react-bootstrap";
import BgBlueimg from "@/images-br/2026/bluebanner-img.svg"
import RedBalloonSVG from '@/images-br/2026/red-balloon.svg'
import agendaStar from "@/images-br/2026/star-agenda.svg"
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
  mobileHour
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
                <span><img src={agendaStar} alt="Star" /> Dia 1</span>
                <h3>O PULSAR DA ESTRATÉGIA E DA LIDERANÇA </h3>
                <span>01 de Julho de 2026</span>
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

            <h2><span css={mobileHour}>09:15</span> Abertura com lideranças e autoridades</h2>
            <div className="participantsContainer">
              <div className="participant">
                <p className="participant_bullet">• Boas Vindas</p>
                <p className="participant_name">Daniella Ribeiro</p>
                <p className="participant_role">
                Senadora da República pela Paraíba
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Caio César Cavalcanti</p>
                <p className="participant_role">
                CEO e Fundador do EVEx – Energy Virtual Experience
                </p>
              </div>             
              <div className="participant">
                <p className="participant_name">Jovânio Gomes da Silva</p>
                <p className="participant_role">
                Secretário de Estado da Infraestrutura e dos Recursos Hídricos da Paraíba
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

            <h2> <span css={mobileHour}>11:00</span>O Pulsar da Matriz e das Baterias:</h2>
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
              <span>14:00</span>
           </div>
           <div className="event">   

            <h2><span css={mobileHour}>14:00</span>O Ritmo das Moléculas:</h2>
            <h3>Combustíveis de Baixa Emissão como Vetores para a Descarbonização dos Transportes</h3>

            <div className="participantsContainer">
              <div className="participant">
                <p className="participant_name">Fernando Alves Pinto</p>
                <p className="participant_role">
                Vogal Executivo do Conselho de Administração da Entidade Nacional para o Setor Energético – ENSE, Portugal
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Welder Souza</p>
                <p className="participant_role">
                Gerente Comercial do Segmento Automotivo (GNV e Biometano) da Companhia de Gás de Minas Gerais – Gasmig
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
              <span>15:00</span>
           </div>
           <div className="event">   

            <h2><span css={mobileHour}>15:00</span>O Pulsar dos Investimentos:</h2>
            <h3>Visão de Mercado e a Estratégia dos Grandes Players na Transição</h3>

            <div className="participantsContainer">
              <div className="participant">
                <p className="participant_name">Robson Barbosa</p>
                <p className="participant_role">
                Secretário Executivo de Energia e Transição Energética do Governo da Paraíba
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Rudrigo Araújo</p>
                <p className="participant_role">
                Superintendente Estadual do Banco do Nordeste na Paraíba
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

            <h2><span css={mobileHour}>16:30</span>O Ritmo da Indústria:</h2>
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

            <h2><span css={mobileHour}>17:30</span>O Pulsar da Cooperação:</h2>
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
        </Container> 

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
                <h3>O PULSAR DAS TECNOLOGIAS E O RITMO DO MERCADO</h3>
                <span>02 de Julho de 2026</span>
              </div>
            </Col>
            </Container>
          </Row>
        </Container>
      </Container>

        {/* AGENDA 02 */}
        <Container fluid className="px-0" style={{position: 'relative'}}>
                 <Container>
              <Col xs={12} lg={12} className="px-0">
              <div css={pinkBreak}>
                <span>08:30</span>
                <span>Welcome Coffee & Networking </span>
              </div>
            </Col>
        </Container>
      
        <Container>           
          <div css={timeBlock}>
           <div className="hour">
              <span>09:00</span>
           </div>
           <div className="event">   

            <h2><span css={mobileHour}>09:00</span>O Ritmo do Futuro:</h2>
            <h3>Desafios Globais de ESG e Transição entre Dois Continentes</h3>

            <div className="participantsContainer">
              <div className="participant">
                 <p className="participant_name">Vital do Rêgo Filho</p>
                <p className="participant_role">
                Ministro-Presidente do Tribunal de Contas da União – TCU
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Thiago Prado</p>
                <p className="participant_role">
                Presidente da Empresa de Pesquisa Energética – EPE
                </p>
              </div>             
              <div className="participant">
                <p className="participant_name">Bruno Veloso</p>
                <p className="participant_role">
                Vice-Presidente da ADENE – Agência para a Energia, Portugal
                </p>
              </div>             
              <div className="participant">
                <p className="participant_name">Agnes M. da Costa</p>
                <p className="participant_role">
                Diretora da Agência Nacional de Energia Elétrica – ANEEL
                </p>
              </div>                          
              <div className="participant">
                <p className="participant_name">Rossana Fonseca – Moderadora</p>
                <p className="participant_role">
                Sócia do NDF – Neves, De Rosso e Fonseca Advogados
                </p>
              </div>             
            </div>

           </div>
          </div>    
        </Container>

        <Container>           
          <div css={timeBlock}>
           <div className="hour">
              <span>10:30</span>
           </div>
           <div className="event">   

            <h2><span css={mobileHour}>10:30</span>O Movimento Digital:</h2>
            <h3>IA, Redes Inteligentes e a Escalada dos Data Centers Sustentáveis</h3>

            <div className="participantsContainer">
              <div className="participant">
                 <p className="participant_name">Alessandra Amaral</p>
                <p className="participant_role">
                Diretora Executiva da Asociación de Distribuidoras de Energía Eléctrica Latinoamericanas – ADELAT
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Euler Macêdo</p>
                <p className="participant_role">
                Diretor do Centro de Energias Alternativas e Renováveis – CEAR/UFPB
                </p>
              </div>             
              {/* <div className="participant">
                <p className="participant_name">Representante da Energisa Paraíba</p>
                <p className="participant_role">
                </p>
              </div>                                        */}
              <div className="participant">
                <p className="participant_name">Caio Alves – Moderador</p>
                <p className="participant_role">
                Head de Regulação do Rolim Goulart Cardoso Advogados
                </p>
              </div>             
            </div>

           </div>
          </div>    
        </Container>

        <Container>           
          <div css={timeBlock}>
           <div className="hour">
              <span>11:30</span>
           </div>
           <div className="event">   

            <h2><span css={mobileHour}>11:30</span>O Pulsar do Nordeste:</h2>
            <h3>Protagonismo, Inovação e o DNA Paraibano na Vanguarda Energética</h3>

            <div className="participantsContainer">
              <div className="participant">
                 <p className="participant_name">André Pepitone</p>
                <p className="participant_role">
                Diretor Financeiro Executivo da Itaipu Binacional
                </p>
              </div>
              <div className="participant">
                <p className="participant_name">Maurício de Souza</p>
                <p className="participant_role">
                Diretor de TI, Relacionamento com Agentes e Assuntos Regulatórios do Operador Nacional do Sistema Elétrico – ONS
                </p>
              </div>             
              <div className="participant">
                <p className="participant_name">Vital Neto</p>
                <p className="participant_role">
                  Diretor de Inovação e Novos Negócios da Câmara de Comercialização de Energia Elétrica – CCEE
                </p>
              </div>                                       
              <div className="participant">
                <p className="participant_name">Lorena Roosevelt</p>
                <p className="participant_role">
                  Gestora do Polo SEBRAE de Energias Renováveis
                </p>
              </div>                                       
              <div className="participant">
                <p className="participant_name">Caio César Cavalcanti – Moderador</p>
                <p className="participant_role">
                CEO e Fundador do EVEx – Energy Virtual Experience
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
              <span>14:00</span>
           </div>
           <div className="event">   

            <h2><span css={mobileHour}>14:00</span>FÓRUM CCEE – ABERTURA E RITMO DO NOVO MERCADO</h2>

            <div className="participantsContainer">
              <div className="participant">
                 <p className="participant_bullet">• Abertura Institucional: <span>O Pulsar do Mercado</span></p>
                 <p className="participant_name">Ricardo Simabuku</p>
                <p className="participant_role">
                Diretor-Presidente Interino da Câmara de Comercialização de Energia Elétrica – CCEE 
                </p>
              </div>             
            </div>

           </div>
          </div>    
        </Container>

        <Container>           
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
                 <p className="participant_name">Gerusa Côrtes – Moderadora</p>
                <p className="participant_role">
                Diretora de Operação de Mercado da Câmara de Comercialização de Energia Elétrica – CCEE 
                </p>
              </div>                          
            </div>

           </div>
          </div>    
        </Container>

        <Container>           
          <div css={timeBlock}>
           <div className="hour">
              <span>15:30</span>
           </div>
           <div className="event">   

            <h2><span css={mobileHour}>15:30</span>Segurança de Mercado e Resiliência Financeira:</h2>
            <h3>Fortalecendo os Mecanismos de Monitoramento</h3>

            <div className="participantsContainer">
              <div className="participant">
                 <p className="participant_name">Eduardo Rossetti</p>
                <p className="participant_role">
                Diretor-Executivo Comercial, de Produtos, Comunicação Externa e Marketing do Balcão Brasileiro de Comercialização de Energia – BBCE
                </p>
              </div>             
              <div className="participant">
                 <p className="participant_name">Leandro Issao</p>
                <p className="participant_role">
                Membro do Conselho de Administração da Associação Brasileira dos Comercializadores de Energia – ABRACEEL
                </p>
              </div>             
              <div className="participant">
                 <p className="participant_name">Leandro Xavier</p>
                <p className="participant_role">
                Gerente de Assuntos Regulatórios e de Mercado da ENGIE
                </p>
              </div>             
              <div className="participant">
                 <p className="participant_name">Eduardo Rossi – Moderador</p>
                <p className="participant_role">
                Diretor de Segurança de Mercado da Câmara de Comercialização de Energia Elétrica – CCEE 
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
                <span>Coffee Break & Networking</span>
              </div>
            </Col>
        </Container>

                <Container>           
          <div css={timeBlock}>
           <div className="hour">
              <span>17:00</span>
           </div>
           <div className="event">   

            <h2><span css={mobileHour}>17:00</span>Certificação e Rastreabilidade:</h2>
            <h3>A Viabilização do Hidrogênio Verde</h3>

            <div className="participantsContainer">
              <div className="participant">
                 <p className="participant_name">Diogo Pignataro</p>
                <p className="participant_role">
                Presidente do Instituto Brasileiro de Transição Energética - INTÉ
                </p>
              </div>             
              <div className="participant">
                 <p className="participant_name">Teresa Ponce de Leão</p>
                <p className="participant_role">
                Presidente do Laboratório Nacional de Energia e Geologia – LNEG, Portugal
                </p>
              </div>             
              <div className="participant">
                 <p className="participant_name">Flaviano Masnik</p>
                <p className="participant_role">
                Assessor da Diretoria Financeira da Itaipu Binacional
                </p>
              </div>             
              <div className="participant">
                 <p className="participant_name">Vital Neto – Moderador</p>
                <p className="participant_role">
                Diretor de Inovação e Novos Negócios da Câmara de Comercialização de Energia Elétrica – CCEE
                </p>
              </div>                          
            </div>

           </div>
          </div>    
        </Container>

                 <Container>
              <Col xs={12} lg={12} className="px-0">
              <div css={pinkBreak}>
                <span>18:00</span>
                <span>Encerramento Oficial</span>
              </div>
            </Col>
        </Container>

      </Container>
        
      </section>
      {/* <img src={BgOrange} css={imgOrange} /> */}
     <div css={seventhEditionBannerSection}>
           <EditionDescription>
             <h1 className="event_name">
              Participe do <br></br>
              EVEx Brasil 2026
             </h1>
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
