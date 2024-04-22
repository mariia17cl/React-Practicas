import { WINNER_COMBOS } from '../constants.js'

export const checkWinnerFrom = boardToCheck => {
  // revisamos todos las combinaciones ganadoras para ver X u O  anó
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] && // 0 hay x or o
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  // si no hay ganador
  return null
}

export const checkEndGame = newBoard => {
  return newBoard.every(square => square !== null)
}
