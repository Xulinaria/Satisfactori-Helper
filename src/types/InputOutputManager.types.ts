import { Recipe } from './recipe.types'
import { Item } from './item.types'

export interface InputOutputManager {
  inputItem?: Item[]
  outputItem?: Item[]
  nameBuild?: string
  recipe?: Recipe
  type: string
  positionX: number
  positionY: number
}
