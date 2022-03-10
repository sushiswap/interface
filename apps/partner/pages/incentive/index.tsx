// import { useWeb3React } from '@web3-react/core'
import { DefaultRootState, useSelector } from 'react-redux'


export default function Incentive() {
  // const { account, activate, library, chainId } = useWeb3React()
  // const stakingContract = useStakingContract()
  // const tokenLists = useSelector( (state: DefaultRootState) => state.tokens.value)

  return (
    <div>
      
      {/* <h1>Create Incentive</h1>
      <div className="flex flex-col gap-3">
          <SwapAssetPanel
            spendFromWallet={true}
            header={(props) => (
              <SwapAssetPanel.Header
                {...props}
                label={
                  independentField === Field.OUTPUT && !showWrap ? i18n._(t`Swap from (est.):`) : i18n._(t`Swap from:`)
                }
              />
            )}
            currency={currencies[Field.INPUT]}
            value={formattedAmounts[Field.INPUT]}
            onChange={handleTypeInput}
            onSelect={handleInputSelect}
          />
          <div className="z-0 flex justify-center -mt-6 -mb-6">
            <div
              role="button"
              className="p-1.5 rounded-full bg-dark-800 border shadow-md border-dark-700 hover:border-dark-600"
              onClick={() => {
                setApprovalSubmitted(false) // reset 2 step UI for approvals
                onSwitchTokens()
              }}
            >
              <ArrowDownIcon width={14} className="text-high-emphesis hover:text-white" />
            </div>
          </div>
          <SwapAssetPanel
            spendFromWallet={true}
            header={(props) => (
              <SwapAssetPanel.Header
                {...props}
                label={independentField === Field.INPUT && !showWrap ? i18n._(t`Swap to (est.):`) : i18n._(t`Swap to:`)}
              />
            )}
            currency={currencies[Field.OUTPUT]}
            value={formattedAmounts[Field.OUTPUT]}
            onChange={handleTypeOutput}
            onSelect={handleOutputSelect}
            priceImpact={priceImpact}
            priceImpactCss={priceImpactCss}
          /> */}
    </div>
  )
}
