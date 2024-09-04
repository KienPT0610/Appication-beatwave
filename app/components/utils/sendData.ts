import { publicClient, walletClient } from "./client";
import { contract } from "../abi/abi";
import { Address } from "viem";

export const handleBuyBeat = async (account: Address, amount: number, _id: number) => {
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
