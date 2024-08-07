/** @jsx jsx */
import { css } from '@emotion/react'
import { colors } from './layout.styles'

export const abAgency = css`
  background-color: transparent;

  img{
    width: 100%;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    .container-fluid .row{
      display: flex;
      flex-direction: column-reverse;
    }
  }
`

export const pr79 = css`
  @media (min-width: 320px) and (max-width: 767px) {
    padding: 32px 0px;
    justify-content: flex-start;
  }
  @media (min-width: 768px) and (max-width: 990px) {
    padding-right: 15px;
  }
`

export const mb45 = css`
  margin-bottom: 40px;
  @media (min-width: 768px) and (max-width: 990px) {
    margin-bottom: 30px;
  }
`

export const about = css`
  position: relative;
  padding: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  color: ${colors.secondaryMain};
  align-items: flex-start;

  h2{
    color: ${colors.primaryMain};
    font-family: 'bw_gradual_demomedium';
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 6px;
    letter-spacing: 0;

    @media (min-width: 320px) and (max-width: 767px) {
     font-size: 54px;
    }
  }

  p{
    font-size: 16px;
    line-height: 23px;
    font-weight: 400;
  }

  a{
    font-family: 'bw_gradual_demomedium';
    :hover{
      font-weight: 600;
    }
    @media (min-width: 320px) and (max-width: 767px) {
      margin: 0 auto;
      z-index: 2;
    }
  }

  @media (min-width: 320px) and (max-width: 767px) {
    padding: 32px 12px;

    h2{
      line-height: 68px;
    }
  }
`

export const element01 = css`
    position: absolute;
    width: auto !important;
    top: 0;
    right: -15px;
`

export const imgFull = css`
    width: 100%;
`

export const abImg = css`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;

  &:nth-child(2){
    position: relative;
    top: 30px;
    margin-top: 0;
    &:after{
      @media (min-width: 768px) and (max-width: 990px) {
        width: 350px;
        left: 15px;
      }
    }
  }

  & img{
    max-width: 100%;
    height: auto;
    -webkit-box-shadow: -2px 4px 30px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: -2px 4px 30px 0px rgba(0, 0, 0, 0.3);
    box-shadow: -2px 4px 30px 0px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 320px) and (max-width: 767px) {
    position: relative;
    margin: 50px 0 0;
    &:after{
      display:none;
    }
  }
  @media (min-width: 768px) and (max-width: 990px) {
    position: relative;
    float: right;
    right: -5px;
  }
`

export const slider = css`

  #main-slider-next{
        width: 48px;
        height: 48px;
        background-color:${colors.secondaryMain};
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

  #main-slider-prev{
        width: 48px;
        height: 48px;
        background-color:${colors.secondaryMain};
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
    text-align: left;
    margin-left: 20px;

    .swiper-pagination-bullet{
      width: 16px;
      height: 16px;
      background-color:${colors.secondaryMain};
      border:1px solid ${colors.primaryMain};
      opacity: 1;
    }
    .swiper-pagination-bullet-active{
      background-color:${colors.primaryMain};
    }
  }

`
