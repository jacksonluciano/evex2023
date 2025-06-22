/** @jsx jsx */
import React from "react";
import { LisboaParaNatal } from "@/data-br";
import LisboaToNatalBg from '@/images-br/home-br/lisboaToNatal2025.jpg';
import LisboaToNatalMobileBg from '@/images-br/home-br/lisboaToNatalMobile2025.jpg';
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from '@emotion/react'

import { 
  abAgency,
  pr79,
  mb45,
  about,
  element01,
  imgFull,
  text,
  feature
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
              <h2 css={[secTitle, mb45]}>EVEx Brasil 2025</h2>
              {/* <span>EVEx Brasil 2024</span> */}
              <p css={[secDesk,text]}>{sectionContent.text}</p>
              <p css={[secDesk,feature]}>{sectionContent.feature}</p>
           </div>
          </Col>
        {/* <img css={element01} src={element} /> */}

    </section>
  );
};

export default LisboaToNatal;
