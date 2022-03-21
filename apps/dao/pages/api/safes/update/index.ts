import { getSafe } from 'app/lib'
import type { NextApiRequest, NextApiResponse } from 'next'
import { ChainId, safes } from '../../../../constants'
import redis from '../../../../lib/redis'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let successfulUpdates = 0
  for (const [address, safe] of Object.entries(safes)) {
    try {
      const balance = await getSafe(safe.chainId.toString(), safe.address)
      await redis.hset('safe', address, JSON.stringify(balance))
      await new Promise((resolve) => setTimeout(resolve, 5000))
      successfulUpdates += 1
    } catch (e) {
      console.warn(`Balance for ${address} could not be updated, ${e}`)
    }
  }
  res.status(200).send(`Updated info on ${successfulUpdates} of ${safes.length} safes.`)
}
