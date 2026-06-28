/** @jsx jsx */
import React from "react";
import { jsx } from '@emotion/react'
import Video from "@/components/video";
import AnimatedCounter from "./AnimatedCounter";
import {
  CountersWrapper,
  VideoWrapper,
  videoLayout
}  from '../assets/styles-br/SeventhEditionOverviewSection.styles'


const SeventhEditionOverviewSection = () => {
  const stats = [
    { value: 200, label: 'Participantes presenciais' },
    { value: 50, label: 'Speakers ibero-americanos' },
    { value: 15, label: 'Patrocinadores'},
    { value: 10, label: 'Painéis temáticos'},
  ];
  return (
   <section>
      <CountersWrapper>
        {stats.map((item, idx, total) => {
          return (
            <div key={item.label} className="segmented_counter">
              <div className="counter_element" >
                <h2 className="counter_value">
                  <AnimatedCounter end={item.value} />
                </h2>
                <p className="counter_label">{item.label}</p>
              </div>
              {(idx !== total.length-1) && <div className="vertical_bar"/>}
            </div>
          )
        })}
      </CountersWrapper>
      <VideoWrapper>
        <div className="video_description">
          <h2>Dois dias que conectam o setor e <span>impulsionam a nova energia na Ibero-América</span></h2>
          <p>
            Muito além de um evento, o EVEx Brasil reúne líderes, empresas e instituições do espaço 
            ibero-americano em uma experiência que combina conteúdo estratégico, networking de alto 
            nível e geração de negócios. Assista ao vídeo da última edição e conheça a experiência EVEx.
          </p>
        </div>
         <Video
            css={videoLayout}
            videoTitle="EVEx Brasil"
            videoSrcURL="https://www.youtube.com/embed/ySxvepARPJM?autoplay=1&mute=1&playsinline=1&rel=0&loop=1&playlist=ySxvepARPJM"
          />
      </VideoWrapper>
    </section>
  );
};

export default SeventhEditionOverviewSection;
