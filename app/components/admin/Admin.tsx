import React from 'react'
import './admin.css'
import { Address } from 'viem';
import { transfer } from '../utils/sendData';
import { useAccount } from 'wagmi';

export const Admin = () => {
  const account = useAccount();

  const hanleTransfer = async (e: React.FormEvent) => {
    const formData = new FormData(e.target as HTMLFormElement);
    const address = formData.get("address") as Address;
    const amount = formData.get("amount");

    await transfer(address, Number(amount), account.address as Address);
  }

  return (
    <div className='admin'>
      <form onSubmit={hanleTransfer}>
        <label htmlFor="">Use For Token BW</label>
        <input type="text" name='address' placeholder='Address' required />
        <input type="text" name='amount' placeholder='amount: number' required />
        <div className="btn-admin">
          <button>mint</button>
          <button>burn</button>
          <button onClick={hanleTransfer} type='submit'>transfer</button>
        </div>
      </form>
    </div>
  )
}
