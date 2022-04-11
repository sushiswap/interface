// import { FactoryQuery } from '../.graphclient'

interface BentoBox {
  bentoBox: {
    bentoBox: {
      tokens: [
        {
          id: string
          rebase: {
            id: string
            elastic: string
          }
        },
      ]
    }
  }
}

export default function Analytics(props: BentoBox) {
  console.log(props.bentoBox.bentoBox)
  const { tokens } = props.bentoBox.bentoBox

  return (
    <div className="px-2 pt-16">
      <h1 className="py-4 text-2xl font-bold">Overview</h1>
      <div className="grid grid-cols-2 gap-2">
        {tokens.map( token => (
        <div key={token.id}>{token.id} {' - '} {token.rebase.elastic}</div>
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
