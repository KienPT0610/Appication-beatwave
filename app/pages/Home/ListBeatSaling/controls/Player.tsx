import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import './Player.css';

const Player = ({
  currentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  setSongInfo,
  songInfo,
  songs,
  setCurrentSong,
  id,
  setSongs,
}: {
  currentSong: any;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  audioRef: React.MutableRefObject<any>;
  setSongInfo: React.Dispatch<React.SetStateAction<any>>;
  songInfo: any;
  songs: any[];
  setCurrentSong: React.Dispatch<React.SetStateAction<any>>;
  id: number;
  setSongs: React.Dispatch<React.SetStateAction<any[]>>;
}) => {
  //useEffect
  const activeLibraryHandler = (nextPrev: any) => {
    const newSongs = songs.map((song) => {
      if (song.id === nextPrev.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    console.log("Hey from useEffect form player JS");
  };
  //Event Handlers
  const dragHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const getTime = (time: number) =>
    Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
  //adding the styles
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          className="track"
        >
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          {/* <div style={trackAnim} className="animate-track"></div> */}
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "00:00"}</p>
      </div>
      <div className="play-control">
        {!isPlaying ? (
          <FontAwesomeIcon
            onClick={playSongHandler}
            size="2x"
            className="play"
            icon={faPlay}
          />
        ) : (
          <FontAwesomeIcon
            onClick={playSongHandler}
            size="2x"
            className="pause"
            icon={faPause}
          />
        )}
      </div>
    </div>
  );
};

export default Player;
