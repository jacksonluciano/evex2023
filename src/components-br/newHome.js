/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx } from '@emotion/react'
import { Global } from "@emotion/react"
import { globalStyles } from "../assets/styles-br/global.styles"
import { Link } from "gatsby";
import topImg from '@/images-br/newhome/top.svg';
import birdLeft from '@/images-br/newhome/bird-left.svg';
import birdRight from '@/images-br/newhome/bird-right.svg';
import cityTop from '@/images-br/newhome/city.svg';
import cityBottom from '@/images-br/newhome/bottom.svg';
import cityTopMobile from '@/images-br/newhome/city-mobile.svg';
import cityBottomMobile from '@/images-br/newhome/bottom-mobile.svg';
import btWave from '@/images-br/newhome/btwave.svg';
import mail from '@/images-br/newhome/mail.svg';
import floralL from '@/images-br/newhome/florall.svg';
import floralR from '@/images-br/newhome/floralr.svg';
import birdBtl from '@/images-br/newhome/birdBtl.svg';
import birdBtr from '@/images-br/newhome/birdBtr.svg';
import leftmobile from '@/images-br/newhome/left-mobile.svg';
import rightMobile from '@/images-br/newhome/right-mobile.svg';
import logo from '@/images-br/newhome/logo.svg';


import { 
    PageWrapper,
    HeroSection,
    BirdsRow,
    BirdLeft,
    BirdRight,
    MainTitle,
    ImgMobile,
    TaglineBadge,
    IntroText,
    City,
    CityscapeWrapper,
    CityBottom,
    CityTaglineBadge,
    CalendarGrid,
    EventCard,
    EventIcon,
    EventTitleRow,
    EventName,
    EventDesc,
    EventDate,
    EventNote,
    CtaButton,
    FreeTag,
    FooterSection,
    EcosystemTitle,
    EcosystemButtons,
    EcosystemBtn,
    EmailRow,
    BirdsFooter,
}  from '../assets/styles-br/new-home.styles'

const events = [
    {
      id: 1,
      color: "#c8302a",
      name: "EVEx Brasil 2026",
      desc: "João Pessoa Energy Experience",
      date: "01 e 02 de Julho",
      venue: "Paço dos Leões",
      cta: { label: "INSCREVA-SE AGORA", href: "https://www.sympla.com.br/evento/evex-brasil-2026-joao-pessoa-energy-experience/3348983?referrer=www.google.com&referrer=www.google.com" },
    },
    {
      id: 2,
      color: "#c8302a",
      name: "Missão EVEx 2026",
      desc: "Mercado Ibérico de Energia",
      date: "05 e 06 de Novembro",
      venue: "Pós-EVEx Lisboa",
      note: "Vagas limitadas – Inscrições em breve",
    },
    {
      id: 3,
      color: "#c8302a",
      name: "EVEx Lisboa 2026",
      desc: "Lisbon Energy Experience",
      date: "03 e 04 de Novembro",
      venue: "Altis Grand Hotel",
      note: "Inscrições em breve",
    },
    {
      id: 4,
      color: "#c8302a",
      name: "EVEx 2026",
      desc: "Energy Virtual Experience",
      date: "01 a 03 de Dezembro",
      venue: "Plataforma Online",
      note: "Acesso Gratuito",
    },
  ]

const Home = () => {
    return (
      <>
        <Global styles={globalStyles} />
        <PageWrapper>
            <img src={topImg} alt='top' />
  
          {/* ── HERO ── */}
          <HeroSection>
            <BirdsRow>
              <BirdLeft>
                <img className='desktop' src={birdLeft} alt='left' />
              </BirdLeft>
              <div style={{ flex: 1 }}>
              <MainTitle><img src={logo} alt='logo' /></MainTitle>
                {/* <SubTitle>
                    JOÃO PESSOA <span>|</span> LISBOA <span>|</span> VIRTUAL
                </SubTitle> */}
              </div>
              <BirdRight>
                <img className='desktop' src={birdRight} alt='rihgt' />
              </BirdRight>
            </BirdsRow>
  
  
          <ImgMobile>
            <img className='mobile' src={leftmobile} alt='left' />
                <TaglineBadge>
                  <span>Pulsar Ibero-Americano: </span>
                  O Ritmo da Nova Energia
                </TaglineBadge>
              <img className='mobile' src={rightMobile} alt='rihgt' />
          </ImgMobile>
  
            <IntroText>
              O Ciclo 2026 do EVEx já começou! Enquanto preparamos nossa nova
              plataforma, confira abaixo o calendário estratégico da nossa{" "}
              <strong>7ª edição</strong> e garanta sua participação no{" "}
              <strong>EVEx Brasil</strong> em <strong>João Pessoa</strong>.
            </IntroText>
  
           
          </HeroSection>

           <CityscapeWrapper>
              <City>
                <CityTaglineBadge>
                   Calendário EVEx 2026
                </CityTaglineBadge>
                <img className='desktop' src={cityTop} alt='city' />
                <img className='mobile' src={cityTopMobile} alt='city' />
              </City>
              <CityBottom>
                <img className='floral-left desktop' src={floralL} alt='floral' />
                <img className='floral-right desktop' src={floralR} alt='floral' />
              <CalendarGrid>
                {events.map((ev) => (
                  <EventCard className='eventcard' key={ev.id}>
                    <EventTitleRow>
                      <EventName>
                        <EventIcon color={ev.color} aria-hidden="true" />
                        {ev.name}
                        </EventName>
                    </EventTitleRow>
                    <EventDesc>{ev.desc}</EventDesc>
                    <EventDate>
                      <span>{ev.date}</span> | {ev.venue}
                    </EventDate>
                    {ev.note && <EventNote>{ev.note}</EventNote>}
                    {ev.cta && (
                      <CtaButton target='_blank' href={ev.cta.href}>{ev.cta.label}</CtaButton>
                    )}
                    {ev.free && <FreeTag>Acesso Gratuito</FreeTag>}
                  </EventCard>
                ))}
              </CalendarGrid>
              <img className='desktop' src={cityBottom} alt='city' />
              <img className='mobile' src={cityBottomMobile} alt='city' />
              </CityBottom>
           </CityscapeWrapper>
  
          {/* ── FOOTER ── */}
          <FooterSection>
        

            <EcosystemTitle>
              Explore o ecossistema EVEx:<br />
              acesse os conteúdos de 2025
            </EcosystemTitle>
  
            <EcosystemButtons>
              <EcosystemBtn href="https://evex.energy/brasil">
                EVEx Brasil 2025
              </EcosystemBtn>
              <EcosystemBtn href="https://evex.energy/lisboa">
                EVEx Lisboa 2025
              </EcosystemBtn>
            </EcosystemButtons>
  
            <EmailRow>
              <img src={mail} alt='mail' />
              <a href="mailto:secretaria@evex.energy">secretaria@evex.energy</a>
            </EmailRow>

            <BirdsFooter>
            <img src={birdBtl} className='birdbtl' alt='bird footer' />
            <img src={birdBtr} className='birdbtr' alt='bird footer' />
            </BirdsFooter>


        <img src={btWave} alt='btwave' />
          </FooterSection>
        </PageWrapper>
      </>
    )
};

export default Home;
