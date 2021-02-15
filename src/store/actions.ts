import { List, ADD_LIST, DELETE_LIST, ListActionTypes } from './types'

export function addList(task: List): ListActionTypes {
  return {
    type: ADD_LIST,
    payload: task
  }
}

export function deleteLIst(item : number): ListActionTypes {
  return {
    type: DELETE_LIST,
    meta: {
      id: item
    }
  }
}