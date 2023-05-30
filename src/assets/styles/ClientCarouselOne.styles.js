/** @jsx jsx */
import { css } from "@emotion/react";
import { colors } from './layout.styles'

export const client = css`
  background-color: ${colors.primaryMain};
  padding: 120px 0 160px;

  h2{
    color:${colors.secondaryMain};
    font-size:56px;
    font-family: 'bw_gradual_demomedium';
    text-decoration: underline;
    font-style: normal;
    margin-bottom: 32px;
  }
`;

export const singleClient = css`
  position: relative;
  width: 100%;
  height: auto;
  transition: all ease 500ms;
  -moz-transition: all ease 500ms;
  -webkit-transition: all ease 500ms;
  padding: 24px;


  /* &:after {
    width: 4px;
    height: 0;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    content: "";
    background: #e62b4a;
    visibility: hidden;
    opacity: 0;
    transition: all ease 500ms;
    -moz-transition: all ease 500ms;
    -webkit-transition: all ease 500ms;
  } */

  &:hover {
    -webkit-box-shadow: 0px 10px 35px 0px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0px 10px 35px 0px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 10px 35px 0px rgba(0, 0, 0, 0.05);

    &:after {
      visibility: visible;
      opacity: 1;
      height: 100%;
    }
    & a img {
      opacity: 1;
    }
  }

  & a {
    width: 100%;
    height: 100%;
    display: inline-block;

    img {
      height: auto;
      /* position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0; */
      display: inline-block !important;
      transition: all ease 500ms;
      -moz-transition: all ease 500ms;
      -webkit-transition: all ease 500ms;
      margin-bottom: 16px;
    }
  }
`;

export const clientSlider = css`

.owl-controls .owl-nav {
  display: none;
}

.owl-controls .owl-dots {
  line-height: 0.8;
  text-align: center;
  margin-top: 27px;
}

.swiper-pagination-bullet,
.owl-controls .owl-dots .owl-dot span {
  line-height: 0.8;
  width: 10px;
  height: 10px;
  border-radius: 0;
  margin: 0 3px;
  padding: 0;
  background: #dbdbdb;
  -webkit-transition: all 0.4s ease-out;
  transition: all 0.4s ease-out;
  opacity: 1;
}

.swiper-pagination-bullet-active,
.swiper-pagination-bullet:hover,
.owl-controls .owl-dots .owl-dot.active span,
.owl-controls .owl-dots .owl-dot:hover span {
  background: #000000;
}

.swiper-pagination {
  position: relative;
  width: 100%;
  left: auto;
  top: auto;
  margin-top: 25px;
}

.swiper-slide{
  background-color: ${colors.secondaryMain};
  border-radius: 8px;
  transition: all ease 500ms;
  -moz-transition: all ease 500ms;
  -webkit-transition: all ease 500ms;
  min-height: 456px;

  :hover{
      background-color: ${colors.brandingOrange};
    }
  
    &:nth-of-type(2):hover{
      background-color: ${colors.brandingPurple};
    }

    &:nth-of-type(3):hover{
      background-color: ${colors.brandingBlue};
    }

    &:nth-of-type(4):hover{
      background-color: ${colors.brandingSalmon};
    }
  
  h3{
    font-family: 'bw_gradual_demomedium';
    font-size: 24px;
    text-decoration: underline;
    margin-bottom: 40px;
    height: 80px;
    margin: 0;
  }

  p{
    color:${colors.primaryMain};
    font-size: 14px;
    margin: 0;
    line-height: 21px;
  }
}
`

export const moreBt = css`
  display: flex;
  justify-content: center;

  button{
    background-color:${colors.brandingSalmon};
    color:${colors.primaryMain};
    font-family: 'bw_gradual_demobold';
    font-size: 16px;
    letter-spacing: 0;
    padding: 13px 50px;

    :hover{
      background-color:${colors.brandingSalmon};
      box-shadow: none;
    }
  }
`

export const element = css`
  position: absolute;
  bottom: 0px;
  right: 14%;
`


