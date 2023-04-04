import React, { useState } from 'react'
import styles from './DetailedInfoCard.module.css'
import { Beer } from '@/models'
import Button from '@/Button/Button'
import Link from 'next/link'
import Image from 'next/image'
import Loader from '../Loader/Loader'
import loader from 'public/beerLoader.jpg'

type Props = {
  item: Beer
}

const DetailedInfoCard = ({ item }: Props) => {
  const [loading, setLoading] = useState(true)
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {loading && <Loader />}
        <Image src={item.image_url || loader} alt={item.name} width={200} height={250} className={styles.image} onLoadingComplete={() => setLoading(false)} />
      </div>
      <div className={styles.info}>
        <h3>{item.name}</h3>
        <h5 className={styles.tagline}>{item.tagline}</h5>
        <p className={styles.description}>{item.description}</p>
        <h4>Technical details</h4>
        <div className={styles.technicalDetails}>
          <div className={styles.detailsItem}>
            <h5 className={styles.detailsItemTitle}>ABV</h5>
            <p className={styles.detailsItemText}>{item.abv} %</p>
          </div>
          <div className={styles.detailsItem}>
            <h5 className={styles.detailsItemTitle}>IBU</h5>
            <p className={styles.detailsItemText}>{item.ibu}</p>
          </div>
          <div className={styles.detailsItem}>
            <h5 className={styles.detailsItemTitle}>Volume</h5>
            <p className={styles.detailsItemText}>{item.volume.value} {item.volume.unit}</p>
          </div>
        </div>
        <h4>Ingredients</h4>
        <div className={styles.ingredients}>
          {item.ingredients.malt.map((malt, index) => (
            <div className={styles.detailsItem} key={index}>
              <h5 className={styles.detailsItemTitle}>{malt.name}</h5>
              <p className={styles.detailsItemText}>{malt.amount.value} {malt.amount.unit}</p>
            </div>
          ))}
        </div>
        <div className={styles.otherDetails}>
          <div className={styles.detailsItem}>
            <h5 className={styles.detailsItemTitle}>Brewers Tips</h5>
            <p className={styles.detailsItemText}>{item.brewers_tips}</p>
          </div>
          <div className={styles.detailsItem}>
            <h5 className={styles.detailsItemTitle}>Contributed By</h5>
            <p className={styles.detailsItemText}>{item.contributed_by}</p>
          </div>
        </div>
        <Link href="/">
          <Button>Back</Button>
        </Link>
      </div>
    </div>
  )
}

export default DetailedInfoCard