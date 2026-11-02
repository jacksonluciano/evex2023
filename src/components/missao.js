/** @jsx jsx */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Pattern from "@/images/2026/pattern.svg";
import Logo from '@/images/2026/logo-evex-heart.svg'
import { ComiteData } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";
import ComiteCard from "@/components/comite-card";
import { jsx } from "@emotion/react";
import "swiper/swiper-bundle.min.css";

import {
  team,
logo
} from "../assets/styles/Missao.styles";

import { commonSection }  from '../assets/styles/layout.styles'

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

const Missao = () => {
  const { sectionContent, posts } = ComiteData;
  const carouselOptions = {
    spaceBetween: 0,
    loop: false,
    slidesPerView: 1,
    pagination: {
      el: "#team-carousel-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: "#main-slider-next",
      prevEl: "#main-slider-prev",
    },
    breakpoints: {
      0: {
        spaceBetween: 8,
        slidesPerView: 'auto',
        slidesPerGroup: 1,
      },
      576: {
        spaceBetween: 8,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      992: {
        spaceBetween: 8,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1200: {
        spaceBetween: 8,
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
  };

  return (
    <section id="comite" css={[team,commonSection]}>
      <Container>
        <Row>
          <Col lg={8}>
             <h2>Missão EVEx 2026 <span>Mercado Ibérico de Energia</span></h2>
             <p>
                Do debate à experiência prática: conheça de perto os mercados e as instituições que fazem a energia acontecer.
Nos dias 05 e 06 de novembro, a Missão EVEx reúne um grupo seleto para visitas técnicas e reuniões exclusivas com instituições, reguladores, operadores e empresas do ecossistema energético ibérico.
Uma imersão para comparar modelos de mercado, conhecer infraestruturas estratégicas, trocar experiências e identificar oportunidades de cooperação e negócios entre Brasil, Portugal e Espanha.
A inscrição na Missão inclui a participação no EVEx Lisboa 2026, nos dias 03 e 04 de novembro, no Altis Grand Hotel.
Manifeste seu interesse e consulte a disponibilidade de vagas com a Secretaria do EVEx.
             </p>
          </Col>
          <Col lg={4}>
             <div css={logo}>
                <img src={Logo} />
             </div>
          </Col>
        </Row>
     
      </Container>
       <img src={Pattern} style={{width:'100%', paddingTop: '80px'}} />
    </section>
  );
};

export default Missao;
