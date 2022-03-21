import { getSafe } from 'app/lib'
import type { NextApiRequest, NextApiResponse } from 'next'
import { safes } from '../../../constants'
import redis from '../../../lib/redis'

export default async function getSafes(req: NextApiRequest, res: NextApiResponse) {
  if (!(await redis.exists('safes'))) {
    for (const [key, value] of Object.entries(safes)) {
      await redis.hset('safes', key, JSON.stringify(await getSafe(value.chainId.toString(), value.address)))
      await new Promise((resolve) => setTimeout(resolve, 7500))
      console.log(`added ${key}`)
    }
    //TODO: setup another endpoint for updating hvals, run from cronjob
    // await redis.expire('safes', 10)
  }
  const results = await redis.hvals('safes')
  const json = results.map((result) => JSON.parse(result))
  res.status(200).json(json)
}
