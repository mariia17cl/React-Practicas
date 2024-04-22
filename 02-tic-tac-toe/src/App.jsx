import { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS } from './constants.js'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { saveGameToStorage, resetGameStorage } from './logic/storage/index.js'
// queremos dibujar el tablero
function App () {
  // tablero un array de 9 elementos
  // const board = Array(9).fill(null)
  // lo pasamos como si fuera un estado
  // para guardar la partida
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board') // es lento
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  // creamos un estado para saber de quien  es el turno
  // empieza la X
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  // creamos un estado para saber quien ha ganado
  // null  es que no ganador, y el false que hay empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage()
  }

  const updateBoard = index => {
    // no actualizamos esta posición
    // si ya tiene algo o tiene un ganador
    if (board[index] || winner) return
    // actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // guardar aquí partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })
    // en el local storage lo que puedes guardar esa un String
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    // revisar si hay ganador
    const newWiner = checkWinnerFrom(newBoard)
    if (newWiner) {
      confetti()
      setWinner(newWiner) // actualiza el estado
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  }
  // cada vez que se renderiza el componente hay un nuevo useEffect
  // quiero que solo se ejecute una vez
  // useEffect(() => {
  //   console.log('useEffect')
  // })
  useEffect(
    () => {
      console.log('useEffect')
    },
    [
      /* aqui se pueden poner las dependencias, cada vez que se cambie de: turno, ganador... */
    ]
  )

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className='game'>
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          )
        })}
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
