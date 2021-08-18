import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import VisionCard from 'views/Home/components/VisionCard'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPYCard from 'views/Home/components/EarnAPYCard'
import FarmStakingCard from './components/FarmStakingCard'
import CakeStats from './components/CakeStats'

const Hero = styled.div`
  align-items: center;
  // background-image: url('/images/egg/3.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/home.png'), url('/images/home.png');
    background-position: left center, right center;
    height: 210px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`
const CardsLarge = styled(BaseLayout)`
  align-items: stretch;
  justify-self: center;
  margin-bottom: 32px;

  & > div {
    grid-column: span 12;
    width: 100%;
    text-align: center;

  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <Heading as="h1" mb="20px" color="primaryblack" className="hvd_comic_serif orange_head" style={{ fontSize: "2.5rem" }}>
          {/* {TranslateString(576, 'dDEXX')} */}
          <span className="green_txt_d">d</span>DEXX
        </Heading>
        <Heading as="h3" className="dash_heading_sm_1" color="dash_heading">dDEXX is an Automated Market Maker (AMM) based Decentralized Exchange (DEX) that features easy and fast exchange functionality, profitable liquidity pools, and high APR yield farms, where users can earn dDEXX tokens, fees from exchange transactions, and much more</Heading>
        {/* <Heading as="h3" className="dash_heading_1" color="dash_heading">$1,422,681,659.00</Heading>
        <Text className="dash_subheading" color="secondary">{TranslateString(578, 'Total Value Locked (TVL) Across All LPs and Pool')}</Text> */}
      </Hero>
      <div>
        <CardsLarge>
          <EarnAPYCard />
        </CardsLarge>
        <Cards>
          {/* <EarnAPYCard />       */}
          <TotalValueLockedCard />
        </Cards>
        <Cards>
          <FarmStakingCard />
          <CakeStats />
        </Cards>
        
      </div>
    </Page>
  )
}

export default Home
