import clsx from 'clsx'
import styles from '@/styles/components/CardSample.module.scss'
import Image from 'next/image'
import * as utils from '@/utils'

type Props = Game.Card

export default function CardSample({
  slug,
  name,
  type,
  corners,
  value,
  moves,
}: Props) {
  let squares = utils.generatePositions(-2, 2)

  console.log(utils.movesToTransitions(moves))

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles['cor-tl']}>{corners[0]}</div>
        <div className={styles['cor-tr']}>{corners[1]}</div>
        <div className={styles['cor-br']}>{corners[2]}</div>
        <div className={styles['cor-bl']}>{corners[3]}</div>
        <div className={styles.moves}>
          {squares.map((sq) => {
            const cssClasses = clsx(styles.square, {
              [styles.origin]: sq.x === 0 && sq.y === 0,
              [styles.move]: moves
                .flat()
                .some(
                  ([x, y]) => x === sq.x && y === sq.y && (x !== 0 || y !== 0)
                ),
            })
            return <div key={`${sq.x}-${sq.y}`} className={cssClasses} />
          })}
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {utils.movesToTransitions(moves).map(([src, dst]) => (
              <line
                key={`${src.x}-${src.y}-${dst.x}-${dst.y}-`}
                x1={src.x + 50}
                y1={src.y + 50}
                x2={dst.x + 50}
                y2={dst.y + 50}
                stroke="black"
                strokeWidth="2"
              />
            ))}
          </svg>
        </div>
        <div className={styles.type}>
          <Image
            src={`/assets/types/${type}.png`}
            alt={type}
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className={styles.value}>{value}</div>
        <div className={styles.picture}>
          <Image src={`/assets/tribes/${slug}.png`} alt={slug} fill />
        </div>
        <div className={styles.name}>{name}</div>
      </div>
    </div>
  )
}
