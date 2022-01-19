import React from "react";
import ReactPlayer from "react-player";
import "./ResponsivePlayer.css";

const ResponsivePlayer = () => (
  <div className="player-wrapper">
    <ReactPlayer
      url="https://www.youtube.com/watch?v=_A7-KGfAQks"
      className="react-player"
      playing
      width="100%"
      height="100%"
      controls={false}
    />
  </div>
);

export default ResponsivePlayer;