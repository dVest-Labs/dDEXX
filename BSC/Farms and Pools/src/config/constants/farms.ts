import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'dDEXX-BUSD LP',
    lpAddresses: {
      97: '0x2E63A4098C307311A463CAF4a08B3ea947321394',
      56: '0xFd726A54873C3Eb2CD0C522ae90d7C908ac7e51B',
    },
    tokenSymbol: 'dDEXX',
    tokenAddresses: {
      97: '0xEE80e755CA973e12234E0AaD1C2CdA1cb19319b9',
      56: '0xEE80e755CA973e12234E0AaD1C2CdA1cb19319b9',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'dDEXX-BNB LP',
    lpAddresses: {
      97: '0x3E8C8b7229Cf5a01B9CA2Ee55828E1f1EFCdB637',
      56: '0x42D3a2041b069be15492D3E26B2c0Fc5e406882d',
    },
    tokenSymbol: 'dDEXX',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xEE80e755CA973e12234E0AaD1C2CdA1cb19319b9',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'dVEST-BNB LP',
    lpAddresses: {
      97: '0x3E8C8b7229Cf5a01B9CA2Ee55828E1f1EFCdB637',
      56: '0x1f8A73dA046Ef20af545629C423f65C852fBed8f',
    },
    tokenSymbol: 'dVEST',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x19d12479f0159d624249c26949509e010dbce8be',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    risk: 5,
    lpSymbol: 'dVEST-BUSD LP',
    lpAddresses: {
      97: '0x3E8C8b7229Cf5a01B9CA2Ee55828E1f1EFCdB637',
      56: '0xBA1Cd4568BB6a7A1ed7a64F0459B231b7D24C798',
    },
    tokenSymbol: 'dVEST',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x19d12479f0159d624249c26949509e010dbce8be',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 5,
    lpSymbol: 'CPI-BNB LP',
    lpAddresses: {
      97: '0x3E8C8b7229Cf5a01B9CA2Ee55828E1f1EFCdB637',
      56: '0x3FAce93E374Bc5F980aE61A34E25aAD465cAcEa3',
    },
    tokenSymbol: 'CPI',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x922415773ffcf35cdcc0d57c3093b4a8128ad592',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    risk: 5,
    lpSymbol: 'CPI-BUSD LP',
    lpAddresses: {
      97: '0x3E8C8b7229Cf5a01B9CA2Ee55828E1f1EFCdB637',
      56: '0x2E092d75CA44926A26b6553378cf7923B745Cda7',
    },
    tokenSymbol: 'CPI',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x922415773ffcf35cdcc0d57c3093b4a8128ad592',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    risk: 5,
    lpSymbol: 'dVEST-CPI LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
    },
    tokenSymbol: 'dVEST',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x19d12479f0159d624249c26949509e010dbce8be',
    },
    quoteTokenSymbol: QuoteToken.CPI,
    quoteTokenAdresses: contracts.cpi,
  },
  {
    pid: 7,
    risk: 5,
    lpSymbol: 'dVEST-dDEXX LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xAf43b8626df24196bA0ca23BF7b8440A152Da54b',
    },
    tokenSymbol: 'dVEST',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x19d12479f0159d624249c26949509e010dbce8be',
    },
    quoteTokenSymbol: QuoteToken.dDEXX,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 8,
    risk: 5,
    lpSymbol: 'CPI-dDEXX LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xB652eDB48d87f414ef57aDBc8A25AEcc419607ac',
    },
    tokenSymbol: 'CPI',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x922415773ffcf35cdcc0d57c3093b4a8128ad592',
    },
    quoteTokenSymbol: QuoteToken.dDEXX,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 9,
    risk: 5,
    lpSymbol: 'ERND-CPI LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xbB8641faFB266db12FfA1af8E05B59116aaf725C',
    },
    tokenSymbol: 'ERND',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x5a117dcac935b22b34bf1e804069ab85a03a7b4e',
    },
    quoteTokenSymbol: QuoteToken.CPI,
    quoteTokenAdresses: contracts.cpi,
  },
  {
    pid: 10,
    risk: 5,
    lpSymbol: 'dVEST-ERND LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xa4C2A02fB68002feA675F1E32C9AC7b4AA9B68C1',
    },
    tokenSymbol: 'dVEST',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x19d12479f0159d624249c26949509e010dbce8be',
    },
    quoteTokenSymbol: QuoteToken.ERND,
    quoteTokenAdresses: contracts.earnd,
  },
  {
    pid: 11,
    risk: 5,
    lpSymbol: 'ERND-dDEXX LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x69C37CD2D887b4E09BCa0C6234D9CEf290061095',
    },
    tokenSymbol: 'ERND',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x5a117dcac935b22b34bf1e804069ab85a03a7b4e',
    },
    quoteTokenSymbol: QuoteToken.dDEXX,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 12,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'dDEXX',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xFd726A54873C3Eb2CD0C522ae90d7C908ac7e51B', // CAKE-BUSD LP
    },
    tokenSymbol: 'dDEXX',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xEE80e755CA973e12234E0AaD1C2CdA1cb19319b9',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 13,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'dVEST',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xBA1Cd4568BB6a7A1ed7a64F0459B231b7D24C798', // CAKE-BUSD LP
    },
    tokenSymbol: 'dVEST',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x19d12479f0159d624249c26949509e010dbce8be',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 14,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'CPI',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x2E092d75CA44926A26b6553378cf7923B745Cda7', // CAKE-BUSD LP
    },
    tokenSymbol: 'CPI',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x922415773ffcf35cdcc0d57c3093b4a8128ad592',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 16,
    risk: 5,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x961B9503315E0B58eFb7Bc70BA12D75139Dc61E1',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 17,
    risk: 5,
    lpSymbol: 'ERND-BUSD LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x2801378F82b8C6D3Ef6B35BBC8519bD6dC62Dd55',
    },
    tokenSymbol: 'ERND',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x5a117dcac935b22b34bf1e804069ab85a03a7b4e',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 15,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'ERND',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x2801378F82b8C6D3Ef6B35BBC8519bD6dC62Dd55', // CAKE-BUSD LP
    },
    tokenSymbol: 'ERND',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x5a117dcac935b22b34bf1e804069ab85a03a7b4e',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 18,
    risk: 3,
    isTokenOnly: true,
     lpSymbol: 'WBNB',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x961B9503315E0B58eFb7Bc70BA12D75139Dc61E1', // CAKE-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 19,
    risk: 5,
    lpSymbol: 'CAKE-dDEXX LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xF56CB3135c564978EB78775Eb00bf2Aaf2c0F9cf',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.dDEXX,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 20,
    risk: 5,
    lpSymbol: 'BUSD-BUNNY LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x974029932672091E5574dF31e3C25203a877b82c',
    },
    tokenSymbol: 'BUNNY',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 21,
    risk: 5,
    lpSymbol: 'BUNNY-dDEXX LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xF43aBeE89AD8Eb9C9500B8e9Eec920b2B36fA23d',
    },
    tokenSymbol: 'BUNNY',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51',
    },
    quoteTokenSymbol: QuoteToken.dDEXX,
    quoteTokenAdresses: contracts.cake,
  },
  
   {
    pid: 22,
    risk: 5,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x28F93fc2c0b547CfC770Eb368f7cFf8b0E62a540',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 23,
    risk: 5,
    lpSymbol: 'BTCB-BUSD LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x2504a04A8C1b500daBD371b5d866322223Eaa9bb',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 24,
    risk: 5,
    lpSymbol: 'BTCB-dDEXX LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x82b253CA223Fc733AD310c5177f69b211f2C8BD3',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.dDEXX,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 25,
    risk: 5,
    lpSymbol: 'BUSD-WEX LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x3A453A94085F6BfdD99aC4DBBE67d2aE0FacC0B8',
    },
    tokenSymbol: 'WEX',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xa9c41a46a6b3531d28d5c32f6633dd2ff05dfb90',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 26,
    risk: 5,
    lpSymbol: 'WEX-dDEXX LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xaE82EbACa1c06DcefcADE3A1D873D987a0CF8B4e',
    },
    tokenSymbol: 'WEX',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xa9c41a46a6b3531d28d5c32f6633dd2ff05dfb90',
    },
    quoteTokenSymbol: QuoteToken.dDEXX,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 27,
    risk: 5,
    lpSymbol: 'BNB-WSB LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xF3b3628f4C813d8DaAf51F09283D5b7C96322DB0',
    },
    tokenSymbol: 'WSB',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x22168882276e5d5e1da694343b41dd7726eeb288',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 28,
    risk: 5,
    lpSymbol: 'BUSD-WSB LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xa89d421810C07584C5CBbaC11dEd1542b4Da7eea',
    },
    tokenSymbol: 'WSB',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x22168882276e5d5e1da694343b41dd7726eeb288',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 29,
    risk: 5,
    lpSymbol: 'dDEXX-WSB LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xa89d421810C07584C5CBbaC11dEd1542b4Da7eea',
    },
    tokenSymbol: 'WSB',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x22168882276e5d5e1da694343b41dd7726eeb288',
    },
    quoteTokenSymbol: QuoteToken.dDEXX,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 30,
    risk: 5,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x30D71cBbbeFADC968DF2C874931BbF5C961F19d7',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 31,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x30D71cBbbeFADC968DF2C874931BbF5C961F19d7', // CAKE-BUSD LP
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 32,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WSB',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xF3b3628f4C813d8DaAf51F09283D5b7C96322DB0', // CAKE-BUSD LP
    },
    tokenSymbol: 'WSB',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x22168882276e5d5e1da694343b41dd7726eeb288',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 33,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WEX',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x3A453A94085F6BfdD99aC4DBBE67d2aE0FacC0B8', // CAKE-BUSD LP
    },
    tokenSymbol: 'WEX',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xa9c41a46a6b3531d28d5c32f6633dd2ff05dfb90',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 34,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x2504a04A8C1b500daBD371b5d866322223Eaa9bb', // CAKE-BUSD LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 35,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'BUNNY',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x974029932672091E5574dF31e3C25203a877b82c', // CAKE-BUSD LP
    },
    tokenSymbol: 'BUNNY',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 36,
    risk: 5,
    lpSymbol: 'USDC-BNB LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xaA08372CFfb1D03803aE9C535A88126F60AcDa32',
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 37,
    risk: 5,
    lpSymbol: 'USDC-dDEXX LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xE2C45252d0B6C2C7dDE8095F35Eeed6D1D0eb627',
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    quoteTokenSymbol: QuoteToken.dDEXX,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 38,
    risk: 5,
    lpSymbol: 'DOT-BNB LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x2Bf87974927E11335d9c187dCe1fFCFCcBeAf362',
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 39,
    risk: 5,
    lpSymbol: 'DOT-dDEXX LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x0ec7DF9A6b6164C8C9f7eB9f1c638F4a7a8e9F9D',
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    quoteTokenSymbol: QuoteToken.dDEXX,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 40,
    risk: 5,
    lpSymbol: 'DOT-BUSD LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x4F7E9012e1dd47475903f6256699f3EC23075999',
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 41,
    risk: 5,
    lpSymbol: 'SAFEMOON-BNB LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xF4e2c230eD8763e316437A9fe3DBc4cba144F350',
    },
    tokenSymbol: 'SAFEMOON',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 43,
    risk: 5,
    lpSymbol: 'SAFEMOON-BUSD LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x3307F88291Ce03E7fee860af4427a82550854D08',
    },
    tokenSymbol: 'SAFEMOON',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 42,
    risk: 5,
    lpSymbol: 'SAFEMOON-dDEXX LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x904a7EE0c3D5418D4ead5080115D32621033DBe3',
    },
    tokenSymbol: 'SAFEMOON',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3',
    },
    quoteTokenSymbol: QuoteToken.dDEXX,
    quoteTokenAdresses: contracts.cake,
  },
  
  {
    pid: 44,
    risk: 5,
    lpSymbol: 'ALPACA-BNB LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x6C3F3734E2FBC5595F2dfCb733899b446564dD16',
    },
    tokenSymbol: 'ALPACA',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x8f0528ce5ef7b51152a59745befdd91d97091d2f',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 45,
    risk: 5,
    lpSymbol: 'ALPACA-BUSD LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xdD40B32067B84E96a1Ddd971C3321E34E532a9De',
    },
    tokenSymbol: 'ALPACA',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x8f0528ce5ef7b51152a59745befdd91d97091d2f',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 46,
    risk: 5,
    lpSymbol: 'ALPACA-dDEXX LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x946aeBa790780A52a9b5e8cfC0D4dC60Ea513131',
    },
    tokenSymbol: 'ALPACA',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x8f0528ce5ef7b51152a59745befdd91d97091d2f',
    },
    quoteTokenSymbol: QuoteToken.dDEXX,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 47,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'USDC',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x1e53A2CCf9351ccf98593c7945C8b3319a594Fc5', // CAKE-BUSD LP
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 48,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'DOT',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x4F7E9012e1dd47475903f6256699f3EC23075999', // CAKE-BUSD LP
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 49,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'SAFEMOON',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x3307F88291Ce03E7fee860af4427a82550854D08', // CAKE-BUSD LP
    },
    tokenSymbol: 'SAFEMOON',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 50,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'ALPACA',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xdD40B32067B84E96a1Ddd971C3321E34E532a9De', // CAKE-BUSD LP
    },
    tokenSymbol: 'ALPACA',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x8f0528ce5ef7b51152a59745befdd91d97091d2f',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 51,
    risk: 5,
    lpSymbol: 'BSCPAD-BNB LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x993106Cf01782ab5389Af93CBedb18A46BC7Ba8F',
    },
    tokenSymbol: 'BSCPAD',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x5a3010d4d8d3b5fb49f8b6e57fb9e48063f16700',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 52,
    risk: 5,
    lpSymbol: 'BSCPAD-BUSD LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xdfBf877E36C3fb7f331dC9579FF8466C799010A0',
    },
    tokenSymbol: 'BSCPAD',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x5a3010d4d8d3b5fb49f8b6e57fb9e48063f16700',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 53,
    risk: 5,
    lpSymbol: 'FORM-BNB LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xB24df5e3250944912baDc7c329Cd58FA18d9EBD3',
    },
    tokenSymbol: 'FORM',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x25a528af62e56512a19ce8c3cab427807c28cc19',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 54,
    risk: 5,
    lpSymbol: 'FORM-BUSD LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xd5b6744D245d41e55232F5859D14bb81D61dB8F9',
    },
    tokenSymbol: 'FORM',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x25a528af62e56512a19ce8c3cab427807c28cc19',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 55,
    risk: 5,
    lpSymbol: 'ORBS-BNB LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xe3625528ea5e6987522D5ceA5B0F32927927c53b',
    },
    tokenSymbol: 'ORBS',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xebd49b26169e1b52c04cfd19fcf289405df55f80',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 56,
    risk: 5,
    lpSymbol: 'ORBS-BUSD LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xA90C28eC34511f63E46Bd3c2BC0CB7F67eD58d7C',
    },
    tokenSymbol: 'ORBS',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xebd49b26169e1b52c04cfd19fcf289405df55f80',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 57,
    risk: 5,
    lpSymbol: 'DG-BUSD LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x1C13b9612184f2186E66b9C0Ba71F5e5C1268246',
    },
    tokenSymbol: 'DG',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x9fdc3ae5c814b79dca2556564047c5e7e5449c19',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 58,
    risk: 5,
    lpSymbol: 'DG-dDEXX LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x58328B5b6f3994033fE30Cc2392bE4E83c73705C',
    },
    tokenSymbol: 'DG',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x9fdc3ae5c814b79dca2556564047c5e7e5449c19',
    },
    quoteTokenSymbol: QuoteToken.dDEXX,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 59,
    risk: 5,
    lpSymbol: 'DG-BNB LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x08FC414DB3746Dd8F966f29aFC9a76B866ac8040',
    },
    tokenSymbol: 'DG',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x9fdc3ae5c814b79dca2556564047c5e7e5449c19',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 60,
    risk: 5,
    lpSymbol: 'WOO-BNB LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x6e6CFa40E00cC2155eFa07Ad911512AC6B30DaBa',
    },
    tokenSymbol: 'WOO',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x4691937a7508860f876c9c0a2a617e7d9e945d4b',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 61,
    risk: 5,
    lpSymbol: 'WOO-dDEXX LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x2e79d01F03F1B462ec2AFd93e1921B8FeC18E9FA',
    },
    tokenSymbol: 'WOO',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x4691937a7508860f876c9c0a2a617e7d9e945d4b',
    },
    quoteTokenSymbol: QuoteToken.dDEXX,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 62,
    risk: 5,
    lpSymbol: 'WOO-BUSD LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x6eED7073e9e0256FF0c57E83f02CCC05bA8606E2',
    },
    tokenSymbol: 'WOO',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x4691937a7508860f876c9c0a2a617e7d9e945d4b',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 63,
    risk: 5,
    lpSymbol: 'HTB-BNB LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xab4EEE05F9AfD7EF47770978Ec74Cb5A2BB07712',
    },
    tokenSymbol: 'HTB',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x4e840aadd28da189b9906674b4afcb77c128d9ea',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 64,
    risk: 5,
    lpSymbol: 'HTB-dDEXX LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x6678B5B35911401f7B81CbcfEFA210391dc9653E',
    },
    tokenSymbol: 'HTB',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x4e840aadd28da189b9906674b4afcb77c128d9ea',
    },
    quoteTokenSymbol: QuoteToken.dDEXX,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 65,
    risk: 5,
    lpSymbol: 'HTB-BUSD LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xc3f52E0B28964E0c57b8f16C30b48C21837b4c8E',
    },
    tokenSymbol: 'HTB',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x4e840aadd28da189b9906674b4afcb77c128d9ea',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 66,
    risk: 5,
    lpSymbol: 'JGN-BNB LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xd5d6C3Eb295Dc2f23c3979BB22EaDCDF018d32A6',
    },
    tokenSymbol: 'JGN',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 67,
    risk: 5,
    lpSymbol: 'JGN-dDEXX LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x7A48Ad2E5F402966b5B87446360d78157297A5C7',
    },
    tokenSymbol: 'JGN',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75',
    },
    quoteTokenSymbol: QuoteToken.dDEXX,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 68,
    risk: 5,
    lpSymbol: 'JGN-BUSD LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xd6556d75Da64B39D36Ed30f959906eebf71663e0',
    },
    tokenSymbol: 'JGN',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 69,
    risk: 5,
    lpSymbol: 'DFT-BNB LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x0dfd2FBFDbEf030Fd7a2773eE9CaBEE13BDFBA3E',
    },
    tokenSymbol: 'DFT',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x42712df5009c20fee340b245b510c0395896cf6e',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 70,
    risk: 5,
    lpSymbol: 'DFT-dDEXX LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x226E134431044b82d3adE0d844f2d9FD8f4aE3aB',
    },
    tokenSymbol: 'DFT',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x42712df5009c20fee340b245b510c0395896cf6e',
    },
    quoteTokenSymbol: QuoteToken.dDEXX,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 71,
    risk: 5,
    lpSymbol: 'DFT-BUSD LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x9e934E330291DC76F38eF7D1ed49A0cC48F2b05C',
    },
    tokenSymbol: 'DFT',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x42712df5009c20fee340b245b510c0395896cf6e',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 72,
    risk: 5,
    lpSymbol: 'HAI-BNB LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xcE1607856F9D88E2ad894f5243F0B353E2AF485e',
    },
    tokenSymbol: 'HAI',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xaa9e582e5751d703f85912903bacaddfed26484c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 73,
    risk: 5,
    lpSymbol: 'HAI-dDEXX LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x9cd6D240951b38Dff460561Fb3aac474e342Ad84',
    },
    tokenSymbol: 'HAI',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xaa9e582e5751d703f85912903bacaddfed26484c',
    },
    quoteTokenSymbol: QuoteToken.dDEXX,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 74,
    risk: 5,
    lpSymbol: 'HAI-BUSD LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xa8AC626593E2c288eaC98EdA2cA9138dfbAe481c',
    },
    tokenSymbol: 'HAI',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xaa9e582e5751d703f85912903bacaddfed26484c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 75,
    risk: 5,
    lpSymbol: 'O3-BUSD LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x216888e7B635A0cA52be249bd90A2A3305452451',
    },
    tokenSymbol: 'O3',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xee9801669c6138e84bd50deb500827b776777d28',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 76,
    risk: 5,
    lpSymbol: 'O3-dDEXX LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x7ECb7425B2E0F3d73D7B092f074c2E2327c418d9',
    },
    tokenSymbol: 'O3',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xee9801669c6138e84bd50deb500827b776777d28',
    },
    quoteTokenSymbol: QuoteToken.dDEXX,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 77,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'BSCPAD',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xdfBf877E36C3fb7f331dC9579FF8466C799010A0', // CAKE-BUSD LP
    },
    tokenSymbol: 'BSCPAD',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x5a3010d4d8d3b5fb49f8b6e57fb9e48063f16700',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 78,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'FORM',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xd5b6744D245d41e55232F5859D14bb81D61dB8F9', // CAKE-BUSD LP
    },
    tokenSymbol: 'FORM',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x25a528af62e56512a19ce8c3cab427807c28cc19',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 79,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'ORBS',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xA90C28eC34511f63E46Bd3c2BC0CB7F67eD58d7C', // CAKE-BUSD LP
    },
    tokenSymbol: 'ORBS',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xebd49b26169e1b52c04cfd19fcf289405df55f80',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 80,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'DG',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x1C13b9612184f2186E66b9C0Ba71F5e5C1268246', // CAKE-BUSD LP
    },
    tokenSymbol: 'DG',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x9fdc3ae5c814b79dca2556564047c5e7e5449c19',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 81,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WOO',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x6eED7073e9e0256FF0c57E83f02CCC05bA8606E2', // CAKE-BUSD LP
    },
    tokenSymbol: 'WOO',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x4691937a7508860f876c9c0a2a617e7d9e945d4b',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 82,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'HTB',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xc3f52E0B28964E0c57b8f16C30b48C21837b4c8E', // CAKE-BUSD LP
    },
    tokenSymbol: 'HTB',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x4e840aadd28da189b9906674b4afcb77c128d9ea',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 83,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'JGN',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xd6556d75Da64B39D36Ed30f959906eebf71663e0', // CAKE-BUSD LP
    },
    tokenSymbol: 'JGN',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 84,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'DFT',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x9e934E330291DC76F38eF7D1ed49A0cC48F2b05C', // CAKE-BUSD LP
    },
    tokenSymbol: 'DFT',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x42712df5009c20fee340b245b510c0395896cf6e',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 85,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'HAI',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xa8AC626593E2c288eaC98EdA2cA9138dfbAe481c', // CAKE-BUSD LP
    },
    tokenSymbol: 'HAI',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xaa9e582e5751d703f85912903bacaddfed26484c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 86,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'O3',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x216888e7B635A0cA52be249bd90A2A3305452451', // CAKE-BUSD LP
    },
    tokenSymbol: 'O3',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xee9801669c6138e84bd50deb500827b776777d28',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 87,
    risk: 5,
    lpSymbol: 'BUSD-BABYDOGE LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xdF4f3ffE51804B7F0fDeb74c983a8067Ba82a809',
    },
    tokenSymbol: 'BABYDOGE',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xc748673057861a797275CD8A068AbB95A902e8de',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 88,
    risk: 5,
    lpSymbol: 'dDEXX-BABYDOGE LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x1DF0727FD99541A5844d6C7EFd957B24766703b3',
    },
    tokenSymbol: 'BABYDOGE',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xc748673057861a797275CD8A068AbB95A902e8de',
    },
    quoteTokenSymbol: QuoteToken.dDEXX,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 89,
    risk: 5,
    lpSymbol: 'BUSD-ETH LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xf71165E11eAfb252e93c7ffA6949C795A103DB4D',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 90,
    risk: 5,
    lpSymbol: 'dDEXX-ETH LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xf71165E11eAfb252e93c7ffA6949C795A103DB4D',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 91,
    risk: 5,
    lpSymbol: 'BUSD-DAI LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x1dcc337E5dF067cb9b25a9426Df4e7c86481057F',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 92,
    risk: 5,
    lpSymbol: 'dDEXX-DAI LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x180eeC53C22abb2cB837427df1224D431d9105c0',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 93,
    risk: 5,
    lpSymbol: 'BUSD-DOGE LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xba28F992Aef1B5E91397fFdd59bC1FB42F01527D',
    },
    tokenSymbol: 'DOGE',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xba2ae424d960c26247dd6c32edc70b295c744c43',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 94,
    risk: 5,
    lpSymbol: 'dDEXX-DOGE LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x0d4d671DAEAf68663162B93D811fC5514Fc33FEA',
    },
    tokenSymbol: 'DOGE',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xba2ae424d960c26247dd6c32edc70b295c744c43',
    },
    quoteTokenSymbol: QuoteToken.dDEXX,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 95,
    risk: 5,
    lpSymbol: 'BUSD-FEG LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xbE675078Ec8c74a72C2AB486E2405f0db3bE902c',
    },
    tokenSymbol: 'FEG',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xba2ae424d960c26247dd6c32edc70b295c744c43',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 96,
    risk: 5,
    lpSymbol: 'dDEXX-FEG LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xD7593a55D6aBEe635b48E9F951b7fDAc3bBe0FC2',
    },
    tokenSymbol: 'FEG',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xacfc95585d80ab62f67a14c566c1b7a49fe91167',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 97,
    risk: 5,
    lpSymbol: 'BUSD-UNI LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xe1eb99DDCf61cc9658C418581D74fAa18a6EbEBf',
    },
    tokenSymbol: 'UNI',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 98,
    risk: 5,
    lpSymbol: 'dDEXX-UNI LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xe1eb99DDCf61cc9658C418581D74fAa18a6EbEBf',
    },
    tokenSymbol: 'UNI',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
    },
    quoteTokenSymbol: QuoteToken.dDEXX,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 99,
    risk: 5,
    lpSymbol: 'BUSD-XVS LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x283e2a750B41837b27803083A68BB1686F0eFdee',
    },
    tokenSymbol: 'XVS',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 100,
    risk: 5,
    lpSymbol: 'dDEXX-XVS LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xf9c844504f4e55B3640B0B8eC99EAE2f0089C8A0',
    },
    tokenSymbol: 'XVS',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63',
    },
    quoteTokenSymbol: QuoteToken.dDEXX,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 101,
    risk: 5,
    lpSymbol: 'BUSD-ADA LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xbFeEAF2D36943BA2eD56Eb863a478c90847B560e',
    },
    tokenSymbol: 'ADA',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 102,
    risk: 5,
    lpSymbol: 'dDEXX-ADA LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x9354D4438873C42Ef891e9254d5371F22637251b',
    },
    tokenSymbol: 'ADA',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
    },
    quoteTokenSymbol: QuoteToken.dDEXX,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 103,
    risk: 5,
    lpSymbol: 'BUSD-LINK LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x0033ef9584EC95d428B54Ccf152f92cdf8997f2E',
    },
    tokenSymbol: 'LINK',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 104,
    risk: 5,
    lpSymbol: 'dDEXX-LINK LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x2afCD330d581C6f04110003A1FC7efB603E6492e',
    },
    tokenSymbol: 'LINK',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
    },
    quoteTokenSymbol: QuoteToken.dDEXX,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 105,
    risk: 5,
    lpSymbol: 'BUSD-BELT LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xfE22048bCf0B3E79bB94DEd6FB6b0b46c7bD1D20',
    },
    tokenSymbol: 'BELT',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xe0e514c71282b6f4e823703a39374cf58dc3ea4f',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 106,
    risk: 5,
    lpSymbol: 'dDEXX-BELT LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x4C07B1C4C215f09709A9e544DeC66655fb043eaE',
    },
    tokenSymbol: 'BELT',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xe0e514c71282b6f4e823703a39374cf58dc3ea4f',
    },
    quoteTokenSymbol: QuoteToken.dDEXX,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 107,
    risk: 5,
    lpSymbol: 'BUSD-NAFT LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xA75F21d9e7a14Cdb4B334AC10c68Fce9c64eFdd4',
    },
    tokenSymbol: 'NAFT',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xd7730681b1dc8f6f969166b29d8a5ea8568616a3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 108,
    risk: 5,
    lpSymbol: 'dDEXX-NAFT LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xa1b12E3D5a8CBeBFD3beF7cD31b82E58fA1d50Ff',
    },
    tokenSymbol: 'NAFT',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xd7730681b1dc8f6f969166b29d8a5ea8568616a3',
    },
    quoteTokenSymbol: QuoteToken.dDEXX,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 109,
    risk: 5,
    lpSymbol: 'BUSD-NRV LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x1137A9826ff04A8D7274798A7d6D32F4CF185407',
    },
    tokenSymbol: 'NRV',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 110,
    risk: 5,
    lpSymbol: 'dDEXX-NRV LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x82d6bbA85f1023Bfc1CaAb7207eb056a7B927742',
    },
    tokenSymbol: 'NRV',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096',
    },
    quoteTokenSymbol: QuoteToken.dDEXX,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 111,
    risk: 5,
    lpSymbol: 'BUSD-FINE LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x1C597897FD54D3281E5762c380c98b180EF619FC',
    },
    tokenSymbol: 'FINE',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x4e6415a5727ea08aae4580057187923aec331227',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 112,
    risk: 5,
    lpSymbol: 'dDEXX-FINE LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x3768a726F426c0e44cc1b37dacD9c5c8faf22ade',
    },
    tokenSymbol: 'FINE',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x4e6415a5727ea08aae4580057187923aec331227',
    },
    quoteTokenSymbol: QuoteToken.dDEXX,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 113,
    risk: 5,
    lpSymbol: 'BUSD-MEPAD LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x16ACA71f8028c49accBbe3cdfD41b873b4AEa144',
    },
    tokenSymbol: 'MEPAD',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x9d70a3ee3079a6fa2bb16591414678b7ad91f0b5',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 114,
    risk: 5,
    lpSymbol: 'dDEXX-MEPAD LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x23a0afC22b311760176C3020FcfaDd1B510F7036',
    },
    tokenSymbol: 'MEPAD',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x9d70a3ee3079a6fa2bb16591414678b7ad91f0b5',
    },
    quoteTokenSymbol: QuoteToken.dDEXX,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 115,
    risk: 5,
    lpSymbol: 'BUSD-DOP LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x16ACA71f8028c49accBbe3cdfD41b873b4AEa144',
    },
    tokenSymbol: 'DOP',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xad14e406eF0cc930A3416FEF696f6f5320993584',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 116,
    risk: 5,
    lpSymbol: 'dDEXX-DOP LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0xE3f1d12c8f41839cd38DF66eAc9e56614EFD6116',
    },
    tokenSymbol: 'DOP',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x844fa82f1e54824655470970f7004dd90546bb28',
    },
    quoteTokenSymbol: QuoteToken.dDEXX,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 117,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'BABYDOGE',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xdF4f3ffE51804B7F0fDeb74c983a8067Ba82a809', // CAKE-BUSD LP
    },
    tokenSymbol: 'BABYDOGE',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xc748673057861a797275CD8A068AbB95A902e8de',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 119,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'DAI',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x1dcc337E5dF067cb9b25a9426Df4e7c86481057F', // CAKE-BUSD LP
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 118,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xf71165E11eAfb252e93c7ffA6949C795A103DB4D', // CAKE-BUSD LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 120,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'DOGE',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xba28F992Aef1B5E91397fFdd59bC1FB42F01527D', // CAKE-BUSD LP
    },
    tokenSymbol: 'DOGE',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xba2ae424d960c26247dd6c32edc70b295c744c43',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 121,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'FEG',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xbE675078Ec8c74a72C2AB486E2405f0db3bE902c', // CAKE-BUSD LP
    },
    tokenSymbol: 'FEG',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xacfc95585d80ab62f67a14c566c1b7a49fe91167',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 122,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'UNI',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xe1eb99DDCf61cc9658C418581D74fAa18a6EbEBf', // CAKE-BUSD LP
    },
    tokenSymbol: 'UNI',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 123,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'XVS',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x283e2a750B41837b27803083A68BB1686F0eFdee', // CAKE-BUSD LP
    },
    tokenSymbol: 'XVS',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 124,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'ADA',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xbFeEAF2D36943BA2eD56Eb863a478c90847B560e', // CAKE-BUSD LP
    },
    tokenSymbol: 'ADA',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 125,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'LINK',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x0033ef9584EC95d428B54Ccf152f92cdf8997f2E', // CAKE-BUSD LP
    },
    tokenSymbol: 'LINK',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 126,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'BELT',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x4C07B1C4C215f09709A9e544DeC66655fb043eaE', // CAKE-BUSD LP
    },
    tokenSymbol: 'BELT',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xe0e514c71282b6f4e823703a39374cf58dc3ea4f',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 127,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'NAFT',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xA75F21d9e7a14Cdb4B334AC10c68Fce9c64eFdd4', // CAKE-BUSD LP
    },
    tokenSymbol: 'NAFT',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xd7730681b1dc8f6f969166b29d8a5ea8568616a3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 128,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'NRV',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x1137A9826ff04A8D7274798A7d6D32F4CF185407', // CAKE-BUSD LP
    },
    tokenSymbol: 'NRV',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 129,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'FINE',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x1C597897FD54D3281E5762c380c98b180EF619FC', // CAKE-BUSD LP
    },
    tokenSymbol: 'FINE',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x4e6415a5727ea08aae4580057187923aec331227',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 130,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'MEPAD',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x16ACA71f8028c49accBbe3cdfD41b873b4AEa144', // CAKE-BUSD LP
    },
    tokenSymbol: 'MEPAD',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x9d70a3ee3079a6fa2bb16591414678b7ad91f0b5',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 131,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'DOP',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xad14e406eF0cc930A3416FEF696f6f5320993584', // CAKE-BUSD LP
    },
    tokenSymbol: 'DOP',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x844fa82f1e54824655470970f7004dd90546bb28',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 132,
    risk: 5,
    lpSymbol: 'dDAO-BUSD LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x670E1e5c2a193d350eDdf9B115420cb9FCd97810',
    },
    tokenSymbol: 'dDAO',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xb6E5cB7f1cd37cD8828a45b715fBDB9a7E5149Fe',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 133,
    risk: 5,
    lpSymbol: 'dDAO-BNB LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x2c8E1326b35eE69F88FDa1A1Ff4265d17C9fAc24',
    },
    tokenSymbol: 'dDAO',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xb6E5cB7f1cd37cD8828a45b715fBDB9a7E5149Fe',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 134,
    risk: 5,
    lpSymbol: 'dDAO-dDEXX LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x21d4Da6D8677ce835107DaE3033C2268ecfd235D',
    },
    tokenSymbol: 'dDAO',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xb6E5cB7f1cd37cD8828a45b715fBDB9a7E5149Fe',
    },
    quoteTokenSymbol: QuoteToken.dDEXX,
    quoteTokenAdresses: contracts.cake,
  },
  // {
  //   pid: 135,
  //   risk: 3,
  //   isTokenOnly: true,
  //   tokenDecimal:0,
  //   lpSymbol: 'dDAO',
  //   lpAddresses: {
  //     97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
  //     56: '0x670E1e5c2a193d350eDdf9B115420cb9FCd97810', // CAKE-BUSD LP
  //   },
  //   tokenSymbol: 'dDAO',
  //   tokenAddresses: {
  //     97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
  //     56: '0xb6E5cB7f1cd37cD8828a45b715fBDB9a7E5149Fe',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
 
  {
    pid: 136,
    risk: 5,
    lpSymbol: 'mTSLA-BUSD LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x356CfbbaEc3A63f7f7cBc91a4d5911780E6EcA8b',
    },
    tokenSymbol: 'mTSLA',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xF215A127A196e3988C09d052e16BcFD365Cd7AA3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 137,
    risk: 5,
    lpSymbol: 'mAMZN-BUSD LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x02C0a101b2385Eb0A5062C35B6cCc272d10C37D0',
    },
    tokenSymbol: 'mAMZN',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x3947B992DC0147D2D89dF0392213781b04B25075',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 138,
    risk: 5,
    lpSymbol: 'mGOOG-BUSD LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x7dF9E7786b7232b8005664B460D7d8FF7c1Aa363',
    },
    tokenSymbol: 'mGOOG',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x62D71B23bF15218C7d2D7E48DBbD9e9c650B173f',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 139,
    risk: 5,
    lpSymbol: 'mNFLX-BUSD LP',
    lpAddresses: {
      97: '0x7FEb4300e7841EdC111f363b166f1562CE7f8E41',
      56: '0x5674FE319a0c5F42CA7769fB548e845992375b0E',
    },
    tokenSymbol: 'mNFLX',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xa04F060077D90Fe2647B61e4dA4aD1F97d6649dc',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 140,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'mTSLA',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x356CfbbaEc3A63f7f7cBc91a4d5911780E6EcA8b', // CAKE-BUSD LP
    },
    tokenSymbol: 'mTSLA',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xF215A127A196e3988C09d052e16BcFD365Cd7AA3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 141,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'mAMZN',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x02C0a101b2385Eb0A5062C35B6cCc272d10C37D0', // CAKE-BUSD LP
    },
    tokenSymbol: 'mAMZN',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x3947B992DC0147D2D89dF0392213781b04B25075',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 142,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'mGOOG',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x7dF9E7786b7232b8005664B460D7d8FF7c1Aa363', // CAKE-BUSD LP
    },
    tokenSymbol: 'mGOOG',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x62D71B23bF15218C7d2D7E48DBbD9e9c650B173f',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 143,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'mNFLX',
    lpAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0x5674FE319a0c5F42CA7769fB548e845992375b0E', // CAKE-BUSD LP
    },
    tokenSymbol: 'mNFLX',
    tokenAddresses: {
      97: '0xf88ff3B6D22be2a28227968d9fbc6346ba6A2d61',
      56: '0xa04F060077D90Fe2647B61e4dA4aD1F97d6649dc',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
