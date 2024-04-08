import { Item } from '../types/Item'

const ItemC = ({ item }: { item: Item }) => {
  return (
    <div className="flex border border-neutral-300 p-2 rounded-2xl justify-between mb-2">
      <div className="border border-neutral-300 p-2 rounded-2xl">
        <img
          src={'./image/items/' + item.name + '.png'}
          alt="ironOre"
          className="w-[50px] h-[50px]"
        />
      </div>
      <div className="">item</div>
      <div className="border border-neutral-300 p-2 rounded-2xl">
        <img
          src={'./image/items/' + item.name + '.png'}
          alt="ironOre"
          className="w-[50px] h-[50px]"
        />
      </div>
    </div>
  )
}

export default ItemC
