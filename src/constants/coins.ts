import { SUI_TYPE_ARG } from '@mysten/sui.js';

import { Network, OBJECT_RECORD } from './index';

export const VOLATILE = {
  [Network.DEVNET]: `${
    OBJECT_RECORD[Network.DEVNET].DEX_PACKAGE_ID
  }::curve::Volatile`,
  [Network.TESTNET]: `${
    OBJECT_RECORD[Network.TESTNET].DEX_PACKAGE_ID
  }::curve::Volatile`,
  [Network.MAINNET]: `${
    OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
  }::curve::Volatile`,
};

export const STABLE = {
  [Network.DEVNET]: `${
    OBJECT_RECORD[Network.DEVNET].DEX_PACKAGE_ID
  }::curve::Stable`,
  [Network.TESTNET]: `${
    OBJECT_RECORD[Network.TESTNET].DEX_PACKAGE_ID
  }::curve::Stable`,
  [Network.MAINNET]: `${
    OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
  }::curve::Stable`,
};

const DEV_NET_BASE_COINS = {
  SUI: SUI_TYPE_ARG,
  BNB: `${OBJECT_RECORD[Network.DEVNET].FAUCET_PACKAGE_ID}::ibnb::IBNB`,
  ETH: `${OBJECT_RECORD[Network.DEVNET].FAUCET_PACKAGE_ID}::ieth::IETH`,
  BTC: `${OBJECT_RECORD[Network.DEVNET].FAUCET_PACKAGE_ID}::ibtc::IBTC`,
  USDT: `${OBJECT_RECORD[Network.DEVNET].FAUCET_PACKAGE_ID}::iusdt::IUSDT`,
  USDC: `${OBJECT_RECORD[Network.DEVNET].FAUCET_PACKAGE_ID}::iusdc::IUSDC`,
  IPX: `${OBJECT_RECORD[Network.DEVNET].IPX_PACKAGE_ID}::ipx::IPX`,
};

const TESTNET_NET_BASE_COINS = {
  SUI: SUI_TYPE_ARG,
  BNB: `${OBJECT_RECORD[Network.TESTNET].FAUCET_PACKAGE_ID}::ibnb::IBNB`,
  ETH: `${OBJECT_RECORD[Network.TESTNET].FAUCET_PACKAGE_ID}::ieth::IETH`,
  BTC: `${OBJECT_RECORD[Network.TESTNET].FAUCET_PACKAGE_ID}::ibtc::IBTC`,
  USDT: `${OBJECT_RECORD[Network.TESTNET].FAUCET_PACKAGE_ID}::iusdt::IUSDT`,
  USDC: `${OBJECT_RECORD[Network.TESTNET].FAUCET_PACKAGE_ID}::iusdc::IUSDC`,
  IPX: `${OBJECT_RECORD[Network.TESTNET].IPX_PACKAGE_ID}::ipx::IPX`,
};

export const MAINNET_BASE_COINS = {
  SUI: SUI_TYPE_ARG,
  ETH_WORMHOLE_USDC:
    '0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN',
  NATIVE_WORMHOLE_ETH:
    '0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5::coin::COIN',
  ETH_WORMHOLE_USDT:
    '0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN',
  NATIVE_WORMHOLE_WBNB:
    '0xb848cce11ef3a8f62eccea6eb5b35a12c4c2b1ee1af7755d02d7bd6218e8226f::coin::COIN',
  NATIVE_WORMHOLE_WAVAX:
    '0x1e8b532cca6569cab9f9b9ebc73f8c13885012ade714729aa3b450e0339ac766::coin::COIN',
  NATIVE_WORMHOLE_WFTM:
    '0x6081300950a4f1e2081580e919c210436a1bed49080502834950d31ee55a2396::coin::COIN',
  NATIVE_WORMHOLE_CELO:
    '0xa198f3be41cda8c07b3bf3fee02263526e535d682499806979a111e88a5a8d0f::coin::COIN',
  NATIVE_WORMHOLE_WMATIC:
    '0xdbe380b13a6d0f5cdedd58de8f04625263f113b3f9db32b3e1983f49e2841676::coin::COIN',
  NATIVE_WORMHOLE_SOL:
    '0xb7844e289a8410e50fb3ca48d69eb9cf29e27d223ef90353fe1bd8e27ff8f3f8::coin::COIN',
  BSC_WORMHOLE_ADA:
    '0x4eac6573f65e7db5aea5a23e1335993a57e088dcd4aff7934059d9a6311d8655::coin::COIN',
  BSC_WORMHOLE_BTCB:
    '0x5cc7b6ed0ce0d43d08667793f6efe7a34d678a780755dc37ea8bfa8805f63327::coin::COIN',
  BSC_WORMHOLE_USDT:
    '0x603b488c87e0d1df64560a61418c87238d440a29ee39bbd757b0c92d38a35c7c::coin::COIN',
  BSC_WORMHOLE_USDC:
    '0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba::coin::COIN',
  BSC_WORMHOLE_ETH:
    '0x5029d5a94429a73b8036cd67192d9c5e09bbc2c0fee942d50075a9edba66744f::coin::COIN',
  BSC_WORMHOLE_FLOKI:
    '0xbcbbd5c23edf35fc279e21ebc129a1187dbfa5b086c63a8e7ff202865888b27b::coin::COIN',
  BSC_WORMHOLE_DOGE:
    '0xd399b358bd0e835000f6caa8c771a7d186499b6e62d413c2fd6cfed709689f28::coin::COIN',
  ETH_CELER_WETH: '0x94e7a8e71830d2b34b3edaa195dc24c45d142584f06fa257b73af753d766e690::celer_weth_coin::CELER_WETH_COIN',
  ETH_CELER_WBTC: '0x94e7a8e71830d2b34b3edaa195dc24c45d142584f06fa257b73af753d766e690::celer_wbtc_coin::CELER_WBTC_COIN',
  ETH_CELER_USDC: '0x94e7a8e71830d2b34b3edaa195dc24c45d142584f06fa257b73af753d766e690::celer_usdt_coin::CELER_USDT_COIN',
  ETH_CELER_USDT: '0x94e7a8e71830d2b34b3edaa195dc24c45d142584f06fa257b73af753d766e690::celer_usdt_coin::CELER_USDT_COIN'
};

export const COIN_TYPE = {
  [Network.DEVNET]: {
    ...DEV_NET_BASE_COINS,
    V_LP_SUI_ETH: `${
      OBJECT_RECORD[Network.DEVNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.DEVNET]}, ${DEV_NET_BASE_COINS.SUI}, ${
      DEV_NET_BASE_COINS.ETH
    }>`,
    V_LP_BTC_ETH: `${
      OBJECT_RECORD[Network.DEVNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.DEVNET]}, ${DEV_NET_BASE_COINS.BTC}, ${
      DEV_NET_BASE_COINS.ETH
    }>`,
    V_LP_BNB_ETH: `${
      OBJECT_RECORD[Network.DEVNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.DEVNET]}, ${DEV_NET_BASE_COINS.BNB}, ${
      DEV_NET_BASE_COINS.ETH
    }>`,
    V_LP_ETH_USDT: `${
      OBJECT_RECORD[Network.DEVNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.DEVNET]}, ${DEV_NET_BASE_COINS.ETH}, ${
      DEV_NET_BASE_COINS.USDT
    }>`,
    V_LP_ETH_USDC: `${
      OBJECT_RECORD[Network.DEVNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.DEVNET]}, ${DEV_NET_BASE_COINS.ETH}, ${
      DEV_NET_BASE_COINS.USDC
    }>`,
    V_LP_ETH_IPX: `${
      OBJECT_RECORD[Network.DEVNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.DEVNET]}, ${DEV_NET_BASE_COINS.ETH}, ${
      DEV_NET_BASE_COINS.IPX
    }>`,
    S_LP_USDC_USDT: `${
      OBJECT_RECORD[Network.DEVNET].DEX_PACKAGE_ID
    }::core::LPCoin<${STABLE[Network.DEVNET]}, ${DEV_NET_BASE_COINS.USDC}, ${
      DEV_NET_BASE_COINS.USDT
    }>`,
  },
  [Network.TESTNET]: {
    ...TESTNET_NET_BASE_COINS,
    V_LP_SUI_ETH: `${
      OBJECT_RECORD[Network.TESTNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.TESTNET]}, ${
      TESTNET_NET_BASE_COINS.SUI
    }, ${TESTNET_NET_BASE_COINS.ETH}>`,
    V_LP_BTC_ETH: `${
      OBJECT_RECORD[Network.TESTNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.TESTNET]}, ${
      TESTNET_NET_BASE_COINS.BTC
    }, ${TESTNET_NET_BASE_COINS.ETH}>`,
    V_LP_BNB_ETH: `${
      OBJECT_RECORD[Network.TESTNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.TESTNET]}, ${
      TESTNET_NET_BASE_COINS.BNB
    }, ${TESTNET_NET_BASE_COINS.ETH}>`,
    V_LP_ETH_USDT: `${
      OBJECT_RECORD[Network.TESTNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.TESTNET]}, ${
      TESTNET_NET_BASE_COINS.ETH
    }, ${TESTNET_NET_BASE_COINS.USDT}>`,
    V_LP_ETH_USDC: `${
      OBJECT_RECORD[Network.TESTNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.TESTNET]}, ${
      TESTNET_NET_BASE_COINS.ETH
    }, ${TESTNET_NET_BASE_COINS.USDC}>`,
    V_LP_ETH_IPX: `${
      OBJECT_RECORD[Network.TESTNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.TESTNET]}, ${
      TESTNET_NET_BASE_COINS.IPX
    }, ${TESTNET_NET_BASE_COINS.ETH}>`,
    S_LP_USDC_USDT: `${
      OBJECT_RECORD[Network.TESTNET].DEX_PACKAGE_ID
    }::core::LPCoin<${STABLE[Network.TESTNET]}, ${
      TESTNET_NET_BASE_COINS.USDC
    }, ${TESTNET_NET_BASE_COINS.USDT}>`,
    SUID: '0x02871464ed71b80969b32f2b23c981b085866485ba5368c0f59588fcc0dbce47::suid::SUID'
  },
  [Network.MAINNET]: {
    ...MAINNET_BASE_COINS,
    S_LP_ETH_WORMHOLE_USDC_ETH_WORMHOLE_USDT: `${
      OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
    }::core::LPCoin<${STABLE[Network.MAINNET]}, ${
      MAINNET_BASE_COINS.ETH_WORMHOLE_USDC
    }, ${MAINNET_BASE_COINS.ETH_WORMHOLE_USDT}>`,
    V_LP_SUI_NATIVE_WORMHOLE_ETH: `${
      OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.MAINNET]}, ${MAINNET_BASE_COINS.SUI}, ${
      MAINNET_BASE_COINS.NATIVE_WORMHOLE_ETH
    }>`,
    V_LP_SUI_ETH_WORMHOLE_USDT: `${
      OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.MAINNET]}, ${MAINNET_BASE_COINS.SUI}, ${
      MAINNET_BASE_COINS.ETH_WORMHOLE_USDT
    }>`,
    V_LP_SUI_ETH_WORMHOLE_USDC: `${
      OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.MAINNET]}, ${MAINNET_BASE_COINS.SUI}, ${
      MAINNET_BASE_COINS.ETH_WORMHOLE_USDC
    }>`,
    V_LP_SUI_NATIVE_WORMHOLE_WBNB: `${
      OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.MAINNET]}, ${MAINNET_BASE_COINS.SUI}, ${
      MAINNET_BASE_COINS.NATIVE_WORMHOLE_WBNB
    }>`,
    V_LP_SUI_NATIVE_WORMHOLE_WMATIC: `${
      OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.MAINNET]}, ${MAINNET_BASE_COINS.SUI}, ${
      MAINNET_BASE_COINS.NATIVE_WORMHOLE_WMATIC
    }>`,
    V_LP_SUI_NATIVE_WORMHOLE_WFTM: `${
      OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.MAINNET]}, ${MAINNET_BASE_COINS.SUI}, ${
      MAINNET_BASE_COINS.NATIVE_WORMHOLE_WFTM
    }>`,
    V_LP_SUI_NATIVE_WORMHOLE_CELO: `${
      OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.MAINNET]}, ${MAINNET_BASE_COINS.SUI}, ${
      MAINNET_BASE_COINS.NATIVE_WORMHOLE_CELO
    }>`,
    V_LP_SUI_NATIVE_WORMHOLE_WAVAX: `${
      OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.MAINNET]}, ${MAINNET_BASE_COINS.SUI}, ${
      MAINNET_BASE_COINS.NATIVE_WORMHOLE_WAVAX
    }>`,
    V_LP_SUI_BSC_WORMHOLE_ADA: `${
      OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.MAINNET]}, ${MAINNET_BASE_COINS.SUI}, ${
      MAINNET_BASE_COINS.BSC_WORMHOLE_ADA
    }>`,
    V_LP_SUI_BSC_WORMHOLE_BTCB: `${
      OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.MAINNET]}, ${MAINNET_BASE_COINS.SUI}, ${
      MAINNET_BASE_COINS.BSC_WORMHOLE_BTCB
    }>`,
    V_LP_SUI_BSC_WORMHOLE_USDT: `${
      OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.MAINNET]}, ${MAINNET_BASE_COINS.SUI}, ${
      MAINNET_BASE_COINS.BSC_WORMHOLE_USDT
    }>`,
    S_LP_BSC_WORMHOLE_USDT_BSC_WORMHOLE_USDC: `${
      OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
    }::core::LPCoin<${STABLE[Network.MAINNET]}, ${
      MAINNET_BASE_COINS.BSC_WORMHOLE_USDT
    }, ${MAINNET_BASE_COINS.BSC_WORMHOLE_USDC}>`,
    V_LP_SUI_BSC_WORMHOLE_USDC: `${
      OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.MAINNET]}, ${MAINNET_BASE_COINS.SUI}, ${
      MAINNET_BASE_COINS.BSC_WORMHOLE_USDC
    }>`,
    S_LP_ETH_WORMHOLE_USDC_BSC_WORMHOLE_USDC: `${
      OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
    }::core::LPCoin<${STABLE[Network.MAINNET]}, ${
      MAINNET_BASE_COINS.ETH_WORMHOLE_USDC
    }, ${MAINNET_BASE_COINS.BSC_WORMHOLE_USDC}>`,
    V_LP_SUI_BSC_WORMHOLE_FLOKI: `${
      OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.MAINNET]}, ${MAINNET_BASE_COINS.SUI}, ${
      MAINNET_BASE_COINS.BSC_WORMHOLE_FLOKI
    }>`,
    V_LP_SUI_BSC_WORMHOLE_DOGE: `${
      OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.MAINNET]}, ${MAINNET_BASE_COINS.SUI}, ${
      MAINNET_BASE_COINS.BSC_WORMHOLE_DOGE
    }>`,
    V_LP_SUI_BSC_WORMHOLE_ETH: `${
      OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.MAINNET]}, ${MAINNET_BASE_COINS.SUI}, ${
      MAINNET_BASE_COINS.BSC_WORMHOLE_ETH
    }>`,
    V_LP_SUI_NATIVE_WORMHOLE_SOL: `${
      OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.MAINNET]}, ${MAINNET_BASE_COINS.SUI}, ${
      MAINNET_BASE_COINS.NATIVE_WORMHOLE_SOL
    }>`,
    V_LP_SUI_ETH_CELER_WETH:`${
      OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.MAINNET]}, ${MAINNET_BASE_COINS.SUI}, ${
      MAINNET_BASE_COINS.ETH_CELER_WETH
    }>`,
    V_LP_SUI_ETH_CELER_WBTC:`${
      OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.MAINNET]}, ${MAINNET_BASE_COINS.SUI}, ${
      MAINNET_BASE_COINS.ETH_CELER_WBTC
    }>`,
    V_LP_SUI_ETH_CELER_USDC:`${
      OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.MAINNET]}, ${MAINNET_BASE_COINS.SUI}, ${
      MAINNET_BASE_COINS.ETH_CELER_USDC
    }>`,
  },
};

export const DEX_BASE_TOKEN_ARRAY = {
  [Network.DEVNET]: [COIN_TYPE[Network.DEVNET].ETH],
  [Network.TESTNET]: [COIN_TYPE[Network.TESTNET].ETH],
  [Network.MAINNET]: [
    COIN_TYPE[Network.MAINNET].SUI,
    COIN_TYPE[Network.MAINNET].ETH_WORMHOLE_USDC,
    COIN_TYPE[Network.MAINNET].BSC_WORMHOLE_USDC,
  ],
};
