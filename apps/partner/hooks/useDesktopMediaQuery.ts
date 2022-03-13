import getConfig from 'next/config'
import { useMediaQuery } from 'react-responsive'
// FIXME:
// const { publicRuntimeConfig } = getConfig()

const useDesktopMediaQuery = () => {
  // const { breakpoints } = publicRuntimeConfig
  // return useMediaQuery({ query: `(min-width: ${breakpoints.lg}` })
  return useMediaQuery({ query: `(min-width: 1080px)` })
}

export const useTouchDeviceMediaQuery = () => {
  return useMediaQuery({ query: `(hover: none) and (pointer: coarse)` })
}

export default useDesktopMediaQuery
