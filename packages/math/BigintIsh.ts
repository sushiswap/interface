import JSBI from "jsbi";
import { BigNumber } from "@ethersproject/bignumber";

// exports for external consumption
// export type BigintIsh = JSBI | bigint | string
type BigintIsh = JSBI | BigNumber | number | string;

export default BigintIsh;
