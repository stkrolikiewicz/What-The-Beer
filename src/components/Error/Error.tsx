import React, { PropsWithChildren } from 'react'
import styles from './Error.module.css'

const Error = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.container}>
      <h1>{children}</h1>
    </div>
  )
}

export default Error