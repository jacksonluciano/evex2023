/** @jsx jsx */
import { css } from "@emotion/react";
import { colorsBr } from "../styles/layout.styles";

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
  @media (max-width: 768px) {
    padding: 80px 32px;
    min-height: unset;
    height: auto;
  }
`

export const speakerCard = (bgColor) => css`
  position: relative;
  width: 270px;
  height: 390px;
  border-radius: 16px;
  overflow: visible;
  background: ${bgColor};
  display: flex;
  align-items: flex-end;
  .user_wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  @media(max-width: 768px) {
    width: 300px;
    .user_wrapper {
      width: 100%;
    }
  }

  @media(max-width: 425px) {
    height: 350px;
    .decoration {
      display: none;
    }
  }

`

export const speakerPhoto = css`
  object-fit: cover;
  border-radius: 16px 16px 0 0;
  @media(max-width: 768px) {
    width: 270px;
  }
  @media(max-width: 425px) {
    width: 250px;
  }
`

export const speakerInfo = css`
  background: #fdf0cc;
  padding: 12px 14px 16px;
  border-radius: 0 0 16px 16px;
  font-family: 'Bw Gradual DEMO';
  min-height: 120px;
  h3 {
    font-weight: 500;
    margin: 0 0 4px;
    font-size: 20px;
    line-height: 24px;
  }

  p, span{    
    font-weight: 500;
    margin: 0;
    font-size: 14px;
    line-height: 18px;
  }
  p {
    color: #6E6E6E 
  }

  span {
    color: #0F0B0C;
    
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


