import React, { PropsWithChildren } from 'react'
import styles from './GridList.module.css'

const GridList = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default GridList