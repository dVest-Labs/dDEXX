import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled(Card)`
background-image: url('/images/coin_bg_01.png');
  background-repeat: no-repeat;
  background-position: top right;
  background-size:400px 400px;
  // background-size:cover;
  align-items: center;
  display: flex;
  flex: 1;
`

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue();
   const tvl = totalValue.toFixed(2);
   console.log(tvl)

  return (
    <StyledTotalValueLockedCard className="card_radius grid_100">
      <CardBody>
        <Text color="textSubtle" className="card_3_tiele">
          {TranslateString(762, 'Total Value Locked')}
        </Text>
        <>
          {/* <Heading size="xl">{`$${tvl}`}</Heading> */}
          <CardValue value={totalValue.toNumber()} prefix="$" decimals={2}/>
          {/* <Heading color="textblack" className="hvd_comic_serif" size="xl">Supply,

sfp, Lina,</Heading> */}
          <Text color="textblack" className="card_3_subtiele">{TranslateString(999, 'Across all LPs and Pools')}</Text>
        </>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
