import {
  ListState,
  ListActionTypes,
  ADD_LIST,
  DELETE_LIST
} from './types'

const initialState: ListState = {
  lists: []
}

export function listReducer(
  state = initialState,
  action: ListActionTypes
): ListState {
  switch (action.type) {
    case ADD_LIST:
      return {
        lists: [...state.lists, action.payload]
      }
    case DELETE_LIST:
      return {
        lists: state.lists.filter(
          list => list.id !== action.meta.id
        )
      }
    default:
      return state
  }
}