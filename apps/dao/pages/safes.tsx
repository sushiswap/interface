import { AddressEx, SafeBalanceResponse } from '@gnosis.pm/safe-react-gateway-sdk'
import { FC, useMemo } from 'react'
import { useTable } from 'react-table'
import useSWR from 'swr'
import { ChainId, users } from '../constants'
import { SafeInfo } from '../entities/safe'
import { getBalances, getSafes } from '../lib/safemanager'

interface SafesProps {
  safes: SafeInfo[]
  balances: SafeBalanceResponse[]
}

const getUsers = (owners: AddressEx[]) => {
  return owners
    .map((owner) => users.get(owner.value) ?? owner.value)
    .sort()
    .join(' ')
}

const getTotalBalance = (balances: SafeBalanceResponse[]): string => {
  return '$' + balances.reduce((sum, current) => sum + parseInt(current.fiatTotal), 0)
}

const Safes: FC<SafesProps> = ({ safes, balances }) => {
  const { data, error } = useSWR('safes', getSafes, { fallbackData: safes })
  useSWR('balances', getBalances, { fallbackData: balances })

  const columns = useMemo(
    () => [
      {
        Header: 'Network',
        accessor: 'chainId',
        Cell: (props) => {
          return ChainId[props.cell.value]
        },
      },
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        Header: 'Address',
        accessor: 'address',
        Cell: (props) => {
          return props.value.value
        },
      },
      {
        Header: 'Threshold',
        accessor: 'threshold',
      },
      {
        Header: 'Owners',
        accessor: 'owners',
        Cell: (props) => {
          return props.cell.value
            .map((owner) => users.get(owner.value) ?? owner.value)
            .sort()
            .join(' ')
        },
      },
    ],
    [],
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data })

  return (
    <>
      <h1>Safes</h1>
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
      {/* {safes.map((safe, i) => (
        <div key={`${safe.chainId}-${safe.address}-${i}`}>
          {ChainId[safe.chainId]} {safe.address.value} {safe.threshold} {getUsers(safe.owners)}
        </div>
      ))}

      {balances.map((balance, i) => (
        <div key={`${balance.fiatTotal}-${i}`}>{balance.fiatTotal}</div>
      ))}

      <h2>Balance</h2>
      {getTotalBalance(balances)} */}
    </>
  )
}

export default Safes

export const getStaticProps = async () => {
  const safes = await getSafes()
  // const balances = await getBalances()

  return {
    props: {
      safes,
      // balances,
    },
    revalidate: 60, // 60s
  }
}
