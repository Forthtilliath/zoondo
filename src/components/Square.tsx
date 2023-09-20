import clsx from 'clsx'
import Card from './Card'

import styles from '@/styles/components/Square.module.scss'

type Props = {
  card: Game.CardWithPosition | undefined
}

export default function Square({ card }: Props) {
  const cssClasses = clsx(styles.wrapper, card ? styles.occupied : styles.empty)

  return <div className={cssClasses}>{card && <Card {...card} />}</div>
}
