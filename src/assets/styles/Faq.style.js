/** @jsx jsx */
import { css } from "@emotion/react";
import { colors } from "../styles/layout.styles";

export const faqSection = css`

background-color: ${colors.primaryMain};
padding-top: 70px !important;

  .cbr {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .ctr {
    position: absolute;
    top: 0;
    right: 0;
  }

  h2 {
    font-size: 48px;
    margin-bottom: 0;
    span {
      color: ${colors.primary};
      font-weight: 400;
      font-size: 48px;
      padding-left: 10px;
    }
  }

  .accordion {
    border: none;
    max-width: 1030px;
    margin: 0 auto;
  }
  .accordion__item {
    /* border-top: 1px solid #dbdbdb; */
  }
  .accordion__item:last-child {
    /* border-bottom: 1px solid #dbdbdb; */
  }
  .accordion__button{
    &:before{
      display: none;
    }
  }
  

  @media (min-width: 320px) and (max-width: 767px) {
    h2 {
      font-size: 26px;
      span {
        font-size: 32px;
      }
    }
    p {
      font-size: 18px;
    }
    .cbr,
    .ctr {
      width: 40%;
    }
  }
`;

export const pergunta = css`
  font-size: 24px;
  position: relative;
  /* transition: 0.5s; */

  h3{
    font-family: 'bw_gradual_demomedium';
    font-size: 40px;
    position: relative;
    color: ${colors.secondaryMain};
    margin: 0;


    span{
    width: 40px;
    height: 40px;
    position: absolute;
    background-color: ${colors.secondaryMain};
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
   }


    &:after{
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      left: 0;
      bottom: 0;
      background-color: ${colors.secondaryMain};
    }
  }

  div {
    padding: 20px 30px 0;
    color: #adb5bd;

    &.accordion__button{
        background-color: ${colors.primaryMain};
    }
    
    &[aria-expanded="true"] {
      background-color: ${colors.brandingOrange};
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
      padding: 20px 50px 20px 18px;
      font-size: 16px;
    }
  }
`;

export const resposta = css`
  padding: 0px 30px 30px;
  transition: 0.3s;
  background-color: ${colors.brandingOrange};
  
  p {
    font-size: 14px;
    line-height: 21px;
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
    padding: 0px 50px 20px 18px;
    p {
      font-size: 14px;
    }
  }
`;
