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
                    Incentivar a produção acadêmica e científica na área de energia é uma das missões do EVEx. A chamada de trabalhos da edição de 2024 abrirá um espaço de debate e grande visibilidade para apresentações de pesquisas, projetos e soluções inovadoras desenvolvidas por estudantes, professores, pesquisadores, startups e empresas. Os resumos deverão ser enviados exclusivamente para o e-mail do Comitê Científico (comite@evex.energy), conforme cronograma, normas, formulário e eixos temáticos abaixo disponíveis. Todas as propostas recebidas dentro do prazo serão analisadas. As mais bem avaliadas poderão ser apresentadas no EVEx Online ou no EVEx Lisboa, após as devidas inscrições dos autores. As versões finais dos trabalhos serão publicadas nos Anais do EVEx 2024, em formato digital (e-book). Confira abaixo anais de edições passadas e outras publicações organizadas pelo EVEx.
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
                    
                    <p>Data limite para envio de resumos: <span>06/09/2024;</span></p>
                    <p>Data limite para divulgação das propostas selecionadas: <span>11/09/2024;</span></p>
                    <p>Data limite para envio da versão final dos trabalhos: <span>31/01/2025.</span></p>
                   
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
                    
                    <p css={mb32}>{`1) A submissão de resumos para avaliação não exige qualquer inscrição prévia no EVEx 2024. Apenas é necessário o correto preenchimento do formulário, disponível abaixo para download, e envio do mesmo dentro do prazo estipulado no cronograma descrito acima.`}</p>

                    <p css={mb32}>{`2) Somente após a possível aprovação da proposta submetida, a inscrição – incluindo o seu pagamento – deverá ser realizada na categoria EVEx Paper/Project Online ou Lisboa, dentro do prazo estipulado na carta de aceite.`}</p>

                    <p css={mb32}>{`3) Os autores que tiverem dois ou mais resumos aprovados poderão realizar as apresentações de todos eles no evento, caso assim desejem, desde que efetuem a inscrição e o pagamento de cada trabalho a ser apresentado.`}</p>

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
                      <a href={'#'} target="_blank">
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
