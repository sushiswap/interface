import { Contract } from "@ethersproject/contracts";
import { useWeb3React } from "@web3-react/core";
import { useMemo } from "react";
import STAKING_ABI from '../abis/Staking.json'

export const STAKING_ADDRESS = "0x1CeD9B90aa573849b42ADAC7204860823c290dAc";

export function useStakingContract() {
  const { library, account } = useWeb3React();
  return useMemo(
    () =>
      library
        ? new Contract(
            STAKING_ADDRESS,
            STAKING_ABI,
            account ? library.getSigner(account) : library
          )
        : undefined,
    [library, account]
  );
}
