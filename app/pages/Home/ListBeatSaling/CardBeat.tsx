import React from 'react';
import { Beat } from '../../../components/types/Beat';
import Controls from './controls/Controls';
import { Avatar, Button, Input } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'; // Import the SendIcon component
import './CardBeat.css';
import { handleBuyBeat, transferOwner } from '../../../components/utils/sendData';
import { useAccount } from 'wagmi';
import { Address } from 'viem';

type CardBeatProps = {
  beat: Beat;
};

export const CardBeat = ({ beat }: CardBeatProps) => {
  const account = useAccount();

  return (
    <div className="beatInfo">
      <div className="avatar">
        <Avatar sx={{ width: 120, height: 120, position: 'inherit', margin: 0 }} />
      </div>
      <div className="controls">
        <Controls beat={beat} page={"home"} />
        <div className="comment">
          <Input placeholder="Write a comment" />
          <Button variant="contained" endIcon={<SendIcon />} >Send</Button>
        </div>
      </div>
      <div className="btn">
        <Button variant="contained" onClick={() => handleBuyBeat(account.address as Address, beat.price, beat.id)}>Buy</Button>
        <Button variant="contained">Favorit</Button>
        <Button variant="contained">Donate</Button> 
      </div>
    </div>
  );
};

export default CardBeat;