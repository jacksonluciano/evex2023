/** @jsx jsx */
import React from "react";
import { jsx } from '@emotion/react'
import Video from "./video";

import { 
  heroBg
}  from '../assets/styles/HeroVideo.styles'

const HeroVideo = () => {
  return (
    <section css={[heroBg]}>
      <Video                     
        videoSrcURL={`https://player.vimeo.com/video/996344502?h=e42f98371f&api=1&background=1&autoplay=1&loop=1&autopause=0`}
        videoTitle="Official Music Video on YouTube"
      />
    </section>
  );
};

export default HeroVideo;
