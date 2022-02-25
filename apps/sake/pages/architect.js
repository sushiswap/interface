import Image from 'next/image'

import { Layout } from '../components'

const ArchitectPage = () => {
  return (
    <Layout currentPage="architect">
      {/* override background */}
      <div className="bg-white pt-10">
        <div
          className="relative w-full z-10 min-h-screen"
          style={{
            backgroundImage: `url('/images/sake-big-bottle.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div className="max-w-4xl mx-auto py-10">
          <div className="w-full mx-auto text-center pb-10">
            <div className="brand-font inline-block text-white text-2xl px-6 md:px-8 py-4  bg-black">BIG DK</div>
          </div>
          <div className="px-10 lg:px-0 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-28 py-10">
            <div className="brand-font text-black text-lg flex flex-col space-y-4">
              <p>For SAKΞ, Bjarke Ingels Group's (BIG) designed both a bottle and a work of art.</p>
              <p>
                A world-renowned group of designers, inventors, and architects, BIG's award-winning work can be seen
                throughout Europe, America, Asia and the Middle East.
              </p>
            </div>
            <div className="text-black text-lg flex flex-col space-y-4">
              <p>ボトルのパッケージのデザインは、ビャーケ・インゲルスグループ（B I G）が手がけています。</p>
              <p>
                世界的に有名なデザイナー・発明家・建築家グループであるB I
                Gグループの手がける作品は、ヨーロッパ、アメリカ、アジア、中東のあらゆる地域に渡り、高い評価を受けています。
              </p>
            </div>
          </div>
        </div>
        <div className="z-10 relative max-w-4xl mx-auto">
          <Image src="/images/sake-architect-2.jpg" width={'937px'} height={'525px'} />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="px-10 lg:px-0 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-28 py-10">
            <div className="brand-font text-black text-lg flex flex-col space-y-4">
              <p>
                BIG's SAKΞ bottle fuses the historic art of sake brewing with strong contemporary design. A tactile
                horizontal pattern pays homage to the traditional Japanese wave and rice field terraces. The cork
                carries a fabric label inspired by Japanese head scarfs and dress traditions.
              </p>
            </div>
            <div className="text-black text-lg flex flex-col space-y-4">
              <p>
                BIGグループの手がけるSAKΞのパッケージデザインは、現代アートの大きな要素と同時に、伝統的な酒の醸造方法にヒントを得ています。触知できる水平の模様は、伝統的な日本の水田と波を現し、敬意を込めたものになっています。コルクのデザインには、日本の手ぬぐいや昔ながらの着物などの日本ならではの衣服のデザインにヒントを得た模様を配しています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ArchitectPage
