import React, { ReactNode, useEffect } from 'react'
import styles from './Layout.module.css'
import Header from '../Header/Header'
import Main from '../Main/Main'
import { motion, useScroll } from "framer-motion"

interface LayoutProps {
  children: ReactNode
  home?: boolean
  error?: boolean
}

const Layout = ({ children, home, error }: LayoutProps) => {
  const { scrollYProgress, scrollY } = useScroll()

  if (scrollY.get() == 0) {
    scrollYProgress.set(0)
  }

  return (
    <motion.div className={styles.container} initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header home={home} />
      {!error && <motion.div className={styles.progressBar} style={{ scaleX: scrollYProgress }} />}
      <Main>
        {children}
      </Main>
    </motion.div>
  )
}

export default Layout