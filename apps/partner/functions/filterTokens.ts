import { Token } from "currency"
import { useMemo } from "react"

export function useSortedTokensByQuery(tokens: Token[] | undefined, searchQuery: string): Token[] {
    return useMemo(() => {
      if (!tokens) {
        return []
      }
  
      const symbolMatch = searchQuery
        .toLowerCase()
        .split(/\s+/)
        .filter((s) => s.length > 0)
  
      if (symbolMatch.length > 1) {
        return tokens
      }
  
      const exactMatches: Token[] = []
      const symbolSubtrings: Token[] = []
      const rest: Token[] = []
  
      // sort tokens by exact match -> subtring on symbol match -> rest
      tokens.map((token) => {
        if (token.symbol?.toLowerCase() === symbolMatch[0]) {
          return exactMatches.push(token)
        } else if (token.symbol?.toLowerCase().startsWith(searchQuery.toLowerCase().trim())) {
          return symbolSubtrings.push(token)
        } else {
          return rest.push(token)
        }
      })
  
      return [...exactMatches, ...symbolSubtrings, ...rest]
    }, [tokens, searchQuery])
  }
  