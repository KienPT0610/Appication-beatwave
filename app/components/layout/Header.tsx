import React from "react";
import { Link } from "react-router-dom";
import { Account } from "../providers/Account";

import Image from 'next/image';
import icon from "../../../public/icon.png"
import './Header.css'

export const Header = () => {
  return (
    <header>
      <Link to="/home" className="title">
        Beatwave
        <Image className="icon" src={icon} alt="icon-app" />
      </Link>
      <div className="account">
        <Account />
      </div>
    </header>
  );
};
