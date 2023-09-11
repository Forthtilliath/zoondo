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

    type Card = {
      slug: string
      name: string
      type: string
      corners: Array<number | '*'>
      value: number
      moves: Array
    }
  }
}
export {}
