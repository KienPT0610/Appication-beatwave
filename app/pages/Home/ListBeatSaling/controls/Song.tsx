import React from "react";
import "./Song.css";

const Song = ({beat}: {beat: any}) => {
  return (
    <div className="song-container">
      {/* <img src={currentSong.cover} alt={currentSong.name} /> */}
      <h2>{beat.title}</h2>
      <h3>{beat.owner}</h3>
      <h4>Price: {beat.price} token BW</h4>
    </div>
  );
};

export default Song;
