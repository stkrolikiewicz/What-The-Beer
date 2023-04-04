import React from "react"
import styles from "./Loader.module.css"
import clsx from "clsx"

type Props = {
  gridItem?: boolean
}

const Loader = ({ gridItem }: Props) => {
  return (
    <div className={clsx(styles.container, !gridItem && 'h-[var(--error-h)]')}>
      <div className={`${styles.dot} animate-ping`}></div>
      <div className={`${styles.dot} animate-ping animation-delay-300`}></div>
      <div className={`${styles.dot} animate-ping animation-delay-600`}></div>
    </div>
  )
}

export default Loader