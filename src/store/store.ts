// src/store/index.ts
import { combineReducers } from 'redux'
import { listReducer } from './reducer'

const rootReducer = combineReducers({
  list : listReducer
  // chat: chatReducer
})

export type RootState = ReturnType<typeof rootReducer>