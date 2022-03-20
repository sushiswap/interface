import type { NextApiRequest, NextApiResponse } from 'next'

import redis from '../../../lib/redis'
import { safes } from '../../../constants'
import { getSafe } from 'app/lib'

export default async function getSafes(
    req: NextApiRequest,
    res: NextApiResponse
) {

    if (!await redis.exists("safes")) {
        for (const [key, value] of Object.entries(safes)) {
            await redis.hset('safes', key, JSON.stringify(await getSafe(value.chainId.toString(), value.address)))
            await new Promise(resolve => setTimeout(resolve, 7500))
            console.log(`added ${key}`)
        }
        await redis.expire('safes', 30)
    }
    
    res.status(200).json(await redis.hvals('safes'))
}