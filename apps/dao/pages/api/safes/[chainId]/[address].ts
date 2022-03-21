import type { NextApiRequest, NextApiResponse } from 'next'
import redis from '../../../../lib/redis'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { address } = req.query
  if (!await redis.hexists('safes', address.toString())) {
    res.status(404).send(`No safe found for ${address.toString()}`)
  }
  const result = await redis.hget('safes', address.toString())
  const json = JSON.parse(result)
  res.status(200).json(json)
}
