import { useMediaQuery } from 'react-responsive'

export const useBreakpoints = () => {
  const isDesktop = useMediaQuery({ minWidth: 1390 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1389 })
  const isNotMobile = useMediaQuery({ minWidth: 581 })
  const isMobile = useMediaQuery({ maxWidth: 580 })

  return {
    isDesktop,
    isTablet,
    isNotMobile,
    isMobile
  }
}
