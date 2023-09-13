// 'use client'
import clsx from 'clsx'
import styles from '@/styles/components/Board.module.scss'
import { ReactNode } from 'react'

type Props = { children?: ReactNode }
export default function Board({ children }: Props) {
  const cssClasses = clsx(styles.wrapper)

  return <div className={cssClasses}>{children}</div>
}
