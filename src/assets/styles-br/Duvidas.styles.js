/** @jsx jsx */
import { css } from "@emotion/react";
import { colors } from "../styles/layout.styles";

export const abAgency = css`
  background-color: #e3e3e2;
  position: relative;
  overflow-x: hidden;

  padding-top: 40px;

  @media (min-width: 320px) and (max-width: 767px) {
    padding-top: 120px;
  }

  img {
    width: 100%;
  }
`;

export const pr79 = css`
  padding-right: 79px;

  @media (min-width: 320px) and (max-width: 767px) {
    padding-right: 15px;
    text-align: center;
  }
  @media (min-width: 768px) and (max-width: 990px) {
    padding-right: 15px;
  }
`;

export const mb45 = css`
  margin-bottom: 40px;
  @media (min-width: 768px) and (max-width: 990px) {
    margin-bottom: 30px;
  }
`;

export const about = css`
  position: relative;
  padding: 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  color: ${colors.secondaryMain};
  align-items: center;

  h2 {
    color: ${colors.primaryMain};
    font-family: "bw_gradual_demobold";
    /* &:after {
      content: "";
      height: 3px;
      background-color: ${colors.primaryMain};
      display: block;
      margin-top: -3px;
    } */
  }

  p {
    width: 100%;
    max-width: 920px;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    text-align: center;
  }
  button {
    font-family: "bw_gradual_demobold";
    font-size: 16px;
  }
  h4 {
    text-decoration: underline;
    margin-bottom: 16px;
    text-align: center;
  }
`;
export const realization = css`
  width: 100%;
  max-width: 980px;
  margin: 0 auto 80px;

  div div {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    margin-bottom: 64px;
    &:nth-of-type(1) {
      img {
        max-width: 180px;
      }
    }
    @media (min-width: 320px) and (max-width: 767px) {
      margin-bottom: 32px;
    }
  }

  h4 {
    margin-bottom: 48px;
    font-family: "bw_gradual_demobold";
    /* text-decoration: underline; */
  }

  img {
    width: 100%;
    max-width: 256px;
  }
`;

export const contact = css`
  width: 100%;
  /* max-width: 980px; */
  margin: 0 auto;
  /* padding-bottom: 60px; */

  .inner-div {
    width: 100%;
    /* max-width: 410px; */

    /* &.rl {
      float: right;
    } */
  }

  h2 {
    font-size: 56px;
    font-family: "bw_gradual_demobold";
    margin-bottom: 16px;
  }

  p {
    width: 100%;
    max-width: 500px;
    font-size: 14px;
    margin-bottom: 32px;
    color: #000;
    line-height: 21px;
  }

  button {
    margin-bottom: 16px;
  }

  .content {
    background: radial-gradient(
      76.58% 213.19% at 97.41% 97.62%,
      #fe05c5 3.05%,
      #ef2483 35.31%,
      #e3e3e2 100%
    );
    position: relative;
    height: 100%;
    min-height: 244px;
  }

  #contato {
    background: radial-gradient(
      76.58% 213.19% at 97.41% 97.62%,
      #fe05c5 3.05%,
      #ef2483 35.31%,
      #e3e3e2 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 40px 60px 40px 16px;

    h2 {
      text-decoration: none;
      letter-spacing: 0;
      font-family: "bw_gradual_demobold";
      @media (min-width: 320px) and (max-width: 767px) {
        font-size: 20px;
      }
    }

    a {
      display: flex;
      align-self: flex-start;
    }
  }

  #contact-form {
    padding: 40px 60px;
    display: flex;
    justify-content: flex-end;

    .mobile {
      display: none;
    }

    @media (min-width: 320px) and (max-width: 767px) {
      padding: 40px 40px;

      .mobile {
        display: block;
        font-size: 20px;
      }
      .desktop {
        display: none;
      }
    }

    img {
      width: 130px;
      position: absolute;
      left: 0;
      bottom: 32px;
      @media (min-width: 320px) and (max-width: 767px) {
        width: 39px;
        bottom: 300px;
      }
      @media (min-width: 768px) and (max-width: 1300px) {
        width: 88px;
        bottom: 106px;
      }
    }
  }
`;

export const contactFrom = css`
  position: relative;

  @media (min-width: 320px) and (max-width: 767px) {
  }

  input {
    width: 100%;
    border: 1px solid ${colors.primaryMain};
    height: 37px;
    padding: 10px;
    margin-bottom: 8px;
  }

  textarea {
    border: 1px solid ${colors.primaryMain};
    height: 90px;
    resize: none;
    line-height: 30px;
    padding: 21px 10px;
    margin-bottom: 21px;
  }

  p {
    color: ${colors.primaryMain};
  }

  button {
    padding: 16px 42.5px;
  }
`;

export const element02 = css`
  position: absolute;
  width: auto !important;
  top: -70px;
  left: -15px;
`;

export const imgFull = css`
  width: 100%;
`;

export const abImg = css`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;

  &:nth-child(2) {
    position: relative;
    top: 30px;
    margin-top: 0;
    &:after {
      @media (min-width: 768px) and (max-width: 990px) {
        width: 350px;
        left: 15px;
      }
    }
  }

  & img {
    max-width: 100%;
    height: auto;
    -webkit-box-shadow: -2px 4px 30px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: -2px 4px 30px 0px rgba(0, 0, 0, 0.3);
    box-shadow: -2px 4px 30px 0px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 320px) and (max-width: 767px) {
    position: relative;
    margin: 50px 0 0;
    &:after {
      display: none;
    }
  }
  @media (min-width: 768px) and (max-width: 990px) {
    position: relative;
    float: right;
    right: -5px;
  }
`;
export const element14 = css`
  position: absolute;
  width: auto !important;
  top: 0px;
  left: 0;
  z-index: 0;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 30% !important;
  }
`;

export const element15 = css`
  position: absolute;
  width: auto !important;
  bottom: 0px;
  right: 0;
  z-index: 0;

  @media (min-width: 320px) and (max-width: 767px) {
    bottom: 170px;
    width: 60% !important;
  }
`;

export const element8 = css`
  position: absolute;
  width: auto !important;
  transform: translateX(-50%);
  top: 0;
  left: 50%;
  z-index: -1;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 90% !important;
    left: 45%;
    top: 415px;
  }
`;

export const messageBox = css`
  transition: 0.5s ease-in-out;
  background: #8dffb5;
  width: 100%;
  max-width: 428px;
  line-height: 24px;
  margin-top: 16px;
  position: absolute;
  top: -116px;
  z-index: 999;
  padding: 22px 16px;

  p {
    margin: 0;
    color: #1e1e1c;
    font-size: 14px;
    text-align: center;
  }
`;
