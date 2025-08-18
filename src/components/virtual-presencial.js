/** @jsx jsx */
import React from "react";
import { VirtualPresencialData, QuintaEdicao2024Data } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import Arrow from "@/images/icons/arrow-down.svg";
import { jsx } from '@emotion/react'
import { Link } from "gatsby";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import { 
  abAgency,
  pr79,
  mb45,
  about,
  imgFull,
  slider
}  from '../assets/styles/VirtualPresencial.styles'
import {
  secTitle,
  secDesk,
  commonBtn,
  noPadding
} from "../assets/styles/layout.styles";

SwiperCore.use([Pagination, Navigation]);

const virtualPresencial = () => {
  const { sectionContent, image} = VirtualPresencialData;

  const testimonialsOptions = {
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: "#main-slider-next",
      prevEl: "#main-slider-prev",
    },
    slidesPerView: 1,
  };

  return (
    <section css={[abAgency]}>
      <Container fluid>
        <Row>
          <Col css={pr79} lg={6} md={6} sm={12}>
           <div css={about}>
              <h2 css={[secTitle, mb45]}>6ª Edição</h2>
              <p css={secDesk}>{sectionContent.text}</p>
              <Link to="/lisboa/o-evex" css={commonBtn}>Destaques EVEx 2023</Link>
           </div>
          </Col>
          <Col lg={6} md={6} sm={12} css={noPadding}>
            {/* <img css={imgFull} src={image} /> */}
            <Swiper css={slider} {...testimonialsOptions}>
              <span id="main-slider-prev">
                <img src={Arrow} />
              </span>

              <span id="main-slider-next">
                <img src={Arrow} />
              </span>

              {QuintaEdicao2024Data.map(({ img }, index) => (
                <SwiperSlide key={index}>
                  <img css={imgFull} src={img} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              className="swiper-pagination"
              id="client-carousel-pagination"
            ></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default virtualPresencial;
