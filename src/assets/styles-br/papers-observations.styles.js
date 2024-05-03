/** @jsx jsx */
import { css } from "@emotion/react";

export const bgPapers = css`
  background: #e3e2e2;
  position: relative;

  .logo {
    left: 0;
    position: absolute;
    top: 230px;
    @media (min-width: 768px) and (max-width: 1280px) {
      width: 120px;
    }
  }

  @media (max-width: 992px) {
    .logo {
      width: 60px;
      top: 400px;
    }
  }

  @media (max-width: 768px) {
    .logo {
      width: 60px;
    }
  }

  @media (max-width: 576px) {
    .logo {
      display: none;
    }
  }
`;

export const imageContainer = css`
  img {
    display: block;
    margin-inline: auto;
    max-width: 544px;
    width: 100%;
    @media (min-width: 768px) and (max-width: 1280px) {
      margin-left: 120px;
    }
  }

  @media (max-width: 576px) {
    padding: 0px 33px;
  }
`;

export const container = css`
  padding-block: 117px;

  @media (max-width: 768px) {
    gap: 40px;
  }

  @media (max-width: 576px) {
    gap: 55px;
    padding: 55px 0px 88px;
  }
`;

export const contentContainer = css`
  .title {
    font-family: "Bw Gradual DEMO";
    font-weight: bold;
    font-size: 56px;
    line-height: 67.2px;
    margin-bottom: 33px;
    padding-left: 30px;
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
        font-family: "Bw Gradual DEMO";
        font-weight: bold;
        font-size: 90px;
        line-height: 1;
        margin-bottom: 0;
        /* position: absolute; */
        position: relative;
        flex: 1 0 57px;
      }

      &_one {
        top: -10px;
        left: 32px;
      }

      &_two {
        top: -20px;
        left: 20px;
      }

      &_three {
        top: -10px;
        left: 20px;
      }

      &_content {
        color: #000000;
        font-size: 16px;
        font-weight: 400;
        /* left: 25px; */
        line-height: 21.79px;
        text-align: left;
        position: relative;
        z-index: 2;
        margin-bottom: 0;
      }
    }
  }

  @media (max-width: 576px) {
    .title {
      font-size: 20px;
      line-height: 120%;
      margin-bottom: 28px;
    }

    .content {
      padding: 0px 27px 0px 7px;

      .item {
        &_number {
          flex: 1 0 38px;
          font-size: 60px;
        }

        &_one {
          top: -3px;
          left: 21px;
        }

        &_two {
          top: 0px;
          left: 14px;
        }

        &_three {
          top: 0px;
          left: 15px;
        }

        &_content {
          font-size: 12px;
          line-height: 150%;
        }
      }
    }
  }

  @media (max-width: 992px) {
    padding: 0px 15px;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 40px;
    }
  }
`;

export const accordion = css`
  padding-bottom: 200px;
  padding-top: 67px;
  position: relative;

  h3 {
    font-family: "Bw Gradual DEMO";
    font-weight: bold;
  }

  .logo_mobile {
    display: none;
    width: 33px;
  }

  @media (max-width: 768px) {
    padding: 60px 0px 300px;

    .row {
      gap: 27px;
      padding-inline: 33px;
    }
  }

  @media (max-width: 576px) {
    .logo_mobile {
      display: initial;
      position: absolute;
      left: 0;
      top: 108px;
    }
  }
`;
