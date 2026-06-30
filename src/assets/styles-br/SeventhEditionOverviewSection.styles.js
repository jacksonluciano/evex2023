/** @jsx jsx */
import { css } from "@emotion/react";
import { colorsBr } from "../styles/layout.styles";
import styled from "@emotion/styled"


export const VideoWrapper = styled.div`
  width: 100%;
  min-height: 800px;
  background-color: ${colorsBr.evex2026CreamYellow};
  padding: 88px 120px;
  display: flex;
  flex-direction: column;
  row-gap: 40px;

  .video_description {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2, p {
      line-height: 120%;
      margin: 0;
      max-width: 500px
    };
    h2 {
      color: ${colorsBr.evex2026Grey};
      font-weight: 500;
      font-size: 32px;
      span {
        font-weight: 700;
      }
    };
    p {
      color: #727171;
      font-weight: 500;
      font-size: 16px;
    }
  }
  @media (max-width: 768px) {
    padding: 57px 16px;
    .video_description {
      flex-direction: column;
      row-gap: 16px;
    }
  }
`
export const videoLayout = css`
  position: relative;
  width: 100%;
  height: 550px;
  border-radius: 24px;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
  }
`
export const CountersWrapper = styled.div`
  min-height: 200px;
  height: auto;
  width: 100%;
  display: flex;
  background-color: ${colorsBr.evex2026PrimaryOrange};
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 20px;
  padding: 36px 80px;

  .segmented_counter {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    gap: 24px;
    flex: 1 1 0;
    justify-content: space-around;
  }

  .counter_element {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    width: 280px;
    align-items: center;
    flex-shrink: 0;
  }

  .vertical_bar {
    position: relative;
    width: 1px;
    height: 130px;
    flex-shrink: 0;
  }

  .vertical_bar::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: ${colorsBr.evex2026DarkOrange};
    transform: scaleX(0.5);
    transform-origin: center;
  }

  .counter_value,.counter_label {
    font-family: 'Bw Gradual DEMO';
    color: ${colorsBr.evex2026DarkOrange};
    margin: 0;
    line-height: 120%;
  }

  .counter_value {
    font-weight: 700;
    font-size: 70px;
  }

  .counter_label {
    font-size: 20px;
    font-weight: 500;
  }
  @media(max-width: 1420px) {
    .vertical_bar {
      display: none;
    }
  }
  @media(max-width: 768px) {
    row-gap: 42px;
  }
  @media(max-width: 425px) {
    padding: 36px;
  }
`


