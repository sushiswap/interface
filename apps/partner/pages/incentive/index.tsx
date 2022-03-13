import MetaMaskCard from 'app/components/connectors/MetaMaskCard'
import IncentiveCreationForm from 'app/features/Staking/IncentiveCreationForm'
import CreateIncentiveForm from 'app/features/Staking/IncentiveCreationForm'
import IncentiveLayout, { IncentiveBody } from 'layouts/Incentive'
import NoSSR from 'react-no-ssr'

export default function Incentive() {
  return (
    <>
      <NoSSR>
        {/* <MetaMaskCard /> */}
      </NoSSR>
      <IncentiveBody>
      <IncentiveCreationForm/>
      </IncentiveBody>
    </>
  )
}

Incentive.Layout = IncentiveLayout