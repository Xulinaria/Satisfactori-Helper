import { useAppSelector } from '../redux/hooks'
import CreateRow from './NewColumn'

import Column from './Column'

const Board = () => {
  const board = useAppSelector((state) => state.board)

  return (
    <div className="py-2 flex ">
      {board.map((column, index) => (
        <Column column={column} index={index} key={index} />
      ))}
      <CreateRow />
    </div>
  )
}

export default Board
