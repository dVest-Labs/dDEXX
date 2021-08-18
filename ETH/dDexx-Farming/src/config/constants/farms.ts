import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'dDEXX-USDT LP',
    lpAddresses: {
      97 : '0x4FF3DBe70B927fbBdaD7f26B59237c2D20c21041',
      56 : '0xfED662299bbB767b65EDE2232246338B1B324DaD',
    },
    tokenSymbol: 'dDEXX',
    tokenAddresses: {
       97 : '0xF48465c0aD43188b8D5CCd8cAe913cedd57bEC88',
       56 : '0x20566d84d979841849478E3d17FC81445152B84b',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'dDEXX-ETH LP',
    lpAddresses: {
      97 : '0x4FF3DBe70B927fbBdaD7f26B59237c2D20c21041',
      56 : '0xeA2A4Ab74Cfb45B70f74451B7Ce59e005d2F91D1',
    },
    tokenSymbol: 'dDEXX',
    tokenAddresses: {
       97 : '0xF48465c0aD43188b8D5CCd8cAe913cedd57bEC88',
       56 : '0x20566d84d979841849478E3d17FC81445152B84b',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'dDEXX',
    lpAddresses: {
      97: '0x4FF3DBe70B927fbBdaD7f26B59237c2D20c21041',
      56: '0xfED662299bbB767b65EDE2232246338B1B324DaD',
    },
    tokenSymbol: 'dDEXX',
    tokenAddresses: {
      97: '0xF48465c0aD43188b8D5CCd8cAe913cedd57bEC88',
      56: '0x20566d84d979841849478E3d17FC81445152B84b',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 5,
    lpSymbol: 'ETH-USDT LP',
    lpAddresses: {
      97: '0x4FF3DBe70B927fbBdaD7f26B59237c2D20c21041',
      56: '0xdC5feA17A87cbEE3372703A993f878BA27269Bc0',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '0xD192b5f02BCCd2cDC9d3a1994d54a6A91da4628b',
      56: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 3,
    isTokenOnly: true,
     lpSymbol: 'WETH',
    lpAddresses: {
      97: '0x4FF3DBe70B927fbBdaD7f26B59237c2D20c21041',
      56: '0xdC5feA17A87cbEE3372703A993f878BA27269Bc0', // ETH-USDT LP
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      97: '0xD192b5f02BCCd2cDC9d3a1994d54a6A91da4628b',
      56: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'USDC',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xb0F0B1614Afa8F82F86BC9E0e69B5A73d5f67890', // CAKE-BUSD LP
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '0xD192b5f02BCCd2cDC9d3a1994d54a6A91da4628b',
      56: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBTC',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x509F3E7079B67EAB14f5943bABE2675ede988525', // CAKE-BUSD LP
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      97: '0xD192b5f02BCCd2cDC9d3a1994d54a6A91da4628b',
      56: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'CPI',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x3c6cCf253F1517cB1B9F739420031e0993f2D82A', // CAKE-BUSD LP
    },
    tokenSymbol: 'CPI',
    tokenAddresses: {
      97: '0xD192b5f02BCCd2cDC9d3a1994d54a6A91da4628b',
      56: '0x2b67D1a87A8D8B280A23e97bC55095215eE0ec53',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // {
  //   pid: 8,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'LINK',
  //   lpAddresses: {
  //     97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
  //     56: '0x640c673e320fD5684eF3F0000103ecA797bA0Ae3', // CAKE-BUSD LP
  //   },
  //   tokenSymbol: 'LINK',
  //   tokenAddresses: {
  //     97: '0xD192b5f02BCCd2cDC9d3a1994d54a6A91da4628b',
  //     56: '0x2b67D1a87A8D8B280A23e97bC55095215eE0ec53',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  {
    pid: 9,
    risk: 5,
    lpSymbol: 'ETH-CPI LP',
    lpAddresses: {
      97: '0x4FF3DBe70B927fbBdaD7f26B59237c2D20c21041',
      56: '0x70C13309A42dC53196956a2edC591279A2b2Ca6f',
    },
    tokenSymbol: 'CPI',
    tokenAddresses: {
      97: '0xD192b5f02BCCd2cDC9d3a1994d54a6A91da4628b',
      56: '0x2b67d1a87a8d8b280a23e97bc55095215ee0ec53',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 10,
    risk: 5,
    lpSymbol: 'USDC-ETH LP',
    lpAddresses: {
      97: '0x4FF3DBe70B927fbBdaD7f26B59237c2D20c21041',
      56: '0x6Fcd844c7457a525124dD793F83C291e2d2cD7F6',
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '0xD192b5f02BCCd2cDC9d3a1994d54a6A91da4628b',
      56: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 11,
    risk: 5,
    lpSymbol: 'WBTC-ETH LP',
    lpAddresses: {
      97: '0x4FF3DBe70B927fbBdaD7f26B59237c2D20c21041',
      56: '0xB3f5b70A5626d01295538c209Ac3C2F054D8683E',
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      97: '0xD192b5f02BCCd2cDC9d3a1994d54a6A91da4628b',
      56: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 12,
    risk: 5,
    lpSymbol: 'CPI-USDT LP',
    lpAddresses: {
      97: '0x4FF3DBe70B927fbBdaD7f26B59237c2D20c21041',
      56: '0x3c6cCf253F1517cB1B9F739420031e0993f2D82A',
    },
    tokenSymbol: 'CPI',
    tokenAddresses: {
      97: '0xD192b5f02BCCd2cDC9d3a1994d54a6A91da4628b',
      56: '0x2b67d1a87a8d8b280a23e97bc55095215ee0ec53',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // {
  //   pid: 13,
  //   risk: 5,
  //   lpSymbol: 'WBTC-USDT LP',
  //   lpAddresses: {
  //     97: '0x4FF3DBe70B927fbBdaD7f26B59237c2D20c21041',
  //     56: '0x509F3E7079B67EAB14f5943bABE2675ede988525',
  //   },
  //   tokenSymbol: 'WBTC',
  //   tokenAddresses: {
  //     97: '0xD192b5f02BCCd2cDC9d3a1994d54a6A91da4628b',
  //     56: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
]

export default farms
