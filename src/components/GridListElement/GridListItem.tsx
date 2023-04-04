import React from 'react'
import styles from './GridListItem.module.css'
import { Beer } from '@/models'
import Link from 'next/link'
import Button from '@/Button/Button'
import GeneralInfoCard from '../GeneralInfoCard/GeneralInfoCard'

type Props = {
  item: Beer
}

const GridListItem = ({ item }: Props) => {
  return (
    <div className={styles.container}>
      <GeneralInfoCard item={item} />
    </div>
  )
}

export default GridListItem