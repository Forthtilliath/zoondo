import clsx from 'clsx'
import { useBoardStore } from '@/utils/hooks/useBoardStore'
import Card from './Card'

import styles from '@/styles/components/Square.module.scss'

type Props = {
  card: Game.CardWithPosition | undefined
}

export default function Square({ card }: Props) {
  const setCardFocus = useBoardStore((state) => state.setCardFocus)
  const hHover = () => {
    if (!card || !card.isOwned) return
    setCardFocus(card)
  }
  const hLeave = () => {
    setCardFocus(null)
  }

  const cssClasses = clsx(styles.wrapper, card ? styles.occupied : styles.empty)
  return (
    <div className={cssClasses} onMouseEnter={hHover} onMouseLeave={hLeave}>
      {card && <Card {...card} />}
    </div>
  )
}
