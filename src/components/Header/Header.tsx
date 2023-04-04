import React from 'react'
import styles from './Header.module.css'
import Link from 'next/link'
import Button from '@/Button/Button'
import { ArrowLeftIcon, HomeIcon } from '@heroicons/react/24/solid'

type Props = {
  home?: boolean
}

const Header = ({ home }: Props) => {
  return (
    <div className={styles.container}>
      {home
        ? <h2 className={styles.title}>Beers</h2>
        : (
          <div className={styles.backToHome}>
            <Link href="/"><Button><HomeIcon className='h-6' /></Button></Link>
          </div>
        )}
    </div>
  )
}

export default Header