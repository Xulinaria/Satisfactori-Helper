import InputOutputManager from './inputOutputManager'

class Board {
  board: InputOutputManager[][]

  constructor() {
    this.board = []

    this.createRow()
  }

  addBlock(row: number, inputOutputManager: InputOutputManager) {
    const currentRow = this.board[row]

    currentRow.push(inputOutputManager)
    this.board[row] = currentRow
  }

  createRow() {
    this.board.push([])
  }
}

export default Board
