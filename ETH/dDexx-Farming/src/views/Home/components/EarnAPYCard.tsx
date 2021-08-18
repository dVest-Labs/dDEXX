import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon, Skeleton, Text,Image } from '@pancakeswap-libs/uikit'
import max from 'lodash/max'
import { NavLink } from 'react-router-dom'
import useI18n from 'hooks/useI18n'
import BigNumber from 'bignumber.js'
// import { getFarmApy } from 'utils/apy'
// import { useFarms, usePriceCakeBusd, useGetApiPrices } from 'state/hooks'

const StyledFarmStakingCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }
`
const CardMidContent = styled(Heading).attrs({ size: 'xl' })`
  line-height: 44px;
`
const EarnAPYCard = () => {
  const TranslateString = useI18n()
  // const farmsLP = useFarms()
  // const prices = useGetApiPrices()
  // const cakePrice = usePriceCakeBusd()

  // const highestApy = useMemo(() => {
  //   const apys = farmsLP
      // Filter inactive farms, because their theoretical APY is super high. In practice, it's 0.
  //     .filter((farm) => farm.pid !== 0 && farm.multiplier !== '0X')
  //     .map((farm) => {
  //       if (farm.lpTotalInQuoteToken && prices) {
  //         const quoteTokenPriceUsd = prices[farm.quoteToken.symbol.toLowerCase()]
  //         const totalLiquidity = new BigNumber(farm.lpTotalInQuoteToken).times(quoteTokenPriceUsd)
  //         return getFarmApy(farm.poolWeight, cakePrice, totalLiquidity)
  //       }
  //       return null
  //     })

  //   const maxApy = max(apys)
  //   return maxApy?.toLocaleString('en-US', { maximumFractionDigits: 2 })
  // }, [cakePrice, farmsLP, prices])

  return (
    <StyledFarmStakingCard className="grid_100 card_trans_bg">
     <CardBody>


<Heading size="md" mb="15px" className="imgfull">

<Image src="/images/egg/benquote.png" alt="illustration" width={100} height={100} />
</Heading>

</CardBody>
    </StyledFarmStakingCard>
  )
}

export default EarnAPYCard
