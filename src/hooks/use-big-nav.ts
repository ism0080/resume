import { useEffect, useState } from 'react'

/**
 * Returns true if scroll value is met
 * @param scrollValue Scroll value the handler should check for
 * @return true | false
 */
export const useBigNav = (scrollValue: number) => {
  const [isBigNav, setIsBigNav] = useState<boolean>(true)

  const scroller = () => {
    window.scrollY > scrollValue ? setIsBigNav(false) : setIsBigNav(true)
  }

  useEffect(() => {
    window.addEventListener('scroll', scroller)
    return () => window.removeEventListener('scroll', scroller)
  }, [window.scrollY])

  return isBigNav
}
