import Board from '@/components/Board'
import CardSample from '@/components/CardSample'
import Square from '@/components/Square'
import * as utils from '@/utils'
import { cardsOnBoard, availableCards } from '@/utils/data/cards'

import styles from '@/styles/layouts/PageGame.module.scss'

let board: Array<Game.Square> = utils.generatePositions(0, 5)

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Board>
        {board.map((sq) => {
          const foundCard = cardsOnBoard.find((candidate) => {
            return candidate.x === sq.x && candidate.y === sq.y
          })

          return <Square key={`${sq.x};${sq.y}`} card={foundCard} />
        })}
      </Board>
      <CardSample {...availableCards['grognard:0']} />
    </div>
  )
}
