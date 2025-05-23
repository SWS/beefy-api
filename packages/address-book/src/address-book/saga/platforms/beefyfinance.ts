const devMultisig = '0x000000a151650b85742d8c286E09ABa7bE9BDB82';
const treasuryMultisig = '0xA55e75C4815Ff39eFD76C257857441d9FD99b45b';

export const beefyfinance = {
  devMultisig,
  treasuryMultisig,
  strategyOwner: '0x09D19184F46A32213DF06b981122e06882B61309',
  vaultOwner: '0xf2EeC1baC39306C0761c816d1D33cF7C9Ad6C0Fe',
  keeper: '0x4fED5491693007f0CD49f4614FFC38Ab6A04B619',
  treasurer: treasuryMultisig,
  launchpoolOwner: devMultisig,
  rewardPool: '0x0000000000000000000000000000000000000000',
  treasury: '0x0000000000000000000000000000000000000000',
  beefyFeeRecipient: '0x02Ae4716B9D5d48Db1445814b0eDE39f5c28264B',
  multicall: '0x448a3539a591dE3Fb9D5AAE407471D21d40cD315',
  bifiMaxiStrategy: '0x0000000000000000000000000000000000000000',
  voter: '0x5e1caC103F943Cd84A1E92dAde4145664ebf692A',
  beefyFeeConfig: '0x2ec5d5e9aaf3c3f56eBeF2fC46A5af9e42810b41',
  vaultFactory: '0xD19ab62F83380908D65E344567378cF104cE46c2',
  strategyFactory: '0x43d05dB4C288e11096eD1e3e3a749Ef209AF5b2F',
  wrapperFactory: '0x0000000000000000000000000000000000000000',
  zap: '0xcA7b72437193665d078aEeaDFFa565E1A2E71c3B',
  zapTokenManager: '0xFeEFCc6CEB8dB58575f7075Ff91D322037e43808',
  treasurySwapper: '0x0000000000000000000000000000000000000000',

  /// CLM Contracts
  clmFactory: '0xc26314091EB7a9c75E5536f7f54A8F63e829547D',
  clmStrategyFactory: '0x5dAEd8dEe03CF685D072414cBc82Bf3933D9ed7f',
  clmRewardPoolFactory: '0xF08cc9422a43Be7c1d6663DF2890Cf7E36E79307',
  positionMulticall: '0x354D3d7B61230C88F5f50176d9329d13366FbC28',

  /// Beefy Swapper Contracts
  beefySwapper: '0xe103ab2f922aa1a56EC058AbfDA2CeEa1e95bCd7',
  beefyOracle: '0xA5Cd8A60a05571141370D184e255777e5c2d5968',
  beefyOracleChainlink: '0x542Bf9f89c3Ba0edb7aE5EB4Cf582d349fCdC608',
  beefyOracleUniswapV2: '0xC2cEE7cf27D2Eda09fEc1743f3953dA77Bf1DA61',
  beefyOracleUniswapV3: '0x03C2E2e84031d913d45B1F5b5dDC8E50Fcb28652',
} as const;
