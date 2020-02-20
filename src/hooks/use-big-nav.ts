import { useEffect, useState } from 'react'

export const useBigNav = () => {
  const [isBigNav, setIsBigNav] = useState<boolean>(true)

  const scroller = () => {
    window.scrollY > 80 ? setIsBigNav(false) : setIsBigNav(true)
  }

  useEffect(() => {
    window.addEventListener('scroll', scroller)
    return () => window.removeEventListener('scroll', scroller)
  }, [window.scrollY])

  return isBigNav
}
