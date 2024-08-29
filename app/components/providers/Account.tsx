import React, { useEffect, useState } from 'react'
import { ButtonConnectWallet } from './ButtonConnectWallet'
import "./Account.css"
import { useAccount } from 'wagmi'

export const Account = () => {
  const account = useAccount()
  const [connect, setConnect] = useState(false)
  
  useEffect(() => {
    console.log('account:', account)
    if(account.status === 'connected') {
      setConnect(true)
    } else {
      setConnect(false)
    }
  }, [account])

  return (
    <div className='container'>
      <div className={connect ? 'connect' : 'disconnect'} >
        <div className='account'>address: {account.address}</div>
        <div className='balance'>balance: 1000 token BW</div>
      </div>
      <div className='btn'>
        <ButtonConnectWallet />
      </div>   
    </div>
  )
}
