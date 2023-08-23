/** @jsx jsx */
import { css } from "@emotion/react";
import { colors } from './layout.styles'

export const footer1 = css`
  position: relative;
  padding: 80px 0 !important;
  background-color: ${colors.primaryMain};
`;

export const widget = css`
  position: relative;
  padding: 0px;

  h2 {
    font-size: 40px;
    letter-spacing: 0px;
    color: ${colors.secondaryMain};
    line-height: 48px;
    margin: 0 0 16px;
    position: relative;
    font-family: 'bw_gradual_demomedium';
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 6px;
    font-style: normal;
  }

  p{
    color: ${colors.secondaryMain};
  }

  @media (min-width: 320px) and (max-width: 767px) {
    padding-bottom: 40px;
    padding-left: 0;
  }
`;

export const aboutWidget = css`

  & img {
    max-width: 100%;
    height: auto;
    margin-bottom: 34px;
  }

  & p {
    font-size: 14px;
    letter-spacing: 0.56px;
    color: ${colors.secondaryMain};
    margin: 0;
    margin-bottom: 24px;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    padding-right: 0;
    margin-top: 0;
    text-align: center;
  }
  @media (min-width: 768px) and (max-width: 990px) {
    padding-right: 0;
  }
`;

export const contactWidget = css`
  padding-left: 60px;

  @media (min-width: 320px) and (max-width: 767px) {
    text-align: center;
  }

  & p {
    font-size: 14px;
    letter-spacing: 0.56px;
    color: ${colors.secondaryMain};
    margin: 0;
    line-height: 20px;

    &:nth-of-type(2){
      margin-bottom: 32px;
    }

    &:first-of-type { 
      @media (min-width: 320px) and (max-width: 767px) {
        margin-bottom: 0px;
      }
    }

    & a {
      color: ${colors.secondaryMain};
      &:hover {
        color: #e62b4a;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 990px) {
    padding-left: 0;
  }
`;

export const copyright = css`
  border-top: 1px solid #1a1a1a;
  font-size: 14px;
  line-height: 0.8;
  color: #aaaaaa;
  text-transform: uppercase;
  padding: 41px 0;

  & a {
    color: #aaaaaa;
    &:hover {
      color: #e62b4a;
    }
  }
`;

export const socialWidget = css`

 @media (min-width: 320px) and (max-width: 767px) {
    text-align: center;

    h2{
  margin-bottom: 32px;
}
  }
  & ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    max-width: 180px;
    @media (min-width: 320px) and (max-width: 767px) {
     margin: 0 auto;
     margin-bottom: 64px;
    }
    & li {
      padding: 0;
      margin: 0 0 0;
      list-style: none;
      display: block;
      & a {
        font-size: 14px;
        letter-spacing: 0.56px;
        color: #aaaaaa;
        margin: 0;
        display: flex;
        text-align: left;
        &:hover {
          color: #fff;
        }
        & i {
          font-size: 24px;
          color: #fff;
          margin-right: 7px;
          margin-left: 6px;
        }
        & svg{
          filter: brightness(0) invert(1);
          margin-right: 7px;
          margin-left: 6px;
          margin-bottom: -2px;
        }
      }
    }
  }
  @media (min-width: 320px) and (max-width: 767px) {
    padding-bottom: 80px;
  }
`;

export const messageBox=css`
    transition: .5s ease-in-out;
    background: #f18e96;
    border-radius: 8px;
    padding: 12px 24px;
    width: 100%;
    max-width: 428px;
    line-height: 24px;
    margin-top: 16px;
    position: absolute;

    p{
      margin: 0;
    color: #1e1e1c;
    font-size: 14px;
    text-align: center;
    }
`

export const subscribeFrom = css`
  position: relative;

  @media (min-width: 320px) and (max-width: 767px) {
    text-align: left;
  }

  & input[type="email"] {
    width: 260px;
    background: ${colors.primaryMain};
    color: ${colors.secondaryMain};
    border: 1px solid ${colors.secondaryMain};
    font-weight: 400;
    letter-spacing: 0.56px;
    padding: 10px 20px;
    outline: none;
    margin-right: 8px;

    &::-moz-placeholder,
    &::-ms-input-placeholder,
    &::-webkit-input-placeholder {
      color: ${colors.secondaryMain} !important;
      /* opacity: 1 !important; */
    }

    @media (min-width: 320px) and (max-width: 767px) {
      width: 57%;
      margin-bottom: 15px;
    }
  }

  button{
    background-color: ${colors.secondaryMain};
    color: ${colors.primaryMain};
    font-family: 'bw_gradual_demobold';
    border: none;
    box-shadow: none;
      padding: 21px 28px;

    &:hover{
      background-color: ${colors.secondaryMain};
      color: ${colors.primaryMain};
      box-shadow: none;
    }
  }

  button {
    @media (min-width: 320px) and (max-width: 767px) {
      margin-left: 0;
      width: 40%;
    padding: 21px 0;
    }
  }
`;