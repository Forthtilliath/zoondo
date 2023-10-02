import type { PropsWithChildren } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import styles from '@/styles/components/Board.module.scss'

type Props = PropsWithChildren
export default function Board({ children }: Props) {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.wrapper}>{children}</div>
    </DndProvider>
  )
}
