/** @jsx jsx */
import { css } from '@emotion/react'
import { colorsBr, colors } from '../styles/layout.styles'

export const slider = css`
  #main-slider-next01, #main-slider-next02 {
    width: 48px;
    height: 48px;
    background-color: #ffffff;
    border: 1px solid #000;
    position: absolute;
    right: 17px;
    top: 45%;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img{
      width: auto !important;
      transform: rotate(270deg);
    }

    :hover{
      background-color:${colors.brandingSalmon};
    }
    &.swiper-button-disabled{
      display: none;
    }
  }

  #main-slider-prev01, #main-slider-prev02 {
    width: 48px;
    height: 48px;
    background-color: #ffffff;
    border: 1px solid #000;
    position: absolute;
    left: 17px;
    top: 45%;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img{
      width: auto !important;
      transform: rotate(90deg);
    }

    :hover{
      background-color:${colors.brandingSalmon};
    }

    &.swiper-button-disabled{
      display: none;
    }
  }

  .swiper-pagination{
    text-align: center;

    .swiper-pagination-bullet{
      width: 13px;
      height: 13px;
      background-color: #F68515;
;
      border:1px solid #F68515;
      opacity: 0.5;
    }
    .swiper-pagination-bullet-active{
      background-color: #F68515;
      opacity: 1;
    }
  }
`

export const imgFull = css`
  width: 100%;
  /* height: 100%;
  max-height: 542px; */
`

export const content = css`
  background: radial-gradient(101.67% 300.32% at 107.15% 108.84%, #FF4001 3.05%, #E4A939 57.43%, #E3E3E2 100%);
  display: flex;
  align-items: center;
  justify-content: center;

  .content_container {
    display: flex;
    align-items: flex-start;
    position: relative;

    img {
      height: 100%;
      max-height: 114px;
    }

    h3 {
      font-family: 'bw_gradual_demobold';
      font-size: 56px;
      font-weight: 700;
      line-height: 67.2px;
      max-width: 340px;
      position: relative;
      left: -11.5px;
      top: 10px;
    }
  }
`

export const teamSlider = css`
  margin-left: 135px;
  position: relative;
  margin-bottom:32px;

  img{
    width: 100%;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    margin-left: 0px;
  }

  #main-slider-next{
      width: 48px;
      height: 48px;
      background-color: #fff;
      border: 1px solid #000;
      position: absolute;
      right: 17px;
      top: 158px;
      z-index: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      img{
        transform: rotate(270deg);
      }
      &.swiper-button-disabled {
      display: none;
    }

    }
    #main-slider-prev{
      width: 48px;
      height: 48px;
      background-color:${colors.secondaryMain};
      border: 1px solid #000;
      position: absolute;
      left: 17px;
      top: 158px;
      z-index: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &.swiper-button-disabled{
        display: none;
      }

      img{
        transform: rotate(90deg);
      }

      :hover{
        background-color:${colors.brandingSalmon};
      }
    }

  & .slick-slide {
    margin: 0 15px;
    outline: none;
  }
`

export const teamPagination = css`
  position: relative;
  bottom: auto;
  left: auto;
  text-align: center;
  margin-top: 40px;

  & span {
    border-radius: 50%;
    list-style: none;
    display: inline-block;
    height: 20px;
    width: 20px;
    background: #F68515;
    margin: 0 3px;
    cursor: pointer;
    border: 1px solid #F68515;
    padding: 0;
    opacity: 0.3;
    transition: all ease 400ms;
    -webkit-transition: all ease 400ms;
    -moz-transition: all ease 400ms;

    .swiper-pagination{
      bottom: -32px;
    }

    &.swiper-pagination-bullet-active {
      background: #F68515;
      opacity: 1;
    }

    &:hover {
      background: #F68515;
    }

    & button[type="button"] {
      border: none;
      border-radius: 0;
      display: inline-block;
      padding: 0;
      text-indent: -9999px;
      z-index: 10;
      outline: none;
    }
  }
`

export const lastcontainer = css`
  margin: 50px 0 295px;

  .slider {
    width: 375px !important;
  }
`