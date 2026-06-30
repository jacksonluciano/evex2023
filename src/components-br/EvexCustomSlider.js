/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import { Navigation } from "swiper";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import SliderArrow from "@/images-br/2026/slider-arrow.svg";

import {
  root,
  slider,
  sliderArrows,
  sliderHeader,
  slideInner,
} from "../assets/styles-br/EvexCustomSlider.styles";

SwiperCore.use([Pagination, Navigation]);

const EvexCustomSlider = (props) => {
  const {
    title,
    description,
    items,
    renderItem,
    rootCss,
    sliderCss,
    ...rest
  } = props
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);

  return (
    <div css={[root, rootCss]}>
      <div css={sliderHeader}>
        <div className="description">
          {title}
          {description}
        </div>

        <div css={sliderArrows}>
          <img ref={prevRef} className="left" src={SliderArrow} alt="Anterior" />
          <img ref={nextRef} className="right" src={SliderArrow} alt="Próximo" />
        </div>
      </div>

      <Swiper
        css={[slider, sliderCss]}
        modules={[Pagination, Navigation]}
        centeredSlides={false}
        pagination={{ clickable: true }}
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.navigation !== "boolean") {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        {...rest}
      >
        {items.map((item, index) => (
          <SwiperSlide key={item?.id ?? index}>
            <div css={slideInner}>{renderItem(item, index)}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EvexCustomSlider;