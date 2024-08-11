/** @jsx jsx */
import React, { Fragment, useState } from "react";
// import { VideoThreeData } from "@/data";
import ModalVideo from "react-modal-video";
import Video from "@/components/video";
import Element05 from "@/images/elements/element-05.svg"
import "react-modal-video/css/modal-video.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from '@emotion/react'

import { 
  whatWedo, 
  element05,
}  from '../assets/styles/videoThree.styles'

import {  
  videoWrap
}  from '../assets/styles/VideoTwo.styles'

import {
  commonSection
} from "../assets/styles/layout.styles";

const VideoThree = () => {
  const [isOpen, setOpen] = useState(false);
  // const { sectionContent, video } = VideoThreeData;
  return (
    <Fragment>
      <section css={[commonSection,whatWedo]}>
        <Container>
          {/* <Row>
            <Col lg={12} className="text-center">
              <SectionTitle data={sectionContent} />
            </Col>
          </Row> */}
          <Row>
            <Col lg={12}>
             <section>
              <div css={videoWrap} className="mb-0"> 
              <Video
            videoSrcURL="https://www.youtube.com/embed/7BcVpK5X1XE?si=2ZWLY5OyUolLft2r"
            videoTitle="Highlights EVEx 2023 - Lisbon Energy Experience"
          />
                </div>
                <img css={element05} src={Element05} />
             </section>
             
            </Col>
          </Row>
        </Container>
      </section>
      {(typeof(window) !== 'undefined') && <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        videoId="672843429"
        />
        }
    </Fragment>
  );
};

export default VideoThree;
