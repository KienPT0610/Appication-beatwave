//multiplayer

import React from 'react';
import { Beat } from '@/app/components/types/Beat';
import Controls from './controls/Controls';
// import './CardBeat.css';

type CardBeatProps = {
  beat: Beat;
};

export const CardBeat = ({ beat }: CardBeatProps) => {
  return (
      <div className="beatInfo">
        <Controls beat={beat} />
      </div>
  );
};

export default CardBeat;