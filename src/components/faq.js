/** @jsx jsx */
import React from "react";
import Arrow from '@/images/icons/arrow-down.svg'
import Download from '@/images/icons/icon-download.svg'
import Publicacao from '@/images/icons/icon-pub.svg'
import Normas from '@/images/EVEx2023 - Regras de Formatação.pdf'
import Eixos from '@/images/EVEx2023 - Eixos Temáticos.pdf'
import Ebook from '@/images/e-book Energia em Tempos de Pandemia.pdf'
import Anais from '@/images/Anais EVEx 2020.pdf'
import Anais2021 from '@/images/Anais EVEx 2021 - Energy Virtual Experience .pdf'
import { jsx } from "@emotion/react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

import { faqSection, pergunta, resposta } from "../assets/styles/Faq.style";
import {
  commonSection,
  mb32,
  mb16
} from "../assets/styles/layout.styles";

const Faq = () => {

  return (
    <section id="papers" css={[commonSection, faqSection]}>

      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-md-12">
            <Accordion allowZeroExpanded>

                <AccordionItem>
                  <AccordionItemHeading css={pergunta}>
                    <AccordionItemButton>
                     <h3>
                     Call for Papers/ Projects
                      <span>
                        <img src={Arrow} />
                      </span>
                      </h3>
                     
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel css={resposta}>
                    <p>
                    Incentivar a produção acadêmica e científica na área de energia é uma das missões do EVEx.
A chamada de trabalhos desta edição continuará abrindo um espaço de debate e grande visibilidade para apresentações de pesquisas, projetos e soluções inovadoras desenvolvidas por estudantes, professores, pesquisadores, startups e empresas.
Os resumos deverão ser enviados exclusivamente para o e-mail do Comitê Científico (comite@evex.energy), conforme cronograma, normas, formulário e eixos temáticos abaixo disponíveis.
Todas as propostas recebidas dentro do prazo serão analisadas. As mais bem avaliadas poderão ser apresentadas no EVEx Online ou no EVEx Presencial, após as devidas inscrições dos autores.
As versões finais dos trabalhos serão publicadas nos Anais do EVEx Lisboa 2023, em formato digital (e-book). Confira abaixo as publicações organizadas pelo EVEx.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading css={pergunta}>
                    <AccordionItemButton>
                     <h3>
                     Cronograma
                      <span>
                        <img src={Arrow} />
                      </span>
                      </h3>
                     
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel css={resposta}>
                    
                    <p>Data limite para envio de resumos: <span>20/09/2023;</span></p>
                    <p>Data limite para divulgação das propostas selecionadas: <span>22/09/2023;</span></p>
                    <p>Data limite para envio da versão final dos trabalhos: <span>31/01/2024.</span></p>
                   
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading css={pergunta}>
                    <AccordionItemButton>
                     <h3>
                     Observações
                      <span>
                        <img src={Arrow} />
                      </span>
                      </h3>
                     
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel css={resposta}>
                    
                    <p css={mb32}>{`1) O simples envio de resumos para avaliação não exige qualquer inscrição/pagamento no EVEx Lisboa 2023;`}</p>

                    <p css={mb32}>{`2) A inscrição e o respectivo pagamento deverão ser realizados somente após a possível aprovação da proposta enviada;`}</p>

                    <p css={mb32}>{`3) A inscrição deverá ser feita na categoria EVEx Paper/Project (Online ou Presencial, de acordo com o evento escolhido pelo autor), dentro do prazo estipulado na divulgação da lista de aprovados;`}</p>

                    <p css={mb32}>{`4) Os autores que tiverem dois ou mais resumos aprovados poderão realizar a apresentação de todos, alguns ou apenas um, desde que realizem a inscrição e o pagamento de cada trabalho que desejarem apresentar no(s) evento(s).`}</p>
                
                   
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading css={pergunta}>
                    <AccordionItemButton>
                     <h3>
                     Downloads
                      <span>
                        <img src={Arrow} />
                      </span>
                      </h3>
                     
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel css={resposta}>
                    
                    <p css={mb16}>
                      <a href={Normas} target="_blank">
                        <img src={Download} /> Normas
                      </a>
                    </p>
                    <p css={mb16}>
                      <a href={Eixos} target="_blank">
                        <img src={Download} /> Eixos Temáticos
                      </a>
                    </p>
                    <p css={mb16}>
                      <a href='https://www.playbook.com/s/jacksonides/GkGbSc2tRcAaeZ92hUEJsiEE' target="_blank">
                        <img src={Download} /> Template Resumo
                      </a>
                    </p>
                    <p css={mb16}>
                      <a href="https://www.playbook.com/s/jacksonides/vhyHpyb4GSxNoT3DSmsoV5cX" target="_blank">
                        <img src={Download} /> Template Apresentação
                      </a>
                    </p>
                    <p css={mb16}>
                      <a href="#">
                        <img src={Download} /> Template Artigo
                      </a>
                    </p>
                
                  </AccordionItemPanel>
                </AccordionItem>


                <AccordionItem>
                  <AccordionItemHeading css={pergunta}>
                    <AccordionItemButton>
                     <h3>
                     Publicações
                      <span>
                        <img src={Arrow} />
                      </span>
                      </h3>
                     
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel css={resposta}>
                    
                    <p css={mb16}>
                      <a href={Ebook} target="_blank">
                        <img src={Publicacao} /> Energia em Tempos de Pandemia
                      </a>
                    </p>
                    <p css={mb16}>
                      <a>
                        <img src={Publicacao} /> Energia nos Tempos da Pandemia: Da segunda onda ao cenário vacinal no contexto ibero-americano
                      </a>
                    </p>
                    <p css={mb16}>
                      <a href={Anais} target="_blank">
                        <img src={Publicacao} /> Anais EVEx 2020
                      </a>
                    </p>
                    <p css={mb16}>
                      <a href={Anais2021} target="_blank">
                        <img src={Publicacao} /> Anais EVEx 2021
                      </a>
                    </p>
                
                  </AccordionItemPanel>
                </AccordionItem>
            
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
