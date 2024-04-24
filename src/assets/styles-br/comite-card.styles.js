/** @jsx jsx */
import { css } from "@emotion/react";
import { colors } from '../styles/layout.styles'

export const team = css`
  padding-bottom: 120px !important;
  padding-top: 0 !important;
  background-color: ${colors.primaryMain};
  position: relative;
 

  @media (min-width: 320px) and (max-width: 767px) {
    padding-bottom: 100px !important;
    overflow-x: hidden;
    }

  h2{
    font-size: 56px;
    font-family: 'bw_gradual_demomedium';
    color: ${colors.secondaryMain};
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 6px;
    margin-left: 40px;
    margin-bottom:24px;

    @media (min-width: 320px) and (max-width: 767px) {
      margin-left: 0;
    }
  }
`;

export const teamSlider = css`

  margin-left: 40px;
  position: relative;
  margin-bottom:32px;

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
      &.swiper-button-disabled{
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

  .swiper-slide{
    @media (min-width: 320px) and (max-width: 767px) {
    width: 80%;
  }
  }
`;

export const singleTM = css`
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  transition: all ease 400ms;
  -webkit-transition: all ease 400ms;
  -moz-transition: all ease 400ms;

  /* &:hover {
    & div:nth-child(1) img {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    & div:nth-child(1) {
      & > div {
        &:after {
          width: 100%;
        }
        div {
          visibility: visible;
          opacity: 1;
          left: 50px;
        }
      }
    }
    & div:nth-child(2) {
      h5 {
        color: #e62b4a;
      }
      h6 {
        &:after {
          width: 100%;
        }
      }
    }
  } */

  & div:nth-child(1) {
    //tm_overlay
    & > div {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      transition: all ease 900ms;
      -moz-transition: all ease 900ms;
      -webkit-transition: all ease 900ms;
      -o-transition: all ease 900ms;

      /* &:after {
        position: absolute;
        bottom: 0;
        right: 0;
        background: rgba(230, 43, 74, 0.7);
        overflow: hidden;
        width: 0;
        height: 100%;
        content: "";
        transition: all ease 400ms;
        -webkit-transition: all ease 400ms;
        -moz-transition: all ease 400ms;
      } */
      //team_social
      div {
        position: absolute;
        left: 20px;
        top: 49px;
        visibility: hidden;
        opacity: 0;
        z-index: 9;
        transition: all ease 900ms;
        -moz-transition: all ease 900ms;
        -webkit-transition: all ease 900ms;
        -o-transition: all ease 900ms;

        & a {
          display: block;
          font-size: 12px;
          line-height: 0.8;
          letter-spacing: 1.2px;
          color: #fff;
          margin: 0 0 19px;
          position: relative;
          text-transform: uppercase;

          & span {
            position: relative;

            &:hover {
              &:after {
                width: 100%;
              }
            }

            /* &:after {
              width: 0;
              height: 1px;
              content: "";
              background: #fff;
              position: absolute;
              left: 0;
              right: 0;
              margin: 0 auto;
              bottom: -0px;
              -webkit-transition: all 0.4s ease-out;
              transition: all 0.4s ease-out;
            } */
          }
        }
      }
    }
  }

`;

export const tmImg = css`
  position: relative;
  /* border-radius: 0 0 8px 8px; */
    overflow: hidden;

  & img {
    width: 100%;
    height: auto;
    max-width: none;
    /* width: calc(100% + 20px); */
    /* -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden; */
  }
`;

export const speakerInfo = css`
  display: flex;
  background: radial-gradient(98.78% 167.82% at 119.61% 148.7%, #01F201 3.05%, #4CD6D9 55.45%, #E3E3E2 111.11%);
  bottom: 0px;
  z-index: 2;
  flex-direction: column;
  padding: 20px 24px 4px;
  width: 100%;
  height: 184px;

  h4{
    font-family: 'bw_gradual_demobold';
    font-size: 24px;
    color:  #000;
    margin-bottom: 16px;
  }
  p{
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    color:  #000;
    line-height: 21px;
    span{
      font-weight: 500;
    }
  }

`

export const detailTM = css`
  position: relative;
  text-align: center;
  padding: 30px 15px 0;

  & h5 {
    font-size: 20px;
    line-height: 0.8;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    color: #000;
    display: block;
    margin: 0 0 3px;
    -webkit-transition: all 0.4s ease-out;
    transition: all 0.4s ease-out;
  }

  & h6 {
    font-size: 12px;
    letter-spacing: 1.2px;
    color: #818181;
    text-transform: uppercase;
    position: relative;
    line-height: 0.8;
    display: inline-block;

    &:after {
      width: 0;
      height: 1px;
      content: "";
      background: #818181;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      bottom: -4px;
      -webkit-transition: all 0.4s ease-out;
      transition: all 0.4s ease-out;
      -webkit-transition: all 0.4s ease-out;
      transition: all 0.4s ease-out;
    }
  }
`;

export const teamPagination = css`
  position: relative;
  bottom: auto;
  left: auto;
  text-align: center;
  margin-top: 40px;

  & span {
    list-style: none;
    display: inline-block;
    height: 10px;
    width: 10px;
    background: #dbdbdb;
    border: none;
    margin: 0 3px;
    cursor: pointer;
    padding: 0;
    opacity: 1;
    border-radius: 0;
    transition: all ease 400ms;
    -webkit-transition: all ease 400ms;
    -moz-transition: all ease 400ms;

    &.swiper-pagination-bullet-active {
      background: #000;
    }

    &:hover {
      background: #000;
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
`;

export const moreBt = css`
  display: flex;
  justify-content: center;

  a{
    background-color:${colors.brandingSalmon};
    color:${colors.primaryMain};
    font-family: 'bw_gradual_demobold';
    font-size: 16px;
    letter-spacing: 0;
    padding: 13px 50px;
    z-index: 2;

    :hover{
      background-color:${colors.brandingSalmon};
      box-shadow: none;
    }
  }
`

export const element = css`
    position: absolute;
    bottom: -170px;
    left: 40px;

    @media (min-width: 320px) and (max-width: 767px) {
      width: 90% !important;
      left: 40px;
      bottom:-77px
    }
`


