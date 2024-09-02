import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'
import { ListBeatSaling } from './ListBeatSaling/ListBeatSaling'

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
      <div className='list-beat'>
        <ListBeatSaling />
      </div>
    </div>
  )
}
