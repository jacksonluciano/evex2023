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
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img{
      width: auto !important;
      transform: rotate(270deg);
    }

    :hover{
      /* background-color:${colors.brandingSalmon}; */
      background-color: #08F016;
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
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img{
      width: auto !important;
      transform: rotate(90deg);
    }

    :hover{
      /* background-color:${colors.brandingSalmon}; */
      background-color: #08F016;
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
      background-color: #08F016;
      border:1px solid #08F016;
      opacity: 0.5;
    }
    .swiper-pagination-bullet-active{
      background-color: #08F016;
      opacity: 1;
    }
  }
`

export const imgFull = css`
  width: 100%;
  /* height: 100%; */
  max-height: 542px;
`

export const description = css`
  align-items: center;
  background: radial-gradient(109.31% 145.98% at 109.31% 100%, ${colorsBr.themeGreen} 3.05%, ${colorsBr.secondaryBlue} 27.63%, #E3E3E2 100%);
  display: flex;
  justify-content: center;

  .description_container {
    max-width: 510px;

    p {
      color: #000;
      font-size: 16px;
      font-weight: 400;
      line-height: 21.79px;
    }
  }
`

export const bg = css`
  background: radial-gradient(76.58% 139.19% at 97.41% 97.62%, ${colorsBr.themeGreen} 3.05%, ${colorsBr.secondaryBlue} 49.44%, #E3E3E2 100%);

`

export const header = css`
  background: radial-gradient(76.58% 139.19% at 97.41% 97.62%, ${colorsBr.themeGreen} 3.05%, ${colorsBr.secondaryBlue} 49.44%, #E3E3E2 100%);
  /* padding: 58px 45px 58px 200px; */
  padding-block: 58px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .title_container {
    max-width: 589px;
    margin-right: 45px;

    .title {
      font-family: 'bw_gradual_demobold';
      font-size: 56px;
      font-weight: 700;
      line-height: 67.2px;
      margin: 0;
      text-align: left;
    }
  }
`

export const content = css`
  align-items: center;
  background: radial-gradient(102.27% 195.06% at 102.27% 103.18%, ${colorsBr.themeGreen} 3.05%, ${colorsBr.secondaryBlue} 27.63%, #E3E3E2 100%);
  display: flex;
  justify-content: flex-end;

  .content_container {
    width: 100%;
    max-width: 492px;
    margin-right: 142px;

    p {
      color: #000000;
      font-size: 16px;
      font-weight: 400;
      line-height: 21.79px;
      text-align: left;

    }
  }
`

export const section = css`
  position: relative;

  .natal_logo {
    position: absolute;
    left: 0;
    top: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 130px;
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
    background: ${colorsBr.themeGreen};
    margin: 0 3px;
    cursor: pointer;
    border: 1px solid ${colorsBr.themeGreen};
    padding: 0;
    opacity: 0.3;
    transition: all ease 400ms;
    -webkit-transition: all ease 400ms;
    -moz-transition: all ease 400ms;

    .swiper-pagination{
      bottom: -32px;
    }

    &.swiper-pagination-bullet-active {
      background: ${colorsBr.themeGreen};
      opacity: 1;
    }

    &:hover {
      background: ${colorsBr.themeGreen};
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
