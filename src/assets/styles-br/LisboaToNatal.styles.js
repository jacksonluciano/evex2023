/** @jsx jsx */
import { css } from '@emotion/react'
import { colors } from '../styles/layout.styles'
import  bgImg  from '../images-br/lisboaToNatal.jpg'
import  orangeElements01  from '../images-br/orange-elements-01.png'

export const abAgency = css`
  /* background-color: ${colors.primaryMain}; */
  background-image: url(${bgImg});
  min-height: 710px;
  position: relative;
  display: flex;
  align-items: flex-end;

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

z-index: 99;

  @media (min-width: 320px) and (max-width: 767px) {
    padding: 32px 16px;
    justify-content: flex-start;
  }
  @media (min-width: 768px) and (max-width: 990px) {
    padding-right: 15px;
  }
`

export const mb45 = css`
  margin-bottom: 45px;
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
  color: #ffffff;

  h2{
    color: #ffffff;
    font-family: 'bw_gradual_demomedium';
    text-align: center;
    margin-bottom: 0;
    font-weight: 500;
    /* text-decoration:underline; */
    /* text-decoration-thickness: 3px; */
    /* text-underline-offset: 6px; */

    @media (min-width: 320px) and (max-width: 767px) {
     font-size: 56px;
    }
  }

  h3{
    font-family: 'bw_gradual_demoregular';
    color: #ffffff;
    text-align: center;
    font-weight: 100;
    font-size: 56px;
  }

  p{
    font-family: 'bw_gradual_demoregular';
    font-size: 25px;
    line-height: 30px;
    font-weight: 100;
    color: #ffffff;
    text-align: center;
    @media (min-width: 320px) and (max-width: 767px) {
        margin-bottom: 0;
        line-height: 21px;
      }
  }

  @media (min-width: 320px) and (max-width: 767px) {
    padding: 12px;
    justify-content: flex-start;
  }
`

export const element01 = css`
    position: absolute;
    width: 100% !important;
    bottom: 0;
    left: 0;

    @media (min-width: 320px) and (max-width: 767px) {
      width: 121px !important;
      top: -28px;
      right: -15px;
  }
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