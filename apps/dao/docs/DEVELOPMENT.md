# Development

## Install

Install

```sh
pnpm i
```

Setup .env _(see .example.env)_

Install redis

```sh
docker pull redis # https://hub.docker.com/_/redis
docker run --name dao-redis -p 6379:6379 -d redis  redis-server --save 60 1 --loglevel warning
```

Run

```sh
pnpm exec turbo run dev --scope=dao
```

There are two endpoints that updates redis:  
`dao/api/safes/update` and `dao/api/balances/update`  
In production, cronjobs will hit these endpoints, but for a dev environment, we only need to fetch the data once!

Fetch safe information by clicking the following url: [http://localhost:3000/dao/api/safes/update](http://localhost:3000/dao/api/safes/update)

The response should be 200 after a few minutes with a message similarly to this:

```sh
Updated info on 14 of 14 safes.
```

Do the same thing for balances [http://localhost:3000/dao/api/balances/update](http://localhost:3000/dao/api/balances/update)

Should return

```sh
Updated balance for 13 of 13 safes.
```

## Redis

### Useful commands

Flush redis

```sh
redis-cli
FLUSHDB
```
