

import { MenuEntry } from '@pancakeswap-libs/uikit'

const baseurl="https://app.ddexx.io";
const swap="https://eth.ddexx.io";

const config: MenuEntry[] = [
  {
    label: 'BSC dDEXX',
    icon: 'TradeIcon',
    calloutClass: 'menulink',
    href:"https://ddexx.io/",
  },
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: baseurl,
    calloutClass: 'menulink'
  },
  {
    label: 'Swap',
    icon: 'SwapIcon',
    href: swap.concat('/#/swap'),
    // href:"#",
    calloutClass: 'menulink'
  },
  {
    label: 'Add Pool',
    icon: 'AddPoolIcon',
    href: swap.concat('/#/pool'),
    // href:"#",
    calloutClass: 'menulink'
  },
  // {
  //   label: 'Trade',
  //   icon: 'TradeIcon',
  //   calloutClass: 'menulink',
  //   items: [
  //     {
  //       label: 'Exchange',
  //       href: 'https://exchange.ddexx.io/',
  //     },
  //     {
  //       label: 'Liquidity',
  //       href: 'https://exchange.ddexx.io/#/pool',
  //     },
  //   ],
  // },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    // href: '/farms',
    href:baseurl.concat('/farms'),
    calloutClass: 'menulink'
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    // href: '/nests',
    href:baseurl.concat('/pools'),

    calloutClass: 'menulink'
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },

  {
    label: 'DeFi Index Funds',
    icon: 'NftIcon',
    calloutClass: 'menulink',
    href: "https://cryptopriceindex.io",
  },
  {
    label: 'DeFi Stocks',
    icon: 'InfoIcon',
    calloutClass: 'menulink',
    href: "https://main.ddexx.io/tokenized-stocks/",
  },
  {
    label: 'DeFi Loans',
    icon: 'PoolIcon',
    calloutClass: 'menulink',
    href: "https://defivest.io/",
  },
  {
    label: 'GameFi',
    icon: 'NftIcon',
    calloutClass: 'menulink',
    href: "https://dvest.org/endless-war/",
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    calloutClass: 'menulink',
    items: [
      {
        label: 'Docs',
        href: 'https://docs.dvest.org',
        calloutClass: 'menulink'
      },
      {
        label: 'dVest DAO',
        href: 'https://dvest.org',
        calloutClass: 'menulink'
      },
      {
        label: 'Venture Fund',
        href: 'https://dvest.org/vc/',
        calloutClass: 'menulink'
      },
      {
        label: 'Contact',
        href: 'mailto:info@ddexx.io',
        calloutClass: 'menulink'
      },
      {
        label: 'dVest.org',
        href: 'https://dvest.org/',
        calloutClass: 'menulink'
      },
      {
        label: 'dVest CEX',
        href: 'https://dvest.io',
        calloutClass: 'menulink',
      },
      {
        label: 'Crypto Price Index',
        href: 'https://cryptopriceindex.io/',
        calloutClass: 'menulink'
      },
    ],
  },
  {
    label: 'Get Tokens',
    icon: 'TicketIcon',
    calloutClass: 'menulink',
    items: [
      {
        label: 'dVEST',
        href: 'https://eth.ddexx.io/#/swap?outputCurrency=0x2b67d1a87a8d8b280a23e97bc55095215ee0ec53',
        calloutClass: 'menulink'
      },
       {
        label: 'dDAO',
        href: 'https://app.xdao.app/#/dacprofile/0xb6E5cB7f1cd37cD8828a45b715fBDB9a7E5149Fe',
        calloutClass: 'menulink'
      },
      {
        label: 'dLABS',
        href: 'https://app.xdao.app/#/dafprofile/0x505Bc611319107633dbFB7A4A3e524F111eE8278',
        calloutClass: 'menulink'
      },
      {
        label: 'CPI',
        href: 'https://eth.ddexx.io/#/exchange?outputCurrency=0x607fb30af59f50bc273d828609f165e6fc2b2d9d',
        calloutClass: 'menulink'
      },
      {
        label: 'ERND',
        href: 'https://exchange.ddexx.io/#/swap?outputCurrency=0x5a117dcac935b22b34bf1e804069ab85a03a7b4e',
        calloutClass: 'menulink'
      },
      {
        label: 'dDEXX',
        href: 'https://eth.ddexx.io/#/swap?outputCurrency=0x20566d84d979841849478E3d17FC81445152B84b',
        calloutClass: 'menulink'
      },
      {
        label: 'BNB',
        href: 'https://www.binance.us/en/buy-sell-crypto?ref=56108719',
        calloutClass: 'menulink'
      },
      {
        label: 'BUSD',
        href: 'https://www.binance.us/en/buy-sell-crypto?ref=56108719',
        calloutClass: 'menulink'
      },
      {
        label: 'Buy with Fiat',
        href: 'https://changelly.com/buy?from=usd&to=bnb&amount=500&ref_id=b93e840ff658',
        calloutClass: 'menulink'
      },

    ],
  },
  {
    label: 'Partnership',
    icon: 'TradeIcon',
    calloutClass: 'menulink',
    items: [
      {
        label: 'IDO Application',
        href: 'https://defivest.io/ido-request/',
        calloutClass: 'menulink'
      },
      {
        label: 'Token Application',
        href: 'https://defivest.io/token-request/',
        calloutClass: 'menulink'
      },
      {
        label: 'Farm Application',
        href: 'https://defivest.io/farm-application/',
        calloutClass: 'menulink'
      },
    ],
  },
]

export default config
