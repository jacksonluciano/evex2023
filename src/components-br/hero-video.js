/** @jsx jsx */
import React from "react";
import { jsx } from '@emotion/react'
import Video from "../components/video";

import { 
  heroBg
}  from '../assets/styles-br/HeroVideo.styles'


const HeroVideo = () => {
  return (
    <section css={[heroBg]}>
      <Video                     
        videoSrcURL={`https://player.vimeo.com/video/940374003?h=0cb90d5bddf&api=1&background=1&autoplay=1&loop=1&autopause=0`}
        videoTitle="Evex Brasil 2024"
      />
    </section>
  );
};

export default HeroVideo;
