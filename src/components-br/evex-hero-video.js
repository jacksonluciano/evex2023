/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/react'
import VideoThree from './video-three'
import { title } from '../assets/styles-br/evex-hero-video.styles'

const EvexHeroVideo = () => {
  return (
    <section>
      <div css={title}>
        <h2>Confira os Highlights da Edição Passada</h2>
      </div>

      <VideoThree />
    </section>
  )
}

export default EvexHeroVideo