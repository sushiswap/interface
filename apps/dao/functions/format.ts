
import { getAddress } from '@ethersproject/address'
import Numeral from 'numeral'

export const formatK = (value: string) => {
    return Numeral(value).format('0.[00]a')
  }
  
  // shorten the checksummed version of the input address to have 0x + 4 characters at start and end
  export function shortenAddress(address: string, chars = 4): string {
    try {
      const parsed = getAddress(address)
      return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`
    } catch (error) {
      throw Error(`Invalid 'address' parameter '${address}'.`)
    }
  }


export const formatNumber = (number: any, usd = false, scale = true, decimals = 0) => {
    if (isNaN(number) || number === '' || number === undefined) {
      return usd ? '$0.00' : '0'
    }
    const num = parseFloat(number)
  
    if (num > 500000000 && scale) {
      return (usd ? '$' : '') + formatK(num.toFixed(decimals))
    }
  
    if (num === 0) {
      if (usd) {
        return '$0.00'
      }
      return '0'
    }
  
    if (num < 0.0001 && num > 0) {
      return usd ? '< $0.0001' : '< 0.0001'
    }
  
    if (num > 1000 || num < -1000) {
      return (
        (num > 1000 ? '' : '-') +
        (usd ? '$' : '') +
        Number(parseFloat(String(Math.abs(num))).toFixed(decimals)).toLocaleString()
      )
    }
  
    if (usd) {
      if (num < 0.1) {
        return '$' + Number(parseFloat(String(num)).toFixed(4))
      } else {
        const usdString = priceFormatter.format(num)
        return '$' + usdString.slice(1, usdString.length)
      }
    }
  
    return parseFloat(String(num)).toPrecision(4)
  }


// using a currency library here in case we want to add more in future
const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  })