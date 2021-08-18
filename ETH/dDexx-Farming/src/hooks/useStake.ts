import { useCallback } from 'react'
// import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useWallet } from 'use-wallet'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync, updateUserStakedBalance, updateUserBalance } from 'state/actions'
import { stake, sousStake, sousStakeBnb } from 'utils/callHelpers'
import { useMasterchef, useSousChef } from './useContract'

const useStake = (pid: number,decimals: number) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()



  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(masterChefContract, pid, amount, account, decimals)
      dispatch(fetchFarmUserDataAsync(account))
      console.info(txHash)
    },
    [account, dispatch, masterChefContract, pid, decimals],
  )

  return { onStake: handleStake }
}

export const useSousStake = (sousId, isUsingBnb = false) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()
  const sousChefContract = useSousChef(sousId)

  const handleStake = useCallback(
    async (amount: string) => {
      if (sousId === 0) {
        await stake(masterChefContract, 0, amount, account,18)
      } else if (isUsingBnb) {
        await sousStakeBnb(sousChefContract, amount, account)
      } else {
        await sousStake(sousChefContract, amount, account)
      }
      dispatch(updateUserStakedBalance(sousId, account))
      dispatch(updateUserBalance(sousId, account))
    },
    [account, dispatch, isUsingBnb, masterChefContract, sousChefContract, sousId],
  )

  return { onStake: handleStake }
}

export default useStake