import Image from 'next/image'

import { Layout, YoutubeEmbed } from '../components'

const WelcomePage = () => {
  return (
    <Layout currentPage="welcome">
      <div className="pb-20">
        <div className="p-0 lg:p-20">
          {/* <div
            className="relative w-full aspect-w-2 aspect-h-1"
            style={{
              backgroundImage: `url('/images/sake-box.jpg')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div> */}
          <YoutubeEmbed embedId={'IUb6K1AMUvA'} />
        </div>
        <div className="hidden md:block">
          <div className="flex justify-center py-10 lg:pt-4 lg:pb-20">
            <Image src="/images/three-stripes.png" width={'156px'} height={'156px'} />
          </div>
        </div>
        <div className="block md:hidden">
          <div className="flex justify-center py-10 lg:pt-4 lg:pb-20">
            <Image src="/images/three-stripes.png" width={'80px'} height={'80px'} />
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="px-10 lg:px-0 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-28">
            <div className="brand-font text-white text-base md:text-lg text-justify flex flex-col space-y-4">
              <p>
                SAKΞ is the first of its kind: a tokenized sake bridging tradition and technology with quality design.
              </p>
              <p>
                The pinnacle of the brewers' craft and technological innovation, every bottle of SAKΞ is a work of art.
                With the highest attention to the details of production, from planting rice seeds to hand-bottling to
                order, SAKΞ is curated by Sake Samurai Elliot Faber and produced by Kitanishi Shuzo, makers of Bunraku,
                with a bottle designed by BIG Architects and featuring the art of Jonathan Jay Lee.
              </p>
              <p>Only 888 bottles of SAKΞ will ever be made.</p>
              <p>Bidding opens on May 20th, 2021. The rice seeds for SAKΞ will be planted one week later.</p>
            </div>
            <div className="text-white text-base md:text-lg flex flex-col space-y-4">
              <p>
                今までに類を見ない全く新しいもの、SAKΞ：トークン化された日本酒の掛橋となる伝統、高度なデザインと技術
              </p>
              <p>
                酒蔵の技能と科学技術の革新の頂点、SAKΞの一本一本は芸術作品です。可能な限りグレードの高い日本酒をフィーチャーし、SAKΞはジョナサン・ジェイ・リー氏の作品とフィーチャリングしてBIGグループがボトルのデザインを手がけ、文楽の製造元である北西酒蔵のプロデュースのもと、酒サムライのエリオット・フェイバーによって精選されます。
              </p>
              <p>888本のみの限定製造です。</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default WelcomePage
