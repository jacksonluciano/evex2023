/** @jsx jsx */
import React, { Fragment, useState } from "react";
// import { VideoTwoData } from "@/data";
import ModalVideo from "react-modal-video";
import Element03 from "@/images/elements/element-03.svg"
import Video from "@/components/video";
import "react-modal-video/css/modal-video.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from '@emotion/react'

import { 
  whatWedo, 
  element03,
}  from '../assets/styles/Video.styles'

import {  
  videoWrap
}  from '../assets/styles/VideoTwo.styles'

import {
  commonSection
} from "../assets/styles/layout.styles";

const VideoTwo = () => {
  const [isOpen, setOpen] = useState(false);
  // const { sectionContent, video } = VideoTwoData;
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
                  {/* <div css={playVideo}>
                    <a
                      className="video_popup"
                      onClick={e => {
                        e.preventDefault();
                        setOpen(true);
                      }}
                      href="#"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  </div> */}
                    <Video
            videoSrcURL="https://www.youtube.com/embed/7BcVpK5X1XE?si=2ZWLY5OyUolLft2r"
            videoTitle="Highlights EVEx Lisboa 2022"
          />
                </div>
                <img css={element03} src={Element03} />
             </section>
             
            </Col>
          </Row>
        </Container>
      </section>
      {(typeof(window) !== 'undefined') && <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        videoId="WihQbRen5bc"
        />
        }
    </Fragment>
  );
};

export default VideoTwo;
