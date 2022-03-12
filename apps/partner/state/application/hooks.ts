import { useSelector } from "react-redux"
import { AppState } from ".."
import { hooks } from "app/components/connectors/metaMask"

export function useBlockNumber(): number | undefined {
    // const { chainId } = useActiveWeb3React()
    const chainId  = hooks.useChainId()
  
    return useSelector((state: AppState) => state.application.blockNumber[chainId ?? -1])
  }

  export function useBlockTimestamp(): number | undefined {
    // const { chainId } = useActiveWeb3React()
    const chainId  = hooks.useChainId()
  
    return useSelector((state: AppState) => state.application.blockTimestamp[chainId ?? -1])
  }