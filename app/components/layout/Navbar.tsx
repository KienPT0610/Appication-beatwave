import React from 'react'
import { NavLink} from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
    return (
        <nav>
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
        </nav>
    )
}
