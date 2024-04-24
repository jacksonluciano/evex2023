/** @jsx jsx */
import { css } from "@emotion/react";
import { colors } from "../styles/layout.styles";
import bg from "@/images-br/comite-br/bg-comite.jpg";

export const team = css`
  padding: 146px 0 80px !important;
  background-color: #e3e3e2;
  position: relative;

  h2 {
    font-size: 56px;
    font-family: "bw_gradual_demomedium";
    color: ${colors.secondaryMain};
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 6px;
    margin-left: 40px;
    margin-bottom: 24px;

    @media (min-width: 320px) and (max-width: 767px) {
      margin-left: 0;
      text-align: center;
    }
  }
`;

export const teamSlider = css`
  margin-left: 40px;
  position: relative;
  margin-bottom: 32px;

  #main-slider-next {
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

    img {
      transform: rotate(270deg);
    }
  }

  & .slick-slide {
    margin: 0 15px;
    outline: none;
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
  margin-bottom: 32px;

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
  max-height: 300px;

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
  position: relative;
  display: flex;
  background-color: ${colors.primaryMain};
  border-radius: 8px;
  border: 1px solid ${colors.secondaryMain};
  /* position: absolute; */
  bottom: 0;
  z-index: 4;
  flex-direction: column;
  padding: 24px;
  width: 100%;

  h4 {
    font-family: "bw_gradual_demoregular";
    font-size: 24px;
    color: ${colors.secondaryMain};
    margin-bottom: 16px;
    text-decoration: underline;
  }
  p {
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    color: ${colors.secondaryMain};
    line-height: 21px;
  }
`;

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

  button {
    background-color: ${colors.brandingSalmon};
    color: ${colors.primaryMain};
    font-family: "bw_gradual_demobold";
    font-size: 16px;
    letter-spacing: 0;
    padding: 13px 50px;
    z-index: 2;

    :hover {
      background-color: ${colors.brandingSalmon};
      box-shadow: none;
    }
  }
`;

export const element = css`
  position: absolute;
  top: 100px;
  right: 16%;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 90%;
    left: 50%;
    transform: translate(-46%, 60px);
  }
`;
export const speakersTitle = css`
  background-color: #e3e3e2;
  background-image: url(${bg});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  height: 100vh;
  position: relative;

  .heroTitle {
    position: relative;
    z-index: 99;
    max-width:1000px;
    margin-left:auto;
    margin-right: auto;
    top: 120px;
    @media (max-width: 1366px) {
      top:54px
    }
  }

  h2 {
    font-family: 'bw_gradual_demobold';
    font-size: 100px;
    text-decoration: none;
    line-height: 100px;
  }

  p {
    width: 100%;
    max-width: 698px;
    margin: 16px auto 32px;
    color: #000000;
    font-size: 16px;
    line-height: 21px;
  }

  img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-59%);
  }


`;

export const speakersCards = css`
  margin-top: 160px;
`;

export const speakerCard = css`
  margin-bottom: 32px;

  div div:nth-of-type(1) {
    bottom: 0;
  }
`;

export const element01 = css`
position: absolute;
    top: 490px;
    left: -170px;
    z-index: 1;
`;
export const Word = css`
position: absolute;
    top: 40%;
    left: 0px;
    z-index: 9;
`;
export const element03 = css`
       position: absolute;
    bottom: -80px;
    right: 0;
`;