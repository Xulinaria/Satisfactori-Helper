import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { InputOutputManager } from '../../types/inputOutputManager.types'
import { Item } from '../../types/item.types'
import { Recipe } from '../../types/recipe.types'

const initialState: InputOutputManager[][] = []

const Board = createSlice({
  name: 'baord',
  initialState,
  reducers: {
    createRow(state) {
      state.push([])
    },
    addItem(state, actions: PayloadAction<{ item: Item; positionX: number }>) {
      const inputOutputManager: InputOutputManager = {
        inputItem: [actions.payload.item],
        outputItem: [actions.payload.item],
        type: 'item',

        positionX: actions.payload.positionX,
        positionY: state[actions.payload.positionX].length,
      }

      state[actions.payload.positionX].push(inputOutputManager)
    },
    addBuild(
      state,
      actions: PayloadAction<{
        type: string
        nameBuild: string
        positionX: number
      }>
    ) {
      const inputOutputManager: InputOutputManager = {
        nameBuild: actions.payload.nameBuild,
        type: actions.payload.type,
        positionX: actions.payload.positionX,
        positionY: state[actions.payload.positionX].length,
      }

      state[actions.payload.positionX].push(inputOutputManager)
    },
    setRecipe(
      state,
      actions: PayloadAction<{
        positionX: number
        positionY: number
        recipe: Recipe
      }>
    ) {
      const inputOutputManager =
        state[actions.payload.positionX][actions.payload.positionY]
      inputOutputManager.recipe = actions.payload.recipe
    },
    // setItem(state, actions: PayloadAction<{ item: Item; index: number }>) {
    //   const inputOutputManager = state[1][actions.payload.index]
    //   inputOutputManager.inputItem = actions.payload.item
    // },
    // calculateOutput(state, actions: PayloadAction<number>) {
    //   const inputOutputManager = state[1][actions.payload]
    //   if (
    //     inputOutputManager.inputItem?.name ===
    //     inputOutputManager.recipe?.inputItem.name
    //   ) {
    //     inputOutputManager.outputItem = inputOutputManager.recipe?.outputItem
    //   } else {
    //     const item: Item = {
    //       name: 'aboba',
    //     }
    //     inputOutputManager.outputItem = item
    //   }
    // },
  },
})

export default Board.reducer

export const {
  createRow,
  addItem,
  addBuild,
  setRecipe,
  // setItem,
  // calculateOutput,
} = Board.actions
