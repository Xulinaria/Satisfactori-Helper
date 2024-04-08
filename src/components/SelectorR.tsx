import { useState } from 'react'
import recipes from '../data/recipes.json'
import { Recipe } from '../types/Recipe'
import { useAppDispatch } from '../redux/hooks'
import { setRecipe } from '../redux/BoardSlice/slice'

const selectRecipe = (type: string) => {
  switch (type) {
    case 'smelter':
      return recipes.smelter
    case 'foundry':
      return recipes.foundry
    case 'constructor':
      return recipes.constructor
    default:
      return [{ inputItem: [{ name: 'none' }], outputItem: [{ name: 'none' }] }]
  }
}

const Selector = ({
  type,
  currentRecipe,
  positionX,
  positionY,
}: {
  type: string
  currentRecipe: Recipe
  positionX: number
  positionY: number
}) => {
  const recipes = selectRecipe(type)

  const dispatch = useAppDispatch()

  const handleClick = (recipe: Recipe) => {
    dispatch(
      setRecipe({ positionX: positionX, positionY: positionY, recipe: recipe })
    )
  }

  const [open, setOpen] = useState(false)
  return (
    <div className="">
      <div
        className="flex justify-between border border-neutral-300 p-2"
        onClick={() => {
          setOpen(!open)
        }}
      >
        <div className="">
          {currentRecipe.inputItem.map((item) => (
            <img
              className="w-[50px]"
              src={'./image/items/' + item.name + '.png'}
              alt=""
            />
          ))}
        </div>
        <div className="">
          {currentRecipe.outputItem.map((item) => (
            <img
              className="w-[50px]"
              src={'./image/items/' + item.name + '.png'}
              alt=""
            />
          ))}
        </div>
      </div>
      {open &&
        recipes.map((recipe) => (
          <div
            className="flex justify-between border border-neutral-300 rounded-2xl p-1 mt-2"
            onClick={() => handleClick(recipe)}
          >
            <div className="">
              {recipe.inputItem.map((item) => (
                <img
                  className="w-[50px]"
                  src={'./image/items/' + item.name + '.png'}
                  alt=""
                />
              ))}
            </div>
            <div className="">
              {recipe.outputItem.map((item) => (
                <img
                  className="w-[50px]"
                  src={'./image/items/' + item.name + '.png'}
                  alt=""
                />
              ))}
            </div>
          </div>
        ))}
    </div>
  )
}

export default Selector
