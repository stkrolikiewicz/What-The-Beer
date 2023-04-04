import GridList from '@/components/GridList/GridList'
import GridListItem from '@/components/GridListElement/GridListItem'
import { Beer } from '@/models'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

interface Props {
  items: Beer[] | null
}

const Main = ({ items }: Props) => {
  return (
    <GridList>
      {items?.map((item) => (
        <GridListItem item={item} key={item.id} />
      ))}
    </GridList>
  )
}

export default Main