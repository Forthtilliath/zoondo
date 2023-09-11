// 'use client'
import clsx from 'clsx'
import styles from '@/styles/components/Square.module.scss'
import Card from './Card'

interface Props {
  card?: Game.Card
  isOwned?: boolean
}
export default function Square({ card, isOwned }: Props) {
  const cssClasses = clsx(styles.wrapper, card ? 'occupied' : 'empty')

  return (
    <div className={cssClasses}>
      {card && <Card {...card} isOwned={isOwned} />}
    </div>
  )
}
