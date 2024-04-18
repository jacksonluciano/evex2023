/** @jsx jsx */
import { css } from '@emotion/react'
import { colors } from '../styles/layout.styles'

export const bgPapers = css`
  background: #e3e2e2;
  position: relative;

  .logo {
    left: 0;
    position: absolute;
    top: 230px;
  }
`

export const imageContainer = css`
  align-items: center;
  display: flex;
  justify-content: center;
`

export const container = css`
  padding-block: 117px;
`

export const contentContainer = css`
  .title {
    font-family: 'bw_gradual_demobold';
    font-size: 56px;
    font-weight: 700;
    line-height: 67.2px;
    margin-bottom: 33px;
    text-align: left;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 42px;

    .item {
      display: flex;
      position: relative;

      &_number {
        color: #ffffff;
        font-family: 'bw_gradual_demobold';
        font-size: 90px;
        line-height: 1;
        margin-bottom: 0;
        position: absolute;
      }

      &_one {
        top: -10px;
      }

      &_two {
        left: -15px;
        top: -20px;
      }

      &_three {
        left: -16px;
        top: -13px;
      }

      &_content {
        color: #000000;
        /* font-family: Open Sans; */
        font-size: 16px;
        font-weight: 400;
        left: 25px;
        line-height: 21.79px;
        text-align: left;
        position: relative;
        z-index: 2;
        margin-bottom: 0;
      }
    }
  }
`

export const accordion = css`
  padding-bottom: 600px;
  padding-top: 67px;

  .accordion {
    border: none;
    max-width: 630px;
    margin: 0 auto;
  }
  .accordion__item {
    /* border-top: 1px solid #dbdbdb; */
    padding-top: 14px;
  }
  .accordion__item:last-child {
    /* border-bottom: 1px solid #dbdbdb; */
  }
  .accordion__button{
    &:before{
      display: none;
    }
  }
`

export const pergunta = css`
  font-size: 24px;
  position: relative;
  /* transition: 0.5s; */

  .accordion_title {
    align-items: center;
    display: flex;
    justify-content: space-between;

    h3 {
      font-family: 'bw_gradual_demobold';
      font-size: 56px;
      font-weight: 700;
      line-height: 67.2px;
      text-align: left;
      margin: 0;
    }

    span {
      width: 57px;
      height: 60px;
      background-color: ${colors.secondaryMain};
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid #000;
    }

    &:after{
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      left: 0;
      bottom: 0;
      background: #000;
    }
  }

  div {
    /* padding: 20px 30px; */
    color: #adb5bd;

    &.accordion__button{
        /* background-color: ${colors.primaryMain}; */
        background: transparent;
    }
    
    &[aria-expanded="true"] {
      /* background-color: ${colors.brandingOrange}; */
      background: radial-gradient(96.86% 103.53% at 110.14% 116.49%, #FF06B5 3.05%, #F73C6E 29.36%, #E3E3E2 100%);

      color: ${colors.primaryMain};
      font-weight: 700;
      outline: none;
     box-shadow: none;
     margin-top: 20px;
     padding-bottom: 24px;
     h3{
      color: ${colors.primaryMain};
      &:after{
        background-color:${colors.primaryMain};
        
      }
      span{
        background-color:${colors.primaryMain};
        img{
          filter: invert(94%) sepia(8%) saturate(5614%) hue-rotate(302deg) brightness(98%) contrast(96%);
          transform: rotate(180deg);
        }
      }
     }
    }
    &:before {
      position: absolute;
      right: 0px;
      top: 30px;
      color: #545cff;
    }
    &:hover {
      /* background-color: transparent; */
    }
    @media (min-width: 320px) and (max-width: 767px) {
      padding: 20px 0px 10px 0px;
      font-size: 16px;
    }
  }
`;

export const resposta = css`
  /* padding: 0px 30px 30px; */
  transition: 0.3s;
  /* background-color: ${colors.brandingOrange}; */
  background: radial-gradient(96.86% 103.53% at 110.14% 116.49%, #FF06B5 3.05%, #F73C6E 29.36%, #E3E3E2 100%);

  .accordion_informations {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 50px 35px;

    a {
      /* font-family: 'bw_gradual_demobold'; */
      font-family: 'bw_gradual_demomedium';
      font-size: 30px;
      font-weight: 400;
      line-height: 36px;
      text-align: left;
      text-decoration: underline;
    }
  }

  
  p {
    font-size: 16px;
    line-height: 23px;
    color: ${colors.primaryMain};
    margin: 0;
    span{
      color: ${colors.brandingBlue};
    }
    a{
      color: ${colors.primaryMain};
    }
  }
  @media (min-width: 320px) and (max-width: 767px) {
    padding: 0px 30px 20px 12px;
    p {
      font-size: 14px;
    }
  }
`;