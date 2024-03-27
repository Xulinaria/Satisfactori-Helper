import { useDrop } from 'react-dnd'
import { InputOutputManager } from '../models/InputOutputManager'
import { useAppDispatch } from '../redux/hooks'
import ItemComponent from './Item'
import Build from './Build'
import { ItemSidebarM } from '../models/ItemSidebar'
import { addBuild, addItem } from '../redux/BoardSlice/slice'
import { Item } from '../models/Item'

const Column = ({
  column,
  index,
}: {
  column: InputOutputManager[]
  index: number
}) => {
  const dispatch = useAppDispatch()

  const [, dropRefItem] = useDrop({
    accept: 'addItem',
    drop(item: ItemSidebarM) {
      if (item.type === 'item') {
        const itemCurrent: Item = {
          name: item.name,
        }
        dispatch(addItem({ item: itemCurrent, positionX: index }))
      } else {
        dispatch(
          addBuild({ type: item.type, nameBuild: item.name, positionX: index })
        )
      }
    },
  })
  return (
    <div
      className="flex flex-col w-[350px] p-[10px] border-r border-blue-300"
      ref={dropRefItem}
    >
      {column.map((item, index) =>
        item.type === 'item' ? (
          item.outputItem !== undefined && (
            <ItemComponent item={item.outputItem[0]} key={index} />
          )
        ) : (
          <Build inputOutputManager={item} key={index} />
        )
      )}
    </div>
  )
}

export default Column
