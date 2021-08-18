import React from 'react'
import { X } from 'react-feather'
import styled from 'styled-components'
import { TYPE } from '../../theme'
// import useUSDCPrice from '../../utils/useUSDCPrice'
// import useGetPriceData from '../../hooks/useGetPriceData'
import { AutoColumn } from '../Column'
import { RowBetween } from '../Row'
import { Break, CardBGImage, CardNoise, CardSection, DataCard } from '../earn/styled'

const ContentWrapper = styled(AutoColumn)`
  width: 100%;
`

const ModalUpper = styled(DataCard)`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background: #00d2d4;
  padding: 0.5rem;
`

const StyledClose = styled(X)`
  position: absolute;
  right: 16px;
  top: 16px;

  :hover {
    cursor: pointer;
  }
`

/**
 * Content for balance stats modal
 */
export default function UniBalanceContent({ setShowUniBalanceModal }: { setShowUniBalanceModal: any }) {
  const totalSupply = "1,000,000,000"
  // const uniPrice = useUSDCPrice(uni)
  const uniPrice = "5.387"

const circulation = "998,187,691"
  return (
    <ContentWrapper gap="lg">
      <ModalUpper>
        <CardBGImage />
        <CardNoise />
        <CardSection gap="md">
          <RowBetween>
            <TYPE.white color="white">Your dDEXX Breakdown</TYPE.white>
            <StyledClose stroke="white" onClick={() => setShowUniBalanceModal(false)} />
          </RowBetween>
        </CardSection>
        <Break />
        <CardSection gap="sm">
          <AutoColumn gap="md">
            <RowBetween>
              <TYPE.white color="white">dDEXX price:</TYPE.white>
              <TYPE.white color="white">${uniPrice}</TYPE.white>
            </RowBetween>
            <RowBetween>
              <TYPE.white color="white">dDEXX in circulation:</TYPE.white>
              <TYPE.white color="white">{circulation}</TYPE.white>
            </RowBetween>
            <RowBetween>
              <TYPE.white color="white">Total Supply</TYPE.white>
              <TYPE.white color="white">{totalSupply}</TYPE.white>
            </RowBetween>
          </AutoColumn>
        </CardSection>
      </ModalUpper>
    </ContentWrapper>
  )
}
