import { useDrag } from 'react-dnd'
import { ItemSidebarM } from '../types/ItemSidebar.types'

const ItemSidebar = ({ item }: { item: ItemSidebarM }) => {
  const [, dragRef] = useDrag({
    type: 'addItem',
    item: item,
  })

  return (
    <div ref={dragRef}>
      <img
        src={
          item.type === 'item'
            ? './image/items/' + item.name + '.png'
            : './image/building/' + item.name + '.png'
        }
        alt={item.name}
        className="w-[50px] h-[50px]"
      />
    </div>
  )
}

export default ItemSidebar
