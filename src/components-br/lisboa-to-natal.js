/** @jsx jsx */
import React from "react";
import { LisboaParaNatal } from "@/data-br";
import LisboaToNatalBg from '@/images-br/home-br/lisboaToNatal.jpg';
import LisboaToNatalMobileBg from '@/images-br/home-br/lisboaToNatalMobile.png';
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from '@emotion/react'

import { 
  abAgency,
  pr79,
  mb45,
  about,
  element01,
  imgFull
}  from '../assets/styles-br/LisboaToNatal.styles'
import {
  secTitle,
  secDesk,
  noPaddingRight,
  noPaddingLeft
} from "../assets/styles/layout.styles";

const LisboaToNatal = () => {
  const { sectionContent, image, element} = LisboaParaNatal;
  return (
    <section css={[abAgency]}>
      <img src={LisboaToNatalBg} className="desktopBg" />
      <img src={LisboaToNatalMobileBg} className="mobileBg" />
          <Col css={pr79} lg={12} md={12} sm={12}>
           <div css={about}>
              <h2 css={[secTitle, mb45]}>De Lisboa para Natal:</h2>
              <span>EVEx Brasil 2024</span>
              <p css={secDesk}>{sectionContent.text}</p>
           </div>
          </Col>
        <img css={element01} src={element} />

    </section>
  );
};

export default LisboaToNatal;
