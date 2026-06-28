/** @jsx jsx */
import { css } from "@emotion/react";
import { colorsBr } from "../styles/layout.styles";
import sectionDividerSVG from "@/images-br/2026/links-section-divider.svg";
import yellowCreamBalloonSVG from '@/images-br/2026/yellow-cream-balloon.svg'
import styled from "@emotion/styled";
import { description } from './natal-description.styles';

export const root = css`
  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: ${colorsBr.evex2026PinkBright} !important;
  }

  .swiper-pagination-bullet {
    background: #D9D9D9;
    opacity: 1;
  }
`
export const sliderCss = css`
  background-color: #000000;
  height: 850px;
  .description {
    row-gap: 12px;
    h2 {
      font-weight: 400;
      font-size: 32px;
      margin: 0;
      line-height: 110%;
      letter-spacing: 2%;
      max-width: 470px;
      span {
        font-weight: 700;
      }
    }
    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      letter-spacing: 0%;
      max-width: 430px;
    }
  }

`

export const speakerCard = (bgColor) => css`
  position: relative;
  width: 280px;
  height: 390px;
  border-radius: 16px;
  overflow: visible;
  background: ${bgColor};
  display: flex;
  align-items: flex-end;
  .user_wrapper {
    display: flex;
    flex-direction: column;
  }
  @media(max-width: 1330px) {
    width: 250px;
  }

  @media(max-width: 1280px) {
    width: 220px;
  }

  @media(max-width: 1080px) {
    width: 180px;
  }

`

export const speakerPhoto = css`
  object-fit: cover;
  border-radius: 16px 16px 0 0;
  @media(max-width: 1280px) {
    width: 220px;
  }
  @media(max-width: 1080px) {
    width: 180px;
  }
`

export const speakerInfo = css`
  background: #fdf0cc;
  padding: 12px 14px 16px;
  border-radius: 0 0 16px 16px;
  font-family: 'Bw Gradual DEMO';
  height: 120px;
  h3 {
    margin: 0 0 4px;
    font-size: 18px;
  }

  p {
    margin: 0;
    font-size: 12px;
    line-height: 140%;
  }
`

export const leftDecoration = css`
  position: absolute;
  top: -25px;
  left: -30px;
  width: 70px;
  height: 80px;
  z-index: 2;
`

export const rightDecoration = css`
  position: absolute;
  right: -15px;
  bottom: -10px;
  width: 65px;
  height: 60px;
  z-index: 2;
`


