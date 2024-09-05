import React, { useEffect, useState } from 'react'
import { Beat } from '../../components/types/Beat'
import { getListBeat } from '@/app/components/utils/data'
import { useAccount } from 'wagmi'
import { ManageCard } from './ManageCard'
import './Manage.css'

export const Manage = () => {
  const account = useAccount()
  const [beats, setBeats] = useState<Beat[]>([])

  useEffect(() => {
    const fetchData = async () => {
      if(account.status === 'disconnected') {
        return alert("Metamask not connected")
      }
      const data = await getListBeat()
      console.log("manage data", data)
      setBeats(data)
    }
    fetchData()
  }, [account.status])

  return (
    <div className='manage-body'>
      {
        beats.filter((beat) => beat.owner === account.address).map((beat) => (
          <div key={beat.id}>
            <ManageCard beat={beat} />
          </div>
        ))
      }
    </div>
  )
}
