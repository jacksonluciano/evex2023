/** @jsx jsx */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Element8 from "@/images/elements/element-08.png";
import image from '@/images/speaker/speaker.png'
import { TeamOneData } from "@/data";
import TeamCard from "@/components/team-card";
import { jsx } from "@emotion/react";
import "swiper/swiper-bundle.min.css";

import {
  team,
  singleTM,
  speakerInfo,
  tmImg,
  speakersTitle,
  element,
  speakerCard
} from "../assets/styles/Speakers.styles";

import { commonSection }  from '../assets/styles/layout.styles'

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

const TeamCarousel = () => {
  const { sectionContent, posts } = TeamOneData;
//   const carouselOptions = {
//     spaceBetween: 0,
//     loop: false,
//     slidesPerView: 1,
//     pagination: {
//       el: "#team-carousel-pagination",
//       type: "bullets",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: "#main-slider-next",
//       prevEl: "#main-slider-prev",
//     },
//     breakpoints: {
//       0: {
//         spaceBetween: 0,
//         slidesPerView: 1,
//         slidesPerGroup: 1,
//       },
//       576: {
//         spaceBetween: 8,
//         slidesPerView: 2,
//         slidesPerGroup: 2,
//       },
//       992: {
//         spaceBetween: 8,
//         slidesPerView: 3,
//         slidesPerGroup: 3,
//       },
//       1200: {
//         spaceBetween: 8,
//         slidesPerView: 4,
//         slidesPerGroup: 4,
//       },
//     },
//   };
  return (
    <section css={[team,commonSection]}>
      <Container>
        <Row>
          <Col css={speakersTitle} lg={12}>
             <h2>{sectionContent.title}</h2>
             <p>Personalidades de renome e protagonismo nos mercados energéticos da Península Ibérica e da América Latina, conheça os speakers já confirmados para o EVEx Lisboa 2023. Nas próximas semanas, anunciaremos mais nomes. </p>
          </Col>
        </Row>

      <Row>
      {posts.map((post, index) => (
        <Col css={speakerCard} lg={4} md={4} >
            <TeamCard data={post} />
        </Col>
        ))}

      </Row>
        
      </Container>
      <img css={element} src={Element8} />
    </section>
  );
};

export default TeamCarousel;
