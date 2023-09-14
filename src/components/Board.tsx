import type { PropsWithChildren } from 'react'

import styles from '@/styles/components/Board.module.scss'

type Props = PropsWithChildren
export default function Board({ children }: Props) {
  return <div className={styles.wrapper}>{children}</div>
}
