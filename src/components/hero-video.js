/** @jsx jsx */
import React from "react";
import { AboutTwoData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from '@emotion/react'
import Video from "./video";

import { 
  abAgency,
  pr79,
  mb45,
  abImg,
  heroBg
}  from '../assets/styles/HeroVideo.styles'
import {
  secTitle,
  subtitle,
  secDesk,
  commonSection,
  commonBtn,
  redBg
} from "../assets/styles/layout.styles";

const HeroVideo = () => {
  const { sectionContent, button, gallery } = AboutTwoData;
  return (
    <section css={[heroBg]}>
         <Video
        videoSrcURL={`https://player.vimeo.com/video/825907524?h=e42f98371f&api=1&background=1&autoplay=1&loop=1&autopause=0`}
        videoTitle="Official Music Video on YouTube"
      />
    </section>
  );
};

export default HeroVideo;
