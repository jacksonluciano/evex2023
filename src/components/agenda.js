/** @jsx jsx */
import React, { useState } from "react";
import { AgendaOnlineData, ContentData, ContentData2, AgendaPresencialData } from "@/data";
import element03 from "@/images/elements/element-03.svg"
import element07 from "@/images/elements/element-07.svg"
import element05 from "@/images/elements/element-05.svg"
import element08 from "@/images/elements/element-08.png"
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from "@emotion/react";

import {
  abAgency,
  pr79,
  mb45,
  about,
  element7,
  element3,
  element5,
  element8,
  dateBlock,
  blocks,
  asideBlock,
  contentData,
  agendaBlack,
  datePresBlock,
  asidePresBlock,
  contentPresData
} from "../assets/styles/Agenda.styles";
import {
  secTitle,
  secDesk,
} from "../assets/styles/layout.styles";





const Agenda = () => {

  const [selectedOn, setSelectedOn] = useState(null)
  const [selectedPres, setSelectedPres] = useState(null)

  const handleSelectedOn = (id) =>{
    selectedOn === id ?
    setSelectedOn(null):
    setSelectedOn(id)
  }

  const handleSelectedPress = (id) =>{
    selectedPres === id ?
    setSelectedPres(null):
    setSelectedPres(id)
  }


  return (
    <>
    <section css={[abAgency]}>
      <Container fluid>
        <Row>
          <Col css={pr79} lg={12} md={12} sm={12}>
            <div css={about}>
              <h2 css={[secTitle, mb45]}>Agenda</h2>
              <h3 css={secDesk}>EVEx Lisboa 2025 – Lisbon Energy Experience </h3>
            </div>
          </Col>
        </Row>
        <div css={blocks}>
          <Row>
            {AgendaPresencialData.map(({ date, day }, index) => (
              <Col lg={6} md={6} sm={12}>
                <div onClick={()=>handleSelectedPress(index)} css={dateBlock} key={index} className={selectedPres === index ? 'orangeBg' : ''}>
                  <h3>{date}</h3>
                  <p>{day}</p>
                  <p>Horário de Lisboa</p>
                </div>
                <div css={asideBlock}></div>
              </Col>
            ))}
          </Row>
          <img css={element3} src={element03} />
        </div>
        <section css={contentData}>    
                       {/* {ContentData2.map(({ text }, index) => (
              selectedPres != null && selectedPres === index ?
              <Col key={index} lg={12} md={12} sm={12}>
                <div dangerouslySetInnerHTML={{ __html: text }} />
              </Col>
               : null
            ))}       */}
            <h4 style={{textAlign: 'center'}}>Disponível em breve</h4>
        </section>
        <img css={element7} src={element07} />
      </Container>
    </section> 
    <section css={[abAgency,agendaBlack]}>
      <Container fluid>
      <Row>
          <Col css={pr79} lg={12} md={12} sm={12}>
            <div css={about}>
              <h3 css={secDesk}>EVEx COP30 – Energy Virtual Experience</h3>
            </div>
          </Col>
        </Row>
        <div css={blocks}>
          <Row>
            {AgendaOnlineData.map(({ date, day }, index) => (
              <Col lg={6} md={6} sm={12}>
                <div onClick={()=>handleSelectedOn(index)} css={[dateBlock,datePresBlock]} key={index} className={selectedOn === index ? 'orangeBg' : ''} >
                  <h3>{date}</h3>
                  <p>{day}</p>
                  <p>Horário de Brasília</p>
                </div>
                <div css={[asideBlock,asidePresBlock]}></div>
              </Col>
            ))}
          </Row>
         
        </div>
        <section css={[contentData,contentPresData]}>    
             {/* {ContentData.map(({ text }, index) => (
              selectedOn != null && selectedOn === index ?
              <Col key={index} lg={12} md={12} sm={12}>
                <div dangerouslySetInnerHTML={{ __html: text }} />
              </Col>
               : null
            ))}       */}

            <h4 style={{textAlign: 'center', color: '#fff'}}>Disponível em breve</h4>
        </section>
        <img css={element5} src={element05} />
        <img css={element8} src={element08} />
      </Container>
    </section>
    </>
  );
};

export default Agenda;
