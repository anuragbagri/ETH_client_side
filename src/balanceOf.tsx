import { Address } from 'viem';
import { useAccount, useReadContract } from 'wagmi'


export function TotalBalance() {
    const {address} = useAccount();
  const { data, isLoading, error } = useReadContract({
    address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    abi: [
        {"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}
    ],
    functionName: 'balanceOf',
    args : [address?.toString() as Address]    
  })

  return (
    <div>
      your Total usdt balance - {JSON.stringify(data?.toString())}
    </div>
  )
}