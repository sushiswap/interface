import { getBalance } from 'app/lib'
import type { NextApiRequest, NextApiResponse } from 'next'
import { ChainId, safes } from '../../../../constants'
import redis from '../../../../lib/redis'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const filteredSafes = Object.entries(safes).filter(([, safe]) => safe.chainId !== ChainId.HARMONY)
  let successfulUpdates = 0
  for (const [address, safe] of filteredSafes) {
    try {
      const balance = await getBalance(safe.chainId.toString(), safe.address)
      await redis.hset('balances', address, JSON.stringify(balance))
      await new Promise((resolve) => setTimeout(resolve, 5000))
      successfulUpdates += 1
    } catch (e) {
      console.warn(`Balance for ${address} could not be updated, ${e}`)
    }
  }
  res.status(200).send(`Updated balance for ${successfulUpdates} of ${filteredSafes.length} safes.`)
}
