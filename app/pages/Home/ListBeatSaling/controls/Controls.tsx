import { useRef, useState } from "react";
import Player from "./Player";
import Song from "./Song";

//IMporting DATA
import data from "./data";

function Controls({ beat, page }: { beat: any, page: string }) {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(beat);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const timeUpdateHandler = (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    const current = (e.target as HTMLAudioElement).currentTime;
    const duration = (e.target as HTMLAudioElement).duration;
    //calculating percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    console.log();
    setSongInfo({
      currentTime: current,
      duration,
      animationPercentage: animation,
    });
  };
  const songEndHandler = async () => {
    // let currentIndex = songs.findIndex((song) => song.id === currentSong.id);

    // await setCurrentSong(songs[(currentIndex + 1) % songs.length]);

    if (isPlaying && audioRef.current) (audioRef.current as HTMLAudioElement).play();
  };
  return (
    <div>
      {
        page === "home" &&
        <Song beat={beat} /> 
      }
      <Player
        id={beat.id}
        songs={songs}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        src={`https://crimson-worried-lungfish-936.mypinata.cloud/ipfs/${beat.cid}`}
        ref={audioRef}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default Controls;
