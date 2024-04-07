/** @jsx jsx */
import React, { Fragment, useState } from 'react'
import ModalVideo from 'react-modal-video'
import Video from "@/components/video";
import 'react-modal-video/css/modal-video.min.css'
import { Col, Container, Row } from 'react-bootstrap'
import { jsx } from '@emotion/react'
import { videoWrap, whatWedo } from '../assets/styles-br/video-three.styles'

const VideoThree = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <Fragment>
      <section css={whatWedo}>
        <Container>
          <Row>
            <Col lg={12}>
              <section>
                <div css={videoWrap} className="mb-0">
                  <Video
                    videoSrcURL="https://www.youtube.com/embed/5ah-KK5t8Ok?rel=0"
                    videoTitle="Highlights EVEx 2022 - Energy Virtual Experience"
                  />
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
      {(typeof (window) !== 'undefined') && <ModalVideo
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
