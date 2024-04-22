export const saveGameToStorage = ({ board, turn }) => {
  // guardar aqui la partida
  // en el local storage lo que puedes guardar esa un String
  window.localStorage.setItem('board', JSON.stringify(board))
  window.localStorage.setItem('turn', turn)
}

export const resetGameStorage = () => {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}
