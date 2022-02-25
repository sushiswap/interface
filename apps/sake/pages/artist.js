import dynamic from 'next/dynamic'

import { Layout } from '../components'
import { useState } from 'react'

const NFTViewer = dynamic(() => import('../components/NFTViewer'), { ssr: false })

const ArtistPage = () => {
  const [nftWidth, setNFTWidth] = useState()
  return (
    <Layout currentPage="artist">
      {/* override background */}
      <div className="bg-white">
        <div
          className="relative w-full z-10 min-h-screen"
          style={{
            backgroundImage: `url('/images/neo-tokyo.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div className="max-w-4xl mx-auto py-10">
          <div className="w-full mx-auto text-center pb-10">
            <div className="brand-font inline-block text-white text-2xl px-6 md:px-8 py-4  bg-black">
              Jonathan Jay Lee
            </div>
          </div>
          <div className="px-10 lg:px-0 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-28 py-10">
            <div className="brand-font text-black text-lg flex flex-col space-y-4">
              <p>SAKΞ features unique art from award-winning artist Jonathan Jay Lee.</p>
              <p>
                Lee's past clients include Marvel, Disney Plus, Mercedes, MINI, HSBC, Apple, and the Japan Tourism
                Board, among numerous others.
              </p>
            </div>
            <div className="text-black text-lg flex flex-col space-y-4">
              <p>SAKΞは数々の賞を受賞しているアーティスト、ジョナサン・ジェイ・リー氏とコラボレーションしています。</p>
              <p>
                リー氏のこれまで手掛けたプロジェクトは、マーベル、ディズニープラス、メルセデスベンツ、ミニ、HSBC
                銀行、アップル、日本観光局など数多くに渡ります。
              </p>
            </div>
          </div>
        </div>
        <div
          className="z-10 relative max-w-4xl mx-auto flex justify-center items-center"
          ref={(node) => {
            if (node) setNFTWidth(node.offsetWidth)
          }}
        >
          <NFTViewer size={nftWidth} />
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="px-10 lg:px-0 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-28 py-10">
            <div className="brand-font text-black text-lg flex flex-col space-y-4">
              <p>
                Playing on Bunraku brewery's evolution of bringing the centuries-long tradition of enjoying sake to a
                contemporary audience in modern Japan, his work interprets the modern izakaya set against a backdrop of
                Neo-Tokyo, showcasing that sake is for everyone—with SAKΞ bridging the gap between traditional heritage
                and what is yet to come.
              </p>
            </div>
            <div className="text-black text-lg flex flex-col space-y-4">
              <p>
                数世紀に渡って受け継がれてきた、この日本酒という文化を今日の現代日本に残していく革命的な役割を担う文楽、リー氏の作品は、日本酒はどんな人にも楽しめるものであり、SAKΞは伝統とこれからやってくるものの架け橋を担うものとして、今日の東京をバックにモダンな居酒屋を反映したものとなっています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ArtistPage
