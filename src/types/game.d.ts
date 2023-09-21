declare global {
  namespace Game {
    type Board = {
      squares: Array<Square>
    }

    type Square = Position & {
      card?: Card
    }

    type Corner = number | '*'
    type Move = [X: number, Y: number]
    type Type =
      | 'chief'
      | 'priest'
      | 'monster'
      | 'elite'
      | 'soldier'
      | 'emblem'
      | 'asset' // ???
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

    type CardPlayed = Card & {
      isOwned: boolean
    }

    type CardWithPosition = CardPlayed & Position
  }
}
export {}
