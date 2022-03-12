import MetaMaskCard from 'app/components/connectors/MetaMaskCard'
import CreateIncentiveForm from 'app/features/Staking/CreateIncentiveForm'
import NoSSR from 'react-no-ssr'

export default function Incentive() {
  return (
    <>
      <NoSSR>
        <MetaMaskCard />
      </NoSSR>
      <CreateIncentiveForm/>
    </>
  )
}
