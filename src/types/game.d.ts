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
    type Move = [X: number, Y: number][]
    type Type =
      | 'Chief'
      | 'Priest'
      | 'Monster'
      | 'Elite'
      | 'Soldier'
      | 'Emblem'
      | 'Asset' // ???
    // Hero ???

    type Card = {
      slug: string
      name: string
      type: Type
      corners: [NW: Corner, NE: Corner, SE: Corner, SW: Corner]
      value: number
      moves: Array<Move>
      variants?: {
        corners?: Card['corners']
        moves?: Card['moves']
      }
    }
  }
}
export {}
