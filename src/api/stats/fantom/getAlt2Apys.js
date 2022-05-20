const { fantomWeb3: web3 } = require('../../../utils/web3');
const { FANTOM_CHAIN_ID: chainId } = require('../../../constants');
const { getMasterChefApys } = require('../common/getMasterChefApys');
const pools = require('../../../data/fantom/alt2LpPools.json');
import { spookyClient } from '../../../apollo/client';
import { SPOOKY_LPF } from '../../../constants';

const getAlt2Apys = async () =>
  await getMasterChefApys({
    web3: web3,
    chainId: chainId,
    masterchef: '0xEA0032f5177FB2F4D4F932DBE61377F47E8A7E47',
    tokenPerBlock: 'aSharePerSecond',
    hasMultiplier: false,
    pools: pools,
    oracleId: 'ASHARE2',
    oracle: 'tokens',
    decimals: '1e18',
    secondsPerBlock: 1,
    tradingFeeInfoClient: spookyClient,
    liquidityProviderFee: SPOOKY_LPF,
    // log: true,
  });

module.exports = getAlt2Apys;
