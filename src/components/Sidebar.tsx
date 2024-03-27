import ItemSidebar from './ItemSidebar'

const Sidebar = () => {
  const dataOre = [
    { name: 'iron_ore', type: 'item' },
    { name: 'copper_ore', type: 'item' },
    { name: 'limestone_ore', type: 'item' },
    { name: 'coal_ore', type: 'item' },
    { name: 'caterium_ore', type: 'item' },
    { name: 'bauxite_ore', type: 'item' },
    { name: 'quartz_crystal_ore', type: 'item' },
    { name: 'sulfur_ore', type: 'item' },
    { name: 'uranium_ore', type: 'item' },
  ]

  const dataBuild = [
    { name: 'smelter', type: 'build' },
    { name: 'foundry', type: 'build' },
    { name: 'constructor', type: 'build' },
    { name: 'assembler', type: 'build' },
    { name: 'manufacturer', type: 'build' },
    { name: 'oil_refinery', type: 'build' },
    { name: 'packager', type: 'build' },
    { name: 'blender', type: 'build' },
    { name: 'hadron_collider', type: 'build' },
  ]

  return (
    <div className="border-r border-neutral-300 min-w-[200px] w-[200px] p-[10px] h-screen">
      <h2>Ore</h2>
      <div className="flex flex-wrap gap-3">
        {dataOre.map((ore) => (
          <ItemSidebar item={ore} key={ore.name} />
        ))}
      </div>

      <h2>Building</h2>
      <div className="flex flex-wrap gap-3">
        {dataBuild.map((build) => (
          <ItemSidebar item={build} key={build.name} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
