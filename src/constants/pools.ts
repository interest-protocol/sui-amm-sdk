import { SUI_DEV_NET_CHAIN, SUI_TEST_NET_CHAIN } from './index';

const TEST_NET_POOLS = {
  '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC>':
    {
      '0x2::coin::Coin<0xa6c45683978ad7f0b403f10cbfbfb9c1c2b0803f67b964c2f540bc7ab5e87f39::kron::KRON>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC, 0xa6c45683978ad7f0b403f10cbfbfb9c1c2b0803f67b964c2f540bc7ab5e87f39::kron::KRON>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC>',
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC>',
      '0x2::coin::Coin<0xc619d9a9d705af7d9b45763c05e26cf9c597d1ae16cad9c3ee6fa4703f4ea90c::shvd::SHVD>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC, 0xc619d9a9d705af7d9b45763c05e26cf9c597d1ae16cad9c3ee6fa4703f4ea90c::shvd::SHVD>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_stable::SPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>',
    },
  '0x2::coin::Coin<0xa6c45683978ad7f0b403f10cbfbfb9c1c2b0803f67b964c2f540bc7ab5e87f39::kron::KRON>':
    {
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC, 0xa6c45683978ad7f0b403f10cbfbfb9c1c2b0803f67b964c2f540bc7ab5e87f39::kron::KRON>',
    },
  '0x2::coin::Coin<0x2::sui::SUI>': {
    '0x2::coin::Coin<0x6c0930ba77d5213fadc767cc9bd54093b098fba0285ab1cd0f4f509e33f50149::tj::TJ>':
      '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x6c0930ba77d5213fadc767cc9bd54093b098fba0285ab1cd0f4f509e33f50149::tj::TJ>',
    '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>':
      '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>',
    '0x2::coin::Coin<0xa1b5a91112e3b3925081e1292da5bede35593175cf6215cd74cfea19d8d04a3e::yusuf::YUSUF>':
      '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0xa1b5a91112e3b3925081e1292da5bede35593175cf6215cd74cfea19d8d04a3e::yusuf::YUSUF>',
    '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI>':
      '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI>',
    '0x2::coin::Coin<0x8c2db123cde82056ef3f708a4158e01623401c4a85518bd932bfd6d58d848411::dre::DRE>':
      '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x8c2db123cde82056ef3f708a4158e01623401c4a85518bd932bfd6d58d848411::dre::DRE>',
    '0x2::coin::Coin<0x16de8297a9a3b2620e627953096c998a84e9ab118c4bcc509492ef8e0e06bc87::dpad::DPAD>':
      '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x16de8297a9a3b2620e627953096c998a84e9ab118c4bcc509492ef8e0e06bc87::dpad::DPAD>',
    '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC>':
      '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC>',
    '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC>':
      '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC>',
    '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>':
      '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>',
    '0x2::coin::Coin<0xf6594cbac7aa8d87918d360d0c60ce2d351ae50b5c6d5c205ae65f768d87d66b::idn::IDN>':
      '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0xf6594cbac7aa8d87918d360d0c60ce2d351ae50b5c6d5c205ae65f768d87d66b::idn::IDN>',
    '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>':
      '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>',
    '0x2::coin::Coin<0x59ed24fe61aac2418d679697ff64d346d98d2b3e187cc821a757eb759b702835::core::CORE>':
      '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x59ed24fe61aac2418d679697ff64d346d98d2b3e187cc821a757eb759b702835::core::CORE>',
    '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB>':
      '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB>',
    '0x2::coin::Coin<0x2ce7ac118a517bcaeec6ddcebc8cfe6e4959b794a62ce037c3e5d03a99da5e6b::vv::VV>':
      '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x2ce7ac118a517bcaeec6ddcebc8cfe6e4959b794a62ce037c3e5d03a99da5e6b::vv::VV>',
  },
  '0x2::coin::Coin<0x6c0930ba77d5213fadc767cc9bd54093b098fba0285ab1cd0f4f509e33f50149::tj::TJ>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x6c0930ba77d5213fadc767cc9bd54093b098fba0285ab1cd0f4f509e33f50149::tj::TJ>',
    },
  '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>':
    {
      '0x2::coin::Coin<0xe65364c290dec9d1ef9f3dc6d9458f6d7cf889a7a8126db959eff48a1df413fa::sad::SAD>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT, 0xe65364c290dec9d1ef9f3dc6d9458f6d7cf889a7a8126db959eff48a1df413fa::sad::SAD>',
      '0x2::coin::Coin<0x29accce372097daf53a385e33a6ca50a4a660cfe96eca8d22f3d6af4e42c05c8::hui::HUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x29accce372097daf53a385e33a6ca50a4a660cfe96eca8d22f3d6af4e42c05c8::hui::HUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>',
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>',
      '0x2::coin::Coin<0x7b02eace802801c31ae710d50708239c1efebd56a2e3d8fbb9d03a4d15cf59e5::swap::LSP<0x2::sui::SU>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT, 0x7b02eace802801c31ae710d50708239c1efebd56a2e3d8fbb9d03a4d15cf59e5::swap::LSP<0x2::sui::SUI, 0x11354b097c4e0affba37574814b4f2ba439f57d1a28fc86d51d76c3bc5ad7751::wiz::WIZ>>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>',
      '0x2::coin::Coin<0x8b755982658195d34d97617a1381512e8852a4904d031a9d4948e7921cfdd11f::matic::MATIC>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT, 0x8b755982658195d34d97617a1381512e8852a4904d031a9d4948e7921cfdd11f::matic::MATIC>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_stable::SPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>',
    },
  '0x2::coin::Coin<0xe65364c290dec9d1ef9f3dc6d9458f6d7cf889a7a8126db959eff48a1df413fa::sad::SAD>':
    {
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT, 0xe65364c290dec9d1ef9f3dc6d9458f6d7cf889a7a8126db959eff48a1df413fa::sad::SAD>',
    },
  '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB>':
    {
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC>',
      '0x2::coin::Coin<0x29accce372097daf53a385e33a6ca50a4a660cfe96eca8d22f3d6af4e42c05c8::hui::HUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x29accce372097daf53a385e33a6ca50a4a660cfe96eca8d22f3d6af4e42c05c8::hui::HUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>',
      '0x2::coin::Coin<0x3f8f4858749d667b84078e97e5b104c913b22405e9587af4617b410847adedcc::sad::SAD>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB, 0x3f8f4858749d667b84078e97e5b104c913b22405e9587af4617b410847adedcc::sad::SAD>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>',
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>',
    },
  '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC>':
    {
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC>',
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI>',
      '0x2::coin::Coin<0x769b3f9db9fb4bf9f10e67a323dc5e8371b1c0bc1e044fd08714e52faa6bf2bb::usdn::USDN>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC, 0x769b3f9db9fb4bf9f10e67a323dc5e8371b1c0bc1e044fd08714e52faa6bf2bb::usdn::USDN>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>',
    },
  '0x2::coin::Coin<0x29accce372097daf53a385e33a6ca50a4a660cfe96eca8d22f3d6af4e42c05c8::hui::HUI>':
    {
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x29accce372097daf53a385e33a6ca50a4a660cfe96eca8d22f3d6af4e42c05c8::hui::HUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x29accce372097daf53a385e33a6ca50a4a660cfe96eca8d22f3d6af4e42c05c8::hui::HUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB>',
    },
  '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>':
    {
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>',
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>',
      '0x2::coin::Coin<0xec2dfd46db97acc5a36b5dc4f39a55b509284fda675dc79bea4deaceadf7816e::MOVE::MOVE>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX, 0xec2dfd46db97acc5a36b5dc4f39a55b509284fda675dc79bea4deaceadf7816e::MOVE::MOVE>',
    },
  '0x2::coin::Coin<0xa1b5a91112e3b3925081e1292da5bede35593175cf6215cd74cfea19d8d04a3e::yusuf::YUSUF>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0xa1b5a91112e3b3925081e1292da5bede35593175cf6215cd74cfea19d8d04a3e::yusuf::YUSUF>',
    },
  '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>':
    {
      '0x2::coin::Coin<0xba825380d0b8039dd161359e1c83ae26d121f75a7d052fc2fa735b130fec1d8c::sujit::SUJIT>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH, 0xba825380d0b8039dd161359e1c83ae26d121f75a7d052fc2fa735b130fec1d8c::sujit::SUJIT>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC>',
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>',
    },
  '0x2::coin::Coin<0xba825380d0b8039dd161359e1c83ae26d121f75a7d052fc2fa735b130fec1d8c::sujit::SUJIT>':
    {
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH, 0xba825380d0b8039dd161359e1c83ae26d121f75a7d052fc2fa735b130fec1d8c::sujit::SUJIT>',
    },
  '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI>':
    {
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>',
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>',
      '0x2::coin::Coin<0x59b15364970e6880b4099227fc46b4abbe5854f1fb7373460bcab6823a562d3a::hui::HUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI, 0x59b15364970e6880b4099227fc46b4abbe5854f1fb7373460bcab6823a562d3a::hui::HUI>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI>',
      '0x2::coin::Coin<0xb706c6fd114a7b3fe2b394f87da6a239fa070f220b923f0adbe36d0b53b81386::xpn::XPN>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI, 0xb706c6fd114a7b3fe2b394f87da6a239fa070f220b923f0adbe36d0b53b81386::xpn::XPN>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>',
    },
  '0x2::coin::Coin<0x8c2db123cde82056ef3f708a4158e01623401c4a85518bd932bfd6d58d848411::dre::DRE>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x8c2db123cde82056ef3f708a4158e01623401c4a85518bd932bfd6d58d848411::dre::DRE>',
    },
  '0x2::coin::Coin<0x16de8297a9a3b2620e627953096c998a84e9ab118c4bcc509492ef8e0e06bc87::dpad::DPAD>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x16de8297a9a3b2620e627953096c998a84e9ab118c4bcc509492ef8e0e06bc87::dpad::DPAD>',
    },
  '0x2::coin::Coin<0x3f8f4858749d667b84078e97e5b104c913b22405e9587af4617b410847adedcc::sad::SAD>':
    {
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB, 0x3f8f4858749d667b84078e97e5b104c913b22405e9587af4617b410847adedcc::sad::SAD>',
    },
  '0x2::coin::Coin<0xc619d9a9d705af7d9b45763c05e26cf9c597d1ae16cad9c3ee6fa4703f4ea90c::shvd::SHVD>':
    {
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC, 0xc619d9a9d705af7d9b45763c05e26cf9c597d1ae16cad9c3ee6fa4703f4ea90c::shvd::SHVD>',
    },
  '0x2::coin::Coin<0xf6594cbac7aa8d87918d360d0c60ce2d351ae50b5c6d5c205ae65f768d87d66b::idn::IDN>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0xf6594cbac7aa8d87918d360d0c60ce2d351ae50b5c6d5c205ae65f768d87d66b::idn::IDN>',
    },
  '0x2::coin::Coin<0x7b02eace802801c31ae710d50708239c1efebd56a2e3d8fbb9d03a4d15cf59e5::swap::LSP<0x2::sui::SU>':
    {
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT, 0x7b02eace802801c31ae710d50708239c1efebd56a2e3d8fbb9d03a4d15cf59e5::swap::LSP<0x2::sui::SUI, 0x11354b097c4e0affba37574814b4f2ba439f57d1a28fc86d51d76c3bc5ad7751::wiz::WIZ>>',
    },
  '0x2::coin::Coin<0x59ed24fe61aac2418d679697ff64d346d98d2b3e187cc821a757eb759b702835::core::CORE>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x59ed24fe61aac2418d679697ff64d346d98d2b3e187cc821a757eb759b702835::core::CORE>',
    },
  '0x2::coin::Coin<0xec2dfd46db97acc5a36b5dc4f39a55b509284fda675dc79bea4deaceadf7816e::MOVE::MOVE>':
    {
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX, 0xec2dfd46db97acc5a36b5dc4f39a55b509284fda675dc79bea4deaceadf7816e::MOVE::MOVE>',
    },
  '0x2::coin::Coin<0x8b755982658195d34d97617a1381512e8852a4904d031a9d4948e7921cfdd11f::matic::MATIC>':
    {
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT, 0x8b755982658195d34d97617a1381512e8852a4904d031a9d4948e7921cfdd11f::matic::MATIC>',
    },
  '0x2::coin::Coin<0x59b15364970e6880b4099227fc46b4abbe5854f1fb7373460bcab6823a562d3a::hui::HUI>':
    {
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI, 0x59b15364970e6880b4099227fc46b4abbe5854f1fb7373460bcab6823a562d3a::hui::HUI>',
    },
  '0x2::coin::Coin<0xb706c6fd114a7b3fe2b394f87da6a239fa070f220b923f0adbe36d0b53b81386::xpn::XPN>':
    {
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI, 0xb706c6fd114a7b3fe2b394f87da6a239fa070f220b923f0adbe36d0b53b81386::xpn::XPN>',
    },
  '0x2::coin::Coin<0x769b3f9db9fb4bf9f10e67a323dc5e8371b1c0bc1e044fd08714e52faa6bf2bb::usdn::USDN>':
    {
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC, 0x769b3f9db9fb4bf9f10e67a323dc5e8371b1c0bc1e044fd08714e52faa6bf2bb::usdn::USDN>',
    },
  '0x2::coin::Coin<0x2ce7ac118a517bcaeec6ddcebc8cfe6e4959b794a62ce037c3e5d03a99da5e6b::vv::VV>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x2ce7ac118a517bcaeec6ddcebc8cfe6e4959b794a62ce037c3e5d03a99da5e6b::vv::VV>',
    },
};

const DEV_NET_POOLS = {
  '0x2::coin::Coin<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::ETH>':
    {
      '0x2::coin::Coin<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::USDC>':
        '0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::dex_volatile::VPool<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::ETH, 0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::USDC>',
      '0x2::coin::Coin<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::DAI>':
        '0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::dex_volatile::VPool<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::DAI, 0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::ETH>',
      '0x2::coin::Coin<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::BNB>':
        '0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::dex_volatile::VPool<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::BNB, 0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::ETH>',
      '0x2::coin::Coin<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::ipx::IPX>':
        '0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::dex_volatile::VPool<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::ETH, 0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::ipx::IPX>',
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::dex_volatile::VPool<0x2::sui::SUI, 0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::ETH>',
      '0x2::coin::Coin<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::USDT>':
        '0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::dex_volatile::VPool<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::ETH, 0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::USDT>',
      '0x2::coin::Coin<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::BTC>':
        '0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::dex_volatile::VPool<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::BTC, 0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::ETH>',
    },
  '0x2::coin::Coin<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::USDC>':
    {
      '0x2::coin::Coin<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::ETH>':
        '0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::dex_volatile::VPool<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::ETH, 0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::USDC>',
      '0x2::coin::Coin<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::USDT>':
        '0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::dex_stable::SPool<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::USDC, 0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::USDT>',
    },
  '0x2::coin::Coin<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::DAI>':
    {
      '0x2::coin::Coin<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::ETH>':
        '0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::dex_volatile::VPool<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::DAI, 0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::ETH>',
    },
  '0x2::coin::Coin<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::BNB>':
    {
      '0x2::coin::Coin<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::ETH>':
        '0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::dex_volatile::VPool<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::BNB, 0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::ETH>',
    },
  '0x2::coin::Coin<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::ipx::IPX>':
    {
      '0x2::coin::Coin<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::ETH>':
        '0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::dex_volatile::VPool<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::ETH, 0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::ipx::IPX>',
    },
  '0x2::coin::Coin<0x2::sui::SUI>': {
    '0x2::coin::Coin<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::ETH>':
      '0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::dex_volatile::VPool<0x2::sui::SUI, 0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::ETH>',
  },
  '0x2::coin::Coin<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::USDT>':
    {
      '0x2::coin::Coin<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::ETH>':
        '0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::dex_volatile::VPool<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::ETH, 0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::USDT>',
      '0x2::coin::Coin<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::USDC>':
        '0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::dex_stable::SPool<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::USDC, 0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::USDT>',
    },
  '0x2::coin::Coin<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::BTC>':
    {
      '0x2::coin::Coin<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::ETH>':
        '0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::dex_volatile::VPool<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::BTC, 0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::ETH>',
    },
};
export const POOLS = {
  [SUI_DEV_NET_CHAIN]: DEV_NET_POOLS,
  [SUI_TEST_NET_CHAIN]: TEST_NET_POOLS,
};
