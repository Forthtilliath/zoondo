declare global {
  namespace Game {
    type Board = {
      squares: Array<Square>
    }

    type Square = {
      x: number
      y: number
      card?: Card
    }

    type Corner = number | '*'
    type Move = [number, number][]

    type Card = {
      slug: string
      name: string
      type: string
      corners: [NW: Corner, NE: Corner, SE: Corner, SW: Corner]
      value: number
      moves: Array<Move>
    }
  }
}
export {}
