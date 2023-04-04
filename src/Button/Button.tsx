import React, { MouseEventHandler, ReactNode } from 'react'
import styles from './Button.module.css'

type Props = {
  children: ReactNode,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  disabled?: boolean
}

const Button = ({ children, onClick, disabled }: Props) => {
  return (
    <button onClick={onClick} className={styles.button} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button