import { Layout } from '../components'

const TokenPage = () => {
  return (
    <Layout currentPage="token">
      <div className="pb-20">
        <div
          className="hidden sm:block relative w-full aspect-w-5 aspect-h-2"
          style={{
            backgroundImage: `url('/images/miso-bowls.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="brand-font px-10 lg:px-0 pt-14 md:pt-36 flex flex-col space-y-4  max-w-4xl mx-auto text-xl text-white">
            <p>May 20th, 2021</p>
            <p>888 bottles of SAKE</p>
            <p>
              Only Available for{' '}
              <a
                className="underline text-pinkish cursor-pointer"
                href="https://miso.sushi.com/auctions/0x5cFEb913fe8aE7e5E63E5930F044f36Ba4B882aB"
                target="_blank"
                rel="noopener noreferrer"
              >
                Purchase on MISO
              </a>
            </p>
          </div>
        </div>
        <div
          className="block sm:hidden relative w-full aspect-w-2 aspect-h-2"
          style={{
            backgroundImage: `url('/images/miso-bowls.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="brand-font px-10 lg:px-0 pt-14 md:pt-36 flex flex-col space-y-4  max-w-4xl mx-auto text-xl text-white">
            <p>May 20th, 2021</p>
            <p>888 bottles of SAKE</p>
            <p>
              Only Available for <a className="underline text-pinkish cursor-pointer">Purchase on MISO</a>
            </p>
          </div>
        </div>
        <div className="px-10 md:max-w-lg mx-auto pb-10 md:pb-16">
          <div className="relative w-full pt-10">
            <div className="px-6 md:px-8 py-4 bg-white">
              <div className="brand-font text-black text-center text-sm md:text-xl">WORLD’S FIRST TOKENIZED SAKE</div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="px-10 lg:px-0 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-28">
            <div className="brand-font text-white text-base md:text-lg text-justify flex flex-col space-y-4">
              <p>SAKΞ is available for purchase on MISO launchpad on May 20th, 2021 via a 7-day auction.</p>
              <p>Ownership of SAKΞ is dictated by the SAK3 token.</p>
              <p>
                To receive a bottle of SAKΞ, you must own at least 1 of 888 SAK3 tokens. You can purchase SAK3 tokens on
                MISO using $SUSHI. You can hold a fraction of a token, give it as a gift, or redeem a complete token to
                have a fresh bottle of SAKΞ shipped directly to you.
              </p>
              <p>
                Only 200 SAK3 tokens will initially be made available on Ethereum, with additional blockchains to
                follow. $SUSHI and SAK3 tokens can be traded on Sushi.com Exchange once the auction is completed.
              </p>
            </div>
            <div className="text-white text-base md:text-lg flex flex-col space-y-4">
              <p>SAKΞは2021年5月20日より、MISO媒体上で7日間のオークションにかけられます。</p>
              <p>SAKΞを購入するためには、SAK3トークンを入手する必要があります。</p>
              <p>
                SAKΞを購入するには、SAK3トークンを少なくとも1つ所有している必要があります。そのトークンは、$SUSHIを使ってMISO媒体上で購入できます。トークンを部分的に所有することや、ギフトとしてプレゼントすること、もしくは必要分のトークンと交換してSAKΞをご自宅にオーダーすることもいいアイディアかもしれません。
              </p>
              <p>
                Ethereum上では、初期段階では200トークンのみの取引予定ですが、後に追加で販売になる予定です。オークションが終了次第、Sushi
                Swap Exchange 上で$SUSHIとSAK3トークンが取引可能になります。
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TokenPage
