import { configureStore } from '@reduxjs/toolkit'
import board from './BoardSlice/slice'

const store = configureStore({
  reducer: { board },
})

export default store

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
