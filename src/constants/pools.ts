import { Network } from './index';

const TEST_NET_POOLS = {
  '0x2::coin::Coin<0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ibtc::IBTC>':
    {
      '0x2::coin::Coin<0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ieth::IETH>':
        '0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::core::Pool<0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::curve::Volatile, 0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ibtc::IBTC, 0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ieth::IETH>',
    },
  '0x2::coin::Coin<0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ieth::IETH>':
    {
      '0x2::coin::Coin<0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ibtc::IBTC>':
        '0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::core::Pool<0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::curve::Volatile, 0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ibtc::IBTC, 0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ieth::IETH>',
      '0x2::coin::Coin<0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::iusdc::IUSDC>':
        '0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::core::Pool<0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::curve::Volatile, 0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ieth::IETH, 0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::iusdc::IUSDC>',
      '0x2::coin::Coin<0x67bf2ef7d1947285b05566a6e46ca82708e0383556345e52c43bb56b8138410a::xvs::XVS>':
        '0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::core::Pool<0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::curve::Volatile, 0x67bf2ef7d1947285b05566a6e46ca82708e0383556345e52c43bb56b8138410a::xvs::XVS, 0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ieth::IETH>',
      '0x2::coin::Coin<0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::iusdt::IUSDT>':
        '0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::core::Pool<0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::curve::Volatile, 0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ieth::IETH, 0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::iusdt::IUSDT>',
      '0x2::coin::Coin<0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ibnb::IBNB>':
        '0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::core::Pool<0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::curve::Volatile, 0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ibnb::IBNB, 0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ieth::IETH>',
      '0x2::coin::Coin<0x57e5622e674c7fd98303516920ac4250a0667e486e3617f71c8b448f1b032aed::ipx::IPX>':
        '0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::core::Pool<0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::curve::Volatile, 0x57e5622e674c7fd98303516920ac4250a0667e486e3617f71c8b448f1b032aed::ipx::IPX, 0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ieth::IETH>',
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::core::Pool<0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::curve::Volatile, 0x2::sui::SUI, 0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ieth::IETH>',
    },
  '0x2::coin::Coin<0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::iusdc::IUSDC>':
    {
      '0x2::coin::Coin<0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ieth::IETH>':
        '0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::core::Pool<0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::curve::Volatile, 0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ieth::IETH, 0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::iusdc::IUSDC>',
      '0x2::coin::Coin<0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::iusdt::IUSDT>':
        '0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::core::Pool<0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::curve::Stable, 0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::iusdc::IUSDC, 0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::iusdt::IUSDT>',
    },
  '0x2::coin::Coin<0x67bf2ef7d1947285b05566a6e46ca82708e0383556345e52c43bb56b8138410a::xvs::XVS>':
    {
      '0x2::coin::Coin<0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ieth::IETH>':
        '0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::core::Pool<0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::curve::Volatile, 0x67bf2ef7d1947285b05566a6e46ca82708e0383556345e52c43bb56b8138410a::xvs::XVS, 0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ieth::IETH>',
    },
  '0x2::coin::Coin<0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::iusdt::IUSDT>':
    {
      '0x2::coin::Coin<0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ieth::IETH>':
        '0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::core::Pool<0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::curve::Volatile, 0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ieth::IETH, 0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::iusdt::IUSDT>',
      '0x2::coin::Coin<0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::iusdc::IUSDC>':
        '0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::core::Pool<0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::curve::Stable, 0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::iusdc::IUSDC, 0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::iusdt::IUSDT>',
    },
  '0x2::coin::Coin<0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ibnb::IBNB>':
    {
      '0x2::coin::Coin<0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ieth::IETH>':
        '0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::core::Pool<0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::curve::Volatile, 0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ibnb::IBNB, 0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ieth::IETH>',
    },
  '0x2::coin::Coin<0x57e5622e674c7fd98303516920ac4250a0667e486e3617f71c8b448f1b032aed::ipx::IPX>':
    {
      '0x2::coin::Coin<0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ieth::IETH>':
        '0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::core::Pool<0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::curve::Volatile, 0x57e5622e674c7fd98303516920ac4250a0667e486e3617f71c8b448f1b032aed::ipx::IPX, 0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ieth::IETH>',
    },
  '0x2::coin::Coin<0x2::sui::SUI>': {
    '0x2::coin::Coin<0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ieth::IETH>':
      '0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::core::Pool<0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::curve::Volatile, 0x2::sui::SUI, 0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0::ieth::IETH>',
  },
};

const DEV_NET_POOLS = {
  '0x2::coin::Coin<0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::ieth::IETH>':
    {
      '0x2::coin::Coin<0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::iusdc::IUSDC>':
        '0x1cab93480403e420a84c96340d8917810e8736e1f2348202a58ee3b3ae022ae7::core::Pool<0x1cab93480403e420a84c96340d8917810e8736e1f2348202a58ee3b3ae022ae7::curve::Volatile, 0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::ieth::IETH, 0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::iusdc::IUSDC>',
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x1cab93480403e420a84c96340d8917810e8736e1f2348202a58ee3b3ae022ae7::core::Pool<0x1cab93480403e420a84c96340d8917810e8736e1f2348202a58ee3b3ae022ae7::curve::Volatile, 0x2::sui::SUI, 0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::ieth::IETH>',
      '0x2::coin::Coin<0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::ibtc::IBTC>':
        '0x1cab93480403e420a84c96340d8917810e8736e1f2348202a58ee3b3ae022ae7::core::Pool<0x1cab93480403e420a84c96340d8917810e8736e1f2348202a58ee3b3ae022ae7::curve::Volatile, 0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::ibtc::IBTC, 0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::ieth::IETH>',
      '0x2::coin::Coin<0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::ibnb::IBNB>':
        '0x1cab93480403e420a84c96340d8917810e8736e1f2348202a58ee3b3ae022ae7::core::Pool<0x1cab93480403e420a84c96340d8917810e8736e1f2348202a58ee3b3ae022ae7::curve::Volatile, 0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::ibnb::IBNB, 0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::ieth::IETH>',
      '0x2::coin::Coin<0x7526f2ab7890276a8bdf4c3167683e2df079781fc3c3a6e1e0bdb95722014954::ipx::IPX>':
        '0x1cab93480403e420a84c96340d8917810e8736e1f2348202a58ee3b3ae022ae7::core::Pool<0x1cab93480403e420a84c96340d8917810e8736e1f2348202a58ee3b3ae022ae7::curve::Volatile, 0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::ieth::IETH, 0x7526f2ab7890276a8bdf4c3167683e2df079781fc3c3a6e1e0bdb95722014954::ipx::IPX>',
      '0x2::coin::Coin<0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::iusdt::IUSDT>':
        '0x1cab93480403e420a84c96340d8917810e8736e1f2348202a58ee3b3ae022ae7::core::Pool<0x1cab93480403e420a84c96340d8917810e8736e1f2348202a58ee3b3ae022ae7::curve::Volatile, 0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::ieth::IETH, 0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::iusdt::IUSDT>',
    },
  '0x2::coin::Coin<0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::iusdc::IUSDC>':
    {
      '0x2::coin::Coin<0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::ieth::IETH>':
        '0x1cab93480403e420a84c96340d8917810e8736e1f2348202a58ee3b3ae022ae7::core::Pool<0x1cab93480403e420a84c96340d8917810e8736e1f2348202a58ee3b3ae022ae7::curve::Volatile, 0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::ieth::IETH, 0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::iusdc::IUSDC>',
      '0x2::coin::Coin<0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::iusdt::IUSDT>':
        '0x1cab93480403e420a84c96340d8917810e8736e1f2348202a58ee3b3ae022ae7::core::Pool<0x1cab93480403e420a84c96340d8917810e8736e1f2348202a58ee3b3ae022ae7::curve::Stable, 0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::iusdc::IUSDC, 0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::iusdt::IUSDT>',
    },
  '0x2::coin::Coin<0x2::sui::SUI>': {
    '0x2::coin::Coin<0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::ieth::IETH>':
      '0x1cab93480403e420a84c96340d8917810e8736e1f2348202a58ee3b3ae022ae7::core::Pool<0x1cab93480403e420a84c96340d8917810e8736e1f2348202a58ee3b3ae022ae7::curve::Volatile, 0x2::sui::SUI, 0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::ieth::IETH>',
  },
  '0x2::coin::Coin<0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::ibtc::IBTC>':
    {
      '0x2::coin::Coin<0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::ieth::IETH>':
        '0x1cab93480403e420a84c96340d8917810e8736e1f2348202a58ee3b3ae022ae7::core::Pool<0x1cab93480403e420a84c96340d8917810e8736e1f2348202a58ee3b3ae022ae7::curve::Volatile, 0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::ibtc::IBTC, 0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::ieth::IETH>',
    },
  '0x2::coin::Coin<0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::ibnb::IBNB>':
    {
      '0x2::coin::Coin<0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::ieth::IETH>':
        '0x1cab93480403e420a84c96340d8917810e8736e1f2348202a58ee3b3ae022ae7::core::Pool<0x1cab93480403e420a84c96340d8917810e8736e1f2348202a58ee3b3ae022ae7::curve::Volatile, 0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::ibnb::IBNB, 0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::ieth::IETH>',
    },
  '0x2::coin::Coin<0x7526f2ab7890276a8bdf4c3167683e2df079781fc3c3a6e1e0bdb95722014954::ipx::IPX>':
    {
      '0x2::coin::Coin<0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::ieth::IETH>':
        '0x1cab93480403e420a84c96340d8917810e8736e1f2348202a58ee3b3ae022ae7::core::Pool<0x1cab93480403e420a84c96340d8917810e8736e1f2348202a58ee3b3ae022ae7::curve::Volatile, 0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::ieth::IETH, 0x7526f2ab7890276a8bdf4c3167683e2df079781fc3c3a6e1e0bdb95722014954::ipx::IPX>',
    },
  '0x2::coin::Coin<0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::iusdt::IUSDT>':
    {
      '0x2::coin::Coin<0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::iusdc::IUSDC>':
        '0x1cab93480403e420a84c96340d8917810e8736e1f2348202a58ee3b3ae022ae7::core::Pool<0x1cab93480403e420a84c96340d8917810e8736e1f2348202a58ee3b3ae022ae7::curve::Stable, 0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::iusdc::IUSDC, 0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::iusdt::IUSDT>',
      '0x2::coin::Coin<0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::ieth::IETH>':
        '0x1cab93480403e420a84c96340d8917810e8736e1f2348202a58ee3b3ae022ae7::core::Pool<0x1cab93480403e420a84c96340d8917810e8736e1f2348202a58ee3b3ae022ae7::curve::Volatile, 0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::ieth::IETH, 0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::iusdt::IUSDT>',
    },
};

const MAIN_NET_POOLS = {
  '0x2::coin::Coin<0x2::sui::SUI>': {
    '0x2::coin::Coin<0xb848cce11ef3a8f62eccea6eb5b35a12c4c2b1ee1af7755d02d7bd6218e8226f::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xb848cce11ef3a8f62eccea6eb5b35a12c4c2b1ee1af7755d02d7bd6218e8226f::coin::COIN>',
    '0x2::coin::Coin<0xa198f3be41cda8c07b3bf3fee02263526e535d682499806979a111e88a5a8d0f::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xa198f3be41cda8c07b3bf3fee02263526e535d682499806979a111e88a5a8d0f::coin::COIN>',
    '0x2::coin::Coin<0xd399b358bd0e835000f6caa8c771a7d186499b6e62d413c2fd6cfed709689f28::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xd399b358bd0e835000f6caa8c771a7d186499b6e62d413c2fd6cfed709689f28::coin::COIN>',
    '0x2::coin::Coin<0x5029d5a94429a73b8036cd67192d9c5e09bbc2c0fee942d50075a9edba66744f::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x5029d5a94429a73b8036cd67192d9c5e09bbc2c0fee942d50075a9edba66744f::coin::COIN>',
    '0x2::coin::Coin<0x4eac6573f65e7db5aea5a23e1335993a57e088dcd4aff7934059d9a6311d8655::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x4eac6573f65e7db5aea5a23e1335993a57e088dcd4aff7934059d9a6311d8655::coin::COIN>',
    '0x2::coin::Coin<0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5::coin::COIN>',
    '0x2::coin::Coin<0xdbe380b13a6d0f5cdedd58de8f04625263f113b3f9db32b3e1983f49e2841676::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xdbe380b13a6d0f5cdedd58de8f04625263f113b3f9db32b3e1983f49e2841676::coin::COIN>',
    '0x2::coin::Coin<0x1e8b532cca6569cab9f9b9ebc73f8c13885012ade714729aa3b450e0339ac766::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x1e8b532cca6569cab9f9b9ebc73f8c13885012ade714729aa3b450e0339ac766::coin::COIN>',
    '0x2::coin::Coin<0x5cc7b6ed0ce0d43d08667793f6efe7a34d678a780755dc37ea8bfa8805f63327::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x5cc7b6ed0ce0d43d08667793f6efe7a34d678a780755dc37ea8bfa8805f63327::coin::COIN>',
    '0x2::coin::Coin<0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba::coin::COIN>',
    '0x2::coin::Coin<0x6081300950a4f1e2081580e919c210436a1bed49080502834950d31ee55a2396::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x6081300950a4f1e2081580e919c210436a1bed49080502834950d31ee55a2396::coin::COIN>',
    '0x2::coin::Coin<0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN>',
    '0x2::coin::Coin<0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN>',
    '0x2::coin::Coin<0xbcbbd5c23edf35fc279e21ebc129a1187dbfa5b086c63a8e7ff202865888b27b::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xbcbbd5c23edf35fc279e21ebc129a1187dbfa5b086c63a8e7ff202865888b27b::coin::COIN>',
    '0x2::coin::Coin<0x603b488c87e0d1df64560a61418c87238d440a29ee39bbd757b0c92d38a35c7c::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x603b488c87e0d1df64560a61418c87238d440a29ee39bbd757b0c92d38a35c7c::coin::COIN>',
  },
  '0x2::coin::Coin<0xb848cce11ef3a8f62eccea6eb5b35a12c4c2b1ee1af7755d02d7bd6218e8226f::coin::COIN>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xb848cce11ef3a8f62eccea6eb5b35a12c4c2b1ee1af7755d02d7bd6218e8226f::coin::COIN>',
    },
  '0x2::coin::Coin<0xa198f3be41cda8c07b3bf3fee02263526e535d682499806979a111e88a5a8d0f::coin::COIN>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xa198f3be41cda8c07b3bf3fee02263526e535d682499806979a111e88a5a8d0f::coin::COIN>',
    },
  '0x2::coin::Coin<0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN>':
    {
      '0x2::coin::Coin<0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Stable, 0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN, 0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN>',
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN>',
    },
  '0x2::coin::Coin<0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN>':
    {
      '0x2::coin::Coin<0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Stable, 0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN, 0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN>',
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN>',
    },
  '0x2::coin::Coin<0xd399b358bd0e835000f6caa8c771a7d186499b6e62d413c2fd6cfed709689f28::coin::COIN>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xd399b358bd0e835000f6caa8c771a7d186499b6e62d413c2fd6cfed709689f28::coin::COIN>',
    },
  '0x2::coin::Coin<0x5029d5a94429a73b8036cd67192d9c5e09bbc2c0fee942d50075a9edba66744f::coin::COIN>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x5029d5a94429a73b8036cd67192d9c5e09bbc2c0fee942d50075a9edba66744f::coin::COIN>',
    },
  '0x2::coin::Coin<0x4eac6573f65e7db5aea5a23e1335993a57e088dcd4aff7934059d9a6311d8655::coin::COIN>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x4eac6573f65e7db5aea5a23e1335993a57e088dcd4aff7934059d9a6311d8655::coin::COIN>',
    },
  '0x2::coin::Coin<0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5::coin::COIN>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5::coin::COIN>',
    },
  '0x2::coin::Coin<0xdbe380b13a6d0f5cdedd58de8f04625263f113b3f9db32b3e1983f49e2841676::coin::COIN>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xdbe380b13a6d0f5cdedd58de8f04625263f113b3f9db32b3e1983f49e2841676::coin::COIN>',
    },
  '0x2::coin::Coin<0x603b488c87e0d1df64560a61418c87238d440a29ee39bbd757b0c92d38a35c7c::coin::COIN>':
    {
      '0x2::coin::Coin<0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba::coin::COIN>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Stable, 0x603b488c87e0d1df64560a61418c87238d440a29ee39bbd757b0c92d38a35c7c::coin::COIN, 0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba::coin::COIN>',
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x603b488c87e0d1df64560a61418c87238d440a29ee39bbd757b0c92d38a35c7c::coin::COIN>',
    },
  '0x2::coin::Coin<0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba::coin::COIN>':
    {
      '0x2::coin::Coin<0x603b488c87e0d1df64560a61418c87238d440a29ee39bbd757b0c92d38a35c7c::coin::COIN>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Stable, 0x603b488c87e0d1df64560a61418c87238d440a29ee39bbd757b0c92d38a35c7c::coin::COIN, 0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba::coin::COIN>',
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba::coin::COIN>',
    },
  '0x2::coin::Coin<0x1e8b532cca6569cab9f9b9ebc73f8c13885012ade714729aa3b450e0339ac766::coin::COIN>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x1e8b532cca6569cab9f9b9ebc73f8c13885012ade714729aa3b450e0339ac766::coin::COIN>',
    },
  '0x2::coin::Coin<0x5cc7b6ed0ce0d43d08667793f6efe7a34d678a780755dc37ea8bfa8805f63327::coin::COIN>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x5cc7b6ed0ce0d43d08667793f6efe7a34d678a780755dc37ea8bfa8805f63327::coin::COIN>',
    },
  '0x2::coin::Coin<0x6081300950a4f1e2081580e919c210436a1bed49080502834950d31ee55a2396::coin::COIN>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x6081300950a4f1e2081580e919c210436a1bed49080502834950d31ee55a2396::coin::COIN>',
    },
  '0x2::coin::Coin<0xbcbbd5c23edf35fc279e21ebc129a1187dbfa5b086c63a8e7ff202865888b27b::coin::COIN>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xbcbbd5c23edf35fc279e21ebc129a1187dbfa5b086c63a8e7ff202865888b27b::coin::COIN>',
    },
};

export const POOLS = {
  [Network.TESTNET]: DEV_NET_POOLS,
  [Network.DEVNET]: TEST_NET_POOLS,
  [Network.MAINNET]: MAIN_NET_POOLS,
};
