import { FC, useMemo } from 'react'
import { useTable } from 'react-table'
import useSWR from 'swr'
import { ChainId, users } from '../constants'
import { SafeInfo } from '../entities/safe'
import { formatNumber, shortenAddress } from '../functions/format'
import { getSafes } from '../lib/safemanager'

const getTotalBalance = (safes: SafeInfo[]): string => {
  const sum = safes
    .filter((safe) => safe.balance !== 'NA')
    .reduce((sum, safe) => {
      return sum + parseInt(safe.balance)
    }, 0)
  return formatNumber(sum, true, false)
}

interface SafesProps {
  safes: SafeInfo[]
}
const Safes: FC<SafesProps> = ({ safes }) => {
  const { data, error } = useSWR('safes', getSafes, { fallbackData: safes })

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
          return shortenAddress(props.value.value)
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
      {
        Header: 'Balance',
        accessor: 'balance',
        Cell: (props) => {
          return props.cell.value != 'NA' ? formatNumber(props.cell.value, true) : 'NA'
        },
      },
    ],
    [],
  )
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data })

  if (error) {
    return <>error</>
  }

  if (!data) {
    return <>loading</>
  }
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

      <h2>Total balance</h2>
      {getTotalBalance(safes)}
    </>
  )
}

export default Safes

export const getStaticProps = async () => {
  console.log('fetching')
  const safes = await getSafes()
  return {
    props: {
      safes,
    },
    revalidate: 60, // 60s
  }
}
