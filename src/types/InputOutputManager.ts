import { Recipe } from './Recipe'
import { Item } from './Item.types'

export interface InputOutputManager {
  inputItem?: Item[]
  outputItem?: Item[]
  nameBuild?: string
  recipe?: Recipe
  type: string
  positionX: number
  positionY: number
}
