// "use client"
import React, {useEffect} from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import "./ButtonConnectWallet.css"

export const ButtonConnectWallet = () => {
  const account = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()

  return (
    <div className='button'> 
      { account.status === 'connected' ? (
        <button onClick={() => disconnect()}>Disconnect</button>
      ) : (
        <button onClick={() => connect({connector: connectors[0]})}>Connect</button>
      )}
    </div>
  );
}
