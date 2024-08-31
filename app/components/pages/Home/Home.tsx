import React from 'react'
import Image from 'next/image'
import background from '../../../public/background.png'
import './Home.css'
import { NavLink } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="home">
      <div className='container'>
        <div className='profileHeader'>
          <div className='profileHeader-info'>
            <div className='profileRadius'>
              <h1>1</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="userInfoBar">
        <div className="profileTab">
          <ul>
            <li>
              <NavLink to="/">All</NavLink>
            </li>
            <li>
              <NavLink to="/">Popular tracks</NavLink>
            </li>
            <li>
              <NavLink to="/">Tracks</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2>Recent</h2>
      </div>
      <div>
        list beat
      </div>
    </div>
  )
}
