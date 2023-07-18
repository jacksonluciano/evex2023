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
             <p>Personalidades de renome e protagonismo nos mercados energéticos da Península Ibérica e da América Latina, conheça os primeiros Speakers do EVEx Lisboa 2023</p>
          </Col>
        </Row>

      <Row>


      {posts.map((post, index) => (
        <Col css={speakerCard} lg={4} md={4} >
            <TeamCard data={post} />
        </Col>
        ))}

      {/* <Col lg={4} md={4} >
       <div css={singleTM}> 
            <div css={tmImg}>
                <img src={image} />
            </div>
            <div css={speakerInfo}>
                <h4>Élbia Gannoum</h4>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap 
                into electronic typesetting, remaining essentially unchanged. 
                </p>
            </div>
        </div>
        </Col> */}

      </Row>
        
      
      {/* <Swiper css={teamSlider} {...carouselOptions}>
        <span id="main-slider-next">
        <img src={Arrow} />
        </span>
        {posts.map((post, index) => (
          <SwiperSlide key={index}>
            <TeamCard data={post} />
          </SwiperSlide>
        ))}
        <div css={teamPagination} className="swiper-pagination" id="team-carousel-pagination"></div>
      </Swiper>
      <div css={moreBt}>
        <button css={commonBtn}>Saiba mais</button>
      </div>
      <img css={element} src={Element7} /> */}
      </Container>
      <img css={element} src={Element8} />
    </section>
  );
};

export default TeamCarousel;
