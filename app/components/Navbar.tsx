import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

import { getConfig } from './utils/wagmi'
import { cookieToInitialState } from 'wagmi'
import { Providers } from './providers/Provider'
import { Account } from './providers/Account'

export const Navbar = () => {
    const initialState = cookieToInitialState(
        getConfig(),
        // headers().get('cookie'),
    )
    return (
        <nav>
            <Link to="/home" className="title" >Beatwave</Link>
            <ul>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/upload">Upload</NavLink>
                </li>
            </ul>
            <Providers initialState={initialState}>
                <Account />
            </Providers>
        </nav>
    )
}
