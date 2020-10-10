import { useEffect, useState } from 'react'

/**
 * Returns true if scroll value is met
 * @param {number} scrollValue Scroll value the handler should check for
 * @return {boolean}
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
