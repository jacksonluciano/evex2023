/** @jsx jsx */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Element7 from "@/images/elements/element-07.svg";
import Arrow from '@/images/icons/arrow-down.svg'
import { TeamOneData } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";
import TeamCard from "@/components/team-card";
import { jsx } from "@emotion/react";
import "swiper/swiper-bundle.min.css";

import {
  team,
  teamSlider,
  moreBt,
  element
} from "../assets/styles/TeamCarousel.styles";

import { commonSection, commonBtn }  from '../assets/styles/layout.styles'

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

const TeamCarousel = () => {
  const { sectionContent, posts } = TeamOneData;
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
        slidesPerView: 1,
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
    <section css={[team,commonSection]}>
      <Container>
        <Row>
          <Col lg={12}>
             <h2>{sectionContent.title}</h2>
          </Col>
        </Row>
     
      <Swiper css={teamSlider} {...carouselOptions}>
      <span id="main-slider-prev">
          <img src={Arrow} />
        </span>
        <span id="main-slider-next">
        <img src={Arrow} />
        </span>
        {posts.map((post, index) => (
          <SwiperSlide key={index}>
            <TeamCard data={post} />
          </SwiperSlide>
        ))}
        {/* <div css={teamPagination} className="swiper-pagination" id="team-carousel-pagination"></div> */}
      </Swiper>
      <div css={moreBt}>
        <button css={commonBtn}>Todos os Speakers</button>
      </div>
      <img css={element} src={Element7} />
      </Container>
      
    </section>
  );
};

export default TeamCarousel;
