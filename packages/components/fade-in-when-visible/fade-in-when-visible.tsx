import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

export const FadeInWhenVisible = ({ children }: FadeInWhenVisibleProps) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.3193 })

  useEffect(() => {
    if (inView) controls.start('visible')
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial='hidden'
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 }
      }}
    >
      {children}
    </motion.div>
  )
}
