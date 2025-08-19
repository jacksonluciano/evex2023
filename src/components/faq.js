/** @jsx jsx */
import React from "react";
import Arrow from '@/images/icons/arrow-down.svg'
import Download from '@/images/icons/icon-download.svg'
import Publicacao from '@/images/icons/icon-pub.svg'
import Normas from '@/images/2024/Regras de Formatação.pdf'
import Eixos from '@/images/2024/Eixos_Tematicos.jpeg'
// import Ebook from '@/images/e-book Energia em Tempos de Pandemia.pdf'
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
                    Incentivar a produção acadêmica e científica na área de energia é uma das missões do EVEx. A Call for Papers/Projects da edição de 2025 abrirá um espaço de debate e grande visibilidade para apresentações de trabalhos e projetos desenvolvidos por estudantes, pesquisadores, startups e profissionais de diversos setores energéticos. Os resumos deverão ser enviados, exclusivamente, para o e-mail do Comitê Científico (comite@evex.energy), conforme cronograma, formulário e eixos temáticos abaixo disponíveis. Todas as propostas recebidas dentro do prazo serão analisadas. As mais bem avaliadas poderão ser apresentadas no EVEx Lisboa 2025 ou no EVEx COP30 mediante inscrição dos respectivos autores na categoria “EVEx Paper/Project”. As versões finais dos trabalhos serão publicadas nos Anais do EVEx 2025, em formato digital (e-book). Confira abaixo Anais de edições passadas e outras publicações organizadas pelo EVEx.
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
                    
                    {/* <p>Data limite para envio de resumos: <span>15/09/2024;</span></p>
                    <p>Data limite para divulgação das propostas selecionadas: <span>17/09/2024;</span></p>
                    <p>Data limite para envio da versão final dos trabalhos: <span>31/01/2025.</span></p> */}

                    <p>Data limite para envio de resumos: <span>19/09/2025</span></p>
                    <p>Data limite para divulgação das propostas selecionadas: <span>24/09/2025</span></p>
                    <p>Período para inscrição dos autores aprovados:<span>25/09/2025 a 02/10/2025</span></p>
                    <p>Apresentações no EVEx Lisboa: <span>07/10/2025 e 08/10/2025</span></p>
                    <p>Data limite para envio da versão final dos trabalhos: <span>15/12/2025</span></p>

                   
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
                    
                    <p css={mb32}>{`1) A submissão de resumos para avaliação não exige qualquer inscrição prévia no EVEx 2025. Apenas é necessário o correto preenchimento e envio do formulário de resumo dentro do prazo estipulado no cronograma acima descrito.`}</p>

                    <p css={mb32}>{`2) Somente após a possível aprovação da proposta submetida, a inscrição deverá ser realizada na categoria “EVEx Paper/Project”, conforme prazo também estipulado no cronograma.`}</p>

                    <p css={mb32}>{`3) Os autores que tiverem dois ou mais resumos aprovados poderão escolher qual será apresentado no evento.`}</p>

                    {/* <p css={mb32}>{`4) Os autores que tiverem dois ou mais resumos aprovados poderão realizar a apresentação de todos, alguns ou apenas um, desde que realizem a inscrição e o pagamento de cada trabalho que desejarem apresentar no(s) evento(s).`}</p> */}
                
                   
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
                      <a href='https://www.playbook.com/s/jacksonides/omUr3sKcR8KqDm444qBi2KVy?assetToken=X7tsntf84N36aVoPeaWudEi5' target="_blank">
                        <img src={Download} /> Template Resumo
                      </a>
                    </p>
                    {/* <p css={mb16}>
                      <a href="https://www.playbook.com/s/jacksonides/vhyHpyb4GSxNoT3DSmsoV5cX" target="_blank">
                        <img src={Download} /> Template Apresentação
                      </a>
                    </p>
                    <p css={mb16}>
                      <a href="#">
                        <img src={Download} /> Template Artigo
                      </a>
                    </p> */}
                
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
                      <a href={"#"} target="_blank">
                        <img src={Publicacao} /> Energia em Tempos de Pandemia
                      </a>
                    </p>
                    <p css={mb16}>
                      <a href={"https://www.playbook.com/s/jacksonides/hkyvoKaw3ajgk9eF2Kmj9gVr?assetToken=wNoixtVi5n1qCgN4vHuGLAH2"} target="_blank">
                        <img src={Publicacao} /> O Futuro da Energia Pós-Pandemia
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
                    <p css={mb16}>
                      <a href={'https://www.playbook.com/s/jacksonides/TXAaboCSqz7uvXGT5QztYWKn?assetToken=nmVCsbc9hFCmDNB496YFYW5v'} target="_blank">
                        <img src={Publicacao} /> Anais EVEx 2022
                      </a>
                    </p>
                    <p css={mb16}>
                      <a href={'#'} target="_blank">
                        <img src={Publicacao} /> Anais EVEx 2023
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
