export const sampleCard: Game.Card = {
  slug: 'cloboulon',
  name: 'ValhallaCode',
  corners: [3, 3, 1, '*'],
  type: 'elite',
  value: 10,
  moves: [
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ],
}

export const cards: Array<Game.CardWithPosition> = [
  { ...sampleCard, x: 0, y: 4, isOwned: false },
  { ...sampleCard, x: 3, y: 2, isOwned: true },
  { ...sampleCard, x: 5, y: 1, isOwned: true },
  { ...sampleCard, x: 2, y: 2, isOwned: false },
]
