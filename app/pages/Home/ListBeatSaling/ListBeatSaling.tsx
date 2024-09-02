import React, {useEffect, useState} from 'react'
import { UserSideBar } from './UserSideBar'
import './ListBeatSaling.css'
import { Pagination } from '@mui/material'
import { getCountBeat, getListBeat } from '@/app/components/utils/data'
import { Beat } from '@/app/components/types/Beat'
import CardBeat from './CardBeat'

export const ListBeatSaling = () => {
  const [beats, setBeats] = useState<Beat[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await getListBeat()
      setBeats(data)
    }
    fetchData()
  }
  , [])
  return (
    <div className="listBeatSaling">
      <div className="sound_body">
        <div className='title'>
          <h2>Recent</h2>
        </div>
        Soundbody
        <div className="beatList">
          {beats.filter((beat) => !beat.isForSale).map((beat) => (
            <CardBeat key={beat.id} beat={beat} />
          ))}
        </div>
        {/* <Pagination count={10} sx={{ backgroundColor: 'white', zIndex: 1}} variant="outlined" color="secondary" /> */}
      </div>
      <div className="userSideBar">
        <UserSideBar />
      </div>
    </div>
  )
}
