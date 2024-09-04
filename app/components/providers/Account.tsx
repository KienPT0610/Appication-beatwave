import React, { useEffect, useState } from 'react'
import { ButtonConnectWallet } from './ButtonConnectWallet'
import "./Account.css"
import { useAccount } from 'wagmi'
import { getBalance } from '../utils/data'

export const Account = () => {
  const account = useAccount()
  const [connect, setConnect] = useState(false)
  const [balance, setBalance] = useState(0)
  
  useEffect(() => {
    console.log('account:', account)
    if(account.status === 'connected') {
      setConnect(true)
    } else {
      setConnect(false)
    }
  }, [account])

  useEffect(() => {
    if(account.status === 'connected') {
      getBalance(account.address).then((balance) => {
        setBalance(balance)
      })
    }
  }, [account])

  return (
    <div className='container'>
      <div className={connect ? 'connect' : 'disconnect'} >
        <div className='account'>address: {account.address}</div>
        <div className='balance'>balance: {balance} token BW</div>
      </div>
      <div className='btn'>
        <ButtonConnectWallet />
      </div>   
    </div>
  )
}
