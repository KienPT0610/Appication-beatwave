import React from "react";
import { Link } from "react-router-dom";
import { Account } from "../providers/Account";
import { Providers } from "../providers/Provider";
import { getConfig } from '../utils/wagmi'
import { cookieToInitialState } from 'wagmi'
import Image from 'next/image';
import icon from "../../../public/icon.png"
import './Header.css'

export const Header = () => {
  const initialState = cookieToInitialState(
    getConfig(),
    // headers().get('cookie'),
  )
  return (
    <header>
      <Link to="/home" className="title">
        Beatwave
        <Image className="icon" src={icon} alt="icon-app" />
      </Link>
      <div className="account">
        <Providers initialState={initialState}>
          <Account />
        </Providers>
      </div>
    </header>
  );
};
