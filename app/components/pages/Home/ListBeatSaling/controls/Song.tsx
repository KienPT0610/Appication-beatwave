import React from "react";

const Song = ({beat}: {beat: any}) => {
  return (
    <div className="song-container">
      {/* <img src={currentSong.cover} alt={currentSong.name} /> */}
      <h2>{beat.title}</h2>
      <h3>{beat.owner}</h3>
    </div>
  );
};

export default Song;
