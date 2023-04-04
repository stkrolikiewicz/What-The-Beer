import React, { PropsWithChildren } from 'react'
import styles from './Main.module.css'

const Main = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default Main