import { create } from 'zustand'
import { availableCards } from '../data/cards'

interface BoardState {
  cardFocus: Game.Card | null
  cardsOnBoard: Game.CardWithPosition[]
  setCardFocus: (card: Game.Card | null) => void
}
export const useBoardStore = create<BoardState>()((set) => ({
  cardFocus: null,
  cardsOnBoard: [
    { ...availableCards['cloboulon'], x: 0, y: 1, isOwned: true },
    { ...availableCards['gold-hure'], x: 1, y: 1, isOwned: true },
    { ...availableCards['bouclefeuille'], x: 2, y: 1, isOwned: true },
    { ...availableCards['sacrechene'], x: 3, y: 1, isOwned: true },
    { ...availableCards['grognard:0'], x: 4, y: 1, isOwned: true },
    { ...availableCards['grognard:1'], x: 5, y: 1, isOwned: true },
    { ...availableCards['cloboulon'], x: 0, y: 4, isOwned: false },
    { ...availableCards['cloboulon'], x: 1, y: 4, isOwned: false },
    { ...availableCards['cloboulon'], x: 2, y: 4, isOwned: false },
    { ...availableCards['cloboulon'], x: 3, y: 4, isOwned: false },
    { ...availableCards['cloboulon'], x: 4, y: 4, isOwned: false },
    { ...availableCards['cloboulon'], x: 5, y: 4, isOwned: false },
  ] as Game.CardWithPosition[],
  setCardFocus: (card) => set(() => ({ cardFocus: card })),
}))
