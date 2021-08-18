import { MenuEntry, menuStatus } from '@pancakeswap-libs/uikit'

const baseurl="https://ddexx.io";
const swap="https://exchange.ddexx.io";


const config: MenuEntry[] = [
  // {
  //   label: 'Binance dDexx',
  //   icon: 'BnbIcon',
  //   calloutClass: 'menulink',
  //   items: [    
  //     {
  //       label: 'Ethereum dDexx',
  //       href: '#',
  //       calloutClass: 'menulink'
  //     },      
  //   ],
  // },
  {
    label: 'Ethereum dDEXX',
    icon: 'EthIcon',
    calloutClass: 'menulink',
    href: "https://eth.ddexx.io",
  },
  {
    label: 'Home',
    icon: 'HomeIcon',
    calloutClass: 'menulink',
    href: baseurl,
  },
  {
    label: 'Swap',
    icon: 'SwapIcon',
    calloutClass: 'menulink',
    href:  swap.concat('/#/swap'),
  },
  {
    label: 'Add Pool',
    icon: 'AddPoolIcon',
    calloutClass: 'menulink',
    href: swap.concat('/#/pool'),
  },
  // {
  //   label: 'Trade',
  //   icon: 'TradeIcon',
  //   items: [
  //     {
  //       label: 'Exchange',
  //       href: 'http://localhost:3001/#/swap',
  //     },
  //     {
  //       label: 'Liquidity',
  //       href: 'http://localhost:3001/#/pool',
  //     },
  //   ],
  // },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    calloutClass: 'menulink',
    href:  baseurl.concat('/farms'),
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    calloutClass: 'menulink',
    href:  baseurl.concat('/pools'),
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
   
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href:  baseurl.concat('/teams'),
  //     },
  //     {
  //       label: 'Task Center',
  //       href:  baseurl.concat('/profile/tasks'),
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: baseurl.concat('/profile'),
  //     },
  //   ],
  // },
 
  {
    label: 'DeFi Index Funds',
    icon: 'NftIcon',
    calloutClass: 'menulink',
    href: "https://cryptopriceindex.io",
  },
  {
    label: 'DeFi Stocks',
    icon: 'IfoIcon',
    calloutClass: 'menulink',
    href: "https://main.ddexx.io/tokenized-stocks/",
  },
   {
    label: 'GameFi',
    icon: 'DiscordIcon',
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
        href: 'https://exchange.ddexx.io/#/swap?outputCurrency=0x19d12479f0159d624249c26949509e010dbce8be',
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
        href: 'https://exchange.ddexx.io/#/swap?outputCurrency=0x922415773ffcf35cdcc0d57c3093b4a8128ad592',
        calloutClass: 'menulink'
      },
      {
        label: 'ERND',
        href: 'https://exchange.ddexx.io/#/swap?outputCurrency=0x5a117dcac935b22b34bf1e804069ab85a03a7b4e',
        calloutClass: 'menulink'
      },
      {
        label: 'dDEXX',
        href: 'https://exchange.ddexx.io/#/swap?outputCurrency=0xEE80e755CA973e12234E0AaD1C2CdA1cb19319b9',
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
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   calloutClass: 'menulink',
  //   items: [     
  //     {
  //       label: 'Blog',
  //       href: baseurl,
  //     },
  //   ],
  // }, 
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: 'Voting',
  //       href: '#',
  //     },
  //     {
  //       label: 'Github',
  //       href: '#',
  //     },
  //     {
  //       label: 'Docs',
  //       href: '#',
  //     },
  //     {
  //       label: 'Blog',
  //       href: '#',
  //     },
  //   ],
  // },
]

export default config
