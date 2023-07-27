/** @jsx jsx */
import { css } from "@emotion/react";

import { colors } from "./layout.styles";

export const header = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 5;
  background: ${colors.secondaryMain};
  padding: 11px 40px 11px 45px;
  /* border-bottom: 2px solid rgba(255, 255, 255, 0.1); */

  &.fixedHeader {
    background-color: ${colors.secondaryMain};
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    border: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  }

  &.black_color {
    border-color: #e5e5e5;

    &.fixedHeader {
      background-color: #ffffff;
    }

    nav ul li a {
      color: #000000;
      &:after {
        background-color: #000000;
      }
    }

    nav ul ul {
      background-color: #ffffff;
      &:before {
        border-bottom: 5px solid #fff;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 767px) {
    padding: 23px 0;
  }
`;

export const logo = css`
  text-align: left;
  padding: 0;
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const mainMenu = css`
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;

    & li {
      list-style: none;
      display: inline-block;
      line-height: 0.8;
      padding: 0px;
      position: relative;

      & > .active a {
        color: #fff;
        &:after {
          width: 100%;
        }
      }

      & a {
        display: block;
        color: ${colors.primaryMain};
        font-size: 16px;
        font-weight: 500;
        line-height: 120%;
        position: relative;
        letter-spacing: -1px;
        font-family: 'bw_gradual_demomedium';

        &:hover {
          color: ${colors.brandingSalmon};
          text-decoration: none;
          &:after {
            width: 100%;
            opacity: 1;
          }
        }

        &:after {
          position: absolute;
          width: 100%;
          height: 2px;
          opacity: 0;
          content: "";
          background: ${colors.brandingSalmon};
          left: 0;
          right: 0;
          bottom: -5px;
          -moz-transition: all 0.4s ease-out;
          -webkit-transition: all 0.4s ease-out;
          transition: all 0.4s ease-out;
        }
      }

      &:hover .sub-menu {
        visibility: visible;
        opacity: 1;
        top: 66px;
      }
    }

    & ul.sub-menu {
      padding: 25px 30px 13px;
      & li {
        margin: 0;
        padding: 0 0 13px;
        display: block;
        & a {
          font-size: 14px;
          line-height: 1.5;
          display: inline-block;
          &:after {
            bottom: 0;
          }
        }
      }
    }
  }
`;

export const submenu = css`
  /* background-color: ${(props) => (props.dark ? "#ffffff" : "#000000")}; */
  background-color: #000000;
  width: 200px;
  z-index: 9;
  text-align: center;

  transition: all ease 400ms;
  -webkit-transition: all ease 400ms;
  -moz-transition: all ease 400ms;
  visibility: hidden;
  opacity: 0;
  left: 50%;
  margin: auto;
  position: absolute;
  right: 0;
  text-align: center;
  top: 100px;
  transform: translateX(-50%);
  z-index: 2;

  &:before {
    content: "";
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: -5px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #000;
    z-index: 10;
  }
`;

export const navigator = css`
  position: relative;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  height: 100%;

  & a {
    display: inline-block;
    color: ${colors.primaryMain};
    line-height: 0.8;
    font-size: 25px;
    margin: 0;

    &:hover,
    .active {
      color: #e62b4a;
    }

    &.search {
      margin-right: 16px;
    }
  }

  @media (min-width: 320px) and (max-width: 767px) {
    padding-top: 0;

    a{
      display:flex;
      justify-content: center;

      i{
        padding: 20px 0 10px 10px;
      }
    }

    & a {
      &.search {
        margin-right: 10px;
      }
    }
  }
`;

export const socialList = css`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  height: 100%;
  justify-content: end;
  align-items: center;

  li {
    padding: 0 10px;
    height: 20px;
    line-height: 20px;
    margin-bottom: 4px;

    @media (min-width: 320px) and (max-width: 767px) {
        margin: 0;
        height: 26px;
        line-height: 26px;
      }

    a {
      @media (min-width: 320px) and (max-width: 767px) {
        width: 23px;
        height: 23px;
      }
      img {
        transition: 0.2s;

        @media (min-width: 320px) and (max-width: 767px) {
          width: 100%;
        }
      }
    }
    a:hover img,
    a:hover svg {
      filter: invert(61%) sepia(55%) saturate(446%) hue-rotate(307deg)
        brightness(101%) contrast(89%);
    }
  }
`;
