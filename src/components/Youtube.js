import React from "react";
import YouTube from "react-youtube";

const YouTubePlayer = () => {
    const videoId = "V27_-wLvicY"; // Substitua pelo ID do vídeo do YouTube que você deseja incorporar.

  const opts = {
    playerVars: {
        autoplay: 1,
        controls: 0,
        loop: 1,
        rel: 0,
        mute: 1,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />
}

export default YouTubePlayer;
