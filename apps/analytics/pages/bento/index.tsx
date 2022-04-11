// import { FactoryQuery } from '../.graphclient'

import { BigNumber } from 'ethers'
import { formatNumber } from 'format'

interface BentoBox {
  bentoBox: {
    bentoBox: {
      tokens: Token[]
    }
    bundle: {
      ethPrice: string
    }
  }
}
interface Token {
  id: string
  symbol: string
  rebase: {
    elastic: string
  }
  derivedETH: string
}

function toTVL(token: Token, ethPrice: string): string {
  let derivedETH = parseFloat(token.derivedETH)
  derivedETH = derivedETH != 0 ? derivedETH : 1
  return formatNumber(parseFloat(token.rebase.elastic) * derivedETH * parseFloat(ethPrice)) 
}

export default function Analytics(props: BentoBox) {
  const { bentoBox, bundle } = props.bentoBox

  return (
    <div className="px-2 pt-16">
      <h1 className="py-4 text-2xl font-bold">Overview</h1>
      <div className="grid grid-cols-2 gap-2">
        {bentoBox.tokens.map((token) => (
          <div key={token.id}>
            {token.symbol} {' - '} {toTVL(token, bundle.ethPrice)}
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const { getBuiltGraphSDK } = await import('../../.graphclient')
  const sdk = await getBuiltGraphSDK()
  const bentoBox = await sdk.BentoBox()
  return {
    props: {
      bentoBox,
    },
  }
}
