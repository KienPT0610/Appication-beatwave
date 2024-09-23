import { Address, getContract } from "viem"
import { contract } from "../abi/abi" 
import { publicClient, walletClient } from "./client"
import { Beat } from "../types/Beat"

export const contractRead = getContract({
    address: contract.address as Address,
    abi: contract.abi,
    client: publicClient
})

export const getCountBeat = async () => {
    const count = await contractRead.read.beatCountId();
    return count;
}

export const getAdmin = async () => {
    const admin = await contractRead.read.admin();
    return admin as Address;
}

export const getBalance = async (address: Address) => {
    const balance = await contractRead.read.balanceOf([address]);
    return Number(balance);
}

export const getListBeat = async () => {
    const count = await getCountBeat();
    let beatArray: Beat[] = [];
    for (let i = 1; i <= Number(count); i++) {
        const beat: any = await contractRead.read.beats([i]);
        const typeBeat: Beat = {
            id: i,
            owner: beat[0],  
            cid: beat[1],       
            title: beat[2],         
            price: Number(beat[3]), 
            isForSale: beat[4]
        };

        beatArray.push(typeBeat);

    }
    
    return beatArray;
}