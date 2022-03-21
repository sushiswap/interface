import { getBalance } from 'app/lib'
import fetch from 'isomorphic-unfetch'
import type { NextApiRequest, NextApiResponse } from 'next'
import { SafeInfo } from 'types'
import { ChainId, safes } from '../../../constants'
import redis from '../../../lib/redis'

export default async function getBalances(req: NextApiRequest, res: NextApiResponse) {
  if (!(await redis.exists('balances'))) {
    const filteredSafes = Object.entries(safes).filter(([, safe]) => safe.chainId !== ChainId.HARMONY)

    for (const [key, value] of filteredSafes) {
      await redis.hset('balances', key, JSON.stringify(await getBalance(value.chainId.toString(), value.address)))
      await new Promise((resolve) => setTimeout(resolve, 7500))
      console.log(`added balance for address: ${key}`)
    }
    //TODO: setup another endpoint for updating hvals, run from cronjob
  // await redis.expire('balances', 10)
  }
  const results = await redis.hvals('balances')
  const json = results.map((result) => JSON.parse(result))
  res.status(200).json(json)
}
