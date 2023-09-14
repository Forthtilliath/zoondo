import {generatePositions} from '@/utils/array'

declare global {
  /* The grid is a square grid */
  export function generatePositions(minX: number, maxX: number): Game.Position[]
  /* The grid is a rectangular grid */
  export function generatePositions(
    minX: number,
    maxX: number,
    minY?: number,
    maxY?: number
  ): Game.Position[]

}
export {}