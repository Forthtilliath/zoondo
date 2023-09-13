import Board from '@/components/Board'
import Square from '@/components/Square'

export default function Home() {
  let board: Array<Game.Square> = []
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      const square = {
        x: i,
        y: j,
      }
      board.push(square)
    }
  }

  let sampleCard: Game.Card = {
    slug: 'valhallacode',
    name: 'ValhallaCode',
    corners: [3, 3, '*', 1],
    type: 'emblem',
    value: 10,
    moves: [],
  }

  return (
    <>
      <Board>
        {board.map((sq) => {
          if (sq.x < 2)
            return <Square key={`${sq.x};${sq.y}`} card={sampleCard} />
          if (sq.x > 3)
            return <Square key={`${sq.x};${sq.y}`} card={sampleCard} isOwned />

          return <Square key={`${sq.x};${sq.y}`} />
        })}
      </Board>
    </>
  )
}
