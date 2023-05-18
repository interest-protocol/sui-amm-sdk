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
    '0x2::coin::Coin<0x361fcb86803eea2403007250638f3c8427249168ac77fee74b7129bdc05b2586::aifrens::AIFRENS>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x361fcb86803eea2403007250638f3c8427249168ac77fee74b7129bdc05b2586::aifrens::AIFRENS>',
    '0x2::coin::Coin<0xb848cce11ef3a8f62eccea6eb5b35a12c4c2b1ee1af7755d02d7bd6218e8226f::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xb848cce11ef3a8f62eccea6eb5b35a12c4c2b1ee1af7755d02d7bd6218e8226f::coin::COIN>',
    '0x2::coin::Coin<0xa198f3be41cda8c07b3bf3fee02263526e535d682499806979a111e88a5a8d0f::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xa198f3be41cda8c07b3bf3fee02263526e535d682499806979a111e88a5a8d0f::coin::COIN>',
    '0x2::coin::Coin<0xbde18964049a1226f6e30dd2058ac03205d3d7c6f7a3062760a70e20a4b49d1c::wojak_coin::WOJAK_COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xbde18964049a1226f6e30dd2058ac03205d3d7c6f7a3062760a70e20a4b49d1c::wojak_coin::WOJAK_COIN>',
    '0x2::coin::Coin<0xd735282698c3093adf91c59ba5fa3294112d7dd713beb4f7753eac4637bd47a1::bark::BARK>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xd735282698c3093adf91c59ba5fa3294112d7dd713beb4f7753eac4637bd47a1::bark::BARK>',
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
    '0x2::coin::Coin<0x6aa03a9dc71d89ee86827ecfe58a840f34c7b6e5ecb5f2ee00495084e18b0b33::trollface::TROLLFACE>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x6aa03a9dc71d89ee86827ecfe58a840f34c7b6e5ecb5f2ee00495084e18b0b33::trollface::TROLLFACE>',
    '0x2::coin::Coin<0xe2872bf9ede9074a333308a7b91026912aa68b83672b7d3b3f5f8dd96c44a0a2::suidoge::SUIDOGE>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xe2872bf9ede9074a333308a7b91026912aa68b83672b7d3b3f5f8dd96c44a0a2::suidoge::SUIDOGE>',
    '0x2::coin::Coin<0xb401bf55ff040aa270f3ebe48eb8e922f6ec8039de12fe87bbd8353d138e0c4f::SAPE::SAPE>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xb401bf55ff040aa270f3ebe48eb8e922f6ec8039de12fe87bbd8353d138e0c4f::SAPE::SAPE>',
    '0x2::coin::Coin<0x737ead67630854fc0775f6ff901e8a2ac9f8a6304adbce228b5db478b5f3fa6::suishib::SUISHIB>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x737ead67630854fc0775f6ff901e8a2ac9f8a6304adbce228b5db478b5f3fa6::suishib::SUISHIB>',
    '0x2::coin::Coin<0x9a399e218c15b0d1e546ebe95521ee327a30ca9b129b378cfa422aefec53f758::brcsui::BRCSUI>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x9a399e218c15b0d1e546ebe95521ee327a30ca9b129b378cfa422aefec53f758::brcsui::BRCSUI>',
    '0x2::coin::Coin<0x1e8b532cca6569cab9f9b9ebc73f8c13885012ade714729aa3b450e0339ac766::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x1e8b532cca6569cab9f9b9ebc73f8c13885012ade714729aa3b450e0339ac766::coin::COIN>',
    '0x2::coin::Coin<0x5cc7b6ed0ce0d43d08667793f6efe7a34d678a780755dc37ea8bfa8805f63327::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x5cc7b6ed0ce0d43d08667793f6efe7a34d678a780755dc37ea8bfa8805f63327::coin::COIN>',
    '0x2::coin::Coin<0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba::coin::COIN>',
    '0x2::coin::Coin<0x5752303296c20e98336c11e527c8100bf8c8f4757d6ba8d5e7dda11b0eb34afc::XGOAT::XGOAT>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x5752303296c20e98336c11e527c8100bf8c8f4757d6ba8d5e7dda11b0eb34afc::XGOAT::XGOAT>',
    '0x2::coin::Coin<0xebbf537bc3686be32fe22b498b42715641bbb209267be72236a352e0444cc5df::sui_pepe::SUI_PEPE>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xebbf537bc3686be32fe22b498b42715641bbb209267be72236a352e0444cc5df::sui_pepe::SUI_PEPE>',
    '0x2::coin::Coin<0x6081300950a4f1e2081580e919c210436a1bed49080502834950d31ee55a2396::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x6081300950a4f1e2081580e919c210436a1bed49080502834950d31ee55a2396::coin::COIN>',
    '0x2::coin::Coin<0x1a4790c0a675dac9d3b9f1b01a3514130fe26c768485e93a388df493c24ac170::suijak::SUIJAK>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x1a4790c0a675dac9d3b9f1b01a3514130fe26c768485e93a388df493c24ac170::suijak::SUIJAK>',
    '0x2::coin::Coin<0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN>',
    '0x2::coin::Coin<0x57788e291373f223be4e09e7d8bf0e05db9a11c3cc2df6b32abdab30329f2918::SUIFROG::SUIFROG>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x57788e291373f223be4e09e7d8bf0e05db9a11c3cc2df6b32abdab30329f2918::SUIFROG::SUIFROG>',
    '0x2::coin::Coin<0xad6a66848f713d04b258b121604f57e8a4d3b4a9707697cb79391c0bf6bba888::ORDI::ORDI>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xad6a66848f713d04b258b121604f57e8a4d3b4a9707697cb79391c0bf6bba888::ORDI::ORDI>',
    '0x2::coin::Coin<0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN>',
    '0x2::coin::Coin<0xb7844e289a8410e50fb3ca48d69eb9cf29e27d223ef90353fe1bd8e27ff8f3f8::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xb7844e289a8410e50fb3ca48d69eb9cf29e27d223ef90353fe1bd8e27ff8f3f8::coin::COIN>',
    '0x2::coin::Coin<0xf73024bd5f0450745f555ddd40964f2d6798afc47b5dd46c6c53e50b9186d90e::duckies::DUCKIES>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xf73024bd5f0450745f555ddd40964f2d6798afc47b5dd46c6c53e50b9186d90e::duckies::DUCKIES>',
    '0x2::coin::Coin<0xbcbbd5c23edf35fc279e21ebc129a1187dbfa5b086c63a8e7ff202865888b27b::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xbcbbd5c23edf35fc279e21ebc129a1187dbfa5b086c63a8e7ff202865888b27b::coin::COIN>',
    '0x2::coin::Coin<0x603b488c87e0d1df64560a61418c87238d440a29ee39bbd757b0c92d38a35c7c::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x603b488c87e0d1df64560a61418c87238d440a29ee39bbd757b0c92d38a35c7c::coin::COIN>',
    '0x2::coin::Coin<0x46741a35920c2c34117011bb0e8e6341d8c4427220ad8949475d4f41218558ce::suiboba::SUIBOBA>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x46741a35920c2c34117011bb0e8e6341d8c4427220ad8949475d4f41218558ce::suiboba::SUIBOBA>',
  },
  '0x2::coin::Coin<0x361fcb86803eea2403007250638f3c8427249168ac77fee74b7129bdc05b2586::aifrens::AIFRENS>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x361fcb86803eea2403007250638f3c8427249168ac77fee74b7129bdc05b2586::aifrens::AIFRENS>',
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
      '0x2::coin::Coin<0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba::coin::COIN>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Stable, 0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN, 0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba::coin::COIN>',
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
  '0x2::coin::Coin<0xbde18964049a1226f6e30dd2058ac03205d3d7c6f7a3062760a70e20a4b49d1c::wojak_coin::WOJAK_COIN>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xbde18964049a1226f6e30dd2058ac03205d3d7c6f7a3062760a70e20a4b49d1c::wojak_coin::WOJAK_COIN>',
    },
  '0x2::coin::Coin<0xd735282698c3093adf91c59ba5fa3294112d7dd713beb4f7753eac4637bd47a1::bark::BARK>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xd735282698c3093adf91c59ba5fa3294112d7dd713beb4f7753eac4637bd47a1::bark::BARK>',
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
  '0x2::coin::Coin<0x6aa03a9dc71d89ee86827ecfe58a840f34c7b6e5ecb5f2ee00495084e18b0b33::trollface::TROLLFACE>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x6aa03a9dc71d89ee86827ecfe58a840f34c7b6e5ecb5f2ee00495084e18b0b33::trollface::TROLLFACE>',
    },
  '0x2::coin::Coin<0xe2872bf9ede9074a333308a7b91026912aa68b83672b7d3b3f5f8dd96c44a0a2::suidoge::SUIDOGE>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xe2872bf9ede9074a333308a7b91026912aa68b83672b7d3b3f5f8dd96c44a0a2::suidoge::SUIDOGE>',
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
      '0x2::coin::Coin<0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Stable, 0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN, 0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba::coin::COIN>',
    },
  '0x2::coin::Coin<0xb401bf55ff040aa270f3ebe48eb8e922f6ec8039de12fe87bbd8353d138e0c4f::SAPE::SAPE>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xb401bf55ff040aa270f3ebe48eb8e922f6ec8039de12fe87bbd8353d138e0c4f::SAPE::SAPE>',
    },
  '0x2::coin::Coin<0x737ead67630854fc0775f6ff901e8a2ac9f8a6304adbce228b5db478b5f3fa6::suishib::SUISHIB>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x737ead67630854fc0775f6ff901e8a2ac9f8a6304adbce228b5db478b5f3fa6::suishib::SUISHIB>',
    },
  '0x2::coin::Coin<0x9a399e218c15b0d1e546ebe95521ee327a30ca9b129b378cfa422aefec53f758::brcsui::BRCSUI>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x9a399e218c15b0d1e546ebe95521ee327a30ca9b129b378cfa422aefec53f758::brcsui::BRCSUI>',
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
  '0x2::coin::Coin<0x5752303296c20e98336c11e527c8100bf8c8f4757d6ba8d5e7dda11b0eb34afc::XGOAT::XGOAT>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x5752303296c20e98336c11e527c8100bf8c8f4757d6ba8d5e7dda11b0eb34afc::XGOAT::XGOAT>',
    },
  '0x2::coin::Coin<0xebbf537bc3686be32fe22b498b42715641bbb209267be72236a352e0444cc5df::sui_pepe::SUI_PEPE>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xebbf537bc3686be32fe22b498b42715641bbb209267be72236a352e0444cc5df::sui_pepe::SUI_PEPE>',
    },
  '0x2::coin::Coin<0x6081300950a4f1e2081580e919c210436a1bed49080502834950d31ee55a2396::coin::COIN>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x6081300950a4f1e2081580e919c210436a1bed49080502834950d31ee55a2396::coin::COIN>',
    },
  '0x2::coin::Coin<0x1a4790c0a675dac9d3b9f1b01a3514130fe26c768485e93a388df493c24ac170::suijak::SUIJAK>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x1a4790c0a675dac9d3b9f1b01a3514130fe26c768485e93a388df493c24ac170::suijak::SUIJAK>',
    },
  '0x2::coin::Coin<0x57788e291373f223be4e09e7d8bf0e05db9a11c3cc2df6b32abdab30329f2918::SUIFROG::SUIFROG>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x57788e291373f223be4e09e7d8bf0e05db9a11c3cc2df6b32abdab30329f2918::SUIFROG::SUIFROG>',
    },
  '0x2::coin::Coin<0xad6a66848f713d04b258b121604f57e8a4d3b4a9707697cb79391c0bf6bba888::ORDI::ORDI>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xad6a66848f713d04b258b121604f57e8a4d3b4a9707697cb79391c0bf6bba888::ORDI::ORDI>',
    },
  '0x2::coin::Coin<0xb7844e289a8410e50fb3ca48d69eb9cf29e27d223ef90353fe1bd8e27ff8f3f8::coin::COIN>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xb7844e289a8410e50fb3ca48d69eb9cf29e27d223ef90353fe1bd8e27ff8f3f8::coin::COIN>',
    },
  '0x2::coin::Coin<0xf73024bd5f0450745f555ddd40964f2d6798afc47b5dd46c6c53e50b9186d90e::duckies::DUCKIES>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xf73024bd5f0450745f555ddd40964f2d6798afc47b5dd46c6c53e50b9186d90e::duckies::DUCKIES>',
    },
  '0x2::coin::Coin<0xbcbbd5c23edf35fc279e21ebc129a1187dbfa5b086c63a8e7ff202865888b27b::coin::COIN>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xbcbbd5c23edf35fc279e21ebc129a1187dbfa5b086c63a8e7ff202865888b27b::coin::COIN>',
    },
  '0x2::coin::Coin<0x46741a35920c2c34117011bb0e8e6341d8c4427220ad8949475d4f41218558ce::suiboba::SUIBOBA>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x46741a35920c2c34117011bb0e8e6341d8c4427220ad8949475d4f41218558ce::suiboba::SUIBOBA>',
    },
};

export const POOLS = {
  [Network.TESTNET]: DEV_NET_POOLS,
  [Network.DEVNET]: TEST_NET_POOLS,
  [Network.MAINNET]: MAIN_NET_POOLS,
};
