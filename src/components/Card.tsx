import clsx from 'clsx'
import styles from '@/styles/components/Card.module.scss'
import back from '@/assets/card-back-board.png'
import backAdv from '@/assets/card-back-board-alt.png'
import Image from 'next/image'

type Props = Game.Card & { isOwned?: boolean }
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
      <Image src={isOwned ? back : backAdv} alt="Cloboulon" />
      <p>{name}</p>
    </div>
  )
}
