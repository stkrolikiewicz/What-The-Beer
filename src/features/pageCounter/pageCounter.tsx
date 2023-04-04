import React from 'react'
import type { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './pageCounterSlice'
import Button from '@/Button/Button'
import clsx from 'clsx'
import styles from './pageCounter.module.css'
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid'

export const perPage = 12

const PageCounter = () => {
  const pageIndex = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const lastPage = Math.ceil(325 / perPage)

  return (
    <div className={styles.container}>
      <div className={clsx(pageIndex == 1 && 'opacity-0')}>
        <Button onClick={() => dispatch(decrement())} disabled={pageIndex == 1}><ArrowLongLeftIcon className='h-6' /></Button>
      </div>
      <span className={styles.pageIndex}>{pageIndex}</span>
      <div className={clsx(pageIndex == lastPage && 'opacity-0')}>
        <Button onClick={() => dispatch(increment())} disabled={pageIndex == lastPage}><ArrowLongRightIcon className='h-6' /></Button>
      </div>
    </div>
  )
}
export default PageCounter