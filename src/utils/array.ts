/**
 * The grid is a __square grid__
 * @param {number} min - The __minimal value__
 * @param {number} max - The __maximal value__
 * @returns {Array<{x: number, y: number}>} An array of positions
 */
export function generatePositions(min: number, max: number): Position[]
/**
 * The grid is a __rectangular grid__
 * @param {number} minX - The __minimal x value__
 * @param {number} maxX - The __maximal x value__
 * @param {number} minY - The __minimal y value__
 * @param {number} maxY - The __maximal y value__
 * @returns {Array<{x: number, y: number}>} An array of positions
 */
export function generatePositions(
  minX: number,
  maxX: number,
  minY: number,
  maxY: number
): Position[]

export function generatePositions(
  minX: number,
  maxX: number,
  minY: number = minX,
  maxY: number = maxX
): Position[] {
  const positions: Array<Position> = []

  for (let x = minX; x <= maxX; x++) {
    for (let y = minY; y <= maxY; y++) {
      positions.push({ x, y })
    }
  }

  return positions
}
