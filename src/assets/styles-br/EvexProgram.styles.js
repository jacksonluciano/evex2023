/** @jsx jsx */
import { css } from "@emotion/react";
import { colorsBr } from "../styles/layout.styles";
import styled from "@emotion/styled";

export const root = css`
  width: 100%;
  min-height: 1400px;
  background-color: ${colorsBr.evex2026PrimaryBlue};
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 42px;
  padding: 92px 150px 100px;
  font-family: 'Bw Gradual DEMO';
  h2.title {
    font-size: 32px;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: 0%;
    text-align: center;
    margin: 0;
    color: ${colorsBr.evex2026CreamYellow};
    span {
      font-weight: 700;
    }
  }
  .cards_wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }
  @media(max-width: 768px){
    padding: 52px 16px;
  }
`
export const imgClass = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

`

export const CardComponent = styled.div`
  width: 100%;
  height: 170px;
  border-radius: 16px;
  padding: 16px;
  background-color: ${colorsBr.evex2026CreamYellow};
  display: flex;
  align-items: center;
  column-gap: 20px;
  .description {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    align-items: flex-start;
    h2,p {
      letter-spacing: 0%;
      margin: 0;
    }
    h2 {
      color: #0F0B0C;
      font-weight: 500;
      font-size: 24px;
      line-height: 120%;
      @media (max-width: 768px) {
        display: none;
      }
    }
    p {
      color: #3F3C3D;
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;
      max-width: 800px;
    }
  }
  .responsive_title {
    display: none;
  }
  @media (max-width: 910px) {
    min-height: 170px;
    height: unset;
  }
  @media(max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    display: flex;
    overflow: visible;
    align-items: center;
    row-gap: 8px;
    .responsive_title {
      display: block;
      letter-spacing: 0%;
      margin: 0;
      color: #0F0B0C;
      font-weight: 500;
      font-size: 24px;
      line-height: 120%;
    }
    .responsive_wrapper{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      column-gap: 16px;
    }

  }
`

export const imageWrapper = (bgColor) => css`
  background-color: ${bgColor};
  border-radius: 12px;
  width: 180px;
  height: 135px;
  overflow: hidden;
  @media(max-width: 768px) {
    width: 110px;
    height: 90px;
  }
`