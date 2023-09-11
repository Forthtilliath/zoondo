// 'use client'
import clsx from 'clsx'
import styles from '@/styles/components/Square.module.scss'

interface Props {
  isOwned?: boolean
  tribe?: string
}
export default function Square({ isOwned, tribe }: Props) {
  const cssClasses = clsx(styles.wrapper, isOwned ? 'owned' : 'adversary')

  return <div className={cssClasses}>{tribe || '?'}</div>
}
