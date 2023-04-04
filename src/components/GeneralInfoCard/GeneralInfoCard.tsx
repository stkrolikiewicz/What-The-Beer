import React, { useState } from 'react'
import styles from './GeneralInfoCard.module.css'
import { Beer } from '@/models'
import Button from '@/Button/Button'
import Link from 'next/link'
import Image from 'next/image'
import Loader from '../Loader/Loader'
import loader from 'public/beerLoader.jpg'

type Props = {
  item: Beer
}

const GeneralInfoCard = ({ item }: Props) => {
  const [loading, setLoading] = useState(true)
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {loading && <Loader gridItem />}
        <Image src={item.image_url || loader} alt={item.name} width={200} height={250} className={styles.image} onLoadingComplete={() => setLoading(false)} />
      </div>
      <div className={styles.info}>
        <h4 className={styles.name}>{item.name}</h4>
        <p className={styles.tagline}>{item.tagline}</p>
        <Link href={`/details/${item.id}`}><Button>Details</Button></Link>
      </div>
    </div>
  )
}

export default GeneralInfoCard