import Board from './components/Board'
import Sidebar from './components/Sidebar'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex">
        <Sidebar />
        <Board />
      </div>
    </DndProvider>
  )
}
