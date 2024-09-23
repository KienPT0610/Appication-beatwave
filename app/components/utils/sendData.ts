import { publicClient, walletClient } from "./client";
import { contract } from "../abi/abi";
import { Address } from "viem";

const contractAddress = contract.address as Address;

export const handleBuyBeat = async (
  account: Address,
  amount: number,
  _id: number
) => {
  const { request } = await publicClient.simulateContract({
    address: contract.address as Address,
    abi: contract.abi,
    functionName: "buyBeat",
    args: [amount, _id],
    account,
  });
  const hash = await walletClient.writeContract(request);
  return hash;
};

//function to transfer new owner for beat
export const transferOwner = async (
  id: number,
  newOwner: Address,
  account: Address
) => {
  const { request } = await publicClient.simulateContract({
    address: contract.address as Address,
    abi: contract.abi,
    functionName: "transferOwner",
    args: [id, newOwner],
    account,
  });
  const hash = await walletClient.writeContract(request);
};

//function to delete beat is for sale
export const deleBeatIsForSale = async (id: number, account: Address) => {
  const { request } = await publicClient.simulateContract({
    address: contractAddress,
    abi: contract.abi,
    functionName: "deleteBeatForSale",
    args: [id],
    account,
  });
  const hash = await walletClient.writeContract(request);
};

//function to up sale
/*
args
id: id of beat
price: price to up sale
*/
export const saleBeat = async (id: number, price: number, account: Address) => {
  const { request } = await publicClient.simulateContract({
    address: contractAddress,
    abi: contract.abi,
    functionName: "listBeatForSale",
    args: [id, price],
    account,
  });
  const hash = walletClient.writeContract(request);
};

//function to upload beat to ipfs and save to chain
/*
args
cid: cid in IPFS
title: of Beat
*/
export const uploadBeat = async (
  cid: string,
  title: string,
  account: Address
) => {
  const { request } = await publicClient.simulateContract({
    address: contractAddress,
    abi: contract.abi,
    functionName: "uploadBeat",
    args: [cid, title],
    account,
  });
  const hash = walletClient.writeContract(request);
};

//function mint token bw for other
export const mint = async (to: Address, amount: number, account: Address) => {
  const { request } = await publicClient.simulateContract({
    address: contractAddress,
    abi: contract.abi,
    functionName: "mint",
    args: [to, amount],
    account,
  });
  const hash = walletClient.writeContract(request);
};

//function burn token bw for other
export const burn = async (from: Address, amount: number, account: Address) => {
  const { request } = await publicClient.simulateContract({
    address: contractAddress,
    abi: contract.abi,
    functionName: "burn",
    args: [from, amount],
    account,
  });
  const hash = walletClient.writeContract(request);
};

//function transfer token bw for other
export const transfer = async (to: Address, amount: number, account: Address) => {
  const { request } = await publicClient.simulateContract({
    address: contractAddress,
    abi: contract.abi,
    functionName: "transfer",
    args: [to, amount],
    account,
  });
  const hash = walletClient.writeContract(request);
};
