import { formatUnits } from '@ethersproject/units'
import { formatNumber, formatUSD, shortenAddress } from 'format'
import { useRouter } from 'next/router'
import { FC, useEffect, useMemo, useState } from 'react'
import { useTable } from 'react-table'
import useSWR from 'swr'
import { ChainId, EXPECTED_OWNER_COUNT, EXPECTED_THRESHOLD, safes, users } from '../../../constants'
import { getBalance, getSafe } from '../../../lib/safe'
import { SafeBalance, SafeInfo } from '../../../types'

interface SafesProps {
  safe: SafeInfo
  balance: SafeBalance
}

const isValidThreshold = (threshold: number, ownerCount: number): boolean => {
  return threshold === EXPECTED_THRESHOLD && ownerCount === EXPECTED_OWNER_COUNT
}

const Safe: FC<SafesProps> = (props) => {
  const router = useRouter()
  const chainId = router.query.chainId as string
  const address = router.query.address as string
  const { data: safe } = useSWR('safe', () => getSafe(chainId, address), { fallbackData: props.safe })
  const { data: balance } = useSWR('balance', () => getBalance(chainId, address), {
    fallbackData: props.balance,
  })
  const [formattedBalance, setFormattedBalance] = useState([])

  useEffect(() => {
    setFormattedBalance(
      balance?.items.filter((token) => parseFloat(token.balance) > 0 && parseFloat(token.fiatBalance) > 0) ?? [],
    )
  }, [balance])

  const columns = useMemo(
    () => [
      {
        Header: 'Token',
        accessor: 'tokenInfo.name',
      },
      {
        Header: 'Address',
        accessor: 'tokenInfo.address',
        Cell: (props) => {
          return shortenAddress(props.value)
        },
      },
      {
        Header: 'Amount',
        accessor: 'balance',
        Cell: (props) => {
          return formatNumber(formatUnits(props.value, props.cell.row.original.tokenInfo.decimals))
        },
      },
      {
        Header: 'Total (USD)',
        accessor: 'fiatBalance',
        Cell: (props) => {
          return formatUSD(props.value)
        },
      },
    ],
    [],
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: formattedBalance,
  })

  return (
    <>
      <h1>Safe Info</h1>
      <h2>{`${ChainId[safe.chainId]}`}</h2>
      <div>Type: {safe.type}</div>
      <div>Address: {safe.address?.value}</div>
      <div>
        Threshold:
        {isValidThreshold(safe.threshold, safe.owners.length) ? (
          `${safe.threshold} / ${safe.owners.length}`
        ) : (
          <div style={{ color: 'red' }}>
            {safe.threshold} / {safe.owners.length}
          </div>
        )}
      </div>
      <div>
        Owners:{' '}
        {safe.owners
          .map((owner) => users.get(owner.value) ?? <p style={{ color: 'red' }}>{owner.value}</p>)
          .sort()
          .join(' ')}
      </div>
      <div>Total balance: {formatUSD(balance?.fiatTotal)}</div>

      <h2>Tokens</h2>
      <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={`thr-${i}`}>
              {headerGroup.headers.map((column, i) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: 'solid 3px red',
                    background: 'aliceblue',
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                  key={`th-${i}`}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} key={`row-${i}`}>
                {row.cells.map((cell, i) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '10px',
                        border: 'solid 1px gray',
                        background: 'papayawhip',
                      }}
                      key={`cell-${i}`}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Safe

export async function getStaticPaths() {
  return {
    paths: safes.map((safe) => ({
      params: { chainId: safe.chainId.toString(), address: safe.address },
    })),
    fallback: true,
  }
}

export const getStaticProps = async ({ params }) => {
  const [safe, balance] = await Promise.all([
    getSafe(params.chainId, params.address),
    getBalance(params.chainId, params.address),
  ])
  return {
    props: {
      safe,
      balance,
    },
    revalidate: 60, // 60s
  }
}
