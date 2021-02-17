import {
  ListState,
  ListActionTypes,
  ADD_LIST,
  DELETE_LIST
} from './types'

const initialState: ListState = {
  lists: [{
    id: 1,
    title: 'Sample',
    task: 'This is a sample',
    isDone : false
  },
  {
    id: 2,
    title: 'Sample2',
    task: 'This is a sample2',
    isDone : true
  }]
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