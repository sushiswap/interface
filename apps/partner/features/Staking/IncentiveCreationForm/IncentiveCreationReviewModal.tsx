// import { parseUnits } from '@ethersproject/units'
// import { t } from '@lingui/macro'
// import { useLingui } from '@lingui/react'
// import { CurrencyAmount, JSBI } from '@sushiswap/core-sdk'
// import LoadingCircle from 'app/animation/loading-circle.json'
// // import HeadlessUIModal from 'app/components/Modal/HeadlessUIModal'
// import Typography from 'app/components/Typography'
// // import IncentiveCreationSubmittedModalContent from 'app/features/Staking/IncentiveCreationForm/IncentiveCreationSubmittedModalContent'
// import { IncentiveCreationFormInputFormatted as IncentiveCreationFormInputFormatted } from 'app/features/Staking/CreateIncentiveForm/'
// // import useAuctionCreate from 'app/features/miso/context/hooks/useAuctionCreate'
// // import useAuctionTemplateMap from 'app/features/miso/context/hooks/useAuctionTemplateMap'
// import { AuctionTemplate } from 'app/features/miso/context/types'
// import { getExplorerLink, shortenString } from 'app/functions'
// import { useActiveWeb3React } from 'app/services/web3'
// import Lottie from 'lottie-react'
// import React, { FC, useCallback, useEffect, useState } from 'react'

// interface IncentiveCreationModalProps {
//   open: boolean
//   onDismiss(): void
//   data?: IncentiveCreationFormInputFormatted
// }

// const IncentiveCreationModal: FC<IncentiveCreationModalProps> = ({ open, onDismiss: _onDismiss, data }) => {
//   const { chainId } = useActiveWeb3React()
//   const { i18n } = useLingui()
//   const [txHash, setTxHash] = useState<string>()
//   const [pending, setPending] = useState<boolean>(false)
//   const [incentiveId, setIncentiveId] = useState<string>()
//   const [error, setError] = useState<string>()
//   // const { templateIdToLabel } = useAuctionTemplateMap()
//   // const { init, subscribe, unsubscribe } = useAuctionCreate()

//   const reset = useCallback(() => {
//     if (!pending) {
//       setIncentiveId(undefined)
//       setTxHash(undefined)
//       setError(undefined)
//     }
//   }, [pending])

//   const onDismiss = useCallback(() => {
//     reset()
//     _onDismiss()
//   }, [_onDismiss, reset])

//   const execute = useCallback(
//     async (data: IncentiveCreationFormInputFormatted) => {
//       if (!data) return

//       setPending(true)

//       try {
//         const tx = await init(data)

//         if (tx?.hash) {
//           setTxHash(tx.hash)
//           await tx.wait()
//         }
//       } catch (e) {
//         // @ts-ignore TYPE NEEDS FIXING
//         setError(e.error?.message)
//       } finally {
//         setPending(false)
//       }
//     },
//     [init]
//   )

//   // Subscribe to creation event to get created token ID
//   useEffect(() => {
//     // @ts-ignore TYPE NEEDS FIXING
//     subscribe('IncentiveCreated', (owner, address, marketTemplate, { transactionHash }) => {
//       if (transactionHash?.toLowerCase() === txHash?.toLowerCase()) {
//         setIncentiveId(address)
//       }
//     })

//     return () => {
//       unsubscribe('IncentiveCreated', () => console.log('unsubscribed'))
//     }
//   }, [subscribe, txHash, unsubscribe])

//   if (!data) return <></>

//   const paymentCurrencyLink = !data.paymentCurrency.isNative ? (
//     <a
//       className="text-xs font-normal text-purple"
//       target="_blank"
//       rel="noreferrer"
//       href={data.paymentCurrency ? getExplorerLink(chainId, data.paymentCurrency.wrapped.address, 'address') : ''}
//     >
//       {data.paymentCurrency.symbol}
//     </a>
//   ) : (
//     data.paymentCurrency.symbol
//   )

//   return (
//     // <HeadlessUIModal.Controlled isOpen={open} onDismiss={onDismiss} afterLeave={() => setTxHash(undefined)}>
//     //   {!txHash ? (
//     //     <HeadlessUIModal.Body className="lg:max-w-lg lg:min-w-lg">
//     //       <HeadlessUIModal.Header
//     //         onClose={onDismiss}
//     //         header={i18n._(t`Create Auction`)}
//     //         subheader={i18n._(t`Please review your entered details thoroughly.`)}
//     //       />
//     //       <HeadlessUIModal.Content>
//     //         <div className="grid items-center grid-cols-2">
//     //           <Typography variant="sm" className="py-2 border-b text-secondary border-dark-700">
//     //             {i18n._(t`Auction Type`)}
//     //           </Typography>
//     //           <Typography weight={700} variant="sm" className="py-2 border-b text-high-emphesis border-dark-700">
//     //             {templateIdToLabel(data.auctionType)}
//     //           </Typography>
//     //           {data.pointListAddress && (
//     //             <>
//     //               <Typography variant="sm" className="py-2 border-b text-secondary border-dark-700">
//     //                 {i18n._(t`Permission list`)}
//     //               </Typography>
//     //               <Typography weight={700} variant="sm" className="py-2 border-b text-purple border-dark-700">
//     //                 <a
//     //                   target="_blank"
//     //                   rel="noreferrer"
//     //                   href={getExplorerLink(chainId, data.pointListAddress, 'address')}
//     //                 >
//     //                   {shortenString(data.pointListAddress, 12)}
//     //                 </a>
//     //               </Typography>
//     //             </>
//     //           )}
//     //           <Typography variant="sm" className="py-2 border-b text-secondary border-dark-700">
//     //             {i18n._(t`Token Amount`)}
//     //           </Typography>
//     //           <Typography
//     //             weight={700}
//     //             variant="sm"
//     //             className="flex items-end gap-1.5 text-high-emphesis py-2 border-b border-dark-700"
//     //           >
//     //             {data.tokenAmount.toSignificant(6)}{' '}
//     //             <a
//     //               className="text-xs font-normal text-purple"
//     //               target="_blank"
//     //               rel="noreferrer"
//     //               href={getExplorerLink(chainId, data.tokenAmount.currency.address, 'address')}
//     //             >
//     //               {data.tokenAmount.currency.symbol}
//     //             </a>
//     //           </Typography>

//     //           {data.auctionType === AuctionTemplate.DUTCH_AUCTION && (
//     //             <>
//     //               <Typography variant="sm" className="py-2 border-b text-secondary border-dark-700">
//     //                 {i18n._(t`Starting Price`)}
//     //               </Typography>
//     //               <Typography
//     //                 weight={700}
//     //                 variant="sm"
//     //                 className="flex items-end gap-1.5 text-high-emphesis py-2 border-b border-dark-700"
//     //               >
//     //                 {data.startPrice
//     //                   ?.quote(
//     //                     CurrencyAmount.fromRawAmount(
//     //                       data.auctionToken,
//     //                       JSBI.BigInt(parseUnits('1', data.auctionToken.decimals))
//     //                     )
//     //                   )
//     //                   .toSignificant(6)}{' '}
//     //                 {paymentCurrencyLink}
//     //               </Typography>
//     //               <Typography variant="sm" className="py-2 border-b text-secondary border-dark-700">
//     //                 {i18n._(t`Ending Price`)}
//     //               </Typography>
//     //               <Typography
//     //                 weight={700}
//     //                 variant="sm"
//     //                 className="flex items-end gap-1.5 text-high-emphesis py-2 border-b border-dark-700"
//     //               >
//     //                 {data.endPrice
//     //                   ?.quote(
//     //                     CurrencyAmount.fromRawAmount(
//     //                       data.auctionToken,
//     //                       JSBI.BigInt(parseUnits('1', data.auctionToken.decimals))
//     //                     )
//     //                   )
//     //                   .toSignificant(6)}{' '}
//     //                 {paymentCurrencyLink}
//     //               </Typography>
//     //             </>
//     //           )}
//     //           {data.auctionType === AuctionTemplate.BATCH_AUCTION && (
//     //             <>
//     //               <Typography variant="sm" className="py-2 border-b text-secondary border-dark-700">
//     //                 {i18n._(t`Minimum Raised`)}
//     //               </Typography>
//     //               <Typography
//     //                 weight={700}
//     //                 variant="sm"
//     //                 className="flex items-end gap-1.5 text-high-emphesis py-2 border-b border-dark-700"
//     //               >
//     //                 {data.minimumRaised?.toSignificant(6)} {paymentCurrencyLink}
//     //               </Typography>
//     //             </>
//     //           )}
//     //           {data.auctionType === AuctionTemplate.CROWDSALE && (
//     //             <>
//     //               <Typography variant="sm" className="py-2 border-b text-secondary border-dark-700">
//     //                 {i18n._(t`Fixed Price`)}
//     //               </Typography>
//     //               <Typography
//     //                 weight={700}
//     //                 variant="sm"
//     //                 className="flex items-end gap-1.5 text-high-emphesis py-2 border-b border-dark-700"
//     //               >
//     //                 {data.fixedPrice
//     //                   ?.quote(
//     //                     CurrencyAmount.fromRawAmount(
//     //                       data.auctionToken,
//     //                       JSBI.BigInt(parseUnits('1', data.auctionToken.decimals))
//     //                     )
//     //                   )
//     //                   .toSignificant(6)}{' '}
//     //                 {paymentCurrencyLink}
//     //               </Typography>
//     //             </>
//     //           )}
//     //           <Typography variant="sm" className="py-2 border-b text-secondary border-dark-700">
//     //             {i18n._(t`Start Date`)}
//     //           </Typography>
//     //           <Typography weight={700} variant="sm" className="py-2 border-b text-high-emphesis border-dark-700">
//     //             {data.startDate.toLocaleString('en-uS', {
//     //               year: 'numeric',
//     //               month: 'long',
//     //               day: 'numeric',
//     //               hour: 'numeric',
//     //               minute: 'numeric',
//     //               timeZone: 'UTC',
//     //             })}{' '}
//     //             UTC
//     //           </Typography>
//     //           <Typography variant="sm" className="py-2 border-b text-secondary border-dark-700">
//     //             {i18n._(t`End Date`)}
//     //           </Typography>
//     //           <Typography weight={700} variant="sm" className="py-2 border-b text-high-emphesis border-dark-700">
//     //             {data.endDate.toLocaleString('en-uS', {
//     //               year: 'numeric',
//     //               month: 'long',
//     //               day: 'numeric',
//     //               hour: 'numeric',
//     //               minute: 'numeric',
//     //               timeZone: 'UTC',
//     //             })}{' '}
//     //             UTC
//     //           </Typography>
//     //         </div>
//     //       </HeadlessUIModal.Content>
//     //       <HeadlessUIModal.Actions>
//     //         <HeadlessUIModal.Action onClick={onDismiss}>{i18n._(t`Cancel`)}</HeadlessUIModal.Action>
//     //         <HeadlessUIModal.Action
//     //           main={true}
//     //           {...(pending && {
//     //             startIcon: (
//     //               <div className="w-4 h-4 mr-1">
//     //                 <Lottie animationData={LoadingCircle} autoplay loop />
//     //               </div>
//     //             ),
//     //           })}
//     //           disabled={pending}
//     //           onClick={() => execute(data)}
//     //         >
//     //           {i18n._(t`Create Auction`)}
//     //         </HeadlessUIModal.Action>
//     //       </HeadlessUIModal.Actions>
//     //       <HeadlessUIModal.Error>{error}</HeadlessUIModal.Error>
//     //     </HeadlessUIModal.Body>
//     //   ) : (
//     //     <AuctionCreationSubmittedModalContent txHash={txHash} auctionAddress={incentiveId} onDismiss={onDismiss} />
//     //   )}
//     // </HeadlessUIModal.Controlled>
//   )
// }

// export default IncentiveCreationModal
