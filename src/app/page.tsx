import Board from '@/components/Board'
import CardSample from '@/components/CardSample'
import Square from '@/components/Square'
import styles from '@/styles/layouts/PageGame.module.scss'

export default function Home() {
  let board: Array<Game.Square> = []
  let cards: Array<Game.Card & { x: number; y: number; isOwned: boolean }> = []

  const sampleCard: Game.Card = {
    slug: 'cloboulon',
    name: 'ValhallaCode',
    corners: [3, 3, '*', 1],
    type: 'elite',
    value: 10,
    moves: [],
  }

  const card1 = { ...sampleCard, x: 0, y: 4, isOwned: true }
  const card2 = { ...sampleCard, x: 3, y: 2, isOwned: false }
  const card3 = { ...sampleCard, x: 5, y: 1, isOwned: false }
  const card4 = { ...sampleCard, x: 2, y: 2, isOwned: true }
  cards.push(card1, card2, card3, card4)

  for (let x = 0; x < 6; x++) {
    for (let y = 0; y < 6; y++) {
      board.push({ x, y })
    }
  }

  return (
    <div className={styles.wrapper}>
      <Board>
        {board.map((sq) => {
          const foundCard = cards.find((candidate) => {
            return candidate.x === sq.x && candidate.y === sq.y
          })

          if (foundCard)
            return (
              <Square
                key={`${sq.x};${sq.y}`}
                card={foundCard}
                isOwned={foundCard.isOwned}
              />
            )

          return <Square key={`${sq.x};${sq.y}`} />
        })}
      </Board>
      <CardSample {...sampleCard} />
    </div>
  )
}
