import Image from 'next/image'
import { Layout } from '../components'

const SakePage = () => {
  return (
    <Layout currentPage="sake">
      {/* Overflow for absolute circular graphics */}
      <div className="overflow-x-hidden">
        <div
          className="relative w-full z-10 aspect-w-3 aspect-h-2"
          style={{
            backgroundImage: `url('/images/sake-12.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        {/* <div className="max-w-xl lg:max-w-2xl mx-auto pb-10 md:pb-16">
          <div className="relative flex w-full mx-auto justify-center -mt-96 md:-mt-100">
            <div className="bg-golden rounded-full w-100 h-100 md:w-110 md:h-110"></div>
          </div>
        </div> */}
        <div className="max-w-4xl mx-auto  pt-10 md:pt-16">
          <div className="px-10 lg:px-0 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-18 pb-20">
            <div className="brand-font text-white text-lg flex flex-col space-y-4 pr-0">
              <p>
                SAKΞ is an extremely rare style of sake: Junmai Daiginjo Muroka Nama Genshu Kimoto Shizuku
                (純米大吟醸無濾過生原酒生酛雫).
              </p>
              <p>
                "Junmai Daiginjo" (純米大吟醸) sake requires extraordinary attention to detail, with constant monitoring
                of temperature, fermentation and enzymatic activity for far longer than a typical sake. To achieve this
                level of quality, every grain of rice used in SAKΞ is polished to at least half of its original size.
                This extremely labor-intensive process requires stringent quality controls and a costly production
                process to produce very limited quantities. The result is concentrated yet nuanced, with a complex and
                highly fragrant style. SAKΞ's unique aroma and taste are not easily achieved
              </p>
            </div>
            <div className="text-white text-lg flex flex-col space-y-4">
              <p>
                SAKΞは大変珍しい種類の日本酒で、純米大吟醸無濾過生原酒生酛雫（じゅんまいだいぎんじょうむろかなまげんしゅきもとしずく）と種別されます。
              </p>
              <p>
                純米大吟醸は他の日本酒に比べ、徹底した温度管理、発酵・酵素作用の工程など、はるかに多くの工程を要します。SAKΞに使われる酒米は、基準を満たす品質を守るため、最低でも通常の米粒の半分のサイズまで精米されます。この過酷な製造過程、厳しい徹底された品質管理、決して安くはない製造工程のため、限定数のみの出荷となっています。仕上がりは濃厚かつ絶妙で、とても香り高く複雑な味わいです。SAKΞのユニークな香りと味わいは、この厳選された製造過程だからこそ生み出されるものです。
              </p>
            </div>
          </div>
          <div className="z-10 relative">
            <Image src="/images/sake-nature.jpg" width={'930px'} height={'621px'} />
          </div>
          <div className="relative">
            <div
              className="hidden md:block absolute bg-golden rounded-full"
              style={{ width: '680px', height: '680px', right: '-47%', top: '-18rem' }}
            />
            <div
              className="block md:hidden absolute bg-golden rounded-full"
              style={{ width: '400px', height: '400px', right: '-20%', top: '-10rem' }}
            />
          </div>
          <div className="z-10 relative px-10 lg:px-0 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-18 py-20">
            <div className="brand-font text-white text-lg flex flex-col space-y-4 ">
              <p>
                "Muroka Nama Genshu" (無濾過生原酒) sake is unfiltered, unpasteurized, and undiluted. By preserving the
                natural flavors and aromas throughout the brewing process, SAKΞ maintains its natural coloring and high
                alcohol count. The resulting taste is one without compromise: notes of raw walnut, marzipan and a
                refreshing bitter note on the back end of the palate.
              </p>
              <p>
                The traditional "Kimoto" (生酛) brewing method adds multiple weeks to the brewing process to give SAKΞ a
                bright, creamy texture with limestone undertones and a gentle-yet-refreshing, slightly salty finish.
              </p>
              <p>
                Bottled as "Shizuku" (雫), this painstaking method allows only free-run sake to drip into the tank via
                gravity. Because no pressure is applied, SAKΞ's most delicate and elegant characteristics are preserved
                in the bottle.
              </p>
              <p>
                Once complete, SAKΞ is stored in a specialized tank that maintains a perfect -5ºc to prevent spoilage.
                These exceptional conditions ensure that every time SAKΞ is bottled, the prized liquid maximizes its
                freshness and natural qualities.
              </p>
            </div>
            <div className="text-white text-lg flex flex-col space-y-4">
              <p>
                無濾過生原酒とは無濾過、無低温殺菌、無希釈で仕上げられた日本酒です。醸造過程を通して自然な風味と香りをキープすることで、ナチュラルな色合いと高いアルコール度数を実現しています。生のくるみ、マルチパンやなどの爽やかなほろ苦い風味が広がり、仕上がりは作り手の妥協を許さないものとなっています。
              </p>
              <p>
                生酛（きもと）という週数間を要する製造方法を加えることで、微かな、クリアでクリーミーな舌触りと優しく爽やかな少し塩気のあるフィニッシュです。
              </p>
              <p>
                “雫”（しずく）という瓶詰め作業、この骨の折れる作業は、宙力によってのみ日本酒を瓶詰めするということを可能にしています。外部からの圧力がかからないため、繊細でエレガントな品質がそのまま瓶の中に保存されています。
              </p>
              <p>
                全ての工程を経て完成すると、品質劣化を防ぐため、SAKΞは–5℃に徹底管理された特別なタンクに保管されます。このような通常とは異なる製造環境が、SAKΞの新鮮さ・自然な高品質を可能にしています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SakePage
