/** @jsx jsx */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Element7 from "@/images/elements/element-07.svg";
import Arrow from "@/images/icons/arrow-down.svg";
import { TeamOneData } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";
import TeamCard from "@/components-br/team-card";
import { jsx } from "@emotion/react";
import "swiper/swiper-bundle.min.css";

import {
  team,
  teamSlider,
  moreBt,
  element,
  content,
  speakersContent
} from "../assets/styles-br/speakers-home.styles";

import { commonSection, commonBtn } from "../assets/styles/layout.styles";

import SwiperCore, { Pagination, Navigation } from "swiper";
import { Link } from "gatsby";

SwiperCore.use([Pagination, Navigation]);

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
        spaceBetween: 18,
        slidesPerView: "auto",
        slidesPerGroup: 1,
      },
      576: {
        spaceBetween: 18,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      992: {
        spaceBetween: 18,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1200: {
        spaceBetween: 18,
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
  };

  return (
    <section css={[team, commonSection]}>
      <Container fluid className="px-0">
        <div className="title">
            <Container>
            <h2>{sectionContent.title}</h2>
            </Container>
        </div>
        <Row className="mx-0">
          <Col lg={6} xs={9} className="px-0">
            <div css={content}>
              
            </div>
          </Col>
          <Col lg={6} xs={3} className="px-0">
            <Row css={speakersContent} className="mx-0">
              <Col lg={6} xs={12} className="px-0">
                <div css={content}></div>
              </Col>
              <Col lg={6} xs={6} className="px-0">
                <div css={content}></div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Container className="px-0">
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
          <Link to="/brasil/speakers" css={commonBtn}>
            Todos os Speakers
          </Link>
        </div>
        {/* <img css={element} src={Element7} /> */}
        </Container>

      </Container>
    </section>
  );
};

export default TeamCarousel;
