import Image from 'next/image'
import clsx from 'clsx'
import back from '@/assets/card-back-board.png'
import backAdv from '@/assets/card-back-board-alt.png'

import styles from '@/styles/components/Card.module.scss'

type Props = Game.CardPlayed

export default function Card({
  slug,
  name,
  type,
  corners,
  value,
  moves,
  isOwned,
}: Props) {
  const cssClasses = clsx(
    styles.wrapper,
    isOwned ? styles.isOwned : styles.adversary
  )

  return (
    <div className={cssClasses}>
      <Image src={isOwned ? back : backAdv} alt="Hidden Card" />
      <p>{name}</p>
    </div>
  )
}
