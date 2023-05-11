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
  WORMHOLE_USDC:
    '0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN',
  WORMHOLE_ETH:
    '0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5::coin::COIN',
  WORMHOLE_USDT:
    '0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN',
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
  },
  [Network.MAINNET]: {
    ...MAINNET_BASE_COINS,
    S_LP_WORMHOLE_USDC_WORMHOLE_USDT: `${
      OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
    }::core::LPCoin<${STABLE[Network.MAINNET]}, ${
      MAINNET_BASE_COINS.WORMHOLE_USDC
    }, ${MAINNET_BASE_COINS.WORMHOLE_USDT}>`,
    V_LP_SUI_WORMHOLE_ETH: `${
      OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.MAINNET]}, ${MAINNET_BASE_COINS.SUI}, ${
      MAINNET_BASE_COINS.WORMHOLE_ETH
    }>`,
    V_LP_SUI_WORMHOLE_USDT: `${
      OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.MAINNET]}, ${MAINNET_BASE_COINS.SUI}, ${
      MAINNET_BASE_COINS.WORMHOLE_USDT
    }>`,
    V_LP_SUI_WORMHOLE_USDC: `${
      OBJECT_RECORD[Network.MAINNET].DEX_PACKAGE_ID
    }::core::LPCoin<${VOLATILE[Network.MAINNET]}, ${MAINNET_BASE_COINS.SUI}, ${
      MAINNET_BASE_COINS.WORMHOLE_USDC
    }>`,
  },
};

export const DEX_BASE_TOKEN_ARRAY = {
  [Network.DEVNET]: [COIN_TYPE[Network.DEVNET].ETH],
  [Network.TESTNET]: [COIN_TYPE[Network.TESTNET].ETH],
  [Network.MAINNET]: [
    COIN_TYPE[Network.MAINNET].SUI,
    COIN_TYPE[Network.MAINNET].WORMHOLE_USDC,
  ],
};
