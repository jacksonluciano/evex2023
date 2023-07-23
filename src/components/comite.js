/** @jsx jsx */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Element8 from "@/images/elements/element-08.png";
import Element9 from "@/images/elements/element-09.svg";
import Arrow from '@/images/icons/arrow-down.svg'
import { ComiteData } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";
import ComiteCard from "@/components/comite-card";
import { jsx } from "@emotion/react";
import "swiper/swiper-bundle.min.css";

import {
  team,
  teamSlider,
  element,
  element9
} from "../assets/styles/Comite.styles";

import { commonSection }  from '../assets/styles/layout.styles'

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

const Comite = () => {
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
            <ComiteCard data={post} />
          </SwiperSlide>
        ))}
        {/* <div css={teamPagination} className="swiper-pagination" id="team-carousel-pagination"></div> */}
      </Swiper>
      <img css={element} src={Element8} />
      <img css={element9} src={Element9} />
      </Container>
    </section>
  );
};

export default Comite;
